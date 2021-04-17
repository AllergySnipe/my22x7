import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import AllChart from '../AllChart/AllChart';
import alert from '../../common/images/alert.svg';
import rupee from '../../common/images/currency-inr.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [[3311, 16344, 12334, 19443, 15224],
                    [8311, 16344, 12334, 19443, 15224],
                    [13311, 16344, 12334, 19443, 15224],
                    [18311, 16344, 12334, 19443, 15224],
                    [23311, 16344, 12334, 19443, 15224],
                    [28311, 16344, 12334, 19443, 15224]];

const RevenuePage = () => {
    const DataType = ['Collection of Excise', 'Collection of GST', 'Collection of Motor Vehicle Tax', 'Collection of Stamp Duty'];
    const [showStats, setShowStats] = useState(true);
    const [typeofData, setTypeOfData] = useState(null);

    const showStatsHandler = () => {
        setShowStats(false);
    }

    const dataTypeHandler = (datatype) => {
        setTypeOfData(datatype);
    }

    let statistics =
        <div className="grid-container-datasearch-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading" >Revenue Collection in 2020</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />20,18,30,670</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">Revenue Collection in 2021</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />5,46,68,640</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">Expected Collection in 2021</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />21,02,64,000</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading">Percentage collected by far</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />26%</span></div>
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

export default RevenuePage;

