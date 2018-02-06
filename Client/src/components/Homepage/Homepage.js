import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Room from '../Room/Room'
import {setRooms} from '../../store/actions/room.action'
import {setRecipes} from '../../store/actions/recipes.action'
import SvgLines from 'react-mt-svg-lines'
import { Link, Redirect } from 'react-router-dom'

@connect(store => {
  return {
    rooms: store.rooms.elements,
    recipes: store.recipes.elements
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
    setRecipes().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  displayRoom (room) {
    const validatedRecipes = this.props.recipes.filter(recipe => recipe.validated === true)
    this.props.popoverManager.setRenderedComponent(
      <Room {...room} allRecipes={validatedRecipes} dismissPopover={this.props.popoverManager.dismissPopover} />
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
    const heightReference3 = 395 + Math.sqrt(3) * 100
    const svgHeight = '720px'
    const svgWidth = '900px'

    if (this.state.redirect) return (<Redirect push to="/library"/>)

    return (<div className='host'>
      <div className='sidebar'>
        <div className='sidebar-title'>QU'EST-CE QUE COMPOSE & DANSE ?</div>
        <div className='sidebar-text'>
        Compose & Danse vous invite à danser quotidiennement, à danser comme vous êtes, à
composer par vous même votre danse, à vous essayer à des scenarii de composition.
Mais qu'est-ce qu'un scénario de composition ?
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
            viewBox={`0 0 860 450`}
          >
            <g fill='rgba(0,0,0,0)' stroke='#fff' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' >

              {/* ESPACES PUBLICS */}
              <text className='room-name' fill="#fff">
                <tspan x="65" y="440">ESPACES</tspan>
                <tspan x="65" y="460">PUBLICS</tspan>
              </text>
              <path className='room room-triangle' d={`M10 ${baseHeightTriangle} H 210 L 110 ${heightReference3} Z`} onClick={() => this.chooseRoom('Espaces publics')} />

              {/* BOTTOM UPSIDE TRIANGLES */}

              {/* BIBLIOTHEQUE */}
              <text fill="#fff" font-size='15px'>
                <tspan x="50" y="350">BIBLIOTHÈQUE</tspan>
              </text>
              <path className='room room-library' d={`M10 ${baseHeightTriangle} H 210 L 110 ${heightReference} Z`} onClick={this.goToLibrary}/>

              {/* CHAMBRE */}
              <text fill="#fff">
                <tspan x="255" y="350">CHAMBRE</tspan>
              </text>
              <path className='room room-triangle' d={`M210 ${baseHeightTriangle} H 410 L 310 ${heightReference} Z`} onClick={() => this.chooseRoom('Chambre')} />

              {/* SALLE DE BAINS */}
              <text fill="#fff">
                <tspan x="480" y="330">SALLE</tspan>
                <tspan x="495" y="350">DE</tspan>
                <tspan x="485" y="370">BAIN</tspan>
              </text>
              <path className='room room-triangle' d={`M410 ${baseHeightTriangle} H 610 L 510 ${heightReference} Z`} onClick={() => this.chooseRoom('Salle de bain')} />

              {/* BOTTOM DOWNSIDE TRIANGLES */}

              {/* SALON */}
              <text fill="#fff">
                <tspan x="175" y="275">SALON</tspan>
              </text>
              <path className='room room-triangle' d={`M110 ${heightReference} H 310 L 210 ${baseHeightTriangle} Z`} onClick={() => this.chooseRoom('Salon')} />

              {/* ESPACES VERTS */}
              <text fill="#fff">
                <tspan x="365" y="270">ESPACES</tspan>
                <tspan x="380" y="290">VERTS</tspan>
              </text>
              <path className='room room-triangle' d={`M310 ${heightReference} H 510 L 410 ${baseHeightTriangle} Z`} onClick={() => this.chooseRoom('Espaces verts')} />

              {/* ENTREE */}
              <text fill="#fff">
                <tspan x="570" y="275">ENTRÉE</tspan>
              </text>
              <path className='room room-triangle' d={`M510 ${heightReference} H 710 L 610 ${baseHeightTriangle} Z`} onClick={() => this.chooseRoom('Entrée')} />

              {/* TOP UPSIDE TRIANGLES */}

              {/* CUISINE */}
              <text fill="#fff">
                <tspan x="570" y="170">CUISINE</tspan>
              </text>
              <path className='room room-triangle' d={`M510 ${heightReference} H 710 L 610 ${heightReference2} Z`} onClick={() => this.chooseRoom('Cuisine')} />

              {/* TOP DOWNSIDE TRIANGLE */}

              {/* TERASSE */}
              <text fill="#fff">
                <tspan x="457" y="100">TERRASSE</tspan>
              </text>
              <path className='room room-triangle' d={`M410 ${heightReference2} H 610 L 510 ${heightReference} Z`} onClick={() => this.chooseRoom('Terrasse')} />

              {/* DOWNSIDE TRAPEZES */}

              {/* PORTE */}
              <text className='title-trapeze' fill="#fff">
                <tspan x="285" y="420">PORTE</tspan>
              </text>
              <path className='room room-trapeze' d={`M210 ${baseHeightTriangle} L 240 ${baseHeightTrapeze} H 380 L 410 ${baseHeightTriangle} Z`} onClick={() => this.chooseRoom('Porte')} />

              {/* ESCALIERS */}
              <text className='title-trapeze' fill="#fff">
                <tspan x="473" y="420">ESCALIERS</tspan>
              </text>
              <path className='room room-trapeze' d={`M410 ${baseHeightTriangle} L 440 ${baseHeightTrapeze} H 580 L 610 ${baseHeightTriangle} Z`} onClick={() => this.chooseRoom('Escaliers')} />

              {/* UPSIDE TRAPEZES */}

              {/* FENETRE */}
              <text className='title-trapeze' fill="#fff">
                <tspan x="180" y="205">FENÊTRE</tspan>
              </text>
              <path className='room room-trapeze' d={`M110 ${heightReference} L 140 ${heightReference - 40} H 280 L 310 ${heightReference} Z`} onClick={() => this.chooseRoom('Fenêtre')} />

              {/* TOILETTES */}
              <text className='title-trapeze' fill="#fff">
                <tspan x="473" y="33">PETIT COIN</tspan>
              </text>
              <path className='room room-trapeze' d={`M410 ${heightReference2} L 440 ${heightReference2 - 40} H 580 L 610 ${heightReference2} Z`} onClick={() => this.chooseRoom('Petit coin')} />

            </g>
          </svg>
        </SvgLines>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
