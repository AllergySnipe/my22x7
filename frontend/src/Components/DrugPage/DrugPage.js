import React, { useState } from 'react'
import { Statistic } from 'antd'
import SearchBar from '../SearchBar/SearchBar';
import AllChart from '../AllChart/AllChart';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import cross from '../../common/images/cross.svg';
import needle from '../../common/images/needle.svg';
import virus from '../../common/images/virus-outline.svg';
import skull from '../../common/images/skull.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [[3311, 16344, 12334, 19443, 15224],
                    [8311, 16344, 12334, 19443, 15224],
                    [13311, 16344, 12334, 19443, 15224],
                    [18311, 16344, 12334, 19443, 15224],
                    [23311, 16344, 12334, 19443, 15224],
                    [28311, 16344, 12334, 19443, 15224]];

const DrugPage = () => {
    const DataType = ['Enforcement of Drug Measures', 'DAPO', "Buddy's Programme", 'De-addiction and Rehabilitation'];
    const [showStats, setShowStats] = useState(true);
    const [typeofData, setTypeOfData] = useState(null);

    const showStatsHandler = () => {
        setShowStats(false);
    }

    const dataTypeHandler = (datatype) => {
        setTypeOfData(datatype);
    }

    let statistics =
        <div className="grid-container-datasearch-2" style={{gridTemplateColumns: "2fr 2fr"}}>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading" >Total Enrolment in DAPO</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />16669</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
                <div className="search-data-heading">Total Students in Buddy Programme</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />120159</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
                <div className="search-data-heading">Total Patients in Re-hab centers</div>
                <div className="search-data-data"><span><img src={cross} className="mx-2" />123</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading">Total Patients in De-addiction centers</div>
                <div className="search-data-data"><span><img src={needle} className="mx-2" />10764</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">People Arrested by Drug Enforcement</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />200</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">Cases Registered by Drug Enforcement</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />124</span></div>
            </div>
        </div>



    return (
        <div>
            <div><SearchBar Datatypes={DataType} statsoffaHandler={showStatsHandler} typeOfDataHandler={dataTypeHandler} /></div>
            {showStats ? statistics : 
            <div className="chart-box">
                <div>
                    <MultiChart timeline={timeLine} datasets={dataset} legend={`${typeofData} per month`} />
                </div>
            </div>}
        </div>
    )
}

export default DrugPage;

