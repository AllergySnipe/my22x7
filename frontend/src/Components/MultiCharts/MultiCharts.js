import React from 'react';
import AllChart from '../AllChart/AllChart';




const MultiCharts = ({ datasets, legend, timeline }) => {
    const listData = datasets.map((datasets) =>
        <div className="multi-chart-grid-item">
            <AllChart timeline={timeline} datasets={datasets} legend={legend} />
        </div>);
    return (
        <div>
        <div className="multi-chart-grid-container">
            {listData}
        </div>

        </div>
    );
}


export default MultiCharts;