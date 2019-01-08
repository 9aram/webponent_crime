function callMonth(crimeId,selectedYear) {

    $.ajax({
        url     : 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T184223019918177&DTACYCLE_CD=YY&Type=json&CLS_ID='+crimeId+'&WRTTIME_IDTFR_ID='+selectedYear,
        type    : 'GET',
        dataType: 'json',
        success : function (resp) {
            $(".chart01").html("");
            console.log(resp);
            var styles = {
                main: {
                    layout   : {

                        paddingTop: 57, paddingRight: 30, color: 'white',
                        line      : {color: 'white', width: 1}
                    }, graph : {
                        color: '#f8f8f8',
                        line : {
                            top   : {color: '#cccccc'},
                            left  : {width: 0},
                            right : {width: 0},
                            bottom: {color: '#cccccc'}
                        }
                    },
                    crossLine: {
                        color: '#465866'
                    },
                    xAxis    : {
                        paddingTop: 13, height: 30,
                        text      : {family: 'Nanum Gothic', size: 12, color: '#666'},
                        line      : {color: '#e3e3e3', width: 1}
                    },
                    yAxis    : {
                        line: {color: '#cccccc', width: 1, opacity: 1},
                        text: {family: 'Nanum Gothic', size: 12, color: '#666', align: 'right'}
                    },
                    tip      : {
                        className: 'tip'
                    },
                    series   : {
                        s1: {
                            area    : {
                                normal: {
                                    color: [[0, '#2bcdba'], [100, '#6bdccf']],
                                    over : {
                                        color: {
                                            src  : '../../WEB-APP/webponent/chart2.0/sample/chart/img/over.png',
                                            color: '#4e6679'
                                        }
                                    }
                                }
                            },
                            line    : {
                                normal: {
                                    width: 0,
                                    over : {width: 0}
                                }
                            },
                            gradient: {
                                direction: 'vertical'
                            },
                            text    : {
                                use   : true, color: '#666666', family: 'Nanum Gothic', size: 12,
                                format: 'priceDataFormat'
                            }
                        }
                    }
                }
            };

            var options = {
                data  : {
                    data: []

                },
                format: {
                    xAxis: function (_str) {
                        return _str.substr(0, 4);
                    },
                    yAxis: 'priceDataFormat'
                },
                func  : {
                    tip: function (tipElement, data, rect) {
                        //console.log(data)
                        var date = data.xaxis.substr(0, 4);
                        console.log(data.xaxis);
                        var tip = '<div class="text">' + date + ' / ' + String(data.yaxis).format().trim() + '</div>';

                        tipElement.html(tip).show();

                        var arrow = '<div class="arrow" style="width: ' + tipElement.width() + 'px;"></div>';

                        tipElement.html(tipElement.html() + arrow).css({
                            left: rect.x - (tipElement.width() / 2), top: rect.y - 35
                        });

                    },
                    itemClick: function(data){

                        window.onload();
                        getGrid(data.data.ITM_ID, crimeId, data.xaxis);

                        console.log(data.data.ITM_ID);
                    }
                },
                use   : {
                    animate   : true,
                    aCrossLine: true
                }

            };
            var rows = resp.Sttsapitbldata[1].row;
            if (rows) {
                var representativeRow;
                for (i = 1; i < 13; i++) {
                    representativeRow = rows[i];
                    itemNm2 = representativeRow.ITM_NM;
                    dataV = representativeRow.DTA_VAL;
                    itm_id= representativeRow.ITM_ID;
                 /*   console.log(itemNm2);
                    console.log(dataV);
                    console.log(itm_id);*/
                    options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2, ITM_ID:itm_id});

                }

                var series = {
                    "main": {
                        "s1": {series: 'column', xaxis: 'ITM_NM', yaxis: 'DTA_VAL'}
                    }
                };
                event.stopPropagation();
                var chart = webponent.chart.init($('.chart01'), options, styles, series);
            }
        }, /*error: function (xhr, status, error) {
        alert("err")
    }*/
    });


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '.' + mm + '.' + dd + ' 기준';
   // document.getElementById("today_date").innerHTML = today;

}
function callSubtitle(title){
    $('.subtitle').text("월간 "+title+' 발생현황');
}



$(".grid-template-1").on('click', function (data) {
    console.log(data);
});

/*
var imported = document.createElement("script");
imported.src = "grid.js";  //saved in "other js" folder
document.getElementsByTagName("head")[0].appendChild(imported);
*/




