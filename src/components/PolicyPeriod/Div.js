import {Component} from 'react'
import '../../stylesheets/ui.css'
import { PolicyPeriodHeader } from './Header'
import { PolicyPeriodData  } from './Data'


export class PolicyPeriodDiv extends Component {
    render() {


        return (
            <div id="policyPeriodDiv">
                <table id="policyPeriodTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">Policy Period</td>
                    </tr>
                    <PolicyPeriodHeader/>
                    </tbody>
                    <PolicyPeriodData dataType={ this.props.dataType }/>
                </table>
            </div>

        )
    }
}