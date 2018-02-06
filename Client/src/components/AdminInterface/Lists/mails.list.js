import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import {dateFormatter} from '../../../util/dateFormatter'
import constants from '../../../constants'
import { deleteMail } from '../../../store/actions/mail.action'

export default class MailsListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deleted: false
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
  }

  deleteMail (mail) {
    deleteMail(mail._id).then(data => {
      this.setState({deleted: true})
      this.props.popoverManager.dismissPopover()
    }).catch(err => {
      console.log(err)
    })
  }

  displayConfirmDelete (mail) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER MESSAGE</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer ce message ?</div>
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
              onClick={() => this.deleteMail(mail)}
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
    let mails = this.props.mails

    return (<div className='host'>
      <div className='list-title'>LISTE DES MESSAGES REÇUS</div>
      <ul className='list'>
        {
          this.state.deleted
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>Le message a été supprimée avec succès !</div>
              </div>
            </div>
            : undefined
        }
        {
          mails.map((mail, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'><p>{mail.sujet}</p></div>
                        <div className='element-other'>E-mail: {mail.email}</div>
                        <div className='element-other'>Nom : {mail.name}</div>
                        <div className='element-other'>Téléphone : {mail.number}</div>
                        <div className='element-text'>{mail.message}</div>
                        <div className='element-date'>Créée le {dateFormatter(mail.createdAt)}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action' onClick={() => this.displayConfirmDelete(mail)}>
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
