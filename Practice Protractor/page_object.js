'use strict';

var todoAppPage = function() {



    this.get = function() {
        browser.get('http://www.jetblue.com/');
    };

    this.emailValue = function(value) {
        element(by.id('email_field')).sendKeys(value);
    };

    this.passwordValue = function(value) {
        element(by.id('password_field')).sendKeys(value);
    };

    this.clickSignIn = function() {
        element(by.id('signin_btn'));
    };

    this.rememberEmail = function() {
        element(by.css('remembermeCheckbox'));
    };

    this.forgotPassword = function() {
        element(by.css('a[href="https://trueblue.jetblue.com/web/trueblue/forgot-password"]'));
    };

    this.flight = function() {
        element(by.css('piejs ng-binding checked'));
    };


    this.question = element(by.model('question.text'));
    this.answer = element(by.binding('answer'));
    this.button = element(by.className('question-button'));

    this.ask = function(question) {
        this.question.sendKeys(question);
        this.button.click();
    };

};

module.exports = todoAppPage;
