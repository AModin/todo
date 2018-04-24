const Nightmare = require('nightmare');
const chai = require('chai');
const expect = chai.expect;
 
describe('Simple integration test', () => {
  it('Add new todo', function(done) {
    this.timeout('30s');
    const nightmare = Nightmare({
        show: true
    })

    let timestamp = Date.now();

    nightmare
        .goto('http://localhost:7700/')
        .wait('button[data-id=modal]')
        .click('button[data-id=modal]')
        .wait('input[type=text]')
        .type('input[type=text]', timestamp)
        .click('button[data-id=add]')
        .wait(1500)
        .evaluate(() => {
            const list = document.querySelectorAll('li')
            return list[list.length-1].querySelector('h3').innerHTML
        })
        .end()
        .then(text => {
            expect(parseInt(text)).to.equal(timestamp)
            done();
        })
  })
})