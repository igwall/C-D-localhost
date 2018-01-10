import React from 'react'
import {register, storeToken} from '../services/Authentication.services'
import { Redirect } from 'react-router-dom'

export default class RegisterPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      passwordStrengthValid: false,
      passwordMatchValid: false,
      emailValid: false,
      nameValid: false,
      redirectToReferrer: false
    }
  }

  checkName () {
    let res = this.name.value.length > 3
    this.setState({
      nameValid: res
    })
  }

  checkPasswordMatch () {
    let res = this.password1.value === this.password2.value
    this.setState({
      passwordMatchValid: res
    })
  }

  checkPasswordStrength () {
    let res = this.password1.value.length > 5
    this.setState({
      passwordStrengthValid: res
    })
    this.checkPasswordMatch()
  }

  checkEmail () {
    let res = this.email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    this.setState({
      emailValid: res
    })
  }

  checkForm () {
    let errors = [
      this.checkPasswordMatch() ? undefined : 'Passwords don\'t match',
      this.checkPasswordStrength() ? undefined : '',
      this.checkEmail() ? undefined : 'Email is not valid'
    ].filter(c => c)

    this.setState({
      errors: errors,
      formValid: errors.length === 0
    })
  }

  submitForm () {
    if (this.formIsValid()) {
      register(this.name.value, this.email.value, this.password1.value).then((response) => {
        storeToken(response.token)
        this.setState({ redirectToReferrer: true })
      }).catch((err) => {
        console.error(err)
      })
    }
  }

  formIsValid () {
    return this.state.emailValid &&
      this.state.nameValid &&
      this.state.passwordMatchValid &&
      this.state.passwordStrengthValid
  }

  render () {
    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={'/'} />
      )
    }

    return (
      <div className='host'>
        <h1>Inscription</h1>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>Nom d'utilisateur</label>
          { this.name
            ? this.name.value.length > 1 && !this.state.nameValid
              ? <span className='error'>Nom d'utilisateur trop court : 4 caractères min.</span>
              : null
            : null
          }
          <input
            type='text'
            className={`${this.state.nameValid ? 'valid' : 'invalid'}`}
            placeholder='ex., Bob Radowsky'
            onChange={this.checkName.bind(this)}
            ref={n => { this.name = n }}
          />
          <label>Email</label>
          { this.email
            ? this.email.value.length > 5 && !this.state.emailValid
              ? <span className='error'>Adresse email invalide</span>
              : null
            : null
          }
          <input
            type='text'
            className={`${this.state.emailValid ? 'valid' : 'invalid'}`}
            placeholder='ex., monemail@hut.com'
            onChange={this.checkEmail.bind(this)}
            ref={e => { this.email = e }}
          />
          <label>Mot de passe</label>
          { this.password1
            ? this.password1.value.length > 1 && !this.state.passwordStrengthValid
              ? <span className='error'>Mot de passe trop court : 6 caractères min.</span>
              : null
            : null
          }
          <input
            type='password'
            className={`${this.state.passwordStrengthValid ? 'valid' : 'invalid'}`}
            placeholder='ex., ••••••••••••'
            onChange={this.checkPasswordStrength.bind(this)}
            ref={p1 => { this.password1 = p1 }}
          />
          <label>Confirmation mot de passe</label>
          { this.password2
            ? this.password2.value.length > 1 && !this.state.passwordMatchValid
              ? <span className='error'>Les mots de passe ne correspondent pas</span>
              : null
            : null
          }
          <input
            type='password'
            className={`${this.state.passwordStrengthValid && this.state.passwordMatchValid ? 'valid' : 'invalid'}`}
            placeholder='ex., ••••••••••••'
            onChange={this.checkPasswordMatch.bind(this)}
            ref={p2 => { this.password2 = p2 }}
          />
          <div className={`button ${this.formIsValid() ? '' : 'disabled'}`} disabled={this.formIsValid()} onClick={this.submitForm.bind(this)}>Sign up</div>
        </form>
        <style jsx>{`
          .host {
            padding: 10px;
            width: 380px;
            margin-left: calc(50% - 190px);
            padding-top: 50px;
          }
    
          form {
            width: 380px;
            margin-top: 30px;
          }
    
          label {
            font-size: 18px;
            font-weight: bold;
          }
          .error {
            font-size: 11px;
            line-height: 24px;
            color: #E91E63;
            float: right;
          }
    
          input {
            width: 100%;
            background-color: #eee;
            border: 1px solid rgba(0,0,0,0.2);
            padding: 8px;
            margin-top: 8px;
            font-size: 20px;
            border-radius: 5px;
            display: block;
            margin-bottom: 20px;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          }
    
          .button {
            cursor: pointer;
            height: 40px;
            font-weight: bold;
            line-height: 40px;
            text-align: center;
            color: white;
            width: 30%;
            border-radius: 5px;
            background-color: #61bd4f;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          }
    
          .button {
            display: inline-block;
          }
          .button.disabled {
            background-color: gray;
          }
    
          .forgottenPassword {
            margin-left: 20px;
          }
          input.valid {
            border-bottom: 3px solid #00E676;
          }
          input.invalid {
            border-bottom: 3px solid #E91E63;
          }
          `}</style>
      </div>
    )
  }
}
