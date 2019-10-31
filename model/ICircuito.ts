interface ILocation {
    country: string;
    lat: string;
    long: string;
    locality: string;
}
  
interface ICircuito {
    Location: ILocation;
    circuitId: string; 
    circuitName: string;
    url: string;
}