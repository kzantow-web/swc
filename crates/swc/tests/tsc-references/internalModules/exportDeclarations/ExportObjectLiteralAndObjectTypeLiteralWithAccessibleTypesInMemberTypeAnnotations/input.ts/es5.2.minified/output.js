var A1;
!function(A) {
    var Point = function(x, y) {
        "use strict";
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, Point), this.x = x, this.y = y;
    };
    A.Origin = {
        x: 0,
        y: 0
    }, A.Unity = {
        start: new Point(0, 0),
        end: new Point(1, 0)
    };
}(A1 || (A1 = {
}));
