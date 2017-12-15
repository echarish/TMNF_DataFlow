import { Component } from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class PolicyData extends Component {

    render() {

        let dataArray = findProcessDataType('pc_policy', this.props.dataType);

        let tableRow = dataArray.map(function (dataArrayData, index) {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td>{dataArrayData.ProductCode}</td>
                <td className="Green">{dataArrayData.ID}</td>
                <td>{dataArrayData.IssueDate}</td>
                <td>{dataArrayData.CreateTime}</td>
                <td>{dataArrayData.OriginalEffectiveDate}</td>
            </tr>;
        })
        return (
            <tbody>
            {tableRow}
            </tbody>
        );
    }
}