import React from 'react'
import styles from './Profile.styles'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'

@connect(store => {
  return {
    currentUser: store.currentUser,
    userFetched: store.userFetched
  }
})

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    const { username, email } = this.props.userFetched
    // const comments =[]
    const comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (<div className='host'>

      <div className='left-panels'>
        <div className='panel panel-infos'>
          <div className='panel-title'>INFORMATIONS</div>
          <div className='panel-content'>
            <div className='picture'>
              <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt='' width='100px' />
            </div>
            <div className='infos'>
              <div className='infos-username'>Username{username}</div>
              <div className='infos-email'>email@email.fr{email}</div>
            </div>
          </div>
        </div>
        <div className='panel panel-comments'>
          <div className='panel-title'>COMMENTAIRES</div>
          <div className='panel-content'>
            {
              comments.length > 0
                ? <ul className='comments'>
                  {
                    comments.map(comment => {
                      return (
                        <li>
                          <div className='comment'>
                            <div className='comment-text'>
                              {username} a commenté la recette <span>bleh{/* <Link to={`/recipes/${comment.recipe._id}`}>{comment.recipe.title}</Link> */}</span> : «eeeeeeeezirgizeuhiezheizruerygfyuirezyfheruygiuryeufyiurefhirehfuoyghuieryghfuirreiuygrieuygfeiruygfuiyger{/* comment.message */}»
                            </div>
                            <div className='comment-date'>Le tamer{/* comment.createdAt */}</div>
                          </div>
                          <div className='separator' />
                        </li>
                      )
                    })
                  }
                </ul>
                : <div className='panel-text'>{username} n'a pas encore écrit de commentaires...</div>
            }
          </div>
        </div>
      </div>

      <div className='right-panels'>
        <div className='panel panel-realisations'>
          <div className='panel-title'>RECETTES EXPÉRIMENTÉES</div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>
    )
  }
}
