import React from 'react'
import styles from './CollaborationInterface.styles'
import Icon from '../../UI/Icon/Icon'
import {connect} from 'react-redux'
import RecipeRequestsPendingList from './Lists/recipeRequestPending.list'
import RecipeRequestForm from './Forms/recipeRequest.form'
import MyRecipesList from './Lists/recipes.list'
import CollaboratorPage from './CollaboratorPage/CollaboratorPage'
import CollaboratorForm from './Forms/collaborator.form'
import { setRecipes } from '../../../store/actions/recipes.action'
import { setMaterials } from '../../../store/actions/material.action'
import { setRooms } from '../../../store/actions/room.action'
import { setCollaborator } from '../../../store/actions/collaborators.action'

@connect(store => {
  return {
    currentUser: store.currentUser,
    currentCollaborator: store.currentCollaborator,
    recipes: store.recipes.elements,
    materials: store.materials.elements,
    rooms: store.rooms.elements
  }
})

export default class CollaborationInterface extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  componentDidMount () {
    setRecipes().then(() => {
    }).catch(err => {
      console.log(err)
    })
    setMaterials().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setCollaborator(this.props.currentUser.collaborator).then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  displayCollaboratorPage () {
    this.setState({content: 'collaboratorPage'})
  }

  displayCollaboratorEditForm () {
    this.setState({content: 'collaboratorEditForm'})
  }

  displayRecipeRequestsValidated () {
    this.setState({content: 'recipeRequestsValidatedList'})
  }

  displayRecipeRequestsPending () {
    this.setState({content: 'recipeRequestsPendingList'})
  }

  displayRecipeRequestForm () {
    this.setState({content: 'recipeRequestForm'})
  }

  displayContent () {
    const content = this.state.content
    const { recipes, rooms, materials, currentCollaborator } = this.props
    const pendingRecipes = currentCollaborator.recipes.filter(recipe => {
      if (recipe !== null) return recipe.validated === false
      else return false
    })
    const validatedRecipes = currentCollaborator.recipes.filter(recipe => {
      if (recipe !== null) return recipe.validated === true
      else return false
    })

    switch (content) {
      case 'collaboratorPage': {
        return (
          <CollaboratorPage collaborator={currentCollaborator} />
        )
      }
      case 'collaboratorEditForm': {
        return (
          <CollaboratorForm {...currentCollaborator} />
        )
      }
      case 'recipeRequestsValidatedList': {
        return (
          <MyRecipesList recipes={validatedRecipes} />
        )
      }
      case 'recipeRequestsPendingList': {
        return (
          <RecipeRequestsPendingList recipes={pendingRecipes} />
        )
      }
      case 'recipeRequestForm': {
        return (
          <RecipeRequestForm recipes={recipes} materials={materials} rooms={rooms} currentCollaborator={currentCollaborator} />
        )
      }
      default: {
        return <div />
      }
    }
  }

  render () {
    return (<div className='host'>
      <div className='sidebar'>
        <div className='title-group'>
          <div className='title'>INTERFACE COLLABORATION</div>
        </div>
        <div className='panel'>
          <div className='panel-title'>Ma page Artiste Invité</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayCollaboratorPage()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER MA PAGE ARTISTE INVITE</div>
            </div>
            <div className='button' onClick={() => this.displayCollaboratorEditForm()}>
              <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
              <div className='button-text'>MODIFIER MA PAGE ARTISTE INVITE</div>
            </div>
          </div>
        </div>
        <div className='panel'>
          <div className='panel-title'>Compositions</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayRecipeRequestsValidated()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>MES COMPOSITIONS ACCEPTEES</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeRequestsPending()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>MES COMPOSITIONS EN ATTENTE</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeRequestForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>PROPOSER UNE COMPOSITION</div>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        {this.displayContent()}
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
