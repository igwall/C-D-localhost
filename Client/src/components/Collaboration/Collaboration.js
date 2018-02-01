import React from 'react'
import {connect} from 'react-redux'
import CollaborationRequest from './CollaborationRequest/CollaborationRequest'
import CollaborationInterface from './CollaborationInterface/CollaborationInterface'

@connect(store => {
  return {
    currentUser: store.currentUser
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
    const { currentUser } = this.props
    return (
      currentUser.collaborator !== ''
        ? <CollaborationInterface />
        : <CollaborationRequest />
    )
  }
}
