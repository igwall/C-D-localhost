import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import Button from '../../UI/Button/Button'
import constants from '../../../constants'
import { deleteQuote } from '../../../store/actions/quote.action'

export default class QuotesListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingQuotes: [],
      deleted: ''
    }
    this.displayConfirmDelete = this.displayConfirmDelete.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  deleteQuote (quote) {
    deleteQuote(quote._id).then(data => {
      this.setState({deleted: quote.text})
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
      this.setMatchingQuotes(input)
    } else {
      this.setState({
        emptySearch: true,
        matchingQuotes: []
      })
    }
  }

  setMatchingQuotes (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingQuotes = []
    this.props.quotes.map(quote => (quote.text.match(reg) || quote.author.match(reg)) ? newMatchingQuotes.push(quote) : null)
    this.setState({matchingQuotes: newMatchingQuotes.slice()})
  }

  displayConfirmDelete (quote) {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>SUPPRIMER CITATION</div>
        <div className='separator' />
        <div className='popup-text'>Voulez-vous vraiment supprimer la citation "{quote.text}" ?</div>
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
              onClick={() => this.deleteQuote(quote)}
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
    const { matchingQuotes, emptySearch } = this.state
    let quotes = []
    if (!emptySearch) {
      quotes = matchingQuotes
    } else {
      quotes = this.props.quotes
    }
    return (<div className='host'>
      <div className='list-title'>LISTE DES CITATIONS</div>
      <ul className='list'>
        {
          this.state.deleted !== ''
            ? <div className='validation-panel'>
              <div className='validation-content'>
                <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                <div className='validation-message'>La citation "{this.state.deleted}" a été supprimé avec succès !</div>
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
          quotes.map((quote, i) => {
            return (
              <li className='list-element' key={i}>
                <div className='element'>
                  <div className='element-infos'>
                    <div className='link-container'>
                      <div className='element-description'>
                        <div className='element-title'>{quote.author}</div>
                        <div className='element-text'>{quote.text}</div>
                      </div>
                    </div>
                  </div>
                  <div className='element-actions'>
                    <div className='action'>
                      <div className='action-icon'><Icon name='edit' fontSize='15px' color='white' /></div>
                      <div className='action-text'>ÉDITER</div>
                    </div>
                    <div className='action' onClick={() => this.displayConfirmDelete(quote)}>
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
