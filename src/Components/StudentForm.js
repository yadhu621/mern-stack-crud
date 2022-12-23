import React from "react"; 
import * as Yup from "yup"; 
import { Formik, Form, Field, ErrorMessage, useField } from "formik"; 
import { FormGroup, FormControl, Button } from "react-bootstrap"; 

const StudentForm = (props) => { 

  const validationSchema = Yup.object().shape({ 
    name: Yup.string()
      .required("Required"), 
    email: Yup.string() 
      .required("Required")
      .email("You've entered an invalid email address"),
    rollno: Yup.number() 
      .required("Required") 
      .positive("Roll number cannot be negative") 
      .integer("Roll number has to be integer") 
  });
   
  console.log(props); 
  
  return ( 
    <div className="form-wrapper"> 
      <Formik {...props} validationSchema={validationSchema}> 
        <Form>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control mb-2"/> 
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/> 
          </FormGroup>
          <FormGroup> 
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" className="form-control mb-2"/> 
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span"/> 
          </FormGroup> 
          <FormGroup> 
            <label htmlFor="rollno">Roll number</label>
            <Field name="rollno" type="number" className="form-control mb-2"/> 
            <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span"/> 
          </FormGroup>
          <Button variant="primary" size="lg" block="block" type="submit" className="mt-3"> 
            {props.children} 
          </Button> 
        </Form> 
      </Formik> 
    </div> 
  ); 
}; 
  
export default StudentForm;