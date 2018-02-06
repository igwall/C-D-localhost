import React from 'react'
import styles from './Contact.styles'
import {addMail} from '../../store/actions/mail.action'
import ReCAPTCHA from 'react-google-recaptcha'
import Icon from '../UI/Icon/Icon'

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emailValid: false,
      nameValid: false,
      sujetValid: false,
      messageValid: false,
      mailSend: false
    }
  }
  checkName () {
    let res = this.name.value.length > 0
    this.setState({
      nameValid: res
    })
  }

  checkSujet () {
    let res = this.sujet.value.length > 0
    this.setState({
      sujetValid: res
    })
  }

  checkMessage () {
    let res = this.message.value.length > 19
    this.setState({
      messageValid: res
    })
  }
  checkEmail () {
    let res = this.email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    this.setState({
      emailValid: res
    })
  }

  checkForm () {
    let errors = [
      this.checkEmail() ? undefined : 'Email is not valid'
    ].filter(c => c)

    this.setState({
      errors: errors,
      formValid: errors.length === 0
    })
  }

  confirmSend () {
    this.email.value = null
    this.name.value = null
    this.numero.value = null
    this.sujet.value = null
    this.message.value = null
    this.checkEmail()
    this.checkName()
    this.checkSujet()
    this.checkMessage()
  }

  submitForm () {
    if (this.formIsValid()) {
      const mail = {
        name: this.name.value,
        email: this.email.value,
        number: this.numero.value,
        sujet: this.sujet.value,
        message: this.message.value
      }
      addMail(mail).then((response) => {
        this.setState({ mailSend: true })
        this.confirmSend()
      }).catch((err) => {
        console.error(err)
        if (err.response.data === 'Username already exists') {
          this.setState({usernameExists: true})
        } else if (err.response.data === 'Email already exists') {
          this.setState({emailExists: true})
        }
      })
    }
  }

  formIsValid () {
    return this.state.emailValid &&
    this.state.nameValid &&
    this.state.sujetValid &&
    this.state.messageValid
  }
  onChange (value) {
    console.log('Captcha value:', value)
  }

  componentDidMount () {
    this.checkEmail()
    this.checkName()
    this.checkSujet()
    this.checkMessage()
  }
  render () {
    return (<div className='host'>
      <div className='sideBarre'>
        <div className='PageTitle'><h1>Nous contacter</h1></div>
        <div className='Description'> Un concept qui se développe petit à petit sur différents sites : les champs forment un texte à trous cohérent, que l’utilisateur doit remplir. Un bon moyen de faire participer activement l’utilisateur, sans devoir remplir un formulaire rébarbatif. </div>
      </div>
      <div className='Main'>
        {
          this.state.mailSend
            ? <div className='error-panel'>
              <div className='error-content'>
                <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='green' /></div>
                <div className='error-message'>Votre message a bien été envoyé</div>
              </div>
            </div>
            : undefined
        }
        <div className='Forms'>
          <div className='Forms-Item'>
            <div className='item'>
              <label>Email</label>
              { this.email
                ? this.email.value.length > 5 && !this.state.emailValid
                  ? <span className='error'>Adresse email invalide</span>
                  : null
                : null
              }
              { this.email
                ? this.email.value.length < 6 && !this.state.emailValid
                  ? <span className='error'>Champs requis</span>
                  : null
                : null
              }
              <input
                type='text'
                placeholder='Email'
                onChange={this.checkEmail.bind(this)}
                ref={n => { this.email = n }}
              />
            </div>
            <div className='item'>
              <label>Nom et Prénom</label>
              { this.name
                ? !this.state.nameValid
                  ? <span className='error'>Champs requis</span>
                  : null
                : null
              }
              <input
                type='text'
                placeholder='Nom et Prénom'
                onChange={this.checkName.bind(this)}
                ref={n => { this.name = n }}
              />
            </div>
            <div className='item'>
              <label>Numéro de telephone</label>
              <input
                type='text'
                placeholder='Numéro de telephone'
                // onChange={this.checkName.bind(this)}
                ref={n => { this.numero = n }}
              />
            </div>
            <div className='sujet'>
              <label>Sujet</label>
              { this.sujet
                ? !this.state.sujetValid
                  ? <span className='error'>Champs requis</span>
                  : null
                : null
              }
              <input
                type='text'
                placeholder='Sujet'
                onChange={this.checkSujet.bind(this)}
                ref={n => { this.sujet = n }}
              />
            </div>
            <div className='Message'>
              <label>Message</label>
              { this.message
                ? !this.state.messageValid
                  ? <span className='error'>Champs requis</span>
                  : null
                : null
              }
              <textarea type='text' placeholder='(20 caractères min...)' onChange={this.checkMessage.bind(this)} ref={i => { this.message = i }} />
            </div>
          </div>
          <div className='recaptcha'>
            <ReCAPTCHA
              ref='recaptcha'
              sitekey='6LdVVEMUAAAAAGicWJOAO_ViaZ3WFerCJC7Sg2JF'
              onChange={this.onChange}
            />
          </div>
          <div className={`button ${this.formIsValid() ? '' : 'disabled'}`} onClick={this.submitForm.bind(this)}>Envoyer</div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
