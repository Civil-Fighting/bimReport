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
"\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(JJ) {
        window.setTimeout(JJ, 1000 / 60);
    };
})();
window.cancelAnimationFrame = (function() {
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(id) {
        clearTimeout(id);
    };
})();
var mt = function() {
    this.zm = "";
    this.c1 = null;
    this.Rb = null;
    this.tK = null;
    this.E6 = null;
    this.qi = null;
    this.ti = null;
    this.U9 = null;
    this.OK = null;
    this.tX = null;
    this.yK = null;
    this.sj = null;
    this.R2 = null;
    this.a7 = null;
    this.wS = null;
    this.jk = null;
    this.hY = null;
    this.l3 = null;
    this.zG = null;
    this.Kc = null;
    this.IT = false;
    this.Yv = null;
};
var CmiAnimation = function(B, aI, Mi) {
    var BB = "\x63\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74";
    var q = null;
    var Dc = "\x6e\x6f\x4e\x61\x6d\x65";
    var et = new Array();
    var DT = et;
    var KH = null;
    var l = null;
    var cA = 60;
    var j = 0;
    var Iq = 0;
    var Xu = 0;
    var ao = 0;
    var Mz = null;
    var qZ = null;
    var K6 = null;
    var Np;
    var vP = 0;
    var Za = 0;
    var Ii = false;
    var qm = false;
    var d4 = 0;
    if (B) q = B;
    else return;
    var KH = q.getCanvas();
    if (aI) cA = aI;
    if (Mi) Dc = Mi;
    this.P8 = function() {
        return BB;
    };
    this.getAnimationName = function() {
        return Dc;
    };
    var uZ = function() {
        K6 = requestAnimFrame(uZ);
        q.drawScene();
    };
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x61\x6e\x44\x65\x66") {
            if (jsonObject.anNm) Dc = jsonObject.anNm;
            if (jsonObject.anFps) cA = jsonObject.anFps;
            if (jsonObject.anStps) {
                var jAS = null;
                var Rq = jsonObject.anStps;
                var b2 = new Array();
                for (var G = 0; G < Rq.length; G++) {
                    jAS = Rq[G];
                    switch (jAS.clNm) {
                        case "\x61\x6e\x48\x65\x41\x6e\x44\x6c\x74\x61\x43\x68":
                            if ((jAS.ang) && (jAS.stps)) this.addHeadupAngleDltaChange(jAS.ang, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x68\x65\x61\x64\x75\x70\x20\x61\x6e\x67\x6c\x65\x20\x63\x68\x61\x6e\x67\x65\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x48\x65\x41\x6e\x41\x62\x73\x43\x68":
                            if ((jAS.ang) && (jAS.stps)) this.addHeadupAngleAbsChange(jAS.ang, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x68\x65\x61\x64\x75\x70\x20\x61\x6e\x67\x6c\x65\x20\x63\x68\x61\x6e\x67\x65\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x63\x52\x6f\x74":
                            if ((jAS.org) && (jAS.ang) && (jAS.stps)) this.addSceneRotation(jAS.org[0], jAS.org[1], jAS.org[2], jAS.ang[0], jAS.ang[1], jAS.ang[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x63\x65\x6e\x65\x20\x72\x6f\x74\x61\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x63\x52\x6f\x74\x56\x77\x72":
                            if ((jAS.ang) && (jAS.stps)) this.addSceneRotationAroundViewerPos(jAS.ang[0], jAS.ang[1], jAS.ang[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x63\x65\x6e\x65\x20\x72\x6f\x74\x61\x74\x69\x6f\x6e\x20\x61\x72\x6f\x75\x6e\x64\x20\x76\x69\x65\x77\x65\x72\x20\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x63\x54\x72":
                            if ((jAS.dst) && (jAS.stps)) this.addSceneTranslation(jAS.dst[0], jAS.dst[1], jAS.dst[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x63\x65\x6e\x65\x20\x74\x72\x61\x6e\x73\x6c\x61\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x63\x54\x72\x56\x77\x72":
                            if ((jAS.dst) && (jAS.stps)) this.addSceneTranslationFromViewerPos(jAS.dst[0], jAS.dst[1], jAS.dst[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x63\x65\x6e\x65\x20\x74\x72\x61\x6e\x73\x6c\x61\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x4d\x76\x56\x77\x54\x67\x74\x50\x6f\x73":
                            if ((jAS.pos) && (jAS.stps)) this.addMoveViewerToTargetPos(jAS.pos[0], jAS.pos[1], jAS.pos[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x6d\x6f\x76\x65\x20\x76\x69\x65\x77\x65\x72\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x4d\x76\x56\x77\x54\x67\x74\x4c\x6f\x63":
                            if ((jAS.enm) && (jAS.stps)) this.addMoveViewerToTargetLocatorByName(jAS.enm, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x6d\x6f\x76\x65\x20\x76\x69\x65\x77\x65\x72\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x63\x5a\x6f":
                            if ((jAS.fct) && (jAS.stps)) this.addSceneZoom(jAS.fct, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x63\x65\x6e\x65\x20\x7a\x6f\x6f\x6d\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x68\x56\x69":
                            if ((jAS.vnm) && (jAS.stps)) this.addShowView(jAS.vnm, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x68\x6f\x77\x20\x76\x69\x65\x77\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x50\x73\x65":
                            if (jAS.wt) this.addPause(jAS.wt);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x70\x61\x75\x73\x65\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x52\x6f\x74":
                            if ((jAS.enm) && (jAS.org) && (jAS.ang) && (jAS.stps)) this.addEntityRotationByNames(jAS.enm, jAS.org[0], jAS.org[1], jAS.org[2], jAS.ang[0], jAS.ang[1], jAS.ang[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x72\x6f\x74\x61\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x54\x72":
                            if ((jAS.enm) && (jAS.dst) && (jAS.stps)) this.addEntityTranslationByNames(jAS.enm, jAS.dst[0], jAS.dst[1], jAS.dst[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x74\x72\x61\x6e\x73\x6c\x61\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x50\x6f\x73":
                            if ((jAS.enm) && (jAS.pos) && (jAS.stps)) this.addEntityPositioningByName(jAS.enm, jAS.pos[0], jAS.pos[1], jAS.pos[2], jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x55\x6e\x50\x6f\x73":
                            if ((jAS.enm) && (jAS.stps)) this.addEntityUnPositioningByNames(jAS.enm, jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x75\x6e\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x42\x6c":
                            if ((jAS.enm) && (jAS.col) && (jAS.stps) && (jAS.wt)) this.addEntityBlinkingByNames(jAS.enm, jAS.col, jAS.stps, jAS.wt);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x62\x6c\x69\x6e\x6b\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x43\x6f\x6c":
                            if ((jAS.enm) && (jAS.col)) this.addEntityColorSettingByNames(jAS.enm, jAS.col);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x63\x6f\x6c\x6f\x72\x20\x73\x65\x74\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x45\x6e\x55\x6e\x43\x6f\x6c":
                            if ((jAS.enm)) this.addEntityColorResetByNames(jAS.enm);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x63\x6f\x6c\x6f\x72\x20\x72\x65\x73\x65\x74\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x65\x71\x53\x74":
                            if (jAS.stps) this.addSequenceStart(jAS.stps);
                            else q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x73\x65\x71\x75\x65\x6e\x63\x65\x20\x73\x74\x61\x72\x74\x20\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                            break;
                        case "\x61\x6e\x53\x65\x71\x45\x6e\x64":
                            this.addSequenceEnd();
                            break;
                    };
                };
            }
            return 0;
        } else {
            q.s("\x43\x6d\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.addHeadupAngleDltaChange = function(vV, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x68\x61\x64\x63";
        U.c1 = vV;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var ga = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var Al = q.getHeadUpAngle4FirstPersonView();
            q.setHeadUpAngle4FirstPersonView(Al + l.yK);
            Xu++;
        }
    };
    this.addHeadupAngleAbsChange = function(e7, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x68\x61\x61\x63";
        U.c1 = e7;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var LI = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var a9 = q.getHeadUpAngle4FirstPersonView();
            q.setHeadUpAngle4FirstPersonView(a9 + l.yK);
            Xu++;
        }
    };
    this.addSceneRotation = function(vx, pn, Ri, Ks, yE, oN, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x72";
        U.c1 = vx;
        U.Rb = pn;
        U.tK = Ri;
        U.E6 = Ks;
        U.qi = yE;
        U.ti = oN;
        U.U9 = OT;
        DT.push(U);
        return 0;
    };
    var CD = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.JK(l.yK, l.sj, l.R2, l.a7, l.wS, l.jk);
            Xu++;
        }
    };
    this.addSceneRotationAroundViewerPos = function(Ks, yE, oN, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x72\x76";
        U.c1 = Ks;
        U.Rb = yE;
        U.tK = oN;
        U.E6 = OT;
        DT.push(U);
        return 0;
    };
    var Mm = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.OV(l.yK, l.sj, l.R2);
            Xu++;
        }
    };
    this.addSceneTranslation = function(L, P, O9, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x74";
        U.c1 = L;
        U.Rb = P;
        U.tK = O9;
        U.E6 = OT;
        DT.push(U);
        return 0;
    };
    var GY = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.QH(l.yK, l.sj, l.R2);
            Xu++;
        }
    };
    this.addSceneTranslationFromViewerPos = function(L, P, O9, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x74\x76";
        U.c1 = L;
        U.Rb = P;
        U.tK = O9;
        U.E6 = OT;
        DT.push(U);
        return 0;
    };
    var v8 = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.fN(l.yK, l.sj, l.R2);
            Xu++;
        }
    };
    this.addMoveViewerToTargetPos = function(Py, Hz, Dm, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x6d\x76\x74\x70";
        U.c1 = Py;
        U.Rb = Hz;
        U.tK = Dm;
        U.E6 = OT;
        DT.push(U);
        return 0;
    };
    var TK = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var i8 = q.getCurrentViewerPosition();
            var d1 = i8[0] - ((i8[0] - l.yK) / (l.E6 - Xu));
            var cR = i8[1] - ((i8[1] - l.sj) / (l.E6 - Xu));
            var oV = i8[2] - ((i8[2] - l.R2) / (l.E6 - Xu));
            q.moveViewerToModelPosition(d1, cR, oV);
            Xu++;
        }
    };
    this.addMoveViewerToTargetLocatorByName = function(HY, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x6d\x76\x74\x6c";
        U.c1 = HY;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var Lq = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var i8 = q.getCurrentViewerPosition();
            var d1 = i8[0] - ((i8[0] - l.yK) / (l.Rb - Xu));
            var cR = i8[1] - ((i8[1] - l.sj) / (l.Rb - Xu));
            var oV = i8[2] - ((i8[2] - l.R2) / (l.Rb - Xu));
            q.moveViewerToModelPosition(d1, cR, oV);
            if (!((l.hY == 0.0) && (l.l3 == 0.0) && (l.zG == 0.0))) {
                var D2 = l.a7 + l.hY * (Xu + 1);
                var s_ = l.wS + l.l3 * (Xu + 1);
                var wc = l.jk + l.zG * (Xu + 1);
                q.rotateViewerToModelAngles(D2, s_, wc);
            }
            Xu++;
        }
    };
    this.addSceneZoom = function(SX, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x7a";
        U.c1 = SX;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var KL = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.SC(l.yK);
            Xu++;
        }
    };
    this.addShowView = function(Bb, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x76";
        U.c1 = Bb;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var rJ = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            q.qE(Np);
            Xu++;
        }
    };
    this.addPause = function(SL) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x70\x73";
        U.c1 = SL;
        DT.push(U);
        return 0;
    };
    var dS = function() {
        if (Mz != null) clearInterval(Mz);
        Mz = null;
        if (K6 != null) cancelAnimationFrame(K6);
        K6 = null;
        if (ao < DT.length - 1) {
            ao++;
            iu();
            Ii = true;
        } else if ((vP < Za - 1) || (qm)) {
            vP++;
            ao = 0;
            iu();
            Ii = true;
        } else {
            Ii = false;
            var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
            q.sendCmiNotification(O);
        }
    };
    this.addEntityRotationByNames = function(Q4, vx, pn, Ri, Ks, yE, oN, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x72";
        U.c1 = Q4;
        U.Rb = vx;
        U.tK = pn;
        U.E6 = Ri;
        U.qi = Ks;
        U.ti = yE;
        U.U9 = oN;
        U.OK = OT;
        DT.push(U);
        return 0;
    };
    var pA = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            var W;
            for (G = 0; G < l.yK.length; G++) {
                W = l.yK[G].W;
                mat4.translate(W, [l.sj, l.R2, l.a7]);
                mat4.rotateX(W, l.wS * Math.PI / 180.0);
                mat4.rotateY(W, l.jk * Math.PI / 180.0);
                mat4.rotateZ(W, l.hY * Math.PI / 180.0);
                mat4.translate(W, [-l.sj, -l.R2, -l.a7]);
            }
            Xu++;
        }
    };
    this.addEntityTranslationByNames = function(Q4, L, P, O9, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x74";
        U.c1 = Q4;
        U.Rb = L;
        U.tK = P;
        U.E6 = O9;
        U.qi = OT;
        DT.push(U);
        return 0;
    };
    var UP = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            var W;
            for (G = 0; G < l.yK.length; G++) {
                W = l.yK[G].W;
                mat4.translate(W, [l.sj, l.R2, l.a7]);
            }
            Xu++;
        }
    };
    this.addEntityPositioningByName = function(entityName, Py, Hz, Dm, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x70";
        U.c1 = entityName;
        U.Rb = Py;
        U.tK = Hz;
        U.E6 = Dm;
        U.qi = OT;
        DT.push(U);
        return 0;
    };
    this.addEntityUnPositioningByNames = function(Q4, OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x75";
        U.c1 = Q4;
        U.Rb = OT;
        DT.push(U);
        return 0;
    };
    var Av = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            var Kk;
            var W;
            var Da;
            for (G = 0; G < l.yK.length; G++) {
                Da = l.yK[G];
                W = Da.W;
                W[0] = W[0] - Da.Wb[0];
                W[1] = W[1] - Da.Wb[1];
                W[2] = W[2] - Da.Wb[2];
                W[3] = W[3] - Da.Wb[3];
                W[4] = W[4] - Da.Wb[4];
                W[5] = W[5] - Da.Wb[5];
                W[6] = W[6] - Da.Wb[6];
                W[7] = W[7] - Da.Wb[7];
                W[8] = W[8] - Da.Wb[8];
                W[9] = W[9] - Da.Wb[9];
                W[10] = W[10] - Da.Wb[10];
                W[11] = W[11] - Da.Wb[11];
                W[12] = W[12] - Da.Wb[12];
                W[13] = W[13] - Da.Wb[13];
                W[14] = W[14] - Da.Wb[14];
                W[15] = W[15] - Da.Wb[15];
            }
            Xu++;
        }
    };
    this.addEntityBlinkingByNames = function(Q4, color, OT, pause) {
        var U;
        var G;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x62";
        U.c1 = Q4;
        U.Rb = color;
        U.tK = OT;
        U.E6 = pause;
        DT.push(U);
        return 0;
    };
    var Ax = function() {
        if (Xu >= j) {
            if (qZ != null) clearTimeout(qZ);
            qZ = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            for (G = 0; G < l.yK.length; G++) {
                l.yK[G].pk = true;
            }
            if (qZ != null) clearTimeout(qZ);
            qZ = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            qZ = setTimeout(wM, l.a7);
            K6 = requestAnimFrame(uZ);
        }
    };
    var wM = function() {
        if (qZ != null) clearTimeout(qZ);
        qZ = null;
        if (K6 != null) cancelAnimationFrame(K6);
        K6 = null;
        qZ = setTimeout(z6, l.a7);
    };
    var z6 = function() {
        var G;
        for (G = 0; G < l.yK.length; G++) {
            l.yK[G].pk = false;
        }
        if (qZ != null) clearTimeout(qZ);
        qZ = null;
        if (K6 != null) cancelAnimationFrame(K6);
        K6 = null;
        qZ = setTimeout(sq, l.a7);
        K6 = requestAnimFrame(uZ);
    };
    var sq = function() {
        if (qZ != null) clearTimeout(qZ);
        qZ = null;
        if (K6 != null) cancelAnimationFrame(K6);
        K6 = null;
        qZ = setTimeout(Ax, l.a7);
        Xu++;
    };
    this.addEntityColorSettingByNames = function(Q4, color) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x63\x73";
        U.c1 = Q4;
        U.Rb = color;
        DT.push(U);
        return 0;
    };
    var Gy = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            for (G = 0; G < l.yK.length; G++) {
                l.yK[G].pk = true;
            }
            Xu++;
        }
    };
    this.addEntityColorResetByNames = function(Q4) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x65\x63\x72";
        U.c1 = Q4;
        DT.push(U);
        return 0;
    };
    var Pl = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if ((vP < Za - 1) || (qm)) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G;
            for (G = 0; G < l.yK.length; G++) {
                l.yK[G].pk = false;
            }
            Xu++;
        }
    };
    this.addSequenceStart = function(OT) {
        var U;
        if (Ii) return -1;
        U = new mt();
        U.zm = "\x73\x73";
        U.c1 = OT;
        U.Kc = new Array();
        et.push(U);
        DT = U.Kc;
        return 0;
    };
    var Ae = function() {
        if (Xu >= j) {
            if (Mz != null) clearInterval(Mz);
            Mz = null;
            if (K6 != null) cancelAnimationFrame(K6);
            K6 = null;
            if (ao < DT.length - 1) {
                ao++;
                iu();
                Ii = true;
            } else if (vP < Za - 1) {
                vP++;
                ao = 0;
                iu();
                Ii = true;
            } else {
                Ii = false;
                var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x64\x65\x64";
                q.sendCmiNotification(O);
            };
        } else {
            var G, mw;
            var E4;
            var W;
            var Da;
            var i8;
            var Yq;
            var d1;
            var cR;
            var oV;
            var a9;
            var fj;
            var D2;
            var s_;
            var wc;
            for (G = 0; G < l.Kc.length; G++) {
                E4 = l.Kc[G];
                switch (E4.zm) {
                    case "\x68\x61\x64\x63":
                        a9 = q.getHeadUpAngle4FirstPersonView();
                        q.setHeadUpAngle4FirstPersonView(a9 + E4.yK);
                        break;
                    case "\x68\x61\x61\x63":
                        a9 = q.getHeadUpAngle4FirstPersonView();
                        q.setHeadUpAngle4FirstPersonView(a9 + E4.yK);
                        break;
                    case "\x73\x72":
                        q.JK(E4.yK, E4.sj, E4.R2, E4.a7, E4.wS, E4.jk);
                        break;
                    case "\x73\x72\x76":
                        q.OV(E4.yK, E4.sj, E4.R2);
                        break;
                    case "\x73\x74":
                        q.QH(E4.yK, E4.sj, E4.R2);
                        break;
                    case "\x73\x74\x76":
                        q.fN(E4.yK, E4.sj, E4.R2);
                        break;
                    case "\x6d\x76\x74\x70":
                        i8 = q.getCurrentViewerPosition();
                        d1 = i8[0] - ((i8[0] - E4.yK) / (E4.E6 - Xu));
                        cR = i8[1] - ((i8[1] - E4.sj) / (E4.E6 - Xu));
                        oV = i8[2] - ((i8[2] - E4.R2) / (E4.E6 - Xu));
                        q.moveViewerToModelPosition(d1, cR, oV);
                        break;
                    case "\x6d\x76\x74\x6c":
                        i8 = q.getCurrentViewerPosition();
                        d1 = i8[0] - ((i8[0] - E4.yK) / (E4.Rb - Xu));
                        cR = i8[1] - ((i8[1] - E4.sj) / (E4.Rb - Xu));
                        oV = i8[2] - ((i8[2] - E4.R2) / (E4.Rb - Xu));
                        q.moveViewerToModelPosition(d1, cR, oV);
                        if (!((E4.hY == 0.0) && (E4.l3 == 0.0) && (E4.zG == 0.0))) {
                            D2 = E4.a7 + E4.hY * (Xu + 1);
                            s_ = E4.wS + E4.l3 * (Xu + 1);
                            wc = E4.jk + E4.zG * (Xu + 1);
                            q.rotateViewerToModelAngles(D2, s_, wc);
                        }
                        break;
                    case "\x73\x7a":
                        q.SC(E4.yK);
                        break;
                    case "\x73\x76":
                        q.qE(Np);
                        break;
                    case "\x70\x73":
                        break;
                    case "\x65\x72":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            W = E4.yK[mw].W;
                            mat4.translate(W, [E4.sj, E4.R2, E4.a7]);
                            mat4.rotateX(W, E4.wS * Math.PI / 180.0);
                            mat4.rotateY(W, E4.jk * Math.PI / 180.0);
                            mat4.rotateZ(W, E4.hY * Math.PI / 180.0);
                            mat4.translate(W, [-E4.sj, -E4.R2, -E4.a7]);
                        }
                        break;
                    case "\x65\x74":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            W = E4.yK[mw].W;
                            mat4.translate(W, [E4.sj, E4.R2, E4.a7]);
                        }
                        break;
                    case "\x65\x70":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            W = E4.yK[mw].W;
                            mat4.translate(W, [E4.sj, E4.R2, E4.a7]);
                        }
                        break;
                    case "\x65\x75":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            Da = l.yK[mw];
                            W = Da.W;
                            W[0] = W[0] - Da.Wb[0];
                            W[1] = W[1] - Da.Wb[1];
                            W[2] = W[2] - Da.Wb[2];
                            W[3] = W[3] - Da.Wb[3];
                            W[4] = W[4] - Da.Wb[4];
                            W[5] = W[5] - Da.Wb[5];
                            W[6] = W[6] - Da.Wb[6];
                            W[7] = W[7] - Da.Wb[7];
                            W[8] = W[8] - Da.Wb[8];
                            W[9] = W[9] - Da.Wb[9];
                            W[10] = W[10] - Da.Wb[10];
                            W[11] = W[11] - Da.Wb[11];
                            W[12] = W[12] - Da.Wb[12];
                            W[13] = W[13] - Da.Wb[13];
                            W[14] = W[14] - Da.Wb[14];
                            W[15] = W[15] - Da.Wb[15];
                        }
                        break;
                    case "\x65\x62":
                        break;
                    case "\x65\x63\x73":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            E4.yK[mw].pk = true;
                        }
                        break;
                    case "\x65\x63\x72":
                        for (mw = 0; mw < E4.yK.length; mw++) {
                            E4.yK[mw].pk = false;
                        }
                        break;
                }
            }
            Xu++;
        }
    };
    this.addSequenceEnd = function() {
        var U;
        if (Ii) return -1;
        DT = et;
        return 0;
    };
    this.clearAnimation = function() {
        var G, mw;
        if (Ii) return -1;
        this.resetEntites(false);
        for (G = 0; G < et.length; G++) {
            if (et[G].Kc) {
                for (mw = 0; mw < et[G].Kc.length; mw++) {
                    l = et[G].Kc[mw];
                    et[G].Kc[mw] = null;
                };
            }
            l = et[G];
            et[G] = null;
        }
        et = new Array();
        DT = et;
        ao = 0;
        qZ = null;
        Mz = null;
        K6 = null;
        qm = false;
        q.drawScene();
        return 0;
    };
    this.resetEntites = function(B8) {
        var G, mw, xs;
        if (Ii) return -1;
        for (G = 0; G < et.length; G++) {
            if (et[G].Kc != null) {
                for (mw = 0; mw < et[G].Kc.length; mw++) {
                    l = et[G].Kc[mw];
                    switch (l.zm) {
                        case "\x65\x72":
                        case "\x65\x74":
                        case "\x65\x70":
                        case "\x65\x75":
                        case "\x65\x62":
                        case "\x65\x63\x73":
                        case "\x65\x63\x72":
                            if (l.yK != null) {
                                for (xs = 0; xs < l.yK.length; xs++) {
                                    l.yK[xs].W = null;
                                    l.yK[xs].Wb = null;
                                    l.yK[xs].uL = null;
                                    l.yK[xs].pk = false;
                                };
                            }
                            break;
                    };
                    l.IT = false;
                }
            }
            l = et[G];
            switch (l.zm) {
                case "\x65\x72":
                case "\x65\x74":
                case "\x65\x70":
                case "\x65\x75":
                case "\x65\x62":
                case "\x65\x63\x73":
                case "\x65\x63\x72":
                    if (l.yK != null) {
                        for (xs = 0; xs < l.yK.length; xs++) {
                            l.yK[xs].W = null;
                            l.yK[xs].Wb = null;
                            l.yK[xs].uL = null;
                            l.yK[xs].pk = false;
                        };
                    }
                    break;
            };
            l.IT = false;
        }
        if (B8) q.drawScene();
        return 0;
    };
    this.run = function(K7) {
        if (Ii) return -1;
        if ((et.length > 0) && (K7 > 0)) {
            var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x72\x74\x65\x64";
            q.sendCmiNotification(O);
            qm = false;
            ao = 0;
            d4 = 0;
            Za = K7;
            vP = 0;
            iu();
        }
        return 0;
    };
    this.runInLoop = function() {
        if (Ii) return -1;
        if (et.length > 0) {
            var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x72\x74\x65\x64";
            q.sendCmiNotification(O);
            qm = true;
            ao = 0;
            d4 = 0;
            Za = 0;
            vP = 0;
            iu();
        }
        return 0;
    };
    this.stopAnim = function() {
        qm = false;
        vP = Za;
        ao = 0;
        d4 = 0;
        if (Mz != null) clearInterval(Mz);
        if (qZ != null) clearTimeout(qZ);
        if (K6 != null) cancelAnimationFrame(K6);
        Mz = null;
        qZ = null;
        K6 = null;
        Ii = false;
        var O = "\x43\x4d\x49\x5f\x49\x4e\x46\x4f\x7c\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x6f\x70\x70\x65\x64";
        q.sendCmiNotification(O);
        return 0;
    };
    var eD = function(Y, Ox) {
        if (Y.IT) return;
        var G;
        var Kk;
        var E4;
        var entities;
        var Uv = null;
        var GI = null;
        switch (Y.zm) {
            case "\x73\x73":
                for (G = 0; G < Y.Kc.length; G++) {
                    E4 = Y.Kc[G];
                    if (!E4.IT) eD(E4, Ox);
                }
                break;
            case "\x68\x61\x64\x63":
                Y.yK = Y.c1 / Ox;
                break;
            case "\x68\x61\x61\x63":
                {
                    var a9 = q.getHeadUpAngle4FirstPersonView();Y.yK = (Y.c1 - a9) / Ox;
                    break;
                }
            case "\x73\x72":
                Y.yK = Y.c1;
                Y.sj = Y.Rb;
                Y.R2 = Y.tK;
                Y.a7 = Y.E6 / Ox;
                Y.wS = Y.qi / Ox;
                Y.jk = Y.ti / Ox;
                break;
            case "\x73\x72\x76":
                Y.yK = Y.c1 / Ox;
                Y.sj = Y.Rb / Ox;
                Y.R2 = Y.tK / Ox;
                break;
            case "\x73\x74":
                Y.yK = Y.c1 / Ox;
                Y.sj = Y.Rb / Ox;
                Y.R2 = Y.tK / Ox;
                break;
            case "\x73\x74\x76":
                Y.yK = Y.c1 / Ox;
                Y.sj = Y.Rb / Ox;
                Y.R2 = Y.tK / Ox;
                break;
            case "\x6d\x76\x74\x70":
                Y.yK = Y.c1;
                Y.sj = Y.Rb;
                Y.R2 = Y.tK;
                break;
            case "\x6d\x76\x74\x6c":
                GI = q.getCmiModel();
                Uv = GI.getEntityByName(Y.c1);
                if (Uv != null) {
                    var l2 = Uv.lt;
                    var Y9 = Uv.hP;
                    var a9 = q.LJ();
                    var YA = q.qQ(a9[0], a9[1], a9[2]);
                    var D2 = (Y9[0] - YA[0]);
                    var s_ = (Y9[1] - YA[1]);
                    var wc = (Y9[2] - YA[2]);
                    if (D2 > 180.0) D2 = D2 - 360.0;
                    else if (D2 < -180.0) D2 = D2 + 360;
                    if (s_ > 180.0) s_ = s_ - 360.0;
                    else if (s_ < -180.0) s_ = s_ + 360;
                    if (wc > 180.0) wc = wc - 360.0;
                    else if (wc < -180.0) wc = wc + 360;
                    Y.yK = l2[0];
                    Y.sj = l2[1];
                    Y.R2 = l2[2];
                    Y.a7 = YA[0];
                    Y.wS = YA[1];
                    Y.jk = YA[2];
                    Y.hY = D2 / Ox;
                    Y.l3 = s_ / Ox;
                    Y.zG = wc / Ox;
                } else {
                    var i8 = q.getCurrentViewerPosition();
                    Y.yK = i8[0];
                    Y.sj = i8[1];
                    Y.R2 = i8[2];
                    Y.a7 = 0.0;
                    Y.wS = 0.0;
                    Y.jk = 0.0;
                }
                break;
            case "\x73\x7a":
                Y.yK = Y.c1 * q.ZT / 10;
                break;
            case "\x73\x76":
                Y.yK = Y.c1;
                break;
            case "\x70\x73":
                Y.yK = Y.c1;
                break;
            case "\x65\x72":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                entities = Y.yK;
                Y.sj = Y.Rb;
                Y.R2 = Y.tK;
                Y.a7 = Y.E6;
                Y.wS = Y.qi / Ox;
                Y.jk = Y.ti / Ox;
                Y.hY = Y.U9 / Ox;
                for (G = 0; G < entities.length; G++) {
                    if (entities[G].W == null) {
                        entities[G].W = new mat4.create();
                        mat4.identity(entities[G].W);
                    };
                }
                break;
            case "\x65\x74":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                entities = Y.yK;
                Y.sj = Y.Rb / Ox;
                Y.R2 = Y.tK / Ox;
                Y.a7 = Y.E6 / Ox;
                for (G = 0; G < entities.length; G++) {
                    if (entities[G].W == null) {
                        entities[G].W = new mat4.create();
                        mat4.identity(entities[G].W);
                    };
                }
                break;
            case "\x65\x70":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames([Y.c1]);
                entities = Y.yK;
                for (G = 0; G < entities.length; G++) {
                    if (entities[G].W == null) {
                        entities[G].W = new mat4.create();
                        mat4.identity(entities[G].W);
                    }
                    Kk = entities[G].qd();
                }
                Y.sj = (Y.Rb - Kk[0]) / Ox;
                Y.R2 = (Y.tK - Kk[1]) / Ox;
                Y.a7 = (Y.E6 - Kk[2]) / Ox;
                break;
            case "\x65\x75":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                entities = Y.yK;
                for (G = 0; G < entities.length; G++) {
                    if (entities[G].W == null) {
                        entities[G].W = new mat4.create();
                        mat4.identity(entities[G].W);
                    }
                    if (entities[G].Wb == null) entities[G].Wb = new mat4.create();
                    entities[G].Wb[0] = (entities[G].W[0] - 1.0) / Ox;
                    entities[G].Wb[1] = entities[G].W[1] / Ox;
                    entities[G].Wb[2] = entities[G].W[2] / Ox;
                    entities[G].Wb[3] = entities[G].W[3] / Ox;
                    entities[G].Wb[4] = entities[G].W[4] / Ox;
                    entities[G].Wb[5] = (entities[G].W[5] - 1.0) / Ox;
                    entities[G].Wb[6] = entities[G].W[6] / Ox;
                    entities[G].Wb[7] = entities[G].W[7] / Ox;
                    entities[G].Wb[8] = entities[G].W[8] / Ox;
                    entities[G].Wb[9] = entities[G].W[9] / Ox;
                    entities[G].Wb[10] = (entities[G].W[10] - 1.0) / Ox;
                    entities[G].Wb[11] = entities[G].W[11] / Ox;
                    entities[G].Wb[12] = entities[G].W[12] / Ox;
                    entities[G].Wb[13] = entities[G].W[13] / Ox;
                    entities[G].Wb[14] = entities[G].W[14] / Ox;
                    entities[G].Wb[15] = (entities[G].W[15] - 1.0) / Ox;
                }
                break;
            case "\x65\x62":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                entities = Y.yK;
                Y.sj = Y.Rb;
                Y.R2 = Y.tK;
                Y.a7 = Y.E6 * 1000;
                for (G = 0; G < Y.yK.length; G++) {
                    if (Y.yK[G].uL == null) {
                        entities[G].uL = new Array([entities[G].color[0], entities[G].color[1], entities[G].color[2]]);
                    }
                    if (Y.sj[0]) entities[G].uL[0] = Y.sj[0];
                    if (Y.sj[1]) entities[G].uL[1] = Y.sj[1];
                    if (Y.sj[2]) entities[G].uL[2] = Y.sj[2];
                    if (Y.sj[3]) entities[G].uL[3] = Y.sj[3];
                }
                break;
            case "\x65\x63\x73":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                entities = Y.yK;
                Y.sj = Y.Rb;
                for (G = 0; G < entities.length; G++) {
                    if (entities[G].uL == null) {
                        entities[G].uL = new Array([entities[G].color[0], entities[G].color[1], entities[G].color[2], entities[G].color[3]]);
                    }
                    if (Y.sj[0]) entities[G].uL[0] = Y.sj[0];
                    if (Y.sj[1]) entities[G].uL[1] = Y.sj[1];
                    if (Y.sj[2]) entities[G].uL[2] = Y.sj[2];
                    if (Y.sj[3]) entities[G].uL[3] = Y.sj[3];
                }
                break;
            case "\x65\x63\x72":
                GI = q.getCmiModel();
                Y.yK = GI.getEntitiesByNames(Y.c1);
                break;
        };
        Y.IT = true;
    };
    var iu = function() {
        var ia = 0.0;
        var g8 = 0.0;
        l = DT[ao];
        switch (l.zm) {
            case "\x73\x73":
                j = l.c1;
                if (!l.IT) eD(l, 1);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Ae, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x68\x61\x64\x63":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(ga, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x68\x61\x61\x63":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(LI, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x72":
                j = l.U9;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(CD, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x72\x76":
                j = l.E6;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Mm, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x74":
                j = l.E6;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(GY, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x74\x76":
                j = l.E6;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(v8, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x6d\x76\x74\x70":
                j = l.E6;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(TK, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x6d\x76\x74\x6c":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Lq, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x7a":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(KL, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x73\x76":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                Np = q.jQ(l.yK);
                Np[0] = Np[0] / j;
                Np[1] = Np[1] / j;
                Np[2] = Np[2] / j;
                Np[3] = Np[3] / j;
                Np[4] = Np[4] / j;
                Np[5] = Np[5] / j;
                Np[6] = Np[6] / j;
                Np[7] = Np[7] / j;
                Np[8] = Np[8] / j;
                Np[9] = Np[9] / j;
                Np[10] = Np[10] / j;
                Np[11] = Np[11] / j;
                Np[12] = Np[12] / j;
                Np[13] = Np[13] / j;
                Np[14] = Np[14] / j;
                Np[15] = Np[15] / j;
                Np[16] = Np[16] / j;
                Np[17] = Np[17] / j;
                Np[18] = Np[18] / j;
                Np[19] = Np[19] / j;
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(rJ, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x70\x73":
                j = 1;
                if (!l.IT) eD(l, j);
                g8 = l.yK;
                ia = (g8 * 1000);
                Mz = setInterval(dS, ia);
                break;
            case "\x65\x72":
                j = l.OK;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(pA, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x65\x74":
                j = l.qi;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(UP, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x65\x70":
                j = l.qi;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(UP, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x65\x75":
                j = l.Rb;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Av, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x65\x62":
                j = l.tK;
                if (!l.IT) eD(l, j);
                Xu = 0;
                qZ = setTimeout(Ax, 0.0);
                break;
            case "\x65\x63\x73":
                j = 1;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Gy, ia);
                K6 = requestAnimFrame(uZ);
                break;
            case "\x65\x63\x72":
                j = 1;
                if (!l.IT) eD(l, j);
                g8 = j / cA;
                ia = (g8 * 1000) / j;
                Xu = 0;
                Mz = setInterval(Pl, ia);
                K6 = requestAnimFrame(uZ);
                break;
        };
    };
};