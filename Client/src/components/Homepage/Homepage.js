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
      <div className='sidebar'>
        <div className='sidebar-title'>Qu'est-ce que Compose & Danse ?</div>
        <div className='sidebar-text'>
          Et interdum acciderat, ut siquid in penetrali secreto nullo citerioris jlrhglzkehgkjgzhlzrhgiurhiurihgrieh vitae ministro praesente paterfamilias uxori susurrasset in aurem, velut Amphiarao referente aut Marcio, quondam vatibus inclitis, postridie disceret imperator. Ideoque etiam parietes arcanorum soli conscii timebantur.
        </div>
      </div>
      <div className='flat'>
        <div className='flat-text'>Cliquez sur une des pièces en surbrillance pour accéder à son contenu</div>
        <SvgLines className='svg' animate={ true } duration={4000} timing='ease-out'>
          <svg
            height='600px'
            width='800px'
            viewBox="0 0 220 220"
          >
            <g fill='rgba(0,0,0,0)' stroke='#fff' strokeWidth='0.26458332px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' >
              <text className='room-name' x="105" y="45" fill="#fff" fontSize="15" onClick={() => this.chooseRoom('Chambre')}>CHAMBRE</text>
              <path className='room' d='M 100 10 H 175 V 70 H 100 Z' onClick={() => this.chooseRoom('Chambre')}/>
              <path d='M 100 70 H 200 V 100 H 100 Z'/>
              <path d='M 100 85 H 160 V 100' />
              <path d='M 110 100 V 85' />
              <path d='M 120 100 V 85' />
              <path d='M 130 100 V 85' />
              <path d='M 140 100 V 85' />
              <path d='M 150 100 V 85' />
              <path d='M 105 100 V 85' />
              <path d='M 115 100 V 85' />
              <path d='M 125 100 V 85' />
              <path d='M 135 100 V 85' />
              <path d='M 145 100 V 85' />
              <path d='M 155 100 V 85' />
              <text className='room-name' x="126" y="150" fill="#fff" fontSize="15" onClick={() => this.chooseRoom('Salon')}>SALON</text>
              <path className='room' d='M 100 100 V 190 H 200 V 100 Z' onClick={() => this.chooseRoom('Salon')}/>
              <text className='room-name' writingMode='tb' x="217" y="105" fill="#fff" fontSize="15" onClick={() => this.chooseRoom('Cuisine')}>CUISINE</text>
              <path className='room' d='M 200 70 H 235 V 110 H 250 V 150 H 235 V 190 H 200 Z' onClick={() => this.chooseRoom('Cuisine')}/>
              <text className='room-name' x="126" y="210" fill="#fff" fontSize="15" onClick={() => this.chooseRoom('Salle de Bains')}>SdB</text>
              <path className='room' d='M 100 190 V 220 H 180 V 190 Z' onClick={() => this.chooseRoom('Salle de Bains')}/>
              <path d='M 180 190 V 220 H 200 V 190 Z'/>
              <text className='room-name' writingMode='tb' x="80" y="83" fill="#fff" fontSize="15" onClick={() => this.chooseRoom('Salle de Bains')}>BIBLIOTHÈQUE</text>
              <path className='room' d ="M 100,190 H 75 A 50 50 0 1 1 75,70 H 100 Z" />
            </g>
          </svg>
        </SvgLines>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
