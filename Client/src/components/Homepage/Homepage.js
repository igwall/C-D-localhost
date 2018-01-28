import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Room from '../Room/Room'
import {setRooms} from '../../store/actions/room.action'
import SvgLines from 'react-mt-svg-lines'
import constants from '../../constants'
import { Link, Redirect } from 'react-router-dom'

@connect(store => {
  return {
    rooms: store.rooms.elements
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: '',
      redirect: false
    }
    this.displayRoom = this.displayRoom.bind(this)
    this.setHover = this.setHover.bind(this)
    this.goToLibrary = this.goToLibrary.bind(this)
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

  setHover (room) {
    this.setState({hovered: room})
  }

  calcHypotenuse (a, b) {
    return (Math.sqrt((a * a) + (b * b)))
  }

  findYUpsideTriangle (y) {
    return (y - Math.sqrt(3) * 100)
  }

  goToLibrary () {
    this.setState({redirect: true})
  }

  render () {
    const baseHeightTriangle = 395
    const baseHeightTrapeze = baseHeightTriangle + 40
    const heightReference = 395 - Math.sqrt(3) * 100
    const heightReference2 = heightReference - Math.sqrt(3) * 100
    const svgHeight = '500px'
    const svgWidth = '900px'

    if (this.state.redirect) return (<Redirect push to="/library"/>)

    return (<div className='host'>
      <div className='sidebar'>
        <div className='sidebar-title'>Qu'est-ce que Compose & Danse ?</div>
        <div className='sidebar-text'>
          {constants.DESCRIPTION_TEXT_SHORT}
        </div>
        <Link to='/library'>
          <div className='sidebar-more'>
            [Lire la suite...]
          </div>
        </Link>
      </div>
      <div className='flat'>
        <div className='flat-text'>Cliquez sur une des pièces en surbrillance pour accéder à son contenu</div>
        <SvgLines className='svg' animate={ true } duration={10000} timing='ease-out'>
          <svg
            height={svgHeight}
            width={svgWidth}
            viewBox={`0 0 710 450`}
          >
            <g fill='rgba(0,0,0,0)' stroke='#fff' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' >
              {/* BOTTOM UPSIDE TRIANGLES */}

              {/* BIBLIOTHEQUE */}
              <path className='room' d={`M10 ${baseHeightTriangle} H 210 L 110 ${heightReference} Z`} onClick={this.goToLibrary}/>

              {/* CHAMBRE */}
              <path className='room' d={`M210 ${baseHeightTriangle} H 410 L 310 ${heightReference} Z`} style={ this.state.hovered === 'Chambre' ? { fill: 'rgba(255,0,0,0.4)' } : undefined } onMouseOver={() => this.setHover('Chambre')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Chambre')} />

              {/* SALLE DE BAINS */}
              <path className='room' d={`M410 ${baseHeightTriangle} H 610 L 510 ${heightReference} Z`} style={ this.state.hovered === 'Salle de bains' ? { fill: 'rgba(0,0,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Salle de bains')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Salle de bains')} />

              {/* BOTTOM DOWNSIDE TRIANGLES */}

              {/* SALON */}
              <path className='room' d={`M110 ${heightReference} H 310 L 210 ${baseHeightTriangle} Z`} style={ this.state.hovered === 'Salon' ? { fill: 'rgba(255,0,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Salon')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Salon')} />

              {/* ESPACES VERTS */}
              <path className='room' d={`M310 ${heightReference} H 510 L 410 ${baseHeightTriangle} Z`} style={ this.state.hovered === 'Espaces verts' ? { fill: 'rgba(0,255,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Espaces verts')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Espaces verts')} />

              {/* ENTREE */}
              <path className='room' d={`M510 ${heightReference} H 710 L 610 ${baseHeightTriangle} Z`} style={ this.state.hovered === 'Entrée' ? { fill: 'rgba(255,255,0,0.4)' } : undefined } onMouseOver={() => this.setHover('Entrée')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Entrée')} />

              {/* TOP UPSIDE TRIANGLES */}

              {/* CUISINE */}
              <path className='room' d={`M510 ${heightReference} H 710 L 610 ${heightReference2} Z`} style={ this.state.hovered === 'Cuisine' ? { fill: 'rgba(125,0,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Cuisine')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Cuisine')} />

              {/* ESPACES PUBLICS */}
              <path className='room' d={`M310 ${heightReference} H 510 L 410 ${heightReference2} Z`} style={ this.state.hovered === 'Espaces publics' ? { fill: 'rgba(255,0,125,0.4)' } : undefined } onMouseOver={() => this.setHover('Espaces publics')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Espaces publics')} />

              {/* TOP DOWNSIDE TRIANGLE */}

              {/* TERASSE */}
              <path className='room' d={`M410 ${heightReference2} H 610 L 510 ${heightReference} Z`} style={ this.state.hovered === 'Terrasse' ? { fill: 'rgba(255,100,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Terrasse')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Terrasse')} />

              {/* DOWNSIDE TRAPEZES */}

              {/* PORTE */}
              <path className='room' d={`M210 ${baseHeightTriangle} L 240 ${baseHeightTrapeze} H 380 L 410 ${baseHeightTriangle} Z`} style={ this.state.hovered === 'Porte' ? { fill: 'rgba(100,255,125,0.4)' } : undefined } onMouseOver={() => this.setHover('Porte')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Porte')} />

              {/* ESCALIERS */}
              <path className='room' d={`M410 ${baseHeightTriangle} L 440 ${baseHeightTrapeze} H 580 L 610 ${baseHeightTriangle} Z`} style={ this.state.hovered === 'Escaliers' ? { fill: 'rgba(125,255,0,0.4)' } : undefined } onMouseOver={() => this.setHover('Escaliers')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Escaliers')} />

              {/* UPSIDE TRAPEZES */}

              {/* FENETRE */}
              <path className='room' d={`M110 ${heightReference} L 140 ${heightReference - 40} H 280 L 310 ${heightReference} Z`} style={ this.state.hovered === 'Fenêtre' ? { fill: 'rgba(125,50,50,0.4)' } : undefined } onMouseOver={() => this.setHover('Fenêtre')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Fenêtre')} />

              {/* TOILETTES */}
              <path className='room' d={`M410 ${heightReference2} L 440 ${heightReference2 - 40} H 580 L 610 ${heightReference2} Z`} style={ this.state.hovered === 'Toilettes' ? { fill: 'rgba(50,50,255,0.4)' } : undefined } onMouseOver={() => this.setHover('Toilettes')} onMouseLeave={() => this.setHover('')} onClick={() => this.chooseRoom('Toilettes')} />
            </g>
          </svg>
        </SvgLines>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
