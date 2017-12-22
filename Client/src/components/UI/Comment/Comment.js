import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Comment.styles'

export default class Comment extends React.Component {
  static propTypes = {
    width: PropTypes.string,
    block: PropTypes.bool
  }

  static defaultProps = {
    width: '350px'
  }

  render () {
    const {
      block,
      width,
      ...props
    } = this.props

    const author = comment.author

    const className = cn({
      button: true,
      disabled: disabled,
      shadow: shadow,
      round: round,
      [size]: size
    })

    props.style = {
      display: block ? 'block' : '',
      ...props.style
    }

    return (
      <div className='comment'>
        <div className='user'>
          <div className='user-avatar'></div>
          <div className='user-username'>{author.username}</div>
          <div className='actions'>
            <div className='editButton'>Supprimer</div>
            <div className='deleteButton'>Éditer</div>
          </div>
        </div>
        <div className='content'>{comment.message}</div>
        <div className='infos'>
          <div className='infos-publish'>
            <div className='infos-text'>{comment.createdAt}</div>
          </div>
          {
            comment.editedBy
              ? <div className='infos-edit'>
                <div className='infos-text'>Édité par {comment.editedBy.username} le {comment.editedAt} </div>
              </div>
              : null
          }
        </div>
      </div>
    )
  }
}
