import React from 'react'
import styles from './forms.styles'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import { addQuote } from '../../../store/actions/quote.action'

export default class QuoteForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textValid: false,
      authorValid: false,
      added: ''
    }
    this.submit = this.submit.bind(this)
    this.checkText = this.checkText.bind(this)
    this.checkAuthor = this.checkAuthor.bind(this)
  }

  isFormValid () {
    return this.state.textValid &&
      this.state.authorValid
  }

  checkText () {
    this.setState({added: ''})
    if (this.text.value !== '') {
      this.setState({textValid: true})
    } else {
      this.setState({textValid: false})
    }
  }

  checkAuthor () {
    this.setState({added: ''})
    if (this.author.value !== '') {
      this.setState({authorValid: true})
    } else {
      this.setState({authorValid: false})
    }
  }

  submit (e) {
    if (e) e.preventDefault()
    if (this.isFormValid()) {
      const quote = {
        author: this.author.value,
        text: this.text.value
      }
      addQuote(quote).then(quote => {
        this.text.value = ''
        this.author.value = ''
        this.setState({added: quote.text})
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVELLE CITATION</div>
        <form className='form-large' onSubmit={this.submit}>
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>La citation "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Citation</div>
            <input placeholder='Citation' ref={i => { this.text = i }} onChange={this.checkText} />
          </div>
          <div className='input-group'>
            <div className='input-label'>Auteur</div>
            <input placeholder='' ref={i => { this.author = i }} onChange={this.checkAuthor} />
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              AJOUTER CITATION
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
