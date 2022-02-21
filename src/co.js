var co = require('co');
var prompt = require('co-prompt');

co(function* () {
  var username = yield prompt('帐号: ');
  var pwd = yield prompt.password('密码: ');
  var accessToken = yield prompt.prompt('accessToken: ')
  // var desc = yield prompt.multiline('description:');
  // var ok = yield prompt.confirm('are you sure?(yes|no)');
  console.log('accessToken: ', accessToken);
  console.log('hello %s %s\n', username, pwd);
  console.log('you describe yourself as:\n' + desc);
  console.log('answer: %s', ok);
  process.exit();
});