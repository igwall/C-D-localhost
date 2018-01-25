import React from 'react'
import styles from './composent.styles'
import {connect} from 'react-redux'
@connect(store => {
  return {
    Videos: store.artistFetched.artist
  }
})

export default class News extends React.Component {
  render () {
    const books = [ 1, 2, 3, 4, 5, 6, 7 ]
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>Ailleurs nous aimons,</h2></div>
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

      <style jsx>{styles}</style>
    </div>

    )
  }
}
