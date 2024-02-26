import {dates} from "/map.js";

console.log(dates);
// console.log(JSON.stringify(dates));
// console.log(dates.length);

const thisData = [];

for (let i = 0; i < dates.length; i++) {

    console.log(dates[i]);

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