import React from 'react'
import styles from './composent.styles'
import {connect} from 'react-redux'
import Slider from 'react-slick'
@connect(store => {
  return {
    Videos: store.artistFetched.artist
  }
})

export default class News extends React.Component {
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

    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>En ce moment</h2></div>
          <Slider {...setting}>
            <div key={1}><div className = 'video'><iframe id="video-iframe" title ='1' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
            <div key={2}><div className = 'video'><iframe title ='2' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
            <div key={3}><div className = 'video'><iframe title ='1' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
            <div key={4}><div className = 'video'><iframe title ='1' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
            <div key={5}><div className = 'video'><iframe title ='1' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
            <div key={6}><div className = 'video'><iframe title ='1' width='100%' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe></div></div>
          </Slider>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>

    )
  }
}
