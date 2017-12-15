import { Component } from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class CPTransactionData extends Component {

    render() {

        let dataArray = findProcessDataType('pc_cptransaction', this.props.dataType);

        let tableRow = dataArray.map(function (dataArrayData, index) {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td >{dataArrayData.ID}</td>
                <td className="Maroon">{dataArrayData.CPCost}</td>
                <td>{dataArrayData.EffDate}</td>
                <td>{dataArrayData.ExpDate}</td>
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