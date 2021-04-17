import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
    legend: '',
    ChartType: 'Barchart',
}

const API = {
    URL: 'http://localhost:8000/excel/',
    key: 'password',
}



const validationSchema = Yup.object({
    legend: Yup.string().required('Required !'),
});


const SheetEntry = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        var formData = new FormData();
        formData.append("sheet", selectedFile);
        formData.append("title", values.legend);
        console.log(formData.getAll('sheet'));
        console.log(formData.getAll('title'));
        axios.post(API.URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => {
                console.log(res.data);
                message.success("File Uploaded !");
            })
            .catch(err => {
                console.log(err);
                message.error("Error Occured while uploading the file");
            })

    }

    let finalView = (<Formik
        initialValues={initialValues}
        onSubmit={(values) => formSubmitHandler(values)}
        validationSchema={validationSchema} >
        <Form
            style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr", }}
            labelCol={{ xs: 4 }}
            wrapperCol={{ xs: 20 }}
        >

            <div style={{ flex: 1 }} />
            <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px", marginTop: "60px" }}>
                <div>
                    <h1 class="minor-heading-3"><u>Upload Excel File Here: </u></h1>
                </div>
                <div >
                    <label htmlFor='legend' class="label-normal">Data Type</label>
                    <Field id='legend' name='legend' class="input-area-2" />
                    <ErrorMessage name='legend' render={error => <div style={{ color: "#ff0000" }}>{error}</div>} />
                </div>
                <div>
                    <label htmlFor='excel' class="label-normal">Excel</label>
                    <input type="file"
                        id='excel'
                        name='excel'
                        class="input-area-2"
                        onChange={fileChangedHandler}
                        style={{ border: "1px solid black" }}
                        accept=".xlsx,.xls,.csv" />
                    <span>File Format: .csv, Maximum file size: 25mb</span>
                    {/* <ErrorMessage name='excel' /> */}
                </div>
                <div>
                    <label htmlFor="ChartType" class="label-normal">Chart Type</label>
                    <Field as="select" name="ChartType" class="input-area-2">
                        <option value="Barchart" selected >Bar-chart</option>
                        <option value="Linechart">Line-chart</option>
                        <option value="Doughnoutchart">Doughnout-chart</option>
                    </Field>
                </div>
                <div className="d-flex justify-content-center">
                    <button type='submit' class="button-basic" style={{ width: "25%" }}>SUBMIT</button>
                </div>
            </div>
        </Form>
    </Formik >);

    return (
        finalView
    );
}

export default SheetEntry;
