interface ICircuitoControllerScope extends ng.IScope {
    vm: CircuitoController;
  }

  class CircuitoController implements ng.IController {

    public titulo: string;
    public circuito = Array<ICircuito>();
  
    public static $inject = ["$scope", "circuitoDetalle"];
  
    constructor(private $scope: ICircuitoControllerScope, circuitoDetalle: any) {
        console.debug('CircuitosController constructor');

        $scope.vm = this;

        $scope.vm.titulo = "Detalle del circuito: ";
        $scope.vm.circuito = circuitoDetalle;
        //dfgdfgh

    }

  } // class CircuitosController