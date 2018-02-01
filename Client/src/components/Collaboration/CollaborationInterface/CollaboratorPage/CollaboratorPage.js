import React from 'react'
import { connect } from 'react-redux'
import styles from './CollaboratorPage.styles'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class CollaboratorPage extends React.Component {
  render () {
    const collaborator = this.props.collaborator
    let description = collaborator.description
    let bio = collaborator.bio
    let link = collaborator.link
    if (description === '') {
      description = "Vous n'avez pas encore indiqué de description."
    }
    if (bio === '') {
      bio = "Vous n'avez pas encore indiqué de bio."
    }
    if (link === '') {
      link = "Vous n'avez pas encore indiqué de site / blog."
    }
    console.log(this.props.collaborator.video)
    return (
      <div className='host'>
        <div className='title'>MA PAGE D'ARTISTE INVITE</div>
        <div className='collaborator-infos'>
          <div className='infos infos-left'>
            <div className='picture'>
              <img src={collaborator.picture} alt="Artiste invité" width='200px' height='200px' />
            </div>
            <div className='name'>{collaborator.firstname + ' ' + collaborator.lastname}</div>
          </div>
          <div className='infos infos-right'>
            <div className='field field-description'>
              <div className='label label-description'>Description</div>
              <div className='text text-description'>{description}</div>
            </div>
            <div className='field field-bio'>
              <div className='label label-bio'>Bio</div>
              <div className='text text-bio'>{bio}</div>
            </div>
            <div className='field field-link'>
              <div className='label label-link'>Site / Blog</div>
              <div className='text text-link'>{link}</div>
            </div>
            <div className='field field-video'>
              <div className='label label-video'>Vidéo de présentation</div>
              <div className = 'video'>
                <iframe id="video-iframe" title ='Vidéo de présentation' width='600' height='300' src={collaborator.video}></iframe>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
