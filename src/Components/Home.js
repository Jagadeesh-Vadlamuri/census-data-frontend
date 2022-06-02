import React from 'react';
import {Link} from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 >
            Welcome to the Census Reports
        </h1>
        <h3 className="text-center" style={{border: '1px solid black', padding: '15px', backgroundColor: 'black', color: 'white'}}>This application is all about creating the user data and viewing it in a tabular format with a few modification options provided with which the user can EDIT or DELETE the data</h3>
        <PeopleAltIcon style={{fontSize: 300}}/>
        <div>
            <Link to="/createCensusData" className="btn btn-light" style={{backgroundColor: 'black', color: 'white'}}>Create User</Link>
            <Link to="/censusData" className="btn btn-light mx-4" style={{backgroundColor: 'green', color: 'white'}}>Census Details</Link>

        </div>
    </div>
  )
}

export default Home