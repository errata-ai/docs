---
name: format
in: formData
schema:
  type: string
---

The would-be file extension of `text`. In other words, since `text` is passed as a buffer (and not a file path), `format` informs Vale Server of how it should parse the provided content.

This value should include any leading "." characters, as is common practice with extension-extraction utilities such as [`path.extname(path)`](https://nodejs.org/api/path.html#path_path_extname_path) for Node.js:

```
path.extname('index.coffee.md');
// Returns: '.md'
//
// This is the expected value for `format`.
```
