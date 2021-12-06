#### Example definition

```yaml
extends: capitalization
message: "'%s' should be in title case"
level: warning
scope: heading
# $title, $sentence, $lower, $upper, or a pattern.
match: $title
style: AP # AP or Chicago; only applies when match is set to $title.
exceptions:
  - ABC
  - add
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `match` | `string` | `$title`, `$sentence`, `$lower`, `$upper`, or a pattern. |
| `style` | `string` | AP or Chicago; only applies when match is set to `$title`. |
| `exceptions` | `array` | An array of strings to be ignored. |

`capitalization` checks that the text in the specified scope matches the case of `match`. There are a few pre-defined variables that can be passed as matches:

* `$title`: "The Quick Brown Fox Jumps Over the Lazy Dog."
* `$sentence`: "The quick brown fox jumps over the lazy dog."
* `$lower`: "the quick brown fox jumps over the lazy dog."
* `$upper`: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

Additionally, when using `match: $title`, you can specify a style of either AP or Chicago.
