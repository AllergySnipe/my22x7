import React, { Component } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const yearList = ['2021', '2020'];


const SearchBar = ({ Datatypes, statsoffaHandler, typeOfDataHandler }) => {
    const initialValues = {
        DataType: Datatypes[0],
        FromMonth: monthList[0],
        FromYear: yearList[0],
        ToMonth: monthList[0],
        ToYear: yearList[0],
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        const data = {
            DataType: values.DataType,
            FromMonth: values.FromMonth,
            FromYear: values.FromYear,
            ToMonth: values.ToMonth,
            ToYear: values.ToYear,
        }
        typeOfDataHandler(data.DataType);
        console.log(values);
    }

    const validationSchema = Yup.object({
        DataType: Yup.string().required('Required'),
        FromMonth: Yup.string().required('Required'),
        FromYear: Yup.string().required('Required'),
        ToMonth: Yup.string().required('Required'),
        ToYear: Yup.string().required('Required'),
    });

    return (
        <div className="mx-2 my-1">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => formSubmitHandler(values, typeOfDataHandler)}
                validationSchema={validationSchema}>
                <div>
                    <div className="grid-container-search" style={{}}>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                Data Type
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                From
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                To
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>

                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>

                            </div>
                        </div>
                    </div>
                    <Form>
                        <div className="grid-container-search">
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="DataType" class="input-area-1">
                                        {Datatypes.map(datatype =>
                                            <option key={datatype} value={datatype}>{datatype}</option>)}
                                    </Field>
                                    <ErrorMessage name="DataType" />
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="FromMonth" class="input-area-1" style={{ width: "45%", display: "inline", marginRight: "5%" }}>
                                        {monthList.map(month =>
                                            <option key={month} value={month}>{month}</option>)}
                                    </Field>

                                    <Field as="select" name="FromYear" class="input-area-1" style={{ width: "45%", display: "inline", marginLeft: "5%" }}>
                                        {yearList.map(year =>
                                            <option key={year} value={year}>{year}</option>)}
                                    </Field>

                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="ToMonth" class="input-area-1" style={{ width: "45%", display: "inline", marginRight: "5%" }}>
                                        {monthList.map(month =>
                                            <option key={month} value={month}>{month}</option>)}
                                    </Field>

                                    <Field as="select" name="ToYear" class="input-area-1" style={{ width: "45%", display: "inline", marginLeft: "5%" }}>
                                        {yearList.map(year =>
                                            <option key={year} value={year}>{year}</option>)}
                                    </Field>

                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <button className="button-search" type="submit" onClick={statsoffaHandler}>
                                        GO
                                </button>
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <button className="button-search" >
                                        Reset
                                </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}

export default SearchBar;