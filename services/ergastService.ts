/*
 *   ATENCION: las vueltas de los servicios están sin tipar (todos los servicios devuelven any)
 *   Se deben crear los interfaces necesarios a partir de la documentacion de ergast
 */

 interface IErgastService {
  getDrivers(): angular.IPromise<IClasificacion[]>;
  getDriverDetails(id: string): angular.IPromise<IDriver[]>;
  getDriverRaces(id: string): angular.IPromise<IRaces[]>;
  getCircuito(id: string): angular.IPromise<ICircuito[]>;

  /**
   * 
   * Petición GET a servicio REST de Ergast.
   * @see http://ergast.com/api/f1/circuits
   * @return Promesa con array de ICircuito
   */
  getCircuitos(): angular.IPromise<ICircuito[]>;
}

class ErgastService implements IErgastService {

  private http: ng.IHttpService;

  constructor($http) {
    this.http = $http;
  }

  public getDrivers = () => {
    return this.http.get<any>("http://ergast.com/api/f1/2017/driverStandings.json").then(result => {
      return result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }

  public getDriverDetails = id => {
    return this.http
      .get<any>("http://ergast.com/api/f1/2017/drivers/" + id + "/driverStandings.json")
      .then(response => {
        return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      });
  }

  public getDriverRaces = id => {
    return this.http
      .get<any>("http://ergast.com/api/f1/2017/drivers/" + id + "/results.json")
      .then(response => {
        return response.data.MRData.RaceTable.Races;
      });
  }

  public getCircuito = id => {
    return this.http
      .get<any>("http://ergast.com/api/f1/circuits/" + id + "/results.json")
      .then(response => {
        return response.data.MRData.CircuitTable;
      });
  }

  
  public getCircuitos = (): angular.IPromise<ICircuito[]> => {

    let url = 'http://ergast.com/api/f1/circuits.json';
    console.trace("ErgastService getCircuitos");
    return this.http.get(url)
      .then((response)=>{
        //console.debug('Llamada correcta %o', response.data.MRData.CircuitTable.Circuits);
        console.debug('Llamada correcta %o', response.data);
        const circuitosJson = response.data['MRData'].CircuitTable.Circuits;
        return circuitosJson;
      }
    );

    return
    

  }
}
