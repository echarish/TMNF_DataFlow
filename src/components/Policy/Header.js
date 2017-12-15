import { Component } from 'react'
import '../../stylesheets/ui.css'


export class PolicyHeader extends Component {
    render() {
        return (

            <tr>
                <td className="hed">Count</td>
                <td className="hed">PublicId</td>
                <td className="hed">ProductCode</td>
                <td className="hed">ID</td>
                <td className="hed">IssueDate</td>
                <td className="hed">CreateTime</td>
                <td className="hed">OriginalEffectivedate</td>

            </tr>




        )
    }
}