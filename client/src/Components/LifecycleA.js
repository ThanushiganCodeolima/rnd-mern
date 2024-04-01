import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'CodeOlima'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    render(){
        console.log('LifecycleA render')
        return <div>LifecycleA</div>
        
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    render() {
        return(
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        )
  }
}

export default LifecycleA