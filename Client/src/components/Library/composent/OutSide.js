import React from 'react'
import styles from './composent.styles'

export default class News extends React.Component {
  render () {
    let books = []
    books = this.props.references
    return (<div className='host'>
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <div className='videos'>
        <div>
          <div className='videos-title'><h2>Ailleurs nous aimons...</h2></div>
          <table>
            <thead>
              <tr>
                <th> Titre </th>
                <th> Description </th>
                <th> Lien </th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, i) =>
                  <tr key={i}>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>{book.link}</td>
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
