import React from 'react'
import styles from './panels.styles'
import Icon from '../../UI/Icon/Icon'
// import Button from '../../UI/Button/Button'
// import constants from '../../../constants'
import DescriptionForm from '../Forms/description.form'
import DemarcheForm from '../Forms/demarche.form'
import CollaborationTextForm from '../Forms/collaborationText.form'

export default class LibraryPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  displayDescription () {
    this.setState({content: 'description'})
  }

  displayDemarche () {
    this.setState({content: 'demarche'})
  }

  displayEnCeMoment () {
    this.setState({content: 'enCeMoment'})
  }

  displayAilleurs () {
    this.setState({content: 'ailleurs'})
  }

  displayCollaboration () {
    this.setState({content: 'collaboration'})
  }

  displayQuotes () {
    this.setState({content: 'quotes'})
  }

  displayContent () {
    const content = this.state.content
    switch (content) {
      case 'description': {
        return (
          <DescriptionForm description='' />
        )
      }
      case 'demarche': {
        return (
          <DemarcheForm demarche='' />
        )
      }
      case 'enCeMoment': {
        return (
          <div>Nothing for the moment</div>
        )
      }
      case 'ailleurs': {
        return (
          <div>Nothing for the moment</div>
        )
      }
      case 'collaboration': {
        return (
          <CollaborationTextForm collaboration='' />
        )
      }
      case 'quotes': {
        return (
          <div>Nothing for the moment</div>
        )
      }
      default: {
        return <div>Nothing for the moment</div>
      }
    }
  }

  render () {
    return (<div className='host'>
      <div className='main'>
        <div className='panel-title'>MODIFIER LA BIBLIOTHÈQUE</div>
        <div className='content'>
          {this.displayContent()}
        </div>
      </div>
      <div className='sidebar'>
        <div className='panel'>
          <div className='panel-group'>
            <div className='panel-group-title'>Bibliothèque</div>
            <div className='button-group'>
              <div className='button' onClick={() => this.displayDescription()} >
                <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                <div className='button-text'>TEXTE DESCRIPTIF</div>
              </div>
              <div className='button' onClick={() => this.displayDemarche()}>
                <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                <div className='button-text'>DEMARCHE ARTISTIQUE</div>
              </div>
              <div className='button' onClick={() => this.displayEnCeMoment()}>
                <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                <div className='button-text'>EN CE MOMENT</div>
              </div>
              <div className='button' onClick={() => this.displayAilleurs()}>
                <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
                <div className='button-text'>AILLEURS NOUS AIMONS</div>
              </div>
            </div>
          </div>
          <div className='panel-group'>
            <div className='panel-group-title'>Textes & Citations</div>
            <div className='button-group'>
              <div className='button' onClick={() => this.displayCollaboration()}>
                <div className='button-icon'><Icon name='edit' color='' fontSize='' /></div>
                <div className='button-text'>POURQUOI COLLABORER</div>
              </div>
              <div className='button' onClick={() => this.displayQuotes()}>
                <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
                <div className='button-text'>CITATIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
