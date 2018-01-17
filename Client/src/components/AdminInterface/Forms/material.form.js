import React from 'react'
import styles from './forms.styles'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import { addMaterial } from '../../../store/actions/material.action'

export default class MaterialForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nameValid: false,
      freeName: true,
      added: ''
    }
    this.submit = this.submit.bind(this)
    this.checkName = this.checkName.bind(this)
  }

  isFormValid () {
    return this.state.nameValid && this.state.freeName
  }

  checkName () {
    this.setState({added: ''})
    if (this.name.value !== '') {
      this.setState({nameValid: true})
      if (this.props.materials.filter(material => material.name === this.name.value)[0] !== undefined) {
        this.setState({freeName: false})
      } else {
        this.setState({freeName: true})
      }
    } else {
      this.setState({nameValid: false})
    }
  }

  submit (e) {
    if (e) e.preventDefault()
    const name = this.name.value
    if (this.isFormValid()) {
      addMaterial(name).then(material => {
        this.name.value = ''
        this.setState({added: material.name})
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render () {
    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVEL INGRÉDIENT</div>
        <form onSubmit={this.submit}>
          {
            !this.state.freeName
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='error-message'>Cet ingrédient existe déjà. Choisissez un autre nom.</div>
                </div>
              </div>
              : undefined
          }
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>L'ingrédient "{this.state.added}" a été ajouté avec succès !</div>
                </div>
              </div>
              : undefined
          }
          <div className='input-group'>
            <div className='input-label'>Nom de l'ingrédient</div>
            <input type='text' placeholder='Verre de vin' ref={i => { this.name = i }} onChange={this.checkName} />
          </div>
          <div className='add-button'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              AJOUTER INGRÉDIENT
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
