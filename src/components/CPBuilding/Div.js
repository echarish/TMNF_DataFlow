import { Component} from 'react'
import '../../stylesheets/ui.css'
import { CPBuildingHeader } from './Header'
import { CPBuildingData  } from './Data'


export class CPBuildingDiv extends Component {
    render() {


        return (
            <div id="cpBuildingDiv">
                <table id="cpBuildingTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">CP Building</td>
                    </tr>
                    <CPBuildingHeader/>
                    </tbody>
                    <CPBuildingData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}