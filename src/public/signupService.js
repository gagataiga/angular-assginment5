(function () {
  angular.module("public")
    .service("SignUpService", SignUpService);
  
  SignUpService.$inject = [];

  function SignUpService() {
    let service = this;

    service.information = {};

    service.getInfo = () => { 
      return service.information;
    }

    /**
     * 
     * @param {*} firstName 
     * @param {*} lastName 
     * @param {*} mail 
     * @param {*} phoneNum 
     * @param {*} favMeal 
     * @returns 
     */
    service.setInfo = (firstName, lastName, mail,phoneNum,favMeal) => { 
      service.information["firstName"] = firstName; 
      service.information["lastName"] = lastName;
      service.information["mail"] = mail;
      service.information["phoneNum"] = phoneNum;
      service.information["favMeal"] = favMeal;
      console.log(service.information);
    }
  }
})();