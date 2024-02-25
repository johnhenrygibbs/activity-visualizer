import {dates} from "/map.js";

console.log(dates);
console.log(typeof(dates));
const thisData = [];

for (const item in dates) {

    console.log(item);

}

const cal = new CalHeatmap();
const data = [
    { date: '2024-01-01', value: 3 },
    { date: '2024-01-02', value: 6 },
];

console.log(thisData);

cal.paint({
    verticalOrientation: false,
    date: {
        start: new Date('2024-01-01')
    },
    data: {
        source: thisData,
        x: 'date',
        y: 'value'
    },
    range: 12,
    domain: {
        type: 'month',
        gutter: 15,
        dynamicDimension: true,
    },
    subDomain: {
        type: 'xDay',
        radius: 85,

    }
});