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
      description: 'setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.',
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
          <img src= {recipe.thumbnail} width= '128px' height = '128px' alt=''/>
        </div>
        <div className='Description'> {recipe.description}</div>
        <div className='sideBarreFoot'>
          <div className='item'>
            <div className ='itemTitle'>Ingrédients </div>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className='item'>
            <div className ='itemTitle'>Ingrédients </div>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className='item'>
            <div className ='itemTitle'>Ingrédients </div>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className= 'Main'>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
