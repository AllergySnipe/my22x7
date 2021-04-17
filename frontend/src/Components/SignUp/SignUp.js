import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert } from 'antd';

const initialValues = {
    name: '',
    email: '',
    district: '',
    password: '',
    confirmPassword: '',
}



const API = {
    URL: 'http://localhost:8000/api/auth/register',
    key: 'password'
}

const formSubmitHandler = (values) => {
    //Axios post request to API Endpoint
    const data = {
        username: values.email,
        //district: values.district,
        password: values.password
    }
    axios.post(API.URL, data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    district: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'Passwords should match'),
});



const SignUp = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                labelCol={{ xs: 4 }}
                wrapperCol={{ xs: 20 }}
            >
                <div style={{ flex: 1 }} />
                <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px" }}>

                    <h2 class="minor-heading-3">Sign Up to use the website</h2>
                    <div >
                        <label htmlFor='name' class="label-normal">Name</label>
                        <Field type='name' id='name' name='name' class='input-area-1' />
                        <ErrorMessage render={text => <Alert message={text} showIcon type='warning' />} name='name' />
                    </div>

                    <div>
                        <label htmlFor='email' class="label-normal">Email</label>
                        <Field type='email' id='email' name='email' class='input-area-1' />
                        <ErrorMessage name='email' />
                    </div>

                    <div>
                        <label htmlFor='district' class="label-normal">District</label>
                        <Field type='text' id='district' name='district' class='input-area-1' />
                        <ErrorMessage name='district' />
                    </div>

                    <div>
                        <label htmlFor='password' class="label-normal">Password</label>
                        <Field type='password' id='password' name='password' class='input-area-1' />
                        <ErrorMessage name='password' />
                    </div>

                    <div>
                        <label htmlFor='confirmPassword' class="label-normal">Confirm Password</label>
                        <Field type='password' id='confirmPassword' name='confirmPassword' class='input-area-1' />
                        <ErrorMessage name='confirmPassword' />
                    </div>
                    <button type='submit' class="button-basic">SIGN UP</button>
                </div>
            </Form>
        </Formik >
    );
}

export default SignUp;
