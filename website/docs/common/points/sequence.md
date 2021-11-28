#### Example definition

```yaml
extends: sequence
message: "The infinitive '%[4]s' after 'be' requries 'to'. Did you mean '%[2]s %[3]s *to* %[4]s'?"
tokens:
  - tag: MD
  - pattern: be
  - tag: JJ
  - tag: VB|VBN
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `tokens` | `[]NLPToken` | A list of tokens with associated NLP metadata. |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |

Unlike the other extension points, `sequence` aims to support grammar-focused
rules (rather than "style"). Its built on top of [`prose`](https://github.com/jdkato/prose)
(an open-source natural language processing library) and makes significant use
of part-of-speech tagging.

An individual `NLPToken` has the following structure:

```yaml
# [optional]: A regular expression (required
# if `tag` isn't given).
pattern: '...'

# [optional]: If true, indicates that we
# *shouldn't* match this token.
negate: true   # or false

# [optional]: A part-of-speech tag (required
# if `pattern` isn't given).
tag: '...'

# [optional]: An integer meaning that there may
# be up to `n` (3, in this case) tokens between
# this token and the next one.
skip: 3
```

The example rule illustrates the basics of the extension point: we're looking
for a particular *sequence* of tokens (which can either be a regular
expression or a part-of-speech tag). The `|` notation means that we'll accept
`VB` or `VBN` in position 4.

There's also new notation in the `message`:  `%[4]s` is like `%s`, but
specifically refers to the 4th token in our sequence.
