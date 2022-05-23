/**
 * Created by zhirongyuan on 2017/8/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './index.css';
import echarts from 'echarts';
import NormalChart from './routes/chart/NormalChart';

import poi_request from './pois';

class App extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {

        }
        this.echartsInstance = echarts;
    }

    componentWillMount() {

        __cy.SetupListener('Demo', (event) => {
            console.log("event :", event);
        });

    }

    componentDidMount() {
        __cy.Connect("http://xxxxxx:pppp");
    }

    AddPOIs() {
        __cy.SendRequest("UpdatePOIs", poi_request, (result) => {
            console.log("Request Result : ", result);
        });
    }

    RemovePOIs() {
        __cy.SendRequest("DeleteAllPOIs", {}, (result) => {
            console.log("Request Result : ", result);
        });
    }

    render() {
        return (
            <ul className='Wrap clearfix' style={{ pointerEvents: "none" }}>
                <li className="Board">
                    <div className="chartWrap">
                        <div className="chartTitle">报表A</div>
                        <div style={{ width: '100%', height: '200px' }} className="chart">
                            <NormalChart />
                        </div>
                    </div>
                </li>
                <li style={{ pointerEvents: "none" }}>
                    <div className="ButtonArea">
                        <div className="Button" onClick={this.AddPOIs.bind(this)}>加点</div>
                        <div className="Button" onClick={this.RemovePOIs.bind(this)}>减点</div>
                    </div>
                </li>
                <li className="Board">
                    <div className="chartWrap">
                        <div className="chartTitle">报表B</div>
                        <div style={{ width: '100%', height: '200px' }}>
                            <NormalChart />
                        </div>
                    </div>
                </li>
            </ul>

        )
    }
};
ReactDOM.render(<App />, document.getElementById('app'));