var styles = {
	base : {
        use : true,
        radius : 80,
        area : {
            color : '#fff'
        },
        line : {
            color : '#7de0ce',
            width : 15
        }
    }
};
var options = {
    data: {
        data: [
            {date: 20120101, price: 10000, legend: 'A'},
            {date: 20120101, price: 20000, legend: 'B'},
            {date: 20120101, price: 30000, legend: 'C'},
            {date: 20120101, price: 40000, legend: 'D'}
        ],
        use: 'price'
    },
     legend : {
     	use : 'legend'
    }
};

pie = webponent.visual.pie.init($(".pie"), styles, options);