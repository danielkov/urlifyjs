var expect = require('chai').expect;
var urlify = require('../index');

var obj = {'oops':'passing in an object instead of string'};

describe('UrlifyJS function test', function(){
  it('should turn valid string into valid URL', function(){
    expect(urlify('Hello, World!')).to.equals('Hello-World');
  })

  it('should return first argument if not valid string', function(){
    expect(urlify(obj)).to.equals(obj);
  })

  it('options object should have an accept field', function(){
    expect(urlify('Hello, World!', {accept:','})).to.equals('Hello,World');
  })

  it('should replace Eszett with ss', function(){
    expect(urlify('Welcome, Dr# Größ!')).to.equals('Welcome-Dr-Gross');
  })

  it('options object should have an sz field to replace Eszett', function(){
    expect(urlify('Schloßen')).to.equals('Schlossen');
    expect(urlify('Schloßen', {sz:true})).to.equals('Schloszen');
  })

  it('should convert all of the following characters', function(){
    expect(urlify('ÁáÀàÅåÄä Çç ÉéÈèÊê ÍíÌìÎî Ññ ÓóÒòÔôÖöØø ŚśŜŝŞşŠš ß ÚúÙùÜü Žž')).to.equals('aaaaaaaa-cc-eeeeee-iiiiii-nn-oooooooooo-ssssssss-ss-uuuuuu-zz');
  })

  it('options object should have a whiteSpace key', function(){
    expect(urlify('Hello, World!', {whiteSpace:'_'})).to.equals('Hello_World');
  })

  it('options object should have a lowerCase key', function(){
    expect(urlify('Hello, World!', {lowerCase:true})).to.equals('hello-world');
  })

  it('should work with all the options changed', function(){
    expect(urlify('Welcome, Dr# Größ!', {accept: '_#', whiteSpace: '_', special: '#', sz: true, lowerCase: true})).to.equals('welcome#_dr#_grosz#');
  })

})
