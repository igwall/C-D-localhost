import React from 'react'
import styles from './forms.styles'

export default class RecipeForm extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit () {
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVELLE RECETTE</div>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
