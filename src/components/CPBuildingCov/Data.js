import {Component} from 'react'
import '../../stylesheets/ui.css'
import { findProcessDataType } from '../../utils/utility'


export class CPBuildingCovData extends Component {


    render() {

        let dataArray = findProcessDataType('pc_cpbuildingcov', this.props.dataType);


        let tableRow = dataArray.map(function (dataArrayData, index) {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataArrayData.PublicID}</td>
                <td>{dataArrayData.FixedID}</td>
                <td className="Orange">{dataArrayData.ID}</td>
                <td className="LPink">{dataArrayData.CPBuilding}</td>
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