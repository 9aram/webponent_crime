var sel = $("#slct option:selected").val();

function callMap(crimeId,selectedYear) {
$.ajax({
    url: 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T183673021266818&DTACYCLE_CD=YY&Type=json&CLS_ID='+crimeId+'&WRTTIME_IDTFR_ID='+selectedYear,
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        console.log(resp);
        $(".korea").html("");
        var sel = $("#slct option:selected").val();
       // console.log('클릭한'+selectedYear);

        var style = {
            main: {
                layout: {
                    opacity: 0 // 0 ~ 1 사이의 값
                }
            },
            layout: { // SVG 전체에 대한 스타일
                area : {
                    color : 'white'
                },
                paddingTop: 10,     // 상단 padding
                paddingRight: 10,   // 우측 padding
                paddingBottom: 10,  // 하단 padding
                paddingLeft: 10,    // 좌측 padding
                color: '#fff',      // SVG 배경 색상
                line: { color: '', width: 3  } // SVG 테두리 색상과 두께
            },
            korea : {
                position : {
                    x : -10,
                    y : 0
                },
                scale : 1.0,
                line : {
                    color : '#fff',
                    width : 1.5
                },
                area : {
                    color : [
                        '#fffda4', '#fff15a', '#febe41', '#fe9900', '#F33102', '#F33102'
                    ]
                }
            }
        };

        var options = {
            local: {
                step : [ ]

            },
            toolTip : {
                use : {
                    local : true
                },
                className : 'tip',
                position : {
                    x : -10,
                    y : -10
                }
            },
            resize: {
                use: true
            },
            use: {
                reSize: true
            },

            data: {
                data: [

                ],
        localOption: 'locname',
        use : 'listshrs'
            },
                func : function ( data, tipElement ) {
                    var name = '<div class="tip_name">'+ data.locname + '</div>';
                    var data1 = '<div class="tip_text">' + '상장 회원수 : ' + data.listshrs + '</div>';
                    var tip = '<div class="text">'+ name + data1  + '</div>';
                    var arrow = '<div class="arrow" style="width: '+tipElement.width()+'px;"></div>';
                    tipElement.html(tip + arrow);
                }

        };
        var total_1=0;var total_2=0;var total_3=0;var total_4=0;var total_5=0;var total_6=0;var total_7=0;var total_8=0;var total_9=0;



        var rows = resp.Sttsapitbldata[1].row;
        if (rows) {
            //console.log(rows);
            var representativeRow;
            for (i = 0; i < Object.keys(rows).length; i++) {
                representativeRow = rows[i];
                //console.log(representativeRow.ITM_NM);
               /* if(representativeRow.ITM_NM==="서울"){
                    console.log(representativeRow.ITM_NM);
                    representativeRow.ITM_NM="서울특별시";

                }*/
                if(representativeRow.ITM_NM.substring(0,2)=="경기"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_1+=datav;

                }
                if(representativeRow.ITM_NM.substring(0,2)=="강원"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_2+=datav;
                }
                if(representativeRow.ITM_NM.substring(0,2)=="충북"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_3+=datav;
                }
                if(representativeRow.ITM_NM.substring(0,2)=="충남"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_4+=datav;
                }
                if(representativeRow.ITM_NM.substring(0,2)=="전남"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_5+=datav;
                }
                if(representativeRow.ITM_NM.substring(0,2)=="전북"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_6+=datav;
                }if(representativeRow.ITM_NM.substring(0,2)=="경남"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_7+=datav;
                }if(representativeRow.ITM_NM.substring(0,2)=="경북"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_8+=datav;
                }
                if(representativeRow.ITM_NM.substring(0,2)=="제주"){
                    var sub =representativeRow.ITM_NM.substring(0,3);
                    var datav;
                    datav=  Number(representativeRow.DTA_VAL);
                    total_9+=datav;
                }


                itemNm2 = representativeRow.ITM_NM;

                dataV = representativeRow.DTA_VAL;
                options.data.data.push({locname: itemNm2, listshrs: dataV});
            }

            if(crimeId ==50035){
                options.local.step.push(0, 10, 20, 40,50, 60, 90);

            }
            if(crimeId ==50047){
                options.local.step.push(0, 5000, 10000, 12000,17000, 45000, 70000);

            }
            if(crimeId ==50033){
                options.local.step.push(0, 100, 150, 200,350, 1000, 150000);

            }
            if(crimeId ==50039){
                options.local.step.push(0, 25, 50, 100,150, 200, 1000);

            }


            options.data.data.push({locname: '경기', listshrs: total_1});
            options.data.data.push({locname: '강원', listshrs: total_2});
            options.data.data.push({locname: '충북', listshrs: total_3});
            options.data.data.push({locname: '충남', listshrs: total_4});
            options.data.data.push({locname: '전남', listshrs: total_5});
            options.data.data.push({locname: '전북', listshrs: total_6});
            options.data.data.push({locname: '경남', listshrs: total_7});
            options.data.data.push({locname: '경북', listshrs: total_8});
            options.data.data.push({locname: '제주', listshrs: total_9});

            korea = webponent.visual.korea.init($(".korea"), style, options);

        }


    }/*, error: function (xhr, status, error) {
        alert("err")
    }*/
});

}