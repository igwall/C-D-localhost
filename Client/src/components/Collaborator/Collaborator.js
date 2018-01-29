import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Collaborator.styles'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Collaborator extends React.Component {
  render () {
    console.log(this.props.collaborator)
    const collaborator = this.props.collaborator

    return (
      <div className='host'>
        <div className='rightSide'>
          <div className='collaboratorPicture'>
            <img className = 'pic' src= {collaborator.picture} alt=''/>
          </div>
          <div className='collaboratorBio'>
            {collaborator.bio}
          </div>
          <div className='collaboratorBlog'>
            <p><a width = '20%' href={collaborator.link}>{collaborator.link}</a></p>
          </div>
        </div>
        <div className='leftSide'>
          <div className='videos-title'><h2>{collaborator.firstname} {collaborator.lastname}</h2></div>
          <div className='recipe'>
            <div className='recipeHead'>
              <h2>Recettes proposées</h2>
            </div>
            <div className='recipeTable'>
              <table>
                <tbody>
                  {
                    collaborator.recipes.map((recipe, i) => {
                      return (
                        <tr>
                          <td>
                            <div className='element-infos'>
                              <Link to={`/recipes/${recipe._id}`}>
                                <div className='link-container'>
                                  <div className='element-picture'><img src='{recipe.thumbnail}' alt='' width='100px' max-height='100px' /></div>
                                  <div className='element-description'>
                                    <div className='element-title'>{recipe.title}</div>
                                    <div className='element-other'>Pièces : {
                                      recipe.rooms.map((room, i) => {
                                        let text = room.name
                                        if (i + 1 !== recipe.rooms.length) text = text + ', '
                                        return text
                                      })
                                    }
                                    </div>
                                    <div className='element-other'>Ingrédients : {
                                      recipe.materials.map((material, i) => {
                                        let text = material.name
                                        if (i + 1 !== recipe.materials.length) text = text + ', '
                                        return text
                                      })
                                    }
                                    </div>
                                    <div className='element-date'>Créée le {(recipe.createdAt)}</div>
                                  </div>

                                </div>
                              </Link>
                            </div></td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
          <div className= 'videos'>
            <div>
              <div key={1}><div className = 'video'><iframe id="video-iframe" title ='1' width='100%' height='175' src={collaborator.video}></iframe></div></div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
