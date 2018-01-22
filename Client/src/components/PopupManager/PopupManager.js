import React from 'react'
import {PortalWithState} from 'react-portal'
import PopoverPage from '../../pages/popup.page'

export default class PopupManager extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      popoverDisplayed: false,
      size: 'normal'
    }
  }

  displayPopover () {
    this.setState({ popoverDisplayed: true })
  }

  dismissPopover () {
    this.popover.onDismiss(() => {
      this.setState({ popoverDisplayed: false })
    })
  }

  setRenderedComponent (component, size = 'normal') {
    this.setState({
      renderedComponent: component,
      size: size
    })
  }

  renderPopover () {
    return (
      <PortalWithState defaultOpen onClose={this.dismissPopover.bind(this)}>
        {({ openPortal, closePortal, isOpen, portal }) => [
          portal(
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '100vw',
              height: '100vh'
            }}>
              <PopoverPage size={this.state.size} dismiss={this.dismissPopover.bind(this)} ref={p => { this.popover = p }} component={this.state.renderedComponent} />
            </div>
          )
        ]}
      </PortalWithState>
    )
  }

  render () {
    return (
      <div className='main'>
        { this.state.popoverDisplayed
          ? <div name='popover' className='popover'>{this.renderPopover()}</div>
          : null
        }
        {
          React.cloneElement(this.props.children,
            {
              ...this.props.children.props,
              setRenderedComponent: this.setRenderedComponent.bind(this),
              displayPopover: this.displayPopover.bind(this),
              dismissPopover: this.dismissPopover.bind(this)
            }
          )
        }
        <style jsx>{`
          .main {
            height: 100vh;
            width: 100vw;
            overflow-y: auto;
          }
          .popover {
            width: 100px;
          }
        `}</style>
      </div>
    )
  }
}
