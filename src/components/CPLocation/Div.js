import { Component } from 'react'
import '../../stylesheets/ui.css'
import { CPLocationHeader } from './Header'
import { CPLocationData  } from './Data'


export class CPLocaitonDiv extends Component {
    render() {


        return (
            <div id="cpLocationDiv">
                <table id="cpLocationTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">CP Location</td>
                    </tr>
                    <CPLocationHeader/>
                    </tbody>
                    <CPLocationData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}