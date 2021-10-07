(function () {
  "use strict";
  angular.module("public")
  .controller("InfoContorller", InfoContorller);
  
  // Injection
  InfoContorller.$inject = ["information"];

  // 
  function InfoContorller(information) { 
    let ctrl = this;
    ctrl.information = information;
    // console.log(information);
    // 
    ctrl.infoIsEmpty = Object.keys(information).length;
  
    if (ctrl.infoIsEmpty) { 
      ctrl.firstName = information.firstName;
      ctrl.lastName = information.lastName;
      ctrl.mail = information.mail;
      ctrl.phoneNum = information.phoneNum;
      ctrl.favMeal = information.favMeal;
    }

  }

})();