const _ = require('lodash');

const collections = [
    {},
    15,
    "Hello@test.pl",
    null,
    ['aaa','bbb',5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];
function getMails(){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let sorted = [];
    sorted = _.filter(collections, function (entry) {
      return typeof entry === "string" && reg.test(entry)
    });
    sorted.sort();
    console.log(sorted);
}
