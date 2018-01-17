import React from 'react'
import styles from './AdminInterface.styles'
import {connect} from 'react-redux'
import { setCollaborators } from '../../store/actions/collaborators.action'
import { setMaterials } from '../../store/actions/material.action'
import { setRecipes } from '../../store/actions/recipes.action'

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
      <div className='main'>
        <div className='title'>Administration</div>
        <div className='panel panel-recipes'>
          <div className='panel-title'>Recettes</div>
        </div>
        <div className='panel panel-materials'>
          <div className='panel-title'>Ingrédients</div>
        </div>
        <div className='panel panel-collaborators'>
          <div className='panel-title'>Artistes Invités</div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
