import React from 'react'
import styles from './forms.styles'

export default class AdministratorForm extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit () {
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVEL ADMINISTRATEUR</div>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
