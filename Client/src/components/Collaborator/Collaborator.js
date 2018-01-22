import React from 'react'
import { connect } from 'react-redux'
import styles from './Collaborator.styles'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Collaborator extends React.Component {
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
    return (
      <div className='host'>
        <div className='rightSide'>
          <div className='collaboratorPicture'>
            <img className = 'pic' src='https://upload.wikimedia.org/wikipedia/commons/6/69/Lara_Fabian_2012.jpg' alt=''/>
          </div>
          <div className= 'collaboratorName'>
          Lara Fabian
          </div>
          <div className='collaboratorBio'>
          Lara Fabian, née Lara Crokaert le 9 janvier 1970 à Etterbeek, en Belgique, est une auteure-compositrice-interprète belgo-canadienne. Elle reçoit la nationalité canadienne à l’âge de 26 ans, en 19964, et détient donc la double nationalité5.

Chantant en plusieurs langues (français, anglais, allemand, néerlandais, italien, portugais, espagnol, russe, hébreu et turc), elle a vendu plus de 12 millions de disques6,7,8,9,10. En 2018, elle deviendra un coach à l'émission québécoise La voix.
          </div>
        </div>
        <div className='leftSide'>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
