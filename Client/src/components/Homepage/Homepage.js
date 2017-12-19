import React from 'react'
import styles from './Homepage.styles'
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
  }

  render () {
    return (<div className='host'>
      <h1>Bleh</h1>

      <style jsx>{styles}</style>
    </div>
    )
  }
}
