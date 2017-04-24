angular.module('mapp')
.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('list/distance');

    $stateProvider.state('list',{
        url:'/list',
        templateUrl:'views/list.html',
        controller:'listCtrl'
    }).state('list.distance',{
        url:'/distance',
        templateUrl:'views/distance.html',
        controller:'distCtrl'
    }).state('detail',{
        url:'/detail',
        templateUrl:'views/detail.html',
        controller:'detailCtrl',
        params:{
            id:''
        }
    }).state('list.judgement',{
        url:'/judgement',
        templateUrl:'views/judgement.html'
    }).state('list.sale',{
        url:'/sale',
        templateUrl:'views/sale.html'
    })
});