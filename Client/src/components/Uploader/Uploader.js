import React from 'react'
import styles from './Uploader.styles'
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'

export default class Uploader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      value: [],
      error: '',
      file: ''
    }
    this.onDrop = this.onDrop.bind(this)
    this.acceptedFiles = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'application/pdf', 'application/zip', 'application/rar', 'text/markdown', 'text/plain']
    this.setAcceptedTypes = this.setAcceptedTypes.bind(this)
    this.setErrorMessage = this.setErrorMessage.bind(this)
    this.setMaxSize = this.setMaxSize.bind(this)
  }

  static propTypes = {
    fileType: PropTypes.string,
    uploadFile: PropTypes.func
  }

  onDrop (file) {
    this.setState({value: file})
    this.props.uploadFile(file)
  }

  setAcceptedTypes () {
    let accept = ''
    if (this.props.fileType === 'image') {
      accept = 'image/jpeg, image/png, image/gif'
    } else if (this.props.fileType === 'pdf') {
      accept = 'application/pdf'
    } else if (this.props.fileType === 'video') {
      accept = 'video/mpeg, video/quicktime, video/mp4'
    } else if (this.props.fileType === 'audio') {
      accept = 'audio/mpeg, audio/x-wav, audio/x-ms-wma'
    }
    return accept
  }

  setMaxSize () {
    let maxSize = Infinity
    if (this.props.fileType === 'image') {
      maxSize = 30 * 1024 * 1024
    } else if (this.props.fileType === 'pdf') {
      maxSize = 250 * 1024 * 1024
    } else if (this.props.fileType === 'video') {
      maxSize = 1024 * 1024 * 1024
    } else if (this.props.fileType === 'audio') {
      maxSize = 250 * 1024 * 1024
    }
    return maxSize
  }

  setErrorMessage () {
    let error = ''
    if (this.props.fileType === 'image') {
      error = "L'image doit peser moins de 30Mo et doit respecter un des formats suivants : .jpeg .jpg .png .gif"
    } else if (this.props.fileType === 'pdf') {
      error = 'Le fichier doit peser moins de 250Mo et doit respecter un des formats suivants : .pdf'
    } else if (this.props.fileType === 'video') {
      error = 'La vidéo doit peser moins de 1Go'
    } else if (this.props.fileType === 'audio') {
      error = 'Le fichier audio doit peser moins de 250Mo'
    }
    this.setState({error: error})
  }

  test (f) {

  }

  render () {
    return (
      <div>
        {
          this.state.error !== ''
            ? <div className='error-panel'>
              {this.state.error}
            </div>
            : undefined
        }
        <Dropzone
          accept={this.setAcceptedTypes()}
          className='drop'
          rejectClassName='reject-drop'
          onDrop={(file) => this.onDrop(file)}
          onDropRejected={this.setErrorMessage}
          maxSize={this.setMaxSize()}
        >
          <div className='dropper'>
            <span>{this.state.value.map(f => f.name)}</span>
            <div className='button'>UPLOAD</div>
          </div>
        </Dropzone>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
