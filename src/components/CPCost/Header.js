import { Component } from 'react'
import '../../stylesheets/ui.css'


export class CPCostHeader extends Component {
    render() {
        return (

            <tr>
                <td className="hed">Count</td>
                <td className="hed">PublicId</td>
                <td className="hed">ID</td>
                <td className="hed">CPBuildingCov</td>
                <td className="hed">EffectiveDate</td>
                <td className="hed">ExpirationDate</td>
            </tr>
        )
    }
}