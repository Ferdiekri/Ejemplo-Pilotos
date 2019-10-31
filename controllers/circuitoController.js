var CircuitoController = (function () {
    function CircuitoController($scope, circuitoDetalle) {
        this.$scope = $scope;
        this.circuito = Array();
        console.debug('CircuitosController constructor');
        $scope.vm = this;
        $scope.vm.titulo = "Detalle del circuito: ";
        $scope.vm.circuito = circuitoDetalle;
    }
    CircuitoController.$inject = ["$scope", "circuitoDetalle"];
    return CircuitoController;
}());
//# sourceMappingURL=circuitoController.js.map