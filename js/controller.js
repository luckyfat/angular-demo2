angular.module('mapp')
    .controller('listCtrl',function ($scope) {
        $scope.arrange =function (str) {
            $scope.$broadcast('test',{
                str:str
            })
        }
    })
    .controller('distCtrl', function ($scope, $http, $state, distdata, test) {
        //初始化排序相关数据
        $scope.type='distance';
        $scope.desc = 0;

        //请求列表数据
        $http({
            url: 'js/data.json'
        })
        .then(function (data) {
            for(var i=0;i<data.data.length;i++){
                data.data[i].starArray=[];
                for(var j=0;j<data.data[i].star;j++){
                    data.data[i].starArray.push(j+1);
                }
            }
            console.log(data.data);
            $scope.arr = data.data;
            distdata.data = data.data;
            test.data = data.data;
        });

        $scope.goDetail = function (id) {
            $state.go('detail', {
                id: id
            })
        };

        $scope.$on('test',function (event,data) {
            console.log(data);
            $scope.type=data.str;
            $scope.desc = !$scope.desc;
        });
    })
    .controller('detailCtrl', function ($scope, $state, distdata, test) {
        console.log(test);
        for (var i = 0; i < distdata.data.length; i++) {
            if (distdata.data[i].id == $state.params.id) {
                $scope.img = distdata.data[i].img;
            }
        }
    });

