/*
 * Copyright CADMAI Software GmbH.
 * All rights reserved.
 *
 * Redistribution (includes making available on a web location) is permitted 
 * provided that the following conditions are met:
 *
 * The redistributor must hold one of these licenses:
 * a valid CADMAI WebGl-Publisher license (SingleWebGlPubLic)
 * a valid CADMAI WebGl-Publisher Revit export license (SingleWebGlRevitExportLic)
 * a valid CADMAI WebGl-Publisher Inventor export license (SingleWebGlInventorExportLic)
 * or a written permission of CADMAI Software GmbH 
 *
 * The redistributor / user does not have the right to change, translate,
 * back-develop, decompile or disassemble the software.
 * 
 * Redistributions must retain the above copyright notice, 
 * this list of conditions and the following disclaimer.
 *   
 * Neither the name of CADMAI Software GmbH nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
 "use strict";var RJ='\n\
  vec4 noiseTexture2D(sampler2D tex, vec3 texCoordOrg) \
  {\
    float textureSize = 128.0;\
    float colCnt = 16.0;\
    float rowCnt = 128.0/colCnt;\
    \
    vec3 texCoord = texCoordOrg;\
    texCoord.x=mod(texCoordOrg.x,1.0);\
    texCoord.y=mod(texCoordOrg.y,1.0);\
    texCoord.z=mod(texCoordOrg.z,1.0);\
    \
    float sliceSizeHor = 1.0 / colCnt;\
    float slicePixelSizeHor = sliceSizeHor / textureSize;\
    float sliceInnerSizeHor = slicePixelSizeHor * (textureSize - 1.0);\
    \
    float sliceSizeVer = 1.0 / rowCnt;\
    float slicePixelSizeVer = sliceSizeVer / textureSize;\
    float sliceInnerSizeVer = slicePixelSizeVer * (textureSize - 1.0);\
    \
    float zSlice0 = min(floor(texCoord.z * textureSize), textureSize - 1.0);\
    float zSlice1 = min(zSlice0 + 1.0, textureSize - 1.0);\
    \
    float yRow0 = floor(zSlice0/colCnt);\
    float yRow1 = floor(zSlice1/colCnt);\
    zSlice0 = floor(mod(zSlice0,colCnt));\
    zSlice1 = floor(mod(zSlice1,colCnt));\
    \
    float xOffset = slicePixelSizeHor * 0.5 + texCoord.x * sliceInnerSizeHor;\
    float s0 = xOffset + (zSlice0 * sliceSizeHor);\
    float s1 = xOffset + (zSlice1 * sliceSizeHor);\
    \
    float yOffset = slicePixelSizeVer * 0.5 + texCoord.y * sliceInnerSizeVer;\
    float y0 = yOffset + (yRow0 * sliceSizeVer);\
    float y1 = yOffset + (yRow1 * sliceSizeVer);\
    \
    vec4 slice0Color = texture2D(tex, vec2(s0, y0));\
    vec4 slice1Color = texture2D(tex, vec2(s1, y1));\
    float zOffset = mod(texCoord.z * textureSize, 1.0);\
    return mix(slice0Color, slice1Color, zOffset);\
  }\
';var k5='\n\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  varying vec3  vTexCoord;\
  void main(void)\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTexCoord = aVertexPosition;\
  }\
';var R7='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform samplerCube uSkyBox;\
  uniform float uGlobalBrightness;\
  varying vec3 vTexCoord;\
  void main(void)\
  {\
    gl_FragColor =  vec4(textureCube(uSkyBox, vTexCoord))*uGlobalBrightness;\
  }\
';var Z8='\n\
  attribute vec3 aVertexPosition;\
  uniform float uXScale;\
  uniform float uYScale;\
  varying vec2  vTexCoord;\
  void main(void)\
  {\
    gl_Position = vec4(aVertexPosition.x, aVertexPosition.y, 1.0, 1.0);\
    \
    if(aVertexPosition.x == 1.0)\
      vTexCoord.x = 1.0 * uXScale;\
    else\
      vTexCoord.x = 0.0;\
    \
    if(aVertexPosition.y == 1.0)\
      vTexCoord.y = -1.0 * uYScale;\
    else\
      vTexCoord.y = 0.0;\
  }\
';var Ir='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uTexture;\
  varying vec2 vTexCoord;\
  void main(void)\
  {\
    gl_FragColor = texture2D( uTexture, vTexCoord );\
  }\
';var V2='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3 uAmbientColor;\
  uniform vec3 uLightPos;\
  uniform vec3 uDirectionalColor;\
  varying vec3 vLightWeighting;\
  \
  void main(void)\
  {\
    vec4 lightDir;\
    float fDirectionalLightWeighting;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    \
    if(uUseFixedLightPos == 1)\
    {\
      lightDir= vec4(normalize(uLightPos), 1.0)* uMVMatrix * uLVMatrix;\
      float backViewChk = max(0.0, dot(aVertexNormal.xyz, lightDir.xyz));\
      if(backViewChk == 0.0)\
        fDirectionalLightWeighting = max(dot(aVertexNormal.xyz, -lightDir.xyz), 0.0)*0.4;\
      else\
        fDirectionalLightWeighting = max(dot(aVertexNormal.xyz, lightDir.xyz), 0.0);\
    }\
    else\
    {\
      lightDir = vec4(normalize(uLightPos), 1.0) * uMVMatrix;\
      fDirectionalLightWeighting = max(dot(aVertexNormal.xyz, lightDir.xyz), 0.0);\
    }\
    \
    vLightWeighting = uAmbientColor + uDirectionalColor * fDirectionalLightWeighting;\
  }\
';var sC='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  varying vec3 vLightWeighting;\
  uniform vec4  uBaseColor;\
  uniform float uGlobalBrightness;\
  void main(void)\
  {\
      gl_FragColor = (vec4(vLightWeighting,1.0)*uBaseColor)*uGlobalBrightness;\
  }\
';var tp='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  uniform vec3 uLightPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  varying vec3 vReflectVector;\
  \
  void main(void)\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = normalize((vec4(aVertexNormal, 1.0)).xyz);\
    vPosition = aVertexPosition.xyz;\
    \
    if(uUseFixedLightPos == 1)\
      vLightvec= (vec4(normalize(uLightPos), 1.0)* uMVMatrix* uLVMatrix).xyz;\
    else\
      vLightvec = (vec4(normalize(uLightPos), 1.0)* uMVMatrix).xyz;\
    \
    vCameraVector = normalize((uMVInvMatrix * vec4(0.0,0.0,0.0,1.0)).xyz - vPosition.xyz);\
    vReflectVector = reflect((vec4(vPosition,1.0) * uMVMatrix ).xyz, vNormal);\
  }\
';var WK='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform samplerCube uEnvMap;\
  uniform vec4 uBaseColor;\
  uniform float uAttenuation;\
  uniform float uShininessVal;\
  uniform float uSpecularVal;\
  uniform float uEnvFactor;\
  uniform float uDiffuseVal;\
  uniform float uAmbientVal;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  varying vec3 vReflectVector;\
  \
  void main(void)\
  {\
    vec4 specular = vec4(0.0);\
    vec3 lightVector = vLightvec;\
    \
    float backViewChk =  max(0.0, dot(vNormal, lightVector));\
    float nxDir = backViewChk;\
    vec4 diffuse;\
    backViewChk = 1.0;\
    if(backViewChk == 0.0)\
    {\
      lightVector = -lightVector;\
      nxDir = max(0.0, dot(vNormal, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation * 0.5;\
    }\
    else\
    {\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    }\
    \
    if(nxDir != 0.0)\
    {\
      vec3 halfVector = normalize(lightVector + vCameraVector);\
      float nxHalf = max(0.0, dot(vNormal, halfVector));\
      float specularPower = pow(nxHalf, uShininessVal);\
      specular = vec4(uSpecularVal) * specularPower * uAttenuation;\
    }\
    if(backViewChk == 0.0)\
    {\
      specular = vec4(0.0,0.0,0.0,1.0);\
    }\
    vec4 envColor = vec4(textureCube(uEnvMap, vReflectVector));\
    if(diffuse.r == 0.0)\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal) + diffuse * vec4(uBaseColor.rgb, 1.0)) + (specular * uBaseColor.a) + uEnvFactor * envColor);\
    else\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal) + diffuse * vec4(uBaseColor.rgb, 1.0/diffuse.r)) + (specular * uBaseColor.a) + uEnvFactor * envColor);\
  }\
';var G4='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3 uLightPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  \
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = aVertexNormal.xyz;\
    vPosition = aVertexPosition.xyz;\
    vTextureCoord = aTextureCoord;\
    vLightvec = normalize((uMVInvMatrix * vec4(uLightPos,1.0)).xyz - vPosition);\
    vCameraVector = normalize((uMVInvMatrix * vec4(0.0,0.0,0.0,1.0)).xyz - vPosition.xyz);\
    if(uUseFixedLightPos == 1)\
    {\
      vLightvec = (vec4(vLightvec,1.0)* uLVMatrix).xyz;\
    }\
    \
  }\
';var qe='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uTexture;\
  uniform float uTextureScale;\
  uniform float uAttenuation;\
  uniform float uShininessVal;\
  uniform float uSpecularVal;\
  uniform float uDiffuseVal;\
  uniform float uAmbientVal;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  \
  void main()\
  {\
    float texScale = uTextureScale;\
    vec4 specular = vec4(0.0);\
    vec3 norm = normalize(vNormal);\
    vec3 lightVector = vLightvec;\
    \
    float backViewChk =  max(0.0, dot(vNormal, lightVector));\
    float nxDir = backViewChk;\
    vec4 diffuse;\
    backViewChk = 1.0;\
    if(backViewChk == 0.0)\
    {\
      lightVector = -lightVector;\
      nxDir = max(0.0, dot(norm, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation*0.5;\
    }\
    else\
    {\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    }\
    \
    if(nxDir != 0.0)\
    {\
      vec3 halfVector = normalize(lightVector + vCameraVector);\
      float nxHalf = max(0.0, dot(norm, halfVector));\
      float specularPower = pow(nxHalf, uShininessVal);\
      specular = vec4(uSpecularVal) * specularPower * uAttenuation;\
    }\
    vec4 texColor = texture2D(uTexture, vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale));\
    if(backViewChk == 0.0)\
    {\
      specular = vec4(0.0,0.0,0.0,1.0);\
    }\
    \
    if(diffuse.r == 0.0)\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal*texColor) + diffuse * vec4(texColor.rgb, 1.0)) + (specular * texColor.a));\
    else\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal*texColor) + diffuse * vec4(texColor.rgb, 1.0/diffuse.r)) + (specular * texColor.a));\
  }\
';var ut='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3 uLightPos;\
  \
  varying vec2 vTextureCoord;\
  varying float vDirectionalLightWeighting;\
  \
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTextureCoord = aTextureCoord;\
    vec3 lightVector;\
    if(uUseFixedLightPos == 1)\
    {\
      lightVector = normalize((uMVInvMatrix * vec4(uLightPos,1.0)).xyz - aVertexPosition.xyz);\
      lightVector = (vec4(lightVector,1.0)* uLVMatrix).xyz;\
    }\
    else\
      lightVector = normalize((uMVInvMatrix * vec4(uLightPos,1.0)).xyz - aVertexPosition.xyz);\
    \
    float backViewChk = max(0.0, dot(aVertexNormal.xyz, lightVector));\
    backViewChk = 1.0;\
    if(backViewChk == 0.0)\
    {\
      lightVector = -lightVector;\
      vDirectionalLightWeighting = max(dot(aVertexNormal.xyz, lightVector.xyz), 0.0)*0.5;\
    }\
    else\
    {\
      vDirectionalLightWeighting = max(dot(aVertexNormal.xyz, lightVector.xyz), 0.0);\
    }\
  }\
';var sz='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uTexture;\
  uniform float uTextureScale;\
  uniform vec4  uBaseColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec2 vTextureCoord;\
  varying float vDirectionalLightWeighting;\
  \
  void main()\
  {\
    vec4 texColor = texture2D(uTexture, vec2(vTextureCoord.s / uTextureScale, vTextureCoord.t / uTextureScale));\
    if(texColor.a == 0.0)\
      discard;\
    else\
    {\
      texColor = texColor * uBaseColor * vDirectionalLightWeighting;\
      texColor.a = uBaseColor.a;\
      gl_FragColor = uGlobalBrightness*texColor;\
    }\
  }\
';var ac='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3 uLightPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  varying vec3 vReflectVector;\
  \
  void main()\
  {\
    gl_Position  = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = normalize(aVertexNormal.xyz);\
    vPosition = aVertexPosition.xyz;\
    vTextureCoord = aTextureCoord;\
    vLightvec = normalize((uMVInvMatrix * vec4(uLightPos,1.0)).xyz - vPosition);\
    vCameraVector = normalize((uMVInvMatrix * vec4(0.0,0.0,0.0,1.0)).xyz - vPosition.xyz);\
    vReflectVector = reflect((vec4(vPosition,1.0) * uMVMatrix ).xyz, vNormal);\
    if(uUseFixedLightPos == 1)\
    {\
      vLightvec = (vec4(vLightvec,1.0)* uLVMatrix).xyz;\
    }\
  }\
';var g2='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uTexture;\
  uniform samplerCube uEnvMap;\
  uniform float uTextureScale;\
  \
  uniform float uAttenuation;\
  uniform float uShininessVal;\
  uniform float uSpecularVal;\
  uniform float uEnvFactor;\
  uniform float uDiffuseVal;\
  uniform float uAmbientVal;\
  uniform float uSizeVal;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  varying vec3 vLightvec;\
  varying vec3 vCameraVector;\
  varying vec3 vReflectVector;\
  \
  void main()\
  {\
    float texScale = uTextureScale;\
    vec4 specular = vec4(0.0);\
    vec3 envMapPos = vec3(vPosition.xyz+uSizeVal);\
    vec3 lightVector = vLightvec;\
    \
    float backViewChk =  max(0.0, dot(vNormal, lightVector));\
    float nxDir = backViewChk;\
    vec4 diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    backViewChk = 1.0;\
    if(backViewChk == 0.0)\
    {\
      lightVector = -lightVector;\
      nxDir = max(0.0, dot(vNormal, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation*0.5;\
    }\
    else\
    {\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    }\
    if(nxDir != 0.0)\
    {\
      vec3 halfVector = normalize(lightVector + vCameraVector);\
      float nxHalf = max(0.0, dot(vNormal, halfVector));\
      float specularPower = pow(nxHalf, uShininessVal);\
      specular = vec4(uSpecularVal) * specularPower * uAttenuation;\
    }\
    if(backViewChk == 0.0)\
    {\
      specular = vec4(0.0,0.0,0.0,1.0);\
    }\
    vec4 texColor = texture2D(uTexture, vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale));\
    vec4 envColor = vec4(textureCube(uEnvMap, vReflectVector));\
    gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal*texColor) + diffuse * vec4(texColor.rgb, 1.0)) + (specular * texColor.a) + uEnvFactor * envColor);\
  }\
';var kC='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uBaseColor;\
  void main()\
  {\
    gl_FragColor = uBaseColor;\
  }\
';var kX='\n\
  attribute vec4 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform float uPointSize;\
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition.xyz,1.0);\
    gl_PointSize = uPointSize;\
  }\
';var nP='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uBaseColor;\
  uniform int uLineStyle;\
  uniform float uUnitLength;\
  varying float vTexCoord;\
  void main()\
  {\
    float Scale = 0.02;\
    float ss = 0.0;\
    if((uLineStyle==0)||(uUnitLength == 0.0))/*cont*/\
    {\
      gl_FragColor = uBaseColor;\
      return;\
    }\
    ss = fract(vTexCoord * Scale * 1.0/uUnitLength);\
    if(uLineStyle==1)/*border*/\
    {\
      if(((ss > 0.18)&&(ss < 0.36))||((ss > 0.55)&&(ss < 0.73))||((ss > 0.81)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==2)/*center*/\
    {\
      if(((ss > 0.4)&&(ss < 0.6))||((ss > 0.8)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==3)/*dashdot*/\
    {\
      if(((ss > 0.2)&&(ss < 0.3))||((ss > 0.4)&&(ss < 0.5))||((ss > 0.7)&&(ss < 0.8))||((ss > 0.9)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==4)/*dashed*/\
    {\
      if(((ss > 0.125)&&(ss < 0.25))||((ss > 0.375)&&(ss < 0.5))||((ss > 0.625)&&(ss < 0.75))||((ss > 0.875)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==5)/*dot*/\
    {\
      if(((ss > 0.0625)&&(ss < 0.25))||((ss > 0.3125)&&(ss < 0.5))||((ss > 0.5625)&&(ss < 0.75))||((ss > 0.8125)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==6)/*hidden*/\
    {\
      if(((ss > 0.1875)&&(ss < 0.25))||((ss > 0.4375)&&(ss < 0.5))||((ss > 0.6875)&&(ss < 0.75))||((ss > 0.9375)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else if(uLineStyle==7)/*phantom*/\
    {\
      if(((ss > 0.375)&&(ss < 0.5))||((ss > 0.625)&&(ss < 0.75))||((ss > 0.875)&&(ss < 1.0)))\
        discard;\
      else\
        gl_FragColor = uBaseColor;\
    }\
    else\
    {\
      gl_FragColor = uBaseColor;\
    }\
  }\
';var IX='\n\
  attribute vec4 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  varying float vTexCoord;\
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition.xyz,1.0);\
    vTexCoord=aVertexPosition.w;\
  }\
';var Iv='\n\
  attribute vec3 aVertexPosition;\
  attribute vec2  aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  varying vec2 vTexCoord;\
  void main(void)\
  {\
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTexCoord = aTextureCoord;\
  }\
';var zy='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  varying vec2 vTexCoord;\
  uniform vec4 uBaseColor;\
  uniform sampler2D uSampler;\
  void main(void)\
  {\
    vec4 textColor;\
    textColor = texture2D( uSampler, vTexCoord );\
    gl_FragColor = textColor;\
    /*\
    if((abs(textColor.x-uBaseColor.x) <0.01)&&(abs(textColor.y-uBaseColor.y)<0.01)&&(abs(textColor.z-uBaseColor.z)<0.01))\
      discard;\
    else\
      gl_FragColor = textColor;\
    */\
  }\
';var rG='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  varying vec2 vTexCoord;\
  uniform vec4 uBaseColor;\
  uniform sampler2D uSampler;\
  void main(void)\
  {\
    vec4 textColor;\
    textColor = texture2D( uSampler, vTexCoord );\
    gl_FragColor = textColor;\
    return;\
    if(textColor.a == 0.0)\
      discard;\
    else\
      gl_FragColor = textColor;\
  }\
';var hq='\n\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  void main(void)\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var j7='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4  uBaseColor;\
  void main(void)\
  {\
      gl_FragColor = uBaseColor;\
  }\
';var t0='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  const float EtaR = 0.65;\
  const float EtaG = 0.67;\
  const float EtaB = 0.69;\
  const float FresnelPower = 5.0;\
  \
  const float F  = ((1.0-EtaG) * (1.0-EtaG)) / ((1.0+EtaG) * (1.0+EtaG));\
  \
  varying vec3  Reflect;\
  varying vec3  RefractR;\
  varying vec3  RefractG;\
  varying vec3  RefractB;\
  varying float Ratio;\
  \
  void main()\
  {\
    vec3 i = normalize((uMVMatrix * vec4(aVertexPosition.xyz, 1.0)).xyz);\
    vec3 n = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
    Ratio   = F + (1.0 - F) * pow((1.0 - dot(-i, n)), FresnelPower);\
    RefractR = refract(i, n, EtaR);\
    RefractG = refract(i, n, EtaG);\
    RefractB = refract(i, n, EtaB);\
    Reflect  = reflect(i, n);\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var er='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform samplerCube uEnvMap;\
  uniform float uGlobalBrightness;\
  \
  varying vec3  Reflect;\
  varying vec3  RefractR;\
  varying vec3  RefractG;\
  varying vec3  RefractB;\
  varying float Ratio;\
  \
  void main()\
  {\
    vec3 refractColor, reflectColor;\
    refractColor.r = vec3(textureCube(uEnvMap, RefractR)).r;\
    refractColor.g = vec3(textureCube(uEnvMap, RefractG)).g;\
    refractColor.b = vec3(textureCube(uEnvMap, RefractB)).b;\
    reflectColor = vec3(textureCube(uEnvMap, Reflect));\
    vec3 color = mix(refractColor, reflectColor, Ratio);\
    gl_FragColor = uGlobalBrightness*(vec4(color, 1.0));\
  }\
';var Qc='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3 uViewPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vViewVec;\
  varying vec3  ReflectDir;\
  \
  void main(void)\
  {\
    vec4 Pos = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    gl_Position = Pos;\
    vNormal = aVertexNormal.xyz;\
    vViewVec = uViewPos.xyz-aVertexPosition;\
    vec3 normal = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
    ReflectDir = reflect(Pos.xyz, normal);\
  }\
';var Ln='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uRainbow;\
  uniform samplerCube uEnvMap;\
  uniform float uRainbowFactor;\
  uniform float uMirrorFactor;\
  uniform float uColorFactor;\
  uniform vec4 uBaseColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vViewVec;\
  varying vec3  ReflectDir;\
  \
  void main(void)\
  {\
    vec3 normal = normalize(vNormal);\
    /*float v =  dot(normalize(vViewVec), normal);*/\
    float v =  0.4;\
    vec3 rainbow = texture2D(uRainbow, normal.xy).xyz;\
    vec3 refl = textureCube(uEnvMap, ReflectDir).xyz;\
    vec3 color = mix(refl, rainbow, uRainbowFactor * v) * uMirrorFactor;\
    \
    gl_FragColor = uGlobalBrightness*(vec4 (color,  1.0 - v) + uColorFactor * uBaseColor);\
  }\
';var C2='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec4  uAmbient;\
  uniform float uFlAmbient;\
  uniform vec4  uRingCenter;\
  uniform vec4  uRingScale;\
  uniform vec3  uLightPos;\
  \
  varying vec4 vNormal;\
  varying vec3 vView;\
  varying vec3 vDirAniso;\
  varying vec4 vTexPos;\
  varying vec3 vLight;\
  varying vec3 vPlainLightvec;\
  varying vec3 vPlainNormal;\
  \
  mat4 texture_space_matrix = mat4(1.0,0.0,0.0,0.0, 0.0,-2.0,-1.0,0.0, 0.0,-4.0,-2.0,0.0, 0.0,0.0,0.0,1.0);\
  mat4  mWorld = mat4(1.0,0.0,0.0,0.0, 0.0,1.0,0.0,0.0, 0.0,0.0,1.0,0.0, 0.0,0.0,0.0,1.0);\
  \
  void main(void)\
  {\
    vec3 texPos      = aVertexPosition.xyz - uRingCenter.xyz;\
    vec3 texSpacePos = texPos * uRingScale.xyz + vec3(0.0, -40.0, -40.0);\
    mat3 texSpaceMat = mat3(vec3(texture_space_matrix[0]),vec3(texture_space_matrix[1]),vec3(texture_space_matrix[2]));\
    texSpacePos = texSpacePos * texSpaceMat;\
    vTexPos.xyz = texSpacePos;\
    vTexPos.w = uAmbient.x * 5.0;\
    vec3 dirAniso = cross(aVertexNormal, normalize(texSpacePos.xyz));\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = vec4(aVertexNormal * 0.5 + vec3(0.5,0.5,0.5), uFlAmbient );\
    vDirAniso = dirAniso * 0.5 + vec3(0.5,0.5,0.5);\
    vec4 vCameraPosition;\
    vCameraPosition.xyzw = uMVInvMatrix * vec4(0.0, 0.0, 0.0, 1.0);\
    vView = normalize(vCameraPosition.xyz - vec3(mWorld * vec4(aVertexPosition, 1.0)));\
    vec3 tempLP = (uMVInvMatrix * vec4(uLightPos.xyz,1.0)).xyz;\
    vLight   = normalize(tempLP.xyz - aVertexPosition);\
    vPlainLightvec = normalize((vec4(normalize(uLightPos), 1.0)).xyz);\
    vPlainNormal = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
  }\
';var YP='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uStrand;\
  uniform sampler2D uRingGradient;\
  uniform vec4 uLightColor;\
  uniform vec4 uRingColor;\
  uniform vec4 uRingAmbientColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec4 vNormal;\
  varying vec4 vTexPos;\
  varying vec3 vDirAniso;\
  varying vec3 vLight;\
  varying vec3 vView;\
  varying vec3 vPlainLightvec;\
  varying vec3 vPlainNormal;\
  \
  vec2 StrandLight( vec3 normal, vec3 light, vec3 view, vec3 dirAniso)\
  {\
    vec2 o;\
    float  LdA        = dot( light, dirAniso );\
    float  VdA        = dot( view,  dirAniso );\
    vec2   fnLookup   = texture2D( uStrand, vec2( LdA, VdA ) * 0.5 + vec2(0.5,0.5) ).xy;\
    float  spec       = fnLookup.y * fnLookup.y;\
    float  diff       = fnLookup.x;\
    float  selfShadow;\
    selfShadow = clamp( dot( normal, light ), 0.0, 1.0 );\
    \
    o.x  = diff * selfShadow;\
    o.y = spec * selfShadow;\
    return o;\
  }\
  \
  void main(void)\
  {\
    vec3 dirAniso = vec3(vDirAniso) * 2.0 - vec3(1.0);\
    vec3 normal   = vec3(vNormal)   * 2.0 - vec3(1.0);\
    vec3 view     = vec3(vView);\
    float  shadow   = vTexPos.w;\
    float  ambient  = vNormal.w;\
    vec3 lightVector = normalize(vLight);\
    float backViewChk = max(0.0, dot(vPlainNormal, vPlainLightvec));\
    vec3 color;\
    vec4 ringNewColor = vec4(0.0, 0.0, 0.0, 0.0);\
    vec2 strand = StrandLight(normal, vec3(lightVector), view, dirAniso);\
    \
    backViewChk = 1.0;\
    if((backViewChk == 0.0)&&(strand.x == 0.0)&&(strand.y == 0.0))\
    {\
      strand = StrandLight(normal, vec3(-lightVector), view, dirAniso);\
    }\
    \
    color = (strand.x + strand.y) * uLightColor.xyz;\
    ringNewColor  = texture2D(uRingGradient, vec2(length(vTexPos),0.0)) * uRingColor + uRingAmbientColor;\
    color = (color*shadow + ambient) * ringNewColor.xyz;\
    gl_FragColor = uGlobalBrightness*(vec4( color, 1.0));\
  }\
';var Tv='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform vec3 uLightPos;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vPeye;\
  varying vec3 vNeye;\
  varying vec3 vPlainLightvec;\
  varying vec3 vPlainNormal;\
  varying vec3 vLightPos;\
  \
  void main(void)\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPeye = vec3(uMVMatrix * vec4(aVertexPosition.xyz, 1.0));\
    vNeye    = (uNMatrix * vec4(aVertexNormal,1.0)).xyz;\
    vPlainLightvec = normalize((vec4(normalize(uLightPos), 1.0)).xyz);\
    vPlainNormal = vec3(0.0,0.0,1.0);\
    vLightPos = uLightPos;\
  }\
';var El='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uBaseColor;\
  uniform vec4 uSheen;\
  uniform vec4 uShiny;\
  uniform float uRoughness;\
  uniform float uEdginess;\
  uniform float uBackscatter;\
  uniform vec4 uGlobalAmbient;\
  uniform vec4 uKa;\
  uniform vec4 uLightColor;\
  uniform vec4 uKd;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vPeye;\
  varying vec3 vNeye;\
  varying vec3 vPlainLightvec;\
  varying vec3 vPlainNormal;\
  varying vec3 vLightPos;\
  \
  vec4 diffuse(vec3 Neye, vec3 Peye, vec3 lightPos)\
  {\
     vec3 Leye = (vec3(lightPos) - Peye) / length(vec3(lightPos) - Peye);\
     float NdotL = dot(Neye, Leye);\
     return vec4(NdotL, NdotL, NdotL, NdotL);\
  }\
  \
  void main(void)\
  {\
    float backViewChk = max(0.0, dot(vPlainNormal, vPlainLightvec));\
    vec3 Nf = normalize(vNeye);\
    vec3 Veye = -(vPeye / length(vPeye));\
    vec3 Leye = ( vec3(vLightPos) - vPeye) / length( vec3(vLightPos) - vPeye);\
    \
    float cosine = clamp(dot(Leye, Veye), 0.0, 1.0);\
    vec4 LocalShiny = uShiny + pow (cosine, 1.0 / uRoughness ) * uBackscatter * uLightColor * uSheen;\
    cosine = clamp (dot(Nf, Veye), 0.0, 1.0);\
    float sine = sqrt (1.0 - (cosine * cosine));\
    LocalShiny += pow (sine, uEdginess) * dot(Leye, Nf) * uLightColor * uSheen;\
    vec4 diffuseVal = diffuse(vNeye, vPeye, vLightPos);\
    backViewChk = 1.0;\
    if(backViewChk == 0.0)\
    {\
      gl_FragColor = uGlobalBrightness*((uKa*uGlobalAmbient + uKd*diffuse(vNeye, vPeye, -vLightPos)) * uBaseColor + LocalShiny);\
    }\
    else\
    {\
      gl_FragColor = uGlobalBrightness*((uKa*uGlobalAmbient + uKd*diffuseVal) * uBaseColor + LocalShiny);\
    }\
  }\
';var vg='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vNormal;\
  void main(void)\
  {\
     gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
     vNormal = vec3(uNMatrix * vec4(aVertexNormal, 1.0));\
  }\
';var L4='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uGamma;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  \
  vec3 map( in vec3 s );\
  \
  void main(void)\
  {\
    vec3 color = map( normalize(vNormal));\
    color = pow (color,vec3( 1.0/uGamma));\
    gl_FragColor = uGlobalBrightness*(vec4(color, 1.0));\
  }\
  \
  vec3 map(in vec3 s)\
  {\
    vec3 result = s * 0.5 + 0.5;\
    return result;\
  }\
';var LF='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  \
  uniform vec3 uLightPos;\
  uniform float uScale;\
  uniform float uLightIntensityFactor;\
  \
  varying float vLightIntensity;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  \
  void main(void)\
  {\
    vec4 pos       = uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition       = aVertexPosition * uScale;\
    vec3 tnorm = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
    float dotval   = abs(dot(normalize(uLightPos - vec3(pos)), tnorm));\
    vLightIntensity = dotval * uLightIntensityFactor;\
    gl_Position    = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTextureCoord = aTextureCoord;\
  }\
';var eP='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uRusty;\
  uniform sampler2D uNoise2d;\
  uniform float uErosionFactor;\
  uniform float uIntFactor1;\
  uniform float uIntFactor2;\
  uniform vec4 uColor1;\
  uniform vec4 uColor2;\
  uniform float uTextureScale;\
  uniform float uGlobalBrightness;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying float vLightIntensity;\
  varying vec3 vPosition;\
  varying vec2 vTextureCoord;\
  \
  void main (void)\
  {\
    vec3 offset = vec3(- uErosionFactor, - uErosionFactor + 0.06, - uErosionFactor * 0.92);\
    vec4 color;\
    vec3 noiseCoord = vPosition.xyz + offset;\
    vec4 noiseVec   = texture2D(uNoise2d, noiseCoord.xz);\
    float intensity = abs(noiseVec[0] - 0.25) +\
                      abs(noiseVec[1] - 0.125) +\
                      abs(noiseVec[2] - 0.0625) +\
                      abs(noiseVec[3] - 0.03125);\
    intensity = uIntFactor1 * (noiseVec.x + noiseVec.y + noiseVec.z + noiseVec.w);\
    intensity = uIntFactor2* abs(2.0 * intensity - 1.0);\
    intensity = clamp(intensity, 0.0, 1.0);\
    if (intensity < fract(0.5-offset.x-offset.y-offset.z)) discard;\
    color = vec4(mix(uColor1.rgb, uColor2.rgb, intensity),1.0);\
    color *= vLightIntensity;\
    gl_FragColor = uGlobalBrightness*(color * texture2D(uRusty, vec2(vTextureCoord.s / uTextureScale, vTextureCoord.t / uTextureScale)));\
    gl_FragColor.a = 1.0;\
  }\
';var Ty='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  uniform vec3  uLightPosition;\
  uniform vec4  uLightColor;\
  uniform vec3  uEyePosition;\
  uniform vec4  uSpecular;\
  uniform vec4  uAmbient;\
  uniform float uKd;\
  \
  varying vec4 vDiffuseColor;\
  varying vec4 vSpecularColor;\
  varying vec2 vTextureCoord;\
  \
  void main(void)\
  {\
    vec3 ecPosition = vec3(uMVMatrix * vec4(aVertexPosition, 1.0));\
    vec3 tnorm      = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
    vec3 lightVec   = normalize(uLightPosition - ecPosition);\
    vec3 viewVec    = normalize(uEyePosition - ecPosition);\
    vec3 Hvec       = normalize(viewVec + lightVec);\
    float spec = abs(dot(Hvec, tnorm));\
    spec = pow(spec, 16.0);\
    vDiffuseColor    = uLightColor * vec4 (uKd * abs(dot(lightVec, tnorm)));\
    vDiffuseColor    = clamp(uAmbient + vDiffuseColor, 0.0, 1.0);\
    vSpecularColor   = clamp((uLightColor * uSpecular * spec), 0.0, 1.0);\
    vTextureCoord = aTextureCoord;\
    gl_Position    = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var wu='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uScale;\
  uniform float uThreshold;\
  uniform vec4  uSurfaceColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec4 vDiffuseColor;\
  varying vec4 vSpecularColor;\
  varying vec2 vTextureCoord;\
  \
  void main (void)\
  {\
    float ss = fract(vTextureCoord.s * uScale);\
    float tt = fract(vTextureCoord.t * uScale);\
    if ((ss > uThreshold) && (tt > uThreshold)) discard;\
    gl_FragColor = uGlobalBrightness*(uSurfaceColor * vDiffuseColor + vSpecularColor);\
  }\
';var VU='\n\
  attribute vec3 aBinormalPosition;\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  attribute vec3 aTangentPosition;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform vec3  uLightPos;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vLightvec;\
  varying vec2 vTextureCoord;\
  \
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTextureCoord = aTextureCoord;\
    mat3 TBNMatrix = mat3(aTangentPosition.xyz, aBinormalPosition, aVertexNormal);\
    vLightvec = normalize((uMVInvMatrix * vec4(uLightPos, 1.0)).xyz - aVertexPosition);\
    vLightvec *=TBNMatrix;\
    vNormal = vec3(0.0,0.0,1.0);\
  }\
';var kb='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uNormalMap;\
  uniform float uTextureScale;\
  uniform float uAttenuation;\
  uniform float uShininessVal;\
  uniform float uSpecularVal;\
  uniform float uDiffuseVal;\
  uniform float uAmbientVal;\
  uniform float uBumpiness;\
  uniform float uSize;\
  uniform vec4 uColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vLightvec;\
  varying vec2 vTextureCoord;\
  \
  void main()\
  {\
    float texScale = uSize * uTextureScale;\
    \
    vec4 specular = vec4(0.0);\
    vec3 smoothVal = vec3(0.5, 0.5, 1.0);\
    vec3 norm = texture2D(uNormalMap, vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale)).rgb;\
    norm = mix( smoothVal, norm, uBumpiness );\
    norm = normalize( ( norm * 2.0 )  - 1.0);\
    vec3 lightVector = normalize(vLightvec);\
    vec4 diffuse;\
    float specularPower = 0.0;\
    float nxDir = max(0.0, dot(vNormal, lightVector));\
    \
    if(nxDir == 0.0)\
    {\
      lightVector = -lightVector;\
      nxDir = max(0.0, dot(norm, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation * 0.7;\
    }\
    else\
    {\
      nxDir = max(0.0, dot(norm, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    }\
    \
    if(nxDir != 0.0)\
    {\
      vec3 halfVector =  normalize(lightVector);\
      float nxHalf = max(0.0, dot(norm, halfVector));\
      specularPower = pow(nxHalf, uShininessVal);\
    }\
    specular = vec4(uSpecularVal) * specularPower * uAttenuation;\
    if(diffuse.r == 0.0)\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal*uColor) + diffuse * vec4(uColor.rgb, 1.0)) + specular);\
    else\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal*uColor) + diffuse * vec4(uColor.rgb, 1.0/diffuse.r)) + specular);\
  }\
';var hJ='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vNormal;\
  varying vec3 vViewVec1;\
  varying vec3 vViewVec2;\
  varying vec3 vObjPos;\
  \
  void main(void)\
  {\
    vec4 ViewPosition = uMVInvMatrix * vec4(0,0,0,1);\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = aVertexNormal;\
    vViewVec1 = (uNMatrix *  vec4(aVertexPosition,1.0)).xyz;\
    vViewVec2 = ViewPosition.xyz - aVertexPosition;\
    vObjPos = aVertexPosition;\
  }\
';var f9='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uGlitterStrength;\
  uniform vec4 uBaseColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vViewVec1;\
  varying vec3 vViewVec2;\
  varying vec3 vObjPos;\
  \
  void main(void)\
  {\
    vec3 fp = fract(0.7 * vObjPos + 0.1 * vViewVec1);\
    float glitter = clamp(1.0 - 7.0 * (fp.x + fp.y + fp.z), 0.0, 1.0);\
    float v = 0.5 * (1.0 + dot(normalize(vViewVec2), vNormal));\
    gl_FragColor = uGlobalBrightness*(v * uBaseColor + uGlitterStrength * glitter);\
    gl_FragColor.a = uBaseColor.a;\
  }\
';var E_='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform vec3 uLightPos;\
  uniform vec3 uViewPos;\
  \
  varying vec3  vReflectDir;\
  varying float vLightIntensity;\
  varying vec3 vViewVec;\
  varying vec3 vNormal;\
  \
  void main()\
  {\
    gl_Position    = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vec3 normal    = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
    vec4 pos       = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vec3 eyeDir    = pos.xyz;\
    vReflectDir     = reflect(eyeDir, normal);\
    vLightIntensity = max(dot(normalize(uLightPos - eyeDir), normal),0.0);\
    vNormal = aVertexNormal;\
    vViewVec = uViewPos.xyz-aVertexPosition;\
  }\
';var lm='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uRainbow;\
  uniform samplerCube uEnvMap;\
  uniform vec4  uBaseColor;\
  uniform float uMixRatio;\
  uniform float uRainbowFactor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vReflectDir;\
  varying float vLightIntensity;\
  varying vec3 vViewVec;\
  varying vec3 vNormal;\
  \
  void main()\
  {\
    vec3 envColor = vec3(textureCube(uEnvMap, vReflectDir));\
    vec3 normal = normalize(vNormal);\
    float v =  dot(normalize(vViewVec), normal);\
    vec3 rainbow = texture2D(uRainbow, vec2(v,0.0)).xyz;\
    vec3 base = vLightIntensity * uBaseColor.xyz;\
    envColor  = mix(envColor, rainbow, uRainbowFactor);\
    envColor  = mix(envColor, base, uMixRatio);\
    gl_FragColor = uGlobalBrightness*(vec4(envColor, uBaseColor.a));\
  }\
';var Kq='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uBaseTexture;\
  uniform sampler2D uNormalMap;\
  uniform float uTextureScale;\
  uniform float uAttenuation;\
  uniform float uShininessVal;\
  uniform float uSpecularVal;\
  uniform float uDiffuseVal;\
  uniform float uAmbientVal;\
  uniform float uBumpiness;\
  uniform float uSize;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  varying vec3 vLightvec;\
  varying vec2 vTextureCoord;\
  \
  void main()\
  {\
    float texScale = uSize * uTextureScale;\
    vec4 specular = vec4(0.0);\
    vec3 smoothVal = vec3(0.5, 0.5, 1.0);\
    vec3 norm = texture2D(uNormalMap, vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale)).rgb;\
    norm = mix( smoothVal, norm, uBumpiness );\
    norm = normalize( ( norm * 2.0 )  - 1.0);\
    vec3 baseColor = texture2D(uBaseTexture, vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale)).rgb;\
    vec3 lightVector = normalize(vLightvec);\
    vec4 diffuse;\
    float specularPower = 0.0;\
    float nxDir = max(0.0, dot(vNormal, lightVector));\
    \
    if(nxDir == 0.0)\
    {\
      lightVector=-lightVector;\
      nxDir = max(0.0, dot(norm, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation * 0.7;\
    }\
    else\
    {\
      nxDir = max(0.0, dot(norm, lightVector));\
      diffuse = vec4(uDiffuseVal) * nxDir * uAttenuation;\
    }\
    \
    if(nxDir != 0.0)\
    {\
      vec3 halfVector =  normalize(lightVector);\
      float nxHalf = max(0.0, dot(norm, halfVector));\
      specularPower = pow(nxHalf, uShininessVal);\
    }\
    specular = vec4(uSpecularVal) * specularPower * uAttenuation;\
    if(diffuse.r == 0.0)\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal) + diffuse * vec4(baseColor.rgb, 1.0)) + specular);\
    else\
      gl_FragColor = uGlobalBrightness*((vec4(uAmbientVal) + diffuse * vec4(baseColor.rgb, 1.0/diffuse.r)) + specular);\
  }\
';var zc='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vNormal;\
  \
  void main(void)\
  {\
    vNormal = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
    gl_Position = gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var QN='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uDiffuseColor;\
  uniform vec4 uPhongColor;\
  uniform float uEdge;\
  uniform float uPhong;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vNormal;\
  \
  void main (void)\
  {\
    vec3 color = uDiffuseColor.xyz;\
    float f = dot(vec3(0,0,1),vNormal);\
    if (abs(f) < uEdge)\
      color = vec3(0);\
    if (f > uPhong)\
      color = uPhongColor.xyz;\
    gl_FragColor = uGlobalBrightness*(vec4(color, 1.0));\
  }\
';var yi='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uPMatrix;\
  uniform vec4 uLight0;\
  uniform vec4 uLight1;\
  uniform vec4 uLight2;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3  vNormal;\
  varying vec3  vLight1;\
  varying vec3  vLight2;\
  varying vec3  vLight3;\
  varying vec3  vView;\
  \
  void main(void)\
  {\
    vec4 view_position = uMVInvMatrix * vec4(0,0,0,1);\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vNormal = aVertexNormal;\
    vView = normalize(view_position.xyz - aVertexPosition);\
    vLight1 = normalize(uLight0.xyz - aVertexPosition);\
    vLight2 = normalize(uLight1.xyz - aVertexPosition);\
    vLight3 = normalize(uLight2.xyz - aVertexPosition);\
    \
  }\
';var c8='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uOutline;\
  uniform vec4 uBaseColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3  vNormal;\
  varying vec3  vLight1;\
  varying vec3  vLight2;\
  varying vec3  vLight3;\
  varying vec3  vView;\
  \
  void main(void)\
  {\
    vec3 norm = normalize (vNormal);\
    vec2 texCoord = vec2(1.0 - dot (norm, normalize(vView)), 0.5);\
    vec3 outline = texture2D(uOutline, texCoord).xyz;\
    float lighting = (dot (normalize (vLight1), norm) * 0.5 + 0.5) +\
                     (dot (normalize (vLight2), norm) * 0.5 + 0.5) +\
                     (dot (normalize (vLight3), norm) * 0.5 + 0.5);\
    gl_FragColor = uGlobalBrightness*(vec4(outline,1.0) * vec4(lighting) * uBaseColor);\
    gl_FragColor.a = 1.0;\
  }\
';var kG='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uPMatrix;\
  uniform vec3 uLightPos;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying float vNdotL;\
  varying vec3  vReflectVec;\
  varying vec3  vViewVec;\
  \
  void main(void)\
  {\
    vec3 ecPos      = vec3 (uMVMatrix * vec4(aVertexPosition, 1.0));\
    vec3 tnorm = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
    vec3 lightVec   = normalize(uLightPos - ecPos);\
    vReflectVec      = normalize(reflect(-lightVec, tnorm));\
    vViewVec         = normalize(-ecPos);\
    vNdotL           = (dot(lightVec, tnorm) + 1.0) * 0.5;\
    gl_Position     = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var wB='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4  uSurfaceColor;\
  uniform vec4  uWarmColor;\
  uniform vec4  uCoolColor;\
  uniform float uDiffuseWarm;\
  uniform float uDiffuseCool;\
  uniform float uGlobalBrightness;\
  \
  varying float vNdotL;\
  varying vec3  vReflectVec;\
  varying vec3  vViewVec;\
  \
  void main (void)\
  {\
    vec3 kCool    = min(uCoolColor.rgb + uDiffuseCool * uSurfaceColor.rgb, 1.0);\
    vec3 kWarm    = min(uWarmColor.rgb + uDiffuseWarm * uSurfaceColor.rgb, 1.0);\
    vec3 kFinal   = mix(kCool, kWarm, vNdotL);\
    vec3 nReflect = normalize(vReflectVec);\
    vec3 nView    = normalize(vViewVec);\
    float spec    = max(dot(nReflect, nView), 0.0);\
    spec          = pow(spec, 32.0);\
    gl_FragColor = uGlobalBrightness*(vec4 (min(kFinal + spec, 1.0), 1.0));\
  }\
';var yd='\n\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  void main(void)\
  {\
     gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
  }\
';var bV='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uColor1;\
  \
  void main (void)\
  {\
     gl_FragColor = uColor1;\
  }\
';var ZB='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uScale;\
  uniform vec3 uLightPos;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vScaledPosition;\
  varying vec3 vNormalES;\
  varying vec3 vViewVec;\
  varying vec3 vLightDir;\
  \
  void main(void)\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vLightDir=   normalize(uLightPos); \
    vScaledPosition = uScale * aVertexPosition.xyz;\
    vNormalES       = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
    vViewVec        = - vec3(uMVMatrix * vec4(aVertexPosition, 1.0));\
  }\
';var Pa='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uKd;\
  uniform float uKs;\
  uniform vec4  uDarkWood;\
  uniform vec4  uLiteWood;\
  uniform float uFrequency;\
  uniform float uNoiseScale;\
  uniform float uRingScale;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vScaledPosition;\
  varying vec3 vNormalES;\
  varying vec3 vViewVec;\
  varying vec3 vLightDir;\
  varying vec3 vLightvec;'+RJ+'\
  \
  void main(void)\
  {\
    float snoise = 2.0 * noiseTexture2D(uNoise, vScaledPosition).x - 1.0;\
    \
    float ring = fract(uFrequency * vScaledPosition.z + uNoiseScale * snoise);\
    ring *= 4.0 * (1.0 - ring);\
    \
    float lrp = pow(ring, uRingScale) + snoise;\
    vec4  base = mix(uDarkWood, uLiteWood, lrp);\
    \
    vec3 normal = normalize(vNormalES);\
    float diffuse = 0.5 + 0.5 * dot(vLightDir, normal);\
    float specular = pow(clamp(dot(reflect(-normalize(vViewVec), normal), vLightDir),0.0, 1.0), 12.0);\
    gl_FragColor = uGlobalBrightness*((uKd * diffuse * base + uKs * specular)*1.5);\
    gl_FragColor.a = 1.0;\
  }\
';var pf='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uSize;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3  vPosition;\
  varying vec3  vPositionES;\
  varying vec3  vNormalES;\
  \
  void main(void)\
  {\
    float noise_frequency = 4.0 / uSize;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition = aVertexPosition * noise_frequency;\
    vPositionES   = (uMVMatrix * vec4(aVertexPosition, 1.0)).xyz;\
    vNormalES     = (uNMatrix * vec4(aVertexNormal, 1.0)).xyz;\
  }\
';var YO='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4  uLightColor;\
  uniform float uRough;\
  uniform vec4  uKs;\
  uniform vec4  uKa;\
  uniform vec4  uKd;\
  uniform float uNoiseAmp;\
  uniform vec3  uLightPos;\
  uniform vec4  uGlobAmb;\
  uniform sampler2D uMarbleSpline;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vPosition;\
  varying vec3 vPositionES;\
  varying vec3 vNormalES;'+RJ+'\
  \
  vec3 snoise(vec3 x)\
  {\
    return 2.0 * noiseTexture2D(uNoise, x).xyz - 1.0;\
  }\
  vec4 soft_diffuse(vec3 Neye, vec3 Peye)\
  {\
    vec3 Leye = normalize(uLightPos - Peye);\
    float NdotL = dot(Neye, Leye) * 0.5 + 0.5;\
    return vec4(NdotL);\
  }\
  vec4 specular(vec3 NNeye, vec3 Peye, float k)\
  {\
    vec3 Leye = normalize(uLightPos - Peye);\
    vec3 Veye = -(normalize(Peye));\
    vec3 Heye = normalize(Leye + Veye);\
    float NdotH = clamp(dot(NNeye, Heye), 0.0, 1.0);\
    return vec4(pow(NdotH, 64.0));\
  }\
  \
  void main(void)\
  {\
    float marble = -2.0 * snoise(vPosition).x + 0.75;\
    vec3 NNeye = normalize(vNormalES.xyz);\
    vec2 texCoord = vec2(marble*uNoiseAmp, 0.5);\
    vec4 Ct = texture2D (uMarbleSpline, texCoord);\
    vec4 Ci = Ct * (uKa * uGlobAmb + uKd * soft_diffuse(NNeye, vPositionES)) + Ct.w * uKs * specular(NNeye.xyz, vPositionES.xyz, uRough);\
    gl_FragColor = uGlobalBrightness*(Ci * uLightColor);\
    gl_FragColor.a = 1.0;\
  }\
';var UX='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uSize;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3  vPosition;\
  varying vec3  vPositionES;\
  varying vec3  vNormalES;\
  \
  void main(void)\
  {\
    float noise_frequency = 7.0 / uSize;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition = aVertexPosition * noise_frequency;\
    vPositionES = (uMVMatrix * vec4(aVertexPosition, 1.0)).xyz;\
    vNormalES = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
  }\
';var Lu='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uGraniteColor;\
  uniform vec4 uLightColor;\
  uniform vec4 uKa;\
  uniform vec4 uKd;\
  uniform vec3 uLightPos;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vPosition;\
  varying vec3 vPositionES;\
  varying vec3 vNormalES;'+RJ+'\
  \
  vec4 noise (vec3 x)\
  {\
    return noiseTexture2D(uNoise, x);\
  }\
  \
  vec4 diffuse(vec3 Neye, vec3 Peye)\
  {\
    vec3 Leye = normalize(uLightPos - Peye);\
    float NdotL = dot(Neye, Leye);\
    return vec4(NdotL);\
  }\
  \
  vec4 specular(vec3 NNeye, vec3 Peye)\
  {\
    vec3 Leye = normalize(uLightPos - Peye);\
    vec3 Veye = -(normalize(Peye));\
    vec3 Heye = normalize(Leye + Veye);\
    float NdotH = clamp(dot(NNeye, Heye), 0.0, 1.0);\
    return vec4(pow(NdotH, 64.0));\
  }\
  \
  void main(void)\
  {\
    gl_FragColor = uGlobalBrightness*(abs(0.8-noise(vPosition)) * uGraniteColor * uLightColor * (uKa + uKd * diffuse(normalize(vNormalES), vPositionES)));\
    gl_FragColor.a = 1.0;\
  }\
';var iv='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uSize;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vPosition;\
  varying vec3 vPositionES;\
  varying vec3 vNormalES;\
  \
  void main(void)\
  {\
    float noise_frequency = 6.0 / uSize;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition = aVertexPosition * noise_frequency;\
    vPositionES = (uMVMatrix * vec4(aVertexPosition, 1.0)).xyz;\
    vNormalES = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
  }\
';var zj='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4  uLightColor;\
  uniform vec4  uKa;\
  uniform vec4  uKd;\
  uniform float uNoiseAmp;\
  uniform vec3  uLightPos;\
  uniform vec4  uGlobAmb;\
  uniform float uGlobalBrightness;\
  \
  uniform sampler2D uStrataSpline;\
  uniform sampler2D uNoise;\
  \
  varying vec3 vPosition;\
  varying vec3 vPositionES;\
  varying vec3 vNormalES;'+RJ+'\
  \
  vec3 snoise (vec3 x)\
  {\
    return 2.0 * noiseTexture2D(uNoise, x).xyz - 1.0;\
  }\
  vec4 soft_diffuse(vec3 Neye, vec3 Peye)\
  {\
    vec3 Leye = (uLightPos - Peye) / length(uLightPos - Peye);\
    float NdotL = dot(Neye, Leye) * 0.5 + 0.5;\
    return vec4(NdotL);\
  }\
  \
  void main(void)\
  {\
    vec2 cmap;\
    cmap.x = vPosition.z + uNoiseAmp * 0.1 * snoise(vPosition).x;\
    cmap.y = 0.5;\
    vec4 Ct = texture2D (uStrataSpline, cmap);\
    gl_FragColor = uGlobalBrightness*(uLightColor * Ct * (uKa * uGlobAmb + uKd * soft_diffuse(vNormalES, vPositionES)));\
    gl_FragColor.a = 1.0;\
  }\
';var Vy='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uScale;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vPosition;\
  varying vec3 vNormal;\
  varying vec3 vViewVec;\
  \
  void main(void)\
  {\
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition = vec3(aVertexPosition * uScale);\
    vNormal = (uNMatrix * vec4(aVertexNormal, 1.0)).xyz;\
    vViewVec = -vec3(uMVMatrix * vec4(aVertexPosition, 1.0));\
  }\
';var bA='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uSheen;\
  uniform float uNoiseScale;\
  uniform float uFurriness;\
  uniform vec3 uLightDir;\
  uniform vec4 uColor;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vPosition;\
  varying vec3 vNormal;\
  varying vec3 vViewVec;'+RJ+'\
  \
  float pattern(vec3 pos, float freq)\
  {\
    vec3 fp = fract(pos * freq);\
    fp *= (1.0 - fp);\
    return dot(fp, vec3(1.0, 1.0, 1.0));\
  }\
  \
  void main(void)\
  {\
    vec3 pos = vPosition;\
    float noisy = 2.0 * noiseTexture2D(uNoise, pos).x - 1.0;\
    float patt = 0.0;\
    float freq = 1.47;\
    float scale = 0.5;\
    \
    {\
      patt += pattern(pos + vec3(uNoiseScale) * noisy, freq) * scale;\
      freq *= 2.0;\
      scale *= 0.7;\
    }\
    \
    {\
     patt += pattern(pos + vec3(uNoiseScale) * noisy, freq) * scale;\
     freq *= 2.0;\
     scale *= 0.7;\
    }\
    \
    float diffuse = 0.5 * (1.0 + dot(vNormal, vec3(uLightDir.x, uLightDir.y, -uLightDir.z)));\
    float cosView = clamp(dot(normalize(vViewVec), vNormal), 0.0, 1.0);\
    float shine = pow(1.0 - cosView * cosView, uFurriness);\
    \
    gl_FragColor = uGlobalBrightness*((patt * uColor  + uSheen * shine) * diffuse);\
    gl_FragColor.a = 1.0;\
  }\
';var uB='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vPosition;\
  varying vec3 vNormal;\
  \
  void main(void)\
  {\
    vec4 vFinalPosition = vec4( aVertexPosition.x, aVertexPosition.y, aVertexPosition.z, 1.0);\
    gl_Position = uPMatrix  * uMVMatrix * vFinalPosition;\
    vPosition   = vec3(vFinalPosition);\
    vNormal = (uNMatrix * vec4(aVertexNormal, 1.0)).xyz;\
  }\
';var Y1='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform float uPatternRate;\
  uniform float uNoiseRate;\
  uniform float uNoiseScale;\
  uniform vec4 uColor;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vPosition;\
  varying vec3 vNormal;'+RJ+'\
  \
  void main(void)\
  {\
    vec2 noisy;\
    noisy.x = noiseTexture2D(uNoise, uNoiseRate * vPosition).x;\
    noisy.y = noiseTexture2D(uNoise, uNoiseRate * vPosition + 0.5).x;\
    float diffuse = 0.3 + 0.5 * dot(vNormal.xy, vNormal.xy);\
    vec2 fp = fract(uPatternRate * vPosition.xy + uNoiseScale * (2.0 * noisy - 1.0));\
    fp *= (1.0 - fp);\
    gl_FragColor = uGlobalBrightness*(uColor * (fp.x + fp.y + noisy.x) * diffuse);\
    gl_FragColor.a = 1.0;\
  }\
';var DF='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uSize;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3  vScaledPosition;\
  varying vec3  vViewVec;\
  varying vec3  vNormalES;\
  \
  void main(void)\
  {\
    float scale =1.5/uSize;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vScaledPosition = aVertexPosition * scale;\
    vViewVec  = (uMVMatrix * vec4(aVertexPosition, 1.0)).xyz;\
    vViewVec.z *=-1.0;\
    vNormalES = (uNMatrix * vec4(aVertexNormal, 1.0)).xyz;\
  }\
';var Q9='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uColor;\
  uniform vec3 uLightDir;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3  vScaledPosition;\
  varying vec3  vViewVec;\
  varying vec3  vNormalES;'+RJ+'\
  \
  void main(void)\
  {\
    float noisy = noiseTexture2D(uNoise, vScaledPosition).x;\
    float marble = (0.2 + 5.0 * abs(noisy - 0.5));\
    vec3 normal = normalize(vNormalES);\
    float diffuse = 0.5 * dot(uLightDir, normal) + 0.5;\
    float specular = pow(clamp(dot(reflect(-normalize(vViewVec), normal), uLightDir), 0.0, 1.0), 24.0);\
    float Ks = clamp(1.1 - 1.3 * marble, 0.0, 1.0);\
    gl_FragColor = uGlobalBrightness*(diffuse * marble * uColor + Ks * specular);\
    gl_FragColor.a = 1.0;\
  }\
';var Hf='\n\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform float uSize;\
  uniform mat4 uLVMatrix;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3  vPosition;\
  varying vec3  vPositionES;\
  varying vec3  vNormalES;\
  \
  void main(void)\
  {\
    float noise_frequency = 4.0 / uSize;\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vPosition = aVertexPosition * noise_frequency;\
    vPositionES = vec3(uMVMatrix * vec4(aVertexPosition, 1.0));\
    vNormalES = normalize((uNMatrix * vec4(aVertexNormal, 1.0)).xyz);\
  }\
';var p7='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform vec4 uBaseColor;\
  uniform vec4 uVeinColor;\
  uniform float uSharpness;\
  uniform float uVeinFrequency;\
  uniform vec4  uKs;\
  uniform vec4  uKa;\
  uniform vec4  uKd;\
  uniform float uNoiseAmp;\
  uniform vec3  uLightPos;\
  uniform vec4  uGlobAmb;\
  uniform sampler2D uNoise;\
  uniform float uGlobalBrightness;\
  \
  varying vec3  vPosition;\
  varying vec3  vPositionES;\
  varying vec3  vNormalES;'+RJ+'\
  \
  vec3 snoise (vec3 x)\
  {\
    return 2.0 * noiseTexture2D(uNoise, x).xyz - 1.0;\
  }\
  \
  vec3 noise_gen (vec3 x)\
  {\
    return noiseTexture2D(uNoise, x).xyz;\
  }\
  \
  vec4 soft_diffuse(vec3 Neye, vec3 Peye)\
  {\
    vec3 Leye = (uLightPos - Peye) / length(uLightPos - Peye);\
    float NdotL = dot(Neye, Leye) * 0.5 + 0.5;\
    return vec4(NdotL);\
  }\
  \
  vec4 specular(vec3 NNeye, vec3 Peye)\
  {\
    vec3 Leye = normalize(uLightPos - Peye);\
    vec3 Veye = -(normalize(Peye));\
    vec3 Heye = normalize(Leye + Veye);\
    float NdotH = clamp(dot(NNeye, Heye), 0.0, 1.0);\
    return vec4(pow(NdotH, 64.0));\
  }\
  \
  void main(void)\
  {\
    float i, turb, freq, j, turbsum;\
    vec3 PP = vPosition + uNoiseAmp * noise_gen(vPosition);\
    turbsum = 0.0;\
    freq = 1.0;\
    PP *= uVeinFrequency;\
    \
    {\
      turb = abs (snoise (PP).x);\
      turb = pow (smoothstep (0.8, 1.0, 1.0 - turb), uSharpness)/ freq;\
      turbsum += (1.0-turbsum) * turb;\
      freq *= 3.0;\
      PP *= 3.0;\
      \
      turb = abs(snoise(PP).x);\
      turb = pow(smoothstep(0.8, 1.0, 1.0 - turb), uSharpness) / freq;\
      turbsum += (1.0-turbsum) * turb;\
      freq *= 3.0;\
      PP *= 3.0;\
    }\
    vec4 Ct = mix (uBaseColor, uVeinColor, turbsum);\
    gl_FragColor = uGlobalBrightness*((Ct * ( uKa * uGlobAmb + uKd * soft_diffuse(vNormalES, vPositionES)) + uKs * specular(normalize(vNormalES), vPositionES)));\
    gl_FragColor.a = 1.0;\
  }\
';var Kd='\n\
  attribute vec3 aBinormalPosition;\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  attribute vec3 aTangentPosition;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform vec3  uLightPos;\
  uniform float uBumpiness;\
  uniform int uUseFixedLightPos;\
  \
  varying vec3 vLightvec;\
  varying vec3 vNormal;\
  varying vec2 vTextureCoord;\
  varying float vBumpiness;\
  \
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    if(uBumpiness == 0.0)\
    {\
      vNormal = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
      vTextureCoord = aTextureCoord;\
      \
      if(uUseFixedLightPos == 0)\
        vLightvec = normalize(uLightPos);\
      else\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uLVMatrix).xyz;\
      \
    }\
    else\
    {\
      vNormal = vec3(0.0,0.0,1.0);\
      vTextureCoord = aTextureCoord;\
      mat3 TBNMatrix = mat3(aTangentPosition.xyz, aBinormalPosition, aVertexNormal);\
      \
      if(uUseFixedLightPos == 0)\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uMVMatrix).xyz;\
      else\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uLVMatrix * uMVMatrix).xyz;\
      \
      vLightvec *=TBNMatrix;\
    }\
    vBumpiness=uBumpiness;\
  }\
