import { Component } from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class PolicyLineData extends Component {

    render() {
        let dataArray = findProcessDataType('pc_policyline', this.props.dataType);


        let tableRow = dataArray.map(function (dataArrayData, index) {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td className="Yellow">{dataArrayData.ID}</td>
                <td>{dataArrayData.FixedID}</td>
                <td>{dataArrayData.UpdateTime}</td>
                <td>{dataArrayData.CreateTime}</td>
                <td>{dataArrayData.EffectiveDate}</td>
                <td>{dataArrayData.ExpirationDate}</td>
            </tr>;
        })
        return (
            <tbody>
            {tableRow}
            </tbody>
        );
    }
}