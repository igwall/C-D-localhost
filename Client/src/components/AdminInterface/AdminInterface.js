import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'
import { setAdministrators } from '../../store/actions/administrators.action'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRecipes } from '../../store/actions/recipes.action'
import { setRooms } from '../../store/actions/room.action'
import { setQuotes } from '../../store/actions/quote.action'
import { setReferences, setHotVideos } from '../../store/actions/library.action'
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
import LibraryPanel from './Panels/library.panel'

@connect(store => {
  return {
    materials: store.materials.elements,
    recipes: store.recipes.elements,
    collaborators: store.collaborators.elements,
    administrators: store.administrators.elements,
    rooms: store.rooms.elements,
    collaborationRequests: store.collaborationRequests.elements,
    quotes: store.quotes.elements,
    references: store.references.elements,
    hotVideos: store.hotVideos.elements,
    currentAdmin: store.currentAdmin
  }
})

export default class AdminInterface extends React.Component {
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
    if (this.props.currentAdmin.role === 'administrator') {
      setAdministrators().then(() => {
      }).catch(err => {
        console.error(err)
      })
      setQuotes().then(() => {
      }).catch(err => {
        console.error(err)
      })
      setReferences().then(() => {
      }).catch(err => {
        console.error(err)
      })
      setHotVideos().then(() => {
      }).catch(err => {
        console.error(err)
      })
    }
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

  displayLibraryPanel () {
    this.setState({content: 'libraryPanel'})
  }

  displayArtistPanel () {
    this.setState({content: 'artistPanel'})
  }

  displayContent () {
    const content = this.state.content
    const { quotes, references, hotVideos, materials, recipes, rooms, collaborators, administrators, collaborationRequests } = this.props
    const pendingRecipes = recipes.filter(recipe => {
      if (recipe !== null) return recipe.validated === false
      else return false
    })
    const validatedRecipes = recipes.filter(recipe => {
      if (recipe !== null) return recipe.validated === true
      else return false
    })
    switch (content) {
      case 'recipesList': {
        return (
          <RecipesListAdmin popoverManager={this.props.popoverManager} materials={materials} recipes={validatedRecipes} rooms={rooms} />
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
          <AdministratorsList popoverManager={this.props.popoverManager} administrators={administrators.filter(admin => admin.role !== 'administrator')} />
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
          <RecipeRequests popoverManager={this.props.popoverManager} materials={materials} recipes={pendingRecipes} rooms={rooms} />
        )
      }
      case 'libraryPanel': {
        return (
          <LibraryPanel popoverManager={this.props.popoverManager} quotes={quotes} references={references} hotVideos={hotVideos} />
        )
      }
      case 'artistPanel': {
        return (
          <div>Nothing for the moment</div>
        )
      }
      default: {
        return <div />
      }
    }
  }

  render () {
    const currentAdmin = this.props.currentAdmin
    return (<div className='host'>
      <div className='sidebar'>
        <div className='title-group'>
          <div className='title'>ADMINISTRATION</div>
          <div className='logout-button' onClick={() => adminLogout()}>DÉCONNEXION</div>
        </div>
        <div className='panel panel-recipes'>
          <div className='panel-title'>Compositions</div>
          <div className='panel-buttons'>
            <div className='button' onClick={() => this.displayRecipesList()}>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES COMPOSITIONS</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeForm()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVELLE COMPOSITION</div>
            </div>
            <div className='button' onClick={() => this.displayRecipeRequests()}>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>VOIR LES COMPOSITIONS PROPOSÉES</div>
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
              <div className='button-text'>DEMANDES DE COLLABORATION</div>
            </div>
          </div>
        </div>
        {
          currentAdmin.role === 'administrator'
            ? <div>
              <div className='panel panel-artist'>
                <div className='panel-title'>Page Artiste Auteur</div>
                <div className='panel-buttons'>
                  <div className='button' onClick={() => this.displayArtistPanel()}>
                    <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                    <div className='button-text'>MODIFIER LA PAGE ARTISTE AUTEUR</div>
                  </div>
                </div>
              </div>
              <div className='panel panel-library'>
                <div className='panel-title'>Bibliothèque et Citations</div>
                <div className='panel-buttons'>
                  <div className='button' onClick={() => this.displayLibraryPanel()}>
                    <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                    <div className='button-text'>MODIFIER LA BIBLIOTHÈQUE</div>
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
            : undefined
        }
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
