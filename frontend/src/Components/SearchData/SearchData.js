import SearchBar from '../SearchBar/SearchBar';
import { Tabs } from "antd";
import covidIcon from '../../common/images/virus-outline.svg';
import plantIcon from '../../common/images/sprout.svg';
import rupee from '../../common/images/currency-inr.svg';
import policeBadge from '../../common/images/police-badge-outline.svg';
import hammer from '../../common/images/gavel.svg';
import Covidpage from '../CovidPage/Covidpage';
const { TabPane } = Tabs;


const StyledTab = (props) => {
    return (
        <div className="major-tabs">
            {props.children}
        </div>
    )
}

export const SearchData = () => {
    const changeHandler = (key) => { };
    return (
        <div>
            <div style={{ backgroundColor: "white" }}>
                <Tabs defaultActiveKey="1" onChange={changeHandler} type="card" className="major-upper-tabs">
                    <TabPane key="1" tab={<StyledTab><img src={covidIcon} className="mx-2" />Covid</StyledTab>}>
                        <div>
                            <Covidpage />
                        </div>
                    </TabPane>
                    <TabPane key="2" tab={<StyledTab><img src={plantIcon} className="mx-2" />Agriculture</StyledTab>}>
                        <div>
                            Agriculture
                        </div>
                    </TabPane>
                    <TabPane key="3" tab={<StyledTab><img src={rupee} className="mx-2" />Taxes</StyledTab>}>
                        <div>
                            Taxes
                        </div>
                    </TabPane>
                    <TabPane key="4" tab={<StyledTab><img src={hammer} className="mx-2" />Court</StyledTab>}>
                        <div>
                            Court
                        </div>
                    </TabPane>
                    <TabPane key="5" tab={<StyledTab><img src={policeBadge} className="mx-2" />Policing</StyledTab>}>
                        <div>
                            Police
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default SearchData;