import React from 'react'
import styles from './Recipe.styles'
import Slider from 'react-slick'
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
    const recipe =
    {
      title: 'salsa',
      thumbnail: '/assets/imgs/imgDefault.png',
      description: 'setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.',
      pictures: [],
      videos: ['https://www.youtube.com/embed/tgbNymZ7vqY'],
      audios: [1, 2, 3, 4, 5, 6, 8],
      author: 'TOTO',
      createdAt: Date.now,
      materials: [],
      rooms: [],
      number: 'duo'
    }
    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className = 'sideBarre'>
        <div className='PageTitle'><h1>{recipe.title}</h1></div>
        <div className='RecipePictrue'>
          <img src= {recipe.thumbnail} width= '128px' height = '128px' alt=''/>
        </div>
        <div className='number1'><div className='numberTitle' >Proposée par: </div>{recipe.author}</div>

        <div className='number'><div className='numberTitle' >Nombre de participant: </div>{recipe.number}</div>
        <div className='sideBarreFoot'>
          <div className='item'>
            <div className ='itemTitle'>Ingrédients: </div>
            <div className='element'>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
          <div className='item'>
            <div className ='itemTitle'>Pièces: </div>
            <div className='element'>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className= 'Main'>
        <div className='Title'>Description: </div>
        <div className='Description'>{recipe.description} </div>

        <div className='Title'>Consignes: </div>
        <div className='Description'>{recipe.description} </div>

        <div className='videos'>
          <div>
            <div className='videos-title'>Videos:</div>
            <div className= 'videoelement'>
              <Slider {...setting}>
                {
                  recipe.videos.map((hotVideo, i) => {
                    return (
                      <div key={i}><div className='video'><iframe id='video-iframe' title='{hotVideo.title}' width='100%' height='345' src={hotVideo} /></div></div>
                    )
                  })
                }
              </Slider>
            </div>
          </div>
        </div>

        <div className= 'pictures'>
          <div>
            <div className='videos-title'>Photos</div>
            <div className='pictureelement'>
              <Slider {...settings}>
                <div key={1}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              </Slider>
            </div>
          </div>
        </div>

        <div className = 'audios'>
          <div className='videos-title'>Audios</div>
          <div className='audioelement'>
            <div className='audio'>
              <ul>
                {
                  recipe.audios.map((book, i) =>
                    <div className='iteeem'><li key={i}>
                      <div className='audio-label'>
                    TOTO, smou7at
                      </div>
                      <div className='lecteur'>
                        <audio controls="controls" skin ='TED'>
                          <source src= 'http://41mag.fr/music.mp3' type="audio/mp3" />
                       Votre navigateur n'est pas compatible
                        </audio>
                      </div>
                    </li>
                    </div>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
