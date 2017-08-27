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
var BJ = function(QM, MF, kV) {
    this.name = QM;
    this.message = MF;
    this.context = kV;
};
if (JSON && JSON.stringify && JSON.parse) var bF = bF || (function() {
    var kQ = window.top || window;
    var Tm;
    try {
        Tm = (kQ.name ? JSON.parse(kQ.name) : {});
    } catch (J) {
        Tm = {};
    }

    function R4() {
        kQ.name = JSON.stringify(Tm);
    };
    if (window.addEventListener) window.addEventListener("\x75\x6e\x6c\x6f\x61\x64", R4, false);
    else if (window.attachEvent) window.attachEvent("\x6f\x6e\x75\x6e\x6c\x6f\x61\x64", R4);
    else window.onunload = R4;
    return {
        set: function(name, value) {
            Tm[name] = value;
        },
        get: function(name) {
            return (Tm[name] ? Tm[name] : undefined);
        },
        clear: function() {
            Tm = {};
        },
        dump: function() {
            return JSON.stringify(Tm);
        }
    };
})();
var CmiHelpers = new function() {
    this.fV = function(name, value, o8) {
        var oc;
        if (o8) {
            var NQ = new Date();
            NQ.setTime(NQ.getTime() + (o8 * 24 * 60 * 60 * 1000));
            oc = "\x3b\x20\x65\x78\x70\x69\x72\x65\x73\x3d" + NQ.toGMTString();
        } else oc = "";
        document.cookie = name + "\x3d" + value + oc + "\x3b\x20\x70\x61\x74\x68\x3d\x2f";
    };
    this.Ot = function(name) {
        var c5 = name + "\x3d";
        var qS = document.cookie.split("\x3b");
        for (var G = 0; G < qS.length; G++) {
            var c = qS[G];
            while (c.charAt(0) == "\x20") c = c.substring(1, c.length);
            if (c.indexOf(c5) == 0) return c.substring(c5.length, c.length);
        }
        return null;
    };
    this.au = function(name) {
        fV(name, "", -1);
    };
    this.aJ = function(b_, aS) {
        var rX;
        var L0 = b_.replace(/\\\n/g, "").replace(/\n/g, "");
        if ((typeof(JSON) != "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64") && (JSON.parse)) {
            try {
                rX = JSON.parse(L0);
                if (typeof(rX) == "\x73\x74\x72\x69\x6e\x67") rX = JSON.parse(rX);
            } catch (J) {
                try {
                    rX = eval("\x28" + L0 + "\x29");
                    if (typeof(rX) == "\x73\x74\x72\x69\x6e\x67") rX = eval("\x28" + rX + "\x29");
                } catch (J) {
                    if (aS) aS.s("\x74\x65\x78\x74\x54\x6f\x4f\x62\x6a\x65\x63\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                    return null;
                }
            };
        } else {
            try {
                rX = eval("\x28" + L0 + "\x29");
                if (typeof(rX) == "\x73\x74\x72\x69\x6e\x67") rX = eval("\x28" + rX + "\x29");
            } catch (J) {
                if (aS) aS.s("\x74\x65\x78\x74\x54\x6f\x4f\x62\x6a\x65\x63\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                return null;
            };
        }
        return rX;
    };
    this.addEventListener = function(element, vO, _l, scope) {
        var Db = scope ? function(e) {
            _l.apply(scope, [e]);
        } : _l;
        if (document.addEventListener) element.addEventListener(vO, Db, false);
        else if (document.attachEvent) element.attachEvent("\x6f\x6e" + vO, Db);
    };
    this.lq = function(O, Bo) {
        var VR = null;
        // console.log(O);
        if (typeof(MessageEvent) != "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64") {
            var origin = window.location.protocol + "\x2f\x2f" + window.location.host;
            try {
                VR = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", { // message
                    "\x62\x75\x62\x62\x6c\x65\x73": true, //bubbles
                    "\x63\x61\x6e\x63\x65\x6c\x61\x62\x6c\x65": true, //cancelable
                    "\x64\x61\x74\x61": O, // data
                    "\x6f\x72\x69\x67\x69\x6e": origin, //origin
                    "\x6c\x61\x73\x74\x45\x76\x65\x6e\x74\x49\x64": Bo, //lastEventId
                    "\x76\x69\x65\x77": window //view
                });
                return VR;
            } catch (e) {};
        }
        if (document.createEvent) {
            try {
                VR = document.createEvent("\x4d\x65\x73\x73\x61\x67\x65\x45\x76\x65\x6e\x74"); //MessageEvent
            } catch (e) {
                return null;
            }
            if (VR.initMessageEvent) {
                var origin = window.location.protocol + "\x2f\x2f" + window.location.host;
                VR.initMessageEvent("\x6d\x65\x73\x73\x61\x67\x65", true, true, O, origin, Bo, window, null); //message
                return VR;
            } else {
                return null;
            };
        }
        return null;
    };
    this.Pb = function(J5) {
        if (!J5) return "";
        var QK = J5.substring(0, (J5.indexOf("\x23") == -1) ? J5.length : J5.indexOf("\x23"));
        QK = QK.substring(0, (QK.indexOf("\x3f") == -1) ? QK.length : QK.indexOf("\x3f"));
        QK = QK.substring(QK.lastIndexOf("\x2f") + 1, QK.length);
        return (QK.split("\x2e")[0]);
    };
    this.b8 = function(ky, rI) {
        var L, P, O9;
        L = rI[0] - ky[0];
        P = rI[1] - ky[1];
        O9 = rI[2] - ky[2];
        if ((L == 0.0) && (P == 0.0) && (O9 == 0.0)) {
            return 0.0;
        } else {
            return Math.sqrt((L * L) + (P * P) + (O9 * O9));
        }
    };
    this.Up = function(I, sb) {
        var L, P, O9;
        var Kk = new Array(0.0, 0.0, 0.0);
        if ((!I) || (!sb)) return Kk;
        L = sb[0] - I[0];
        P = sb[1] - I[1];
        O9 = sb[2] - I[2];
        if ((L == 0.0) && (P == 0.0) && (O9 == 0.0)) {
            Kk[0] = 0.0;
            Kk[1] = 0.0;
            Kk[2] = 0.0;
        } else {
            Kk[0] = I[0] + L * 0.5;
            Kk[1] = I[1] + P * 0.5;
            Kk[2] = I[2] + O9 * 0.5;
        }
        return Kk;
    };
    this.Ac = function(angle) {
        while (angle < 0.0) angle = angle + 360.0;
        while (angle > 360.0) angle = angle - 360.0;
        return (angle);
    };
    this.sign = function(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };
    this.Rf = function(angle) {
        return (angle * 180 / 3.141592653589793);
    };
    this.yo = function(B_) {
        var alpha = 0.0,
            beta = 0.0,
            gamma = 0.0;
        var TW = new mat4.create();
        mat4.identity(TW);
        mat4.multiply(TW, B_);
        var d = Math.sqrt(TW[0] * TW[0] + TW[1] * TW[1]);
        if (d != 0.0) {
            beta = Math.atan2(-TW[2], d);
            var GV = this.sign(Math.cos(beta));
            gamma = Math.atan2(TW[1] * GV, TW[0] * GV);
            alpha = Math.atan2(TW[6] * GV, TW[10] * GV);
        } else {
            if (TW[2] < 0) {
                beta = 1.57079632679489661923;
                gamma = 0;
                alpha = Math.atan2(TW[4], TW[5]);
            } else {
                beta = -1.57079632679489661923;
                gamma = 0;
                alpha = -Math.atan2(TW[4], TW[5]);
            };
        }
        return new Array(alpha, beta, gamma);
    };
    this.ey = function(Vs) {
        var Em = new Array(0, 0, 0);
        var rgbColor = new Array(0, 0, 0);
        rgbColor[0] = parseInt(Vs[0] * 255);
        rgbColor[1] = parseInt(Vs[1] * 255);
        rgbColor[2] = parseInt(Vs[2] * 255);
        if ((Vs[0] == 0.0) && (Vs[1] == 0.0) && (Vs[2] == 0.0)) {
            Em[0] = rgbColor[0] + 1;
            Em[1] = rgbColor[1] + 1;
            Em[2] = rgbColor[2] + 1;
        } else {
            Em[0] = rgbColor[0] - 1;
            Em[1] = rgbColor[1] - 1;
            Em[2] = rgbColor[2] - 1;
        }
        return Em;
    };
    this.Bi = function(Vs) {
        var Em = new Array(0, 0, 0);
        var rgbColor = new Array(0, 0, 0);
        var XW = new Array(0.0, 0.0, 0.0);
        rgbColor[0] = parseInt(Vs[0] * 255);
        rgbColor[1] = parseInt(Vs[1] * 255);
        rgbColor[2] = parseInt(Vs[2] * 255);
        if ((Vs[0] == 0.0) && (Vs[1] == 0.0) && (Vs[2] == 0.0)) {
            Em[0] = rgbColor[0] + 1;
            Em[1] = rgbColor[1] + 1;
            Em[2] = rgbColor[2] + 1;
        } else {
            Em[0] = rgbColor[0] - 1;
            Em[1] = rgbColor[1] - 1;
            Em[2] = rgbColor[2] - 1;
        }
        XW[0] = Em[0] / 255;
        XW[1] = Em[0] / 255;
        XW[2] = Em[0] / 255;
        return XW;
    };
    this.zC = function(length, width, To, f8, Qr) {
        var ky = new Float32Array([length, -width * 0.5, 0.0]);
        var rI = new Float32Array([length, width * 0.5, 0.0]);
        if (To != 0.0) {
            var uh = new mat4.create();
            mat4.identity(uh);
            mat4.rotateZ(uh, To * Math.PI / 180.0);
            mat4.multiplyVec3(uh, ky);
            mat4.multiplyVec3(uh, rI);
        }
        f8[0] = ky[0];
        f8[1] = ky[1];
        f8[2] = ky[2];
        Qr[0] = rI[0];
        Qr[1] = rI[1];
        Qr[2] = rI[2];
    };
    this.q3 = function(cT, p5, MG, WN, z5, TS) {
        var qx = 2.0;
        var gu = 6;
        var jH = 0;
        var Dj;
        var xN = qx * p5 + gu;
        var hk = parseInt((xN * ((WN - MG) / 360)));
        if (hk < 3) hk = 3;
        var yW = Math.PI * MG / 180;
        var angle = (WN - MG) / hk;
        var vy = 0.0;
        if (TS) Dj = new Float32Array(hk * 2 * 4);
        else Dj = new Float32Array(hk * 2 * 3);
        var KK = new Float32Array(3);
        var ly = new Float32Array(3);
        var wo = 0;
        var zI = 0.0;
        for (var G = 0; G < hk; G++) {
            if (G == 0) {
                KK[0] = Math.cos(yW) * p5 + cT[0];
                KK[1] = Math.sin(yW) * p5 + cT[1];
                KK[2] = 0.0 + cT[2];
            } else {
                KK[0] = ly[0];
                KK[1] = ly[1];
                KK[2] = ly[2];
            }
            vy = yW + ((G + 1) * Math.PI * angle / 180);
            ly[0] = Math.cos(vy) * p5 + cT[0];
            ly[1] = Math.sin(vy) * p5 + cT[1];
            ly[2] = 0.0 + cT[2];
            if (G == 0) {
                var dx = KK[0] - ly[0];
                var dy = KK[1] - ly[1];
                var Rd = KK[2] - ly[2];
                zI = Math.max(1.0, Math.sqrt((dx * dx) + (dy * dy) + (Rd * Rd)));
            }
            if (TS) {
                Dj[wo + 0] = KK[0];
                Dj[wo + 1] = KK[1];
                Dj[wo + 2] = KK[2];
                Dj[wo + 3] = 0.0;
                Dj[wo + 4] = ly[0];
                Dj[wo + 5] = ly[1];
                Dj[wo + 6] = ly[2];
                Dj[wo + 7] = zI;
                wo = wo + 8;
            } else {
                Dj[wo + 0] = KK[0];
                Dj[wo + 1] = KK[1];
                Dj[wo + 2] = KK[2];
                Dj[wo + 3] = ly[0];
                Dj[wo + 4] = ly[1];
                Dj[wo + 5] = ly[2];
                wo = wo + 6;
            };
        }
        var wg = new vec3.create();
        var ED = 6;
        if (TS) {
            jH = Dj.length / 4;
            ED = 4;
        } else {
            jH = Dj.length / 3;
            ED = 3;
        }
        for (var G = 0; G < jH; G++) {
            wg[0] = Dj[ED * G + 0];
            wg[1] = Dj[ED * G + 1];
            wg[2] = Dj[ED * G + 2];
            mat4.multiplyVec3(z5, wg);
            Dj[ED * G] = wg[0];
            Dj[ED * G + 1] = wg[1];
            Dj[ED * G + 2] = wg[2];
        }
        return (Dj);
    };
    this.hc = function(S9) {
        var jH = S9.length;
        var EM;
        var _ = new Ht();
        for (var G = 0; G < jH; G++) {
            EM = S9.charCodeAt(G);
            switch (EM) {
                case 33:
                    _.append("\x2e\x30");
                    break;
                case 35:
                    _.append("\x2e\x34");
                    break;
                case 36:
                    _.append("\x2e\x35");
                    break;
                case 37:
                    _.append("\x2e\x36");
                    break;
                case 38:
                    _.append("\x2e\x37");
                    break;
                case 40:
                    _.append("\x2e\x38");
                    break;
                case 41:
                    _.append("\x2e\x39");
                    break;
                case 42:
                    _.append("\x30\x2e");
                    break;
                case 43:
                    _.append("\x30\x30");
                    break;
                case 45:
                    _.append("\x30\x34");
                    break;
                case 46:
                    _.append("\x30\x35");
                    break;
                case 47:
                    _.append("\x30\x36");
                    break;
                case 48:
                    _.append("\x30\x37");
                    break;
                case 49:
                    _.append("\x30\x38");
                    break;
                case 50:
                    _.append("\x30\x39");
                    break;
                case 51:
                    _.append("\x34\x2e");
                    break;
                case 52:
                    _.append("\x34\x30");
                    break;
                case 53:
                    _.append("\x34\x34");
                    break;
                case 54:
                    _.append("\x34\x35");
                    break;
                case 55:
                    _.append("\x34\x36");
                    break;
                case 56:
                    _.append("\x34\x37");
                    break;
                case 57:
                    _.append("\x34\x38");
                    break;
                case 58:
                    _.append("\x34\x39");
                    break;
                case 59:
                    _.append("\x35\x2e");
                    break;
                case 60:
                    _.append("\x35\x30");
                    break;
                case 61:
                    _.append("\x35\x34");
                    break;
                case 62:
                    _.append("\x35\x35");
                    break;
                case 63:
                    _.append("\x35\x36");
                    break;
                case 64:
                    _.append("\x35\x37");
                    break;
                case 65:
                    _.append("\x35\x38");
                    break;
                case 66:
                    _.append("\x35\x39");
                    break;
                case 67:
                    _.append("\x36\x2e");
                    break;
                case 68:
                    _.append("\x36\x30");
                    break;
                case 69:
                    _.append("\x36\x34");
                    break;
                case 70:
                    _.append("\x36\x35");
                    break;
                case 71:
                    _.append("\x36\x36");
                    break;
                case 72:
                    _.append("\x36\x37");
                    break;
                case 73:
                    _.append("\x36\x38");
                    break;
                case 74:
                    _.append("\x36\x39");
                    break;
                case 75:
                    _.append("\x37\x2e");
                    break;
                case 76:
                    _.append("\x37\x30");
                    break;
                case 77:
                    _.append("\x37\x34");
                    break;
                case 78:
                    _.append("\x37\x35");
                    break;
                case 79:
                    _.append("\x37\x36");
                    break;
                case 80:
                    _.append("\x37\x37");
                    break;
                case 81:
                    _.append("\x37\x38");
                    break;
                case 82:
                    _.append("\x37\x39");
                    break;
                case 83:
                    _.append("\x38\x2e");
                    break;
                case 84:
                    _.append("\x38\x30");
                    break;
                case 85:
                    _.append("\x38\x34");
                    break;
                case 86:
                    _.append("\x38\x35");
                    break;
                case 87:
                    _.append("\x38\x36");
                    break;
                case 88:
                    _.append("\x38\x37");
                    break;
                case 89:
                    _.append("\x38\x38");
                    break;
                case 90:
                    _.append("\x38\x39");
                    break;
                case 91:
                    _.append("\x39\x2e");
                    break;
                case 93:
                    _.append("\x39\x30");
                    break;
                case 94:
                    _.append("\x39\x31");
                    break;
                case 95:
                    _.append("\x39\x32");
                    break;
                case 96:
                    _.append("\x39\x33");
                    break;
                case 97:
                    _.append("\x39\x34");
                    break;
                case 98:
                    _.append("\x39\x35");
                    break;
                case 99:
                    _.append("\x39\x36");
                    break;
                case 100:
                    _.append("\x39\x37");
                    break;
                case 101:
                    _.append("\x39\x38");
                    break;
                case 102:
                    _.append("\x39\x39");
                    break;
                case 103:
                    _.append("\x2d\x31");
                    break;
                case 104:
                    _.append("\x2d\x32");
                    break;
                case 105:
                    _.append("\x2d\x33");
                    break;
                case 106:
                    _.append("\x2d\x34");
                    break;
                case 107:
                    _.append("\x2d\x35");
                    break;
                case 108:
                    _.append("\x2d\x36");
                    break;
                case 109:
                    _.append("\x2d\x37");
                    break;
                case 110:
                    _.append("\x2d\x38");
                    break;
                case 111:
                    _.append("\x2d\x39");
                    break;
                case 112:
                    _.append("\x2d");
                    break;
                case 113:
                    _.append("\x2c");
                    break;
                case 114:
                    _.append("\x2e");
                    break;
                case 115:
                    _.append("\x65");
                    break;
                case 116:
                    _.append("\x30");
                    break;
                case 117:
                    _.append("\x31");
                    break;
                case 118:
                    _.append("\x32");
                    break;
                case 119:
                    _.append("\x33");
                    break;
                case 121:
                    _.append("\x34");
                    break;
                case 122:
                    _.append("\x35");
                    break;
                case 123:
                    _.append("\x36");
                    break;
                case 124:
                    _.append("\x37");
                    break;
                case 125:
                    _.append("\x38");
                    break;
                case 126:
                    _.append("\x39");
                    break;
            }
        }
        return (_.toString());
    };
    this.G0 = function(Hq) {
        var mm = Hq.split("\x2c");
        var _ = new Ht();
        var jH = mm.length;
        _.append("\x5b");
        for (var G = 0; G < jH; G++) {
            if (mm[G].indexOf("\x78") == -1) {
                _.append(this.z3(mm[G]));
                if (G < jH - 1) _.append("\x2c");
            } else {
                var K_ = mm[G].split("\x78");
                var bl = parseInt(K_[0]);
                var content = this.hc(K_[1]);
                for (var kO = 0; kO < bl; kO++) {
                    _.append(content);
                    if (G < jH - 1) {
                        _.append("\x2c");
                    } else {
                        if (kO < bl - 1) _.append("\x2c");
                    };
                }
            }
        }
        _.append("\x5d");
        var rO = this.aJ(_.toString());
        return rO;
    };
    this.xg = function(Rc, fC) {
        var jH = Rc.length;
        var f1 = 0;
        for (var G = 0; G < jH; G++) {
            if (isNaN(Rc[G])) {
                var K_ = Rc[G].split("\x78");
                var bl = parseInt(K_[0]);
                var content = K_[1];
                var Ut = K_[1].split("\x2c");
                var NH = Ut.length;
                for (var kO = 0; kO < bl; kO++) {
                    for (var mw = 0; mw < NH; mw++) {
                        fC[f1] = parseFloat(Ut[mw]);
                        f1++;
                    }
                }
            } else {
                fC[f1] = Rc[G];
                f1++;
            }
        }
        return 0;
    };
    this.sy = function(Hq, fC) {
        var mm = Hq.split("\x2c");
        var jH = mm.length;
        var W7 = new Ht(50);
        var rO;
        var cursor = 0;
        for (var G = 0; G < jH; G++) {
            if (mm[G].indexOf("\x78") == -1) {
                rO = this.aJ("\x5b" + this.hc(mm[G]) + "\x5d");
                for (var mw = 0; mw < rO.length; mw++) {
                    fC[cursor] = rO[mw];
                    cursor++;
                };
            } else {
                var K_ = mm[G].split("\x78");
                var bl = parseInt(K_[0]);
                rO = this.aJ("\x5b" + this.hc(K_[1]) + "\x5d");
                for (var kO = 0; kO < bl; kO++) {
                    for (var mw = 0; mw < rO.length; mw++) {
                        fC[cursor] = rO[mw];
                        cursor++;
                    };
                }
            }
        }
    };
    this.gCi = function() {
        var eu = "\x34\x33\x36\x46\x37\x30\x37\x39\x37\x32\x36\x39\x36\x37\x36\x38\x37\x34\x32\x30\x34\x33\x34\x31\x34\x34\x34\x44\x34\x31\x34\x39\x32\x30\x35\x33\x36\x46\x36\x36\x37\x34\x37\x37\x36\x31\x37\x32\x36\x35\x32\x30\x34\x37\x36\x44\x36\x32\x34\x38";
        var TI = '';
        for (var G = 0; G < eu.length; G += 2) TI += String.fromCharCode(parseInt(eu.substr(G, 2), 16));
        return TI;
    };
    this.TO = function(G8) {
        var Ch = -1;
        var G = 0;
        var XI = [];
        var xS = G8.length;
        for (G = 0; G < xS; G++) {
            if (G8[G] != Ch) {
                XI.push(G8[G]);
                Ch = G8[G];
            };
        }
        return XI;
    };
    this.X_ = function(kB) {
        var pattern = new RegExp("\x5e\x28\x68\x74\x74\x70\x73\x3f\x3a\x5c\x2f\x5c\x2f\x29\x3f" + "\x28\x28\x28\x5b\x61\x2d\x7a\x5c\x64\x5d\x28\x5b\x61\x2d\x7a\x5c\x64\x2d\x5d\x2a\x5b\x61\x2d\x7a\x5c\x64\x5d\x29\x2a\x29\x5c\x2e\x29\x2b\x5b\x61\x2d\x7a\x5d\x7b\x32\x2c\x7d\x7c" + "\x28\x28\x5c\x64\x7b\x31\x2c\x33\x7d\x5c\x2e\x29\x7b\x33\x7d\x5c\x64\x7b\x31\x2c\x33\x7d\x29\x29" + "\x28\x5c\x3a\x5c\x64\x2b\x29\x3f\x28\x5c\x2f\x5b\x2d\x61\x2d\x7a\x5c\x64\x25\x5f\x2e\x7e\x2b\x5d\x2a\x29\x2a" + "\x28\x5c\x3f\x5b\x3b\x26\x61\x2d\x7a\x5c\x64\x25\x5f\x2e\x7e\x2b\x3d\x2d\x5d\x2a\x29\x3f" + "\x28\x5c\x23\x5b\x2d\x61\x2d\x7a\x5c\x64\x5f\x5d\x2a\x29\x3f\x24", "\x69");
        if (!pattern.test(kB)) {
            return false;
        } else {
            return true;
        }
    };
    this.Xi = function(cP, size, color, shaderObject, h) {
        var llP = new Array(0.0, 0.0, 0.0);
        var urP = new Array(0.0, 0.0, 0.0);
        var hr = size * 0.5 * 0.57735;
        var Fx = null;
        var C = new Float32Array(32);
        llP[0] = cP[0] - hr;
        llP[1] = cP[1] - hr;
        llP[2] = cP[2] - hr;
        urP[0] = cP[0] + hr;
        urP[1] = cP[1] + hr;
        urP[2] = cP[2] + hr;
        C[0] = llP[0];
        C[1] = llP[1];
        C[2] = llP[2];
        C[3] = 0.0;
        C[4] = urP[0];
        C[5] = urP[1];
        C[6] = urP[2];
        C[7] = size;
        C[8] = urP[0];
        C[9] = llP[1];
        C[10] = llP[2];
        C[11] = 0.0;
        C[12] = llP[0];
        C[13] = urP[1];
        C[14] = urP[2];
        C[15] = size;
        C[16] = llP[0];
        C[17] = urP[1];
        C[18] = llP[2];
        C[19] = 0.0;
        C[20] = urP[0];
        C[21] = llP[1];
        C[22] = urP[2];
        C[23] = size;
        C[24] = urP[0];
        C[25] = urP[1];
        C[26] = llP[2];
        C[27] = 0.0;
        C[28] = llP[0];
        C[29] = llP[1];
        C[30] = urP[2];
        C[31] = size;
        Fx = h.createBuffer();
        h.bindBuffer(h.ARRAY_BUFFER, Fx);
        h.bufferData(h.ARRAY_BUFFER, C, h.STATIC_DRAW);
        Fx.itemSize = 4;
        Fx.numItems = C.length / 4;
        shaderObject.EP(color, 0, 0);
        h.bindBuffer(h.ARRAY_BUFFER, Fx);
        h.vertexAttribPointer(shaderObject.o, 4, h.FLOAT, false, 0, 0);
        h.drawArrays(h.LINES, 0, 8);
        shaderObject.fb(0);
    };
    this.JT = function(bM, Ps, color, Hg, Fy, h) {
        var Fx = null;
        var C = new Float32Array(8);
        var nz = Jc(bM, Ps);
        C[0] = Ps[0];
        C[1] = Ps[1];
        C[2] = Ps[2];
        C[3] = 0.0;
        C[4] = bM[0];
        C[5] = bM[1];
        C[6] = bM[2];
        C[7] = nz;
        Fx = h.createBuffer();
        h.bindBuffer(h.ARRAY_BUFFER, Fx);
        h.bufferData(h.ARRAY_BUFFER, C, h.STATIC_DRAW);
        Fx.itemSize = 4;
        Fx.numItems = C.length / 4;
        Hg.EP(color, 0, 0);
        h.bindBuffer(h.ARRAY_BUFFER, Fx);
        h.vertexAttribPointer(Hg.o, 4, h.FLOAT, false, 0, 0);
        h.drawArrays(h.LINES, 0, 2);
        Hg.fb(0);
        Fy.EP(color, 10.0, 0);
        h.bindBuffer(h.ARRAY_BUFFER, Fx);
        h.vertexAttribPointer(Fy.o, 3, h.FLOAT, false, 0, 0);
        h.drawArrays(h.POINTS, 0, 1);
        Fy.fb(0);
    };
    this.F1 = function(a, b) {
        return b.color[3] - a.color[3];
    };
}; // var CmiHelpers=new function()