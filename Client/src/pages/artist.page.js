import React from 'react'
import PopupLayout from '../layouts/popup'
import Artist from '../components/Artist/Artist'
import PopupManager from '../components/PopupManager/PopupManager'

export default (props) => (
  <PopupManager>
    <PopupLayout>
      <Artist />
    </PopupLayout>
  </PopupManager>
)
