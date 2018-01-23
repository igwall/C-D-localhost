import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'
import { setAdministrators } from '../../store/actions/administrators.action'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRecipes } from '../../store/actions/recipes.action'
import { setRooms } from '../../store/actions/room.action'
import { setCollaborationRequests } from '../../store/actions/collaborationRequest.action'
import { adminLogout } from '../../services/AdminAuthentication.services'
import Icon from '../UI/Icon/Icon'
import RecipesListAdmin from './Lists/recipes.list'
import MaterialsList from './Lists/materials.list'
import CollaboratorsList from './Lists/collaborators.list'
import AdministratorsList from './Lists/administrators.list'
import RecipeForm from './Forms/recipe.form'
import MaterialForm from './Forms/material.form'
import AdministratorForm from './Forms/administrator.form'
import RecipeRequests from './Lists/recipeRequests.list'
import CollaborationRequests from './Lists/collaborationRequests.list'

@connect(store => {
  return {
    materials: store.materials.elements,
    recipes: store.recipes.elements,
    collaborators: store.collaborators.elements,
    administrators: store.administrators.elements,
    rooms: store.rooms.elements,
    collaborationRequests: store.collaborationRequests.elements
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
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
    setAdministrators().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setCollaborationRequests().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  displayRecipesList () {
    this.setState({content: 'recipesList'})
  }

  displayRecipeForm () {
    this.setState({content: 'recipeForm'})
  }

  displayRecipeRequests () {
    this.setState({content: 'recipeRequests'})
  }

  displayCollaboratorsList () {
    this.setState({content: 'collaboratorsList'})
  }

  displayCollaboratorRequests () {
    this.setState({content: 'collaboratorRequests'})
  }

  displayMaterialsList () {
    this.setState({content: 'materialsList'})
  }

  displayMaterialForm () {
    this.setState({content: 'materialForm'})
  }

  displayAdministratorsList () {
    this.setState({content: 'administratorsList'})
  }

  displayAdministratorForm () {
    this.setState({content: 'administratorForm'})
  }

  displayContent () {
    const content = this.state.content
    const { materials, recipes, rooms, collaborators, administrators, collaborationRequests } = this.props
    switch (content) {
      case 'recipesList': {
        return (
          <RecipesListAdmin popoverManager={this.props.popoverManager} materials={materials} recipes={recipes} rooms={rooms} />
        )
      }
      case 'materialsList': {
        return (
          <MaterialsList popoverManager={this.props.popoverManager} materials={materials} />
        )
      }
      case 'collaboratorsList': {
        return (
          <CollaboratorsList popoverManager={this.props.popoverManager} collaborators={collaborators} />
        )
      }
      case 'administratorsList': {
        return (
          <AdministratorsList popoverManager={this.props.popoverManager} administrators={administrators} />
        )
      }
      case 'recipeForm': {
        return (
          <RecipeForm materials={materials} recipes={recipes} rooms={rooms} />
        )
      }
      case 'materialForm': {
        return (
          <MaterialForm materials={materials} />
        )
      }
      case 'administratorForm': {
        return (
          <AdministratorForm administrators={administrators} />
        )
      }
      case 'collaboratorRequests': {
        return (
          <CollaborationRequests popoverManager={this.props.popoverManager} collaborationRequests={collaborationRequests} />
        )
      }
      case 'recipeRequests': {
        return (
          <RecipeRequests recipes={recipes} />
        )
      }
      default: {
        return null
      }
    }
  }

  render () {
    return (<div className='host'>
      <div className='sidebar'>
        <div className='title-group'>
          <div className='title'>ADMINISTRATION</div>
          <div className='logout-button' onClick={() => adminLogout()}>DÉCONNEXION</div>
        </div>
        <div className='panel panel-recipes'>
          <div className='panel-title'>Recettes</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayRecipesList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES RECETTES</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVELLE RECETTE</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeRequests()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>VOIR LES RECETTES PROPOSÉES</div>
            </div>
          </div>
        </div>
        <div className='panel panel-materials'>
          <div className='panel-title'>Ingrédients</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayMaterialsList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES INGRÉDIENTS</div>
            </div>
            <div className='button' onClick={() => this.displayMaterialForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVEL INGRÉDIENT</div>
            </div>
          </div>
        </div>
        <div className='panel panel-collaborators'>
          <div className='panel-title'>Artistes Invités</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayCollaboratorsList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES ARTISTES INVITÉS</div>
            </div>
            <div className='button' onClick={() => this.displayCollaboratorRequests()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>DEMANDES DE COLLABORATIONS</div>
            </div>
          </div>
        </div>
        <div className='panel panel-administrators'>
          <div className='panel-title'>Modérateurs</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayAdministratorsList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES MODÉRATEURS</div>
            </div>
            <div className='button' onClick={() => this.displayAdministratorForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVEAU MODÉRATEUR</div>
            </div>
          </div>
        </div>
      </div>
      <div className='main'>
        {
          this.displayContent()
        }
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
