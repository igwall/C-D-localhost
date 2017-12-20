import React, { Component } from 'react'
import {
  // NavLink,
  HashRouter
} from 'react-router-dom'
import styles from './Recipe.styles'
class Recipe extends Component {
  render () {
    return (
      <div>
        <HashRouter>
          <div className='recipe'>
            <div className='title'>
              <h1>Simple Recipe</h1>
            </div>
            <div className='checkBox'>
              <label class='form-check-label'>
                <input type='checkbox' class='form-check-input' />
      Valider
              </label>
            </div>

            <ul className='header'>
              <h2> Consignes/Indication</h2>
            </ul>
            <div className='content'>
              <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
            <ul className='header'>
              <h2> Pourquoi</h2>
            </ul>
            <div className='content'>
              <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
          </div>

        </HashRouter>
        <style jsx> {styles} </style>
      </div>

    )
  }
}
export default Recipe
