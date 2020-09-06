import React, {useState, useEffect} from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     useParams,
   } from "react-router-dom";
import PatientInput from './PatientInput.js';
import Homepage from './Homepage.js';

function PatientInputByDoctorId(props) {
  let {doctorid} = useParams();
  return <PatientInput doctorid={doctorid} />
}

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/doctors/:doctorid">
          <PatientInputByDoctorId />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
