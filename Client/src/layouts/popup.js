import React from 'react'
import Root from './root'
import Header from '../components/Header/Header'
import { connect } from 'react-redux'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})
export default class Page extends React.Component {
  render () {
    return (
      <Root>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          {React.cloneElement(this.props.children, {
            popoverManager: {
              setRenderedComponent: this.props.setRenderedComponent,
              displayPopover: this.props.displayPopover,
              dismissPopover: this.props.dismissPopover
            }
          })}
        </div>
        <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          z-index: 2;
          top: 0;
          left: 0;
        }
        .content {
          position: absolute;
          top: 150px;
          left: 0px;
          height: calc(100% - 150px);
          width: 100%;
        }
        `}</style>
      </Root>
    )
  }
}
