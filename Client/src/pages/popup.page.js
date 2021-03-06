import React from 'react'
import { TimelineMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'

@GSAP()
export default class PopupPage extends React.Component {
  componentDidMount () {
    this.addAnimation(this.animateAppear)
  }

  animateAppear ({ target }) {
    let popoverPage = target.find({ name: 'popover' })
    return new TimelineMax().from(popoverPage, 0.5, { scale: 0.4 })
  }

  animateDisappear (utils) {
    let popoverPage = utils.target.find({ name: 'popover' })
    return new TimelineMax({ onComplete: utils.options.onComplete }).to(popoverPage, 0.4, { scale: 0 })
  }

  onDismiss (onComplete) {
    this.addAnimation(this.animateDisappear, {
      onComplete: onComplete
    })
  }

  render () {
    let width = '60%'
    let minWidth = '600px'
    let minHeight = '500px'
    let top = '0'
    if (this.props.size === 'small') {
      width = '500px'
      minWidth = '400px'
      minHeight = '0'
      top = '20%'
    }
    return (
      <div className='host'>
        <div className='overlay' onClick={this.props.dismiss} />
        <div name='popover' className='content'>
          {
            React.cloneElement(this.props.component)
          }
        </div>
        <style jsx>{`
          .host {
            position: absolute;
            left: 0;
            top: 0;
            height: 100vh;        
            width: 100vw;
            left: 0;
            top: 0;
            overflow-y: auto;
          }
  
          .overlay {
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            height: 100%;
            width: 100vw;
            background-color: rgba(255,255,255,0.3);
          }
  
          .content {
            position: absolute;
            width: ${width};
            z-index: 1001;
            min-width: ${minWidth};
            min-height: ${minHeight};
            left: 50%;
            top: ${top}
            transform: translateX(-50%);
            margin-top: 50px;
            border-radius: 6px;
            background: #000;
            margin-bottom: 50px;
          }
        `}</style>
      </div>
    )
  }
}
