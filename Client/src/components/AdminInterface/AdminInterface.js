import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'

@connect(store => {
  return {
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    /* setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    }) */
  }

  render () {
    return (<div className='host'>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
