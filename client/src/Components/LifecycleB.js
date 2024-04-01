import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'CodeOlima'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    render(){
        console.log('LifecycleB render')
        return <div>LifecycleA</div>
        
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    render() {
    return <div>LifecycleB</div>
  }
}

export default LifecycleB