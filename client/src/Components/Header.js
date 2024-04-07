
import React ,{ Component } from 'react'

export default class Header extends Component {
  render(){
    return(
      <div>App Name : {this.props.appName}</div>
=======
import React, { Component } from 'react'

export default class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.text}</div>

    )
  }
}