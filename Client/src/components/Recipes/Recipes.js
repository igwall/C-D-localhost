import React from 'react'
import styles from './Recipes.styles'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import {connect} from 'react-redux'
import {dateFormatter} from '../../util/dateFormatter'
import { setRecipes } from '../../store/actions/recipes.action'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRooms } from '../../store/actions/room.action'

@connect(store => {
  return {
    recipes: store.recipes.elements.reverse(),
    materials: store.materials.elements,
    rooms: store.rooms.elements
  }
})

export default class Recipes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingRecipes: [],
      selectedMaterials: [],
      selectedRooms: [],
      selectedNumber: '',
      deleted: ''
    }
    this.handleSelectMaterialChange = this.handleSelectMaterialChange.bind(this)
    this.handleSelectRoomChange = this.handleSelectRoomChange.bind(this)
    this.handleSelectNumberChange = this.handleSelectNumberChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  componentDidMount () {
    setRecipes().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setMaterials().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setCollaborators().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  displayRecipesList () {
    this.setState({content: 'recipesList'})
  }

  displayCollaboratorsList () {
    this.setState({content: 'collaboratorsList'})
  }

  displayMaterialsList () {
    this.setState({content: 'materialsList'})
  }

  displayMaterialForm () {
    this.setState({content: 'materialForm'})
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

  // Select Number methods
  setNumberSelect () {
    const selectNumbers = [
      {value: 'solo', label: 'Solo'},
      {value: 'duo', label: 'Duo'},
      {value: 'trio', label: 'Trio'},
      {value: 'quatuor', label: 'Quatuor'},
      {value: 'quintuor', label: 'Quintuor'},
      {value: 'more', label: 'Plus de 5 personnes...'}
    ]
    return selectNumbers
  }

  filterRecipesWithNumber (recipes) {
    const selectedNumber = this.state.selectedNumber
    if (selectedNumber) {
      let newRecipes = []
      recipes.map(recipe => {
        let added = false

        let bool = false
        if (recipe.number === selectedNumber) {
          bool = true
        }
        if (bool && !added) {
          newRecipes.push(recipe)
          added = true
        }
        return undefined
      })
      recipes = newRecipes
    }
    return recipes
  }

  handleSelectRoomChange (selectedOption) {
    this.setState({selectedRooms: selectedOption})
  }

  handleSelectNumberChange (selectedOption) {
    this.setState({selectedNumber: selectedOption})
  }

  filter (recipes) {
    recipes = this.filterRecipesWithMaterial(recipes)
    recipes = this.filterRecipesWithRoom(recipes)
    recipes = this.filterRecipesWithNumber(recipes)
    return recipes
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
    const { matchingRecipes, emptySearch, selectedMaterials, selectedRooms, selectedNumber } = this.state
    let recipes = this.props.recipes
    if (!emptySearch) {
      recipes = matchingRecipes
    } else {
      recipes = this.props.recipes
    }
    const selectRooms = this.setRoomSelect()
    const selectMaterials = this.setMaterialSelect()
    const selectNumber = this.setNumberSelect()
    recipes = this.filter(recipes)
    return (<div className='host'>
      <div className='sidebar'>
        <div className='sidebar-title'>LISTE DES COMPOSITIONS</div>
      </div>
      <div className= 'Main'>
        <ul className='list'>
          <div className='sort-bar'>
            <div className='sort sort-search'>
              <input type='text' className='search-bar' placeholder='Rechercher' ref={(input) => { this.input = input }} onChange={this.handleSearchChange} onFocus={this.handleFocus} />
            </div>
            <div className='sort sort-material'>
              <Select
                name='ingredient-select'
                value={selectedMaterials}
                placeholder='Trier par ingrédients'
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
            <div className='sort sort-number'>
              <Select
                id='number-select'
                placeholder='Nombre de participant'
                simpleValue
                clearable={true}
                value={selectedNumber}
                onChange={this.handleSelectNumberChange.bind(this)}
                options={selectNumber}
              />

            </div>
          </div>
          <div className='body'>
            {
              recipes.map((recipe, i) => {
                return (
                  <li className='list-element' key={i}>
                    <div className='element'>
                      <div className='element-infos'>
                        <Link to={`/recipes/${recipe._id}`}>
                          <div className='link-container'>
                            <div className='element-picture'><img src={recipe.thumbnail} alt='' width='75px' max-height='75px' /></div>
                            <div className='element-description'>
                              <div className='element-title'>{recipe.title}</div>
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
                              <div className='element-date'>Créée le {dateFormatter(recipe.createdAt)}</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </div>
        </ul>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
