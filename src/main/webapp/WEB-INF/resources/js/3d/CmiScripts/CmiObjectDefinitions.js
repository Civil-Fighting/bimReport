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
var cq = function(L, P, Cb, ID, l9, Bg) {
    this.h5 = L;
    this.Wt = P;
    this.Sm = Cb;
    this.ag = ID;
    this.wj = l9;
    this.Xc = Bg;
    this.GF = this.h5 / this.Sm;
};
var cw = function(B, w9) {
    this.v = B;
    this.h = B.f7();
    this.qr = w9;
    this.XY = false;
    this.zV = false;
    this.PL = null;
    this.loaded = false;
    this.C5 = null;
    this.at = false;
    this.xE = 1.0;
    this.PG = function() {
        this.XY = true;
        this.loaded = false;
        this.v.Z6(false, this);
    };
    this.LC = function(lz, YJ, flipY) {
        var N = this.h;
        this.xE = lz.width / lz.height;
        this.at = flipY;
        this.v.Z6(true, this);
        this.PL = N.createTexture();
        N.bindTexture(N.TEXTURE_2D, this.PL);
        N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_S, N.REPEAT);
        N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_T, N.REPEAT);
        var Ix = Math.log(lz.width) / Math.LN2;
        var TM = Math.log(lz.height) / Math.LN2;
        if ((Ix > parseInt(Ix)) || (TM > parseInt(TM))) {
            var canvas = document.createElement("\x63\x61\x6e\x76\x61\x73");
            canvas.width = Math.pow(2, parseInt(Ix));
            canvas.height = Math.pow(2, parseInt(TM));
            var Jv = canvas.getContext("\x32\x64");
            Jv.drawImage(lz, 0, 0, canvas.width, canvas.height);
            lz = canvas;
        }
        N.bindTexture(N.TEXTURE_2D, this.PL);
        if (this.at) N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, true);
        else N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, false);
        try {
            N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, N.RGBA, N.UNSIGNED_BYTE, lz);
        } catch (J) {
            this.loaded = false;
            this.XY = true;
            this.v.Z6(false, this);
            this.v.s(J.name, "\x3c\x61\x20\x68\x72\x65\x66\x3d\x27\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77\x2e\x77\x65\x62\x67\x6c\x2d\x70\x75\x62\x6c\x69\x73\x68\x65\x72\x2e\x63\x6f\x6d\x2f\x41\x63\x63\x65\x73\x73\x45\x72\x72\x6f\x72\x73\x45\x6e\x2e\x68\x74\x6d\x6c\x27\x20\x74\x61\x72\x67\x65\x74\x3d\x27\x5f\x62\x6c\x61\x6e\x6b\x27\x20\x73\x74\x79\x6c\x65\x3d\x27\x63\x6f\x6c\x6f\x72\x3a\x23\x46\x46\x46\x46\x30\x30\x3b\x27\x3e" + J.message + "\x3c\x2f\x61\x3e", "\x53\x54\x44\x5f\x45\x52\x52\x52\x4f\x52");
            return;
        }
        if (YJ == true) {
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR_MIPMAP_LINEAR);
            N.generateMipmap(N.TEXTURE_2D);
        } else {
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
            N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR);
        }
        this.v.Z6(false, this);
        this.C5 = lz;
        this.loaded = true;
    };
    this.ma = function(Rp, YJ, flipY) {
        var w8;
        this.at = flipY;
        this.v.Z6(true, this);
        w8 = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, w8);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.REPEAT);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.REPEAT);
        var lz = new Image();
        CmiHelpers.addEventListener(lz, "\x65\x72\x72\x6f\x72", this.PG, this);
        lz.onload = function(Uo, lz, Kf, YJ) {
            return function() {
                var N = Kf.h;
                Kf.xE = lz.width / lz.height;
                var Ix = Math.log(lz.width) / Math.LN2;
                var TM = Math.log(lz.height) / Math.LN2;
                if ((Ix > parseInt(Ix)) || (TM > parseInt(TM))) {
                    var canvas = document.createElement("\x63\x61\x6e\x76\x61\x73");
                    canvas.width = Math.pow(2, parseInt(Ix));
                    canvas.height = Math.pow(2, parseInt(TM));
                    var Jv = canvas.getContext("\x32\x64");
                    Jv.drawImage(lz, 0, 0, canvas.width, canvas.height);
                    lz = canvas;
                }
                N.bindTexture(N.TEXTURE_2D, Uo);
                if (Kf.at) N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, true);
                else N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, false);
                try {
                    N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, N.RGBA, N.UNSIGNED_BYTE, lz);
                } catch (J) {
                    Kf.loaded = false;
                    Kf.XY = true;
                    Kf.v.Z6(false, this);
                    Kf.v.s(J.name, "\x3c\x61\x20\x68\x72\x65\x66\x3d\x27\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77\x2e\x77\x65\x62\x67\x6c\x2d\x70\x75\x62\x6c\x69\x73\x68\x65\x72\x2e\x63\x6f\x6d\x2f\x41\x63\x63\x65\x73\x73\x45\x72\x72\x6f\x72\x73\x45\x6e\x2e\x68\x74\x6d\x6c\x27\x20\x74\x61\x72\x67\x65\x74\x3d\x27\x5f\x62\x6c\x61\x6e\x6b\x27\x20\x73\x74\x79\x6c\x65\x3d\x27\x63\x6f\x6c\x6f\x72\x3a\x23\x46\x46\x46\x46\x30\x30\x3b\x27\x3e" + J.message + "\x3c\x2f\x61\x3e", "\x53\x54\x44\x5f\x45\x52\x52\x52\x4f\x52");
                    return;
                }
                if (YJ == true) {
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR_MIPMAP_LINEAR);
                    N.generateMipmap(N.TEXTURE_2D);
                } else {
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.LINEAR);
                    N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.LINEAR);
                }
                Kf.loaded = true;
                Kf.v.Z6(false, Kf);
                Kf.C5 = lz;
            };
        }(w8, lz, this, YJ);
        try {
            lz.src = Rp;
        } catch (J) {
            Kf.loaded = false;
            Kf.XY = true;
            Kf.v.Z6(false, this);
            Kf.v.s(J.name, J.message, "\x53\x54\x44\x5f\x45\x52\x52\x52\x4f\x52");
        }
        this.PL = w8;
    };
    this.W3 = function(_f, flipY) {
        var gJ;
        this.at = flipY;
        gJ = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_CUBE_MAP, gJ);
        this.h.texParameteri(this.h.TEXTURE_CUBE_MAP, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_CUBE_MAP, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_CUBE_MAP, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_CUBE_MAP, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        var f4 = [
            [_f[0], this.h.TEXTURE_CUBE_MAP_POSITIVE_X],
            [_f[1], this.h.TEXTURE_CUBE_MAP_NEGATIVE_X],
            [_f[2], this.h.TEXTURE_CUBE_MAP_POSITIVE_Y],
            [_f[3], this.h.TEXTURE_CUBE_MAP_NEGATIVE_Y],
            [_f[4], this.h.TEXTURE_CUBE_MAP_POSITIVE_Z],
            [_f[5], this.h.TEXTURE_CUBE_MAP_NEGATIVE_Z]
        ];
        for (var G = 0; G < f4.length; G++) {
            var face = f4[G][1];
            var lz = new Image();
            lz.onload = function(Uo, face, lz, Kf) {
                return function() {
                    var N = Kf.h;
                    N.bindTexture(N.TEXTURE_CUBE_MAP, Uo);
                    if (Kf.at) N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, true);
                    else N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, false);
                    try {
                        N.texImage2D(face, 0, N.RGBA, N.RGBA, N.UNSIGNED_BYTE, lz);
                    } catch (J) {
                        Kf.loaded = false;
                        Kf.XY = true;
                        Kf.v.Z6(false, this);
                        Kf.v.s(J.name, J.message, "\x53\x54\x44\x5f\x45\x52\x52\x52\x4f\x52");
                        return;
                    }
                };
            }(gJ, face, lz, this);
            CmiHelpers.addEventListener(lz, "\x65\x72\x72\x6f\x72", this.PG, this);
            lz.src = f4[G][0];
        }
        this.PL = gJ;
        this.loaded = true;
    };
};
var Ht = function() {
    var d7 = [];
    this.create = function(length, defaultValue) {
        d7 = new Array(parseInt(length));
        if (defaultValue) {
            for (var G = 0; G < length; G++) d7[G] = defaultValue;
        }
    };
    this.SA = function(pos, content) {
        if ((pos < 0) || (pos > d7.length)) return -1;
        d7[pos] = content;
    };
    this.create = function(length) {
        d7 = new Array(parseInt(length));
    };
    this.append = function(DL) {
        d7.push(DL);
        return this;
    };
    this.toString = function(length) {
        if (length) {
            var ks = d7.join("");
            return ks.substr(0, length);
        } else return d7.join("");
    };
};
var zh = function(B) {
    var BB = "\x63\x6d\x69\x41\x6a\x61\x78\x52\x65\x73\x70\x6f\x6e\x73\x65"; //cmiAjaxResponse
    var q = B;
    this.P8 = function() {
        return BB;
    };
    this.responseValue = "";
    this.errorCode = "";
    this.cmiData = "";
    this.Uf = function(jsonObject) {
        if (jsonObject.cmiClassName == "\x63\x6d\x69\x41\x6a\x61\x78\x52\x65\x73\x70\x6f\x6e\x73\x65") { //cmiAjaxResponse
            if (jsonObject.responseValue) this.responseValue = jsonObject.responseValue;
            if (jsonObject.errorCode) this.errorCode = jsonObject.errorCode;
            if (jsonObject.cmiData) this.cmiData = jsonObject.cmiData;
            return 0;
        } else {
            q.s("\x43\x6d\x69\x41\x6a\x61\x78\x52\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
};
var wd = function() {
    var BB = "\x63\x6d\x69\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4c\x69\x73\x74\x45\x6e\x74\x72\x79"; //cmiSelectionListEntry
    this.Hk = new Array(0.0, 0.0, 0.0, 1.0);
    this.Y8 = new Array(0, 0, 0, 255);
    this.uM = "";
    this.pM = null;
    this.V1 = false;
    this.P8 = function() {
        return BB;
    };
};
var CmiLayerObject = function(rU) {
    var BB = "\x63\x6d\x69\x4c\x61\x79\x65\x72\x4f\x62\x6a\x65\x63\x74";
    var NR = rU;
    this.P8 = function() {
        return BB;
    };
    this.FI = function() {
        return NR;
    };
    this.contentVisible = true;
    this.contentHighlighted = false;
    this.Rk = 0;
    this.entityName = rU;
    this.yT = false;
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x6c\x41\x79") {
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.lNm) NR = jsonObject.lNm;
            if (!(typeof jsonObject.cVi === "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64")) this.contentVisible = jsonObject.cVi;
        } else {
            this.v.s("\x43\x6d\x69\x4c\x61\x79\x65\x72\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
};
var CmiBaseObject = function() {
    this.color = new Array(0.4, 0.4, 0.4, 1.0);
    this.Rk = 0;
    this.entityName = "";
    this.u7 = "";
    this.PF = "";
    this.v = null;
    this.Yz = false;
    this.GJ = null;
    this.isHighlighted = false;
    this.c_ = true;
    this.yZ = -1;
    this.shaderObject = null;
    this.h = null;
    this.Ck = null;
    this.lx = null;
    this.d0 = null;
    this.W = null;
    this.Wb = null;
    this.uL = null;
    this.pk = false;
    this.yT = false;
    this.bC = "";
    this.Oj = null;
    this.isComponentObject = false;
    this.size = 0.0;
    this.bn = 0.0;
    this.cT = new Array(0.0, 0.0, 0.0);
    var oQ = null;
    var Cu = new Array(0.0, 0.0, 0.0);
    var ui = new Array(0.0, 0.0, 0.0);
    var sS = new Array(0.0, 0.0, 0.0);
    var PU = new Array(0.0, 0.0, 0.0);
    var FM = null;
    var Lm = null;
    var eb = new Array(0, 0, 0, 0);
    var iV = null;
    var CA = null;
    var fM = null;
    var Hd = 0.0;
    var tQ = new Array(0.0, 0.0, 0.0);
    var yf = 0.0;
    var eB = 0.0;
    var OQ = null;
    this.ue = function() {
        return this.Ck;
    };
    this.yt = function(visible) {
        this.c_ = visible;
    };
    this.aj = function(rU) {
        var CN = this.v.getCmiModel();
        this.Ck = CN.ue(rU);
    };
    this.QR = function() {
        var T2 = new Array();
        var Qm;
        var HC;
        var uM = "";
        T2.push(this.entityName);
        Qm = this.GJ;
        if (Qm != null) HC = this.GJ.uR;
        while ((Qm != null) && (HC != null)) {
            T2.push(HC.entityName);
            Qm = HC.GJ;
            if (Qm != null) HC = Qm.uR;
        }
        uM = uM + T2.pop();
        while (T2.length > 0) {
            uM = uM + "\x2e" + T2.pop();
        }
        return uM;
    };
    this.gR = function() {
        if ((this.pk) && (this.uL != null)) return this.uL;
        else if (this.isHighlighted == true) return this.v.hlColIni;
        else if ((this.Ck != null) && (this.Ck.contentHighlighted == true)) return this.v.hlColIni;
        else {
            var Qm = null;
            var HC = null;
            Qm = this.GJ;
            if (Qm != null) HC = this.GJ.uR;
            while ((Qm != null) && (HC != null)) {
                if ((HC.pk) && (HC.uL != null)) return HC.uL;
                else if (HC.isHighlighted == true) return this.v.hlColIni;
                else {
                    Qm = HC.GJ;
                    if (Qm != null) HC = Qm.uR;
                }
            }
        }
        if (this.v.ownColor == true) return this.color;
        else {
            var Qm = null;
            var HC = null;
            Qm = this.GJ;
            if (Qm != null) HC = this.GJ.uR;
            if (HC != null) return this.GJ.uR.color;
            else return this.color;
        }
    };
    this.m_ = function() {
        return this.v.getCmiModel().LL;
    };
    this.lB = function(BA) {
        if (this.yZ == 10) {
            if ((this.c_ == true) && (this.v.showModelLocators == true)) {
                if (this.v.currentModelTemplateCategory == 0) return true;
                for (var G = 0; G < this.np.length; G++) {
                    if ((this.v.currentModelTemplateCategory == this.np[G]) || (this.np[G] == 0)) return true;
                };
            }
            return false;
        }
        if (this.c_ == false) return false;
        else if ((this.Ck != null) && (this.Ck.contentVisible == false)) return false;
        else {
            var Qm;
            var HC;
            Qm = this.GJ;
            if (Qm != null) HC = this.GJ.uR;
            while ((Qm != null) && (HC != null)) {
                if (HC.c_ == false) return false;
                else {
                    Qm = HC.GJ;
                    if (Qm != null) HC = Qm.uR;
                }
            }
        }
        return true;
    };
    this.Pw = function(useViewportCulling) {
        if (this.size > 0.0) {
            if ((this.v.useSizeCulling == true) || (useViewportCulling == true)) {
                if (this.v.useSizeCulling == true) {
                    if (this.size < this.v.minGeoSizeToDisplay) return false;
                    if ((this.v.isOrthoView == true) && (this.size < this.v.kA)) return false;
                }
                if (useViewportCulling == true) {
                    FM = this.v.Yy();
                    this.v.Gk(this.cT, this.bn);
                    if ((this.v.getFirstPersonViewState() == true) && (this.v.useBackPlaneCulling == true)) {
                        if (OQ == null) OQ = new mat4.create();
                        if ((this.yT == true) || (this.isComponentObject == true)) {
                            mat4.identity(OQ);
                            mat4.multiply(OQ, this.v.M0);
                            mat4.multiply(OQ, FM);
                            mat4.multiplyVec3(OQ, this.v.pU, Cu);
                            oQ = Cu;
                        } else {
                            oQ = this.v.pU;
                        }
                        fM = this.v.CK();
                        CA = this.v.getCurrentViewerPosition();
                        Hd = CmiHelpers.b8(CA, oQ);
                        yf = 1 / Hd;
                        tQ[0] = oQ[0] - CA[0];
                        tQ[1] = oQ[1] - CA[1];
                        tQ[2] = oQ[2] - CA[2];
                        tQ[0] *= yf;
                        tQ[1] *= yf;
                        tQ[2] *= yf;
                        yf = fM[0] * tQ[0] + fM[1] * tQ[1] + fM[2] * tQ[2];
                        eB = Math.acos(yf);
                        if (eB > 1.570) {
                            return false;
                        };
                    }
                    Lm = this.v.vN();
                    eb[2] = this.v.getCanvas().width;
                    eb[3] = this.v.getCanvas().height;
                    GLU.project(this.v.pU[0], this.v.pU[1], this.v.pU[2], FM, Lm, eb, ui);
                    sS[0] = ui[0];
                    sS[1] = ui[1];
                    PU[0] = ui[0];
                    PU[1] = ui[1];
                    GLU.project(this.v.e2[0], this.v.e2[1], this.v.e2[2], FM, Lm, eb, ui);
                    sS[0] = Math.min(sS[0], ui[0]);
                    PU[0] = Math.max(PU[0], ui[0]);
                    sS[1] = Math.min(sS[1], ui[1]);
                    PU[1] = Math.max(PU[1], ui[1]);
                    GLU.project(this.v.fe[0], this.v.fe[1], this.v.fe[2], FM, Lm, eb, ui);
                    sS[0] = Math.min(sS[0], ui[0]);
                    PU[0] = Math.max(PU[0], ui[0]);
                    sS[1] = Math.min(sS[1], ui[1]);
                    PU[1] = Math.max(PU[1], ui[1]);
                    GLU.project(this.v.PS[0], this.v.PS[1], this.v.PS[2], FM, Lm, eb, ui);
                    sS[0] = Math.min(sS[0], ui[0]);
                    PU[0] = Math.max(PU[0], ui[0]);
                    sS[1] = Math.min(sS[1], ui[1]);
                    PU[1] = Math.max(PU[1], ui[1]);
                    GLU.project(this.v.HX[0], this.v.HX[1], this.v.HX[2], FM, Lm, eb, ui);
                    sS[0] = Math.min(sS[0], ui[0]);
                    PU[0] = Math.max(PU[0], ui[0]);
                    sS[1] = Math.min(sS[1], ui[1]);
                    PU[1] = Math.max(PU[1], ui[1]);
                    GLU.project(this.v.ke[0], this.v.ke[1], this.v.ke[2], FM, Lm, eb, ui);
                    sS[0] = Math.min(sS[0], ui[0]);
                    PU[0] = Math.max(PU[0], ui[0]);
                    sS[1] = Math.min(sS[1], ui[1]);
                    PU[1] = Math.max(PU[1], ui[1]);
                    if (this.v.useSizeCulling == true) {
                        if ((Math.abs(sS[0] - PU[0]) < this.v.minSizeToDisplay) && (Math.abs(sS[1] - PU[1]) < this.v.minSizeToDisplay)) return false;
                    }
                    if (PU[1] < 0) return false;
                    if (sS[1] > eb[3]) return false;
                    if (sS[0] > eb[2]) return false;
                    if (PU[0] < 0) return false;
                }
            }
            return true;
        } else {
            return false;
        }
    };
};
var CmiGrepObject = function(B) {
    var BB = "\x63\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array();
    var Ep = new Float32Array();
    var Gi = new Float32Array();
    var x8 = new Float32Array();
    var YB = new Float32Array();
    var ta = new Uint32Array();
    var Zr = new Float32Array();
    var LM = new Float32Array();
    var df = new Float32Array();
    var Uj = new Uint16Array();
    var C7 = new Uint32Array();
    var Fx = null;
    var ck = null;
    var Nk = null;
    var q9 = null;
    var gW = null;
    var Ja = null;
    var Ar = 0;
    var mx = null;
    var HR = false;
    var xM = null;
    var jZ = null;
    var lX = null;
    var Vn = null;
    var nK = null;
    var bi = null;
    var p8 = false;
    var Ss = false;
    var fT = false;
    var CB = false;
    var uG = null;
    var rR = null;
    var gC = null;
    var VQ = null;
    var zK = null;
    var dk = null;
    var _i = false;
    var xT = false;
    var Tz = false;
    var e0 = false;
    var Ul = null;
    var Wi = -1.0;
    var MN = false;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    var h2 = null;
    var hb = null;
    this.P8 = function() {
        return BB;
    };
    this.Qb = function() {
        return jZ;
    };
    this.wA = function() {
        return Vn;
    };
    this.gB = function() {
        return bi;
    };
    this.N4 = function() {
        return Ar;
    };
    this.gj = function() {
        return CB;
    };
    this.HN = function(qr) {
        jZ = this.v.WA(qr);
        if (jZ != null) {
            xM = qr;
            p8 = true;
        }
    };
    this.aM = function(qr) {
        Vn = this.v.WA(qr);
        if (Vn != null) {
            lX = qr;
            Ss = true;
        }
    };
    this.oR = function(qr) {
        bi = this.v.WA(qr);
        if (bi != null) {
            nK = qr;
            if (qr == "\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70") CB = true;
            else CB = false;
            fT = true;
        }
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 19;
    this.setShader = function(xl) {
        if (!xl) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x73\x68\x61\x64\x65\x72\x20\x67\x69\x76\x65\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (xl.usable == false) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x53\x68\x61\x64\x65\x72\x20\x6e\x6f\x74\x20\x75\x73\x61\x62\x6c\x65", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        switch (xl.zx) {
            case "\x53\x6b\x79\x42\x6f\x78": //SkyBox
            case "\x42\x67\x49\x6d\x61\x67\x65": //BgImage
                jZ = xl.xp();
                p8 = true;
                break;
            case "\x54\x65\x78\x74\x75\x72\x65\x33\x44": //Texture3D
                if (xM == null) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x61\x6d\x65\x20\x6e\x6f\x74\x20\x67\x69\x76\x65\x6e\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                jZ = this.v.WQ(xM);
                if (jZ == null) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + xM + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (jZ.XY) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + xM + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (Gi.length == 0) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x20\x67\x69\x76\x65\x6e\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                p8 = true;
                break;
            case "\x47\x65\x6e\x65\x72\x69\x63": //Generic
            case "\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70": //WavefrontBump
                if (Gi.length == 0) {
                // this.v.s("CmiGrepObject.setShader","No texture coordinates given (", this.QR() , ")", "SCRIPT_ERROR");
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x20\x67\x69\x76\x65\x6e\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (lX == null) {
                    lX = this.v.PN() + "\x2f\x47\x65\x6e\x65\x72\x69\x63\x54\x65\x78\x74\x75\x72\x65\x2e\x6a\x70\x67"; ///GenericTexture.jpg
                }
                Vn = this.v.WQ(lX);
                if (Vn == null) {
                    //this.v.s("CmiGrepObject.setShader","No texture found ", lX + "("+this.QR()+")", "SCRIPT_ERROR");
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + lX + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (Vn.XY) {
                    //this.v.s("CmiGrepObject.setShader",
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + lX + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (nK == null) {
                    nK = this.v.PN() + "\x2f\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70\x2e\x6a\x70\x67";
                    CB = true;
                } else if (nK.indexOf("\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70") != -1) {
                    CB = true;
                }
                bi = this.v.WQ(nK);
                if (bi == null) {
                    //this.v.s("/GenericBumpMap.jpg",
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + nK + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (bi.XY) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + nK + "\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if ((this.Oj != null) && (this.Oj.transparency != null)) {
                    Wi = this.color[3];
                    this.color[3] = 1.0 - parseFloat(this.Oj.transparency);
                }
                Ss = true;
                fT = true;
                break;
            case "\x47\x6c\x61\x73\x73":
                Wi = this.color[3];
                this.color[3] = 0.0;
                break;
            default:
                if (Wi != -1.0) {
                    this.color[3] = Wi;
                    Wi = -1.0;
                }
                break;
        };
        if (xl.gV == true) {
            var nk = 0;
            if (MN) {
                Tk(ta);
                MN = false;
            }
            if (C7.length == 0) {
                C7 = new Uint32Array(Ar * 3);
                for (var G = 0; G < Ar * 3; G++) {
                    C7[G] = G;
                };
            }
            nk = nG(C7);
            if (nk != 0) {
                HR = false;
                this.iN();
                this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x45\x72\x72\x6f\x72\x20\x64\x65\x66\x69\x6e\x69\x6e\x67\x20\x74\x61\x6e\x67\x65\x6e\x74\x20\x61\x72\x72\x61\x79\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            this.iN();
            HR = true;
        }
        this.shaderObject = xl;
        return 0;
    };
    this.PX = function(Qv) {
        uG = xM;
        rR = jZ;
        gC = lX;
        VQ = Vn;
        zK = nK;
        dk = bi;
        _i = p8;
        xT = Ss;
        Tz = fT;
        e0 = CB;
        hb = this.shaderObject;
        Ul = this.Oj;
        xM = Qv.qr;
        jZ = Qv.Uo;
        lX = Qv.nm;
        Vn = Qv.GB;
        nK = Qv.Rj;
        bi = Qv.normalMap;
        p8 = Qv.jW;
        Ss = Qv.zF;
        fT = Qv._x;
        CB = Qv.ZX;
        this.Oj = Qv.Oj;
        return (this.setShader(Qv.shaderObject));
    };
    this.Jk = function() {
        xM = uG;
        jZ = rR;
        lX = gC;
        Vn = VQ;
        nK = zK;
        bi = dk;
        p8 = _i;
        Ss = xT;
        fT = Tz;
        CB = e0;
        this.Oj = Ul;
        this.setShader(hb);
    };
    mx = this.v.getShader("\x43\x6f\x6c\x6f\x72\x33\x44");
    var nG = function(qu) {
        if ((Ep.length == 0) || (Gi.length == 0)) return -1;
        var j3 = C.length / 3;
        var e3 = new Float32Array(3);
        var TL = new Float32Array(3);
        var yh = new Float32Array(2);
        var o1 = new Float32Array(2);
        var oo = new Float32Array(3);
        var dU = new Float32Array(3);
        var cG = 0.0;
        var Um = 0.0;
        var va = 0.0;
        var xm = 0.0;
        var Si, A5, j4;
        var WZ, Tp, EC;
        var H6, qw, Qg;
        var _O, Ej, TU;
        var EL, oL, g4;
        var Ka, Yf, QC;
        YB = new Float32Array(C.length);
        x8 = new Float32Array(C.length);
        for (var G = 0; G < j3; G++) {
            YB[G * 3 + 0] = 0.0;
            YB[G * 3 + 1] = 0.0;
            YB[G * 3 + 2] = 0.0;
            x8[G * 3 + 0] = 0.0;
            x8[G * 3 + 1] = 0.0;
            x8[G * 3 + 2] = 0.0;
        }
        for (var G = 0; G < Ar; G++) {
            Si = qu[G * 3 + 0];
            A5 = qu[G * 3 + 1];
            j4 = qu[G * 3 + 2];
            WZ = Si * 3;
            Tp = A5 * 3;
            EC = j4 * 3;
            _O = Si * 2;
            Ej = A5 * 2;
            TU = j4 * 2;
            e3[0] = C[Tp + 0] - C[WZ + 0];
            e3[1] = C[Tp + 1] - C[WZ + 1];
            e3[2] = C[Tp + 2] - C[WZ + 2];
            TL[0] = C[EC + 0] - C[WZ + 0];
            TL[1] = C[EC + 1] - C[WZ + 1];
            TL[2] = C[EC + 2] - C[WZ + 2];
            yh[0] = Gi[Ej + 0] - Gi[_O + 0];
            yh[1] = Gi[Ej + 1] - Gi[_O + 1];
            o1[0] = Gi[TU + 0] - Gi[_O + 0];
            o1[1] = Gi[TU + 1] - Gi[_O + 1];
            cG = yh[0] * o1[1] - o1[0] * yh[1];
            if (Math.abs(cG) < 0.000001) {
                oo[0] = 1.0;
                oo[1] = 0.0;
                oo[2] = 0.0;
                dU[0] = 0.0;
                dU[1] = 1.0;
                dU[2] = 0.0;
            } else {
                cG = 1.0 / cG;
                oo[0] = (o1[1] * e3[0] - yh[1] * TL[0]) * cG;
                oo[1] = (o1[1] * e3[1] - yh[1] * TL[1]) * cG;
                oo[2] = (o1[1] * e3[2] - yh[1] * TL[2]) * cG;
                dU[0] = (-o1[0] * e3[0] + yh[0] * TL[0]) * cG;
                dU[1] = (-o1[0] * e3[1] + yh[0] * TL[1]) * cG;
                dU[2] = (-o1[0] * e3[2] + yh[0] * TL[2]) * cG;
            }
            YB[Si * 3 + 0] = YB[Si * 3 + 0] + oo[0];
            YB[Si * 3 + 1] = YB[Si * 3 + 1] + oo[1];
            YB[Si * 3 + 2] = YB[Si * 3 + 2] + oo[2];
            YB[A5 * 3 + 0] = YB[A5 * 3 + 0] + oo[0];
            YB[A5 * 3 + 1] = YB[A5 * 3 + 1] + oo[1];
            YB[A5 * 3 + 2] = YB[A5 * 3 + 2] + oo[2];
            YB[j4 * 3 + 0] = YB[j4 * 3 + 0] + oo[0];
            YB[j4 * 3 + 1] = YB[j4 * 3 + 1] + oo[1];
            YB[j4 * 3 + 2] = YB[j4 * 3 + 2] + oo[2];
            x8[Si * 3 + 0] = x8[Si * 3 + 0] + dU[0];
            x8[Si * 3 + 1] = x8[Si * 3 + 1] + dU[1];
            x8[Si * 3 + 2] = x8[Si * 3 + 2] + dU[2];
            x8[A5 * 3 + 0] = x8[A5 * 3 + 0] + dU[0];
            x8[A5 * 3 + 1] = x8[A5 * 3 + 1] + dU[1];
            x8[A5 * 3 + 2] = x8[A5 * 3 + 2] + dU[2];
            x8[j4 * 3 + 0] = x8[j4 * 3 + 0] + dU[0];
            x8[j4 * 3 + 1] = x8[j4 * 3 + 1] + dU[1];
            x8[j4 * 3 + 2] = x8[j4 * 3 + 2] + dU[2];
        }
        for (var G = 0; G < Ar; G++) {
            Si = qu[G * 3 + 0];
            A5 = qu[G * 3 + 1];
            j4 = qu[G * 3 + 2];
            H6 = Si * 3;
            qw = A5 * 3;
            Qg = j4 * 3;
            EL = Si * 3;
            oL = A5 * 3;
            g4 = j4 * 3;
            Ka = Si * 3;
            Yf = A5 * 3;
            QC = j4 * 3;
            Um = Ep[H6 + 0] * YB[EL + 0] + Ep[H6 + 1] * YB[EL + 1] + Ep[H6 + 2] * YB[EL + 2];
            YB[EL + 0] -= Ep[H6 + 0] * Um;
            YB[EL + 1] -= Ep[H6 + 1] * Um;
            YB[EL + 2] -= Ep[H6 + 2] * Um;
            xm = 1.0 / Math.sqrt(YB[EL + 0] * YB[EL + 0] + YB[EL + 1] * YB[EL + 1] + YB[EL + 2] * YB[EL + 2]);
            YB[EL + 0] *= xm;
            YB[EL + 1] *= xm;
            YB[EL + 2] *= xm;
            Um = Ep[qw + 0] * YB[oL + 0] + Ep[qw + 1] * YB[oL + 1] + Ep[qw + 2] * YB[oL + 2];
            YB[oL + 0] -= Ep[qw + 0] * Um;
            YB[oL + 1] -= Ep[qw + 1] * Um;
            YB[oL + 2] -= Ep[qw + 2] * Um;
            xm = 1.0 / Math.sqrt(YB[oL + 0] * YB[oL + 0] + YB[oL + 1] * YB[oL + 1] + YB[oL + 2] * YB[oL + 2]);
            YB[oL + 0] *= xm;
            YB[oL + 1] *= xm;
            YB[oL + 2] *= xm;
            Um = Ep[Qg + 0] * YB[g4 + 0] + Ep[Qg + 1] * YB[g4 + 1] + Ep[Qg + 2] * YB[g4 + 2];
            YB[g4 + 0] -= Ep[Qg + 0] * Um;
            YB[g4 + 1] -= Ep[Qg + 1] * Um;
            YB[g4 + 2] -= Ep[Qg + 2] * Um;
            xm = 1.0 / Math.sqrt(YB[g4 + 0] * YB[g4 + 0] + YB[g4 + 1] * YB[g4 + 1] + YB[g4 + 2] * YB[g4 + 2]);
            YB[g4 + 0] *= xm;
            YB[g4 + 1] *= xm;
            YB[g4 + 2] *= xm;
            dU[0] = (Ep[H6 + 1] * YB[EL + 2]) - (Ep[H6 + 2] * YB[EL + 1]);
            dU[1] = (Ep[H6 + 2] * YB[EL + 0]) - (Ep[H6 + 0] * YB[EL + 2]);
            dU[2] = (Ep[H6 + 0] * YB[EL + 1]) - (Ep[H6 + 1] * YB[EL + 0]);
            va = dU[0] * x8[Ka + 0] + dU[1] * x8[Ka + 1] + dU[2] * x8[Ka + 2];
            x8[Ka + 0] = dU[0];
            x8[Ka + 1] = dU[1];
            x8[Ka + 2] = dU[2];
            dU[0] = (Ep[qw + 1] * YB[oL + 2]) - (Ep[qw + 2] * YB[oL + 1]);
            dU[1] = (Ep[qw + 2] * YB[oL + 0]) - (Ep[qw + 0] * YB[oL + 2]);
            dU[2] = (Ep[qw + 0] * YB[oL + 1]) - (Ep[qw + 1] * YB[oL + 0]);
            va = dU[0] * x8[Yf + 0] + dU[1] * x8[Yf + 1] + dU[2] * x8[Yf + 2];
            x8[Yf + 0] = dU[0];
            x8[Yf + 1] = dU[1];
            x8[Yf + 2] = dU[2];
            dU[0] = (Ep[Qg + 1] * YB[g4 + 2]) - (Ep[Qg + 2] * YB[g4 + 1]);
            dU[1] = (Ep[Qg + 2] * YB[g4 + 0]) - (Ep[Qg + 0] * YB[g4 + 2]);
            dU[2] = (Ep[Qg + 0] * YB[g4 + 1]) - (Ep[Qg + 1] * YB[g4 + 0]);
            va = dU[0] * x8[QC + 0] + dU[1] * x8[QC + 1] + dU[2] * x8[QC + 2];
            x8[QC + 0] = dU[0];
            x8[QC + 1] = dU[1];
            x8[QC + 2] = dU[2];
        }
        return 0;
    };
    var Tk = function(qu) {
        var count = Ar * 3;
        var S0;
        var Wv;
        if (C.length > 0) {
            var Yk = new Float32Array(Ar * 9);
            for (var G = 0; G < count; G++) {
                S0 = qu[G] * 3;
                Wv = G * 3;
                Yk[Wv] = C[S0];
                Yk[Wv + 1] = C[S0 + 1];
                Yk[Wv + 2] = C[S0 + 2];
            }
            C = Yk;
        }
        if (Ep.length > 0) {
            var j1 = new Float32Array(Ar * 9);
            for (var G = 0; G < count; G++) {
                S0 = qu[G] * 3;
                Wv = G * 3;
                j1[Wv] = Ep[S0];
                j1[Wv + 1] = Ep[S0 + 1];
                j1[Wv + 2] = Ep[S0 + 2];
            }
            Ep = j1;
        }
        if (Gi.length > 0) {
            var yY = new Float32Array(Ar * 6);
            for (var G = 0; G < count; G++) {
                S0 = qu[G] * 2;
                Wv = G * 2;
                yY[Wv] = Gi[S0];
                yY[Wv + 1] = Gi[S0 + 1];
            }
            Gi = yY;
        }
        if ((YB != null) && (YB.length > 0)) {
            var gf = new Float32Array(Ar * 9);
            for (var G = 0; G < count; G++) {
                S0 = qu[G] * 3;
                Wv = G * 3;
                gf[Wv] = YB[S0];
                gf[Wv + 1] = YB[S0 + 1];
                gf[Wv + 2] = YB[S0 + 2];
            }
            YB = gf;
        }
        if ((x8 != null) && (x8.length > 0)) {
            var zU = new Float32Array(Ar * 9);
            for (var G = 0; G < count; G++) {
                S0 = qu[G] * 3;
                Wv = G * 3;
                zU[Wv] = x8[S0];
                zU[Wv + 1] = x8[S0 + 1];
                zU[Wv + 2] = x8[S0 + 2];
            }
            x8 = zU;
        }
    };
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x67\x52") {
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) this.color = jsonObject.col;
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (jsonObject.nrTr) Ar = jsonObject.nrTr;
            if (jsonObject.tEx) {
                if (jsonObject.tEx.indexOf("\x2e") != -1) {
                    xM = this.v.PN() + "\x2f" + jsonObject.tEx;
                } else {
                    xM = this.v.PN() + "\x2f" + jsonObject.tEx + "\x2e\x6a\x70\x67";
                };
            }
            if (jsonObject.tR) ta = new Uint32Array(jsonObject.tR);
            if ((jsonObject.comp) && (jsonObject.comp == "\x32\x4e\x75\x6d\x2d\x52\x4c\x45")) {
                if ((!jsonObject.vA) || (!jsonObject.nA)) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4d\x69\x73\x73\x69\x6e\x67\x20\x61\x72\x72\x61\x79\x73", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (jsonObject.vA) C = new Float32Array(CmiHelpers.G0(jsonObject.vA));
                if (jsonObject.nA) Ep = new Float32Array(CmiHelpers.G0(jsonObject.nA));
                if (jsonObject.tA) Gi = new Float32Array(CmiHelpers.G0(jsonObject.tA));
            } else if ((jsonObject.comp) && (jsonObject.comp == "\x52\x4c\x45")) {
                if ((!jsonObject.vA) || (!jsonObject.nA)) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4d\x69\x73\x73\x69\x6e\x67\x20\x61\x72\x72\x61\x79\x73\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (jsonObject.vA) {
                    C = new Float32Array(Ar * 9);
                    CmiHelpers.xg(jsonObject.vA, C);
                }
                if (jsonObject.nA) {
                    Ep = new Float32Array(Ar * 9);
                    CmiHelpers.xg(jsonObject.nA, Ep);
                }
                if (jsonObject.tA) {
                    Gi = new Float32Array(Ar * 6);
                    CmiHelpers.xg(jsonObject.tA, Gi);
                };
            } else {
                if ((!jsonObject.vA) || (!jsonObject.nA)) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4d\x69\x73\x73\x69\x6e\x67\x20\x61\x72\x72\x61\x79\x73\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (jsonObject.vA) C = new Float32Array(jsonObject.vA);
                if (jsonObject.nA) Ep = new Float32Array(jsonObject.nA);
                if (jsonObject.tA) Gi = new Float32Array(jsonObject.tA);
            }
            if (C.length == Ar * 9) {
                MN = false;
            } else {
                MN = true;
                if (ta.length == 0) {
                    this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4d\x69\x73\x73\x69\x6e\x67\x20\x74\x72\x69\x61\x6e\x67\x6c\x65\x20\x61\x72\x72\x61\x79\x20\x28" + this.QR() + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if (C.length / 3 > 65536) {
                    if (jsonObject.vA) Zr = new Float32Array(jsonObject.vA);
                    if (jsonObject.nA) LM = new Float32Array(jsonObject.nA);
                    if (jsonObject.tA) df = new Float32Array(jsonObject.tA);
                    Tk(ta);
                    MN = false;
                } else {
                    Uj = new Uint16Array(jsonObject.tR);
                };
            }
            if (jsonObject.shPar) {
                this.Oj = jsonObject.shPar;
                if (this.Oj.baseTexture != undefined) {
                    if (this.Oj.baseTexture.indexOf("\x2e") != -1) {
                        lX = this.v.PN() + "\x2f" + this.Oj.baseTexture;
                    } else {
                        lX = this.v.PN() + "\x2f" + this.Oj.baseTexture + "\x2e\x6a\x70\x67";
                    };
                }
                if (this.Oj.normalMap != undefined) {
                    if (this.Oj.normalMap.indexOf("\x2e") != -1) {
                        nK = this.v.PN() + "\x2f" + this.Oj.normalMap;
                    } else {
                        nK = this.v.PN() + "\x2f" + this.Oj.normalMap + "\x2e\x6a\x70\x67";
                    };
                }
                if (this.Oj.transparency != undefined) {
                    Wi = this.color[3];
                    this.color[3] = 1.0 - parseFloat(this.Oj.transparency);
                };
            }
            if (jsonObject.shNm) {
                var vt = this.v;
                var xl = vt.getShader(jsonObject.shNm);
                if (this.setShader(xl) != 0) {
                    this.shaderObject = this.v.getShader("\x43\x6f\x6c\x6f\x72\x33\x44"); //Color3D
                } else if (xl.zx == "\x47\x6c\x61\x73\x73") { //Glass
                    Wi = this.color[3];
                    this.color[3] = 0.0;
                };
            }
            this.iN();
            this.cm();
            this.Yz = true;
            return 0;
        } else {
            //this.v.s("CmiGrepObject.loadFromJSON", "Wrong class from loadFromJSON call","SCRIPT_ERROR");
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (C.length < 3) {
            return;
        }
        var I = new Array(100000.0, 100000.0, 100000.0);
        var sb = new Array(-100000.0, -100000.0, -100000.0);
        var OT = C.length / 3;
        for (var G = 0; G < OT; G++) {
            if (C[3 * G + 0] < I[0]) I[0] = C[3 * G + 0];
            if (C[3 * G + 1] < I[1]) I[1] = C[3 * G + 1];
            if (C[3 * G + 2] < I[2]) I[2] = C[3 * G + 2];
            if (C[3 * G + 0] > sb[0]) sb[0] = C[3 * G + 0];
            if (C[3 * G + 1] > sb[1]) sb[1] = C[3 * G + 1];
            if (C[3 * G + 2] > sb[2]) sb[2] = C[3 * G + 2];
        }
        this.cT = CmiHelpers.Up(I, sb);
        this.size = CmiHelpers.b8(I, sb);
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
        if (ck != null) this.h.deleteBuffer(ck);
        ck = null;
        if (Nk != null) this.h.deleteBuffer(Nk);
        Nk = null;
        if (gW != null) this.h.deleteBuffer(gW);
        gW = null;
        if (Ja != null) this.h.deleteBuffer(Ja);
        Ja = null;
        if (q9 != null) this.h.deleteBuffer(q9);
        q9 = null;
    };
    this.iN = function() {
        this.fl();
        if (Fx == null) Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 3;
        Fx.numItems = C.length / 3;
        if (ck == null) ck = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, ck);
        this.h.bufferData(this.h.ARRAY_BUFFER, Ep, this.h.STATIC_DRAW);
        ck.itemSize = 3;
        ck.numItems = Ep.length / 3;
        if (Nk == null) Nk = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.bufferData(this.h.ARRAY_BUFFER, Gi, this.h.STATIC_DRAW);
        Nk.itemSize = 2;
        Nk.numItems = Gi.length / 2;
        if (gW == null) gW = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, gW);
        this.h.bufferData(this.h.ARRAY_BUFFER, YB, this.h.STATIC_DRAW);
        gW.itemSize = 3;
        gW.numItems = YB.length / 3;
        if (Ja == null) Ja = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Ja);
        this.h.bufferData(this.h.ARRAY_BUFFER, x8, this.h.STATIC_DRAW);
        Ja.itemSize = 3;
        Ja.numItems = x8.length / 3;
        if (q9 == null) q9 = this.h.createBuffer();
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.bufferData(this.h.ELEMENT_ARRAY_BUFFER, Uj, this.h.STATIC_DRAW);
        q9.itemSize = 1;
        q9.numItems = Uj.length;
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        if (MN == false) {
            this.h.drawArrays(this.h.TRIANGLES, 0, Ar * 3);
        } else {
            this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
            this.h.drawElements(this.h.TRIANGLES, Ar * 3, this.h.UNSIGNED_SHORT, 0);
        }
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x65\x70\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        h2 = this.m_();
        if (h2 != null) {
            if (this.PX(h2) != 0) {
                this.Jk();
                h2 = null;
            };
        }
        if ((this.isHighlighted == true) || (this.pk == true) || ((p8 == true) && (jZ.loaded == false)) || ((Ss == true) && (Vn.loaded == false)) || ((fT == true) && (bi.loaded == false))) {
            mx.EP(this, 0);
            this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
            this.h.vertexAttribPointer(mx.o, 3, this.h.FLOAT, false, 0, 0);
            this.h.bindBuffer(this.h.ARRAY_BUFFER, ck);
            this.h.vertexAttribPointer(mx.Z, 3, this.h.FLOAT, false, 0, 0);
            if (MN == false) {
                this.h.drawArrays(this.h.TRIANGLES, 0, Ar * 3);
            } else {
                this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
                this.h.drawElements(this.h.TRIANGLES, Ar * 3, this.h.UNSIGNED_SHORT, 0);
            }
            mx.fb(0);
        } else {
            {
                this.shaderObject.EP(this, 0);
                this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
                this.h.vertexAttribPointer(this.shaderObject.o, 3, this.h.FLOAT, false, 0, 0);
                if (this.shaderObject.Z != null) {
                    this.h.bindBuffer(this.h.ARRAY_BUFFER, ck);
                    this.h.vertexAttribPointer(this.shaderObject.Z, 3, this.h.FLOAT, false, 0, 0);
                }
                if (this.shaderObject.tV != null) {
                    this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
                    this.h.vertexAttribPointer(this.shaderObject.tV, 2, this.h.FLOAT, false, 0, 0);
                }
                if ((HR) && (this.shaderObject.mq != null)) {
                    this.h.bindBuffer(this.h.ARRAY_BUFFER, gW);
                    this.h.vertexAttribPointer(this.shaderObject.mq, 3, this.h.FLOAT, false, 0, 0);
                }
                if ((HR) && (this.shaderObject.A4 != null)) {
                    this.h.bindBuffer(this.h.ARRAY_BUFFER, Ja);
                    this.h.vertexAttribPointer(this.shaderObject.A4, 3, this.h.FLOAT, false, 0, 0);
                }
                if (MN == false) {
                    this.h.drawArrays(this.shaderObject.Yw, 0, Ar * 3);
                } else {
                    this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
                    this.h.drawElements(this.shaderObject.Yw, Ar * 3, this.h.UNSIGNED_SHORT, 0);
                }
                this.shaderObject.fb(0);
            }
        }
        if (h2 != null) {
            this.Jk();
        }
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
CmiGrepObject.prototype = new CmiBaseObject();
var CmiLocatorObject = function(B) {
    var BB = "\x63\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array(3);
    var Fx = null;
    var JH = new Array(0.6, 0.2, 0.2, 1.0);
    var pQ = null;
    var oC = 20.0;
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.getGlobalEulerAngles = function() {
        return this.hP;
    };
    this.getGlobalOrigin = function() {
        return this.lt;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 10;
    this.color = new Array(0.6, 0.2, 0.2, 1.0);
    oC = this.v.sa;
    this.np = new Array();
    this.p = new Float32Array([0.0, 0.0, 0.0]);
    this.origin = new Float32Array([0.0, 0.0, 0.0]);
    this.hP = new Float32Array([0.0, 0.0, 0.0]);
    this.lt = new Float32Array([0.0, 0.0, 0.0]);
    this.shaderObject = this.v.getShader("\x50\x6f\x69\x6e\x74");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x6c\x4f\x63") {
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if ((jsonObject.CQ) && (jsonObject.CQ.constructor === Array)) {
                this.np = jsonObject.CQ.slice();
            }
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.lAn) {
                var CN = this.v.getCmiModel();
                this.Ck = CN.ue(rU);
            }
            if (jsonObject.org) {
                this.origin = new Float32Array(jsonObject.org);
                C = new Float32Array(jsonObject.org);
                this.cT = new Float32Array(jsonObject.org);
                this.lt = new Float32Array(jsonObject.org);
            }
            if (jsonObject.elA) {
                this.p = new Float32Array(jsonObject.elA);
                this.hP = new Float32Array(jsonObject.elA);
            }
            this.iN();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.bK = function(Py, Hz, Dm, Ks, yE, oN) {
        this.origin = new Float32Array([Py, Hz, Dm]);
        C = new Float32Array([Py, Hz, Dm]);
        this.cT = new Float32Array([Py, Hz, Dm]);
        this.p = new Float32Array([Ks, yE, oN]);
        this.iN();
    };
    this.fl = function() {
        var N = this.v.f7();
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 3;
        Fx.numItems = C.length / 3;
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        this.shaderObject.EP(fA, oC, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.POINTS, 0, 1);
        this.shaderObject.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x4c\x6f\x63\x61\x74\x6f\x72\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        this.shaderObject.EP(this.gR(), oC, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.POINTS, 0, 1);
        this.shaderObject.fb(0);
        return 0;
    };
};
CmiLocatorObject.prototype = new CmiBaseObject();
var QB = function(B) {
    var BB = "\x63\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array(8);
    var Fx = null;
    var mZ = 0;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 1;
    this.shaderObject = this.v.getShader("\x4c\x69\x6e\x65");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x6c\x4e") {
            var fF;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) this.color = jsonObject.col;
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lS) mZ = jsonObject.lS;
            if (jsonObject.vA) fF = new Float32Array(jsonObject.vA);
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            var dx = fF[0] - fF[3];
            var dy = fF[1] - fF[4];
            var Rd = fF[2] - fF[5];
            var zI = Math.max(1.0, Math.sqrt((dx * dx) + (dy * dy) + (Rd * Rd)));
            C[0] = fF[0];
            C[1] = fF[1];
            C[2] = fF[2];
            C[3] = 0.0;
            C[4] = fF[3];
            C[5] = fF[4];
            C[6] = fF[5];
            C[7] = zI;
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (C.length < 3) {
            return;
        }
        var I = new Array(Math.min(C[0], C[4]), Math.min(C[1], C[5]), Math.min(C[2], C[6]));
        var sb = new Array(Math.max(C[0], C[4]), Math.max(C[1], C[5]), Math.max(C[2], C[6]));
        this.cT = CmiHelpers.Up(I, sb);
        this.size = C[7];
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 4;
        Fx.numItems = C.length / 4;
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, 2);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        this.shaderObject.EP(this.gR(), mZ, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, 2);
        this.shaderObject.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
QB.prototype = new CmiBaseObject();
var q0 = function(B) {
    var BB = "\x63\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array();
    var Fx = null;
    var mZ = 0;
    var DX = new Float32Array([0.0, 0.0, 0.0]);
    var Kb = 10.0;
    var PA = 0.0;
    var SQ = 360.0;
    var Hy = 0;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 2;
    this.shaderObject = this.v.getShader("\x4c\x69\x6e\x65");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x61\x52") {
            var Xt = new Float32Array([0.0, 0.0, 0.0]);
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) this.color = jsonObject.col;
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lS) mZ = jsonObject.lS;
            if (jsonObject.cP) DX = new Float32Array(jsonObject.cP);
            if (jsonObject.rad) Kb = jsonObject.rad;
            if (jsonObject.sA) PA = jsonObject.sA;
            if (jsonObject.eA) SQ = jsonObject.eA;
            if (jsonObject.elA) Xt = new Float32Array(jsonObject.elA);
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (SQ == 0.0) SQ = 360.0;
            if (SQ < PA) SQ = 360 + SQ;
            LB(Xt);
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    var LB = function(p) {
        var uh = new mat4.createIdent();
        var eX = new Float32Array([0.0, 0.0, 0.0]);
        if ((p[0] != 0.0) || (p[1] != 0.0) || (p[2] != 0.0)) {
            mat4.AddXRotation(uh, p[0] * Math.PI / 180.0);
            mat4.AddYRotation(uh, p[1] * Math.PI / 180.0);
            mat4.AddZRotation(uh, p[2] * Math.PI / 180.0);
        }
        mat4.addTranslation(uh, DX);
        C = CmiHelpers.q3(eX, Kb, PA, SQ, uh, true);
        Hy = parseInt(C.length / 8);
        return;
    };
    this.cm = function() {
        var I = new Array(DX[0] - Kb, DX[1] - Kb, DX[2] - Kb);
        var sb = new Array(DX[0] + Kb, DX[1] + Kb, DX[2] + Kb);
        this.cT = new Array(0.0, 0.0, 0.0);
        this.cT[0] = DX[0];
        this.cT[1] = DX[1];
        this.cT[2] = DX[2];
        this.size = 2 * Kb;
        this.bn = Kb;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 4;
        Fx.numItems = C.length / 4;
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, Hy * 2);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x41\x72\x63\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        this.shaderObject.EP(this.gR(), mZ, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, Hy * 2);
        this.shaderObject.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
q0.prototype = new CmiBaseObject();
var PO = function(B) {
    var BB = "\x63\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array();
    var Fx = null;
    var Hy = 0;
    var mZ = 0;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 5;
    this.shaderObject = this.v.getShader("\x4c\x69\x6e\x65");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x63\x48") {
            var fF;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) this.color = jsonObject.col;
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lS) mZ = jsonObject.lS;
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (jsonObject.vA) fF = new Float32Array(jsonObject.vA);
            Hy = fF.length / 6;
            C = new Float32Array(Hy * 8);
            var dx = 0.0;
            var dy = 0.0;
            var Rd = 0.0;
            var zI = 0.0;
            for (var G = 0; G < Hy; G++) {
                dx = fF[G * 6 + 0] - fF[G * 6 + 3];
                dy = fF[G * 6 + 1] - fF[G * 6 + 4];
                Rd = fF[G * 6 + 2] - fF[G * 6 + 5];
                zI = Math.max(1.0, Math.sqrt((dx * dx) + (dy * dy) + (Rd * Rd)));
                C[G * 8 + 0] = fF[G * 6 + 0];
                C[G * 8 + 1] = fF[G * 6 + 1];
                C[G * 8 + 2] = fF[G * 6 + 2];
                C[G * 8 + 3] = 0.0;
                C[G * 8 + 4] = fF[G * 6 + 3];
                C[G * 8 + 5] = fF[G * 6 + 4];
                C[G * 8 + 6] = fF[G * 6 + 5];
                C[G * 8 + 7] = zI;
            }
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (C.length < 3) {
            return;
        }
        var I = new Array(100000.0, 100000.0, 100000.0);
        var sb = new Array(-100000.0, -100000.0, -100000.0);
        for (var G = 0; G < Hy; G++) {
            if (C[G * 8 + 0] < I[0]) I[0] = C[G * 8 + 0];
            if (C[G * 8 + 1] < I[1]) I[1] = C[G * 8 + 1];
            if (C[G * 8 + 2] < I[2]) I[2] = C[G * 8 + 2];
            if (C[G * 8 + 0] > sb[0]) sb[0] = C[G * 8 + 0];
            if (C[G * 8 + 1] > sb[1]) sb[1] = C[G * 8 + 1];
            if (C[G * 8 + 2] > sb[2]) sb[2] = C[G * 8 + 2];
            if (C[G * 8 + 4] < I[0]) I[0] = C[G * 8 + 4];
            if (C[G * 8 + 5] < I[1]) I[1] = C[G * 8 + 5];
            if (C[G * 8 + 6] < I[2]) I[2] = C[G * 8 + 6];
            if (C[G * 8 + 4] > sb[0]) sb[0] = C[G * 8 + 4];
            if (C[G * 8 + 5] > sb[1]) sb[1] = C[G * 8 + 5];
            if (C[G * 8 + 6] > sb[2]) sb[2] = C[G * 8 + 6];
        }
        this.cT = CmiHelpers.Up(I, sb);
        this.size = CmiHelpers.b8(I, sb);
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 4;
        Fx.numItems = C.length / 4;
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, Hy * 2);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x43\x72\x6f\x73\x73\x68\x61\x74\x63\x68\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        this.shaderObject.EP(this.gR(), mZ, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 4, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, Hy * 2);
        this.shaderObject.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
