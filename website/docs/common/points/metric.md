:::info Heads up!
With the introduction of the `metric` extension point in v2.13.0, the
`readability` extension point has been officially deprecated.

While all `readability`-based rules will continue to work in future versions of
Vale, using `metric` is recommended going forward.
:::

#### Example definition

```yaml
extends: metric
message: "Try to keep the Flesch-Kincaid grade level (%s) below 8."
link: https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests

formula: |
  (0.39 * (words / sentences)) + (11.8 * (syllables / words)) - 15.59

condition: "> 8"
```

#### Key summary

| Name        | Type     | Description                                                     |
| :---------- | :------- | :-------------------------------------------------------------- |
| `formula`   | `string` | A formula of pre-defined variables to be evaluated.             |
| `condition` | `string` | A binary condition upon which `forumula` will trigger an alert. |

`metric` enforces arbitrary formulas based on pre-defined, built-in variables.
The table below summarizes all available variables:

|       Variable       |                                     Description                                    |
|:--------------------:|:----------------------------------------------------------------------------------:|
| `blockquote`         | The number of `blockquote` tags.                                                   |
| `characters`         | The number of characters.                                                          |
| `complex_words`      | The number of polysyllabic words without common suffixes ("es", "ed", "ing", ...). |
| `heading.h{n}`       | The number of headings at the specified level (for example, `heading.h1`).         |
| `list`               | The number of `ol` and `ul` tags.                                                  |
| `long_words`         | The number of words with more than 6 characters.                                   |
| `paragraphs`         | The number of paragraphs.                                                          |
| `polysyllabic_words` | The number of words with more than 2 syllables.                                    |
| `pre`                | The number of `pre` tags.                                                          |
| `sentences`          | The number of sentences.                                                           |
| `syllables`          | The number of syllables.                                                           |
| `words`              | The number of words.                                                               |

Since the pre-defined variables are calculated using the entire document, all
`metric`-based rules are [`summary`-scoped][1].

In addition to using the variables listed above, a `formula` may also use the
following operators:

|    Operator    |      Description      |
|:--------------:|:---------------------:|
| `+`            | Addition              |
| `-`            | Subtraction           |
| `*`            | Multiplication        |
| `/`            | Division              |
| `math.sqrt(x)` | Square root of `x`    |
| `math.abs(x)`  | Absolute value of `x` |

A `condition` may use one of `>`, `<`, `=`, `>=`, and `<=`.

The result of a `formula` will be compared to its `condition` and inserted
into its `message` format specifier (`%s`).

[1]: https://docs.errata.ai/vale/scoping
