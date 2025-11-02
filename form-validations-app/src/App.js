import React from 'react'
import MyInput from './MyInput'
import MyForm from './MyForm'
import CustomForm from './CustomForm'
import FormWithErors from './FormWithErrors'

const App = () => {
  return (
    <div>
      {/* <MyInput label = "Name:"/> */}
      {/* <MyForm/> */}
      {/* <CustomForm/> */}
      <FormWithErors/>
    </div>
  )
}

export default App