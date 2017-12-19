import { BasePolicyData } from '../data/BasePolicyData.json'
import { Change1Start } from '../data/Change1Start.json'
import { Change1Bind } from '../data/Change1Bind.json'
import { Change2Start } from '../data/Change2Start.json'
import { Change2Bind } from '../data/Change2Bind.json'

export function findProcessDataType(datatablename, dataType) {

    let dataArray = []

    if (dataType === "BasePolicyData") {
        dataArray = BasePolicyData[datatablename];
    } else if (dataType === "Change1Start") {
        dataArray = Change1Start[datatablename];
    } else if (dataType === "Change1Bind") {
        dataArray = Change1Bind[datatablename];
    } else if (dataType === "Change2Start") {
        dataArray = Change2Start[datatablename];
    } else if (dataType === "Change2Bind") {
        dataArray = Change2Bind[datatablename];
    }

    dataArray.sort(compare);

    return dataArray;

}

function compare(a,b) {
    if (a.PublicId < b.PublicId)
        return -1;
    if (a.PublicId > b.PublicId)
        return 1;
    return 0;
}

