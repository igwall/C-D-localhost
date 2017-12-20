import React from 'react'
import PopupLayout from '../layouts/popup'
import Homepage from '../components/Homepage/Homepage'
import PopupManager from '../components/PopupManager/PopupManager'

export default (props) => (
  <PopupManager>
    <PopupLayout>
      <Homepage />
    </PopupLayout>
  </PopupManager>
)
