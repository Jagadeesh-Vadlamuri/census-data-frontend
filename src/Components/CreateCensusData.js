import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "./Popup.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const CreateCensusData = () => {
  const URL = "https://census-userdata.herokuapp.com";
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mother: "",
      father: "",
      location: "",
      occupation: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${URL}/createDetail`, values).then((res) => {
          console.log(res.data);
        });
        values.name = "";
        values.age = "";
        values.mother = "";
        values.father = "";
        values.location = "";
        values.occupation = "";
        togglePopup();
      } catch (err) {
        console.log(err);
      }
    },
    validate: (values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Name is Required";
        }
        if (!values.age) {
          errors.age = "Age is Required";
        }
        if (!values.mother) {
          errors.mother = "Mother's name is Required";
        }
        if (!values.father) {
          errors.father = "Father's name is Required";
        }
        if (!values.location) {
            errors.location = "Location is Required";
        }
        if (!values.occupation) {
            errors.occupation = "Occupation is Required";
        }
        return errors;
      }
  });
  return (
    <div className="container">
      <h1 className="text-center" style={{border: '1px solid black', borderRadius:'30px', backgroundColor: 'black', color: 'white', padding: '5px', margin: 5}}>Create User details</h1>
      <div className="d-flex justify-content-between align-items-start" style={{marginTop: 20}}>
          <Link to="/" className="btn btn-light" style={{backgroundColor: 'black', color: 'white'}}>Home</Link>
        <form onSubmit={formik.handleSubmit} style={{border: '1px solid black', borderRadius:'30px', backgroundColor: 'black', color: 'white', padding: '20px', margin: 5}}>
          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Name</b>
              </label>
              <input
                type="text"
                id="name"
                className="form-control border-dark"
                placeholder="Enter your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                    <div style={{ color: "white" }}>{formik.errors.name}</div>
                  ) : null}
            </div>
            <div className="col-auto">
              <label htmlFor="age" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Age</b>
              </label>
              <input
                type="text"
                id="age"
                className="form-control border-dark"
                placeholder="Enter your age"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              {formik.errors.age ? (
                    <div style={{ color: "white" }}>{formik.errors.age}</div>
                  ) : null}
            </div>
          </div>

          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="mother" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Mother</b>
              </label>
              <input
                type="text"
                id="mother"
                className="form-control border-dark"
                placeholder="Enter your mother's name"
                name="mother"
                value={formik.values.mother}
                onChange={formik.handleChange}
              />
              {formik.errors.mother ? (
                    <div style={{ color: "white" }}>{formik.errors.mother}</div>
                  ) : null}
            </div>
            <div className="col-auto">
              <label htmlFor="father" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Father</b>
              </label>
              <input
                type="text"
                id="father"
                className="form-control border-dark"
                placeholder="Enter your father's name"
                name="father"
                value={formik.values.father}
                onChange={formik.handleChange}
              />
              {formik.errors.father ? (
                    <div style={{ color: "white" }}>{formik.errors.father}</div>
                  ) : null}
            </div>
          </div>
          <div className="row g-3 align-items-center mt-2">
            <div className="col-auto">
              <label htmlFor="location" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Location</b>
              </label>
              <input
                type="text"
                id="location"
                className="form-control border-dark"
                placeholder="Enter your location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              {formik.errors.location ? (
                    <div style={{ color: "white" }}>{formik.errors.location}</div>
                  ) : null}
            </div>
            <div className="col-auto">
              <label htmlFor="occupation" className="col-form-label" style={{border: '1px solid white', borderRadius:'5px', backgroundColor: 'white', color: 'black', padding: '5px', margin: 5}}>
                <b>Occupation</b>
              </label>
              <input
                type="text"
                id="occupation"
                className="form-control border-dark"
                placeholder="Enter your occupation"
                name="occupation"
                value={formik.values.occupation}
                onChange={formik.handleChange}
              />
              {formik.errors.occupation ? (
                    <div style={{ color: "white" }}>{formik.errors.occupation}</div>
                  ) : null}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <button className="btn btn-light text-dark">Submit</button>
            {/* <Link
              to="/censusData"
              className="btn btn-light my-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Census Details
            </Link> */}
          </div>
          {isOpen && (
            <Popup
              style={{ width: 30, height: 20 }}
              content={
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <h2 className="text-dark">
                    <b>Details have been created</b>{" "}
                    <DoneOutlineIcon style={{ fontSize: 60, color: "black" }} />
                  </h2>
                  <div className="mt-3">
                    <button
                      className="btn btn-success mt-4"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Close
                    </button>
                    <Link
                      to="/censusData"
                      className="btn btn-light mt-4 mx-2"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Census Details
                    </Link>
                  </div>
                </div>
              }
            />
          )}
        </form>
        <Link to="/censusData" className="btn btn-light" style={{backgroundColor: 'black', color: 'white'}}>Census Details</Link>
      </div>
    </div>
  );
};

export default CreateCensusData;
