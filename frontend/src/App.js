import React, { Component } from 'react';
import SignUp from './Components/SignUp/SignUp';
import ShowChart from './Components/ShowChart/ShowChart';
import SheetEntry from './Components/SheetEntry/SheetEntry';
import LogIn from './Components/LogIn/Login';
import SideBar from './Components/SideBar/index';
import Header from './Components/Header/index';

const resources = [
  {
    name: 'Tax Data',
    link: '#',
  },
  {
    name: 'Health Data',
    link: '#',
  },
  {
    name: 'Court Cases Data',
    link: '#',
  },
  {
    name: 'Govt. Program Data',
    link: '#',
  },
  {
    name: 'Agriculture Data',
    link: '#',
  },
];
const modules = [
  {
    name: 'Create Data Entry',
    link: '#',
    items: 0,
  },
  {
    name: 'Upload Excel file',
    link: '#',
    items: 0,
  },
  {
    name: 'Delete/Update Data',
    link: '#',
    items: 0,
  },
];

class App extends Component {
  state = {
    showHome: false,
    showExcel: false,
    showManual: false,
  }

  homeHandler = () => {
    console.log("Home called pre", this.state);
    this.setState({ showHome: true, showExcel: false, showManual: false });
    console.log("Home called post", this.state);
  }
  excelHandler = () => {
    console.log("Excel called pre", this.state);
    this.setState({ showHome: false, showExcel: true, showManual: false });
    console.log("Excel called post", this.state);
  }
  manualHandler = () => {
    console.log("Manual called pre", this.state);
    this.setState({ showHome: false, showExcel: false, showManual: true });
    console.log("Manual called post", this.state);
  }
  logOutHandler = () => {
    console.log("LogOut called pre", this.state);
    this.setState({ showHome: false, showExcel: false, showManual: false });
    console.log("Logout called post", this.state);
  }

  render() {
    const modulesList = modules.map(module => {
      return { ...module, useFunction: null }
    });
    modulesList[0].useFunction = this.manualHandler;
    modulesList[1].useFunction = this.excelHandler;
    const loginView = <LogIn validateUserHandler={this.homeHandler} />
    const homeView = "Home Page";
    const excelView = <SheetEntry />
    const dataView = <ShowChart />
    let fullView = loginView;
    let currentView = null;
    if (this.state.showHome) {
      currentView = homeView;
    }
    else if (this.state.showExcel) {
      currentView = excelView;
    }
    else if (this.state.showManual) {
      currentView = dataView;
    }
    else
    {
      fullView = loginView;
      currentView = null;
    }
    const defaultDashboard = (
      <>
        <Header username="Sparsh Agarwal" />
        <div className="row w-100">
          <div className="col-2 px-2 w-100">
            <div style={{ position: "absolute", top: '0', left: '0', height: '100%', width: '100%' }}>
              <div className="position-sticky" style={{ top: '0' }}>
                <SideBar
                  modules={modulesList}
                  resources={resources}
                  homeHandler={this.homeHandler}
                  Logout={this.logOutHandler}
                />
              </div>
            </div>
          </div>
          <div className="col-10">
            {currentView}
          </div>
        </div>
      </>
    );

    if (currentView !== null) {
      fullView = defaultDashboard;
    }

    return (
      fullView
    );
  }
}

export default App;
