(function () {
  "use strict";

  angular.module("public").controller("InfoContorller", InfoContorller);

  function InfoContorller() { 
    let me = this;
    me.message = "my infor hoge";
    console.log(me.message);
  }

})();