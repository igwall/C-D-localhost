import React from 'react'
import styles from './GuestBook.styles'
import {connect} from 'react-redux'
import {setRooms} from '../../store/actions/room.action'
import Button from '../UI/Button/Button'
// import EmojiField from 'emoji-picker-textfield'

@connect(store => {
  return {
  }
})

export default class GuestBook extends React.Component {
  componentDidMount () {
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  render () {
    const user = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const user1 = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const user2 = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const user3 = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const user4 = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const user5 = {
      pic: 'https://www.rwepa.com/userdata/music/artist/48/148d32f237247b9478ef6d8de8429c21c.jpg',
      name: 'Toto'
    }
    const comment = {
      id: 1,
      text: 'Amazing site',
      owner: user,
      createdAt: '12/01/2018'
    }
    const comment1 = {
      id: 2,
      text: 'Amazing site',
      owner: user1,
      createdAt: '12/01/2018'
    }
    const comment2 = {
      id: 3,
      text: 'Amazing site',
      owner: user2,
      createdAt: '12/01/2018'
    }
    const comment3 = {
      id: 4,
      text: 'Amazing site',
      owner: user3,
      createdAt: '12/01/2018'
    }
    const comment4 = {
      id: 5,
      text: 'Amazing site',
      owner: user4,
      createdAt: '12/01/2018'
    }
    const comment5 = {
      id: 6,
      text: 'Amazing site',
      owner: user5,
      createdAt: '12/01/2018'
    }

    const comments = [ comment, comment1, comment2, comment3, comment4, comment5 ]

    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className='PageTitle'><h1>Livre d'or</h1></div>
        <div className='Description'> Un concept qui se développe petit à petit sur différents sites : les champs forment un texte à trous cohérent, que l’utilisateur doit remplir. Un bon moyen de faire participer activement l’utilisateur, sans devoir remplir un formulaire rébarbatif. </div>
      </div>
      <div className= 'Main'>
        <div className='head'>

          <div className='comments'>
            <div className='commentsHead'>
              <div className='input-label'>Avis des utilisateurs </div>
            </div>
            <div className='commentTable'>
              <table>
                <tbody>
                  {
                    comments.map((comment, i) => {
                      return (
                        <tr>
                          <td>
                            <div className='element'>
                              <div className='element-infos'>
                                <div className='element-picture'><img src= {comment.owner.pic} alt='' width='40px' max-height='40px' /></div>
                                <div className='element-description'>
                                  <div className='element-title'>{comment.owner.name}</div>
                                  <div className='element-text'>{comment.text}
                                  </div>
                                  <div className='element-date'>Publié le: {(comment.createdAt)}</div>
                                </div>

                              </div>
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
        <div className='body'>
          <div className='form-column form-column-right'>
            <div className='input-group'>
              <div className='input-label'>Laisser votre avis </div>
              <textarea type='text' placeholder='(20 caractères min...)' ref={i => { this.motivation = i }} onChange={this.checkMotivation} />
            </div>
            <div className='Button'>
              <Button
                bgColor= 'green'
                hoverBgColor='#58FAAC'
              >Envoyer</Button>

            </div>
          </div>

        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
