#### Example definition

```yaml
extends: conditional
message: "'%s' has no definition"
level: error
scope: text
ignorecase: false
# Ensures that the existence of 'first' implies the existence of 'second'.
first: '\b([A-Z]{3,5})\b'
second: '(?:\b[A-Z][a-z]+ )+\(([A-Z]{3,5})\)'
# ... with the exception of these:
exceptions:
  - ABC
  - ADD
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |
| `first` | `string` | The antecedent of the statement. |
| `second` | `string` | The consequent of the statement. |
| `exceptions` | `array` | An array of strings to be ignored. |

`conditional` ensures that the existence of `first` implies the existence of `second`. For example, consider the following text:

> According to Wikipedia, the World Health Organization \(WHO\) is a specialized agency of the United Nations that is concerned with international public health. We can now use WHO because it has been defined, but we can't use DAFB because people may not know what it represents. We can use DAFB when it's presented as code, though.

Using the above text with our example rule yields the following:

```bash
test.md:1:224:style.UnexpandedAcronyms:'DAFB' has no definition
```

`conditional` also takes an optional `exceptions` list. Any token listed as an exception won't be flagged.
