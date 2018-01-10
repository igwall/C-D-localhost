import React from 'react'
import PropTypes from 'prop-types'

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    solid: PropTypes.bool,
    fontSize: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    name: 'star',
    color: '#444',
    solid: true
  }

  render () {
    const {
      name,
      color,
      solid,
      fontSize,
      ...props
    } = this.props

    props.style = {
      color: color,
      fontSize: fontSize,
      ...props.style
    }

    return (
      <i style={props.style} className={`${solid === true ? 'fas' : 'far'} fa-${name} fa-lg`} />
    )
  }
}
