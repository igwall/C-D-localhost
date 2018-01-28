import React from 'react'
import { adminLogin, storeAdminToken } from '../services/AdminAuthentication.services'
import { Redirect } from 'react-router-dom'
import Icon from '../components/UI/Icon/Icon'
import PageLayout from '../layouts/page'
import constants from '../constants'

export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      wrongCredentials: false,
      usernameValid: false,
      passwordValid: false
    }
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin () {
    if (this.formIsValid()) {
      adminLogin(this.username.value, this.password.value).then((response) => {
        storeAdminToken(response.token)
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

  checkUsername () {
    let res = this.username.value.length > 0
    this.setState({
      wrongCredentials: false,
      usernameValid: res
    })
  }

  formIsValid () {
    return this.state.usernameValid && this.state.passwordValid
  }

  render () {
    const { from } = { from: { pathname: '/admin' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <PageLayout>
        <div className='host'>
          <h1>Administration</h1>
          {
            this.state.wrongCredentials
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='error-message'>Mauvaise combinaison nom d'utilisateur / Mot de passe</div>
                </div>
              </div>
              : undefined
          }

          <form onSubmit={this.submitLogin}>
            <label>
            Nom d'utilisateur
            </label>
            <input type='text' placeholder="Nom d'utilisateur" onChange={this.checkUsername.bind(this)} ref={(u) => {
              this.username = u
            }} />
            <label>
            Mot de Passe
            </label>
            <input type='password' placeholder='Password' onChange={this.checkPassword.bind(this)} ref={(p) => {
              this.password = p
            }} />
            <div className={`button ${this.formIsValid() ? '' : 'disabled'}`} onClick={this.submitLogin.bind(this)}>Connexion</div>
          </form>
          <style jsx>
            {`
        .host {
          position: absolute;
          top: 75px;
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

        `}
          </style>
        </div>
      </PageLayout>
    )
  }
}
