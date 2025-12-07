import { angular } from "@angular-wave/angular.ts";

angular.module("version", []).controller(
    "VersionController",
    class VersionController {
      static $inject = ["$scope"];
      $scope: ng.Scope;
      constructor($scope: ng.Scope) {
        this.$scope = $scope;
      }
      version = angular.version;
    },
  );

