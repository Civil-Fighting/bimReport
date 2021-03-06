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
var na = function() {
    this.jj = "";
    this.Fw = null;
    this.TP = null;
    this.id = "";
    this.Ag = false;
    this._E = false;
    this.bo = false;
    this.On = 0;
};
var CmiAssemblyBrowser = function(Xg, U0) {
    var u3 = null;
    var M2 = null;
    var i3 = null;
    var vW = Xg;
    M2 = document.getElementById(U0);
    var Jh = function(a, b) {
        if (a.jj == b.jj) return 0;
        else if (a.jj < b.jj) return -1;
        else return 1;
    };
    this.buildAssemblyTree = function(uw, Qz, P_, Ua) {
        if ((uw == null) || (M2 == null)) return -1;
        var yg = false;
        i3 = uw;
        u3 = new Array();
        if (Qz) yg = true;
        if (P_ >= 1) {
            var O_ = new na();
            if ((Ua == undefined) || (Ua.length == 0)) O_.jj = uw.ty();
            else O_.jj = Ua;
            O_._E = true;
            if (P_ == 2) O_.Ag = true;
            u3.push(O_);
            HO(null, O_, yg);
        } else {
            HO(null, null, yg);
        }
        return 0;
    };
    var HO = function(TP, Pg, Qz) {
        var O_;
        var A_;
        var Sq = 0;
        var ud;
        var dr = 1;
        if (TP == null) A_ = i3.UB();
        else if (TP.ig() != null) {
            if (TP.ig().fm()) {
                A_ = TP.V5();
            } else A_ = TP.ig().UB();
        } else return;
        for (var G = 0; G < A_.length; G++) {
            if (A_[G].P8() == "\x63\x6d\x69\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4f\x62\x6a\x65\x63\x74") { //cmiComponentObject
                dr = A_[G].ay();
                if (dr < 3) {
                    Sq++;
                    O_ = new na();
                    O_.TP = A_[G];
                    if (A_[G].ig() != null) O_.jj = A_[G].ig().ty();
                    else O_.jj = "\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64"; //not found
                    if (Pg == null) {
                        O_.id = "\x43\x6d\x70" + Sq.toString(); //Cmp
                    } else {
                        O_.id = Pg.id + "\x2e" + Sq.toString(); //.
                    }
                    if (Pg == null) {
                        u3.push(O_);
                    } else {
                        if (Pg.Fw == null) Pg.Fw = new Array();
                        Pg.Fw.push(O_);
                    }
                    if (dr < 2) HO(A_[G], O_, Qz);
                }
            }
        }
        if (Pg == null) u3.sort(Jh);
        else if (Pg.Fw != null) Pg.Fw.sort(Jh);
        if (Qz) {
            var jH = 0;
            var cH;
            if (Pg == null) {
                cH = u3;
                jH = cH.length;
            } else if (Pg.Fw != null) {
                cH = Pg.Fw;
                jH = cH.length;
            }
            if (jH > 0) {
                var Y_ = new Array();
                var lT = 0;
                var nextNode = null;
                var cJ = null;
                var UD = null;
                var eY = null;
                for (var G = 0; G < jH; G++) {
                    cJ = cH[G];
                    if (G < jH - 1) nextNode = cH[G + 1];
                    if (eY == null) {
                        if ((nextNode != null) && (cJ.jj == nextNode.jj) && (G < jH - 1)) {
                            eY = new na();
                            eY.jj = cJ.jj;
                            eY.Fw = new Array();
                            eY.id = "\x43\x6f\x6c\x6c\x65\x63\x74\x65\x64" + cJ.id;
                            eY.On = 1;
                            eY._E = true;
                            Y_.push(eY);
                            eY.Fw.push(cJ);
                        } else {
                            Y_.push(cJ);
                        };
                    } else {
                        if (cJ.jj == eY.jj) {
                            eY.Fw.push(cJ);
                            eY.On++;
                            if (G == jH - 1) eY.jj = eY.On.toString() + "\x20\x78\x20" + eY.jj;
                        } else if (cJ.jj == nextNode.jj) {
                            eY.jj = eY.On.toString() + "\x20\x78\x20" + eY.jj;
                            eY = new na();
                            eY.jj = cJ.jj;
                            eY.Fw = new Array();
                            eY.id = "\x43\x6f\x6c\x6c\x65\x63\x74\x65\x64" + cJ.id;
                            eY.On = 1;
                            eY._E = true;
                            Y_.push(eY);
                            eY.Fw.push(cJ);
                        } else {
                            eY.jj = eY.On.toString() + "\x20\x78\x20" + eY.jj;
                            eY = null;
                            Y_.push(cJ);
                        };
                    }
                }
                for (var G = 0; G < cH.length; G++) cH[G] = null;
                if (Pg == null) {
                    u3 = Y_;
                } else {
                    Pg.Fw = Y_;
                };
            }
        }
    };
    this.switchCollectionState = function(DU) {
        if ((u3 == null) || (M2 == null)) return -1;
        var BL = DU.split("\x2d");
        var Lw = null;
        Lw = _Y(u3, BL[1]);
        if (Lw != null) {
            if (BL[0] == "\x63\x6f\x6c\x6c\x61\x70\x73") Lw.Ag = false;
            else Lw.Ag = true;
            return this.rebuildTreeViewTable();
        }
        return -1;
    };
    this.switchVisibilityState = function(DU) {
        if ((u3 == null) || (M2 == null)) return -1;
        var BL = DU.split("\x2d");
        var Lw = null;
        var OA = document.getElementById(DU);
        Lw = _Y(u3, BL[1]);
        //lw.jj is the name of selection
        // console.log(Lw.jj + "=" + OA.checked);
        if (Lw != null) {
            if (OA.checked) {
                this.LG(Lw, true);
            } else {
                this.Q8(Lw, false);
               this.LG(Lw, false);
            }
            if (i3) i3.zf().drawScene();
            return this.rebuildTreeViewTable();
        }
        return -1;
    };
    this.LG = function(H4, dr) {
        if (H4.TP) {
            H4.TP.c_ = dr;
        } else {
            H4._E = dr;
        }
        if (H4.Fw != null) {
            for (var G = 0; G < H4.Fw.length; G++) {
                this.LG(H4.Fw[G], dr);
            };
        }
    };
    this.switchHighlightState = function(DU) {
        if ((u3 == null) || (M2 == null)) return -1;
        var BL = DU.split("\x2d");
        var Lw = null;
        var OA = document.getElementById(DU);
        Lw = _Y(u3, BL[1]);
        // console.log("I'm highlight " + Lw.jj + "=" + OA.checked);
        if (Lw != null) {
            if (Lw.TP) {
                if (Lw.TP.c_ == false) {
                    Lw.TP.isHighlighted = false;
                    return this.rebuildTreeViewTable();
                };
            } else {
                if (Lw._E == false) {
                    Lw.bo = false;
                    return this.rebuildTreeViewTable();
                };
            }
            if (OA.checked) {
                this.Q8(Lw, true);
            } else {
                this.Q8(Lw, false);
            }
            if (i3) i3.zf().drawScene();
            return this.rebuildTreeViewTable();
        }
        return -1;
    };
    this.Q8 = function(H4, RT) {
        if (H4.TP) {
            H4.TP.isHighlighted = RT;
        } else {
            H4.bo = RT;
        }
        if (H4.Fw != null) {
            for (var G = 0; G < H4.Fw.length; G++) {
                this.Q8(H4.Fw[G], RT);
            };
        }
    };
    var _Y = function(sg, V6) {
        var Lw = null;
        for (var G = 0; G < sg.length; G++) {
            if (sg[G].Fw != null) {
                Lw = _Y(sg[G].Fw, V6);
                if (Lw != null) return Lw;
            }
            if (sg[G].id == V6) return sg[G];
        }
        return null;
    };
    this.rebuildTreeViewTable = function() {
        if ((u3 == null) || (M2 == null)) return -1;
        var body = M2.getElementsByTagName("\x74\x62\x6f\x64\x79")[0];
        while (body.hasChildNodes()) {
            body.removeChild(body.firstChild);
        }
        jI(body, u3, "");
        return 0;
    };
    //rebuild filter tree
    var jI = function(tf, tM, prefix) {
        var highlightArray = new Array();
        var isNeedCall = false;
        var tn;
        var sH;
        var jT = "";
        var _X;
        for (var G = 0; G < tM.length; G++) {

            tn = document.createElement("\x74\x72");
            sH = document.createElement("\x74\x64");
            jjName("Hl-" + tM[G].id);
            if (tM[G].Fw != null) {
                if (tM[G].Ag) jT = "\x3c\x63\x6f\x64\x65\x3e" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + "\x3c\x61\x20\x69\x64\x3d\x22\x63\x6f\x6c\x6c\x61\x70\x73\x2d" + tM[G].id + "\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x65\x28\x27\x63\x6f\x6c\x6c\x61\x70\x73\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x63\x6f\x64\x65\x3e\x2d\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x63\x6f\x64\x65\x3e" + tM[G].jj + "\x3c\x2f\x61\x3e\x26\x6e\x62\x73\x70\x3b";
                else jT = "\x3c\x63\x6f\x64\x65\x3e" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + "\x3c\x61\x20\x69\x64\x3d\x22\x65\x78\x70\x61\x6e\x64\x2d" + tM[G].id + "\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x65\x28\x27\x65\x78\x70\x61\x6e\x64\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x63\x6f\x64\x65\x3e\x2b\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x63\x6f\x64\x65\x3e" + tM[G].jj + "\x3c\x2f\x61\x3e\x26\x6e\x62\x73\x70\x3b";
                sH.style.cursor = "\x70\x6f\x69\x6e\x74\x65\x72";
            } else {
                jT = "\x3c\x63\x6f\x64\x65\x3e\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + tM[G].jj;
            }
            sH.innerHTML = jT;
            tn.appendChild(sH);
            sH = document.createElement("\x74\x64");
            if (tM[G].TP != null) {
                if (tM[G].TP.c_) jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + tM[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
                else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            } else {
                if (tM[G]._E) jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + tM[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
                else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            }
            sH.innerHTML = jT;
            tn.appendChild(sH);
            sH = document.createElement("\x74\x64");
            if (tM[G].TP != null) {
                isNeedCall = true;
                if (tM[G].TP.isHighlighted) {
                    highlightArray.push("Hl-" + tM[G].id);
                    jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + tM[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
                }
                else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            } else {
                if (tM[G].bo) jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + tM[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
                else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + tM[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + tM[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            }
            sH.innerHTML = jT;
            tn.appendChild(sH);
            tf.appendChild(tn);
            if ((tM[G].Fw != null) && (tM[G].Ag)) {
                _X = "\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b" + prefix;
                jI(tf, tM[G].Fw, _X);
            };
        }

        console.log("=============");
        var textAreaStr = "";
        // console.log(highlightArray);
        for (var duIdIndex in highlightArray) {
            if ((u3 == null) || (M2 == null)) continue;
            var duId =  highlightArray[duIdIndex];
            var BL = duId.split("\x2d");
            var Lw = null;
            var OA = document.getElementById(duId);
            Lw = _Y(u3, BL[1]);
            textAreaStr +=Lw.jj;
            // console.log("I'm highlight " + Lw.jj + "=" + OA.checked);
        }
        if (isNeedCall) {
            console.log("=============" + textAreaStr);
            $("#t1").val(textAreaStr);
        }
        return 0;
    };

    var jjName = function (name) {
        var BL = name.split("\x2d");
        var Lw = null;
        Lw = _Y(u3, BL[1]);
        console.log(Lw.jj);
    }
};