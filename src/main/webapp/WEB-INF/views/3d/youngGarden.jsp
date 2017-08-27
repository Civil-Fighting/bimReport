<!DOCTYPE html>
<html>
<head>
  <title>WebGl-Publisher: Architecture Models</title>
  <%--<meta name="viewport" content="width=device-width, initial-scale=1">--%>

</head>

<body style="background-color:#57616B; color:#CCCCCC; font-family:Arial,Helvetica,Geneva,Sans-serif;" >
<form name="ControlForm">
  <div id="CmiToolbar"  class="cmiStyle" style="font-size:90%;">
    <input type="radio" id="MouseMove" name="radio" onclick="javascript:myCmiWindow.setMouseModeToMovement()" /><label for="MouseMove">Move</label>
    <input type="radio" id="MouseZoom" name="radio" onclick="javascript:myCmiWindow.setMouseModeToZoom()"/><label id="MouseZoomLabel" for="MouseZoom">Zoom</label>
    <input type="radio" id="MouseRotate" name="radio" onclick="javascript:myCmiWindow.setMouseModeToRotation()" checked="checked"/><label id="MouseRotateLabel" for="MouseRotate">Rotate</label>
    <button name="ZoomAll" type="button" value="Zoom All" alt="Zoom All" onclick="javascript:myCmiWindow.zoomAll()">Zoom All</button>
    <input type="checkbox" id="FirstPersonView" name="checkbox" onclick="javascript:Switch2FirstPersonView(this)" /><label for="FirstPersonView">1st person view</label>
    <select size="1" length=50 id="ViewSelection" onchange="javascript:switchView(this,myCmiWindow)">
      <option>Start view</option>
      <option>Front view</option>
      <option>Back view</option>
      <option>Left view</option>
      <option>Right view</option>
      <option>Top view</option>
      <option>Bottom view</option>
      <option>ISO view</option>
    </select>
    <select size="1" id="ModelSelection" onchange="javascript:switchModel(this,myCmiWindow)">
      <option selected>Mansion (Revit&reg; model)</option>
      <option>Flat (Step model)</option>
      <option>Apartment building (Revit&reg; model)</option>
      <option>Basic Revit&reg; sample</option>
      <option>Advanced Revit&reg; sample</option>
      <option>3D scan from a bridge</option>
    </select> </br>
  </div>
  <canvas id="CmiCanvas" style="touch-action: none;"></canvas>
  <div id="StatusText" style="position:absolute; top:45px; left:10px; color:#CCCCCC; font-family:Arial,Helvetica,Geneva,Sans-serif; font-size:14px;"></div>
  <div id="InfoText" color:#CCCCCC; font-family:Arial,Helvetica,Geneva,Sans-serif; font-size:15px;">
  Loading...
  </div>
</form>
<table border="0" cellpadding="0" cellspacing="0" id="AssemblyTable" style="position:absolute; top:60px; left:10px; font-weight:bold; color:#FFFFFF;">
  <thead style="font-size:14px;">
  <tr>
    <th height="30" align=left>Component&nbsp;</th>
    <th align=left>Show&nbsp;</th>
    <th align=left>Highlight&nbsp;</th>
  </tr>
  </thead>
  <tbody style="font-size:12px;">
  </tbody>
</table>
</body>
</html>
