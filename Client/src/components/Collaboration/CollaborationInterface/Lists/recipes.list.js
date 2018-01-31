import React from 'react'
import styles from './lists.styles'
import { Link } from 'react-router-dom'
import {dateFormatter} from '../../../../util/dateFormatter'
import Select from 'react-select'

export default class MyRecipesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingRecipes: [],
      selectedMaterials: [],
      selectedRooms: [],
      deleted: ''
    }
    this.handleSelectMaterialChange = this.handleSelectMaterialChange.bind(this)
    this.handleSelectRoomChange = this.handleSelectRoomChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
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
      <div className='list-title'>MES COMPOSITIONS VALIDEES</div>
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
                          <div className='element-other'>Ingrédients : {
                            recipe.materials.map((material, i) => {
                              let text = material.name
                              if (i + 1 !== recipe.materials.length) text = text + ', '
                              return text
                            })
                          }
                          </div>
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
      </ul>
      <style jsx>{styles}</style>
    </div>)
  }
}
