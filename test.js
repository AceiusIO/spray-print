const print = require('./main.js');

print.println('Message');
print.warn('Warning');
print.error('Error');
print.success('Success');
print.custom('Title','Text');

console.log('Circle Styling Test:');

print.cprint('Message');
print.cwarn('Warning');
print.cerror('Error');
print.csuccess('Success')

print.success('Unit Test Done. Run `npm publish`.');