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

  getNumber (number) {
    switch (number) {
      case 'more': {
        return 'Plus de 5 personnes...'
      }
      default: {
        return number.charAt(0).toUpperCase() + number.slice(1)
      }
    }
  }

  render () {
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
    recipe.number = this.getNumber(recipe.number)

    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className = 'sideBarre'>
        <div className='PageTitle' />
        <div className='RecipePictrue'>
          <img src= {recipe.thumbnail} width= '128px' height = '128px' alt=''/>
        </div>
        <div className='recipeInfo'>
          <div className='number1'><div className='numberTitle' >Proposée par: </div>
            {recipe.collaborator !== undefined ? <div className='text'>{recipe.collaborator.firstname + ' ' + recipe.collaborator.lastname}</div>
              : <div className='text'> Muriel PIQUE</div> }
          </div>

          <div className='number'><div className='numberTitle' >Nombre de participants </div><div className='text'>{recipe.number}</div> </div>
          <div className='sideBarreFoot'>
            <div className='item'>
              <div className ='itemTitle'>Composants </div>
              <div className='element'>
                {
                  recipe.materials.map((material, i) => {
                    let text = material.name
                    if (i + 1 !== recipe.materials.length) text = text + ', '
                    return text
                  })
                }
              </div>
            </div>
            <div className='item'>
              <div className ='itemTitle'>Pièces: </div>
              <div className='element'>
                {
                  recipe.rooms.map((room, i) => {
                    let text = room.name
                    if (i + 1 !== recipe.rooms.length) text = text + ', '
                    return text
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className= 'Main'>
        <div className='MainTitle'>{recipe.title}</div>
        <div className='Title'>Description</div>
        <div className='Description'>{recipe.description} </div>

        <div className='Title'>Scénario</div>
        <div className='Description'>{recipe.statement} </div>

        {
          recipe.videos.length > 0
            ? <div className='videos'>
              <div>
                <div className='videos-title'>Vidéos</div>
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
            : undefined
        }

        {recipe.pictures.length > 0 ? <div className= 'pictures'>
          <div>
            <div className='videos-title'>Photos</div>
            <div className='pictureelement'>
              <Slider {...settings}> {
                recipe.pictures.map((picture, i) => {
                  return (
                    <div key={1}><div className = 'picture'><img className = 'picture' src= {picture.link} alt=''/></div></div>
                  )
                })
              } </Slider>
            </div>
          </div>
        </div> : <div className="Description"> </div> }
        {recipe.audios.length > 0 ? <div className = 'audios'>
          <div className='videos-title'>Audios</div>
          <div className='audioelement'>
            <div className='audio'>
              <ul>
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
              </ul>  }

            </div>
          </div>
        </div> : <div className="Description"> </div> }
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
