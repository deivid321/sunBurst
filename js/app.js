var app = angular.module('ChartApp', []);

/* DELETE THIS
// We need to inject the $http service in to our factory
app.factory("DataFactory", function($http) {
    return {
        getData: function() {
            return $http({
                    method: "GET",
                    url: "../MemoryJson.json"
                }).then(function successRead(response) {
                    var myWelcome = response.statusText;
                    var entriesObj = response.data.histograms[0].total;
                    var pathsObj = response.data.histograms[0].path;
                    var entries = [];
                    var paths = angular.fromJson(pathsObj);
                    var paths2 = [];
                    var textas = "";
                    var i = 0;
                    angular.forEach(entriesObj, function(item) {
                        var a = parseInt(item, 10);
                        entries.push(a);
                    });
                    angular.forEach(paths, function(item) {
                        var item1 = item.toString();
                        textas += "\n" + item1.replace(/\//g, '-') + ", " + entries[i]
                        paths2.push(item1.replace(/\//g, '-') + ", " + entries[i]);
                        i++;
                    });
                    // DataArray = paths;
                    data = paths;
                    //console.log(data);
                     return response;
                    //console.log(DataArray);

                })
                .error(function errorRead(response) {
                    $scope.myWelcome = response.statusText;
                    return response;
                })
                //return (DataArray);

        }
    }
});
*/
/*
//SHOULD BE WORKING BUT NOT
app.service('DataService', function($http) {

    var DataService = {
        asyncc: function() {
                var promise = $http({
                    method: "GET",
                    url: "MemoryJson.json"
                }).then(function(response) {
                        var myWelcome = response.statusText;
                        var entriesObj = response.data.histograms[0].total;
                        var pathsObj = response.data.histograms[0].path;
                        var entries = [];
                        var paths = angular.fromJson(pathsObj);
                        var paths2 = [];
                        var textas = "";
                        var i = 0;
                        angular.forEach(entriesObj, function(item) {
                            var a = parseInt(item, 10);
                            entries.push(a);
                        });
                        angular.forEach(paths, function(item) {
                            var item1 = item.toString();
                            textas += "\n" + item1.replace(/\//g, '-') + ", " + entries[i]
                            paths2.push(item1.replace(/\//g, '-') + ", " + entries[i]);
                            i++;
                        });
                        // DataArray = paths;
                        var datar = paths;
                        //console.log(datar);
                        return datar;
                        //console.log(DataArray);

                    },
                    function(response) {
                        var myWelcome = response.statusText;
                    })
                return promise;
            }
            //console.log(aa);
            //datar = "fdsf";

    };
    return DataService;
});
*/

/*//SHOULD BE ALSO FINE
app.factory('dataService', function($http) {

    var getData = function() {

        return $http({
            method: "GET",
            url: "../MemoryJson.json"
        }).then(function(response) {
            var myWelcome = response.statusText;
            var entriesObj = response.data.histograms[0].total;
            var pathsObj = response.data.histograms[0].path;
            var entries = [];
            var paths = angular.fromJson(pathsObj);
            var paths2 = [];
            var textas = "";
            var i = 0;
            angular.forEach(entriesObj, function(item) {
                var a = parseInt(item, 10);
                entries.push(a);
            });
            angular.forEach(paths, function(item) {
                var item1 = item.toString();
                textas += "\n" + item1.replace(/\//g, '-') + ", " + entries[i]
                paths2.push(item1.replace(/\//g, '-') + ", " + entries[i]);
                i++;
            });
            // DataArray = paths;
            console.log(textas);
            return textas;
            //console.log(DataArray);

        });
    };

    return { getData: getData };
});
var myDataPromise = dataService.getData();
    myDataPromise.then(function(response) {  

       // this is only run after getData() resolves
       $scope.data = response;
       console.log("data.name"+$scope.data);
    });
    console.log("nothing");

*/