';var wq='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uBaseTexture;\
  uniform sampler2D uNormalMap;\
  uniform float uTransparency;\
  uniform float uShininessVal;\
  uniform vec4 uDiffuseColor;\
  uniform vec4 uAmbientColor;\
  uniform vec4 uSpecularColor;\
  uniform float uTextureScale;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vLightvec;\
  varying vec3 vNormal;\
  varying vec2 vTextureCoord;\
  varying float vBumpiness;\
  \
  void main()\
  {\
    float texScale = uTextureScale;\
    vec2 t = vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale);\
    vec3 n;\
    vec3 l;\
    float nDotL;\
    float nDotH;\
    float backViewChk = max(0.0, dot(vNormal, vLightvec));\
    \
    if(vBumpiness == 0.0)\
    {\
      n = normalize(vNormal);\
      if(backViewChk == 0.0)\
      {\
        l = normalize(-vLightvec);\
        nDotL = max(0.0, dot(n, normalize(l)))*0.7;\
        vec3 h = normalize(-vLightvec);\
        nDotH = max(0.0, dot(vNormal, h));\
      }\
      else\
      {\
        l = normalize(vLightvec);\
        nDotL = max(0.0, dot(n, l));\
        vec3 h = normalize(vLightvec);\
        nDotH = max(0.0, dot(vNormal, h));\
      }\
    }\
    else\
    {\
      n = texture2D(uNormalMap, t).rgb;\
      vec3 smoothVal = vec3(0.5, 0.5, 1.0);\
      n = mix( smoothVal, n, vBumpiness);\
      n = normalize( ( n * 2.0 )  - 1.0);\
      if(backViewChk == 0.0)\
      {\
        l = normalize(-vLightvec);\
        nDotL = max(0.0, dot(n, l))*0.7;\
        vec3 h = normalize(-vLightvec);\
        nDotH = max(0.0, dot(n, h));\
      }\
      else\
      {\
        l = normalize(vLightvec);\
        nDotL = max(0.0, dot(n, l));\
        vec3 h = normalize(vLightvec);\
        nDotH = max(0.0, dot(n, h));\
      }\
    }\
    float power = (nDotL == 0.0) ? 0.0 : pow(nDotH, uShininessVal*0.128);\
    \
    vec4 ambient = uAmbientColor;\
    vec4 diffuse = uDiffuseColor * nDotL;\
    vec4 specular = uSpecularColor * power;\
    if(backViewChk == 0.0)\
    {\
      specular = vec4(0.0,0.0,0.0,0.0);\
    }\
    vec4 color = ambient + diffuse + specular;\
    \
    gl_FragColor = uGlobalBrightness * (color * texture2D(uBaseTexture, t));\
    gl_FragColor.a = 1.0 - uTransparency;\
  }\
