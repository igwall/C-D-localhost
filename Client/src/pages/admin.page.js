import React from 'react'
import PopupLayout from '../layouts/popup'
import PopupManager from '../components/PopupManager/PopupManager'
import AdminInterface from '../components/AdminInterface/AdminInterface'

export default (props) => (
  <PopupManager>
    <PopupLayout>
      <AdminInterface />
    </PopupLayout>
  </PopupManager>
)
