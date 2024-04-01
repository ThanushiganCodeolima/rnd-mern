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
        return true
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(preProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    chageState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        return(
            <div>
                <div>LifecycleA</div>
                <button onClick={this.chageState}>Change state</button>
                <LifecycleB />
            </div>
        )
  }
}

export default LifecycleA