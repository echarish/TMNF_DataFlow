import {Component} from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class PolicyPeriodData extends Component {

    render() {
        let dataArray = findProcessDataType('pc_policyperiod', this.props.dataType);

        let tableRow = dataArray.map(function (dataArrayData, index) {

            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td className="Yellow">{dataArrayData.ID}</td>
                <td>{dataArrayData.PolicyNumber}</td>
                <td>{dataArrayData.PolicyID}</td>
                <td className="Green">{dataArrayData.PolicyTermID}</td>
                <td>{dataArrayData.EditEffectiveDate}</td>
                <td>{dataArrayData.PeriodStart}</td>
                <td>{dataArrayData.PeriodEnd}</td>
                <td>{dataArrayData.WrittenDate}</td>
                <td>{dataArrayData.ModelDate}</td>
                <td>{dataArrayData.UpdateTime}</td>
            </tr>;
        })
        return (
            <tbody>
            {tableRow}
            </tbody>
        );
    }
}