var f;
f`abc`, f`abc${1}def${2}ghi`, f`abc`.member, f`abc${1}def${2}ghi`.member, f`abc`.member, f`abc${1}def${2}ghi`.member, f`abc`[0].member`abc${1}def${2}ghi`, f`abc${1}def${2}ghi`.member.member`abc${1}def${2}ghi`, f`abc${true}def${true}ghi`.member.member`abc${1}def${2}ghi`, f.thisIsNotATag("abc"), f.thisIsNotATag("abc1def2ghi");
