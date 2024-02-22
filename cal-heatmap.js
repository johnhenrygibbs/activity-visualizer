const cal = new CalHeatmap();

cal.paint({
    date : {
        start : new Date('2024-01-01')
    },
    range : 12,
    domain : {
        type : 'month',
        gutter : 15,
        dynamicDimension : true,
    },
    subDomain : {
        type : 'xDay',
        radius : 85,

    }
});