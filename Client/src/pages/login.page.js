import React from 'react'
import { login, storeToken } from '../services/Authentication.services'
import { Redirect, Link } from 'react-router-dom'
import Icon from '../components/UI/Icon/Icon'
import PageLayout from '../layouts/page'
import constants from '../constants'

export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      wrongCredentials: false,
      emailValid: false,
      passwordValid: false
    }
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin () {
    if (this.formIsValid()) {
      login(this.email.value, this.password.value).then((response) => {
        storeToken(response.token)
        this.setState({ redirectToReferrer: true })
      }).catch((err) => {
        this.setState({wrongCredentials: true})
        console.error(err)
      })
    }
  }

  checkPassword () {
    let res = this.password.value.length > 0
    this.setState({
      wrongCredentials: false,
      passwordValid: res
    })
  }

  checkEmail () {
    let res = this.email.value.length > 0
    this.setState({
      wrongCredentials: false,
      emailValid: res
    })
  }

  formIsValid () {
    return this.state.emailValid && this.state.passwordValid
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <PageLayout>
        <div className='host'>
          <h1>Connexion</h1>
          {
            this.state.wrongCredentials
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='error-message'>Mauvaise combinaison Email / Mot de passe</div>
                </div>
              </div>
              : undefined
          }

          <form onSubmit={this.submitLogin}>
            <label>
            Email
            </label>
            <input type='text' placeholder='Email' onChange={this.checkEmail.bind(this)} ref={(e) => {
              this.email = e
            }} />
            <label>
            Mot de Passe
            </label>
            <input type='password' placeholder='Password' onChange={this.checkPassword.bind(this)} ref={(p) => {
              this.password = p
            }} />
            <div className={`button ${this.formIsValid() ? '' : 'disabled'}`} onClick={this.submitLogin.bind(this)}>Connexion</div>
          </form>
          <div className='register'>
            Pas de compte Compose & Dance ? <span><Link to='/register'>S'enregistrer</Link></span>
          </div>
          <style jsx>
            {`
        .host {
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px;
          width: 380px;
          height: 100%;
          margin-left: calc(50% - 190px);
        }

        h1 {
          margin-bottom: 20px;
        }

        .error-panel {
          border: 1px solid ${constants.ERROR_PANEL_BORDER_COLOR};
          background: ${constants.ERROR_PANEL_COLOR};
          width: 380px;
        }

        .error-content {
          display: flex;
          align-items: center;
          padding: 10px;
        }

        .error-message {
          padding-left: 20px;
        }

        form {
          width: 100%;
          padding-top: 15px;
        }

        label {
          font-size: 20px;
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
          width: 100%;
          border-radius: 5px;
          background-color: #61bd4f;
          box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          margin-bottom: 15px;
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
        
        .register {
          padding-top: 20px;
        }
        
        .register span {
          font-weight: bold;
          text-decoration: underline;
        }
        `}
          </style>
        </div>
      </PageLayout>
    )
  }
}
