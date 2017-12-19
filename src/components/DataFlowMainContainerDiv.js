import {Component} from 'react'
import '../stylesheets/ui.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import {Button, ButtonToolbar, Image , Grid, Row, Col} from 'react-bootstrap';
import {DataFlow} from './DataFlow'
import { ActionButton } from "./ActionButton";
import entityImage from '../images/entitityRelation.png'

export class DataFlowManContainerDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataType: 'initial',
            change1start: true,
            change1bind: true,
            change2start: true,
            change2bind: true,
            reset: true
        };
    }


    startProcess(processName) {
        console.log(this.state.dataType + ' The link was clicked. ' + processName);
        this.setState({dataType: processName});
        if (processName === 'BasePolicyData') {
            this.setState({change1start: false, reset: false})
        } else if (processName === 'Change1Start') {
            this.setState({change1bind: false})
        } else if (processName === 'Change1Bind') {
            this.setState({change2start: false})
        } else if (processName === 'Change2Start') {
            this.setState({change2bind: false})
        } else if (processName === 'Reset') {
            this.setState({
                change1start: true,
                change1bind: true,
                change2start: true,
                change2bind: true,
                reset: true
            })
        }
    }

    render() {

        return (
                <Grid>
                    <Row>
                        <Col>
                                <br/>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" onClick={(event) => this.startProcess("BasePolicyData")}>
                                        提出物
                                    </Button>
                                    <span>  </span>
                                    <Button bsStyle="info" disabled={this.state.change1start}
                                            onClick={(event) => this.startProcess("Change1Start")}>
                                        変更1開始
                                    </Button>
                                    <span>  </span>
                                    <Button bsStyle="info" disabled={this.state.change1bind}
                                            onClick={(event) => this.startProcess("Change1Bind")}>
                                        変更1終る
                                    </Button>
                                    <span>  </span>
                                    <Button bsStyle="warning" disabled={this.state.change2start}
                                            onClick={(event) => this.startProcess("Change2Start")}>
                                        遡及異動開始
                                    </Button>
                                    <span>  </span>
                                    <Button bsStyle="warning" disabled={this.state.change2bind}
                                            onClick={(event) => this.startProcess("Change2Bind")}>
                                        遡及異動終る
                                    </Button>
                                    <span>  </span>
                                    <Button bsStyle="danger" disabled={this.state.reset}
                                            onClick={(event) => this.startProcess("Reset")}>
                                        Reset
                                    </Button>
                                </ButtonToolbar>
                            <br/>
                            <DataFlow dataType={this.state.dataType}/>
                        </Col>
                    </Row>
                </Grid>


        )
    }
}