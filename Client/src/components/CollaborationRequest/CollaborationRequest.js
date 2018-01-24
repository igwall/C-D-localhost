import React from 'react'
import styles from './CollaborationRequest.styles'
import {connect} from 'react-redux'
import {dateFormatter} from '../../util/dateFormatter'
import Button from '../UI/Button/Button'
import { sendCollaborationRequest } from '../../store/actions/collaborationRequest.action'
import { setProfile } from '../../services/Authentication.services'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstNameValid: false,
      lastNameValid: false,
      motivationValid: false
    }
    this.checkFirstName = this.checkFirstName.bind(this)
    this.checkLastName = this.checkLastName.bind(this)
    this.checkMotivation = this.checkMotivation.bind(this)
  }

  componentDidMount () {
    setProfile(true)
  }

  submit () {
    if (this.props.currentUser.collaborationRequest === '') {
      const firstname = this.firstname.value
      const lastname = this.lastname.value
      const motivation = this.motivation.value
      const userId = this.props.currentUser._id
      const request = {
        firstname: firstname,
        lastname: lastname,
        motivation: motivation,
        user: userId
      }
      sendCollaborationRequest(request).then(data => {
      }).catch(err => {
        console.log(err)
      })
    }
  }

  checkFirstName () {
    if (this.firstname.value !== '') {
      this.setState({firstNameValid: true})
    } else {
      this.setState({firstNameValid: false})
    }
  }

  checkLastName () {
    if (this.lastname.value !== '') {
      this.setState({lastNameValid: true})
    } else {
      this.setState({lastNameValid: false})
    }
  }

  checkMotivation () {
    if (this.motivation.value.length > 20) {
      this.setState({motivationValid: true})
    } else {
      this.setState({motivationValid: false})
    }
  }

  isFormValid () {
    return this.state.firstNameValid &&
      this.state.lastNameValid &&
      this.state.motivationValid &&
      this.props.currentUser.collaborationRequest === ''
  }

  render () {
    const request = this.props.currentUser.collaborationRequest

    return (<div className='host'>
      <div className='sidebar'>
        <div className='sidebar-title'>Qu'est-ce qu'un collaborateur ?</div>
        <div className='sidebar-text'>
          Et interdum acciderat, ut siquid in penetrali secreto nullo citerioris jlrhglzkehgkjgzhlzrhgiurhiurihgrieh vitae ministro praesente paterfamilias uxori susurrasset in aurem, velut Amphiarao referente aut Marcio, quondam vatibus inclitis, postridie disceret imperator. Ideoque etiam parietes arcanorum soli conscii timebantur.
        </div>
      </div>
      <div className='content'>
        {
          request === ''
            ? <div className='form'>
              <div className='title'>DEMANDE DE COLLABORATION</div>
              <form className='form-large' onSubmit={this.submit}>
                <div className='form-group'>
                  <div className='form-column form-column-left'>
                    <div className='input-group'>
                      <div className='input-label'>Prénom d'artiste</div>
                      <input type='text' placeholder='Julien' ref={i => { this.firstname = i }} onChange={this.checkFirstName} />
                    </div>
                    <div className='input-group'>
                      <div className='input-label'>Nom d'artiste</div>
                      <input type='text' placeholder='Barthélemy' ref={i => { this.lastname = i }} onChange={this.checkLastName} />
                    </div>
                  </div>
                  <div className='form-column form-column-right'>
                    <div className='input-group'>
                      <div className='input-label'>Pourquoi souhaitez vous collaborer avec Compose & Dance ? </div>
                      <textarea type='text' placeholder='(20 caractères min...)' ref={i => { this.motivation = i }} onChange={this.checkMotivation} />
                    </div>
                  </div>
                </div>
                <div className='add-button add-button-large'>
                  <Button
                    bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
                    block
                    disabled={!this.isFormValid()}
                    onClick={() => this.submit()}>
                    CONFIRMER LA DEMANDE
                  </Button>
                </div>
              </form>
            </div>
            : <div className='user-request'>
              <div className='title'>VOTRE DEMANDE DE COLLABORATION</div>
              <div className='request'>
                <div className='request-fullname'>{request.firstname} {request.lastname}</div>
                <div className='request-motivation'>{request.motivation}</div>
                <div className='request-date'>Émise le {dateFormatter(request.createdAt)}</div>
              </div>
            </div>
        }
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
