function callPie(crimeId,selectedYear) {
    $.ajax({
        url     : 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T188473021255482&DTACYCLE_CD=YY&Type=json&CLS_ID='+crimeId+'&WRTTIME_IDTFR_ID='+selectedYear,
        type    : 'GET',
        dataType: 'json',
        success : function (resp) {
            //console.log(resp);
            $(".chart01").html("");

            var styles = {

                main: {
                    layout: {
                        paddingTop: 10, paddingRight: 30, color: 'white',
                        line: {color: 'white', width: 1},

                    },
                    graph: {
                        color: '#f8f8f8',
                        line: {
                            top: {color: '#cccccc'},
                            left: {width: 0},
                            right: {width: 0},
                            bottom: {color: '#cccccc'}
                        }
                    },
                    crossLine: {
                        color: '#465866'
                    },
                    xAxis: {
                        paddingTop: 13, height: 30,
                        text: {family: 'Nanum Gothic', size: 12, color: '#666'},
                        line: {color: '#e3e3e3', width: 1}
                    },
                    yAxis: {
                        line: {color: '#cccccc', width: 1, opacity: 1},
                        text: {family: 'Nanum Gothic', size: 12, color: '#666', align: 'right'}
                    },
                    tip: {
                        className: 'tip'
                    },
                    series: {
                        s1: {
                            line: {
                                normal: {
                                    color: '#2bcdba', width: 3,
                                    over: {
                                        color: '#2bcdba', width: 3
                                    }
                                }
                            },
                            tick: {
                                style: 'circle', size: 5, overSize: 1.5,
                                area: {
                                    normal: {
                                        color: '#fff', over: {color: '#fff'}
                                    }
                                },
                                line: {
                                    normal: {
                                        color: '#2bcdba', width: 3, over: {color: '#465866', width: 3}
                                    }
                                }
                            }
                        }
                    }
                }

            }
            var options = {
                data   : {
                    data: []
                    ,
                    use : 'DTA_VAL'
                },
                legend : {
                    use: 'ITM_NM'
                },
                resize : {
                    use: true
                },
                toolTip: {
                    use: true
                },
                format: {
                    xAxis: function(_str){
                        return _str.substr(0, 4);
                    },
                    yAxis: 'priceDataFormat'
                },
                func: {
                    tip: function(tipElement, data, rect){
                        var date = data.xaxis;
                        var tip = '<div class="text">'+date + ' / ' + String(data.yaxis).format().trim()+'</div>';

                        tipElement.html(tip).show();

                        var arrow = '<div class="arrow" style="width: '+tipElement.width() + 'px;"></div>';

                        tipElement.html(tipElement.html() + arrow).css({
                            left: rect.x - (tipElement.width() / 2), top: rect.y - 35
                        });
                    }
                },
                use: {
                    animate: true,
                    aCrossLine: true
                },
                animate: {
                    speed: 100
                }
            };
            var rows = resp.Sttsapitbldata[1].row;
            if (rows) {
                var representativeRow;
                for (i = 0; i < Object.keys(rows).length; i++) {
                    representativeRow = rows[i];
                    itemNm2 = representativeRow.ITM_NM;
                    dataV = representativeRow.DTA_VAL;
                    // console.log(itemNm2);
                    // console.log(dataV);
                    if((itemNm2!== "계" )&& (itemNm2!== "미분류")){

                        options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2});
                    }
                }


            }
            var series = {
                "main": {
                    "s1": {series: 'line', xaxis: 'ITM_NM', yaxis: 'DTA_VAL'}
                }
            };
            var chart = webponent.chart.init($('.chart01'), options, styles, series);



        }, error: function (xhr, status, error) {
            alert("err")
        }
    });
}