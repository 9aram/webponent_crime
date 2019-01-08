function callPie(crimeId,selectedYear) {
    $.ajax({
        url     : 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T188473021255482&DTACYCLE_CD=YY&Type=json&CLS_ID='+crimeId+'&WRTTIME_IDTFR_ID='+selectedYear,
        type    : 'GET',
        dataType: 'json',
        success : function (resp) {
            //console.log(resp);

            var styles = {
                layout: { // SVG 전체에 대한 스타일
                    area    : {
                        color: 'white'
                    },
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                pie   : {
                    radius : 69,
                    area   : {
                        color: [
                            '#28a9a5', '#3db4af', '#5bc4c0', '#82d2cf',
                            '#ace1df', '#c8ebea', '#d9f1f0'
                        ]
                    },
                    line   : {
                        color: '#fff',
                        width: 3
                    },
                    animate: {
                        use : true,
                        step: 80,
                        type: 'easeInOutExpo' /* linear | easeInOutExpo | none */
                    },
                    hover  : {
                        use : true,
                        area: {
                            color: '#179490'
                        }
                    }
                },
                base  : {
                    use   : true,
                    radius: 80,
                    area  : {
                        color: '#fff'
                    },
                    line  : {
                        color: '#d3efed',
                        width: 20
                    }

                },
                donut : {
                    use   : true,
                    radius: 35,
                    area  : {
                        color: '#fff'
                    },
                    line  : {
                        color: '#fff',
                        width: 2
                    }

                },
                legend: {
                    use       : true,
                    stackedGap: 5,
                    type      : 'lollipop',
                    text      : {
                        family : 'Nanum Gothic',
                        size   : 12,
                        color  : '#333333',
                        style  : 'italic', /* normal | italic */
                        weight : 'bold', /* normal | bold */
                        opacity: 1
                    },

                    pin    : {
                        color  : '#8397a6',
                        width  : 1,
                        length : 20,
                        opacity: 1
                    },
                    pinHead: {
                        size: 4,
                        area: {
                            color: '#8397a6'
                        },
                        line: {
                            color: '#8397a6',
                            width: 1
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
                }
            };
            var rows = resp.Sttsapitbldata[1].row;
            if (rows) {
                var representativeRow;
                for (i = 1; i < Object.keys(rows).length; i++) {
                    representativeRow = rows[i];
                    itemNm2 = representativeRow.ITM_NM;
                    dataV = representativeRow.DTA_VAL;
                    // console.log(itemNm2);
                    // console.log(dataV);
                    options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2});
                }


            }

            pie = webponent.visual.pie.init($(".pie_period"), styles, options);
            settingDonut(pie);

            pie.on('reDraw', function(e, pie) {

                settingDonut(pie);
            });
            function settingDonut(pie) {

                var x = pie.svg.width / 2;
                var y = pie.svg.height / 2;
                var dataTotalValue = pie.settings.data.dataTotalValue;
                var renderedData = pie.settings.data.renderedData;
                var legend = pie.items.legend.text;
                var maxIndex = pie.settings.data.maxIndex;
                var maxData = renderedData[maxIndex];

                var data = pie.svg.text(x, y - 25, maxData.pdata);
                var date = pie.svg.text(x, (y + 20), maxData.date);
                var title = pie.svg.text(x, (y + 40), pie.options.legend.format[maxIndex]);
                var linePath = 'M' + (x - 48) + ',' + (y + 2) + ',L' + (x + 48) + ',' + (y + 2);
                var line = pie.svg.path(linePath);

                data.attr({
                    fill: '#494949',
                    'font-size': 48,
                    'font-family': 'Nanum Gothic'
                });

                date.attr({
                    fill: '#494949',
                    'font-size': 13,
                    'font-family': 'Nanum Gothic'
                });

                title.attr({
                    fill: '#494949',
                    'font-size': 13,
                    'font-family': 'Nanum Gothic'
                });

                line.attr({
                    width: 1,
                    stroke: '#dadee0'
                });

                var number = 0;

                pie.items.pie.hover(function(e) {

                    number = this.number;

                    pie.items.legend.pinHead[number].attr({
                        r: 8,
                        fill: '#fff',
                        stroke: '#455763',
                        'stroke-width': 4
                    });

                    data.attr({
                        text: pie.settings.data.renderedData[this.number].pdata
                    });
                    title.attr({
                        text: pie.options.legend.format[this.number]
                    });

                }, function(e) {

                    pie.items.legend.pinHead[number].attr({
                        r: 4,
                        fill: '#8397a6',
                        stroke: '#8397a6',
                        'stroke-width': 1
                    });
                });
            }

        }, error: function (xhr, status, error) {
            alert("err")
        }
    });
}