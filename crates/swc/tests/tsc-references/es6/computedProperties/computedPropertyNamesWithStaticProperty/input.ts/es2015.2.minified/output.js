function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
var tmp = (_classNameTDZError("C"), C).staticProp, tmp1 = (_classNameTDZError("C"), C).staticProp, tmp2 = (_classNameTDZError("C"), C).staticProp;
class C {
    get [tmp]() {
        return "hello";
    }
    set [tmp1](x) {
    }
    [tmp2]() {
    }
}
C.staticProp = 10;
