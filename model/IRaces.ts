  interface IResults {
    Constructor: IConstructor;
    Driver: IDriver;
    FastestLap: IFastestLap;
    grid: string;
    laps: string;
    number: string;
    points: string;
    position: string;
    positionText: string;
    status: string;
  }
  
  interface IAverageSpeed {
    speed: string;
    units: string;
  }
  
  interface IFastestLap {
    AverageSpeed: IAverageSpeed;
    Time: ITime;
    lap: string;
    rank: string;
  }
  
  interface ITime {
    time: string;
    millis: string;
  }
  
  interface IRaces {
    Circuit: ICircuito;
    Results: IResults;
    date: string;
    raceName: string;
    round: string;
    season: string;
    time: string;
    url:string;
   }