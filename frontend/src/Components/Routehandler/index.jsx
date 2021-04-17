import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/index';
import GeneralAdmin from '../GeneralAdmin/index';
import ExcelUpload from '../SheetEntry/index';
import MultiCharts from '../MultiCharts/MultiCharts';

const RouteHandler = () => {
    return (
        <Switch>
            <Route path="/general-administration" exact component={GeneralAdmin} />
            <Route path="/" exact component={Homepage} />
            <Route path="/upload-sheet" component={ExcelUpload} />
            <Route path="/*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
    );
}

export default RouteHandler;
