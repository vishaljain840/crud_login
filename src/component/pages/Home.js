import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [patients, setPatients] = useState([]);
  useEffect(function () {
    loadPatient();
  }, []);
  const loadPatient = async () => {
    const result = await axios.get('http://localhost:3001/patients');
    setPatients(result.data);
  };

  const deletePatient = async id => {
    alert('are you sure you want to delete this record');
    await axios.delete(`http://localhost:3001/patients/${id}`);
    loadPatient();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>HomePage</h1>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">surname</th>
              <th scope="col">age</th>
              <th scope="col">disease</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                {/* <td>{patient.id}</td> */}
                <td>{patient.name}</td>
                <td>{patient.surname}</td>
                <td>{patient.age}</td>
                <td>{patient.disease}</td>
                <td>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/user/${patient.id}`}
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-primary m-2"
                    to={`/user/edit/${patient.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => {
                      deletePatient(patient.id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
