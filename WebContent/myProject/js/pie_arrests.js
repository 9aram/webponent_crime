function callChart(crimeId,selectedYear) {
    //var url="http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T183793021188030&DTACYCLE_CD=YY&WRTTIME_IDTFR_ID=2016&Type=json&CLS_ID="+num;
$.ajax({
    url: 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T183793021188030&DTACYCLE_CD=YY&Type=json&CLS_ID='+crimeId+'&WRTTIME_IDTFR_ID='+selectedYear,
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        $(".pie_arrests").html("");
           // console.log(resp);

        var styles = {
            pie : {
                radius : 60
            },
            layout: { // SVG 전체에 대한 스타일
                color: 'white',
                line: {color: 'white', width: 1},
                position: {

                        x : -30,
                        y : -10

                },
                area : {
                    color : 'white'
                }
            },
            legend: {
                use: true,
                stackedGap: 3,
                type: 'brokenLine',
                text: {
                    family: 'Nanum Gothic',
                    size: 13,
                    color: '#333333',
                    style: 'italic', /* normal | italic */
                    weight: 'bold', /* normal | bold */
                    opacity: 1
                },
                pin : {
                    color : '#8397a6',
                    width : 1,
                    length : 9,
                    opacity : 1
                }
            }
        };
        var options = {
            data: {
                data: [
                ]
                ,
                use: 'DTA_VAL'
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
            for (i = 0; i < Object.keys(rows).length; i++) {
                representativeRow = rows[i];
                itemNm2 = representativeRow.ITM_NM;
                dataV = representativeRow.DTA_VAL;
                if((itemNm2!== "계" ) && (itemNm2!== "민간인(소계)") && (itemNm2!== "경찰(소계)")){

                    options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2});
                }
               // console.log(itemNm2);

                // console.log(itemNm2);
                //console.log(dataV);

            }




        }

        var  pie = webponent.visual.pie.init($(".pie_arrests"), styles, options);
    }/*, error: function (xhr, status, error) {
        alert("err")
    }*/
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
//document.getElementById("today_date").innerHTML = today;
}
function callTitle(title){
    $('.title').text(title+' 발생현황');
}
