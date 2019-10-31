/*
    "driverId": "alonso",
    "permanentNumber": "14",
    "code": "ALO",
    "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
    "givenName": "Fernando",
    "familyName": "Alonso",
    "dateOfBirth": "1981-07-29",
    "nationality": "Spanish"
*/

class Piloto {
    private _driverId: string;
    private _permanentNumber: number;
    private _code: string;
    private _url: string;
    private _givenName: string;
    private _familyName: string;
    private _dateOfBirth: Date;
    private _nationality: string;
    
    public get driverId(): string {
        return this._driverId;
    }
    public set driverId(value: string) {
        this._driverId = value;
    }
    
    public get permanentNumber(): number {
        return this._permanentNumber;
    }
    public set permanentNumber(value: number) {
        this._permanentNumber = value;
    }
    
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }
    
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    
    public get givenName(): string {
        return this._givenName;
    }
    public set givenName(value: string) {
        this._givenName = value;
    }
    
    public get familyName(): string {
        return this._familyName;
    }
    public set familyName(value: string) {
        this._familyName = value;
    }
    
    public get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: Date) {
        this._dateOfBirth = value;
    }
    
    public get nationality(): string {
        return this._nationality;
    }
    public set nationality(value: string) {
        this._nationality = value;
    }

    constructor() {
        this._driverId = "";
        this._permanentNumber = 0;
        this._code = "";
        this._url = "";
        this._givenName = "";
        this._familyName = "";
        this._dateOfBirth = new Date();
        this._nationality = "";
    }



    
    
}