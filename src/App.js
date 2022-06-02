import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CensusData from './Components/CensusData';
import CreateCensusData from './Components/CreateCensusData';
import Home from './Components/Home';
import {useFormik} from 'formik';
import EditCensusData from './Components/EditCensusData';

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mother: "",
      father: "",
      location: "",
      occupation: "",
    }
  })
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createCensusData" element={<CreateCensusData formik={formik}/>} />
      <Route path="/censusData" element={<CensusData formik={formik}/>} />
      <Route path="/editCensusData" element={<EditCensusData formik={formik}/>} />
    </Routes>
  )
}

export default App