import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from "./components/FileUpload"
import FileList from "./components/FileList";


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <FileUpload />
      <FileList />
    </>
  )
}

export default App
