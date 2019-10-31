var Piloto = (function () {
    function Piloto() {
        this._driverId = "";
        this._permanentNumber = 0;
        this._code = "";
        this._url = "";
        this._givenName = "";
        this._familyName = "";
        this._dateOfBirth = new Date();
        this._nationality = "";
    }
    Object.defineProperty(Piloto.prototype, "driverId", {
        get: function () {
            return this._driverId;
        },
        set: function (value) {
            this._driverId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "permanentNumber", {
        get: function () {
            return this._permanentNumber;
        },
        set: function (value) {
            this._permanentNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "givenName", {
        get: function () {
            return this._givenName;
        },
        set: function (value) {
            this._givenName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "familyName", {
        get: function () {
            return this._familyName;
        },
        set: function (value) {
            this._familyName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piloto.prototype, "nationality", {
        get: function () {
            return this._nationality;
        },
        set: function (value) {
            this._nationality = value;
        },
        enumerable: true,
        configurable: true
    });
    return Piloto;
}());
//# sourceMappingURL=piloto.js.map