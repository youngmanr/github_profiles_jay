// spec.js
describe('Github User App', function() {

});

describe('GitHub profile finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  // it('finds profiles', function() {
  //   browser.get('http://localhost:8080');
  //   searchBox.sendKeys('spike01');
  //   searchButton.click();
  //   expect(element(by.binding('user.login')).getText()).
  //       toEqual('spike01');
  // });

  it('finds profile from a list', function() {
    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spikeh');
    expect(profiles.count()).toEqual(30);
  });

});