import React from 'react'
import styles from './panels.styles'
// import Icon from '../../UI/Icon/Icon'
// import Button from '../../UI/Button/Button'
// import constants from '../../../constants'

export default class TextsPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (<div className='host'>
      <div className='panel-title'>MODIFICATIONS DES TEXTES DE COMPOSE & DANSE</div>
      <div className='panel'>
        <div className='button-group'>
          <div className='button-group-title'>DEMANDE DE COLLABORATION</div>
          <div>
            d
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
