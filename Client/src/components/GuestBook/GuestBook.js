import React from 'react'
import styles from './GuestBook.styles'
import {connect} from 'react-redux'
import {dateFormatter} from '../../util/dateFormatter'
import {setComments, addComment} from '../../store/actions/comment.action'
import Icon from '../UI/Icon/Icon'

@connect(store => {
  return {
    currentUser: store.currentUser,
    comments: store.comments.elements.reverse()
  }
})

export default class GuestBook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageValid: false,
      commentSend: false
    }
  }
  checkComment () {
    let res = this.message.value.length > 9
    this.setState({
      messageValid: res
    })
  }
  formIsValid () {
    return this.state.messageValid
  }
  confirmSend () {
    this.message.value = null
    this.checkComment()
    this.setState({ commentSend: true })
    setComments().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  submitForm () {
    if (this.formIsValid()) {
      if (this.props.currentUser.username.length === 0) {
        addComment(this.message.value).then((response) => {
          this.confirmSend()
        }).catch((err) => {
          console.error(err)
          if (err.response.data === 'Username already exists') {
            this.setState({usernameExists: true})
          } else if (err.response.data === 'Email already exists') {
            this.setState({emailExists: true})
          }
        })
      } else {
        addComment(this.message.value, this.props.currentUser).then((response) => {
          this.confirmSend()
        }).catch((err) => {
          console.error(err)
          if (err.response.data === 'Username already exists') {
            this.setState({usernameExists: true})
          } else if (err.response.data === 'Email already exists') {
            this.setState({emailExists: true})
          }
        })
      }
    }
  }
  componentDidMount () {
    console.log(this.props.currentUser)
    setComments().then(() => {
    }).catch(err => {
      console.error(err)
    })
    this.checkComment()
  }
  render () {
    console.log(this.props.currentUser.username.length === 0)
    const comments = this.props.comments
    const user1 = {
      picture: '/assets/imgs/avatarDefault.png',
      username: 'Anonyme'
    }
    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className='PageTitle'><h1>Livre d'or</h1></div>
        <div className='Description'> Un concept qui se développe petit à petit sur différents sites : les champs forment un texte à trous cohérent, que l’utilisateur doit remplir. Un bon moyen de faire participer activement l’utilisateur, sans devoir remplir un formulaire rébarbatif. </div>
      </div>
      <div className= 'Main'>
        <div className='head'>
          {
            this.state.commentSend
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='green' /></div>
                  <div className='error-message'>Merci pour votre avis</div>
                </div>
              </div>
              : undefined
          }
          <div className='comments'>
            <div className='commentsHead'>
              <div className='input-label'>Avis des utilisateurs </div>
            </div>
            <div className='commentTable'>
              <table>
                <tbody>
                  {
                    comments.map((comment, i) => {
                      if (!comment.user) {
                        comment.user = user1
                      }
                      return (

                        <tr key={i}>
                          <td>
                            <div className='element' >
                              <div className='element-infos'>
                                <div className='element-picture'><img src= {comment.user.picture} alt='' width='40px' max-height='40px' /></div>
                                <div className='element-description'>
                                  <div className='element-title'>{comment.user.username} </div>
                                  <div className='element-text'>{comment.text}
                                  </div>
                                  <div className='element-date'>Publié le: {dateFormatter(comment.createdAt)}</div>
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
              <textarea type='text' placeholder='(10 caractères min...)' onChange={this.checkComment.bind(this)} ref={i => { this.message = i }} />
            </div>
            <div className='Button'>
              <div className={`button ${this.formIsValid() ? '' : 'disabled'}`} onClick={this.submitForm.bind(this)}>Envoyer</div>

            </div>
          </div>

        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
