Core settings appear at the top of the file and apply to the application itself rather than a specific file format.

### `StylesPath`

:::info Heads up!
Vale Server requires that all paths (on both macOS and Windows) use a forward slash (`/`) and be *absolute* file paths.
:::

```ini
# Here's an example of a relative path:
#
# .vale.ini
# ci/
# ├── vale/
# │   ├── styles/
StylesPath = "ci/vale/styles"
```

`StylesPath` specifies where Vale should look for its external resources \(e.g., styles and ignore files\). The path value may be absolute or relative to the location of the parent `.vale.ini` file.

### `MinAlertLevel`

```ini
MinAlertLevel = suggestion
```

`MinAlertLevel` specifies the minimum alert severity that Vale will report. The options are "suggestion", "warning", or "error" \(defaults to "warning"\).

### `IgnoredScopes`

```ini
# By default, `code` and `tt` are ignored.
IgnoredScopes = code, tt
```

`IgnoredScopes` specifies inline-level HTML tags to ignore. In other words, these tags may occur in an active scope \(unlike `SkippedScopes`, which are _skipped_ entirely\) but their content still won't raise any alerts.

### `IgnoredClasses` (<span className="badge badge--secondary">v2.2</span>)

`IgnoredClasses` specifies classes to ignore. These classes may appear on both inline- and block-level HTML elements.

```ini
IgnoredClasses = my-class, another-class
```

### `SkippedScopes`

```ini
# By default, `script`, `style`, `pre`, and `figure` are ignored.
SkippedScopes = script, style, pre, figure
```

`SkippedScopes` specifies block-level HTML tags to ignore. Any content in these scopes will be ignored.

### `WordTemplate`

```ini
WordTemplate = \b(?:%s)\b
```

`WordTemplate` specifies what Vale will consider to be an individual word.

