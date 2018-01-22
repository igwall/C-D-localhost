import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import { deleteAdministrator } from '../../../store/actions/administrators.action'

export default class AdministratorsListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingAdmins: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteAdministrator (administrator) {
    deleteAdministrator(administrator._id).then(data => {
      this.setState({deleted: administrator.username})
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
      this.setMatchingAdministrators(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingAdmins: []
      })
    }
  }

  setMatchingAdministrators (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingAdmins = []
    this.props.administrators.map(administrator => administrator.username.match(reg) ? newMatchingAdmins.push(administrator) : null)
    this.setState({matchingAdmins: newMatchingAdmins.slice()})
  }

  displayConfirmDelete (administrator) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER INGRÉDIENT</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer le modérateur "{administrator.username}" ?</div>
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
              onClick={() => this.deleteAdministrator(administrator)}
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
    const { matchingAdmins, emptySearch } = this.state
    let admins = []
    if (!emptySearch) {
      admins = matchingAdmins
    } else {
      admins = this.props.administrators
    }

    return (<div className='host'>
      <div className='list-title'>LISTE DES MODÉRATEURS</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>Le modérateur "{this.state.deleted}" a été supprimé avec succès !</div>
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
          admins.map((admin, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'>{admin.username}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action' onClick={() => this.displayConfirmDelete(admin)}>
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
