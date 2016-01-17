# gh-repo [![Build Status](https://travis-ci.org/gmontalvoriv/gh-repo.svg)](https://travis-ci.org/gmontalvoriv/gh-repo)

> Get a Github repository's info 

## Install

```
$ npm install --save gh-repo
```


## Usage

```js
var repo = require('gh-repo');

repo({ username: "torvalds", repo: "linux" }, function(data) {
    console.log('ID: ' + data.id); // => 2325298
    console.log('Repo name: ' + data.name); // => linux
    console.log('Description: ' + data.description); // => Linux kernel source tree
    console.log('Owner: ' + data.owner.login); // => torvalds
    console.log('Created at: ' + data.created_at); // => 2011-09-04T22:48:12Z
    console.log('Open issues: ' + data.open_issues_count); // => 86
});
```


## API

### repo(username, repo)

#### username

*Required*  
Type: `string`

GitHub username.

#### repo

*Required* 
Type: `string`  

GitHub repository.

## License

MIT © [Gabriel Montalvo](https://github.com/gmontalvoriv/gh-repo/blob/master/LICENSE)
