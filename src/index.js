/**
 * Created by zhirongyuan on 2017/8/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './index.css';
import echarts from 'echarts';
import NormalChart from './routes/chart/NormalChart';

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
        __cy.Connect("http://172.18.1.197:8081");
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