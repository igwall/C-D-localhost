import React from 'react'
import styles from './CollaborationInterface.styles'
import Icon from '../../UI/Icon/Icon'
import {connect} from 'react-redux'
import RecipeRequestsPendingList from './Lists/recipeRequestPending.list'
import RecipeRequestForm from './Forms/recipeRequest.form'
import MyRecipesList from './Lists/recipes.list'

@connect(store => {
  return {
    currentUser: store.currentUser
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
    switch (content) {
      case 'collaboratorPage': {
        return (
          <div />
        )
      }
      case 'collaboratorEditForm': {
        return (
          <div />
        )
      }
      case 'recipeRequestsValidatedList': {
        return (
          <MyRecipesList recipes={[]} />
        )
      }
      case 'recipeRequestsPendingList': {
        return (
          <RecipeRequestsPendingList recipes={[]} />
        )
      }
      case 'recipeRequestForm': {
        return (
          <RecipeRequestForm />
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
