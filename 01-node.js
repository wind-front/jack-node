const dns = require('dns');

// supervisor自动更新服务器

dns.lookup('localhost', (err, address, family) => {
  console.log('IP 地址: %j 地址族: IPv%s', address, family);
  console.log('IP 地址: %j 地址族: IPv%s', family);
});
// IP 地址: "192.0.43.8" 地址族: IPv4

function fn(one, two, three) {
    console.log('My name is %a, age is %a, likes are %a',one, two, three);
}
fn('jack', '25', 'play')