(function () { 
  angular.module("public")
    .controller("SignUpController", SignUpController);
  
    SignUpController.$inject = ["information","MenuService","SignUpService"]; 
  
  function SignUpController(information,MenuService,SignUpService) { 

    let self = this;
    console.log("infomation", information);
    
    self.firstName = information.firstName;
    self.lastName = information.lastName;
    self.email = information.mail;
    self.phoneNumber = information.phoneNum;

    // 

    self.signUp = () => { 
      console.log(self.favorite);
      if (self.favorite !== undefined && self.favorite !== "") {
        MenuService.getMenuItem(self.favorite.toUpperCase()).then(response => {
          // everything is vaild completely 
          
          SignUpService.setInfo(
            self.firstName,
            self.lastName,
            self.email,
            self.phoneNumber,
            response
          );
          self.isfinishedSignUp = true;
          self.signUpFailure = false;
        }).catch(error => {
          console.log("signupCtrl", error);
          // Can't find short_name that user choose in menu_items
          self.signUpFailure = true;
        });
        
      } else { 
        console.log("empty");
        self.signUpFailure = true;
      }
        
      }
  }
})()


