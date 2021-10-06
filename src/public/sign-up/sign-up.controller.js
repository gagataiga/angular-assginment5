(function () { 
  angular.module("public")
    .controller("SignUpController", SignUpController);
  
    SignUpController.$inject = ["information"]; 
  
  function SignUpController(information) { 
    let self = this;
    console.log(information);
 
    self.firstName = "";
    self.lastName = "";
    self.email = "";
    self.phoneNumber;
    self.favorite = "";
  }
})()