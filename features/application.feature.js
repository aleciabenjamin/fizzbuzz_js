require('./spec/spec.helper')

context('Your Description of the test scenario', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  })

   
  beforeEach(async () => {
    await browser.page.reload();
  })

 
  after(() => {
    browser.close();
  })

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with:  "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
  })
})