# DC pattern libs

## Release

```
$ git checkout Release
$ git merge {YOUR_TOPIC_BRANCH}
$ git tag {YOUR_NEW_VERSION}
$ git push origin {YOUR_NEW_VERSION}
```

### [example] update to version 1.0.0 (Git tag name is v1.0.0)

```
$ git checkout Release
$ git merge {YOUR_TOPIC_BRANCH}
$ git tag v1.0.0
$ git push origin v1.0.0
```

### update dependened libs

please update `package.json`.
We need to update tag name.

```
$ vim package.json
    "dc-pattern-lib": "git+https://xxxxx:x-oauth-basic@github.com/megumiteam/dc-pattern-lib#{YOUR_NEW_VERSION}",

$ npm update dc-pattern-lib
```

### [example] update to version 1.0.0 (Git tag name is v1.0.0)

```
$ vim package.json
    "dc-pattern-lib": "git+https://xxxxx:x-oauth-basic@github.com/megumiteam/dc-pattern-lib#v1.0.0",

$ npm i
```
