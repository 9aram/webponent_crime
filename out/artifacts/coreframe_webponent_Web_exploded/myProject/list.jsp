<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
    request.setCharacterEncoding("UTF-8");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE,chrome=IE7">
    <title>Insert title here</title>
    <script src="webponent.licenseKey.js"></script>

    <!-- 그리드 -->
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.css">
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.flat.css">
    <link rel="stylesheet" type="text/css" href="css/mystyle.css?v=<%=System.currentTimeMillis() %>">
    <script src="../WEB-APP/webponent/grid2.0/external/jquery-1.11.1.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>

    <script src="../WEB-APP/webponent/grid2.0/external/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/jquery.mousewheel.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/underscore-min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/webponent.grid.js"></script>

    <!-- 차트 -->
    <script src="../WEB-APP/webponent/chart2.0/lib/comm/raphael.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/comm/webponent.comm.common.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/chart/webponent.chart.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/chart/webponent.chart.style.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/visual/webponent.visual.pie.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/visual/webponent.visual.korea.js"></script>

    <style type="text/css">
        .tri {
            display: none;
        }



        .upper_chart {

        }




    </style>
    <script type="text/javascript">

    </script>


</head>
<body>
<div class="wrap">
    <div class="wrap_menu">
        <div class="title">발생현황</div>
        <nav>
            <ul>
                <%--하나는 평션으로 안만들어놓으면 그냥 실행된다?!--%>
                <li><a class="tri" href="javascript:void(0);"
                       onclick="callChart(50035,2016); callPie(50035,2016); callMap(50035,2016); callTitle('살인'); this.onclick=null">살인</a>
                </li>
                <li class="list_margin"><a href="main.jsp"><img src="css/clipart2431071.png" alt="Italian Trulli"
                                            class="menu_icon"></img></a></li>
                <li name="test_name"><a href="javascript:void(0);" class="fistClick"
                                        onclick="callChart(50035,2016); callPie(50035,2016); callMap(50035,2016); callTitle('살인');"
                                        name="murder" class="murderr">살인</a></li>
                <li><a href="javascript:void(0);"
                       onclick="callChart(50047,2016); callPie(50047,2016); callMap(50047,2016); callTitle('절도');"
                       name="theft" class="theftt">절도</a></li>
                <li><a href="javascript:void(0);"
                       onclick="callChart(50033,2016); callPie(50033,2016); callMap(50033,2016); callTitle('강간');"
                       name="rape" class="rapp">강간</a></li>
                <li><a href="javascript:void(0);"
                       onclick="callChart(50039,2016); callPie(50039,2016); callMap(50039,2016); callTitle('강도');"
                       name="robbery" class="robb">강도</a></li>
            </ul>
        </nav>

        <div>
            <span class="square"> ■</span>
            <span class="subtitle">  범죄 발생 통계</span>

            <div class="center-on-page">
                <div class="select">
                    <select name="slct" id="slct">
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                    </select>
                    <select name="slct2" id="slct2">
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                    </select>
                </div>
                <button onclick="seachYear()" class="search_btn">검색</button>

            </div>
        </div>
        <div class="divide_line"></div>
    </div>

    <div class="upper_chart">
        <div class="chart_map">
            <span class="div_sub1">전국 범죄율</span>
            <div class='korea'></div>
        </div>

        <div class="vertical_line"></div>
        <div class="horizon_line_v"></div>
        <div class="chart_pie">
            <span class="div_sub1">검거자</span>
            <div class="pie_arrests"></div>
        </div>

        <div class="horizon_line"></div>

        <%--  <div class="chart_pie">
              <span class="div_sub1">범죄부터 검거까지의 기간</span>
              <div class="pie_period"></div>
          </div>--%>
        <div class="chart_line2">
            <div class="div_sub1">범죄부터 검거까지의 기간</div>
            <div class="chart01"></div>
        </div>

    </div>
</div>
<%--
<div><a  class="download"> ss</a></div>
--%>

<script src="js/pie_period.js?v=<%=System.currentTimeMillis() %>"></script>
<script src="js/pie_arrests.js?v=<%=System.currentTimeMillis() %>"></script>
<script src="js/korea_map.js?v=<%=System.currentTimeMillis() %>"></script>
<script src="js/line.js?v=<%=System.currentTimeMillis() %>"></script>
<script type="text/javascript">

    window.onload = function () {
        $(".fistClick").trigger("click");
        $(".tri").addClass("active");

    }
    $(document).ready(function() {
        $('#slct').show(); //페이지를 로드할 때 표시할 요소
        $('#slct2').hide(); //페이지를 로드할 때 숨길 요소
        $('.rapp').click(function(){
            $ ('#slct').hide(); //클릭 시 첫 번째 요소 숨김
            $ ('#slct2').show(); //클릭 시 두 번째 요소 표시
            return false;
        });
        $('.murderr').click(function(){
            $('#slct').show(); //페이지를 로드할 때 표시할 요소
            $('#slct2').hide(); //페이지를 로드할 때 숨길 요소
            return false;
        });

        $('.theftt').click(function(){
            $('#slct').show(); //페이지를 로드할 때 표시할 요소
            $('#slct2').hide(); //페이지를 로드할 때 숨길 요소
            return false;
        });

        $('.robb').click(function(){
            $('#slct').show(); //페이지를 로드할 때 표시할 요소
            $('#slct2').hide(); //페이지를 로드할 때 숨길 요소
            return false;
        });

    });

    function seachYear() {
        var selectedYear = $("#slct option:selected").val();
        if($('#slct2').is(":visible")){
            selectedYear = $("#slct2 option:selected").val();
        }

        var crimeName = '';
        crimeName = $(".active > a").attr('name');
        //console.log(crimeName);
        if (crimeName == "murder") {
            callChart(50035, selectedYear);
            callPie(50035, selectedYear);
            callMap(50035, selectedYear);
            callTitle('살인');
        } else if (crimeName == "theft") {
            callChart(50047, selectedYear);
            callPie(50047, selectedYear);
            callMap(50047, selectedYear);
            callTitle('절도');
        } else if (crimeName == "rape") {
            callChart(50033, selectedYear);
            callPie(50033, selectedYear);
            callMap(50033, selectedYear);
            callTitle('강간');
        }
        else if (crimeName == "robbery") {
            callChart(50039, selectedYear);
            callPie(50039, selectedYear);
            callMap(50039, selectedYear);
            callTitle('강도');
        }
        // $(".active" ).trigger("click");

    }

    $(function () {
        var sBtn = $("ul > li");    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
        sBtn.find("a").click(function () {   // sBtn에 속해 있는  a 찾아 클릭 하면.
            sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
            $(this).parent().addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
        })
        console.log('done');
        $('#slct').show(); //페이지를 로드할 때 표시할 요소
        $('#slct2').hide(); //페이지를 로드할 때 숨길 요소
    })


</script>
<script src="js/html2canvas.min.js"></script>
<script>

    // 이미지 다운로드 구현
    html2canvas(document.querySelector(".upper_chart"),{
        //allowTaint: true,
        //taintTest: false,
        useCORS: true,
    }).then(function(canvas) {
        var imgageData = canvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        jQuery(".download").attr("download", "다운로드파일명.png").attr("href", newData);
    });

</script>
</div>
</body>
</html>