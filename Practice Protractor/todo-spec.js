

var todoAppPage = require('./page_object');

describe('angularjs todo list', function () {

    var page;

    beforeEach(function () {
        page = new todoAppPage();

    });

    it('should be able to login', function() {
      page.get();
      page.emailValue('tester@gmail.com');
      page.passwordValue('password');
      page.csignIn();
    });
});