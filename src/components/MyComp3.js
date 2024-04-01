import React, { Component } from 'react'
import MyComp5 from './MyComp5';
import MyComp4 from './MyComp4';


/*
    class Child extends Parent{
        // 1. Properties/Variable

        // 2. Constructor (Esp. Function)

        // 3. Method/Fuctions
    }
*/

class MyComp3 extends Component {

    // 1. 


    // 2. 

    // 3. 

  render() {
    // Every function return something
    return <span>MyComp3 <MyComp4 /> <MyComp5 /></span>;
  }
}
// 3. Export Area
export default MyComp3;