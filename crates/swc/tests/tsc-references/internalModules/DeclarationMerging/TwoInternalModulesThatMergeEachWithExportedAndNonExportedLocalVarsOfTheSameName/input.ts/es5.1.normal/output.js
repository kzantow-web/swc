function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
//@filename: part1.ts
var A1;
(function(A) {
    var Utils1;
    (function(Utils) {
        function mirror(p) {
            return {
                x: p.y,
                y: p.x
            };
        }
        Utils.mirror = mirror;
    })(Utils1 || (Utils1 = {
    }));
    A.Origin = {
        x: 0,
        y: 0
    };
    A.Utils = Utils1;
})(A1 || (A1 = {
}));
(function(A) {
    // not a collision, since we don't export
    var Origin = "0,0";
    (function(Utils) {
        var Plane = function Plane(tl, br) {
            "use strict";
            _classCallCheck(this, Plane);
            this.tl = tl;
            this.br = br;
        };
        Utils.Plane = Plane;
    })(Utils || (Utils = {
    }));
})(A1 || (A1 = {
}));
//@filename: part3.ts
// test the merging actually worked
var o;
var o;
var o = A1.Origin;
var o = A1.Utils.mirror(o);
var p1;
var p1;
var p1 = new A1.Utils.Plane(o, {
    x: 1,
    y: 1
});
