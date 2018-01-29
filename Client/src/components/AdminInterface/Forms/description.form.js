import React from 'react'
import styles from './forms.styles'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'

export default class DescriptionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textAreaValid: false,
      added: ''
    }
    this.submit = this.submit.bind(this)
    this.checkTextArea = this.checkTextArea.bind(this)
  }

  isFormValid () {
    return this.state.textAreaValid
  }

  checkTextArea () {
    this.setState({added: ''})
    if (this.textarea.value !== '') {
      this.setState({textAreaValid: true})
    } else {
      this.setState({textAreaValid: false})
    }
  }

  submit (e) {
    if (e) e.preventDefault()
    if (this.isFormValid()) {
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
                  <div className='validation-message'>L'ingrédient "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Qu'est-ce que Compose & Danse ?</div>
            <textarea placeholder='...' ref={i => { this.textarea = i }} onChange={this.checkTextArea} />
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              MODIFIER DESCRIPTION
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
