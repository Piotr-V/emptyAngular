'use strict';

angular.module('app', [])
    .controller('mainController', function ($scope) {

        $scope.personne = [];

        $scope.addPersonne = function () {
            var newPersonne = {
                prenom: $scope.newPersonne.prenom,
                nom: $scope.newPersonne.nom,
                email: $scope.newPersonne.email
            };
            $scope.newPersonne.prenom = '';
            $scope.newPersonne.nom = '';
            $scope.newPersonne.email = '';
            $scope.personne.push(newPersonne);
        };

    });