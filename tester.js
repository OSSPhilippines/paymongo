const Paymongo = require('./dist').default;

const paymongo = new Paymongo('sk_test_2h6QPgpJtPtW9Drc47bbaBe4');

paymongo.talk();
paymongo.meow();
paymongo.walk();
paymongo.sleep(3);
paymongo.feed('fish');
paymongo.feed('dog food');
