import React, { Component } from 'react'
import Config from './config/config'

export default class Connection extends Component {
  state = {
    connected: false,
    ros: null
  }

  constructor(){
      super()
      this.init_connection()
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    try {
      this.state.ros.connect(
        "ws://" +
        Config.ROSBRIDGE_IP +
        ":9090"
      )
    }
    catch (error) {
      console.log("Connection problem")
    }

  }

  render() {
    return (
      <div>Connection</div>
    )
  }
}
