import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: '',
    disease: '',
    phone: '',
    birthDay: '',
    address: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/patients/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">surname: {user.surname}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">disease: {user.disease}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">birthDay: {user.birthDay}</li>
        <li className="list-group-item">address: {user.address}</li>
      </ul>
    </div>
  );
};

export default User;
