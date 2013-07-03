var jasmineEnv = jasmine.getEnv();

jasmineEnv.addReporter(new jasmine.TrivialReporter());

// If you're not running it through Yeti don't call the hookup method
if (window.$yetify !== undefined) {
    BUNYIP.hookup(jasmineEnv);
}

jasmineEnv.execute();
