import React from 'react'
import { connect } from 'react-redux'
import styles from './Room.styles'
import {dateFormatter} from '../../util/dateFormatter'
import { Link } from 'react-router-dom'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Room extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  getRandomRecipes () {
    let recipes = []
    this.props.allRecipes.map(recipe => {
      let bool = true
      recipe.rooms.map(room => {
        if (room.name === this.props.name) bool = false
        return undefined
      })
      if (bool) recipes.push(recipe)
      return undefined
    })
    if (recipes.length > 0) {
      let randomRecipes = []
      const rand1 = Math.floor(Math.random() * Math.floor(recipes.length))
      const rand2 = Math.floor(Math.random() * Math.floor(recipes.length))
      const rand3 = Math.floor(Math.random() * Math.floor(recipes.length))
      randomRecipes.push(recipes[rand1])
      if (rand2 !== rand1) randomRecipes.push(recipes[rand2])
      if (rand3 !== rand2) randomRecipes.push(recipes[rand3])
      return randomRecipes
    }
    return []
  }

  render () {
    const { currentUser, name, recipes } = this.props
    const validatedRecipes = this.props.recipes.filter(recipe => recipe.validated)
    const randomRecipes = this.getRandomRecipes()
    let roomRecipes = []
    let doneRecipes = []
    if (currentUser !== undefined) {
      validatedRecipes.map(recipe => {
        let bool = true
        currentUser.realisations.map(realisation => {
          if (recipe._id === realisation.recipe._id) bool = false
          return undefined
        })
        if (bool) {
          roomRecipes.push(recipe)
        } else {
          doneRecipes.push(recipe)
        }
        return undefined
      })
    } else {
      roomRecipes = recipes
    }
    return (
      <div className='host'>
        <div className='room-title'>{name.toUpperCase()}</div>
        <div className='recipes recipes-room'>
          <div className='recipes-title'>Compositions de la pièce</div>
          <ul>
            {
              roomRecipes.map((recipe, i) => {
                return (
                  <li className='list-element' key={i}>
                    <div className='element'>
                      <div className='element-infos'>
                        <Link to={`/recipes/${recipe._id}`}>
                          <div className='link-container'>
                            <div className='element-picture'><img src={recipe.thumbnail} alt='' width='50px' height='50px' /></div>
                            <div className='element-description'>
                              <div className='element-title'>{recipe.title}</div>
                              <div className='element-other'>Ingrédients : {
                                recipe.materials.map((material, i) => {
                                  let text = material.name
                                  if (i + 1 !== recipe.materials.length) text = text + ', '
                                  return text
                                })
                              }
                              </div>
                              <div className='element-date'>{dateFormatter(recipe.createdAt)}</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='recipes recipes-random'>
          <div className='recipes-title'>Compositions aléatoires</div>
          <ul>
            {
              randomRecipes.map((recipe, i) => {
                return (
                  <li className='list-element' key={i}>
                    <div className='element'>
                      <div className='element-infos'>
                        <Link to={`/recipes/${recipe._id}`}>
                          <div className='link-container'>
                            <div className='element-picture'><img src={recipe.thumbnail} alt='' width='50px' height='50px' /></div>
                            <div className='element-description'>
                              <div className='element-title'>{recipe.title}</div>
                              <div className='element-other'>Ingrédients : {
                                recipe.materials.map((material, i) => {
                                  let text = material.name
                                  if (i + 1 !== recipe.materials.length) text = text + ', '
                                  return text
                                })
                              }
                              </div>
                              <div className='element-date'>{dateFormatter(recipe.createdAt)}</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {
          currentUser !== undefined
            ? <div className='recipes recipes-done'>
              <div className='recipes-title'>Compositions déjà expérimentées</div>
              <ul>
                {
                  doneRecipes.map((recipe, i) => {
                    return (
                      <li className='list-element' key={i}>
                        <div className='element done'>
                          <div className='element-infos'>
                            <Link to={`/recipes/${recipe._id}`}>
                              <div className='link-container'>
                                <div className='element-picture'><img src={recipe.thumbnail} alt='' width='50px' height='50px' /></div>
                                <div className='element-description'>
                                  <div className='element-title'>{recipe.title}</div>
                                  <div className='element-other'>Ingrédients : {
                                    recipe.materials.map((material, i) => {
                                      let text = material.name
                                      if (i + 1 !== recipe.materials.length) text = text + ', '
                                      return text
                                    })
                                  }
                                  </div>
                                  <div className='element-date'>{dateFormatter(recipe.createdAt)}</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            : undefined
        }
        <style jsx>{styles}</style>
      </div>
    )
  }
}
