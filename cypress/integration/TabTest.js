describe('example for typing the text in input without passing any locator', () => {
  beforeEach(() => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
  })

  const dataJson = require('../fixtures/testData.json');
  const input_firstName = dataJson.firstName;
  const input_lastName = dataJson.lastName;
  const input_mobileNumber= dataJson.mobileNumber;
  const input_password = dataJson.password;
  const input_email=dataJson.email;


/*
  Passing the input value from json file,
   passing email as random generator ,
   used .check() to select the checkbox
   used .tab() to enter tab ..
     Installed plugin for using tab as cypress does not have direct support for tab
  */

  it('Input values in the textbox and click on submit ', () => {

   cy.get('input#input-firstname').type(input_firstName)
       .tab().type(input_lastName)
       .tab().type("abc123"+
       Math.floor((Math.random() * 10) + 1)+"@disposable.com")
       .tab().type(input_mobileNumber)
       .tab().type(input_password)
       .tab().type(input_password)
       .tab().tab().tab().tab().check().tab().click();



  })


})
