import { Component } from 'react'
import '../../stylesheets/ui.css'
import { CPCostHeader } from './Header'
import { CPCostData  } from './Data'


export class CPCostDiv extends Component {
    render() {


        return (
            <div id="cpCostDiv">
                <table id="cpCostTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">CP Cost</td>
                    </tr>
                    <CPCostHeader/>
                    </tbody>
                    <CPCostData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}