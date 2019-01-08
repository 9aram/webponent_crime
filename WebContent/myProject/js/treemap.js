
$.ajax({
    url: 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T184223019918177&DTACYCLE_CD=YY&WRTTIME_IDTFR_ID=2016&ITM_ID=10011&Type=json',
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        // console.log(resp);
        var styles = {
            enterGroup : {
                use : true,
                animate : {
                    use : true,
                    speed : 300,
                    type : 'linear' /* linear|>|<|<>|bounce|elastic|backln|backOut */
                },
                interFace : {
                    animate : {
                        use : true,
                        speed : 300,
                        type : 'linear' /* linear|>|<|<>|bounce|elastic|backln|backOut */
                    },
                    group : {
                        width : 220,
                        line : {
                            width : 1,
                            color : '#fff'
                        },
                        area : {
                            color : '#666666',
                            opacity : 1
                        },
                        hover : {
                            line : {
                                color: '#fff',
                                width: 1,
                                opacity : 1
                            },
                            area : {
                                opacity: 1,
                                color : 'ff0000'
                            }
                        }
                    },
                    button : {
                        width : 34,
                        height : 30,
                        back : {
                            src : '../webponent/chart/sample/visual/img/treemap_backBtn.png'
                        },
                        toggle : {
                            open : {
                                src : '../webponent/chart/sample/visual/img/treemap_upBtn.png'
                            },
                            close : {
                                src : '../webponent/chart/sample/visual/img/treemap_downBtn.png'
                            }
                        }
                    },
                    base : {
                        paddingTop : 10,
                        line : {
                            width : 3,
                            color : '#cecece'
                        },
                        area : {
                            color : '#fff',
                            opacity : 1
                        }
                    },
                    text : {
                        family: 'dotum',
                        size: 13,
                        color: '#000',
                        align: 'right',     /* left | center | right */
                        style: 'normal',    /* normal | italic */
                        weight: 'normal',   /* normal | bold */
                        opacity: 1
                    }
                }
            }
        };
        var options = {
            data: {
                data: [
                ]
                ,
                use: 'DTA_VAL',
                flag : 'flag',
                group : 'code',
                groupName : 'group',
                item : 'name'
            },

            legend: {
                use: 'ITM_NM'
            },
            resize : {
                use : true
            }
        };
        var rows = resp.Sttsapitbldata[1].row;
        if (rows) {
            var representativeRow;
            for (i = 1; i < 11; i++) {
                representativeRow = rows[i];
                itemNm2 = representativeRow.ITM_NM;
                dataV = representativeRow.DTA_VAL;
                // console.log(itemNm2);
                //console.log(dataV);
                options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2});
            }




        }

treemap = webponent.visual.treemap.init($('.treemap'), styles, options);
    }, error: function (xhr, status, error) {
        alert("err")
    }
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
today = yyyy + '.' + mm + '.' + dd + ' 기준';
document.getElementById("today_date").innerHTML = today;
