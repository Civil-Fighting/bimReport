<%--
  Created by IntelliJ IDEA.
  User: byao
  Date: 23/07/2017
  Time: 12:35 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Index</title>
    <script type="text/javascript" src="${apppath}/cmall/js/easyUI/jquery.min.js"></script>
    <style type="text/css">
        #container{width:100%;height:auto;margin:0px auto;}
        #banner{width:90%;height:auto;}
        #body{width:100%;height:auto;}
        #left{width:50%;height:500px;float:left;}
        #lcwsaz{width:100%;height:200px;float:top;}
        #smc{width:100%;height:200px;float:top;}
        #stc{width:100%;height:200px;float:top;}
        #middle{width:60%;height:100%;float:left;}
        #right{width:50%;height:100%;float:left;}
    </style>

    <%--<style>--%>
        <%--#left {--%>
            <%--width: 100%;--%>
            <%--height: 500px;--%>
        <%--}--%>
    <%--</style>--%>

    <!-- Resources -->
    <link rel="stylesheet" type="text/css" href="${apppath}/cmall/js/easyUI/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="${apppath}/cmall/js/easyUI/themes/icon.css">
    <script type="text/javascript" src="${apppath}/cmall/js/easyUI/jquery.easyui.min.js"></script>

    <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script src="https://www.amcharts.com/lib/3/serial.js"></script>
    <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
    <script src="https://www.amcharts.com/lib/3/serial.js"></script>
    <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
    <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
    <script src="https://www.amcharts.com/lib/3/pie.js"></script>

    <script type="text/javascript">
        $(function () {
//            $("#btn").click(function () {
//                alert();
//                $("#t1").val("woshishei");
                $("#banner").load("/cmall/3d/youngGarden.do", null,  function(response, status,  XMLHttpRequest){

                    cmiWindowStart();
                    $(window).resize(function(){
                        ResizeWindow();
                    });
                });
//            });
        });

    </script>


    <style type="text/css">
        .cmiStyle select {font-size:100%; margin: 3px; margin-right: 4px; margin-left: 4px; padding: 4px; border:0px; color:#EEEEEE; background-color:#383838;}
        .cmiStyle button {font-size:100%; margin: 3px; margin-right: 4px; margin-left: 4px; padding: 5px; padding-right:8px; padding-left:8px; border:0px; color:#EEEEEE; background-color:#383838;}
        .cmiStyle label  {font-size:100%; margin: 4px; margin-right: -2px; margin-left: -2px; padding: 5px; padding-right:8px; padding-left:8px; border:0px; color:#EEEEEE; background-color:#383838;}
        .cmiStyle input[type=radio] {display: none;}
        .cmiStyle input[type=radio]:checked + label{background-color:#1E90FF;}
        .cmiStyle input[type=checkbox] {display: none;}
        .cmiStyle input[type=checkbox]:checked + label{font-size:100%; margin: 3px; margin-right: 4px; margin-left: 4px; padding: 5px; padding-right:8px; padding-left:8px; border:0px; background-color:#1E90FF;}
        .cmiStyle input[type=checkbox] + label{font-size:100%; margin: 3px; margin-right: 4px; margin-left: 4px; padding: 5px; padding-right:8px; padding-left:8px; border:0px; background-color:#383838;}
    </style>
    <script type="text/javascript">
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-68588604-1', 'auto');
        ga('send', 'pageview');

    </script>

    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiAssemblyBrowser.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiLayerBrowser.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiWindowDefinition.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiObjectDefinitions.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiShaderDefinitions.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiHelperFunctions.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiShaderSources.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/CmiModelDefinition.js"></script>
    <script type="text/javascript" src="${apppath}/cmall/js/3d/CmiScripts/ThirdPartyHelpers.js"></script>
    <script type="text/javascript">

        var myCmiWindow;
        var infoText;
        var statusText;
        var cmiCanvas;
        var myAssemblyBrowser;
        var myLayerBrowser;

        function cmiWindowStart()
        {
            infoText = document.getElementById("InfoText");
            statusText = document.getElementById("StatusText");
            cmiCanvas = document.getElementById("CmiCanvas");
            ResizeWindow();

            myCmiWindow = new CmiWindow("CmiCanvas");
            if(myCmiWindow.isUsable)
            {
                if(myCmiWindow.checkWebGlUsage() < 0)
                {
                    SetInfoText(myCmiWindow.getLastError().message);
                    return;
                }
                myCmiWindow.setBgColorRGB(87,97,107);
                myCmiWindow.setBgText("WebGL-Publisher");
                myCmiWindow.colGradient = false;
                if(myCmiWindow.initWebGlWindow() < 0)
                {
                    SetInfoText(myCmiWindow.getLastError().message);
                    return;
                }
                SetInfoText("Direct export from Autodesk's Revit &reg;");

                myCmiWindow.setBgSkyBox("SunSet");
                myCmiWindow.useSkyBoxBackground = true;
                myCmiWindow.setNotificationHandler(OnCmiNotification);
                myCmiWindow.loadModelFromUrl("${apppath}/cmall/js/3d/youngGarde2.wpm");
                myCmiWindow.switchToPerspective(true);
                myCmiWindow.setMouseModeToRotation();
                myCmiWindow.handleArrowKeys = false;
                myCmiWindow.useFrontAsTop=true;
                myCmiWindow.useSizeCulling = true;
                myCmiWindow.useViewportCulling = true;
                myCmiWindow.setHeadUpAngle4FirstPersonView(-5.0);

                myAssemblyBrowser = new CmiAssemblyBrowser("myAssemblyBrowser","AssemblyTable");
                myLayerBrowser = new CmiLayerBrowser("myLayerBrowser","AssemblyTable");

            }//if(myCmiWindow.isUsable)
        }//function cmiWindowStart()

        function SetInfoText(newText)
        {
//            infoText.innerHTML = newText;
        }

        function SetStatusText(newText)
        {
            statusText.innerHTML = newText;
        }

        function OnCmiNotification (event)
        {
            var txtParts = event.data.split("|");
            for (var i = 0 ; i < txtParts.length ; i++) {
                console.log(txtParts[i]);
            }

            if(txtParts[0]=="CMI_ERROR")
            {
                SetStatusText(txtParts[2]);
            }
            else if ((txtParts[0]=="CMI_INFO")&&(txtParts[1]=="ModelLoading"))
            {
                SetStatusText(txtParts[2]);
            }
            else if ((txtParts[0]=="CMI_INFO")&&(txtParts[1]=="ModelOpened"))
            {
                var selectObject = document.getElementById("ModelSelection");

                //Rebuild assembly tree
                switch(selectObject.selectedIndex)
                {
                    case 1:
                    case 5:
                        myAssemblyBrowser.buildAssemblyTree(myCmiWindow.getCmiModel(),true,0,"Model structure");
                        myAssemblyBrowser.rebuildTreeViewTable();
                        SetStatusText("");
                        break;
                    case 3:
                        myLayerBrowser.buildLayerList(myCmiWindow.getCmiModel(),true,1,"Layer structure");
                        myLayerBrowser.rebuildLayerViewTable();
                        SetStatusText("");
                        break;
                    case 4:
                        myLayerBrowser.buildLayerList(myCmiWindow.getCmiModel(),false,1,"Level structure");
                        myLayerBrowser.rebuildLayerViewTable();
                        SetStatusText("");
                        break;
                    default:
                        myAssemblyBrowser.buildAssemblyTree(myCmiWindow.getCmiModel(),true,1,"Model structure");
                        myAssemblyBrowser.rebuildTreeViewTable();
                        SetStatusText("");
                        break;
                }
            }
            else if ((txtParts[0]=="CMI_INFO")&&(txtParts[1]=="ModelDisplayed"))
            {
                if ((!myCmiWindow) || (!myCmiWindow.isUsable))
                    return;

                var selectObject = document.getElementById("ModelSelection");

                switch(selectObject.selectedIndex)
                {
                    case 0:
                    case 2:
                        myCmiWindow.rotateSceneAbsolut(0.0, -100.0, 0.0,true);
                        break;
                    case 3:
                    case 4:
                        myCmiWindow.rotateSceneAbsolut(-130.0, 120.0, -130.0,true);
                        break;
                    case 5:
                        myCmiWindow.rotateSceneAbsolut(-130.0, 120.0, -130.0,true);
                        break;
                }
                document.getElementById("ViewSelection").selectedIndex = 0;
                myCmiWindow.zoomAll();
            }
        }

        function ResizeWindow()
        {
            var xSize = window.innerWidth;
            var ySize = window.innerHeight;
            var tbHeight = document.getElementById("CmiToolbar").offsetHeight;
            var asmTable = document.getElementById("AssemblyTable");

            cmiCanvas.width=xSize-15;
            cmiCanvas.height=ySize-tbHeight-45;
// customer
            cmiCanvas.width=xSize-15 - 12;
//            cmiCanvas.height=ySize-tbHeight-45 - 300;
            if((myCmiWindow)&&(myCmiWindow.isUsable))
            {
                var canvas = myCmiWindow.getCanvas();
                myCmiWindow.resizeContext(canvas.width,canvas.height);
            }
            statusText.style.top=(parseInt(tbHeight)+15)+"px";
            asmTable.style.top=(parseInt(tbHeight)+30)+"px";
        }//function ResizeWindow()

        function switchView(viewSelection, cmiWindow)
        {
            if((!cmiWindow)||(!cmiWindow.isUsable))
                return;

            switch(viewSelection.selectedIndex)
            {
                case 0:
                {
                    var selectObject = document.getElementById("ModelSelection");
                    if((selectObject.selectedIndex == 0)||(selectObject.selectedIndex == 2))
                    {
                        myCmiWindow.rotateSceneAbsolut(0.0, -100.0, 0.0,true);
                    }
                    else if((selectObject.selectedIndex == 3)||(selectObject.selectedIndex == 4))
                    {
                        myCmiWindow.rotateSceneAbsolut(-130.0, 120.0, -130.0,true);
                    }
                    cmiWindow.zoomAll();
                }
                    break;
                case 1:
                    cmiWindow.showOglStdView("Front");
                    break;
                case 2:
                    cmiWindow.showOglStdView("Back");
                    break;
                case 3:
                    cmiWindow.showOglStdView("Left");
                    break;
                case 4:
                    cmiWindow.showOglStdView("Right");
                    break;
                case 5:
                    cmiWindow.showOglStdView("Top");
                    break;
                case 6:
                    cmiWindow.showOglStdView("Bottom");
                    break;
                case 7:
                    cmiWindow.showOglStdView("ISO");
                    break;
            }
        }//function switchView(viewSelection, cmiWindow)

        function switchModel(selectObject, cmiWindow)
        {
            if((!cmiWindow)||(!cmiWindow.isUsable))
                return;

            switch(selectObject.selectedIndex)
            {
                case 0://Mansion
                    cmiWindow.loadModelFromUrl("CmiModels/Mansion.wpm");
                    myCmiWindow.switchToPerspective(false);
                    SetInfoText("Direct export from Autodesk's Revit &reg;");
                    break;
                case 1://Apartment
                    cmiWindow.loadModelFromUrl("CmiModels/Apartment.wpm");
                    myCmiWindow.switchToPerspective(false);
                    SetInfoText("Face based texturing of a step model");
                    break;
                case 2://ApartmentBuilding
                    cmiWindow.loadModelFromUrl("CmiModels/ApartmentBuilding.wpm");
                    myCmiWindow.switchToPerspective(false);
                    SetInfoText("Direct export from Autodesk's Revit &reg;");
                    break;
                case 3://Basic sample
                    cmiWindow.loadModelFromUrl("CmiModels/rac_basic_sample_project.wpm");
                    myCmiWindow.switchToPerspective(false);
                    SetInfoText("Direct export from Autodesk's Revit &reg;");
                    break;
                case 4://Advanced sample
                    cmiWindow.loadModelFromUrl("CmiModels/rac_advanced_sample_project.wpm");
                    myCmiWindow.switchToPerspective(false);
                    SetInfoText("Direct export from Autodesk's Revit &reg; (6300 components, 460000 triangles, 12 MB model size)");
                    break;
                case 5://3D scan from a bridge
                    cmiWindow.loadModelFromUrl("CmiModels/Landbrugg.wpm");
                    myCmiWindow.switchToOrtho(false);
                    SetInfoText("3D environment scan from <a href='http://www.hmq-mobilemapping.ch'  target='_blank'>HMQ AG</a>");
                    break;
            }//switch(selectObject.selectedIndex)

            cmiWindow.drawScene();
        }//function switchModel(selectObject, cmiWindow)

        function Switch2FirstPersonView(theCheckbox)
        {
            var zoomLabel = document.getElementById("MouseZoomLabel");
            var rotateLabel = document.getElementById("MouseRotateLabel");
            var perspectiveButton = document.getElementById("Perspective");
            var zoomButton= document.getElementById("MouseZoom");
            var rotateButton = document.getElementById("MouseRotate");
            var moveButton = document.getElementById("MouseMove");
            var selectButton = document.getElementById("MouseSelect");

            if(myCmiWindow.isUsable)
            {
                if(theCheckbox.checked)
                {
                    if(zoomLabel)
                        zoomLabel.innerHTML = "Go";
                    if(rotateLabel)
                        rotateLabel.innerHTML = "Turn";

                    myCmiWindow.switchTo1stPersonView(true);

                    if(perspectiveButton)
                        perspectiveButton.checked = true;

                    myCmiWindow.setMouseModeToZoom();
                    if(zoomButton)
                        zoomButton.checked = true;
                    if(rotateButton)
                        rotateButton.checked = false;
                    if(moveButton)
                        moveButton.checked = false;
                    if(selectButton)
                        selectButton.checked = false;

                }
                else
                {
                    myCmiWindow.switchToModelView(true);

                    if(zoomLabel)
                        zoomLabel.innerHTML = "缩放"; //zoom
                    if(rotateLabel)
                        rotateLabel.innerHTML = "旋转"; //rotate
                    if((myCmiWindow.isOrthoView)&&(perspectiveButton))
                        perspectiveButton.checked = false;

                    myCmiWindow.setMouseModeToRotation();
                    if(zoomButton)
                        zoomButton.checked = false;
                    if(rotateButton)
                        rotateButton.checked = true;
                    if(moveButton)
                        moveButton.checked = false;
                    if(selectButton)
                        selectButton.checked = false;
                }
            }//if(myCmiWindow.isUsable)
        }//Switch2FirstPersonView

    </script>
    <script>
        //Line Chart with Scroll and Zoom
        var chartData = generateChartData();
        var chart = AmCharts.makeChart("lcwsaz", {
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "marginTop": 7,
            "dataProvider": chartData,
            "valueAxes": [{
                "axisAlpha": 0.2,
                "dashLength": 1,
                "position": "left"
            }],
            "mouseWheelZoomEnabled": true,
            "graphs": [{
                "id": "g1",
                "balloonText": "[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": "red line",
                "valueField": "visits",
                "useLineColorForBulletBorder": true,
                "balloon":{
                    "drop":true
                }
            }],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": "g1",
                "scrollbarHeight": 40
            },
            "chartCursor": {
                "limitToGraph":"g1"
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "axisColor": "#DADADA",
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        });

        chart.addListener("rendered", zoomChart);
        zoomChart();

        // this method is called when chart is first inited as we listen for "rendered" event
        function zoomChart() {
            // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
            chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
        }


        // generate some random data, quite different range
        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 5);

            for (var i = 0; i < 1000; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var visits = Math.round(Math.random() * (40 + i / 5)) + 20 + i;

                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
    </script>


    <script>
        function createSMC(data) {
            var chart = AmCharts.makeChart("smc", {
                "type": "serial",
                "theme": "light",
                "marginTop":0,
                "marginRight": 80,
                "dataProvider": data,
                "valueAxes": [{
                    "axisAlpha": 0,
                    "position": "left"
                }],
                "graphs": [{
                    "id":"g1",
                    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    "bullet": "round",
                    "bulletSize": 8,
                    "lineColor": "#d1655d",
                    "lineThickness": 2,
                    "negativeLineColor": "#637bb6",
                    "type": "smoothedLine",
                    "valueField": "value"
                }],
                "chartScrollbar": {
                    "graph":"g1",
                    "gridAlpha":0,
                    "color":"#888888",
                    "scrollbarHeight":55,
                    "backgroundAlpha":0,
                    "selectedBackgroundAlpha":0.1,
                    "selectedBackgroundColor":"#888888",
                    "graphFillAlpha":0,
                    "autoGridCount":true,
                    "selectedGraphFillAlpha":0,
                    "graphLineAlpha":0.2,
                    "graphLineColor":"#c2c2c2",
                    "selectedGraphLineColor":"#888888",
                    "selectedGraphLineAlpha":1

                },
                "chartCursor": {
                    "categoryBalloonDateFormat": "YYYY",
                    "cursorAlpha": 0,
                    "valueLineEnabled":true,
                    "valueLineBalloonEnabled":true,
                    "valueLineAlpha":0.5,
                    "fullWidth":true
                },
                "dataDateFormat": "YYYY",
                "categoryField": "year",
                "categoryAxis": {
                    "minPeriod": "YYYY",
                    "parseDates": true,
                    "minorGridAlpha": 0.1,
                    "minorGridEnabled": true
                },
                "export": {
                    "enabled": true
                }
            });

            chart.addListener("rendered", zoomChart);
            if(chart.zoomChart){
                chart.zoomChart();
            }
        }

        fetch('http://localhost:8080/3d/mock/smc').then((response)=>response.json()).then((list)=> {

            // list is a []
            createSMC(list);
        });
        function zoomChart(){
            chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
        }
    </script>
    <script>
        var chart = AmCharts.makeChart("stc", {
            "type": "serial",
            "titles":[{"text":"Step Line Chart"}],
            "theme": "light",
            "autoMarginOffset":25,
            "dataProvider": [{
                "year": "1950",
                "value": -0.307
            }, {
                "year": "1951",
                "value": -0.168
            }, {
                "year": "1952",
                "value": -0.073
            }, {
                "year": "1953",
                "value": -0.027
            }, {
                "year": "1954",
                "value": -0.251
            }, {
                "year": "1955",
                "value": -0.281
            }, {
                "year": "1956",
                "value": -0.348
            }, {
                "year": "1957",
                "value": -0.074
            }, {
                "year": "1958",
                "value": -0.011
            }, {
                "year": "1959",
                "value": -0.074
            }, {
                "year": "1960",
                "value": -0.124
            }, {
                "year": "1961",
                "value": -0.024
            }, {
                "year": "1962",
                "value": -0.022
            }, {
                "year": "1963",
                "value": 0
            }, {
                "year": "1964",
                "value": -0.296
            }, {
                "year": "1965",
                "value": -0.217
            }, {
                "year": "1966",
                "value": -0.147
            }, {
                "year": "1967",
                "value": -0.15
            }, {
                "year": "1968",
                "value": -0.16
            }, {
                "year": "1969",
                "value": -0.011
            }, {
                "year": "1970",
                "value": -0.068
            }, {
                "year": "1971",
                "value": -0.19
            }, {
                "year": "1972",
                "value": -0.056
            }, {
                "year": "1973",
                "value": 0.077
            }, {
                "year": "1974",
                "value": -0.213
            }, {
                "year": "1975",
                "value": -0.17
            }, {
                "year": "1976",
                "value": -0.254
            }, {
                "year": "1977",
                "value": 0.019
            }, {
                "year": "1978",
                "value": -0.063
            }, {
                "year": "1979",
                "value": 0.05
            }, {
                "year": "1980",
                "value": 0.077
            }, {
                "year": "1981",
                "value": 0.12
            }, {
                "year": "1982",
                "value": 0.011
            }, {
                "year": "1983",
                "value": 0.177
            }, {
                "year": "1984",
                "value": -0.021
            }, {
                "year": "1985",
                "value": -0.037
            }, {
                "year": "1986",
                "value": 0.03
            }, {
                "year": "1987",
                "value": 0.179
            }, {
                "year": "1988",
                "value": 0.18
            }, {
                "year": "1989",
                "value": 0.104
            }, {
                "year": "1990",
                "value": 0.255
            }, {
                "year": "1991",
                "value": 0.21
            }, {
                "year": "1992",
                "value": 0.065
            }, {
                "year": "1993",
                "value": 0.11
            }, {
                "year": "1994",
                "value": 0.172
            }, {
                "year": "1995",
                "value": 0.269
            }, {
                "year": "1996",
                "value": 0.141
            }, {
                "year": "1997",
                "value": 0.353
            }, {
                "year": "1998",
                "value": 0.548
            }, {
                "year": "1999",
                "value": 0.298
            }, {
                "year": "2000",
                "value": 0.267
            }, {
                "year": "2001",
                "value": 0.411
            }, {
                "year": "2002",
                "value": 0.462
            }, {
                "year": "2003",
                "value": 0.47
            }, {
                "year": "2004",
                "value": 0.445
            }, {
                "year": "2005",
                "value": 0.47
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "right"
            }],
            "graphs": [{
                "id":"g1",
                "balloonText": "[[category]]<br><b>[[value]] C</b>",
                "type": "step",
                "lineThickness": 2,
                "bullet":"square",
                "bulletAlpha":0,
                "bulletSize":4,
                "bulletBorderAlpha":0,
                "valueField": "value"
            }],
            "chartScrollbar": {
                "graph":"g1",
                "gridAlpha":0,
                "color":"#888888",
                "scrollbarHeight":55,
                "backgroundAlpha":0,
                "selectedBackgroundAlpha":0.1,
                "selectedBackgroundColor":"#888888",
                "graphFillAlpha":0,
                "autoGridCount":true,
                "selectedGraphFillAlpha":0,
                "graphLineAlpha":1,
                "graphLineColor":"#c2c2c2",
                "selectedGraphLineColor":"#888888",
                "selectedGraphLineAlpha":1
            },
            "chartCursor": {
                "fullWidth":true,
                "categoryBalloonDateFormat": "YYYY",
                "cursorAlpha": 0.05,
                "graphBulletAlpha": 1
            },
            "dataDateFormat": "YYYY",
            "categoryField": "year",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "gridAlpha": 0
            },
            "export": {
                "enabled": true
            }
        });

        chart.addListener("dataUpdated", zoomChart);

        function zoomChart(){
            chart.zoomToDates(new Date(1965, 0), new Date(1975, 0));
        }
    </script>

</head>
<body>

<div id="container">
    <div id="banner">

    </div>
    <div id="body">
        <div id="left">
            <div id = "lcwsaz"></div>
            <div id = "smc"></div>
            <div id = "stc"></div>
        </div>
        <div id="right">
            <%--<textarea id='t1' rows="10" cols="10"></textarea>--%>
                <table class="easyui-datagrid" title="Column Group" style="width:100%;height:600px"
                       data-options="rownumbers:true,singleSelect:true,url:'http://localhost:8080/cmall/3d/mock.do',method:'get'">
                    <thead>
                    <tr>
                        <th colspan="2">风压</th>
                        <th colspan="2">风速</th>
                        <th colspan="2">应力</th>
                        <th colspan="2">应变</th>
                    </tr>
                    <tr>
                        <th data-options="field:'wind10',width:76,align:'center'">X</th>
                        <th data-options="field:'wind11',width:76,align:'center'">Y</th>
                        <th data-options="field:'wind20',width:76,align:'center'">X</th>
                        <th data-options="field:'wind21',width:76,align:'center'">Y</th>
                        <th data-options="field:'wind30',width:76,align:'center'">X</th>
                        <th data-options="field:'wind31',width:76,align:'center'">Y</th>
                        <th data-options="field:'wind40',width:76,align:'center'">X</th>
                        <th data-options="field:'wind41',width:76,align:'center'">Y</th>
                    </tr>
                    </thead>
                </table>
        </div>
    </div>

</div>
<%--<frameset rows = "50%,50%" cols="50%,50%">--%>
    <%--${apppath}/cmall/chart/topleft.do--%>
    <%--<frame src="http://localhost:8080/cmall/chart/topleft.do">--%>
    <%--<frame src="http://localhost:8080/cmall/chart/topleft.do" name="showframe">--%>
    <%--<frame src="http://localhost:8080/cmall/chart/topleft.do">--%>
    <%--<frame src="http://localhost:8080/cmall/chart/topleft.do" name="showframe">--%>
<%--</frameset>--%>

</body>
</html>
