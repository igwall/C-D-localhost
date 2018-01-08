import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Room from '../Room/Room'
import {setRooms} from '../../store/actions/room.action'

@connect(store => {
  return {
    rooms: store.rooms.elements
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.displayRoom = this.displayRoom.bind(this)
  }

  componentDidMount () {
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  displayRoom (room) {
    this.props.popoverManager.setRenderedComponent(
      <Room {...room} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  render () {
    const {rooms} = this.props

    return (<div className='host'>
      <h1>Rooms</h1>
      <ul>
        {
          rooms.map((room, i) => {
            return (
              <li
                key={i}
                style={{
                  background: room.color,
                  border: 'solid 1px black',
                  display: 'inline-block',
                  cursor: 'pointer'
                }}
                onClick={() => this.displayRoom(room)}
              >
                <div>{room.name}</div>
              </li>
            )
          })
        }
      </ul>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
