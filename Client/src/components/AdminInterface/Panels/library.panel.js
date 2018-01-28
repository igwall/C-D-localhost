import React from 'react'
import styles from './panels.styles'
import Icon from '../../UI/Icon/Icon'
// import Button from '../../UI/Button/Button'
// import constants from '../../../constants'
import QuotesList from '../Lists/quotes.list'
import QuoteForm from '../Forms/quotes.form'
import ReferencesList from '../Lists/references.list'
import ReferencesForm from '../Forms/reference.form'

export default class LibraryPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  displayEnCeMoment () {
    this.setState({content: 'enCeMoment'})
  }

  displayReferencesList () {
    this.setState({content: 'referencesList'})
  }

  displayReferenceForm () {
    this.setState({content: 'referenceForm'})
  }

  displayQuotesList () {
    this.setState({content: 'quotesList'})
  }

  displayQuoteForm () {
    this.setState({content: 'quoteForm'})
  }

  displayContent () {
    const content = this.state.content
    const { quotes, references } = this.props
    switch (content) {
      case 'enCeMoment': {
        return (
          <div>Nothing for the moment</div>
        )
      }
      case 'referencesList': {
        return (
          <ReferencesList popoverManager={this.props.popoverManager} references={references} />
        )
      }
      case 'referenceForm': {
        return (
          <ReferencesForm />
        )
      }
      case 'quotesList': {
        return (
          <QuotesList popoverManager={this.props.popoverManager} quotes={quotes} />
        )
      }
      case 'quoteForm': {
        return (
          <QuoteForm />
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
            <div className='panel-group-title'>En ce moment</div>
            <div className='button-group'>
              <div className='button' onClick={() => this.displayVideosList()}>
                <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
                <div className='button-text'>LISTE DES VIDEOS A LA UNE</div>
              </div>
              <div className='button' onClick={() => this.displayVideosForm()}>
                <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
                <div className='button-text'>NOUVELLE VIDEO A LA UNE</div>
              </div>
            </div>
          </div>
          <div className='panel-group'>
            <div className='panel-group-title'>Ailleurs nous aimons</div>
            <div className='button-group'>
              <div className='button' onClick={() => this.displayReferencesList()}>
                <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
                <div className='button-text'>LISTE DES REFERENCES</div>
              </div>
              <div className='button' onClick={() => this.displayReferenceForm()}>
                <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
                <div className='button-text'>NOUVELLE REFERENCE</div>
              </div>
            </div>
          </div>
          <div className='panel-group'>
            <div className='panel-group-title'>Citations</div>
            <div className='button-group'>
              <div className='button' onClick={() => this.displayQuotesList()}>
                <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
                <div className='button-text'>LISTE DES CITATIONS</div>
              </div>
              <div className='button' onClick={() => this.displayQuoteForm()}>
                <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
                <div className='button-text'>NOUVELLE CITATION</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
