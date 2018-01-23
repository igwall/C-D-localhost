import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import {dateFormatter} from '../../../util/dateFormatter'
import { declineCollaborationRequest, acceptCollaborationRequest } from '../../../store/actions/collaborationRequest.action'

export default class CollaborationRequests extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingRequests: [],
      deleted: '',
      validated: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.displayConfirmDecline = this.displayConfirmDecline.bind(this)
  }

  declineRequest (request) {
    declineCollaborationRequest(request._id).then(() => {
      const fullname = request.firstname + ' ' + request.lastname
      this.setState({deleted: fullname, validated: ''})
      this.props.popoverManager.dismissPopover()
    }).catch(err => {
      console.log(err)
    })
  }

  acceptRequest (request) {
    acceptCollaborationRequest(request._id).then(() => {
      const fullname = request.firstname + ' ' + request.lastname
      this.setState({deleted: '', validated: fullname})
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
      this.setMatchingRequests(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingRequests: []
      })
    }
  }

  setMatchingRequests (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingRequests = []
    this.props.collaborationRequests.map(request => {
      const fullname = request.firstname + ' ' + request.lastname
      if (request.firstname.toLowerCase().match(reg) || request.lastname.toLowerCase().match(reg) || fullname.toLowerCase().match(reg)) newMatchingRequests.push(request)
      return undefined
    })
    this.setState({matchingRequests: newMatchingRequests.slice()})
  }

  displayConfirmDecline (request) {
    const fullname = request.firstname + ' ' + request.lastname
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>REFUSER LA DEMANDE DE COLLABORATION</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment refuser la demande de collaboration de "{fullname}" ?</div>
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
              onClick={() => this.declineRequest(request)}
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
    const {emptySearch, matchingRequests, validated, deleted} = this.state
    let collaborationRequests = []
    if (!emptySearch) {
      collaborationRequests = matchingRequests
    } else {
      collaborationRequests = this.props.collaborationRequests
    }
    const nonValidatedRequests = collaborationRequests.filter(request => !request.validated)
    return (<div className='host'>
      <div className='list-title'>LISTE DES DEMANDES DE COLLABORATION</div>
      <ul className='list'>
        {
          validated !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La demande de collaboration de {this.state.validated} a été accepté avec succés !</div>
              </div>
            </div>
            : undefined
        }
        {
          deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La demande de collaboration de {this.state.deleted} a été supprimée avec succés !</div>
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
          nonValidatedRequests.map((request, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'>{request.firstname + ' ' + request.lastname}</div>
                        <div className='element-other'>Utilisateur : {request.user.username} ({request.user.email})</div>
                        <div className='element-text'>{request.motivation}</div>
                        <div className='element-date'>Créée le {dateFormatter(request.createdAt)}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action' onClick={() => this.acceptRequest(request)}>
                      <div className='action-icon'><Icon name='check' fontSize='15px' color='rgb(0,255,0)' /></div>
                      <div className='action-text'>ACCEPTER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDecline(request)}>
                      <div className='action-icon'><Icon name='times' fontSize='15px' color='rgb(255,0,0)' /></div>
                      <div className='action-text'>REFUSER</div>
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
