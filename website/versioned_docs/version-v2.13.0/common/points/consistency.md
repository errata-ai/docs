#### Example definition

```yaml
extends: consistency
message: "Inconsistent spelling of '%s'"
level: error
scope: text
ignorecase: true
nonword: false
# We only want one of these to appear.
either:
  advisor: adviser
  centre: center
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `nonword` | `bool` | Removes the default word boundaries \(`\b`\). |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |
| `either` | `array` | A map of `option 1: option 2` pairs of which only one may appear. |

`consistency` will ensure that a key and its value \(e.g., "advisor" and "adviser"\) don't both occur in its scope.
