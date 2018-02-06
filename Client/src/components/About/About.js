import React from 'react'
import styles from './About.styles'

export default class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  componentDidMount () {

  }
  render () {
    return (<div className='host'>
      <div className='sideBarre'>
        <div className='sidebar-title'>À Propos</div>
      </div>
      <div className='main'>
        <div className='Block'>
          <div className='Title'> Mentions legales</div>
          <div className='item'>
            <div className='itemTitle'> Développé par: </div>
            <div className='itemContent'> HAMIDA Maroane et NAITSSI Yassine</div>
          </div>
          <div className='item'>
            <div className='itemTitle'> Sur une idée de: </div>
            <div className='itemContent1'> PIQUE Muriel </div>
          </div>
          <div className='item'>
            <div className='itemTitle'> Logo conçu par: </div>
            <div className='itemContent1' />
          </div>
        </div>
        <div className='Block'>
          <div className='Title'> Nos partenaires</div>
          <div className='Table'>
            <table>
              <thead>
                <tr>
                  <th> Nom </th>
                  <th> Logo </th>
                  <th> But </th>
                </tr>
              </thead>
              <tbody>
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
