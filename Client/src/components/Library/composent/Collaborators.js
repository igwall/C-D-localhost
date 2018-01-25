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
    this.props.popoverManager.setRenderedComponent(
      <Collaborator {...collaborator} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  chooseCollaborator (id) {
    const {collaborators} = this.props
    this.displayCollaborator(collaborators.filter(collaborator => collaborator.id === id)[0])
  }
  render () {
    const collaborator = {
      id: 0,
      prenom: 'Toto'
    }
    const collaborators = [ collaborator, collaborator, collaborator, collaborator, collaborator, collaborator ]
    collaborators[0].id = 1
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
                  <li key={i}>
                    <a onClick={() => this.displayCollaborator('1')}><div className = 'collaborator'>
                      <div className = 'collaborator-picture'>
                      </div>
                      <div className="collaborator-info">
                        <div className="collaborator-name">Lara Fabian</div>
                        <div className = "collaborator-description">Artiste Enseignant Chercheur</div>
                      </div>
                    </div></a>
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
