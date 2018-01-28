import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import { deleteHotVideo } from '../../../store/actions/library.action'

export default class ReferencesListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingHotVideos: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteHotVideo (hotVideo) {
    deleteHotVideo(hotVideo._id).then(data => {
      this.setState({deleted: hotVideo.title})
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
      this.setMatchingHotVideos(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingHotVideos: []
      })
    }
  }

  setMatchingHotVideos (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingHotVideos = []
    this.props.hotVideos.map(hotVideo => hotVideo.title.match(reg) ? newMatchingHotVideos.push(hotVideo) : null)
    this.setState({matchingHotVideos: newMatchingHotVideos.slice()})
  }

  displayConfirmDelete (hotVideo) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER VIDEO A LA UNE</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer la vidéo à la une "{hotVideo.title}" ?</div>
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
              onClick={() => this.deleteHotVideo(hotVideo)}
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
    const { matchingHotVideos, emptySearch } = this.state
    let hotVideos = []
    if (!emptySearch) {
      hotVideos = matchingHotVideos
    } else {
      hotVideos = this.props.hotVideos
    }

    return (<div className='host'>
      <div className='list-title'>LISTE DES VIDEOS A LA UNE</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La vidéo "{this.state.deleted}" a été supprimé avec succès !</div>
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
          hotVideos.map((hotVideo, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'>{hotVideo.title}</div>
                        <div className='element-text'>{hotVideo.youtube_link}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action'>
                      <div className='action-icon'><Icon name='edit' fontSize='15px' color='white' /></div>
                      <div className='action-text'>ÉDITER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDelete(hotVideo)}>
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
