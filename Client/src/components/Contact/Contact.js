import React from 'react'
import styles from './Contact.styles'

export default class Contact extends React.Component {
  render () {
    return (<div className='host'>
      <div className='sideBarre'>
        <div className='PageTitle'><h1>Nous contacter</h1></div>
        <div className='Description'> Un concept qui se développe petit à petit sur différents sites : les champs forment un texte à trous cohérent, que l’utilisateur doit remplir. Un bon moyen de faire participer activement l’utilisateur, sans devoir remplir un formulaire rébarbatif. </div>
      </div>
      <div className='Main'>
        <div className='Forms'>
          <div className='Forms-Item'>
            <div className='item'>
              <input
                type='text'
                placeholder='Email'
                // onChange={this.checkName.bind(this)}
                ref={n => { this.name = n }}
              />
            </div>
            <div className='item'>
              <input
                type='text'
                placeholder='Nom et Prénom'
                // onChange={this.checkName.bind(this)}
                ref={n => { this.name = n }}
              />
            </div>
            <div className='item'>
              <input
                type='text'
                placeholder='Numéro de telephone'
                // onChange={this.checkName.bind(this)}
                ref={n => { this.name = n }}
              />
            </div>
            <input
              type='text'
              placeholder='Sujet'
              // onChange={this.checkName.bind(this)}
              ref={n => { this.name = n }}
            />
            <div className='Message'>
              <input
                type='text'
                placeholder='Message'
                // onChange={this.checkName.bind(this)}
                ref={n => { this.name = n }}
              />
            </div>
          </div>

        </div>
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
