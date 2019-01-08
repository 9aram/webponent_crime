

<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
    request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE,chrome=IE7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Insert title here</title>
    <script src="webponent.licenseKey.js"></script>

    <!-- 그리드 -->
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.css">
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.flat.css">
    <link rel="stylesheet" type="text/css" href="css/mystyle.css?v=<%=System.currentTimeMillis() %>">

    <script src="../WEB-APP/webponent/grid2.0/external/jquery-1.11.1.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/jquery.mousewheel.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/underscore-min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/webponent.grid2.js"></script>
    <!-- 그리드 리포트 -->
    <script src="../WEB-APP/webponent/grid2.0/webponent.report.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/json2.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/lz-string.js"></script>


    <!-- 차트 -->
    <script src="../WEB-APP/webponent/chart2.0/lib/comm/raphael.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/comm/webponent.comm.common.js"></script>
    <script src="../WEB-APP/webponent/chart2.0/lib/chart/webponent.chart.js"></script>

    <style type="text/css">
        .tri{
            display: none;
        }
    </style>
    <script type="text/javascript">

    </script>

</head>
<body>
<div class="wrap">
    <div class="wrap_menu">
        <nav>
            <ul>
                <li><a class="tri" href="javascript:void(0);" onclick="callMonth(50035,2016);callSubtitle('살인'); this.onclick=null">살인</a></li>
                <li class="list_margin"><a href="main.jsp"><img src="css/clipart2431071.png" alt="Italian Trulli" class="menu_icon"></img></a></li>
                <li><a href="javascript:void(0);" class="fistClick" onclick="callMonth(50035,2016); callSubtitle('살인');" name="murder">살인</a></li>
                <li><a href="javascript:void(0);" onclick="callMonth(50047,2016); callSubtitle('절도');" name="theft">절도</a></li>
                <li><a href="javascript:void(0);" onclick="callMonth(50033,2016); callSubtitle('강간');" name="rape">강간</a></li>
                <li><a href="javascript:void(0);" onclick="callMonth(50039,2016); callSubtitle('강도');" name="robbery">강도</a></li>
            </ul>
        </nav>
        <div>
            <span class="square"> ■</span>
            <span class="subtitle"> </span>


            <div class="center-on-page">
                <div class="select">
                    <select name="slct" id="slct">
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                    </select>

                </div>
                <button onclick="seachYear()" class="search_btn">검색</button>

            </div>
        </div>
        <div class="divide_line"></div>
    </div>
    <div class="chart_bar">

        <div class="chart01"></div>
    </div>


    <div class="horizon_line2"></div>

    <div class="wrapper">


        <div class="wrap_grid">
            <h3></h3>

            <table id="grid-table-1">

            </table>

            <script id="grid-template-1" type="text/template">
                <table width="100%" height="350px">
                    <thead>
                    <tr>
                        <th name="ITM_NM" align="center">월</th>
                        <th name="STATBL_ID">통계표코드</th>
                        <th name="CLS_NM" align="right">범죄명</th>
                        <th name="CLS_ID" align="right">분류ID</th>
                        <th name="DTA_VAL" align="right">발생량</th>
                        <%-- <th name="Updn" align="right">등락율(%)</th>
                         <th name="TopQty" align="right">거래량</th>--%>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td name="ITM_NM" bind="ITM_NM"></td>
                        <td name="STATBL_ID" bind="STATBL_ID"></td>
                        <td name="CLS_NM" bind="CLS_NM"></td>
                        <td name="CLS_ID" bind="CLS_ID"></td>
                        <td name="DTA_VAL" bind="DTA_VAL"></td>
                        <%--   <td name="PrdayCmp" bind="PrdayCmp"></td>
                           <td name="Updn" bind="Updn"></td>
                           <td name="TopQty" bind="TopQty"></td>--%>
                    </tr>
                    </tbody>
                </table>

            </script>

        </div>

        <form id="export-form" style="display: none;"></form>
    </div>

    <script src="js/bar_month.js?v=<%=System.currentTimeMillis() %>"></script>

    <script src="js/grid.js?v=<%=System.currentTimeMillis() %>"></script>


    <script type="text/javascript">

        window.onload=function(){
            $(".fistClick" ).trigger("click");
            $(".tri").addClass("active");
        }
        $("#grid-table-1").on('click', function (data) {
            console.log(data);
        });

        function seachYear() {
            var selectedYear = $("#slct option:selected").val();
            var crimeName='';
            crimeName= $(".active > a").attr('name');
            //console.log(crimeName);
            if(crimeName=="murder"){
                callMonth(50035,selectedYear);
                callSubtitle('살인');
            } else if(crimeName=="theft"){
                callMonth(50047,selectedYear);
                callSubtitle('절도');
            }else if(crimeName=="rape"){
                callMonth(50033,selectedYear);
                callSubtitle('강간');
            }
            else if(crimeName=="robbery"){
                callMonth(50039,selectedYear);
                callSubtitle('강도');
            }
            // $(".active" ).trigger("click");

        }


        $(function(){
            var sBtn = $("ul > li");    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
            sBtn.find("a").click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
                sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
                $(this).parent().addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
            })
            console.log('done');
        })
    </script>
</div>
</body>
</html>
