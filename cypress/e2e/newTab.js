describe(' Open link in same tab',()=>
{});
    it.only('loads the page using approach1', () => {
    cy.visit('https://test.io/coverage/website-testing')
    cy.get('a.cta-button__button.button-cta--get-a-demo').first()
    .invoke('attr','target','_self').click({force:true})

  
  });

  it.only('loads the page using approach2', () => {
    cy.visit('https://test.io/coverage/website-testing')
    cy.get('button#onetrust-accept-btn-handler').click()    
    cy.get('a.cta-button__button.button-cta--get-a-demo1').first()
    .invoke('removeAttr','target').click({force:true});});