import React from 'react'
import styles from './composent.styles'

export default class News extends React.Component {
  render () {
    const book1 = {
      type: 'Site',
      title: 'Association des Chercheurs en danse',
      link: 'http://www.chercheurs-en-danse.com/fr'
    }
    const book2 = {
      type: 'Publication',
      title: '« La danse, le corps, l’inconscient » de José Gil (2000)',
      link: 'http://journals.openedition.org/terrain/1075'
    }
    const book3 = {
      type: 'Site Personnel',
      title: 'Thierry Thieû Niang',
      link: 'http://www.thierry-niang.fr/'
    }
    let books = [book1, book2, book3]
    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className='videos'>
        <div>
          <div className='videos-title'><h2>Ailleurs nous aimons...</h2></div>
          <table>
            <thead>
              <tr>
                <th> Type </th>
                <th> Titre </th>
                <th> Lien </th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, i) =>
                  <tr key={i}>
                    <td>{book.type}</td>
                    <td>{book.title}</td>
                    <td> <a href={book.link}> {book.link} </a></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>

    )
  }
}
