import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
import constants from '../../../constants'
import { removeUserFromCollaborators } from '../../../store/actions/collaborators.action'

export default class CollaboratorsListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingCollaborators: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteCollaborator (collaborator) {
    removeUserFromCollaborators(collaborator._id).then(data => {
      this.setState({deleted: collaborator.firstname + ' ' + collaborator.lastname})
      this.props.popoverManager.dismissPopover()
    }).catch(err => {
      console.log(err)
    })
  }

  // Input search methods
  handleFocus (event) {
    event.target.select()
  }

  handleSearchChange () {
    const input = this.input.value
    if (input !== '') {
      this.setState({emptySearch: false})
      this.setMatchingCollaborators(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingCollaborators: []
      })
    }
  }

  setMatchingCollaborators (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingCollaborators = []
    this.props.collaborators.map(collaborator => {
      const fullname = collaborator.firstname + ' ' + collaborator.lastname
      if (collaborator.firstname.toLowerCase().match(reg) || collaborator.lastname.toLowerCase().match(reg) || fullname.toLowerCase().match(reg)) newMatchingCollaborators.push(collaborator)
      return undefined
    })
    this.setState({matchingCollaborators: newMatchingCollaborators.slice()})
  }

  displayConfirmDelete (collaborator) {
    const fullname = collaborator.firstname + ' ' + collaborator.lastname
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER ARTISTE INVITÉ</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer l'artiste invité "{fullname}" ?</div>
        <div className='popup-actions'>
          <div className='action action-cancel'>
            <Button
              onClick={this.props.popoverManager.dismissPopover}
              color='white'
              bgColor={constants.BUTTON_BACKGROUND}
              hoverBgColor={constants.BUTTON_HOVER_BACKGROUND}
            >Annuler</Button>
          </div>
          <div className='action action-confirm'>
            <Button
              onClick={() => this.deleteCollaborator(collaborator)}
              bgColor={constants.BUTTON_DELETE_BACKGROUND}
              hoverBgColor={constants.BUTTON_DELETE_HOVER_BACKGROUND}
            >Supprimer</Button>
          </div>
        </div>
        <style jsx>{`
        .popup {
          width: 100%;
          height: 100%;
          padding: 10px;
        }

        .separator {
          border: 1px solid white;
          margin: 10px 0;
        }

        .popup-title {
          font-size: 18px;
          font-weight: bold;
        }

        .popup-text {
        }

        .popup-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .action {
          display: inline-block;
        }
      `}</style>
      </div>, 'small'
    )
    this.props.popoverManager.displayPopover()
  }

  render () {
    const { matchingCollaborators, emptySearch } = this.state
    let collaborators = []
    if (!emptySearch) {
      collaborators = matchingCollaborators
    } else {
      collaborators = this.props.collaborators
    }

    return (<div className='host'>
      <div className='list-title'>LISTE DES ARTISTES INVITÉS</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>L'artiste invité "{this.state.deleted}" a été supprimé avec succès !</div>
              </div>
            </div>
            : undefined
        }
        <div className='sort-bar'>
          <div className='sort sort-search'>
            <input type='text' className='search-bar' placeholder='Rechercher' ref={(input) => { this.input = input }} onChange={this.handleSearchChange} onFocus={this.handleFocus} />
          </div>
        </div>
        {
          collaborators.map((collaborator, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <Link to={{
                      path: '/library',
                      state: {openCollaborator: collaborator._id}
                    }}>
                      <div className='link-container'>
                        <div className='element-description'>
                          <div className='element-title'>{collaborator.firstname + ' ' + collaborator.lastname}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='element-actions'>
                    <div className='action' onClick={() => this.displayConfirmDelete(collaborator)}>
                      <div className='action-icon'><Icon name='trash-alt' fontSize='15px' color='white' /></div>
                      <div className='action-text'>SUPPRIMER</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <style jsx>{styles}</style>
    </div>)
  }
}
