import React from 'react'
import styles from './composent.styles'
import {setHotVideos} from '../../../store/actions/library.action'
import Slider from 'react-slick'

export default class News extends React.Component {
  componentDidMount () {
    setHotVideos().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  constructor (props) {
    super(props)
    this.state = {
      emptySearch: true,
      matchingHotVideos: [],
      deleted: ''
    }
  }
  render () {
    let hotVideos = []
    hotVideos = this.props.hotVideos
    console.log(hotVideos)
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

    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className='videos'>
        <div>
          <div className='videos-title'><h2>En ce moment</h2></div>
          <Slider {...setting}>
            {
              hotVideos.map((hotVideo, i) => {
                return (
                  <div key={i}><div className='video'><iframe id='video-iframe' title={hotVideo.title} width='100%' height='345' src={hotVideo.youtube_link} /></div></div>
                )
              })
            }
          </Slider>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>

    )
  }
}
