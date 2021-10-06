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
    ctrl.infoIsEmpty= Object.keys(information).length;
    console.log("info is ", ctrl.infoIsEmpty);
  }

})();