---
id: languages
title: Non-English Text
---

Vale Server's extensibility and flexibility isn't just limited to creating
English rules&mdash;most of its features are largely language-agnostic,
allowing for entire styles to be created in other languages.

## English-only

A few of Vale's extension points were designed to specifically work for English
and therefore can't be easily extended to other languages:

- [`readability`](/vale-server/concepts/styles#readability): This extension point relies on formulas
  that are specifically designed to work on English text.

- [`capitalization`](/vale-server/concepts/styles#capitalization): This extension point involves
  changing the case of headings to match English style guides.

- [`sequence`](/vale-server/concepts/styles#sequence-v170): This extension point depends on a natural
  language processing library that currently only supports English.

## English by default

The following extension points require that non-English rules specify
`nonword: true` in order to disable the use of default word boundaries (`\b`):

- [`existence`](/vale-server/concepts/styles#existence)

- [`substitution`](/vale-server/concepts/styles#substitution)

- [`consistency`](/vale-server/concepts/styles#consistency)

    For example,

    ```yaml
    extends: existence
    message: 'Avoid using "%s"'
    nonword: true # <-- This is required
    level: suggestion
    tokens:
      - '根据'
    ```

The [`spelling`](/vale-server/concepts/styles#spelling) extension point requires the user to provide
their own Hunspell-compatible dictionary.

## Other extension points

[`occurrence`](/vale-server/concepts/styles#occurrence), [`repetiton`](/vale-server/concepts/styles#repetition), and
[`conditional`](/vale-server/concepts/styles#conditional) should all work out-of-the-box with most
languages.
