import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Employee from '../components/Employee';
import { useState } from 'react';
import Footer from '../components/Footer';
import Axios from 'axios';

const AddEmployee = ({ addEmployeeDetails }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [employee, setEmployee] = useState({})

  const onSubmit = (data) => {
    Axios.post('http://localhost:3001/api/insertEmployee', {
      employeeData: data
    })
    console.log(data);
    setEmployee(data);
    addEmployeeDetails(data);
    setEmployee("");
    // setEmployee({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   dob: "",
    //   isFemale: null,
    //   addressNo: "",
    //   street: "",
    //   city: "",
    //   startDate: "",
    //   department: "",
    //   payGrade: "",
    //   jobTitle: "",
    //   employmentStatus: "",
    //   partTime: null,
    //   supervisor: null,
    //   salary: ""
    // })
  }





  return (
    <div className="addempdiv">
      <Form>
        <Employee employee={employee} register={register} errors={errors} disabled={0} />
        <Button className="btn" onClick={handleSubmit(onSubmit)} variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
      <Footer />
    </div>
  )
}

export default AddEmployee