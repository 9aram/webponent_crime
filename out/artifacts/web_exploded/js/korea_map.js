var style = {
    korea : {
        position : {
            x : 150,
            y : 0
        },
        scale : 0.8,
        line : {
            color : '#fff',
            width : 2
        },
        area : {
            color : [
                '#fceb96', '#ffde59', '#ffc259', '#ff9632', '#fe753d', '#f45346', '#e63b3b'
            ]
        },
        hover : {
            use : true,
            area : {
                color : '#9d9c9c'
            }
        }
    }
};

$.ajax({
    url: 'http://116.67.77.182/openapi/SOCitysStats/',
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        console.log(resp);
        var options = {
            data: {
                data: [
                    {DATA_VALUE: '', ITEM_NAME2: ''}
                ]
                ,
                use: 'DATA_VALUE'
            },
            legend: {
                use: 'ITEM_NAME2'
            }
        };
        var rows = resp.PoliceDataList.row;
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


            pie = webponent.visual.pie.init($(".pie"), styles, options);

        }


    }, error: function (xhr, status, error) {
        alert("err")
    }
});



var options = {
    toolTip : {
        use : {
            local : true
        },
        className : 'tip',
        position : {
            x : 0,
            y : -10
        },
        func : function ( data, tipElement ) {
            var name = '<div class="tip_name">'+ data.locname + '</div>';
            var data1 = '<div class="tip_text">' + '상장 회원수 : ' + data.listshrs + '</div>';
            var data2 = '<div class="tip_text">' + '날짜 : ' + dayDataFormatDot(data.date) + '</div>';
            var tip = '<div class="text">'+ name + data1 + data2 + '</div>';
            var arrow = '<div class="arrow" style="width: '+tipElement.width()+'px;"></div>';
            tipElement.html(tip + arrow);
        }
    },
    data : {
        data : [
            {date: '20120101', locname: '강원', listshrs: 20},
            {date: '20120101', locname: '경기', listshrs: 50},
            {date: '20120101', locname: '경남', listshrs: 80},
            {date: '20120101', locname: '경북', listshrs: 110},
            {date: '20120101', locname: '광주', listshrs: 140},
            {date: '20120101', locname: '대구', listshrs: 170},
            {date: '20120101', locname: '대전', listshrs: 190},
            {date: '20120101', locname: '부산', listshrs: 220},
            {date: '20120101', locname: '서울', listshrs: 20},
            {date: '20120101', locname: '울산', listshrs: 50},
            {date: '20120101', locname: '인천', listshrs: 80},
            {date: '20120101', locname: '전남', listshrs: 100},
            {date: '20120101', locname: '전북', listshrs: 140},
            {date: '20120101', locname: '제주', listshrs: 170},
            {date: '20120101', locname: '충남', listshrs: 190},
            {date: '20120101', locname: '충북', listshrs: 220}
        ],
        localOption : 'locname',
        use : 'listshrs'
    }
};

korea = webponent.visual.korea.init($(".korea"), style, options);