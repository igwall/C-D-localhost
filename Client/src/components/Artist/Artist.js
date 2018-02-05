import React from 'react'
import styles from './Artist.styles'
import {connect} from 'react-redux'
import Slider from 'react-slick'
import Book from '../Book/Book'
import {setArtist} from '../../store/actions/artist.action'
import constants from '../../constants'

@connect(store => {
  return {
    artist: store.artistFetched.artist
  }
})

export default class Artist extends React.Component {
  componentDidMount () {
    setArtist().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  show (id, suit, moins) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = 'block'
      document.getElementById(suit).style.display = 'none'
      document.getElementById(moins).style.display = 'block'
    }
  }

  hidden (id, suit, moins) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = 'none'
      document.getElementById(suit).style.display = 'block'
      document.getElementById(moins).style.display = 'none'
    }
  }
  displayBook (book) {
    this.props.popoverManager.setRenderedComponent(
      <Book {...book} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }
  chooseBook (id) {
    const {books} = this.props.artist.books
    this.displayBook(books.filter(book => book.id === id)[0])
  }
  render () {
    const settings = {
      accessibility: true,
      touchmove: true,
      autoplay: true,
      autoplaySpeed: 5000,
      className: 'center',
      infinite: true,
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function (index) {
      }
    }
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
    const nom = 'Muriel'
    const prenom = 'PIQUE'
    const bio = constants.BIO_MURIEL_DEBUT
    const books = [ constants.OEUVRE_MURIEL, constants.OEUVRE1_MURIEL, constants.OEUVRE2_MURIEL, constants.OEUVRE3_MURIEL, constants.OEUVRE4_MURIEL ]
    const artist = {
      nom: nom,
      prenom: prenom,
      bio: bio,
      books: books,
      pictureLegend: ''
    }
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className='head'>
        <div className='headLeftSide'>
          <div className = 'artistPicture'><img className = 'pic' src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/07c/16c/3d00735.jpg' alt=''/></div>
          <div className = 'artistName'> {artist.nom + ' ' + artist.prenom}   </div>
          <div className = 'artistAudio'></div>
        </div>
        <div className='headRightSide'>
          <div className = 'Bio-title'><h2>  Biographie </h2></div>
          <div className = 'artistBio'> {artist.bio}
            <p className='LireSuite' id='suit' onClick={() => this.show('next', 'suit', 'moins')}>Lire la suite...</p>
            <p className= 'suite' id='next'>
              <p>{constants.BIO_MURIEL_SUITE1}</p>
              <p>{constants.BIO_MURIEL_SUITE2}</p>
              <p>{constants.BIO_MURIEL_SUITE3}</p>
            </p>
            <div className='LireMoins' id='moins'><p id='moins' onClick={() => this.hidden('next', 'suit', 'moins')}>Lire Moins.....</p></div>
            Actuellement
            <div className= 'artistBio2' id='next'>
              {constants.BIO_MURIEL_FIN}
            </div>
          </div>
          <div className= 'Demarche'>
            <div className = 'Bio-title'><h2>  Démarche artistique </h2></div>
            <div className = 'artistBio'> {constants.DEMARCHE_MURIEL_TEXT}
            </div>
          </div>
          <div className='artistDiplome'>
          </div>
        </div>
      </div>
      <div className = 'middle'>
        <div className = 'SideBar'>
        </div>
        <div className = 'Main'>
          <div className = 'middleHead'>
            <div className = 'books'>
              <div className='books-title'><h2>Œuvres</h2></div>
              <div className='book'>
                <ul>
                  {
                    artist.books.map((book, i) =>
                      <div onClick={() => this.displayBook(book)} className='iteem'><li key={i}>
                        {book.TITRE}
                      </li>
                      </div>
                    )
                  }
                </ul>
              </div>
            </div>
            <div className = 'references-list'>
              <div className = 'references-table-title'><h2>  Communications écrite </h2></div>
              <div className='reference'>
                <table>
                  <thead>
                    <tr>
                      <th> Ecrivain </th>
                      <th> TITRE </th>
                      <th> Informations complémenataires </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr >
                      <td>{constants.ECRIT_MURIEL.ECRIVAIN}</td>
                      <a href={constants.ECRIT_MURIEL.LINK}> <td>{constants.ECRIT_MURIEL.TITRE}</td> </a>
                      <td>{constants.ECRIT_MURIEL.DESCRIPTION}</td>
                    </tr>

                  </tbody>

                </table>
              </div>

            </div>
          </div>
          <div className= 'pictures'>
            <div>
              <div className='pictures-title'><h2>Photos</h2></div>
              <Slider {...settings}>
                <div key={1}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img1.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
                <div key={2}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img2.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
                <div key={3}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img3.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
                <div key={5}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img4.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
                <div key={4}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img5.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
                <div key={6}><div className = 'picture'><img className = 'picture' src='/assets/tmp/img6.jpg' width="250px" height="250px" alt=''/></div><div className='pictureLegend'>{artist.pictureLegend} </div></div>
              </Slider>
            </div>
          </div>
          <div className= 'videos'>
            <div>
              <div className='videos-title'><h2>Videos</h2></div>
              <Slider {...setting}>
                <div key={1}><div className = 'video'><iframe id="video-iframe" title ='1' width='100%' height='345' src='https://www.youtube.com/embed/SXQXI8C9TMM'></iframe></div></div>
                <div key={2}><div className = 'video'><iframe title ='2' width='100%' height='345' src='https://www.youtube.com/embed/01SuTN-wPX0'></iframe></div></div>
                <div key={3}><div className = 'video'><iframe title ='1' width='100%' height='345' src='https://www.youtube.com/embed/mLZltzFD3oc'></iframe></div></div>
                <div key={4}><div className = 'video'><iframe title ='1' width='100%' height='345' src='src=https://www.youtube.com/embed/BDWfLDTn6W0'></iframe></div></div>
              </Slider>
            </div>
          </div>
          <div className = 'audios'>
            <div className='audio-title'><h2>Audios</h2></div>
            <div className='audio'>
              <ul>
                {
                  artist.books.map((book, i) =>
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
