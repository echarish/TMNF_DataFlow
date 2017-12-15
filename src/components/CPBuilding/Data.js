import { Component } from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class CPBuildingData extends Component {

    render() {

        let dataArray = findProcessDataType('pc_cpbuilding', this.props.dataType);


        let tableRow = dataArray.map(function (dataArrayData, index) {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td>{dataArrayData.FixedID}</td>
                <td className="LPink">{dataArrayData.ID}</td>
                <td className="Blue">{dataArrayData.CPLocation}</td>
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