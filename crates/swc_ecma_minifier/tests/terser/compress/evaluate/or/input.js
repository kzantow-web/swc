var a;
a = true || condition;
a = 1 || console.log("a");
a = 2 * 3 || 2 * condition;
a = 5 == 5 || condition + 3;
a = "string" || 4 - condition;
a = 5 + "" || condition / 5;
a = -4.5 || 6 << condition;
a = 6 || 7;
a = false || condition;
a = 0 || console.log("b");
a = NaN || console.log("c");
a = undefined || 2 * condition;
a = null || condition + 3;
a = 2 * 3 - 6 || 4 - condition;
a = 10 == 7 || condition / 5;
a = !"string" || 6 % condition;
a = null || 7;
a = console.log((undefined && condition) || null);
a = console.log(undefined || (condition && null));
a = condition || true;
a = console.log("a") || 2;
a = 4 - condition || "string";
a = 6 << condition || -4.5;
a = condition || false;
a = console.log("b") || NaN;
a = console.log("c") || 0;
a = 2 * condition || undefined;
a = condition + 3 || null;
