var CircuitosController = (function () {
    function CircuitosController($scope, circuitosMundial) {
        this.$scope = $scope;
        this.circuitos = [];
        this.localizaciones = [];
        console.debug('CircuitosController constructor');
        $scope.vm = this;
        $scope.vm.titulo = "Listado de circuitos F1";
        $scope.vm.circuitos = circuitosMundial;
        $scope.vm.localizaciones = $scope.vm.circuitos.map(function (elem) {
            return {
                "lat": elem.Location.lat,
                "long": elem.Location.long,
                "localidad": elem.Location.locality
            };
        });
    }
    CircuitosController.$inject = ["$scope", "circuitosMundial"];
    return CircuitosController;
}());
//# sourceMappingURL=CircuitosController.js.map