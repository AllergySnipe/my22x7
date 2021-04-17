import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const initialValues = {
    email: '',
    password: '',
}

const API = {
    URL: 'http://localhost:8000/api/auth/login',
    key: 'password'
}

const formSubmitHandler = (values) => {
    //Axios post request to API Endpoint
    axios.defaults.withCredentials = true;
    const data = {
        username: values.email,
        password: values.password,
    }
    axios.post(API.URL, data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    //console.log(values);
    //validateUserHandler();
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long').required('Required'),
});



const LogIn = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => formSubmitHandler(values)}
            validationSchema={validationSchema}>
            <Form
                //style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                labelCol={{ xs: 4 }}
                wrapperCol={{ xs: 20 }}
            >
                <div style={{ flex: "1", width: "100%", height: "800px", alignContent: "center", classname: "needbg" }}>
                    {/*<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <div style={{ flex: 1 }} />*/}
                    <br /><br /><br /><br /><br />
                    <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px", width: "40%", alignSelf: "center", marginLeft: "30%", marginTop: "0px" }}>
                        <h2 class="minor-heading-3"><u>Log in to use the website</u></h2><br></br>

                        <div>
                            <label htmlFor='email' class="label-normal">Email</label>
                            <Field type='email' id='email' name='email' class='input-area-1' />
                            <ErrorMessage name='email' />
                        </div>

                        <div>
                            <label htmlFor='password' class="label-normal">Password</label>
                            <Field type='password' id='password' name='password' class='input-area-1' />
                            <ErrorMessage name='password' />
                        </div>

                        <button type='submit' class="button-basic">LOG IN</button>
                    </div>
                </div>
                {/*</div>*/}
            </Form>
        </Formik >
    );
}

export default LogIn;
