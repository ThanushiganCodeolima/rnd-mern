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
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(preProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    render() {
    return <div>LifecycleB</div>
  }
}

export default LifecycleB