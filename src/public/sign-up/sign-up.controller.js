(function () { 
  angular.module("public")
    .controller("SignUpController", SignUpController);
  
    SignUpController.$inject = ["information","MenuService"]; 
  
  function SignUpController(information,MenuService) { 

    let self = this;
    console.log("infomation", information);
    
    self.firstName = information.firstName;
    self.lastName = information.lastName;
    self.email = information.mail;
    self.phoneNumber = information.phoneNum;
    self.favorite = information.favMeal;

    self.signUp = () => { 
      if (self.favorite !== undefined || self.favorite !== "") { 
        let promise = MenuService.getMenuItem(self.favorite.toUpperCase()).then(response => {
          console.log("signup response success", response);
        }).catch( error => {
            console.log("signupCtrl", error);
          });
      }
    }
  }
})()


