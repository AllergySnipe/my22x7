import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    legend: '',
    tl1: '',
    d1: '',
    tl2: '',
    d2: '',
    tl3: '',
    d3: '',
    tl4: '',
    d4: '',
    tl5: '',
    d5: '',
    ChartType: '',
}


const formSubmitHandler = (values, randomFunc) => {
    //Axios post request to API Endpoint
    const data = {
        xAxisarray: [values.tl1, values.tl2, values.tl3, values.tl4, values.tl5],
        yAxisArray: [values.d1, values.d2, values.d3, values.d4, values.d5],
        legend: values.legend,
        ChartType: values.ChartType,
    }
    randomFunc(data);
}

const validationSchema = Yup.object({
    legend: Yup.string().required('Required'),
    tl1: Yup.number().required('Required'),
    d1: Yup.number().required('Required'),
    tl2: Yup.number().required('Required'),
    d2: Yup.number().required('Required'),
    tl3: Yup.number().required('Required'),
    d3: Yup.number().required('Required'),
    tl4: Yup.number().required('Required'),
    d4: Yup.number().required('Required'),
    tl5: Yup.number().required('Required'),
    d5: Yup.number().required('Required'),
});




const DataEntry = (props) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => formSubmitHandler(values, props.kuchbhi)}
            validationSchema={validationSchema}>
            <Form 
            //style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr", }}
            //labelCol={{ xs: 4 }}
            //wrapperCol={{ xs: 20 }}
            >

                <div style={{ background: "#e1e1f5" , flex: 1, padding: 40, borderRadius: "20px" }}>
                <div>
                    <h1 class="minor-heading-3"><u>Enter Data Here: </u></h1>
                </div>
                <div>
                    <label htmlFor='legend' class = "label-normal">Legend</label>
                    <Field id='legend' name='legend' class="input-area-2" />
                    <ErrorMessage name='legend' />
                </div>

                <div>
                    <label htmlFor='tl1' class = "label-normal">Time Stamp-1</label>
                    <Field type='number' id='tl1' name='tl1'  class="input-area-2"/>
                    <ErrorMessage name='tl1' />
                </div>

                <div>
                    <label htmlFor='d1' class = "label-normal">Data Entry - 1</label>
                    <Field type='number' id='d1' name='d1' class="input-area-2" />
                    <ErrorMessage name='d1' />
                </div>

                <div>
                    <label htmlFor='tl2' class = "label-normal">Time Stamp-2</label>
                    <Field type='number' id='tl2' name='tl2'  class="input-area-2"/>
                    <ErrorMessage name='tl2' />
                </div>

                <div>
                    <label htmlFor='d2' class = "label-normal">Data Entry - 2</label>
                    <Field type='number' id='d2' name='d2'  class="input-area-2"/>
                    <ErrorMessage name='d2' />
                </div>

                <div>
                    <label htmlFor='tl3' class = "label-normal">Time Stamp-3</label>
                    <Field type='number' id='tl3' name='tl3'  class="input-area-2"/>
                    <ErrorMessage name='tl3' />
                </div>

                <div>
                    <label htmlFor='d3' class = "label-normal">Data Entry - 3</label>
                    <Field type='number' id='d3' name='d3'  class="input-area-2"/>
                    <ErrorMessage name='d3' />
                </div>

                <div>
                    <label htmlFor='tl4' class = "label-normal">Time Stamp-4</label>
                    <Field type='number' id='tl4' name='tl4'  class="input-area-2"/>
                    <ErrorMessage name='tl4' />
                </div>

                <div>
                    <label htmlFor='d4' class = "label-normal">Data Entry - 4</label>
                    <Field type='number' id='d4' name='d4'  class="input-area-2"/>
                    <ErrorMessage name='d4' />
                </div>

                <div>
                    <label htmlFor='tl5' class = "label-normal">Time Stamp-5</label>
                    <Field type='number' id='tl5' name='tl5'  class="input-area-2"/>
                    <ErrorMessage name='tl5' />
                </div>

                <div>
                    <label htmlFor='d5' class = "label-normal">Data Entry - 5</label>
                    <Field type='number' id='d5' name='d5'   class="input-area-2"/>
                    <ErrorMessage name='d5' />
                </div>

                <div>
                    <label htmlfor="ChartType" class = "label-normal">Chart Type</label>
                    <Field as="select" name="ChartType"  class="input-area-2">
                        <option value="Barchart" selected >Bar-chart</option>
                        <option value="Linechart">Line-chart</option>
                        <option value="Doughnoutchart">Doughnout-chart</option>
                    </Field>

                </div>

                <button type='submit' class="button-basic">SUBMIT</button>
                </div>
            </Form>
        </Formik >
    );
}

export default DataEntry;
