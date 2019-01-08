function getGrid(itm_id_num, num, month) {

       // $(".wrap").html("");
console.log(month);
    var table1 = $('#grid-table-1');
    var template1 = $('#grid-template-1');
    var grid1 = webponent.grid.init(table1, template1);
    var body = [];

    grid1.destroy();
    $('.CI-GRID-AREA').remove();
    $('#excelDownload').remove();
    $('.btn_download').remove();

    $('.div_sub1').remove();

    $('.wrap').append('<h3 class="div_sub1">'+month+' 발생 범죄 리스트</h3>');

    $('.wrap').append(' <a href="#" id="excelDownload"><button class="btn_download">CSV</button></a>\n');
    $('.wrap').append('<table id="grid-table-1"></table>');

    table1 = $('#grid-table-1');

    grid1 = webponent.grid.init(table1, template1);

/*
    grid1.destroy();
    $('.wrap').append('<table id="grid-table-1"></table>');
    $('.wrap').append('<table id="grid-template-1"></table>');
    $('.wrap').append(' <a href="#" id="excelDownload"><button>엑셀다운로드</button></a>\n');
    table1 = $('#grid-table-1');
    template1 = $('#grid-template-1');
    grid1 = webponent.grid.init(table1, template1);
*/

    $.ajax({
        dataType: 'json',
        url     : 'http://www.crimestats.or.kr/openapi/Sttsapitbldata.do?KEY=373f2cc31cd449c992cc18004780f4e4&STATBL_ID=T184223019918177&DTACYCLE_CD=YY&WRTTIME_IDTFR_ID=2016&Type=json&ITM_ID='+itm_id_num,
        success : function (resp) {


            //console.log(resp);
            var options = {
                data: {
                    data: []
                }
            };
            var rows = resp.Sttsapitbldata[1].row;
            //console.log(rows);
            if (rows) {
                var representativeRow;
                for (i = 11; i < 100; i++) {
                    representativeRow = rows[i];
                    itemNm2 = representativeRow.ITM_NM;
                    dataV = representativeRow.DTA_VAL;
                    stable_id = representativeRow.STATBL_ID;
                    cls_nm = representativeRow.CLS_NM;
                    cls_id = representativeRow.CLS_ID;
                    /* console.log(itemNm2);
                     console.log(dataV);*/


                    options.data.data.push({
                        ITM_NM   : itemNm2,
                        STATBL_ID: stable_id,
                        CLS_NM   : cls_nm,
                        CLS_ID   : cls_id,
                        DTA_VAL  : dataV
                    });

                    body.push({
                        ITM_NM     : itemNm2,
                        'STATBL_ID': stable_id,
                        'CLS_NM'   : cls_nm,
                        'CLS_ID'   : cls_id,
                        'DTA_VAL'  : dataV
                    });
                    // body.push({'ITM_NM': itemNm2, 'STATBL_ID':stable_id, 'CLS_NM':cls_nm, 'CLS_ID':cls_id,'DTA_VAL': dataV});
                    // console.log( options.data.data);
                }
                grid1.appendRow(options.data.data);
            }

            //grid1.appendRow(options);
        }/*, error: function (xhr, status, error) {
            alert("err")
        }*/
    });

    function exportDataToCSVFile(header, keys, body) {

        var csv = ''
        csv = header.join(',');
        csv += '\n';


        $.each(body, function (index, rows) {

            if (rows) {
                var tmp = [];
                $.each(keys, function (index, key) {

                    key && tmp.push(rows[key])
                })
                csv += tmp.join(',');
                csv += '\n';
            }
        })

        var BOM = '%EF%BB%BF';// excel 에서 한글이 안깨지도록 해준다. //
        // Data URI
        var csvData = 'data:application/csv;charset=utf-8,' + BOM + encodeURIComponent(csv);
        console.log(csvData);
        $(this)
            .attr({
                'download': '범죄리스트.csv',
                'href'    : csvData,
                'target'  : '_blank'
            });
    }

    $('#excelDownload').on('click', function (event) {
        var header = [];
        header.push('월');
        header.push('통계표코드');
        header.push('범죄명');
        header.push('범죄코드');
        header.push('범죄발생량');

        var keys = [];
        keys.push('ITM_NM');
        keys.push('STATBL_ID');
        keys.push('CLS_NM');
        keys.push('CLS_ID');
        keys.push('DTA_VAL');
        exportDataToCSVFile.apply(this, [header, keys, body])
    })

    function second() {
        alert("Second");
    }

    function test2() {
        alert("test2 실행됨");
    }

}
$('#grid-table-1').on('click', function (data) {
    console.log(data);
});

