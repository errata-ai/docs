---
id: config
title: Configuration
---

import Core from '../../common/options/core.md';
import Syntax from '../../common/options/syntax.md';

The `.vale.ini` file is where you'll control the majority of Vale Server's behavior, including what files to lint and how to lint them.

Each of your [projects](/vale-server/gui#projects) has an associated `.vale.ini` file, allowing you to manage multiple configurations at once.

## Options

The `.vale.ini` file is [INI-formatted](https://ini.unknwon.io/docs/intro) and
consists of three sections: core settings, format associations, and
format-specific settings:

```ini title=".vale.ini"
# Core settings appear at the top
# (the "global" section).

[formats]
# Format associations appear under
# the optional "formats" section.

[*]
# Format-specific settings appear
# under a user-provided "glob"
# pattern.
```

### Core settings

<Core />

### Format associations

Format associations allow you to associate an "unknown" file extension with
a supported [file format](scoping):

```ini
[formats]
mdx = md
```

In the example above, we're telling Vale to treat MDX files as Markdown files.

### Format-specific settings

<Syntax />
