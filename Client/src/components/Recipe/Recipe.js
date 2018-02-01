import React from 'react'
import styles from './Recipe.styles'
import Slider from 'react-slick'
import { setRecipe } from '../../store/actions/recipes.action'
import {connect} from 'react-redux'

@connect(store => {
  return {
    recipe: store.recipeFetched.recipe
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
    setRecipe(this.props.recipeId).then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  render () {
    console.log(this.props.recipe.author)
    const setting = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      afterChange: function (index) {
        // var div = document.getElementById("popupVid")
        // var iframe = div.getElementsByTagName('iframe')[0].contentWindow
        // iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*')
      }
    }
    const settings = {
      accessibility: true,
      touchmove: true,
      autoplay: true,
      autoplaySpeed: 5000,
      className: 'center',
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function (index) {
      }
    }

    const recipe = this.props.recipe
    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className = 'sideBarre'>
        <div className='PageTitle'><h1>{recipe.title}</h1></div>
        <div className='RecipePictrue'>
          <img src= {recipe.thumbnail} width= '128px' height = '128px' alt=''/>
        </div>
        <div className='recipeInfo'>
          <div className='number1'><div className='numberTitle' >Proposée par: </div>
            <div className='text'> {recipe.author}</div>
            {recipe.author !== undefined ? <div className='text'> {recipe.author.name}</div>
              : <div className='text'> Muriel PIQUE</div> }
          </div>

          <div className='number'><div className='numberTitle' >Nombre de participant: </div><div className='text'>{recipe.number.toUpperCase()}</div> </div>
          <div className='sideBarreFoot'>
            <div className='item'>
              <div className ='itemTitle'>Ingrédients: </div>
              <div className='element'>
                {
                  recipe.materials.map((material, i) => {
                    return (
                      <div key={i}><div className='text1'>{material.name}</div></div>
                    )
                  })
                }
              </div>
            </div>
            <div className='item'>
              <div className ='itemTitle'>Pièces: </div>
              <div className='element'>
                {
                  recipe.rooms.map((room, i) => {
                    return (
                      <div key={i}><div className='text1'>{room.name}</div></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className= 'Main'>
        <div className='Title'>Description: </div>
        <div className='Description'>{recipe.description} </div>

        <div className='Title'>Consignes: </div>
        <div className='Description'>{recipe.statement} </div>

        <div className='videos'>
          <div>
            <div className='videos-title'>Videos:</div>
            <div className= 'videoelement'>
              {recipe.videos.length > 0 ? <Slider {...setting}> {
                recipe.videos.map((video, i) => {
                  return (
                    <div key={i}><div className='video'><iframe id='video-iframe' title={video.title} width='100%' height='345' src={video.link} /></div></div>
                  )
                })
              } </Slider> : <div className="Description"> Pas de video disponible pour cette composition </div> }
            </div>
          </div>
        </div>

        <div className= 'pictures'>
          <div>
            <div className='videos-title'>Photos</div>
            <div className='pictureelement'>
              {recipe.pictures.length > 0 ? <Slider {...settings}> {
                recipe.pictures.map((picture, i) => {
                  return (
                    <div key={1}><div className = 'picture'><img className = 'picture' src= {picture.link} alt=''/></div></div>
                  )
                })
              } </Slider> : <div className="Description"> Pas de photo disponible pour cette composition </div> }
            </div>
          </div>
        </div>

        <div className = 'audios'>
          <div className='videos-title'>Audios</div>
          <div className='audioelement'>
            <div className='audio'>
              {recipe.audios.length > 0 ? <ul>
                {
                  recipe.audios.map((audio, i) =>
                    <div className='iteeem'><li key={i}>
                      <div className='audio-label'>
                        {audio.title}
                      </div>
                      <div className='lecteur'>
                        <audio controls="controls" skin ='TED'>
                          <source src= {audio.link} type="audio/mp3" />
                       Votre navigateur n'est pas compatible
                        </audio>
                      </div>
                    </li>
                    </div>
                  )
                }
              </ul> : <div className="Description"> Pas de fichier audio disponible pour cette composition </div> }

            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
