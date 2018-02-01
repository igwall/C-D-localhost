import React from 'react'
import styles from './forms.styles'
import Icon from '../../../UI/Icon/Icon'
import Button from '../../../UI/Button/Button'
import Select from 'react-select'
import { addRecipeRequest } from '../../../../store/actions/recipes.action'

export default class RecipeRequestForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      freeTitle: true,
      added: '',
      titleValid: false,
      descriptionValid: false,
      statementValid: false,
      selectedMaterials: [],
      materialFull: false,
      selectedRooms: [],
      selectedNumber: 'solo'
    }
    this.submit = this.submit.bind(this)
    this.checkTitle = this.checkTitle.bind(this)
    this.checkDescription = this.checkDescription.bind(this)
    this.checkStatement = this.checkStatement.bind(this)
    this.setMaterialSelect = this.setMaterialSelect.bind(this)
    this.setRoomSelect = this.setRoomSelect.bind(this)
  }

  submit (e) {
    if (e) e.preventDefault()
    const title = this.title.value
    const description = this.description.value
    const statement = this.statement.value
    const number = this.state.selectedNumber
    const rooms = this.state.selectedRooms
    const materials = this.state.selectedMaterials
    const collaborator = this.props.currentCollaborator._id

    const newRecipe = {
      title: title,
      description: description,
      statement: statement,
      number: number,
      rooms: rooms,
      materials: materials,
      collaborator: collaborator
    }

    if (this.isFormValid()) {
      addRecipeRequest(newRecipe).then(recipe => {
        this.setState({added: recipe.title})
        this.resetForm()
      }).catch(err => {
        console.log(err)
      })
    }
  }

  resetForm () {
    this.setState({
      selectedMaterials: [],
      selectedRooms: [],
      selectedNumber: 'solo',
      titleValid: false,
      descriptionValid: false,
      statementValid: false
    })
    this.title.value = ''
    this.description.value = ''
    this.statement.value = ''
  }

  checkTitle () {
    this.setState({added: ''})
    if (this.title.value !== '') {
      this.setState({titleValid: true})
      if (this.props.recipes.filter(recipe => recipe.title.toLowerCase() === this.title.value.toLowerCase())[0] !== undefined) {
        this.setState({freeTitle: false})
      } else {
        this.setState({freeTitle: true})
      }
    } else {
      this.setState({titleValid: false})
    }
  }

  checkDescription () {
    this.setState({added: ''})
    if (this.description.value !== '') {
      this.setState({descriptionValid: true})
    } else {
      this.setState({descriptionValid: false})
    }
  }

  checkStatement () {
    this.setState({added: ''})
    if (this.statement.value !== '') {
      this.setState({statementValid: true})
    } else {
      this.setState({statementValid: false})
    }
  }

  handleSelectMaterialChange (selectedOption) {
    const full = selectedOption.split(',').length === 5
    this.setState({
      selectedMaterials: selectedOption,
      materialFull: full
    })
  }

  handleSelectRoomChange (selectedOption) {
    this.setState({
      selectedRooms: selectedOption
    })
  }

  handleSelectNumberChange (selectedOption) {
    this.setState({
      selectedNumber: selectedOption
    })
  }

  setMaterialSelect () {
    let selectMaterials = []
    if (this.props.materials) {
      this.props.materials.map(material => {
        selectMaterials.push({ value: material._id, label: material.name, disabled: this.state.materialFull })
        return undefined
      })
    }
    return selectMaterials
  }

  setRoomSelect () {
    let selectRooms = []
    if (this.props.rooms) {
      this.props.rooms.map(room => {
        selectRooms.push({ value: room._id, label: room.name })
        return undefined
      })
    }
    return selectRooms
  }

  setNumberSelect () {
    const selectNumbers = [
      {value: 'solo', label: 'Solo'},
      {value: 'duo', label: 'Duo'},
      {value: 'trio', label: 'Trio'},
      {value: 'quatuor', label: 'Quatuor'},
      {value: 'quintuor', label: 'Quintuor'},
      {value: 'more', label: 'Plus de 5 personnes...'}
    ]
    return selectNumbers
  }

  isFormValid () {
    return this.state.titleValid &&
      this.state.freeTitle &&
      this.state.descriptionValid &&
      this.state.statementValid &&
      (this.state.selectedRooms.length > 0) &&
      (this.state.selectedMaterials.length > 0)
  }

  render () {
    const selectedMaterials = this.state.selectedMaterials
    const selectMaterials = this.setMaterialSelect()
    const selectedRooms = this.state.selectedRooms
    const selectRooms = this.setRoomSelect()
    const selectedNumber = this.state.selectedNumber
    const selectNumbers = this.setNumberSelect()

    return (<div className='host'>
      <div className='form'>
        <div className='form-title'>NOUVELLE PROPOSITION DE COMPOSITION</div>
        <form className='form-large' onSubmit={this.submit}>
          {
            !this.state.freeTitle
              ? <div className='error-panel'>
                <div className='error-content'>
                  <div className='error-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='error-message'>Cette composition existe déjà. Choisissez un autre titre.</div>
                </div>
              </div>
              : undefined
          }
          {
            this.state.added !== ''
              ? <div className='validation-panel'>
                <div className='validation-content'>
                  <div className='validation-icon'><Icon name='exclamation-triangle' fontSize='20px' color='#fff' /></div>
                  <div className='validation-message'>La proposition "{this.state.added}" a été envoyée avec succès ! Elle est maintenant en attente de validation.</div>
                </div>
              </div>
              : undefined
          }
          <div className='form-group'>
            <div className='form-column form-column-left'>
              <div className='input-group'>
                <div className='input-label'>Nom de la composition</div>
                <input type='text' placeholder='Lapin à la moutarde' ref={i => { this.title = i }} onChange={this.checkTitle} />
              </div>
              <div className='input-group'>
                <div className='input-label'>Description de la composition</div>
                <textarea type='text' placeholder='Description et objectifs de la recette...' ref={i => { this.description = i }} onChange={this.checkDescription} />
              </div>
              <div className='input-group'>
                <div className='input-label'>Consignes</div>
                <textarea type='text' placeholder='Les consignes de la recette, comment la réaliser...' ref={i => { this.statement = i }} onChange={this.checkStatement} />
              </div>
            </div>
            <div className='form-column form-column-right'>
              <div className='input-group'>
                <div className='input-label'>Composants (5 au max)</div>
                <div className='select'>
                  <Select
                    id='material-select'
                    multi
                    closeOnSelect={false}
                    removeSelected
                    simpleValue
                    placeholder='Sélectionnez un ou plusieurs composants...'
                    value={selectedMaterials}
                    onChange={this.handleSelectMaterialChange.bind(this)}
                    options={selectMaterials}
                  />
                </div>
              </div>
              <div className='input-group'>
                <div className='input-label'>Pièces concernées</div>
                <div className='select'>
                  <Select
                    id='room-select'
                    multi
                    closeOnSelect={false}
                    removeSelected
                    simpleValue
                    placeholder='Sélectionnez une ou plusieurs pièces...'
                    value={selectedRooms}
                    onChange={this.handleSelectRoomChange.bind(this)}
                    options={selectRooms}
                  />
                </div>
              </div>
              <div className='input-group'>
                <div className='input-label'>Nombre de participants</div>
                <div className='select'>
                  <Select
                    id='number-select'
                    ref={ref => { this.number = ref }}
                    placeholder='Solo, duo, trio...'
                    simpleValue
                    clearable={false}
                    value={selectedNumber}
                    onChange={this.handleSelectNumberChange.bind(this)}
                    options={selectNumbers}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='add-button add-button-large'>
            <Button
              bgColor={this.isFormValid() ? '#5AAC44' : '#999'}
              block
              disabled={!this.isFormValid()}
              onClick={() => this.submit()}>
              ENVOYER PROPOSITION
            </Button>
          </div>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>)
  }
}
