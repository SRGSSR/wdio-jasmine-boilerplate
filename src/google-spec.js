describe('Google\'s Search Functionality', function() {
  it('can find search results', function () {
    browser
      .url('/ncr')
      .setValue('*[name="q"]','BrowserStack\n')
      .pause(5000);

    expect(browser.getTitle().includes('BrowserStack')).toBe(true);
  });
});