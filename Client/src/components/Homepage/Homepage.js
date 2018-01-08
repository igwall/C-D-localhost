import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Room from '../Room/Room'
import {setRooms} from '../../store/actions/room.action'
import SvgLines from 'react-mt-svg-lines'

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
    console.log(room)
    this.props.popoverManager.setRenderedComponent(
      <Room {...room} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  chooseRoom (name) {
    const {rooms} = this.props
    this.displayRoom(rooms.filter(room => room.name === name)[0])
  }

  render () {
    return (<div className='host'>
      <h1>Rooms</h1>
      <div className='flat'>
        <SvgLines animate={ true } duration={5000} timing='ease' stagger={20}>
          <svg
            viewBox="0 0 400 400"
          >
            <g fill='rgba(0,0,0,0)' stroke='#fff' strokeWidth='0.26458332px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' >
              <text className='room-name' x="105" y="45" fill="#fff" font-size="15" onClick={() => this.chooseRoom('Chambre')}>CHAMBRE</text>
              <path className='room' d='M 100 10 H 175 V 70 H 100 Z' onClick={() => this.chooseRoom('Chambre')}/>
              <path className='room' d='M 100 70 H 200 V 100 H 100 Z' onClick={() => this.chooseRoom('Entrée')}/>
              <text className='room-name' x="126" y="150" fill="#fff" font-size="15" onClick={() => this.chooseRoom('Salon')}>SALON</text>
              <path className='room' d='M 100 100 V 190 H 200 V 100 Z' onClick={() => this.chooseRoom('Salon')}/>
              <text className='room-name' writing-mode='tb' x="217" y="105" fill="#fff" font-size="15" onClick={() => this.chooseRoom('Cuisine')}>CUISINE</text>
              <path className='room' d='M 200 70 H 235 V 110 H 250 V 150 H 235 V 190 H 200 Z' onClick={() => this.chooseRoom('Cuisine')}/>
              <text className='room-name' x="126" y="210" fill="#fff" font-size="15" onClick={() => this.chooseRoom('Salle de Bains')}>SdB</text>
              <path className='room' d='M 100 190 V 220 H 180 V 190 Z' onClick={() => this.chooseRoom('Salle de Bains')}/>
              <path className='room' d='M 180 190 V 220 H 200 V 190 Z' onClick={() => this.chooseRoom('Toilettes')}/>
            </g>
          </svg>
        </SvgLines>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
