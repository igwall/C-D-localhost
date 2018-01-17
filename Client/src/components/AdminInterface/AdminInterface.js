import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRecipes } from '../../store/actions/recipes.action'
import Icon from '../UI/Icon/Icon'

@connect(store => {
  return {
    materials: store.materials.elements,
    recipes: store.recipes.elements,
    collaborators: store.materials.elements
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    setRecipes().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setMaterials().then(() => {
    }).catch(err => {
      console.error(err)
    })
    setCollaborators().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  render () {
    return (<div className='host'>
      <div className='sidebar'>
        <div className='title'>ADMINISTRATION</div>
        <div className='panel panel-recipes'>
          <div className='panel-title'>Recettes</div>
          <div className='panel-buttons'>
            <div className='button'>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES RECETTES</div>
            </div>
            <div className='button'>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVELLE RECETTE</div>
            </div>
          </div>
        </div>
        <div className='panel panel-materials'>
          <div className='panel-title'>Ingrédients</div>
          <div className='panel-buttons'>
            <div className='button'>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES INGRÉDIENTS</div>
            </div>
            <div className='button'>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVEL INGRÉDIENT</div>
            </div>
          </div>
        </div>
        <div className='panel panel-collaborators'>
          <div className='panel-title'>Artistes Invités</div>
          <div className='panel-buttons'>
            <div className='button'>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES ARTISTES INVITÉS</div>
            </div>
            <div className='button'>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>DEMANDES DE COLLABORATIONS</div>
            </div>
          </div>
        </div>
        <div className='panel panel-administrators'>
          <div className='panel-title'>Administrateurs</div>
          <div className='panel-buttons'>
            <div className='button'>
              <div className='button-icon'><Icon name='th-list' color='' fontSize='' /></div>
              <div className='button-text'>AFFICHER LES ADMINISTRATEURS</div>
            </div>
            <div className='button'>
              <div className='button-icon'><Icon name='plus-square' color='' fontSize='' /></div>
              <div className='button-text'>NOUVEL ADMINISTRATEUR</div>
            </div>
          </div>
        </div>
      </div>
      <div className='main'>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
