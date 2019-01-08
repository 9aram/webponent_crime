var styles = {
    legend: {
        use: true,
        stackedGap: 5,
        type: 'brokenLine',
        text: {
            family: 'Nanum Gothic',
            size: 12,
            color: '#333333',
            style: 'normal', /* normal | italic */
            weight: 'bold', /* normal | bold */
            opacity: 1
        }
    }
};

$.ajax({
    url: 'http://openapi.crimestats.or.kr/WiseOpen/JVN593US8JC8NBRTUA27/ZTEADTY42D1XJ9XPOZDG/json/1/15/2016/22/01010000006/?/',
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