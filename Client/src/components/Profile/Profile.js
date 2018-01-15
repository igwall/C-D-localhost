import React from 'react'
import styles from './Profile.styles'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { Link } from 'react-router-dom'
import { setFetchedUser } from '../../store/actions/user.action'
import { setMaterials } from '../../store/actions/material.action'

@connect(store => {
  return {
    currentUser: store.currentUser,
    userFetched: store.userFetched,
    materials: store.materials.elements
  }
})

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedMaterials: []
    }
  }

  componentDidMount () {
    setFetchedUser(this.props._id).then(() => {
    }).catch(err => {
      console.error(err)
    })
    setMaterials().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  handleSelectChange (selectedOption) {
    this.setState({selectedMaterials: selectedOption})
  }

  render () {
    const { username, email, realisations } = this.props.userFetched.user
    const selectMaterials = []
    if (this.props.materials) {
      this.props.materials.map(material => {
        selectMaterials.push({ value: material._id, label: material.name })
        return undefined
      })
    }
    const selectedMaterials = this.state.selectedMaterials
    return (<div className='host'>

      <div className='main'>
        <div className='panel panel-infos'>
          <div className='panel-title'>INFORMATIONS</div>
          <div className='panel-content'>
            <div className='picture'>
              <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt='' width='100px' />
            </div>
            <div className='infos'>
              <div className='infos-username'>{username}</div>
              <div className='infos-email'>{email}</div>
            </div>
          </div>
        </div>
        <div className='panel panel-realisations'>
          <div className='panel-title'>RECETTES EXPÉRIMENTÉES</div>
          <div className='sort-bar'>
            <div className='sort sort-search'>
              <input type='text' className='search-bar' placeholder='Rechercher' />
            </div>
            <div className='sort sort-ingredients'>
              <Select
                name='ingredient-select'
                value={selectedMaterials}
                placeholder='Trier par ingrédients'
                multi
                closeOnSelect={false}
                onChange={this.handleSelectChange.bind(this)}
                options={selectMaterials}
              />
            </div>
          </div>
          {
            realisations.length === 0
              ? <div className='no-realisations'>Cet utilisateur n'a pas encore expérimenté de recettes...</div>
              : <ul className='realisations'>
                {
                  realisations.map(realisation => {
                    let bool = false
                    if (selectedMaterials.length > 0) {
                      selectedMaterials.map(material => {
                        if (material.value === realisation.material._id) bool = true
                        return undefined
                      })
                    }
                    if (selectedMaterials.length === 0 || bool) {
                      return (
                        <Link to={`/recipes/${realisation.recipe._id}`}>
                          <li>
                            <div className='realisation'>
                              <div className='ingredient-picture'>
                                <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt='' width='50px' />
                              </div>
                              <div className='realisation-infos'>
                                <div className='realisation-name'>{realisation.material.name}</div>
                                <div className='realisation-date'>Expérimentée le {realisation.material.date}</div>
                              </div>
                            </div>
                            <div className='separator' />
                          </li>
                        </Link>)
                    }
                    return undefined
                  })
                }
              </ul>
          }
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
