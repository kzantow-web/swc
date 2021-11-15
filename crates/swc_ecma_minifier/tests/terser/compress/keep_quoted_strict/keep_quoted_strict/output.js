var propa = 1;
var a = {
    p: propa,
    get o() {
        return 2;
    },
    propc: 3,
    get propd() {
        return 4;
    },
};
var b = {
    propa: 5,
    get propb() {
        return 6;
    },
    propc: 7,
    get propd() {
        return 8;
    },
};
var c = {};
Object.defineProperty(c, "p", { value: 9 });
Object.defineProperty(c, "propc", { value: 10 });
console.log(a.p, a.o, a.propc, a.propc, a.propd, a.propd);
console.log(b.propa, b.propb, b.propc, b.propc, b.propd, b.propd);
console.log(c.p, c.propc);
