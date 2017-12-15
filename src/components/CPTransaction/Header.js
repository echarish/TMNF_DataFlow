import { Component } from 'react'
import '../../stylesheets/ui.css'


export class CPTransactionHeader extends Component {
    render() {
        return (

            <tr>
                <td className="hed">Count</td>
                <td className="hed">PublicId</td>
                <td className="hed">ID</td>
                <td className="hed">CPCost</td>
                <td className="hed">EffDate</td>
                <td className="hed">ExpDate</td>
                <td className="hed">EffectiveDate</td>
                <td className="hed">ExpirationDate</td>
            </tr>
        )
    }
}