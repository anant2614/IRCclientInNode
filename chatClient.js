var net = require('net');
var replace = require('stream-replace');
var client = net.connect({
  host: 'irc.freenode.net',
  port: '6667'
});
client.pipe(process.stdout);
process.stdin.pipe(replace('\n', '\r\n')).pipe(client);
