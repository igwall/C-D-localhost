import React from 'react'
import styles from './Recipe.styles'
import {connect} from 'react-redux'

@connect(store => {
  return {

  }
})

export default class Recipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageValid: false,
      commentSend: false
    }
  }
  checkComment () {
    let res = this.message.value.length > 9
    this.setState({
      messageValid: res
    })
  }
  formIsValid () {
    return this.state.messageValid
  }
  componentDidMount () {

  }
  render () {
    const recipe =
    {
      title: 'salsa',
      thumbnail: '/assets/imgs/imgDefault.png',
      description: 'Amaaaaazing one',
      pictures: [],
      videos: [],
      audios: [],
      author: 'TOTO',
      createdAt: Date.now,
      materials: [],
      rooms: [],
      number: 'duo'
    }
    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className='PageTitle'><h1>{recipe.title}</h1></div>
        <div className='RecipePictrue'>
          <img src= {recipe.thumbnail} alt=''/>
        </div>
        <div className='Description'> {recipe.description}</div>
      </div>
      <div className= 'Main'>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
