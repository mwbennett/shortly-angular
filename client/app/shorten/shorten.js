angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(){
    var link = { url : $scope.link }; //grab the URL
    Links.addLink(link)
      .then(function(shortURL) {
        console.log("shortURL: ", shortURL);
        $scope.data.links.push(shortURL);
      }).then(function(){
        $location.path('/links');
      })
      .catch(function(error) {
        console.log(error);
      })
  }
});
