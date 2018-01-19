import React from 'react'
import styles from './lists.styles'
import Icon from '../../UI/Icon/Icon'
import { Link } from 'react-router-dom'

export default class RecipesListAdmin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  displayConfirmDelete () {
    this.props.popoverManager.setRenderedComponent(
      <div className='popup'>
        <div className='popup-title'>bleh</div>
      </div>
    )
    this.props.popoverManager.displayPopover()
  }

  render () {
    const recipes = this.props.recipes
    return (<div className='host'>
      <div className='list-title'>LISTE DES RECETTES</div>
      <ul className='list'>
        {
          recipes.map(recipe => {
            return (
              <li className='list-element'>
                <div className='element'>
                  <div className='element-infos'>
                    <Link to={`/recipes/${recipe._id}`}>
                      <div className='element-picture'><img src={recipe.thumbnail} width='100px' max-height='100px' /></div>
                      <div className='element-description'>
                        <div className='element-title'>{recipe.title}</div>
                      </div>
                    </Link>
                  </div>
                  <div className='element-actions'>
                    <div className='action'>
                      <div className='action-icon'><Icon name='edit' fontSize='15px' color='white' /></div>
                      <div className='action-text'>ÉDITER</div>
                    </div>
                    <div className='action'>
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
