// 1. Import Area

// 1.1 Import SomeDefaultImport from somelocation/somelibrary
import React from 'react'
import MyComp3 from './MyComp3'
// 1.2 import { someNameImport } from somelocation/somelibrary

// 2. Function definition area
// We are goint to create a functional component
export default function MyComp2() {
    // Everything
  return <span>MyComp2 <MyComp3 /></span>
}
