import React from 'react'
import { connect } from 'react-redux'
import styles from './Room.styles'

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

  render () {
    console.log(this.props)
    return (
      <div className='host'>
        <h3>{this.props.name}</h3>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
