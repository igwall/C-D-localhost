import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import {dateFormatter} from '../../../util/dateFormatter'
import constants from '../../../constants'
import { deleteRecipe, updateRecipe } from '../../../store/actions/recipes.action'

export default class RecipeRequestsListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingRecipes: [],
      selectedMaterials: [],
      selectedRooms: [],
      deleted: '',
      accepted: ''
    }
    this.handleSelectMaterialChange = this.handleSelectMaterialChange.bind(this)
    this.handleSelectRoomChange = this.handleSelectRoomChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
  }

  deleteRecipe (recipe) {
    deleteRecipe(recipe._id).then(data => {
      this.setState({deleted: recipe.title})
      this.props.popoverManager.dismissPopover()
    }).catch(err => {
      console.log(err)
    })
  }

  acceptRecipeRequest (recipe) {
    const newRecipe = {
      validated: true
    }
    updateRecipe(recipe._id, newRecipe).then(() => {
      this.setState({accepted: recipe.title})
    }).catch(err => {
      console.log(err)
    })
  }

  // Input search methods
  handleFocus (event) {
    event.target.select()
  }

  handleSearchChange () {
    const input = this.input.value
    if (input !== '') {
      this.setState({emptySearch: false})
      this.setMatchingRecipes(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingRecipes: []
      })
    }
  }

  setMatchingRecipes (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingRecipes = []
    this.props.recipes.map(recipe => recipe.title.match(reg) ? newMatchingRecipes.push(recipe) : null)
    this.setState({matchingRecipes: newMatchingRecipes.slice()})
  }

  // Select Material methods
  setMaterialSelect () {
    const selectMaterials = []
    if (this.props.materials) {
      this.props.materials.map(material => {
        selectMaterials.push({ value: material._id, label: material.name })
        return undefined
      })
    }
    return selectMaterials
  }

  filterRecipesWithMaterial (recipes) {
    const selectedMaterials = this.state.selectedMaterials
    if (selectedMaterials.length > 0) {
      let newRecipes = []
      recipes.map(recipe => {
        let added = false
        selectedMaterials.map(materialSelect => {
          let bool = false
          recipe.materials.map(material => {
            if (material._id === materialSelect.value) bool = true
            return undefined
          })
          if (bool && !added) {
            newRecipes.push(recipe)
            added = true
          }
          return undefined
        })
        return undefined
      })
      recipes = newRecipes
    }
    return recipes
  }

  handleSelectMaterialChange (selectedOption) {
    this.setState({selectedMaterials: selectedOption})
  }

  // Select Room methods
  setRoomSelect () {
    const selectRooms = []
    if (this.props.rooms) {
      this.props.rooms.map(room => {
        selectRooms.push({ value: room._id, label: room.name })
        return undefined
      })
    }
    return selectRooms
  }

  filterRecipesWithRoom (recipes) {
    const selectedRooms = this.state.selectedRooms
    if (selectedRooms.length > 0) {
      let newRecipes = []
      recipes.map(recipe => {
        let added = false
        selectedRooms.map(roomSelect => {
          let bool = false
          recipe.rooms.map(room => {
            if (room._id === roomSelect.value) bool = true
            return undefined
          })
          if (bool && !added) {
            newRecipes.push(recipe)
            added = true
          }
          return undefined
        })
        return undefined
      })
      recipes = newRecipes
    }
    return recipes
  }

  handleSelectRoomChange (selectedOption) {
    this.setState({selectedRooms: selectedOption})
  }

  filter (recipes) {
    recipes = this.filterRecipesWithMaterial(recipes)
    recipes = this.filterRecipesWithRoom(recipes)
    return recipes
  }

  displayConfirmDelete (recipe) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER PROPOSITION DE COMPOSITION</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer la proposition de composition "{recipe.title}" ?</div>
        <div className='popup-actions'>
          <div className='action action-cancel'>
            <Button
              onClick={this.props.popoverManager.dismissPopover}
              color='white'
              bgColor={constants.BUTTON_BACKGROUND}
              hoverBgColor={constants.BUTTON_HOVER_BACKGROUND}
            >Annuler</Button>
          </div>
          <div className='action action-confirm'>
            <Button
              onClick={() => this.deleteRecipe(recipe)}
              bgColor={constants.BUTTON_DELETE_BACKGROUND}
              hoverBgColor={constants.BUTTON_DELETE_HOVER_BACKGROUND}
            >Supprimer</Button>
          </div>
        </div>
        <style jsx>{`
        .popup {
          width: 100%;
          height: 100%;
          padding: 10px;
        }

        .separator {
          border: 1px solid white;
          margin: 10px 0;
        }

        .popup-title {
          font-size: 18px;
          font-weight: bold;
        }

        .popup-text {
        }

        .popup-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .action {
          display: inline-block;
        }
      `}</style>
      </div>, 'small'
    )
    this.props.popoverManager.displayPopover()
  }

  getNumber (number) {
    switch (number) {
      case 'more': {
        return 'Plus de 5 personnes...'
      }
      default: {
        return number.charAt(0).toUpperCase() + number.slice(1)
      }
    }
  }

  render () {
    const { matchingRecipes, emptySearch, selectedMaterials, selectedRooms } = this.state
    let recipes = []
    if (!emptySearch) {
      recipes = matchingRecipes
    } else {
      recipes = this.props.recipes
    }
    const selectRooms = this.setRoomSelect()
    const selectMaterials = this.setMaterialSelect()
    recipes = this.filter(recipes)

    return (<div className='host'>
      <div className='list-title'>LISTE DES PROPOSITIONS DE RECETTES</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La proposition recette "{this.state.deleted}" a été supprimée avec succès !</div>
              </div>
            </div>
            : undefined
        }
        {
          this.state.accepted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La proposition recette "{this.state.accepted}" a été supprimée avec succès !</div>
              </div>
            </div>
            : undefined
        }
        <div className='sort-bar'>
          <div className='sort sort-search'>
            <input type='text' className='search-bar' placeholder='Rechercher' ref={(input) => { this.input = input }} onChange={this.handleSearchChange} onFocus={this.handleFocus} />
          </div>
          <div className='sort sort-material'>
            <Select
              name='ingredient-select'
              value={selectedMaterials}
              placeholder='Trier par composants'
              multi
              closeOnSelect={false}
              onChange={this.handleSelectMaterialChange.bind(this)}
              options={selectMaterials}
            />
          </div>
          <div className='sort sort-room'>
            <Select
              name='room-select'
              value={selectedRooms}
              placeholder='Trier par pièces'
              multi
              closeOnSelect={false}
              onChange={this.handleSelectRoomChange.bind(this)}
              options={selectRooms}
            />
          </div>
        </div>
        {
          recipes.map((recipe, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <Link to={`/recipes/${recipe._id}`}>
                      <div className='link-container'>
                        <div className='element-picture'><img src={recipe.thumbnail} alt='' width='75px' height='75px' /></div>
                        <div className='element-description'>
                          <div className='element-title'><p>{recipe.title}</p></div>
                          <div className='element-other'>Pièces : {
                            recipe.rooms.map((room, i) => {
                              let text = room.name
                              if (i + 1 !== recipe.rooms.length) text = text + ', '
                              return text
                            })
                          }
                          </div>
                          <div className='element-other'>Composants : {
                            recipe.materials.map((material, i) => {
                              let text = material.name
                              if (i + 1 !== recipe.materials.length) text = text + ', '
                              return text
                            })
                          }
                          </div>
                          <div className='element-other'>Nombre de participants : {this.getNumber(recipe.number)}</div>
                          <div className='element-text'>Proposée par : {recipe.collaborator.firstname + ' ' + recipe.collaborator.lastname}</div>
                          <div className='element-date'>Créée le {dateFormatter(recipe.createdAt)}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='element-actions'>
                    <div className='action' onClick={() => this.acceptRecipeRequest(recipe)}>
                      <div className='action-icon'><Icon name='check' fontSize='15px' color='rgb(0,255,0)' /></div>
                      <div className='action-text'>ACCEPTER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDelete(recipe)}>
                      <div className='action-icon'><Icon name='times' fontSize='15px' color='rgb(255,0,0)' /></div>
                      <div className='action-text'>REFUSER</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <style jsx>{styles}</style>
    </div>)
  }
}
