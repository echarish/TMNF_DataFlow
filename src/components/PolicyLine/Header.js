import {Component} from 'react'
import '../../stylesheets/ui.css'


export class PolicyLineHeader extends Component {
    render() {
        return (

            <tr>
                <td className="hed">Count</td>
                <td className="hed">PublicId</td>
                <td className="hed">ID</td>
                <td className="hed">FixedID</td>
                <td className="hed">UpdateTime</td>
                <td className="hed">CreateTime</td>
                <td className="hed">EffectiveDate</td>
                <td className="hed">ExpirationDate</td>

            </tr>




        )
    }
}