';var sV='\n\
  attribute vec3 aBinormalPosition;\
  attribute vec3 aVertexNormal;\
  attribute vec3 aVertexPosition;\
  attribute vec2 aTextureCoord;\
  attribute vec3 aTangentPosition;\
  uniform mat4 uMVInvMatrix;\
  uniform mat4 uMVMatrix;\
  uniform mat4 uPMatrix;\
  uniform mat4 uNMatrix;\
  uniform mat4 uLVMatrix;\
  uniform vec3  uLightPos;\
  uniform float uBumpiness;\
  \
  varying vec3 vLightvec;\
  varying vec3 vNormal;\
  varying vec2 vTextureCoord;\
  varying float vBumpiness;\
  uniform int uUseFixedLightPos;\
  \
  void main()\
  {\
    gl_Position = uPMatrix  * uMVMatrix * vec4(aVertexPosition, 1.0);\
    if(uBumpiness == 0.0)\
    {\
      vNormal = normalize((uNMatrix * vec4(aVertexNormal,1.0)).xyz);\
      vTextureCoord = aTextureCoord;\
      \
      if(uUseFixedLightPos == 0)\
        vLightvec = normalize(uLightPos);\
      else\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uLVMatrix).xyz;\
    }\
    else\
    {\
      vNormal = vec3(0.0,0.0,1.0);\
      vTextureCoord = aTextureCoord;\
      mat3 TBNMatrix = mat3(aTangentPosition.xyz, aBinormalPosition, aVertexNormal);\
      \
      if(uUseFixedLightPos == 0)\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uMVMatrix).xyz;\
      else\
        vLightvec = (vec4(normalize(uLightPos),1.0) * uLVMatrix * uMVMatrix).xyz;\
      \
      vLightvec *=TBNMatrix;\
    }\
    vBumpiness=uBumpiness;\
  }\
