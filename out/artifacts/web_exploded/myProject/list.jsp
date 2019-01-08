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
    <title>Insert title here</title>
    <script src="webponent.licenseKey.js"></script>

    <!-- 그리드 -->
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.css">
    <link rel="stylesheet" type="text/css" href="../WEB-APP/webponent/grid2.0/css/webponent.grid.flat.css">
    <script src="../WEB-APP/webponent/grid2.0/external/jquery-1.11.1.min.js"></script>
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


    <script type="text/javascript">
    </script>

    <!-- <layout -->

    <style type="text/css">

        .korea {
            width: 600px;
            height: 400px;
        }

        .pie {
            width: 600px;
            height: 300px;
        }
        .chart01 {width: 100%; height: 400px; border: 1px solid #eee;}
        .chart01 .tip .text {background: #465866; color: #fff; padding: 5px 10px; border: 1px solid #fff; border-radius: 2px;}
        .chart01 .tip .arrow {height:6px;background: url(../webponent/chart2.0/sample/chart/img/tooltip_arrow.png) no-repeat center top; margin-top: -1px; font-size: 6px;}
    </style>
</head>
<body>


<h2>검거자</h2>
<div class='pie'></div>

<h1>COLUMNSERIES</h1>
<h2>DEMO 01</h2>
<div class="chart01"></div>


<script src="js/pie_arrests.js"></script>

<script src="js/bar_month.js"></script>

</body>
</html>