import React from 'react'
import styles from './Library.styles'
import {connect} from 'react-redux'
import Collaborator from '../Collaborator/Collaborator'
import {setCollaborators} from '../../store/actions/collaborators.action'
import { setReferences, setHotVideos } from '../../store/actions/library.action'
import News from './composent/News'
import Outside from './composent/OutSide'
import ComposeDanse from './composent/ComposeDanse'
import Collaborators from './composent/Collaborators'

@connect(store => {
  return {
    collaborators: store.collaborators.elements,
    hotVideos: store.hotVideos.elements,
    references: store.references.elements
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
    setReferences().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setHotVideos().then(() => {
      this.setState({content: 'news'})
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
    const {collaboratros, hotVideos, references} = this.props
    switch (content) {
      case 'news': {
        return (
          <News hotVideos={hotVideos} />
        )
      }
      case 'out': {
        return (
          <Outside references={references}/>
        )
      }
      case 'composeDanse': {
        return (
          <ComposeDanse />
        )
      }
      case 'collaborators': {
        return (
          <Collaborators popoverManager={this.props.popoverManager} collaboratros={collaboratros}/>
        )
      }
      default: {
        return (
          <div />
        )
      }
    }
  }
  render () {
    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className= 'admin-info'>
          <div className = 'picture'><img className = 'pic' src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/07c/16c/3d00735.jpg' alt=''/></div>
          <div className = 'admin-name'><a href="/artist"> Muriel PIQUE </a></div>
        </div>
        <div className='listChoose'>
          <div className='button' onClick={() => this.displayComposeDanse()}>
            <div className='button-text'>Qu'est ce que c'est compose & danse</div>
          </div>
          <div className='button' onClick={() => this.displayCollaboratos()}>
            <div className='button-text'>Artistes invités</div>
          </div>
          <div className='button' onClick={() => this.displayOutSide()}>
            <div className='button-text'>Ailleurs nous aimons...</div>
          </div>
          <div className='button' onClick={() => this.displayNews()}>
            <div className='button-text'>En ce moment,</div>
          </div>
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
