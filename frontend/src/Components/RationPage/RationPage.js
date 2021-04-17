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
import plantIcon from '../../common/images/sprout.svg';
import chfile from '../../common/images/checkfile.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [[3311, 16344, 12334, 19443, 15224],
                    [8311, 16344, 12334, 19443, 15224],
                    [13311, 16344, 12334, 19443, 15224],
                    [18311, 16344, 12334, 19443, 15224],
                    [23311, 16344, 12334, 19443, 15224],
                    [28311, 16344, 12334, 19443, 15224]];

const RationPage = () => {
    const DataType = ['Distribution of Atta', 'Distribution of Dal'];
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
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">Number of Smart Ration Cards issued</div>
                <div className="search-data-data"><span><img src={plantIcon} className="mx-2" />111403</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading" >Number of Beneficiaries </div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />422534</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
                <div className="search-data-heading">Cards that received benifits</div>
                <div className="search-data-data"><span><img src={chfile} className="mx-2" />25032</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
                <div className="search-data-heading">Percentage of cards receiving benifits</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />22.46%</span></div>
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

export default RationPage;

