var A1;
(function(A) {
    class Point {
    }
    A.Origin = {
        x: 0,
        y: 0
    };
    class Point3d extends Point {
    }
    A.Point3d = Point3d;
    A.Origin3d = {
        x: 0,
        y: 0,
        z: 0
    };
    class Line {
        static fromorigin2d(p) {
            return null;
        }
        constructor(start, end){
            this.start = start;
            this.end = end;
        }
    }
    A.Line = Line;
})(A1 || (A1 = {
}));
