
$.ajax({
    url: 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?STATBL_ID=T183793021188030&DTACYCLE_CD=YY&WRTTIME_IDTFR_ID=2016&CLS_ID=50033&Type=json',
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
       // console.log(resp);

        var styles = {
            layout: { // SVG 전체에 대한 스타일
                area : {
                    color : 'white'
                }
            },
            legend: {
                use: true,
                stackedGap: 5,
                type: 'brokenLine',
                text: {
                    family: 'Nanum Gothic',
                    size: 15,
                    color: '#333333',
                    style: 'italic', /* normal | italic */
                    weight: 'bold', /* normal | bold */
                    opacity: 1
                }
            }
        };
        var options = {
            data: {
                data: [
                    {DTA_VAL: '', ITM_NM: ''}
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
            for (i = 1; i < 5; i++) {
                representativeRow = rows[i];
                itemNm2 = representativeRow.ITM_NM;
                dataV = representativeRow.DTA_VAL;
                // console.log(itemNm2);
                // console.log(dataV);
                options.data.data.push({DTA_VAL: dataV, ITM_NM: itemNm2});
            }




        }

        pie = webponent.visual.pie.init($(".pie"), styles, options);
    }, error: function (xhr, status, error) {
        alert("err")
    }
});