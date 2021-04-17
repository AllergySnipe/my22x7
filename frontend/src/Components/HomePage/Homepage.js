import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../../common/images/admin.png';
import dev from '../../common/images/dev.png';
import seasonal from '../../common/images/seasonal.png';
import structure from '../../common/images/structure.png';

class HomePage extends Component {


    render() {
        return (
            <div class="grid-container-home" style={{ gridTemplateColumns: "2fr 2fr" }}>
                <Link to={"/general-administration"} >
                    <div class="grid-item-home" style={{ backgroundColor: "#b5f5f4" }}>
                        <div>General Administration</div>
                        <img src={admin} alt="General Administration" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
                <Link to={"/dev-administration"}>
                    <div class="grid-item-home" style={{ backgroundColor: "#d2b6fa" }}>
                        <div>Development Administration</div>
                        <img src={dev} alt="Development Administration" style={{ width: "220px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
                <Link to={"/seasonal"}>
                    <div class="grid-item-home" style={{ backgroundColor: "#d2b6fa" }}>
                        <div>Seasonal Work</div>
                        <img src={seasonal} alt="Seasonal work" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
                <Link to={"/drives-working"} >
                    <div class="grid-item-home" style={{ backgroundColor: "#b5f5f4" }}>
                        <div>Structured Drivers and Working</div>
                        <img src={structure} alt="Structured Drivers and Working" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
            </div >
        );
    }
}

export default HomePage;