function C(x) {
    this.x = x;
}
C.prototype.m = function() {
    this.y = 12;
};
var c = new C(1);
function A(x) {
    var left, right;
    if (left = this, null != (right = A) && "undefined" != typeof Symbol && right[Symbol.hasInstance] ? !right[Symbol.hasInstance](left) : !(left instanceof right)) return new A(x);
    this.x = x;
}
c.x = void 0, c.y = void 0;
var k = A(1), j = new A(2);
k.x === j.x;
