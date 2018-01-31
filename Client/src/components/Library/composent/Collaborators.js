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
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      MatchingCollaborator: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
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
        MatchingCollaborator: []
      })
    }
  }

  setMatchingCollaborators (input) {
    const reg = new RegExp(input, 'i')
    let newMatchingCollaborator = []
    this.props.collaborators.map(collaborator => {
      const fullname = collaborator.firstname + ' ' + collaborator.lastname
      if (collaborator.firstname.toLowerCase().match(reg) || collaborator.lastname.toLowerCase().match(reg) || fullname.toLowerCase().match(reg)) newMatchingCollaborator.push(collaborator)
      return undefined
    })
    this.setState({MatchingCollaborator: newMatchingCollaborator.slice()})
  }
  chooseCollaborator (id) {
    const {collaborators} = this.props
    this.displayCollaborator(collaborators.filter(collaborator => collaborator._id === id)[0])
  }
  render () {
    let collaborators = this.props.collaborators
    if (!this.state.emptySearch) {
      collaborators = this.state.MatchingCollaborator
    } else {
      collaborators = this.props.collaborators
    }
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>Artistes invités</h2></div>
          <div className='sort sort-search'>
            <input type='text' className='search-bar' placeholder='Rechercher' ref={(input) => { this.input = input }} onChange={this.handleSearchChange} onFocus={this.handleFocus} />
          </div>
          <div className = 'collaborator-list'>
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
