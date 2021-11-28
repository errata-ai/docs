#### Example definition

```yaml
extends: repetition
message: "'%s' is repeated!"
level: error
alpha: true
tokens:
  - '[^\s]+'
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |
| `alpha` | `bool` | Limits all matches to alphanumeric tokens. |
| `tokens` | `array` | A list of tokens to be transformed into a non-capturing group. |

`repetition` looks for repeated occurrences of its tokens. If `ignorecase` is set to `true`, it'll convert all tokens to lower case for comparison purposes.
