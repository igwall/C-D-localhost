import React from 'react'
import PopupLayout from '../layouts/popup'
import Library from '../components/Library/Library'
import PopupManager from '../components/PopupManager/PopupManager'

export default (props) => (
  <PopupManager>
    <PopupLayout>
      <Library />
    </PopupLayout>
  </PopupManager>
)
