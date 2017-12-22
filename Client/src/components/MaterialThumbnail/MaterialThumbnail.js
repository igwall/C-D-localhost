import React from 'react'
import { connect } from 'react-redux'
import styles from './MaterialThumbnail.styles'
import constants from '../../constants'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class MaterialThumbnail extends React.Component {
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
    const { material } = this.props
    let picture = constants.IMG_NOT_FOUND
    if (material.picture !== '') {
      picture = material.picture
    }
    return (
      <div className='material'>
        <img className='material-picture' src={picture} alt={`${material.name}`} />
        <div className='material-name'>{material.name}</div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
