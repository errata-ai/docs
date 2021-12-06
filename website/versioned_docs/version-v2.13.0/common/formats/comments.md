You can use selective, in-text configuration through markup comments in certain
formats. The follow sections describe the comment style required for each
supported format.

### Markdown &amp; HTML

Markdown and HTML use HTML-style comments:

```markup
<!-- vale off -->

This is some text

more text here...

<!-- vale on -->

<!-- vale Style.Rule = NO -->

This is some text

<!-- vale Style.Rule = YES -->
```

### reStructuredText

reStructuredText uses its own comment style:

```text
.. vale off

This is some text

.. vale on
```

### AsciiDoc

AsciiDoc uses HTML-style comments with its pass-through functionality:

```text
pass:[<!-- vale Microsoft.GenderBias = NO -->]

This steward is ignored.

pass:[<!-- vale Microsoft.GenderBias = YES -->]

This is a steward that raises an alert.
```
