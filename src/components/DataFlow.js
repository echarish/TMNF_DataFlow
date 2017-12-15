import { Component } from 'react'
import '../stylesheets/ui.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import RightArrow from 'react-icons/lib/fa/arrow-right'
import LeftArrow from 'react-icons/lib/fa/arrow-left'
import DownArrow from 'react-icons/lib/fa/arrow-down'
import UpArrow from 'react-icons/lib/fa/arrow-up'


import { PolicyPeriodDiv } from './PolicyPeriod/Div'
import { PolicyDiv } from './Policy/Div'
import { PolicyLineDiv } from './PolicyLine/Div'
import { CPLocaitonDiv } from './CPLocation/Div'
import { CPBuildingDiv } from './CPBuilding/Div'
import { CPBuildingCovDiv } from './CPBuildingCov/Div'
import { CPCostDiv } from './CPCost/Div'
import { CPTransactionDataDiv } from './CPTransaction/Div'


export class DataFlow extends Component {
    render() {

        return (
            <div >

                <PolicyDiv dataType={ this.props.dataType }/>

                <div className="col-sm-2 col-sm-offset-2">
                    <div className="col-sm-6 Green text-center">
                        <UpArrow/>
                    </div>
                </div>

                <PolicyPeriodDiv dataType={ this.props.dataType }/>

                <div className="col-sm-12">
                    <div className="col-sm-2 Yellow text-center">
                        <UpArrow/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <CPLocaitonDiv dataType={ this.props.dataType }/>
                    </div>
                    <div className="col-lg-1 Blue  text-center">
                        <LeftArrow/>
                    </div>
                    <div className="col-lg-6">
                        <CPBuildingDiv dataType={ this.props.dataType }/>
                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-6">
                        <CPBuildingCovDiv dataType={ this.props.dataType }/>
                    </div>
                    <div className="col-lg-1 LPink  text-center">
                        <UpArrow/>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>

                <div className="col-lg-12 ">
                    <div className="col-sm-2 Orange text-center">
                        <UpArrow/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <CPCostDiv dataType={ this.props.dataType }/>
                    </div>
                    <div className="col-lg-1 Maroon  text-center">
                        <LeftArrow/>
                    </div>
                    <div className="col-lg-6">
                        <CPTransactionDataDiv dataType={ this.props.dataType }/>
                    </div>
                </div>



            </div>
        )
    }
}