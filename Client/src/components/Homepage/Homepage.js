import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Button from '../UI/Button/Button'
import DropDown from '../UI/DropDown/DropDown'

@connect(store => {
  return {
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
    return (<div className='host'>
      <h1>Bleh</h1>
      <DropDown
        title='test'
        menuElements = {[
          {
            placeholder: 'bite',
            description: 'bourgeegc'
          },
          {
            placeholder: 'bite',
            description: 'bourgeegczeezazezzeefezffezezfezfefzefzefzefzezfezfezfefzezffzezefaeazzaeazeazeazeazeazezaeazezazaeazeeza'
          }
        ]}
      >
        <Button
          bgColor='#e47'
          hoverBgColor='#918'
          size='medium'
          shadow
        >Bleh</Button>
      </DropDown>
      <DropDown
        layout='custom'
        title='test'
        button={<Button
          bgColor='#e47'
          hoverBgColor='#918'
          size='medium'
          shadow
        >Bleh</Button>}
      >
        <div>bloub</div>
      </DropDown>

      <style jsx>{styles}</style>
    </div>
    )
  }
}
