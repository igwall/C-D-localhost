import React from 'react'
import styles from './composent.styles'
import {connect} from 'react-redux'
@connect(store => {
  return {
    Videos: store.artistFetched.artist
  }
})

export default class News extends React.Component {
  render () {
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>QU'EST-CE QUE COMPOSE & DANSE ?</h2></div>
          <div className='textBody'> Compose & Danse vous invite à danser quotidiennement, à danser comme vous êtes, à
composer par vous même votre danse, à vous essayer à des scenarii de composition.<br /><br />
Mais qu'est-ce qu'un scénario de composition ? Une trame écrite et détaillée : un temps, un lieu,
un espace, un thème, ainsi que le nombre de participants, les accessoires éventuels,
l'environnement sonore, etc.<br />
Des artistes ont imaginé ces scenarii à partir de principes de composition chorégraphique à la
portée de tous…<br /><br />
L'enjeu est de bousculer le quotidien fonctionnel pour aller vers une poétique du quotidien. Il
est ici question de faire un pas de côté, de prendre conscience de son corps et de s'émerveiller
de ses possibles.<br /><br />
Prenez le temps d'aller à la découverte de votre talent ! Expérimentez, dansez, et racontez-nous
votre voyage...</div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>

    )
  }
}
