import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {minutes: '00', seconds: '00', running: false}

  start = () => {
    const {running} = this.state

    if (running === false) {
      this.timerId = setInterval(this.timer, 1000)

      this.setState({running: true})
    }
  }

  stop = () => {
    clearInterval(this.timerId)

    this.setState({running: false})
  }

  reset = () => {
    clearInterval(this.timerId)

    this.setState({minutes: '00', seconds: '00', running: false})
  }

  timer = () => {
    let {minutes, seconds} = this.state

    seconds = parseInt(seconds)

    minutes = parseInt(minutes)

    seconds += 1

    if (seconds === 60) {
      seconds = 0
      minutes += 1
    }

    this.setState({
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    })
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="mainContainer">
        <div className="watchContainer">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="cardHeadingContainer">
              <img
                className="watchlogo"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="cardheading">Timer</h1>
            </div>
            <h1 className="watch">
              {minutes}:{seconds}
            </h1>
            <div className="buttonContainer">
              <button
                type="button"
                className="button startbutton"
                onClick={this.start}
              >
                Start
              </button>
              <button
                type="button"
                className="button stopbutton"
                onClick={this.stop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button resetbutton"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
