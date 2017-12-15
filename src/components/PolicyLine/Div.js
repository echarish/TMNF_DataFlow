import {Component} from 'react'
import '../../stylesheets/ui.css'
import { PolicyLineHeader } from './Header'
import { PolicyLineData  } from './Data'


export class PolicyLineDiv extends Component {
    render() {
        return (
            <div id="policyLineDiv">
                <table id="policyLineTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">Policy Line</td>
                    </tr>
                    <PolicyLineHeader/>
                    </tbody>
                    <PolicyLineData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}