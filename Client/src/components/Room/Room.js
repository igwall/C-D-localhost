import React from 'react'
import { connect } from 'react-redux'
import styles from './Room.styles'
import MaterialThumbnail from '../MaterialThumbnail/MaterialThumbnail'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Room extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const { materials } = this.props

    return (
      <div className='host'>
        <div className='roomName'>{this.props.name}</div>
        <div className='materials'>
          <div className='materials-infos'>
            Sélectionnez un ingrédient pour voir les recettes associées :
          </div>
          <ul>
            {
              materials.map((material, i) => {
                return (
                  <li className='material' key={i}>
                    <MaterialThumbnail material={material} />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
