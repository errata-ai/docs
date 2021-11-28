#### Example definition

```yaml
extends: substitution
message: Consider using '%s' instead of '%s'
level: warning
ignorecase: false
# swap maps tokens in form of bad: good
swap:
  abundance: plenty
  accelerate: speed up
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `append` | `bool` | Adds `raw` to the end of `tokens`, assuming both are defined. |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |
| `nonword` | `bool` | Removes the default word boundaries \(`\b`\). |
| `swap` | `map` | A sequence of `observed: expected` pairs. |
| `exceptions` | `array` | An array of strings to be ignored. |

`substitution` associates a string with a preferred form. If we want to suggest the use of "plenty" instead of "abundance," for example, we'd write:

```yaml
swap:
  abundance: plenty
```

The keys may be regular expressions, but they can't include nested capture groups:

```yaml
swap:
  '(?:give|gave) rise to': lead to # this is okay
  '(give|gave) rise to': lead to # this is bad!
```

Like `existence`, `substitution` accepts the keys `ignorecase` and `nonword`.

`substitution` can have one or two `%s` format specifiers in its message. This allows us to do either of the following:

```yaml
message: "Consider using '%s' instead of '%s'"
# or
message: "Consider using '%s'"
```
