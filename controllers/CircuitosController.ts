interface ICircuitosControllerScope extends ng.IScope {
    vm: CircuitosController;
  }

  class CircuitosController implements ng.IController {

    public titulo: string;
    public circuitos = Array<ICircuito>();
    public localizaciones = [];
  
    public static $inject = ["$scope", "circuitosMundial"];
  
    constructor(private $scope: ICircuitosControllerScope, circuitosMundial: any) {
        console.debug('CircuitosController constructor');

        $scope.vm = this;

        $scope.vm.titulo = "Listado de circuitos F1";
        $scope.vm.circuitos = circuitosMundial;
        $scope.vm.localizaciones = $scope.vm.circuitos.map(elem => {
                                                                    return {
                                                                        "lat": elem.Location.lat,
                                                                        "long": elem.Location.long,
                                                                        "localidad": elem.Location.locality
                                                                    }    
                                                                });

    }

  } // class CircuitosController