import React, { Component } from 'react'

export default class Keypad extends Component {

  password = () => {
    console.log('Entering password...')
  }



  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.password} placeholder="Type password..." ></input>
      </div>
    )
  }

}
