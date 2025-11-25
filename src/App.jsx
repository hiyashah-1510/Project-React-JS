import { useState } from 'react'
import './App.css'
import JSXmodules from './components/JSXmodules'
import Props from './components/Props'
import UseState from './components/UseState'
import ListFilter from './components/ListFilter'
import FormEvent from './components/FormEvent'
import UseEffect from './components/UseEffect'
import ClassComponent from './components/ClassComponent'

function App() {

  return (
    <>
      <JSXmodules/>
      <Props message={"React JS"}/>
      <UseState/>
      <ListFilter/>
      <FormEvent/>
      <UseEffect/>
      <ClassComponent/>
    </>
  )
}

export default App
