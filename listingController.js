angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() 
    {
      var listing = 
      {
        code : $scope.buildCode.toUpperCase(),
        name : $scope.buildName,
        coordinates : 
        {
          latitude : $scope.buildLatitude,
          longitude : $scope.buildLongitude
        },
        address : $scope.buildAddress
      }

      $scope.listings.push(listing);
      $scope.listings.sort(function(x,y)
      {
        return $scope.compareStrings(x.code, y.code);
      });
      document.getElementsByName('newListingForm')[0].reset();
      $scope.clearForm();
    };

    $scope.deleteListing = function(index) 
    {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) 
    {
      document.getElementById('BuildCodeInfo').innerText = $scope.listings[index].code;
      document.getElementById('BuildNameInfo').innerText = $scope.listings[index].name;
      if($scope.listings[index].coordinates != null)
      {
        document.getElementById('BuildCoordInfo').innerText = $scope.listings[index].coordinates.latitude + ", " + $scope.listings[index].coordinates.longitude;
      }
      else
      {
        document.getElementById('BuildCoordInfo').innerText = "";
      }
      if($scope.listings[index].address != null)
      {
        document.getElementById('BuildAddInfo').innerText = $scope.listings[index].address;
      }
      else
      {
        document.getElementById('BuildAddInfo').innerText = "";
      }
      console.log($scope.listings[index]);
    };

    $scope.compareStrings = function(x,y)
    {
      if(x < y)
        {
          return -1;
        }
      else if(x > y)
        {
          return 1;
        }
      else
        {
          return 0;
        }
    };

    $scope.clearForm = function() 
    {
      $scope.buildCode = '';
      $scope.buildName = '';
      $scope.buildLatitude = '';
      $scope.buildLongitude = '';
      $scope.buildAddress = '';
    }
  }
]);