PO.prototype = new CmiBaseObject();
var lb = function(B) {
    var BB = "\x63\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74";
    var C = new Float32Array(18);
    var oI = new Float32Array(12);
    var MU = new Uint16Array();
    var Fx = null;
    var Nk = null;
    var q9 = null;
    var U8 = "";
    var m8 = "";
    var BK = 0.0;
    var Fj = 0.0;
    var ua = null;
    var uI = null;
    var BV = null;
    var gm = null;
    var nL = 0;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 3;
    this.color[3] = 0.0;
    this.shaderObject = this.v.getShader("\x54\x65\x78\x74");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x74\x58") {
            var fF;
            this.Yz = false;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) {
                this.color = jsonObject.col;
                this.color[3] = 0.0;
            }
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.fnt) U8 = jsonObject.fnt;
            if (jsonObject.mr) nL = jsonObject.mr;
            if (jsonObject.txt) m8 = jsonObject.txt;
            if (jsonObject.hT) Fj = jsonObject.hT;
            if (jsonObject.wD) BK = jsonObject.wD;
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (jsonObject.vA) fF = new Float32Array(jsonObject.vA);
            if ((BK == 0.0) || (Fj == 0.0)) {
                var H2 = new Array(fF[0], fF[1], fF[2]);
                var Op = new Array(fF[3], fF[4], fF[5]);
                var li = new Array(fF[6], fF[7], fF[8]);
                var it = new Array(fF[9], fF[10], fF[11]);
                BK = CmiHelpers.b8(H2, Op);
                Fj = CmiHelpers.b8(H2, it);
            }
            if ((Fj == 0.0) || (BK == 0.0)) {
                this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x54\x65\x78\x74\x20\x77\x69\x64\x74\x68\x20\x6f\x72\x20\x68\x65\x69\x67\x68\x74\x20\x3d\x20\x30", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            uI = this.v._v(Fj, BK, U8, m8, this.gR(), nL);
            if (uI == null) {
                this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x43\x61\x6e\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x74\x65\x78\x74\x20\x69\x6d\x61\x67\x65", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            gm = this.v._v(Fj, BK, U8, m8, this.v.hlColIni, nL);
            C[0] = fF[0];
            C[1] = fF[1];
            C[2] = fF[2];
            C[3] = fF[3];
            C[4] = fF[4];
            C[5] = fF[5];
            C[6] = fF[6];
            C[7] = fF[7];
            C[8] = fF[8];
            C[9] = fF[6];
            C[10] = fF[7];
            C[11] = fF[8];
            C[12] = fF[9];
            C[13] = fF[10];
            C[14] = fF[11];
            C[15] = fF[0];
            C[16] = fF[1];
            C[17] = fF[2];
            var uh = new mat4.createIdent();
            var wg = new vec3.create();
            wg[2] = 0.0;
            oI[0] = 0.0;
            oI[1] = 0.0;
            wg[0] = uI.GF;
            wg[1] = 0.0;
            mat4.multiplyVec3(uh, wg);
            oI[2] = wg[0];
            oI[3] = wg[1];
            wg[0] = uI.GF;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[4] = wg[0];
            oI[5] = wg[1];
            wg[0] = uI.GF;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[6] = wg[0];
            oI[7] = wg[1];
            wg[0] = 0.0;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[8] = wg[0];
            oI[9] = wg[1];
            oI[10] = 0.0;
            oI[11] = 0.0;
            MU = new Uint16Array(2 * 3);
            for (var G = 0; G < 2 * 3; G++) {
                MU[G] = G;
            }
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (C.length < 3) {
            return;
        }
        var I = new Array(100000.0, 100000.0, 100000.0);
        var sb = new Array(-100000.0, -100000.0, -100000.0);
        var OT = C.length / 3;
        for (var G = 0; G < OT; G++) {
            if (C[3 * G + 0] < I[0]) I[0] = C[3 * G + 0];
            if (C[3 * G + 1] < I[1]) I[1] = C[3 * G + 1];
            if (C[3 * G + 2] < I[2]) I[2] = C[3 * G + 2];
            if (C[3 * G + 0] > sb[0]) sb[0] = C[3 * G + 0];
            if (C[3 * G + 1] > sb[1]) sb[1] = C[3 * G + 1];
            if (C[3 * G + 2] > sb[2]) sb[2] = C[3 * G + 2];
        }
        this.cT = CmiHelpers.Up(I, sb);
        this.size = CmiHelpers.b8(I, sb);
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (Fx != null) this.h.deleteBuffer(Fx);
        Fx = null;
        if (Nk != null) this.h.deleteBuffer(Nk);
        Nk = null;
        if (q9 != null) this.h.deleteBuffer(q9);
        q9 = null;
        if (ua != null) this.h.deleteTexture(ua);
        ua = null;
        if (BV != null) this.h.deleteTexture(BV);
        BV = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        Fx = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.bufferData(this.h.ARRAY_BUFFER, C, this.h.STATIC_DRAW);
        Fx.itemSize = 3;
        Fx.numItems = C.length / 3;
        Nk = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.bufferData(this.h.ARRAY_BUFFER, oI, this.h.STATIC_DRAW);
        Nk.itemSize = 2;
        Nk.numItems = oI.length / 2;
        q9 = this.h.createBuffer();
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.bufferData(this.h.ELEMENT_ARRAY_BUFFER, MU, this.h.STATIC_DRAW);
        q9.itemSize = 1;
        q9.numItems = MU.length;
        ua = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, uI.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
        BV = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, BV);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, gm.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (this.shaderObject == null || this.shaderObject.A == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        this.shaderObject.EP(this.v.bgColIni, 0);
        this.h.activeTexture(this.h.TEXTURE0);
        if ((this.isHighlighted == true) || ((this.Ck != null) && (this.Ck.contentHighlighted == true))) this.h.bindTexture(this.h.TEXTURE_2D, BV);
        else this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Fx);
        this.h.vertexAttribPointer(this.shaderObject.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.vertexAttribPointer(this.shaderObject.tV, 2, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
        this.shaderObject.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
lb.prototype = new CmiBaseObject();
var I5 = function(B) {
    var BB = "\x63\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74";
    var aN = new Float32Array(18);
    var V = new Float32Array(18);
    var uf = new Float32Array(9);
    var oI = new Float32Array(12);
    var MU = new Uint16Array();
    var AN = null;
    var pL = null;
    var Oq = null;
    var Nk = null;
    var q9 = null;
    var ne = null;
    var j_ = null;
    var U8 = "";
    var m8 = "";
    var BK = 0.0;
    var Fj = 0.0;
    var ua = null;
    var uI = null;
    var BV = null;
    var gm = null;
    var rH = 0;
    var xL = 0;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 13;
    this.color[3] = 0.0;
    ne = this.v.getShader("\x54\x65\x78\x74");
    j_ = this.v.getShader("\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x6c\x42") {
            var fF;
            this.Yz = false;
            var p = new Float32Array([0.0, 0.0, 0.0]);
            var f8 = new Float32Array([0.0, 0.0, 0.0]);
            var Qr = new Float32Array([0.0, 0.0, 0.0]);
            var wJ = new Float32Array([0.0, 0.0, 0.0]);
            var z9 = new Float32Array([0.0, 0.0, 0.0]);
            var lsP = new Float32Array([0.0, 0.0, 0.0]);
            var leP = new Float32Array([0.0, 0.0, 0.0]);
            var txP = new Float32Array([0.0, 0.0, 0.0]);
            var A6 = 0.0;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) {
                this.color = jsonObject.col;
                this.color[3] = 0.0;
            }
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.fnt) U8 = jsonObject.fnt;
            if (jsonObject.txt) m8 = jsonObject.txt;
            if (jsonObject.hT) Fj = jsonObject.hT;
            if (jsonObject.wD) BK = jsonObject.wD;
            if (jsonObject.a2d) A6 = jsonObject.a2d;
            if (jsonObject.elA) p = new Float32Array(jsonObject.elA);
            if (jsonObject.lsP) lsP = new Float32Array(jsonObject.lsP);
            if (jsonObject.leP) leP = new Float32Array(jsonObject.leP);
            if (jsonObject.txP) txP = new Float32Array(jsonObject.txP);
            if (jsonObject.brd) rH = jsonObject.brd;
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if ((Fj == 0.0) || (BK == 0.0)) {
                this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x54\x65\x78\x74\x20\x77\x69\x64\x74\x68\x20\x6f\x72\x20\x68\x65\x69\x67\x68\x74\x20\x3d\x20\x30", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            uI = this.v._v(Fj, BK, U8, m8, this.gR(), 0);
            if (uI == null) {
                this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x43\x61\x6e\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x74\x65\x78\x74\x20\x69\x6d\x61\x67\x65", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            gm = this.v._v(Fj, BK, U8, m8, this.v.hlColIni, 0);
            var uh = new mat4.createIdent();
            var ba = new mat4.create();
            mat4.AddXRotation(uh, p[0] * Math.PI / 180.0);
            mat4.AddYRotation(uh, p[1] * Math.PI / 180.0);
            mat4.AddZRotation(uh, p[2] * Math.PI / 180.0);
            mat4.addTranslation(uh, lsP, ba);
            CmiHelpers.zC(Fj, Fj * 0.5, A6, Qr, wJ);
            mat4.multiplyVec3(ba, f8);
            mat4.multiplyVec3(ba, Qr);
            mat4.multiplyVec3(ba, wJ);
            uf[0] = f8[0];
            uf[1] = f8[1];
            uf[2] = f8[2];
            uf[3] = Qr[0];
            uf[4] = Qr[1];
            uf[5] = Qr[2];
            uf[6] = wJ[0];
            uf[7] = wJ[1];
            uf[8] = wJ[2];
            mat4.addTranslation(uh, txP, ba);
            f8[0] = 0.0;
            f8[1] = 0.0;
            f8[2] = 0.0;
            Qr[0] = Fj + BK;
            Qr[1] = 0.0;
            Qr[2] = 0.0;
            wJ[0] = 0.0;
            wJ[1] = Fj * 2;
            wJ[2] = 0.0;
            z9[0] = Fj + BK;
            z9[1] = Fj * 2;
            z9[2] = 0.0;
            switch (rH) {
                case 0:
                    V = new Float32Array(6);
                    mat4.multiplyVec3(ba, wJ);
                    mat4.multiplyVec3(ba, z9);
                    V[0] = lsP[0];
                    V[1] = lsP[1];
                    V[2] = lsP[2];
                    V[3] = leP[0];
                    V[4] = leP[1];
                    V[5] = leP[2];
                    xL = 1;
                    break;
                case 1:
                    V = new Float32Array(12);
                    mat4.multiplyVec3(ba, wJ);
                    mat4.multiplyVec3(ba, z9);
                    V[0] = lsP[0];
                    V[1] = lsP[1];
                    V[2] = lsP[2];
                    V[3] = leP[0];
                    V[4] = leP[1];
                    V[5] = leP[2];
                    V[6] = wJ[0];
                    V[7] = wJ[1];
                    V[8] = wJ[2];
                    V[9] = z9[0];
                    V[10] = z9[1];
                    V[11] = z9[2];
                    xL = 2;
                    break;
                case 2:
                    V = new Float32Array(12);
                    mat4.multiplyVec3(ba, f8);
                    mat4.multiplyVec3(ba, Qr);
                    V[0] = lsP[0];
                    V[1] = lsP[1];
                    V[2] = lsP[2];
                    V[3] = leP[0];
                    V[4] = leP[1];
                    V[5] = leP[2];
                    V[6] = f8[0];
                    V[7] = f8[1];
                    V[8] = f8[2];
                    V[9] = Qr[0];
                    V[10] = Qr[1];
                    V[11] = Qr[2];
                    xL = 2;
                    break;
                case 3:
                    V = new Float32Array(30);
                    mat4.multiplyVec3(ba, f8);
                    mat4.multiplyVec3(ba, Qr);
                    mat4.multiplyVec3(ba, wJ);
                    mat4.multiplyVec3(ba, z9);
                    V[0] = lsP[0];
                    V[1] = lsP[1];
                    V[2] = lsP[2];
                    V[3] = leP[0];
                    V[4] = leP[1];
                    V[5] = leP[2];
                    V[6] = f8[0];
                    V[7] = f8[1];
                    V[8] = f8[2];
                    V[9] = Qr[0];
                    V[10] = Qr[1];
                    V[11] = Qr[2];
                    V[12] = wJ[0];
                    V[13] = wJ[1];
                    V[14] = wJ[2];
                    V[15] = z9[0];
                    V[16] = z9[1];
                    V[17] = z9[2];
                    V[18] = f8[0];
                    V[19] = f8[1];
                    V[20] = f8[2];
                    V[21] = wJ[0];
                    V[22] = wJ[1];
                    V[23] = wJ[2];
                    V[24] = Qr[0];
                    V[25] = Qr[1];
                    V[26] = Qr[2];
                    V[27] = z9[0];
                    V[28] = z9[1];
                    V[29] = z9[2];
                    xL = 5;
                    break;
                case 4:
                    {
                        var p5 = (wJ[1] - f8[1]) * 0.5;
                        var IU = 0;
                        var Ql = 0;
                        var tD = new Float32Array([f8[0], f8[1] + p5, 0.0]);
                        var nl = new Float32Array([Qr[0], f8[1] + p5, 0.0]);
                        var _D = CmiHelpers.q3(tD, p5, 90, 270, ba, false);
                        var pH = CmiHelpers.q3(nl, p5, -90, 90, ba, false);IU = parseInt(_D.length / 6);Ql = parseInt(pH.length / 6);V = new Float32Array((IU + Ql + 3) * 3 * 2);mat4.multiplyVec3(ba, f8);mat4.multiplyVec3(ba, Qr);mat4.multiplyVec3(ba, wJ);mat4.multiplyVec3(ba, z9);V[0] = lsP[0];V[1] = lsP[1];V[2] = lsP[2];V[3] = leP[0];V[4] = leP[1];V[5] = leP[2];V[6] = f8[0];V[7] = f8[1];V[8] = f8[2];V[9] = Qr[0];V[10] = Qr[1];V[11] = Qr[2];xL = 2;V[12] = wJ[0];V[13] = wJ[1];V[14] = wJ[2];V[15] = z9[0];V[16] = z9[1];V[17] = z9[2];xL = 3 + IU + Ql;V.set(_D, 3 * 3 * 2);V.set(pH, (3 + IU) * 3 * 2);
                    }
                    break;
            };
            var ED = Fj * 0.5;
            mat4.addTranslation(uh, txP, ba);
            f8[0] = ED;
            f8[1] = ED;
            f8[2] = 0.0;
            Qr[0] = BK + ED;
            Qr[1] = ED;
            Qr[2] = 0.0;
            wJ[0] = ED;
            wJ[1] = Fj + ED;
            wJ[2] = 0.0;
            z9[0] = BK + ED;
            z9[1] = Fj + ED;
            z9[2] = 0.0;
            mat4.multiplyVec3(ba, f8);
            mat4.multiplyVec3(ba, Qr);
            mat4.multiplyVec3(ba, wJ);
            mat4.multiplyVec3(ba, z9);
            aN[0] = f8[0];
            aN[1] = f8[1];
            aN[2] = f8[2];
            aN[3] = Qr[0];
            aN[4] = Qr[1];
            aN[5] = Qr[2];
            aN[6] = z9[0];
            aN[7] = z9[1];
            aN[8] = z9[2];
            aN[9] = z9[0];
            aN[10] = z9[1];
            aN[11] = z9[2];
            aN[12] = wJ[0];
            aN[13] = wJ[1];
            aN[14] = wJ[2];
            aN[15] = f8[0];
            aN[16] = f8[1];
            aN[17] = f8[2];
            var wg = new vec3.create();
            mat4.identity(uh);
            wg[2] = 0.0;
            oI[0] = 0.0;
            oI[1] = 0.0;
            wg[0] = uI.GF;
            wg[1] = 0.0;
            mat4.multiplyVec3(uh, wg);
            oI[2] = wg[0];
            oI[3] = wg[1];
            wg[0] = uI.GF;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[4] = wg[0];
            oI[5] = wg[1];
            wg[0] = uI.GF;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[6] = wg[0];
            oI[7] = wg[1];
            wg[0] = 0.0;
            wg[1] = 1.0;
            mat4.multiplyVec3(uh, wg);
            oI[8] = wg[0];
            oI[9] = wg[1];
            oI[10] = 0.0;
            oI[11] = 0.0;
            var L8 = Math.max(2, xL * 2);
            MU = new Uint16Array(L8 * 3);
            for (var G = 0; G < L8 * 3; G++) {
                MU[G] = G;
            }
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (aN.length < 3) {
            return;
        }
        var I = new Array(100000.0, 100000.0, 100000.0);
        var sb = new Array(-100000.0, -100000.0, -100000.0);
        var OT = aN.length / 3;
        for (var G = 0; G < OT; G++) {
            if (aN[3 * G + 0] < I[0]) I[0] = aN[3 * G + 0];
            if (aN[3 * G + 1] < I[1]) I[1] = aN[3 * G + 1];
            if (aN[3 * G + 2] < I[2]) I[2] = aN[3 * G + 2];
            if (aN[3 * G + 0] > sb[0]) sb[0] = aN[3 * G + 0];
            if (aN[3 * G + 1] > sb[1]) sb[1] = aN[3 * G + 1];
            if (aN[3 * G + 2] > sb[2]) sb[2] = aN[3 * G + 2];
        }
        OT = uf.length / 3;
        for (var G = 0; G < OT; G++) {
            if (uf[3 * G + 0] < I[0]) I[0] = uf[3 * G + 0];
            if (uf[3 * G + 1] < I[1]) I[1] = uf[3 * G + 1];
            if (uf[3 * G + 2] < I[2]) I[2] = uf[3 * G + 2];
            if (uf[3 * G + 0] > sb[0]) sb[0] = uf[3 * G + 0];
            if (uf[3 * G + 1] > sb[1]) sb[1] = uf[3 * G + 1];
            if (uf[3 * G + 2] > sb[2]) sb[2] = uf[3 * G + 2];
        }
        OT = V.length / 3;
        for (var G = 0; G < OT; G++) {
            if (V[3 * G + 0] < I[0]) I[0] = V[3 * G + 0];
            if (V[3 * G + 1] < I[1]) I[1] = V[3 * G + 1];
            if (V[3 * G + 2] < I[2]) I[2] = V[3 * G + 2];
            if (V[3 * G + 0] > sb[0]) sb[0] = V[3 * G + 0];
            if (V[3 * G + 1] > sb[1]) sb[1] = V[3 * G + 1];
            if (V[3 * G + 2] > sb[2]) sb[2] = V[3 * G + 2];
        }
        this.cT = CmiHelpers.Up(I, sb);
        this.size = CmiHelpers.b8(I, sb);
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (AN != null) this.h.deleteBuffer(AN);
        AN = null;
        if (Oq != null) this.h.deleteBuffer(Oq);
        Oq = null;
        if (pL != null) this.h.deleteBuffer(pL);
        pL = null;
        if (Nk != null) this.h.deleteBuffer(Nk);
        Nk = null;
        if (q9 != null) this.h.deleteBuffer(q9);
        q9 = null;
        if (ua != null) this.h.deleteTexture(ua);
        ua = null;
        if (BV != null) this.h.deleteTexture(BV);
        BV = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        AN = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.bufferData(this.h.ARRAY_BUFFER, aN, this.h.STATIC_DRAW);
        AN.itemSize = 3;
        AN.numItems = aN.length / 3;
        Oq = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.bufferData(this.h.ARRAY_BUFFER, uf, this.h.STATIC_DRAW);
        Oq.itemSize = 3;
        Oq.numItems = uf.length / 3;
        pL = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, pL);
        this.h.bufferData(this.h.ARRAY_BUFFER, V, this.h.STATIC_DRAW);
        pL.itemSize = 3;
        pL.numItems = V.length / 3;
        Nk = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.bufferData(this.h.ARRAY_BUFFER, oI, this.h.STATIC_DRAW);
        Nk.itemSize = 2;
        Nk.numItems = oI.length / 2;
        q9 = this.h.createBuffer();
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.bufferData(this.h.ELEMENT_ARRAY_BUFFER, MU, this.h.STATIC_DRAW);
        q9.itemSize = 1;
        q9.numItems = MU.length;
        ua = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, uI.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
        BV = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, BV);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, gm.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 1 * 3);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (ne.A == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x62\x65\x6c\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        j_.EP(this.gR(), 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.vertexAttribPointer(j_.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 1 * 3);
        j_.EP(this.gR(), 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, pL);
        this.h.vertexAttribPointer(j_.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, xL * 2);
        j_.fb(0);
        ne.EP(this.v.bgColIni, 0);
        this.h.activeTexture(this.h.TEXTURE0);
        if ((this.isHighlighted == true) || ((this.Ck != null) && (this.Ck.contentHighlighted == true))) this.h.bindTexture(this.h.TEXTURE_2D, BV);
        else this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.vertexAttribPointer(ne.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.vertexAttribPointer(ne.tV, 2, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        ne.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
I5.prototype = new CmiBaseObject();
var DB = function(B) {
    var BB = "\x63\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74";
    var aN = new Float32Array(18);
    var mL = new Float32Array();
    var uf = new Float32Array();
    var oI = new Float32Array(12);
    var MU = new Uint16Array();
    var AN = null;
    var sK = null;
    var Oq = null;
    var Nk = null;
    var q9 = null;
    var ne = null;
    var j_ = null;
    var U8 = "";
    var BK = 0.0;
    var Fj = 0.0;
    var ua = null;
    var uI = null;
    var BV = null;
    var gm = null;
    var w5 = 0;
    var Hy = 0;
    var FZ = "\x6c\x69\x6e";
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    this.P8 = function() {
        return BB;
    };
    this.qd = function() {
        return this.cT;
    };
    this.v = B;
    this.h = B.f7();
    this.yZ = 4;
    this.color[3] = 0.0;
    ne = this.v.getShader("\x54\x65\x78\x74");
    j_ = this.v.getShader("\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72");
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x64\x49") {
            var fF;
            var Yp = "";
            var zJ = "";
            var R3 = 0;
            var utPos = 0;
            var p = new Float32Array([0.0, 0.0, 0.0]);
            this.Yz = false;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) this.entityName = jsonObject.eNm;
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) {
                this.color = jsonObject.col;
                this.color[3] = 0.0;
            }
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (jsonObject.fnt) U8 = jsonObject.fnt;
            if (jsonObject.dimTxt) Yp = jsonObject.dimTxt;
            if (jsonObject.utTxt) zJ = jsonObject.utTxt;
            if (jsonObject.tolTyp) R3 = jsonObject.tolTyp;
            if (jsonObject.typ) FZ = jsonObject.typ;
            if (jsonObject.hT) Fj = jsonObject.hT;
            if (jsonObject.wD) BK = jsonObject.wD;
            if (jsonObject.utPos) utPos = jsonObject.utPos;
            if (jsonObject.elA) p = new Float32Array(jsonObject.elA);
            if (jsonObject.vAar) uf = new Float32Array(jsonObject.vAar);
            if (jsonObject.vAln) mL = new Float32Array(jsonObject.vAln);
            if (jsonObject.vAtx) fF = new Float32Array(jsonObject.vAtx);
            if ((BK == 0.0) || (Fj == 0.0)) {
                var H2 = new Array(fF[0], fF[1], fF[2]);
                var Op = new Array(fF[3], fF[4], fF[5]);
                var li = new Array(fF[6], fF[7], fF[8]);
                var it = new Array(fF[9], fF[10], fF[11]);
                BK = CmiHelpers.b8(H2, Op);
                Fj = CmiHelpers.b8(H2, it);
            }
            if ((Fj == 0.0) || (BK == 0.0)) {
                this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x54\x65\x78\x74\x20\x77\x69\x64\x74\x68\x20\x6f\x72\x20\x68\x65\x69\x67\x68\x74\x20\x3d\x20\x30", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if ((R3 == 4) && (zJ.length > 0)) {
                uI = this.v._v(Fj, BK, U8, Yp, this.gR(), 0, zJ, utPos);
                gm = this.v._v(Fj, BK, U8, Yp, this.v.hlColIni, 0, zJ, utPos);
            } else {
                uI = this.v._v(Fj, BK, U8, Yp, this.gR(), 0);
                gm = this.v._v(Fj, BK, U8, Yp, this.v.hlColIni, 0);
            }
            if (uI == null) {
                this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x43\x61\x6e\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x74\x65\x78\x74\x20\x69\x6d\x61\x67\x65", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if (FZ == "\x61\x6e\x67") {
                if (!jsonObject.adInf) {
                    this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4d\x69\x73\x73\x69\x6e\x67\x20\x65\x6e\x74\x69\x74\x79\x20\x69\x6e\x66\x6f\x72\x6d\x61\x74\x69\x6f\x6e\x20\x61\x64\x49\x6e\x66", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                var p5 = 1.0;
                var In = 0.0;
                var wC = 90.0;
                var Xz = 0.0;
                var zr = 90.0;
                var IU = 0;
                var Ql = 0;
                var uh = new mat4.createIdent();
                var xt = new Float32Array([0.0, 0.0, 0.0]);
                var Xt = new Float32Array([0.0, 0.0, 0.0]);
                var wJ = new Float32Array([0.0, 0.0, 0.0]);
                var z9 = new Float32Array([0.0, 0.0, 0.0]);
                var tD = new Float32Array([0.0, 0.0, 0.0]);
                var fH = new Float32Array();
                var f2 = true;
                var d3;
                var v3 = new Float32Array(6);
                fH = new Float32Array(jsonObject.adInf);
                p[0] = fH[0];
                p[1] = fH[1];
                p[2] = fH[2];
                xt[0] = fH[3];
                xt[1] = fH[4];
                xt[2] = fH[5];
                p5 = fH[6];
                In = fH[7];
                wC = fH[8];
                Xz = fH[9];
                zr = fH[10];
                if (fH.length > 11) {
                    f2 = false;
                    v3[0] = fH[11];
                    v3[1] = fH[12];
                    v3[2] = fH[13];
                    v3[3] = fH[14];
                    v3[4] = fH[15];
                    v3[5] = fH[16];
                }
                if ((p[0] != 0.0) || (p[1] != 0.0) || (p[2] != 0.0)) {
                    mat4.AddXRotation(uh, p[0] * Math.PI / 180.0);
                    mat4.AddYRotation(uh, p[1] * Math.PI / 180.0);
                    mat4.AddZRotation(uh, p[2] * Math.PI / 180.0);
                }
                mat4.addTranslation(uh, xt);
                var pH;
                var _D;
                var eX = new Float32Array([0.0, 0.0, 0.0]);
                if ((f2) && (Xz != zr)) {
                    pH = CmiHelpers.q3(eX, p5, In, wC, uh, false);
                    _D = CmiHelpers.q3(eX, p5, Xz, zr, uh, false);
                } else {
                    pH = CmiHelpers.q3(eX, p5, In, wC, uh, false);
                    _D = new Float32Array();
                }
                if (f2) d3 = new Float32Array(pH.length + _D.length + mL.length);
                else d3 = new Float32Array(pH.length + _D.length + mL.length + 6);
                var Df = 0;
                for (var G = 0; G < mL.length; G++) {
                    d3[Df] = mL[G];
                    Df++;
                }
                for (var G = 0; G < pH.length; G++) {
                    d3[Df] = pH[G];
                    Df++;
                }
                for (var G = 0; G < _D.length; G++) {
                    d3[Df] = _D[G];
                    Df++;
                }
                if (!f2) {
                    d3[Df] = v3[0];
                    Df++;
                    d3[Df] = v3[1];
                    Df++;
                    d3[Df] = v3[2];
                    Df++;
                    d3[Df] = v3[3];
                    Df++;
                    d3[Df] = v3[4];
                    Df++;
                    d3[Df] = v3[5];
                    Df++;
                }
                mL = new Float32Array(d3);
            }
            aN[0] = fF[0];
            aN[1] = fF[1];
            aN[2] = fF[2];
            aN[3] = fF[3];
            aN[4] = fF[4];
            aN[5] = fF[5];
            aN[6] = fF[6];
            aN[7] = fF[7];
            aN[8] = fF[8];
            aN[9] = fF[6];
            aN[10] = fF[7];
            aN[11] = fF[8];
            aN[12] = fF[9];
            aN[13] = fF[10];
            aN[14] = fF[11];
            aN[15] = fF[0];
            aN[16] = fF[1];
            aN[17] = fF[2];
            w5 = uf.length / 9;
            Hy = mL.length / 6;
            oI[0] = 0.0;
            oI[1] = 0.0;
            oI[2] = uI.GF;
            oI[3] = 0.0;
            oI[4] = uI.GF;
            oI[5] = 1.0;
            oI[6] = uI.GF;
            oI[7] = 1.0;
            oI[8] = 0.0;
            oI[9] = 1.0;
            oI[10] = 0.0;
            oI[11] = 0.0;
            var L8 = Math.max(w5 * 3, Hy * 2);
            MU = new Uint16Array(L8 * 3);
            for (var G = 0; G < L8 * 3; G++) {
                MU[G] = G;
            }
            this.iN();
            this.cm();
            this.Yz = true;
        } else {
            this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function() {
        if (aN.length < 3) {
            return;
        }
        var I = new Array(100000.0, 100000.0, 100000.0);
        var sb = new Array(-100000.0, -100000.0, -100000.0);
        var OT = aN.length / 3;
        for (var G = 0; G < OT; G++) {
            if (aN[3 * G + 0] < I[0]) I[0] = aN[3 * G + 0];
            if (aN[3 * G + 1] < I[1]) I[1] = aN[3 * G + 1];
            if (aN[3 * G + 2] < I[2]) I[2] = aN[3 * G + 2];
            if (aN[3 * G + 0] > sb[0]) sb[0] = aN[3 * G + 0];
            if (aN[3 * G + 1] > sb[1]) sb[1] = aN[3 * G + 1];
            if (aN[3 * G + 2] > sb[2]) sb[2] = aN[3 * G + 2];
        }
        OT = uf.length / 3;
        for (var G = 0; G < OT; G++) {
            if (uf[3 * G + 0] < I[0]) I[0] = uf[3 * G + 0];
            if (uf[3 * G + 1] < I[1]) I[1] = uf[3 * G + 1];
            if (uf[3 * G + 2] < I[2]) I[2] = uf[3 * G + 2];
            if (uf[3 * G + 0] > sb[0]) sb[0] = uf[3 * G + 0];
            if (uf[3 * G + 1] > sb[1]) sb[1] = uf[3 * G + 1];
            if (uf[3 * G + 2] > sb[2]) sb[2] = uf[3 * G + 2];
        }
        OT = mL.length / 3;
        for (var G = 0; G < OT; G++) {
            if (mL[3 * G + 0] < I[0]) I[0] = mL[3 * G + 0];
            if (mL[3 * G + 1] < I[1]) I[1] = mL[3 * G + 1];
            if (mL[3 * G + 2] < I[2]) I[2] = mL[3 * G + 2];
            if (mL[3 * G + 0] > sb[0]) sb[0] = mL[3 * G + 0];
            if (mL[3 * G + 1] > sb[1]) sb[1] = mL[3 * G + 1];
            if (mL[3 * G + 2] > sb[2]) sb[2] = mL[3 * G + 2];
        }
        this.cT = CmiHelpers.Up(I, sb);
        this.size = CmiHelpers.b8(I, sb);
        this.bn = this.size * 0.5;
    };
    this.fl = function() {
        var N = this.v.f7();
        if (AN != null) this.h.deleteBuffer(AN);
        AN = null;
        if (Oq != null) this.h.deleteBuffer(Oq);
        Oq = null;
        if (sK != null) this.h.deleteBuffer(sK);
        sK = null;
        if (Nk != null) this.h.deleteBuffer(Nk);
        Nk = null;
        if (q9 != null) this.h.deleteBuffer(q9);
        q9 = null;
        if (ua != null) this.h.deleteTexture(ua);
        ua = null;
        if (BV != null) this.h.deleteTexture(BV);
        BV = null;
    };
    this.iN = function() {
        var N = this.v.f7();
        this.fl();
        AN = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.bufferData(this.h.ARRAY_BUFFER, aN, this.h.STATIC_DRAW);
        AN.itemSize = 3;
        AN.numItems = aN.length / 3;
        Oq = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.bufferData(this.h.ARRAY_BUFFER, uf, this.h.STATIC_DRAW);
        Oq.itemSize = 3;
        Oq.numItems = uf.length / 3;
        sK = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, sK);
        this.h.bufferData(this.h.ARRAY_BUFFER, mL, this.h.STATIC_DRAW);
        sK.itemSize = 3;
        sK.numItems = mL.length / 3;
        Nk = this.h.createBuffer();
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.bufferData(this.h.ARRAY_BUFFER, oI, this.h.STATIC_DRAW);
        Nk.itemSize = 2;
        Nk.numItems = oI.length / 2;
        q9 = this.h.createBuffer();
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.bufferData(this.h.ELEMENT_ARRAY_BUFFER, MU, this.h.STATIC_DRAW);
        q9.itemSize = 1;
        q9.numItems = MU.length;
        ua = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, uI.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
        BV = this.h.createTexture();
        this.h.bindTexture(this.h.TEXTURE_2D, BV);
        this.h.pixelStorei(this.h.UNPACK_FLIP_Y_WEBGL, true);
        this.h.texImage2D(this.h.TEXTURE_2D, 0, this.h.RGBA, this.h.RGBA, this.h.UNSIGNED_BYTE, gm.Xc);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_S, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_WRAP_T, this.h.CLAMP_TO_EDGE);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MAG_FILTER, this.h.LINEAR);
        this.h.texParameteri(this.h.TEXTURE_2D, this.h.TEXTURE_MIN_FILTER, this.h.LINEAR_MIPMAP_LINEAR);
        this.h.generateMipmap(this.h.TEXTURE_2D);
        this.h.bindTexture(this.h.TEXTURE_2D, null);
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        uU.EP(fA, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, w5 * 3);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.vertexAttribPointer(uU.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        uU.fb(0);
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        var N = this.v.f7();
        if (N == null) {
            this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (ne.A == null) {
            this.v.s("\x43\x6d\x69\x44\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.Pw(useViewportCulling) == false) return 0;
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        j_.EP(this.gR(), 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Oq);
        this.h.vertexAttribPointer(j_.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, w5 * 3);
        j_.fb(0);
        j_.EP(this.gR(), 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, sK);
        this.h.vertexAttribPointer(j_.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.drawArrays(this.h.LINES, 0, Hy * 2);
        j_.fb(0);
        ne.EP(this.v.bgColIni, 0);
        this.h.activeTexture(this.h.TEXTURE0);
        if ((this.isHighlighted == true) || ((this.Ck != null) && (this.Ck.contentHighlighted == true))) this.h.bindTexture(this.h.TEXTURE_2D, BV);
        else this.h.bindTexture(this.h.TEXTURE_2D, ua);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, AN);
        this.h.vertexAttribPointer(ne.o, 3, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ARRAY_BUFFER, Nk);
        this.h.vertexAttribPointer(ne.tV, 2, this.h.FLOAT, false, 0, 0);
        this.h.bindBuffer(this.h.ELEMENT_ARRAY_BUFFER, q9);
        this.h.drawArrays(this.h.TRIANGLES, 0, 2 * 3);
        ne.fb(0);
        if (this.W != null) {
            this.v.XN(true, true);
        }
        return 0;
    };
};
DB.prototype = new CmiBaseObject();
var CmiComponentObject = function(B) {
    var BB = "\x63\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74";
    var y0 = "";
    var zi = null;
    var WO = null;
    var GN = new Float32Array([0.0, 0.0, 0.0]);
    var ej = new Float32Array([0.0, 0.0, 0.0]);
    var kM = false;
    var xR = mat4.createIdent();
    var Wx = true;
    var FM = B.Yy();
    var f0 = B.Na();
    var AO = B.Xp();
    var Rv = false;
    var uC = new Array();
    var K5 = new Array();
    var BH = new Array();
    var mk = new Array();
    var fO = false;
    var pa = null;
    var cV = false;
    this.V3 = "";
    this.qr = null;
    this.Uo = null;
    this.nm = null;
    this.GB = null;
    this.Rj = null;
    this.normalMap = null;
    this.jW = false;
    this.zF = false;
    this._x = false;
    this.ZX = false;
    this.P8 = function() {
        return BB;
    };
    this.ig = function() {
        return WO;
    };
    this.mb = function(nj) {
        WO = nj;
    };
    this.av = function() {
        return y0;
    };
    this.ho = function(wK) {
        y0 = wK;
    };
    this.TT = function() {
        return zi;
    };
    this.ay = function() {
        return Wx;
    };
    this.YL = function(cO) {
        Wx = cO;
    };
    this.OH = function() {
        return Rv;
    };
    this.em = function(U3) {
        Rv = U3;
    };
    this.KQ = function() {
        return xR;
    };
    this.pS = function(Xf) {
        xR.set(Xf);
    };
    this.qU = function(p1) {
        kM = p1;
    };
    this.kl = function() {
        return kM;
    };
    this.setEulerAngles = function(BW) {
        if ((BW != undefined) && (BW.length > 2) && (kM == true)) {
            GN[0] = BW[0];
            GN[1] = BW[1];
            GN[2] = BW[2];
            xR = mat4.createIdent();
            mat4.AddXRotation(xR, GN[0] * Math.PI / 180.0);
            mat4.AddYRotation(xR, GN[1] * Math.PI / 180.0);
            mat4.AddZRotation(xR, GN[2] * Math.PI / 180.0);
            mat4.addTranslation(xR, ej);
        }
    };
    this.getEulerAngles = function() {
        return GN;
    };
    this.Rx = function(Cj) {
        if ((Cj != undefined) && (Cj.length > 2) && (kM == true)) {
            ej[0] = Cj[0];
            ej[1] = Cj[1];
            ej[2] = Cj[2];
            xR = mat4.createIdent();
            mat4.AddXRotation(xR, GN[0] * Math.PI / 180.0);
            mat4.AddYRotation(xR, GN[1] * Math.PI / 180.0);
            mat4.AddZRotation(xR, GN[2] * Math.PI / 180.0);
            mat4.addTranslation(xR, ej);
        }
    };
    this.Tu = function() {
        return ej;
    };
    this.qd = function() {
        return this.cT;
    };
    this.V5 = function() {
        if (fO == false) this.Mu();
        return uC;
    };
    this.aW = function() {
        if (fO == false) this.Mu();
        return K5;
    };
    this.ol = function() {
        if (fO == false) this.Mu();
        return mk;
    };
    this.DO = false;
    this.aF = null;
    this.v = B;
    this.h = B.f7();
    this.yZ = 18;
    this.isComponentObject = true;
    this.HN = function(qr) {
        this.Uo = this.v.WA(qr);
        if (this.Uo != null) {
            this.qr = qr;
            this.jW = true;
        }
    };
    this.aM = function(qr) {
        this.GB = this.v.WA(qr);
        if (this.GB != null) {
            this.nm = qr;
            this.zF = true;
        }
    };
    this.oR = function(qr) {
        this.normalMap = this.v.WA(qr);
        if (this.normalMap != null) {
            this.Rj = qr;
            if (qr == "\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70") this.ZX = true;
            else this.ZX = false;
            this._x = true;
        }
    };
    this.setShader = function(xl) {
        if (!xl) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x73\x68\x61\x64\x65\x72\x20\x67\x69\x76\x65\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (xl.usable == false) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x53\x68\x61\x64\x65\x72\x20\x6e\x6f\x74\x20\x75\x73\x61\x62\x6c\x65", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (xl.zx == "\x54\x65\x78\x74\x75\x72\x65\x33\x44") {
            if (this.qr == null) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x61\x6d\x65\x20\x6e\x6f\x74\x20\x67\x69\x76\x65\x6e", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            this.Uo = this.v.WQ(this.qr);
            if (this.Uo == null) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + this.qr, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if (this.Uo.XY) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + this.qr, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            this.jW = true;
        } else if ((xl.zx == "\x47\x65\x6e\x65\x72\x69\x63") || (xl.zx == "\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70")) {
            if (this.nm == null) {
                this.nm = this.v.PN() + "\x2f\x47\x65\x6e\x65\x72\x69\x63\x54\x65\x78\x74\x75\x72\x65\x2e\x6a\x70\x67";
            }
            this.GB = this.v.WQ(this.nm);
            if (this.GB == null) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + lX, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if (this.GB.XY) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + lX, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if (this.Rj == null) {
                this.Rj = this.v.PN() + "\x2f\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70\x2e\x6a\x70\x67";
                this.ZX = true;
            } else if (this.Rj.indexOf("\x47\x65\x6e\x65\x72\x69\x63\x42\x75\x6d\x70\x4d\x61\x70") != -1) {
                this.ZX = true;
            }
            this.normalMap = this.v.WQ(this.Rj);
            if (this.normalMap == null) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64\x20" + nK, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if (this.normalMap.XY) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x73\x65\x74\x53\x68\x61\x64\x65\x72", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29\x20" + nK, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            this.zF = true;
            this._x = true;
        }
        this.shaderObject = xl;
        return 0;
    };
    this.EG = function() {
        var G = 0;
        var Ap = WO.UB();
        for (G = 0; G < BH.length; G++) {
            BH[G] = null;
        }
        BH = new Array();
        for (G = 0; G < Ap.length; G++) {
            if (kM == true) {
                if ((Ap[G].yZ != 18) && (Ap[G].yZ != 10)) BH.push(Ap[G]);
            } else BH.push(Ap[G]);
        }
        for (G = 0; G < uC.length; G++) {
            BH.push(uC[G]);
        }
        for (G = 0; G < K5.length; G++) {
            BH.push(K5[G]);
        }
        BH.sort(CmiHelpers.F1);
        return 0;
    };
    this.xc = function() {
        this.Mu();
        return 0;
    };
    this.Mu = function() {
        fO = true;
        var G = 0;
        for (G = 0; G < uC.length; G++) {
            uC[G] = null;
        }
        uC = new Array();
        for (G = 0; G < mk.length; G++) {
            mk[G] = null;
        }
        mk = new Array();
        if (y0.length > 0) {
            zi = this.v.v9(y0);
            if ((zi == null) || (zi.nj == null)) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x62\x75\x69\x6c\x64\x53\x75\x62\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x41\x72\x72\x61\x79", "\x4e\x6f\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x6d\x6f\x64\x65\x6c\x20\x66\x6f\x75\x6e\x64\x20\x28" + y0 + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            if ((zi.mF() == -1)) {
                this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x62\x75\x69\x6c\x64\x53\x75\x62\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x41\x72\x72\x61\x79", "\x54\x65\x6d\x70\x6c\x61\x74\x65\x20\x6d\x6f\x64\x65\x6c\x20\x68\x61\x73\x20\x65\x72\x72\x6f\x72\x73\x20\x28" + y0 + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return -1;
            }
            var entities = WO.RH();
            for (G = 0; G < entities.length; G++) {
                if (entities[G].isComponentObject == true) {
                    var BS = new CmiComponentObject(this.v);
                    BS.ho(entities[G].av());
                    BS.Rk = entities[G].Rk;
                    BS.entityName = entities[G].entityName;
                    BS.V3 = this.V3 + "\x2e" + entities[G].entityName;
                    BS.bC = entities[G].bC;
                    BS.u7 = entities[G].u7;
                    BS.PF = entities[G].PF;
                    BS.color = entities[G].color;
                    BS.shaderObject = entities[G].shaderObject;
                    BS.qr = entities[G].qr;
                    BS.Uo = entities[G].Uo;
                    BS.nm = entities[G].nm;
                    BS.GB = entities[G].GB;
                    BS.Rj = entities[G].Rj;
                    BS.normalMap = entities[G].normalMap;
                    BS.jW = entities[G].jW;
                    BS.zF = entities[G].zF;
                    BS._x = entities[G]._x;
                    BS.ZX = entities[G].ZX;
                    BS.Oj = entities[G].Oj;
                    BS.size = entities[G].size;
                    BS.bn = BS.size * 0.5;
                    if (entities[G].ue() != null) BS.aj(entities[G].ue().FI());
                    BS.qU(true);
                    BS.mb(entities[G].ig());
                    BS.pS(entities[G].KQ());
                    BS.em(entities[G].OH());
                    BS.YL(entities[G].ay());
                    BS.cm();
                    BS.Yz = true;
                    BS.aF = entities[G];
                    uC.push(BS);
                    if ((entities[G].u7.length > 0) || (entities[G].OH() == true)) {
                        var T1 = new wd();
                        T1.pM = BS;
                        T1.uM = BS.V3;
                        if ((entities[G].u7.length == 0) && (entities[G].yZ != 10)) T1.V1 = true;
                        mk.push(T1);
                        Rv = true;
                    }
                    BS.Mu();
                } else if (entities[G].yZ == 10) {
                    var F7 = new CmiLocatorObject(this.v);
                    F7.Rk = entities[G].Rk;
                    F7.entityName = entities[G].entityName;
                    F7.np = entities[G].np;
                    F7.u7 = entities[G].u7;
                    if (entities[G].ue() != null) F7.aj(entities[G].ue().FI());
                    var f6 = new Float32Array([entities[G].origin[0], entities[G].origin[1], entities[G].origin[2]]);
                    var _j = new Float32Array([entities[G].p[0], entities[G].p[1], entities[G].p[2]]);
                    F7.bK(f6[0], f6[1], f6[2], _j[0], _j[1], _j[2]);
                    mat4.multiplyVec3(xR, f6);
                    F7.lt[0] = f6[0];
                    F7.lt[1] = f6[1];
                    F7.lt[2] = f6[2];
                    var yR = CmiHelpers.yo(xR);
                    F7.hP[0] = CmiHelpers.Rf(yR[0]) + _j[0];
                    F7.hP[1] = CmiHelpers.Rf(yR[1]) + _j[1];
                    F7.hP[2] = CmiHelpers.Rf(yR[2]) + _j[2];
                    F7.Yz = true;
                    K5.push(F7);
                    var T1 = new wd();
                    T1.pM = F7;
                    T1.uM = this.V3 + "\x2e" + F7.entityName;
                    mk.push(T1);
                } else if (entities[G].u7.length > 0) {
                    var T1 = new wd();
                    T1.pM = entities[G];
                    T1.uM = this.V3 + "\x2e" + entities[G].entityName;
                    mk.push(T1);
                    Rv = true;
                };
            }
        } else {
            var entities = WO.RH();
            for (G = 0; G < entities.length; G++) {
                if (entities[G].isComponentObject == true) {
                    entities[G].V3 = this.V3 + "\x2e" + entities[G].entityName;
                    if ((entities[G].u7.length > 0) || (entities[G].OH() == true)) {
                        var T1 = new wd();
                        T1.pM = entities[G];
                        T1.uM = this.V3 + "\x2e" + entities[G].entityName;
                        if ((entities[G].u7.length == 0) && (entities[G].yZ != 10)) T1.V1 = true;
                        mk.push(T1);
                        Rv = true;
                    }
                    entities[G].Mu();
                } else if ((entities[G].u7.length > 0) || (entities[G].yZ == 10)) {
                    var T1 = new wd();
                    T1.pM = entities[G];
                    T1.uM = this.V3 + "\x2e" + entities[G].entityName;
                    mk.push(T1);
                    Rv = true;
                };
            }
        }
        this.EG();
        return 0;
    };
    this.Uf = function(jsonObject) {
        if (jsonObject.clNm == "\x63\x4d\x70") {
            if (jsonObject.tpNm) y0 = jsonObject.tpNm;
            if (jsonObject.aNr) this.Rk = jsonObject.aNr;
            if (jsonObject.eNm) {
                this.entityName = jsonObject.eNm;
                this.V3 = this.entityName;
            }
            if (jsonObject.cAt) this.bC = jsonObject.cAt;
            if (jsonObject.sTx) this.u7 = jsonObject.sTx;
            if (jsonObject.hRf) this.PF = jsonObject.hRf;
            if (jsonObject.col) this.color = jsonObject.col;
            if (jsonObject.siZ) {
                this.size = jsonObject.siZ;
                this.bn = this.size * 0.5;
            }
            if (jsonObject.lAn) this.aj(jsonObject.lAn);
            if (jsonObject.ZE != null) Wx = jsonObject.ZE;
            if (jsonObject.tEx) {
                if (jsonObject.tEx.indexOf("\x2e") != -1) {
                    this.qr = this.v.PN() + "\x2f" + jsonObject.tEx;
                } else {
                    this.qr = this.v.PN() + "\x2f" + jsonObject.tEx + "\x2e\x6a\x70\x67";
                };
            }
            if (jsonObject.shPar) {
                this.Oj = jsonObject.shPar;
                if (this.Oj.baseTexture != undefined) {
                    if (this.Oj.baseTexture.indexOf("\x2e") != -1) {
                        this.nm = this.v.PN() + "\x2f" + this.Oj.baseTexture;
                    } else {
                        this.nm = this.v.PN() + "\x2f" + this.Oj.baseTexture + "\x2e\x6a\x70\x67";
                    };
                }
                if (this.Oj.normalMap != undefined) {
                    if (this.Oj.normalMap.indexOf("\x2e") != -1) {
                        this.Rj = this.v.PN() + "\x2f" + this.Oj.normalMap;
                    } else {
                        this.Rj = this.v.PN() + "\x2f" + this.Oj.normalMap + "\x2e\x6a\x70\x67";
                    };
                };
            }
            if (jsonObject.shNm) {
                var xl = this.v.getShader(jsonObject.shNm);
                if (this.setShader(xl) != 0) {
                    this.shaderObject = null;
                };
            }
            if (y0.length > 0) {
                kM = true;
                zi = this.v.v9(y0);
                if ((zi == null) || (zi.nj == null)) {
                    this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x4e\x6f\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x6d\x6f\x64\x65\x6c\x20\x66\x6f\x75\x6e\x64\x20\x28" + y0 + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                if ((zi.mF() == -1)) {
                    this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x54\x65\x6d\x70\x6c\x61\x74\x65\x20\x6d\x6f\x64\x65\x6c\x20\x68\x61\x73\x20\x65\x72\x72\x6f\x72\x73\x20\x28" + y0 + "\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return -1;
                }
                WO = zi.nj;
                if (jsonObject.lOc) {
                    vj = new Float32Array(jsonObject.lOc);
                    if (vj.length >= 16) {
                        xR.set(vj);
                    };
                } else {
                    if (jsonObject.org) ej = new Float32Array(jsonObject.org);
                    if (jsonObject.elA) GN = new Float32Array(jsonObject.elA);
                    mat4.AddXRotation(xR, GN[0] * Math.PI / 180.0);
                    mat4.AddYRotation(xR, GN[1] * Math.PI / 180.0);
                    mat4.AddZRotation(xR, GN[2] * Math.PI / 180.0);
                    mat4.addTranslation(xR, ej);
                }
                this.Yz = true;
            } else {
                WO = new CmiModel(this.v);
                WO.uR = this;
                WO.Uf(jsonObject);
                this.Yz = true;
            }
            var T0 = WO.bB();
            if (this.color[3] > T0) this.color[3] = T0;
            if (WO.OH() == true) Rv = true;
        } else {
            this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e", "\x57\x72\x6f\x6e\x67\x20\x63\x6c\x61\x73\x73\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x61\x64\x46\x72\x6f\x6d\x4a\x53\x4f\x4e\x20\x63\x61\x6c\x6c", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
    };
    this.cm = function(MS) {
        if (fO == false) this.Mu();
        if (y0.length > 0) {
            if ((zi == null) || (zi.mF() < 1)) return;
        }
        if (WO.Dd() == false) WO.cm();
        var cP = WO.a4();
        this.size = WO.gd();
        this.cT = new Array(cP[0], cP[1], cP[2]);
        this.bn = this.size * 0.5;
        mat4.multiplyVec3(xR, this.cT);
    };
    this.O5 = function(uU, fA) {
        if ((this.Yz == false) || (this.lB(true) == false)) return -1;
        if (this.h == null) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x47\x4c\x20\x43\x6f\x6e\x74\x65\x78\x74", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        } else if (uU == null) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74\x2e\x64\x72\x61\x77\x49\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x4d\x6f\x64\x65", "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        var entities = WO.RH();
        var _n = WO.rN();
        if (kM) {
            this.v.Xj(false, false);
            mat4.multiply(FM, xR);
            WO.uR = this;
            for (var G = 0; G < entities.length; G++) {
                if (entities[G].yZ != 10) entities[G].O5(uU, fA);
            }
            for (var G = 0; G < _n.length; G++) {
                _n[G].pM.O5(uU, _n[G].Hk);
            }
            for (var G = 0; G < mk.length; G++) {
                mk[G].pM.O5(uU, mk[G].Hk);
            }
            WO.uR = null;
            this.v.XN(false, false);
        } else {
            for (var G = 0; G < entities.length; G++) {
                entities[G].O5(uU, fA);
            }
            for (var G = 0; G < _n.length; G++) {
                _n[G].pM.O5(uU, _n[G].Hk);
            }
            for (var G = 0; G < mk.length; G++) {
                mk[G].pM.O5(uU, mk[G].Hk);
            }
        }
        return 0;
    };
    this.B8 = function(useViewportCulling) {
        if ((this.Yz == false) || (this.lB(false) == false)) return -1;
        if (kM) {
            this.v.Cw();
            this.v.lo();
            if (this.Pw(useViewportCulling) == false) {
                this.v.jR();
                return 0;
            }
            this.v.jR();
        } else if (this.Pw(useViewportCulling) == false) {
            return 0;
        }
        pa = this.v.getCmiModel().LL;
        if (this.shaderObject != null) {
            if (pa == null) {
                this.v.getCmiModel().LL = this;
                cV = true;
            } else {
                cV = false;
            };
        } else if (pa != null) {
            cV = false;
        }
        if (this.W != null) {
            this.v.Xj(true, true);
            mat4.multiply(FM, this.W);
            mat4.inverse(FM, AO);
            mat4.transpose(AO, f0);
        }
        var vt = 0;
        if (this.pk) vt = 2;
        else if (this.isHighlighted) vt = 1;
        else if ((this.Ck != null) && (this.Ck.contentHighlighted)) vt = 1;
        else vt = 0;
        this.v.Xj(WO.RD, WO.Vx);
        this.v.Ba = true;
        mat4.multiply(FM, xR);
        if (WO.RD == true) mat4.inverse(FM, AO);
        if (WO.Vx == true) mat4.transpose(AO, f0);
        WO.uR = this;
        var G = 0;
        var am = true;
        for (G = 0; G < BH.length; G++) {
            if (vt == 1) {
                if (BH[G].isHighlighted == true) am = false;
                BH[G].isHighlighted = true;
                BH[G].B8(useViewportCulling);
                if (am == true) BH[G].isHighlighted = false;
            } else if (vt == 2) {
                BH[G].pk = true;
                BH[G].B8(useViewportCulling);
                BH[G].pk = false;
            } else {
                BH[G].B8(useViewportCulling);
            };
        }
        WO.uR = null;
        this.v.XN(WO.RD, WO.Vx);
        this.v.Ba = false;
        if (this.W != null) {
            this.v.XN(true, true);
        }
        if (cV == true) this.v.getCmiModel().LL = null;
        return 0;
    };
};
CmiComponentObject.prototype = new CmiBaseObject();