import React from 'react'
import styles from './forms.styles'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import { addReference } from '../../../store/actions/references.action'

export default class QuoteForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      titleValid: false,
      descriptionValid: false,
      linkValid: false,
      added: ''
    }
    this.submit = this.submit.bind(this)
    this.checkTitle = this.checkTitle.bind(this)
    this.checkDescription = this.checkDescription.bind(this)
    this.checkLink = this.checkLink.bind(this)
  }

  isFormValid () {
    return this.state.titleValid &&
      this.state.descriptionValid &&
      this.state.linkValid
  }

  checkTitle () {
    this.setState({added: ''})
    if (this.title.value !== '') {
      this.setState({titleValid: true})
    } else {
      this.setState({titleValid: false})
    }
  }

  checkDescription () {
    this.setState({added: ''})
    if (this.description.value !== '') {
      this.setState({descriptionValid: true})
    } else {
      this.setState({descriptionValid: false})
    }
  }

  checkLink () {
    this.setState({added: ''})
    if (this.link.value !== '') {
      this.setState({linkValid: true})
    } else {
      this.setState({linkValid: false})
    }
  }

  submit (e) {
    if (e) e.preventDefault()
    if (this.isFormValid()) {
      const reference = {
        title: this.title.value,
        description: this.description.value,
        link: this.link.value
      }
      addReference(reference).then(reference => {
        this.title.value = ''
        this.description.value = ''
        this.link.value = ''
        this.setState({added: reference.title})
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <form className='form-large' onSubmit={this.submit}>
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>La référence "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Titre</div>
            <input placeholder='' ref={i => { this.title = i }} onChange={this.checkTitle} />
          </div>
          <div className='input-group'>
            <div className='input-label'>Description</div>
            <input placeholder='' ref={i => { this.description = i }} onChange={this.checkDescription} />
          </div>
          <div className='input-group'>
            <div className='input-label'>Lien</div>
            <input placeholder='http://youtube.com/' ref={i => { this.link = i }} onChange={this.checkLink} />
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              AJOUTER REFERENCE
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
