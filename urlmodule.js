import url from 'url';
const myURL=new URL('https://example.org');
myURL.pathname='a/b/c';
myURL.search='?d=e';
myURL.pathname='#fgh';
console.log(myURL); 
/*
URL {
  href: 'https://example.org/%23fgh?d=e',
  origin: 'https://example.org',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'example.org',
  hostname: 'example.org',
  port: '',
  pathname: '/%23fgh',
  search: '?d=e',
  searchParams: URLSearchParams { 'd' => 'e' },
  hash: ''
}
*/
console.log(myURL.href); // https://example.org/%23fgh?d=e
