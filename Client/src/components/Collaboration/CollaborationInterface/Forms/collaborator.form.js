import React from 'react'
import styles from './forms.styles'
import Icon from '../../../UI/Icon/Icon'
import Button from '../../../UI/Button/Button'
import { updateCollaborator } from '../../../../store/actions/collaborators.action'

export default class CollaboratorForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updated: false,
      bioValue: this.props.bio,
      descriptionValue: this.props.description,
      linkValue: this.props.link,
      videoValue: this.props.video
    }
    this.submit = this.submit.bind(this)
    this.getVideoId = this.getVideoId.bind(this)
  }

  submit (e) {
    if (e) e.preventDefault()
    const bio = this.bio.value
    const description = this.description.value
    const link = this.link.value
    let video = ''
    if (this.video.value !== '') {
      const videoId = this.getVideoId(this.video.value)
      video = 'http://www.youtube.com/embed/' + videoId
    }
    const newCollaborator = {
      description: description,
      bio: bio,
      link: link,
      video: video
    }
    if (this.isFormValid()) {
      updateCollaborator(this.props._id, newCollaborator).then(() => {
        this.setState({ updated: true })
        this.resetForm()
      }).catch(err => {
        console.log(err)
      })
    }
  }

  getVideoId (url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    var match = url.match(regExp)
    if (match && match[2].length === 11) {
      return match[2]
    } else {
      return 'error'
    }
  }

  resetForm () {
    this.setState({
      bioValid: false,
      descriptionValid: false,
      linkValid: false,
      videoValid: false
    })
    this.bio.value = this.props.bio
    this.description.value = this.description.value
    this.link.value = this.link.value
    this.video.value = this.video.value
  }

  isFormValid () {
    return true
  }

  render () {
    const { bio, description, link, video } = this.props
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>MODIFER MA PAGE ARTISTE INVITE</div>
        <form className='form-large' onSubmit={this.submit}>
          {
            this.state.updated
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>Votre page d'artiste invité a été modifié avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='form-group'>
            <div className='form-column form-column-left'>
              <div className='input-group'>
                <div className='input-label'>Description</div>
                <input type='text' defaultValue={description} placeholder='Artiste / Chorégraphe / ...' ref={i => { this.description = i }} onChange={this.checkDescription} />
              </div>
              <div className='input-group'>
                <div className='input-label'>Bio</div>
                <textarea type='text' defaultValue={bio} placeholder='Ma bio...' ref={i => { this.bio = i }} />
              </div>

            </div>
            <div className='form-column form-column-right'>
              <div className='input-group'>
                <div className='input-label'>Site / Blog</div>
                <input type='text' defaultValue={link} placeholder='http://monsiteperso.fr' ref={i => { this.link = i }} />
              </div>
              <div className='input-group'>
                <div className='input-label'>Vidéo de présentation</div>
                <input type='text' defaultValue={video} placeholder='http://youtube.com/v=....' ref={i => { this.video = i }} />
              </div>
            </div>
          </div>
          <div className='add-button add-button-large'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              MODIFIER MA PAGE D'ARTISTE INVITE
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
