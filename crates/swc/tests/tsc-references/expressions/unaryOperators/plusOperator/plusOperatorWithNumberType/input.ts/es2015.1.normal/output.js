// + operator on number type
var NUMBER;
var NUMBER1 = [
    1,
    2
];
function foo() {
    return 1;
}
class A {
    static foo() {
        return 1;
    }
}
var M1;
(function(M) {
    var n;
    M.n = n;
})(M1 || (M1 = {
}));
var objA = new A();
// number type var
var ResultIsNumber1 = +NUMBER;
var ResultIsNumber2 = +NUMBER1;
// number type literal
var ResultIsNumber3 = +1;
var ResultIsNumber4 = +{
    x: 1,
    y: 2
};
var ResultIsNumber5 = +{
    x: 1,
    y: (n)=>{
        return n;
    }
};
// number type expressions
var ResultIsNumber6 = +objA.a;
var ResultIsNumber7 = +M1.n;
var ResultIsNumber8 = +NUMBER1[0];
var ResultIsNumber9 = +foo();
var ResultIsNumber10 = +A.foo();
var ResultIsNumber11 = +(NUMBER + NUMBER);
// miss assignment operators
+1;
+NUMBER;
+NUMBER1;
+foo();
+objA.a;
+M1.n;
+objA.a, M1.n;
