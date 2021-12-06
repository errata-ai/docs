#### Example definition

```yaml
extends: readability
message: "Grade level (%s) too high!"
level: warning
grade: 8
metrics:
  - Flesch-Kincaid
  - Gunning Fog
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `metrics` | `array` | One or more of "Gunning Fog", "Coleman-Liau", "Flesch-Kincaid", "SMOG", and "Automated Readability". |
| `grade` | `float` | The highest acceptable score. |

`readability` calculates a readability score according the specified metrics. The supported tests are Gunning Fog, Coleman-Liau, Flesch-Kincaid, SMOG, and Automated Readability.

If more than one is listed (as seen above), the scores will be averaged. This is also the only extension point that doesn't accept a scope, as readability is always calculated using the entire document (minus headings, code blocks, and lists).

`grade` is the highest acceptable score. Using the example above, a warning will be issued if `grade` exceeds 8.
