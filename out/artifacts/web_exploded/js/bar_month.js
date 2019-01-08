$.ajax({
    url: 'http://openapi.crimestats.or.kr/WiseOpen/ArcData/ZTEADTY42D1XJ9XPOZDG/json/1/12/2013/1/10/?/',
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        console.log(resp);
        var options = {
            data: {
                data: [
                    {ITEM_NAME2: '',DATA_VALUE: '' }
                ]

            },
            format: {
                xAxis: function(_str){
                    return _str.substr(0, 4)+'/'+_str.substr(4,2)+'/'+_str.substr(6,2);
                }
            },
            use: {
                animate: true,
                aCrossLine: true
            }

        };
        var rows = resp.ArcData.row;
        if (rows) {
            var representativeRow;
            for (i = 1; i < 11; i++) {
                representativeRow = rows[i];
                itemNm2 = representativeRow.ITEM_NAME2;
                dataV = representativeRow.DATA_VALUE;
                console.log(itemNm2);
                console.log(dataV);
                options.data.data.push({DATA_VALUE: dataV, ITEM_NAME2: itemNm2});
            }



            var series = {
                "main": {
                    "s1": {series: 'column', xaxis: 'ITEM_NAME2', yaxis: 'DATA_VALUE'}
                }
            };
            var chart = webponent.chart.init($('.chart01'), options, styles, series);

        }


    }, error: function (xhr, status, error) {
        alert("err")
    }
});




var styles = {
    main: {
        graph: {
            color: '#fafafa'
        },
        yAxis: {
            text: {
                align: 'right'
            }
        },
        series: {
            s1: {
                area: {
                    normal: {
                        color: 'skyblue', opacity: 0.5,
                        over: {
                            color: 'skyblue', opacity: 1
                        }
                    }
                },
                line: {
                    normal: {
                        color: 'blue',
                        over: {
                            color: 'blue'
                        }
                    }
                }
            }
        }
    }
};



