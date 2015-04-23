angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links.data;
      })
      .catch(function(error){
        console.log(error);
      });
  };
  $scope.postLink = function(){
    var link = { url : $scope.linkURL }; //grab the URL
    Links.postLink(link)
      .then(function(shortURL) {
        console.log("shortURL: ", shortURL);
        $scope.data.links.push(shortURL);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  $scope.getLinks();
});
