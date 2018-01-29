import React from 'react'
import styles from './composent.styles'
import {connect} from 'react-redux'
import Collaborator from '../../Collaborator/Collaborator'
import {setCollaborators} from '../../../store/actions/collaborators.action'
@connect(store => {
  return {
    collaborators: store.collaborators.elements
  }
})

export default class News extends React.Component {
  componentDidMount () {
    setCollaborators().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  displayCollaborator (collaborator) {
    console.log(collaborator)
    this.props.popoverManager.setRenderedComponent(
      <Collaborator collaborator= {collaborator} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  chooseCollaborator (id) {
    const {collaborators} = this.props
    this.displayCollaborator(collaborators.filter(collaborator => collaborator._id === id)[0])
  }
  render () {
    console.log(this.props.collaborators)
    const collaborators = this.props.collaborators
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>Collaborateurs</h2></div>
          <div className = 'collaborator-list'>
            <div className = 'collaborator-table-title'>  Artistes invités </div>
            <ul>
              {
                collaborators.map((collaborator, i) =>
                  <li className='list-element' key={i}>
                    <a onClick={() => this.chooseCollaborator(collaborator._id)}><div className = 'collaborator'><div className='element'>
                      <div className='element-infos'>
                        <div className='link-container'>
                          <div className='element-picture'><img src={collaborator.picture} alt='' width='75px' max-height='75px' /></div>
                          <div className='element-description'>
                            <div className='element-title'>{collaborator.firstname + ' ' + collaborator.lastname}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                    </div>
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
