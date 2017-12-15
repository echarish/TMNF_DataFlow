import { Component } from 'react'
import '../../stylesheets/ui.css'
import { CPTransactionHeader } from './Header'
import { CPTransactionData  } from './Data'

export class CPTransactionDataDiv extends Component {
    render() {


        return (
            <div id="CPTransactionDiv">
                <table id="CPTransactionTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">CP Transaction</td>
                    </tr>
                    <CPTransactionHeader/>
                    </tbody>
                    <CPTransactionData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}