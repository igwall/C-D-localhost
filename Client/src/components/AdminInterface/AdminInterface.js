import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRecipes } from '../../store/actions/recipes.action'
import Icon from '../UI/Icon/Icon'
import RecipesList from './Lists/recipes.list'
import MaterialsList from './Lists/materials.list'
import CollaboratorsList from './Lists/collaborators.list'
import AdministratorsList from './Lists/administrators.list'
import RecipeForm from './Forms/recipe.form'
import MaterialForm from './Forms/material.form'
import AdministratorForm from './Forms/administrator.form'

@connect(store => {
  return {
    materials: store.materials.elements,
    recipes: store.recipes.elements,
    collaborators: store.materials.elements
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
  }

  displayRecipesList () {
    this.setState({content: 'recipesList'})
  }

  displayRecipeForm () {
    this.setState({content: 'recipeForm'})
  }

  displayCollaboratorsList () {
    this.setState({content: 'collaboratorsList'})
  }

  displayCollaboratorForm () {
    this.setState({content: 'collaboratorForm'})
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
    switch (content) {
      case 'recipesList': {
        return (
          <RecipesList />
        )
      }
      case 'materialsList': {
        return (
          <MaterialsList />
        )
      }
      case 'collaboratorsList': {
        return (
          <CollaboratorsList />
        )
      }
      case 'administratorList': {
        return (
          <AdministratorsList />
        )
      }
      case 'recipeForm': {
        return (
          <RecipeForm />
        )
      }
      case 'materialForm': {
        return (
          <MaterialForm materials={this.props.materials} />
        )
      }
      case 'administratorForm': {
        return (
          <AdministratorForm />
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
        <div className='title'>ADMINISTRATION</div>
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
            <div className='button' onClick={() => this.displayCollaboratorForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>DEMANDES DE COLLABORATIONS</div>
            </div>
          </div>
        </div>
        <div className='panel panel-administrators'>
          <div className='panel-title'>Administrateurs</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayAdministratorsList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES ADMINISTRATEURS</div>
            </div>
            <div className='button' onClick={() => this.displayAdministratorForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVEL ADMINISTRATEUR</div>
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
