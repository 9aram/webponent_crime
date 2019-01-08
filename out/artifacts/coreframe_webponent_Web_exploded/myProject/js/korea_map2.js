
$.ajax({
    url: 'js/map.json',
    type: 'GET',
    dataType: 'json',
    success: function (resp) {
        // console.log(resp);
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
                    x : 30,
                    y : 0
                },
                scale : 1.0,
                line : {
                    color : '#fff',
                    width : 1.5
                },
                area : {
                    color : [
                        '#fceb96', '#ffde59', '#ffc259', '#ff9632', '#fe753d', '#f45346', '#e63b3b'
                    ]
                }
            }
        };

        var options = {
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
                    {locname: '', listshrs: ''}
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
        var rows = resp.Result.City;
        if (rows) {
            var representativeRow;
            for (i = 0; i < 18; i++) {

                representativeRow = rows[i];
                itemNm2 = representativeRow["city-name"];
                dataV = representativeRow["city-count"];
                // console.log(itemNm2);
                // console.log(dataV);
                options.data.data.push({locname: itemNm2, listshrs: dataV});
            }


            korea = webponent.visual.korea.init($(".korea"), style, options);

        }


    }, error: function (xhr, status, error) {
        alert("err")
    }
});

