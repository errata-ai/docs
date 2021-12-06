#### Example definition

```yaml
extends: occurrence
message: "More than 3 commas!"
level: error
# Here, we're counting the number of times a comma appears
# in a sentence.
#
# If it occurs more than 3 times, we'll flag it.
scope: sentence
ignorecase: false
max: 3
token: ','
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `max` | `int` | The maximum amount of times `token` may appear in a given scope. |
| `min` | `int` | The minimum amount of times `token` has to appear in a given scope. |
| `token` | `string` | The token of interest. |

`occurrence` enforces the maximum or minimum number of times a particular token can appear in a given scope.

In the example above, we're limiting the number of commas per sentence.

This is the only extension point that doesn't accept a format specifier in its message.
