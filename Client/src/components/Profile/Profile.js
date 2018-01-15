import React from 'react'
import styles from './Profile.styles'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
// import { Link } from 'react-router-dom'
import { setFetchedUser } from '../../store/actions/user.action'

@connect(store => {
  return {
    currentUser: store.currentUser,
    userFetched: store.userFetched,
    ingredients: store.ingredients
  }
})

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    setFetchedUser(this.props._id).then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  render () {
    const { username, email, age, realisations } = this.props.userFetched.user
    // const realisations = [1, 2]
    let selectIngredients = []
    /* this.props.ingredients.map(ingredient => {
      selectIngredients.push({ value: ingredient._id, label: ingredient.name })
    }) */
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
              <div className='infos-age'>
                {
                  age !== null
                    ? age + ' ans'
                    : 'Âge non indiqué'
                }
              </div>
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
                value=''
                placeholder='Trier par ingrédients'
                multi={true}
                onChange=''
                options={selectIngredients}
              />
            </div>
          </div>
          <ul className='realisations'>
            {
              realisations.map(realisation => {
                return (
                  <li>
                    <div className='realisation'>
                      <div className='ingredient-picture'>
                        <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt='' width='50px' />
                      </div>
                      <div className='realisation-infos'>
                        <div className='realisation-name'>Recette bleh bleh blah beh bej</div>
                        <div className='realisation-date'>Expérimentée le dd/MM/YYYY à hh:mm</div>
                      </div>
                    </div>
                    <div className='separator' />
                  </li>)
              })
            }
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
