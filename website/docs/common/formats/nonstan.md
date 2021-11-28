
When working with non-HTML markup, you'll probably find that there are certain
non-standard sections of text you'd like to ignore.

To ignore entire blocks of text—for example,
[Hugo's shortcodes](https://gohugo.io/content-management/shortcodes/)—you'll
want to define `BlockIgnores`. For example, consider the following
shortcode-like `file` snippet:

```text
{< file "hello.go" go >}
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
{</ file >}
```

To ignore all instances of `file`, we'd use a pattern along the lines of the
following:

```ini
BlockIgnores = (?s) *({< file [^>]* >}.*?{</ ?file >})
```

The basic idea is to capture the entire snippet in the first grouping. See
[regex101](https://regex101.com/r/mFM0kZ/1/) for a more thorough explanation.

You can also define more than one by using a list \(the `\` allows for line
breaks\):

```ini
BlockIgnores = (?s) *({< output >}.*?{< ?/ ?output >}), \
(?s) *({< highlight .* >}.*?{< ?/ ?highlight >})
```

To ignore an inline section of text, you'll want to define `TokenIgnores`. For
example, let's say we want to ignore math equations of the form `$...$`:

```latex
$\begin{bmatrix} k & k & k \end{bmatrix}^T$
```

Similar to `BlockIgnores`, we just need to define a pattern:

```ini
TokenIgnores = (\$+[^\n$]+\$+)
```
