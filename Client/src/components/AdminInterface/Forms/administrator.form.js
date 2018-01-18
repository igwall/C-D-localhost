import React from 'react'
import styles from './forms.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import { adminRegister } from '../../../services/AdminAuthentication.services'

export default class AdministratorForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      passwordStrengthValid: false,
      passwordMatchValid: false,
      nameValid: false,
      usernameExists: false,
      added: ''
    }
    this.submit = this.submit.bind(this)
  }

  checkName () {
    this.setState({added: ''})
    if (this.name.value.length > 3) {
      this.setState({nameValid: true})
      if (this.props.administrators.filter(admin => admin.username === this.name.value)[0] !== undefined) {
        this.setState({usernameExists: true})
      } else {
        this.setState({usernameExists: false})
      }
    } else {
      this.setState({nameValid: false})
    }
  }

  checkPasswordMatch () {
    let res = this.password1.value === this.password2.value
    this.setState({
      passwordMatchValid: res,
      added: ''
    })
  }

  checkPasswordStrength () {
    let res = this.password1.value.length > 5
    this.setState({
      passwordStrengthValid: res,
      added: ''
    })
    this.checkPasswordMatch()
  }

  checkForm () {
    let errors = [
      this.checkPasswordMatch() ? undefined : 'Passwords don\'t match',
      this.checkPasswordStrength() ? undefined : ''
    ].filter(c => c)

    this.setState({
      errors: errors,
      formValid: errors.length === 0
    })
  }

  submit () {
    if (this.isFormValid()) {
      adminRegister(this.name.value, this.password1.value).then(() => {
        const username = this.name.value
        this.setState({added: username})
      }).catch(err => {
        console.error(err)
      })
    }
  }

  isFormValid () {
    return this.state.nameValid &&
      this.state.passwordMatchValid &&
      this.state.passwordStrengthValid &&
      !this.state.usernameExists
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVEL ADMINISTRATEUR</div>
        <form onSubmit={this.submit.bind(this)}>
          {
            this.state.usernameExists
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='error-message'>Cet administrateur existe déjà. Choisissez un autre nom.</div>
                </div>
              </div>
              : undefined
          }
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>L'administrateur "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Nom d'administrateur</div>
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
          </div>
          <div className='input-group'>
            <div className='input-label'>Mot de passe</div>
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
          </div>
          <div className='input-group'>
            <div className='input-label'>Confirmation mot de passe</div>
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
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() && this.state.added === '' ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid() || this.state.added !== ''}
              onClick={() => this.submit()}>
              AJOUTER ADMINISTRATEUR
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