';var zq='\n\
  #ifdef GL_ES\n\
    precision highp float;\n\
  #endif\n\
  uniform sampler2D uBaseTexture;\
  uniform sampler2D uNormalMap;\
  uniform float uTransparency;\
  uniform float uShininessVal;\
  uniform vec4 uDiffuseColor;\
  uniform vec4 uAmbientColor;\
  uniform vec4 uSpecularColor;\
  uniform float uGlobalBrightness;\
  \
  varying vec3 vLightvec;\
  varying vec3 vNormal;\
  varying vec2 vTextureCoord;\
  varying float vBumpiness;\
  \
  void main()\
  {\
    float texScale = 1.0;\
    vec2 t = vec2(vTextureCoord.s / texScale, vTextureCoord.t / texScale);\
    vec3 n;\
    vec3 l;\
    float nDotL;\
    float nDotH;\
    float backViewChk = max(0.0, dot(vNormal, vLightvec));\
    \
    if(vBumpiness == 0.0)\
    {\
      n = normalize(vNormal);\
      if(backViewChk == 0.0)\
      {\
        l = normalize(-vLightvec);\
        nDotL = max(0.0, dot(n, l))*0.7;\
        vec3 h = normalize(-vLightvec);\
        nDotH = max(0.0, dot(vNormal, h));\
      }\
      else\
      {\
        l = normalize(vLightvec);\
        nDotL = max(0.0, dot(n, l));\
        vec3 h = normalize(vLightvec);\
        nDotH = max(0.0, dot(vNormal, h));\
      }\
    }\
    else\
    {\
      n = texture2D(uNormalMap, t).rgb;\
      vec3 smoothVal = vec3(0.5, 0.5, 1.0);\
      n = mix( smoothVal, n, 1.0 );\
      n = normalize( ( n * 2.0 )  - 1.0);\
      if(backViewChk == 0.0)\
      {\
        l = normalize(-vLightvec);\
        nDotL = max(0.0, dot(n, l))*0.7;\
        vec3 h = normalize(-vLightvec);\
        nDotH = max(0.0, dot(n, h));\
      }\
      else\
      {\
        l = normalize(vLightvec);\
        nDotL = max(0.0, dot(n, l));\
        vec3 h = normalize(vLightvec);\
        nDotH = max(0.0, dot(n, h));\
      }\
    }\
    float power = (nDotL == 0.0) ? 0.0 : pow(nDotH, uShininessVal*0.128);\
    \
    vec4 ambient = uAmbientColor;\
    vec4 diffuse = uDiffuseColor * nDotL;\
    vec4 specular = uSpecularColor * power;\
    if(backViewChk == 0.0)\
    {\
      specular = vec4(0.0,0.0,0.0,1.0);\
    }\
    vec4 color = ambient + diffuse + specular;\
    \
    gl_FragColor = uGlobalBrightness*(color * texture2D(uBaseTexture, t));\
    gl_FragColor.a = 1.0 - uTransparency;\
  }\
';
