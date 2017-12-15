import {Button, ButtonToolbar, Image , Grid, Row, Col} from 'react-bootstrap';

export const ActionButton = ({onStartProcess, stateVar}) => (
    <ButtonToolbar>
        <Button bsStyle="primary" onClick={(event) => onStartProcess("BasePolicyData")}>
            Create Commerical Policy
        </Button>
        <span>  </span>
        <Button bsStyle="info" disabled={stateVar.change1start}
                onClick={(event) => onStartProcess("Change1Start")}>
            Start Change 1
        </Button>
        <span>  </span>
        <Button bsStyle="info" onStartProcess={stateVar.change1bind}
                onClick={(event) => onStartProcess("Change1Bind")}>
            Quote Change 1
        </Button>
        <span>  </span>
        <Button bsStyle="warning" onStartProcess={stateVar.change2start}
                onClick={(event) => startProcess("Change2Start")}>
            Start OOSE
        </Button>
        <span>  </span>
        <Button bsStyle="warning" onStartProcess={stateVar.change2bind}
                onClick={(event) => startProcess("Change2Bind")}>
            Quote OOSE
        </Button>
        <span>  </span>
        <Button bsStyle="danger" onStartProcess={stateVar.reset}
                onClick={(event) => startProcess("Reset")}>
            Reset
        </Button>
    </ButtonToolbar>
)