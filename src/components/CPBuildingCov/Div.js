import { Component } from 'react'
import '../../stylesheets/ui.css'
import { CPBuildingCovHeader } from './Header'
import { CPBuildingCovData  } from './Data'


export class CPBuildingCovDiv extends Component {
    render() {


        return (
            <div id="cpBuildingCovDiv">
                <table id="cpBuildingCovTab" className="stats" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td className="hed" colSpan="11">CP Building Coverage</td>
                    </tr>
                    <CPBuildingCovHeader/>
                    </tbody>
                    <CPBuildingCovData dataType={ this.props.dataType }/>
                </table>
            </div>
        )
    }
}