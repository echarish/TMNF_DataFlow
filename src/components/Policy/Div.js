import { Component } from 'react'
import '../../stylesheets/ui.css'
import { PolicyHeader } from './Header'
import { PolicyData  } from './Data'


export class PolicyDiv extends Component {
    render() {
        return (
            <div id="policyPeriodDiv">
                <table id="policyPeriodTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">Policy Term</td>
                    </tr>
                    <PolicyHeader/>
                    </tbody>
                   <PolicyData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}