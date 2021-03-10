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
        let bawal = <DataEntry kuchbhi={this.stateChangeHandler} />
        if (this.state.typeOfChart !== null) {
            if (this.state.typeOfChart === 'Barchart') {
                bawal = <BarChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else if (this.state.typeOfChart === 'Linechart') {
                bawal = <LineChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else if (this.state.typeOfChart === 'Doughnoutchart') {
                bawal = <DoughnoutChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
            else {
                bawal = <BarChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
            }
        }
        return (
            bawal
        );
    }
}

export default ShowChart;