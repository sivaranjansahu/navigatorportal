var app = angular.module('navigatorApp', ['ngAnimate']);
app.controller('myCtrl', function ($scope, $http) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.navData = {};
        var snapshot = {};
        $http.get('navigatordata.json').then(function (data) {
            $scope.navData = data.data;
            snapshot = Defiant.getSnapshot($scope.navData);
            //console.log($scope.navData);
            //$scope.getChildItems();
            $scope.workItems=JSON.search(snapshot, '//work/childItems');
        $scope.marketingItems=JSON.search(snapshot, '//marketing/childItems');
        $scope.toolsItems=JSON.search(snapshot, '//tools/childItems');
        console.log($scope.toolsItems);
        })
        

        $scope.getChildItems = function (query) {
            // found = JSON.search(snapshot, '//*[contains(title,"Research")]');
            // console.log(found)
        }

        $scope.getLevel1Data = function (cat) {
            //$scope.level1Data=$scope.navData[cat].childItems;
            //console.log('lele')
            found = JSON.search(snapshot, '//' + cat + '/childItems/category');
            $scope.level1Data = {};
            $scope.level1Data.list = unique(found);
            $scope.level1Data.cat = cat;
            console.log($scope.level1Data.list)
            $scope.level1Data.list.forEach(function (item) {
                var catImage = JSON.search(snapshot, '//meta/subcategories/' + item);
                $scope.level1Data.list[item].url = catImage;

            })
            console.log($scope.level1Data)
        }
        $scope.getLevel2Data = function (cat, subcat) {
            found = JSON.search(snapshot, '//' + cat + '/childItems[contains(category,"' + subcat + '")]');
            console.log(found);
            $scope.level2Data = {};
            $scope.level2Data.cat = cat;
            $scope.level2Data.subcat = subcat;
            $scope.level2Data.list = found;
        }
        $scope.getLevel3Data = function (cat, subcat, title) {
            var query = '//' + cat + '/childItems[contains(category,"' + subcat + '") and contains(sharepointTitle,"' + title + '")]';
            //var query='//work/childItems[contains(category,"Research And Audits") and contains(sharepointTitle,"W - Title 1")]'
            found = JSON.search(snapshot, query);
            console.log(found);
            $scope.level3Data = found;
        }
    })
    .filter('getCatImage', function () {
        return function (item) {
            var url;
            var subcategories={
            "Research":"cat1",
            "Requirements":"cat2",
            "Menu":"cat3",
            "cat4":"cat4"
        }
            return subcategories[item];
        }
    })

function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}