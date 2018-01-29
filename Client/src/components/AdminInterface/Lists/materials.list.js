import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import { deleteMaterial } from '../../../store/actions/material.action'

export default class MaterialsListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingMaterials: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteMaterial (material) {
    deleteMaterial(material._id).then(data => {
      this.setState({deleted: material.name})
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
      this.setMatchingMaterials(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingMaterials: []
      })
    }
  }

  setMatchingMaterials (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingMaterials = []
    this.props.materials.map(material => material.name.match(reg) ? newMatchingMaterials.push(material) : null)
    this.setState({matchingMaterials: newMatchingMaterials.slice()})
  }

  displayConfirmDelete (material) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER INGRÉDIENT</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer l'ingrédient "{material.name}" ?</div>
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
              onClick={() => this.deleteMaterial(material)}
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
    const { matchingMaterials, emptySearch } = this.state
    let materials = []
    if (!emptySearch) {
      materials = matchingMaterials
    } else {
      materials = this.props.materials
    }

    return (<div className='host'>
      <div className='list-title'>LISTE DES INGRÉDIENTS</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>L'ingrédient "{this.state.deleted}" a été supprimé avec succès !</div>
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
          materials.map((material, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-picture'><img src={material.thumbnail} alt='' width='75px' max-height='75px' /></div>
                      <div className='element-description'>
                        <div className='element-title'>{material.name}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action'>
                      <div className='action-icon'><Icon name='edit' fontSize='15px' color='white' /></div>
                      <div className='action-text'>ÉDITER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDelete(material)}>
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
