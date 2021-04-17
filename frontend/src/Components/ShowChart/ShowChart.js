import React, { Component } from 'react';
import DataEntry from '../DataEntry/DataEntry';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import DoughnoutChart from '../DoughnoutChart/DoughnotChart';

class ShowChart extends Component {

    state = {
        timeLine: null,
        dataSet: null,
        legend: null,
        typeOfChart: null,
    }

    stateChangeHandler = (props) => {
        this.setState(() => {
            return ({
                timeLine: props.xAxisarray,
                dataSet: props.yAxisArray,
                legend: props.legend,
                typeOfChart: props.ChartType
            });
        });
    }

    render() {
        let finalView = <DataEntry submitData={this.stateChangeHandler} />
        if (this.state.typeOfChart !== null) {
            if (this.state.typeOfChart === 'Barchart') {
                finalView = <BarChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else if (this.state.typeOfChart === 'Linechart') {
                finalView = <LineChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else if (this.state.typeOfChart === 'Doughnoutchart') {
                finalView = <DoughnoutChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else {
                finalView = <BarChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
        }
        return (
            finalView
        );
    }
}

export default ShowChart;