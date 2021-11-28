Format-specific sections apply their settings only to files that match their
associated glob pattern.

For example, `[*]` matches all files while `[*.{md,txt}]` only matches files
that end with either `.md` or `.txt`.

You can have as many format-specific sections as you'd like and settings
defined under a more specific section will override those in `[*]`.

### `BasedOnStyles`

```ini
[*]
BasedOnStyles = Style1, Style2
```

`BasedOnStyles` specifies styles that should have all of their rules enabled.

If you only want to enabled certain rules within a style, you can do so on an individual basis:

```ini
[*]
# Enables only this rule:
Style1.Rule = YES
```

You can also disable individual rules or change their severity level:

```ini
[*]
BasedOnStyles = Style1

Style1.Rule1 = NO
Style1.Rule2 = error
```

### `BlockIgnores`

```ini
[*]
BlockIgnores = (?s) *({< file [^>]* >}.*?{</ ?file >})
```

`BlockIgnores` allow you to exclude certain block-level sections of text that don't have an associated HTML tag that could be used with `SkippedScopes`. See [Non-Standard Markup](/vale-server/concepts/scoping#non-standard-markup) for more information.

### `TokenIgnores`

```ini
[*]
TokenIgnores = (\$+[^\n$]+\$+)
```

`TokenIgnores` allow you to exclude certain inline-level sections of text that don't have an associated HTML tag that could be used with `IgnoredScopes`. See [Non-Standard Markup](/vale-server/concepts/scoping#non-standard-markup) for more information.

### `Transform` (<span className="badge badge--secondary">v2.0</span>)

```ini
[*]
Transform = docbook-xsl-snapshot/html/docbook.xsl
```

`Transform` specifies a version 1.0 XSL Transformation \(XSLT\) for converting to HTML. See [Formats\#XML](/vale-server/concepts/scoping#xml-markup) for more information.
