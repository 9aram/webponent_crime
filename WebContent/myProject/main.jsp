<%--
  Created by IntelliJ IDEA.
  User: CP
  Date: 2018-12-14
  Time: 오후 4:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Main</title>
    <script src="../WEB-APP/webponent/grid2.0/external/jquery-1.11.1.min.js"></script>
    <script src="../WEB-APP/webponent/grid2.0/external/jquery-ui-1.10.3.custom.min.js"></script>
    <style type="text/css">

        html, body, div, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, dd, img, form, fieldset, input, textarea, blockquote {
            margin: 0;
            padding: 0;
            border: 0;
            width : 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .main_wrap {
            /*display: flex;*/
            position: relative;
            width: 100%;
            height: 100%;

        }

        .sub1 {

            float: left;
            width: 50%;
            height: 100%;
            background-color: #0a4e85;
            text-align: center;
            display: table;
            border: 5px solid white;
        }

        .sub2 {

            float: left;
            width: 50%;
            height: 100%;
            background-color: white;
            text-align: center;
            display: table;
            border: 5px solid #0a4e85;

        }
        .main_title1{
            color : white;
            text-align: center;
            line-height: 1.55;
            white-space: nowrap;
            font-size: 70px;
            display: table-cell;
            vertical-align: middle;
            font-weight: 500;
            text-decoration: none;

        }
        .main_title1:hover{
            color: #1e9c97bf;

        }
        .main_title2:hover{
            color: #1e9c97bf;

        }
        .main_title2{
            color : #0a4e85;
            text-align: center;
            line-height: 1.55;
            white-space: nowrap;
            font-size: 70px;
            display: table-cell;
            vertical-align: middle;
            font-weight: 500;
        }
        a:link {
            text-decoration: none;
            color: white;
        }
        a:visited {
            text-decoration: none;
            color: white;
        }

        a:active{
            text-decoration: none;
            color: white;
        }


     @media only screen and (max-width : 640px) {
            .sub1 {

                float: left;
                width: 100%;
                height: 50%;
                background-color: #0a4e85;
                text-align: center;
                display: table;
                border: 5px solid white;
            }

            .sub2 {

                float: left;
                width: 100%;
                height: 50%;
                background-color: white;
                text-align: center;
                display: table;
                border: 5px solid #0a4e85;

            }
        }


    </style>
</head>
<body>
<div class="main_wrap">
    <div class="sub1"><div class="main_title1"><a href="javascript:goPageList();" >발생 현황</a></div></div>
    <div class="sub2"><div class="main_title2"><a href="javascript:goPageMonth();" style="color: #0a4e85" >월별 통계</div></div>
</div>
<script type="text/javascript">
function goPageList() {
    location.href="list.jsp";

    $('.tri').trigger('click');
}
function goPageMonth() {
    location.href="bar_month.jsp";
    $('.tri').trigger('click');
}

/*window.onload=function(){
    console.log('sss');
}
$(".main_title1" ).click(function() {
    $('.tri')[0].click();
});*/

</script>
</body>
</html>
