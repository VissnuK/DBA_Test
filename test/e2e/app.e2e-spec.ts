'use strict'; // necessary for es6 output in node

import { browser, element, by } from 'protractor';

describe('End-to-End Tests', function () {

  let expectedMsg = 'Sahay';

  beforeEach(function () {
    browser.get('');
  });

  it(`should display: ${expectedMsg}`, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display an image', function () {
    expect(element(by.css('img')).isPresent()).toBe(true);
  });

});
