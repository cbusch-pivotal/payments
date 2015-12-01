/*
 * JS file for all of the Angular controllers in the app
 */
'use strict';

var mastercardControllers = angular.module('mastercardControllers', []);

mastercardApp.controller('PaymentController', function($scope, $http, $routeParams) {
	$scope.$watch('payment.cardNumber', function() {
		$scope.payment.cardNumber = $scope.payment.cardNumber.replace(/\s+/g,'');
	});
	
	$scope.kill = function() {
		$http.get("/payment/kill").success(function() {
			$scope.message = "Successfully killed payment-service!"
			$scope.error = "Error killing payment-service!"
		});
	};

	$scope.update = function(payment) {
		$http.post("/payment/", payment).success(function(data, status, headers, config) {
			$scope.payment = data;
			$scope.message = "Payment processing result: '" + data.status + "'";
			$scope.error = "";
			//$state.go("#/payments/list");
		}).error(function(data, status, headers, config) {
			$scope.message = "";
			$scope.error = "There was an error processing the payment.";
		});
	};
	
	$scope.entry = null;
	$scope.message = "";
	$scope.error = "";
});

mastercardApp.controller('PaymentListController', function($scope, $http) {
	
	$scope.kill = function() {
		$http.get("/payments/kill").success(function() {
			$scope.message = "Successfully killed payment-history-service!"
			$scope.error = "Error killing payment-history-service!"
		});
	};

	$scope.list = function() {
		$http.get("/payments/").success(function(data) {
			$scope.payments = data;
		}).error(function(data) {
			$scope.error = "There was an error retrieving payments.";
		});
	}
	
	$scope.list();
});



