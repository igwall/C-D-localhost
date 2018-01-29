import React from 'react'
import styles from './forms.styles'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import { addHotVideo } from '../../../store/actions/library.action'

export default class HotVideoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      titleValid: false,
      linkValid: false,
      added: ''
    }
    this.submit = this.submit.bind(this)
    this.checkTitle = this.checkTitle.bind(this)
    this.checkLink = this.checkLink.bind(this)
  }

  isFormValid () {
    return this.state.titleValid &&
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
      const hotVideo = {
        title: this.title.value,
        youtube_link: this.link.value
      }
      addHotVideo(hotVideo).then(hotVideo => {
        this.title.value = ''
        this.link.value = ''
        this.setState({added: hotVideo.title})
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVELLE VIDEO A LA UNE</div>
        <form className='form-large' onSubmit={this.submit}>
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>La vidéo "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Titre</div>
            <input placeholder='Titre de la vidéo' ref={i => { this.title = i }} onChange={this.checkTitle} />
          </div>
          <div className='input-group'>
            <div className='input-label'>Lien YouTube</div>
            <input placeholder='' ref={i => { this.link = i }} onChange={this.checkLink} />
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              AJOUTER VIDEO
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
