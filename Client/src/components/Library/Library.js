import React from 'react'
import styles from './Library.styles'
import {connect} from 'react-redux'
import {setCollaborators} from '../../store/actions/collaborators.action'

@connect(store => {
  return {
    collaborators: store.collaborators.elements
  }
})

export default class Library extends React.Component {
  componentDidMount () {
    setCollaborators().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }
  render () {
    const collaborators = this.props.collaborators
    const books = [ 1, 2, 3, 4, 5, 6, 7 ]
    return (<div className='host'>
      <div className = 'sideBarre'>
        <div className= 'admin-info'>
          <div className = 'picture'>  </div>
          <div className = 'admin-name'><a href="https://www.w3schools.com/html/"> Muriel PIQUE </a></div>
        </div>
      </div>
      <div className = 'main'>
        <h1>BIBLIOTHÈQUE</h1>
        <div className='head'>

          <div className='site-description'>
            <div className = 'title'>Qu'est ce que c'est compose & danse</div>
            <div className='textBody'> Sarah Belouezzane : Bonjour, pour l’entreprise la rupture conventionnelle est plus sûre juridiquement qu’un plan de sauvegarde de l’emploi qui, lui, repose principalement sur la jurisprudence. Il est beaucoup plus difficile de contester la première que le second et elle ne s’accompagne pas des mêmes obligations de reclassement et de formation que le PSE.

Maestro : Les ruptures conventionnelles sont-elles aussi protectrices pour les salariés qu’un plan de sauvegarde de l’emploi ?

S.B. : Elles peuvent être plus avantageuses financièrement mais pas plus protectrices. Plus difficiles à contester que le PSE, elles ont, par ailleurs, le défaut de priver la personne du CSP, le contrat de sécurisation professionnelle. Ce dispositif permet un suivi plus intensif des demandeurs d’emploi victimes d’un licenciement économique et leur assure, pendant un an, une indemnité plus importante que celle de base.

Yolo : Mais les ruptures conventionnelles collectives ne seraient-elles pas un bon moyen de faire des plans sociaux déguisés ?

S.B : Le gouvernement a normalement prévu des garde-fous : il faut, pour signer une RCC, la signature des syndicats représentant plus de 50 % des salariés. Il faut par ailleurs obtenir l’accord des services déconcentrés du ministère du travail pour chaque projet de RCC. Cela dit, les syndicats craignent que le système ne soit dévoyé. Pour eux, des employeurs mal intentionnés pourraient recourir à des pressions pour faire signer ce type de plans par les syndicats et éviter le plan social, plus contraignant.
En savoir plus sur http://www.lemonde.fr/politique/article/2018/01/09/le-salarie-n-aura-pas-droit-au-contrat-de-securisation-qui-permet-un-suivi-plus-intensif_5239300_823448.html#3DoLHM7QHHjCPIlL.99 </div>
          </div>
        </div>
        <div className="footer">
          <div className = 'collaborator-list'>
            <div className = 'collaborator-table-title'>  collaborator List </div>
            <ul>
              {
                collaborators.map((collaborator, i) =>
                  <li key={i}>
                    <a href="https://www.w3schools.com/html/"><div className = 'collaborator'>
                      <div className = 'collaborator-picture'>
                      </div>
                      <div className="collaborator-info">
                        <div className="collaborator-name">Lara Fabien</div>
                        <div className = "collaborator-description">Artiste Enseignant Chercheur</div>
                      </div>
                    </div></a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className = 'references-list'>
          <div className = 'references-table-title'>  References </div>
          <div className='reference'>
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
      </div>
      <style jsx>{styles}</style>
    </div>

    )
  }
}
