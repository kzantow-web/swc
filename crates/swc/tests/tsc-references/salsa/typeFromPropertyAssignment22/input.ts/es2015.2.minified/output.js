function Installer() {
    this.args = 0;
}
Installer.prototype.loadArgMetadata = function(next) {
};
var i = new Installer();
i.newProperty = i.args // ok, number ==> number | undefined
;
