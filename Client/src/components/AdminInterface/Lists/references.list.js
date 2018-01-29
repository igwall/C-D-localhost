import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import { deleteReference } from '../../../store/actions/library.action'

export default class ReferencesListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingReferences: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteReference (reference) {
    deleteReference(reference._id).then(data => {
      this.setState({deleted: reference.title})
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
      this.setMatchingReferences(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingReferences: []
      })
    }
  }

  setMatchingReferences (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingReferences = []
    this.props.references.map(reference => reference.title.match(reg) ? newMatchingReferences.push(reference) : null)
    this.setState({matchingReferences: newMatchingReferences.slice()})
  }

  displayConfirmDelete (reference) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER REFERENCE</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer la référence "{reference.title}" ?</div>
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
              onClick={() => this.deleteReference(reference)}
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
    const { matchingReferences, emptySearch } = this.state
    let references = []
    if (!emptySearch) {
      references = matchingReferences
    } else {
      references = this.props.references
    }

    return (<div className='host'>
      <div className='list-title'>LISTE DES REFERENCES</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La référence "{this.state.deleted}" a été supprimé avec succès !</div>
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
          references.map((reference, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'>{reference.title}</div>
                        <div className='element-text'>{reference.description}</div>
                        <div className='element-other'>{reference.link}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action'>
                      <div className='action-icon'><Icon name='edit' fontSize='15px' color='white' /></div>
                      <div className='action-text'>ÉDITER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDelete(reference)}>
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
