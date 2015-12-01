var mastercardApp = angular.module('mastercardApp', ['ngRoute', 'mastercardControllers']);

mastercardApp.config(['$routeProvider', 
    function($routeProvider) {
		$routeProvider.when('/payment', {
			templateUrl: '/partials/payment.html',
			controller: 'PaymentController'
		}).when('/payments/list', {
			templateUrl: '/partials/paymentList.html',
			controller: 'PaymentListController'
		}).when('/payment/kill', {
			templateUrl: '/partials/paymentList.html',
			controller: 'PaymentController'
		}).when('/payments/kill', {
			templateUrl: '/partials/paymentsList.html',
			controller: 'PaymentListController'
		}).otherwise({
			redirectTo: '/payments/list'
		})
}])