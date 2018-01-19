import React from 'react'
import styles from './Artist.styles'
import {connect} from 'react-redux'
import Slider from 'react-slick'
import {setArtist} from '../../store/actions/artist.action'

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
  render () {
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
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`)
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
    const bio = 'Zinédine Yazid Zidane, né le 23 juin 1972 à Marseille, est un footballeur international français devenu entraîneur. Durant sa carrière de joueur, entre 1988 et 2006, il évolue au poste de milieu offensif, comme meneur de jeu. Depuis 2016, il est entraîneur du Real Madrid, où il a terminé sa carrière de joueurr  Surnommé « Zizou », il est considéré comme l un des plus grands joueurs de l histoire du football. Doté d un profil atypique, il remporte de nombreux titres, tant avec l équipe de France qu avec les clubs où il a joué, comme les Girondins de Bordeaux, la Juventus de Turin et le Real Madrid. Il a, de plus, été nommé meilleur joueur de l année au moins une fois dans chaque championnat où il a évolué.  Zidane est selon la BBC le meilleur joueur européen de l histoire. Il est désigné meilleur joueur européen des cinquante dernières années par l UEFA en 2004. Il est cité parmi les 125 meilleurs joueurs mondiaux encore vivants en 2004, dans un classement conjoint de Pelé et de la FIFA. Il est à trois reprises nommé meilleur joueur mondial de l année par la FIFA, en 1998, 2000 et 2003, et remporte le Ballon d or en 1998. Il est par deux fois classé second meilleur joueur français de tous les temps par France Football. En 2011, toujours par l UEFA, il est élu meilleur joueur de la Ligue des champions des vingt dernières années. Membre de l équipe UEFA du xxie siècle, du Onze des Légendes de l Euro (meilleure équipe de l histoire du Championnat d Europe), de la FIFA World Cup Dream Team (meilleure équipe de l histoire de la Coupe du monde) et de la Dream Team World Soccer (meilleure équipe de l histoire), Zinédine Zidane a, en outre, été élu meilleur joueur de la décennie 2000 par Marca, Sports Illustrated, Fox Sports, ESPN et Don Balón.'
    const books = [ 1, 2, 3, 4, 5, 6 ]
    const artist = {
      nom: nom,
      prenom: prenom,
      bio: bio,
      books: books
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
          <div className = 'artistBio'> {artist.bio} </div>
        </div>
      </div>
      <div className = 'middle'>
        <div className = 'middleHead'>
          <div className = 'books'>
            <div className='books-title'><h2>Œuvres</h2></div>
            <div className='book'>
              <ul>
                {
                  artist.books.map((book, i) =>
                    <div className='iteem'><li key={i}>
                  - Aleph, Flammarion, 2011
                    </li>
                    </div>
                  )
                }
              </ul>
            </div>
          </div>
          <div className = 'diplomes'>
            <div className='diplome-title'><h2>Diplômes</h2></div>
            <div className='diplome'>
              <ul>
                {
                  artist.books.map((book, i) =>
                    <div className='iteem'><li key={i}>
                  - Aleph, Flammarion, 2011
                    </li>
                    </div>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
        <div className= 'pictures'>
          <div>
            <div className='pictures-title'><h2>Photos</h2></div>
            <Slider {...settings}>
              <div key={1}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              <div key={2}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              <div key={3}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              <div key={5}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              <div key={4}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
              <div key={6}><div className = 'picture'><img className = 'picture' src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' alt=''/></div></div>
            </Slider>
          </div>
        </div>
        <div className= 'videos'>
          <div>
            <div className='videos-title'><h2>Videos</h2></div>
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
        <div className = 'references-list'>
          <div className = 'references-table-title'><h2>  Textes et publications </h2></div>
          <div className='reference'>
            <table>
              <thead>
                <tr>
                  <th> Nom </th>
                  <th> Description </th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map((book, i) =>
                    <tr key={i}>
                      <td>Bill Gates</td>
                      <td>55577854</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
