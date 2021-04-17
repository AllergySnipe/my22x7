import SearchBar from '../SearchBar/SearchBar';
import { Tabs } from "antd";
import covidIcon from '../../common/images/virus-outline.svg';
import plantIcon from '../../common/images/sprout.svg';
import rupee from '../../common/images/currency-inr.svg';
import hammer from '../../common/images/gavel.svg';
import cross from '../../common/images/cross.svg';
import needle from '../../common/images/needle.svg';
import RevenuePage from '../RevenuePage/RevenuePage';
import CourtPage from '../CourtPage/CourtPage';
import Covidpage from '../CovidPage/Covidpage';
import HealthcarePage from '../HealthcarePage/HealthcarePage';
import DrugPage from '../DrugPage/DrugPage';
import RationPage from '../RationPage/RationPage';
const { TabPane } = Tabs;


const StyledTab = (props) => {
    return (
        <div className="major-tabs">
            {props.children}
        </div>
    )
}

export const GeneralAdmin = () => {
    const changeHandler = (key) => { };
    return (
        <div>
            <div style={{ backgroundColor: "white" }}>
                <Tabs defaultActiveKey="1" onChange={changeHandler} type="card" className="major-upper-tabs">
                    <TabPane key="1" tab={<StyledTab><img src={rupee} className="mx-2" />Revenue</StyledTab>}>
                        <div>
                            <RevenuePage />
                        </div>
                    </TabPane>
                    <TabPane key="2" tab={<StyledTab><img src={hammer} className="mx-2" />Court</StyledTab>}>
                        <div>
                            <CourtPage />
                        </div>
                    </TabPane>
                    <TabPane key="3" tab={<StyledTab><img src={covidIcon} className="mx-2" />Covid</StyledTab>}>
                        <div>
                            <Covidpage />
                        </div>
                    </TabPane>
                    <TabPane key="4" tab={<StyledTab><img src={cross} className="mx-2" />Healthcare</StyledTab>}>
                        <div>
                            <HealthcarePage />
                        </div>
                    </TabPane>
                    <TabPane key="5" tab={<StyledTab><img src={needle} className="mx-2" />Drug Abuse</StyledTab>}>
                        <div>
                            <DrugPage />
                        </div>
                    </TabPane>
                    <TabPane key="6" tab={<StyledTab><img src={plantIcon} className="mx-2" />Smart Ration</StyledTab>}>
                        <div>
                            <RationPage />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default GeneralAdmin;