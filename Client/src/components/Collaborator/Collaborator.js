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

  render () {
    const room = {
      name: 'salon'
    }
    const room1 = {
      name: 'chambre'
    }
    const room2 = {
      name: 'cuisine'
    }
    const room3 = {
      name: 'sdb'
    }
    const material = {
      name: 'verre'
    }
    const material2 = {
      name: 'PQ'
    }
    const material3 = {
      name: 'bouteille'
    }
    const material4 = {
      name: 'telephone'
    }
    const recipe = {
      title: 'Tiki Tiki',
      rooms: [room, room1, room2],
      materials: [material, material2, material3, material4],
      createdAt: '12/01/2018'
    }
    const recipe2 = {
      title: 'Pic Pok',
      rooms: [room2, room3, room1],
      materials: [material, material2, material3, material4],
      createdAt: '12/01/2018'
    }
    const recipe3 = {
      title: 'Boom boom Boom',
      rooms: [room2, room, room3],
      materials: [material, material2, material3, material4],
      createdAt: '12/01/2018'
    }
    const recipe4 = {
      title: 'Mariachi',
      rooms: [room3, room1, room2],
      materials: [material, material2, material3, material4],
      createdAt: '12/01/2018'
    }

    const collaborator = {
      name: 'Lara Fabian',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Lara_Fabian_2012.jpg',
      bio: '',
      blog: 'http://lara-fabian-9.skyrock.com/',
      video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      recipes: [recipe, recipe2, recipe3, recipe4]

    }

    return (
      <div className='host'>
        <div className='rightSide'>
          <div className='collaboratorPicture'>
            <img className = 'pic' src= {collaborator.picture} alt=''/>
          </div>
          <div className='collaboratorBio'>
          Lara Fabian, née Lara Crokaert le 9 janvier 1970 à Etterbeek, en Belgique, est une auteure-compositrice-interprète belgo-canadienne. Elle reçoit la nationalité canadienne à l’âge de 26 ans, en 19964, et détient donc la double nationalité5.

Chantant en plusieurs langues (français, anglais, allemand, néerlandais, italien, portugais, espagnol, russe, hébreu et turc), elle a vendu plus de 12 millions de disques6,7,8,9,10. En 2018, elle deviendra un coach à l'émission québécoise La voix.
          </div>
          <div className='collaboratorBlog'>
            <p><a width = '20%' href={collaborator.blog}>{collaborator.blog}</a></p>
          </div>
        </div>
        <div className='leftSide'>
          <div className= 'videos'>
            <div>
              <div className='videos-title'><h2>{collaborator.name}</h2></div>
              <div key={1}><div className = 'video'><iframe id="video-iframe" title ='1' width='100%' height='175' src={collaborator.video}></iframe></div></div>
            </div>
          </div>
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
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
