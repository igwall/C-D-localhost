import React from 'react'
import styles from './Library.styles'
import {connect} from 'react-redux'
import Collaborator from '../Collaborator/Collaborator'
import {setCollaborators} from '../../store/actions/collaborators.action'
import News from './composent/News'
import Outside from './composent/OutSide'
import ComposeDanse from './composent/ComposeDanse'
import Collaborators from './composent/Collaborators'

@connect(store => {
  return {
    collaborators: store.collaborators.elements
  }
})

export default class Library extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  componentDidMount () {
    setCollaborators().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  displayCollaborator (collaborator) {
    this.props.popoverManager.setRenderedComponent(
      <Collaborator {...collaborator} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  chooseCollaborator (id) {
    const {collaborators} = this.props
    this.displayCollaborator(collaborators.filter(collaborator => collaborator.id === id)[0])
  }
  displayNews () {
    this.setState({content: 'news'})
  }
  displayOutSide () {
    this.setState({content: 'out'})
  }
  displayComposeDanse () {
    this.setState({content: 'composeDanse'})
  }
  displayCollaboratos () {
    this.setState({content: 'collaborators'})
  }

  displayContent () {
    const content = this.state.content

    switch (content) {
      case 'news': {
        return (
          <News />
        )
      }
      case 'out': {
        return (
          <Outside />
        )
      }
      case 'composeDanse': {
        return (
          <ComposeDanse />
        )
      }
      case 'collaborators': {
        return (
          <Collaborators popoverManager={this.props.popoverManager}/>
        )
      }
      default: {
        return (
          <News />
        )
      }
    }
  }
  render () {
    // const collaborators = this.props.collaborators
    const collaborator = {
      id: 0,
      prenom: 'Toto'
    }
    const collaborators = [ collaborator, collaborator, collaborator, collaborator, collaborator, collaborator ]
    collaborators[0].id = 1
    // const books = [ 1, 2, 3, 4, 5, 6, 7 ]
    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className= 'admin-info'>
          <div className = 'picture'><img className = 'pic' src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/07c/16c/3d00735.jpg' alt=''/></div>
          <div className = 'admin-name'><a href="/artist"> Muriel PIQUE </a></div>
        </div>
        <div className='listChoose'>
          <div className = 'item' onClick={() => this.displayNews()}>En ce moment,</div>
          <div className = 'item' onClick={() => this.displayOutSide()}>Ailleurs nous aimons,</div>
          <div className = 'item' onClick={() => this.displayCollaboratos()}>Les collaborateurs</div>
          <div className = 'item' onClick={() => this.displayComposeDanse()}>Qu'est ce que c'est compose & danse</div>
        </div>
      </div>
      <div className = 'main'>
        <h1>BIBLIOTHÈQUE</h1>
        {this.displayContent()}
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
