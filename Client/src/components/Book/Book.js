import React from 'react'
import { connect } from 'react-redux'
import styles from './Book.styles'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Book extends React.Component {
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
        <div className='content'>
          <div className='titre'><div className='title'>Titre:</div>{this.props.TITRE}</div>
          <div className='definition'><div className='title'>Définition:</div>{this.props.DEFINITION}</div>
          <div className='detail'><div className='title'>Détail:</div>{this.props.DETAIL}</div>
          <div className='description'><div className='title'>Description:</div>{this.props.DESCRIPTION}</div>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
