---
id: sublime-text
title: Sublime Text
---

The Vale Server client for Sublime Text 3 is [open source](https://github.com/errata-ai/SubVale). Please consult our [known issues](https://github.com/errata-ai/SubVale/issues) if you run into any problems.

![Preview image][preview-img]

## Installation

After you have Vale Server [installed and running](/vale-server/install), you can install the Atom package through the built-in [package manager][pck-ctrl]:

1. Bring up the Command Palette
   (<kbd>Command-Shift-P</kbd> on macOS and <kbd>Ctrl-Shift-P</kbd> on Linux/Windows).
2. Select `Package Control: Install Package`
   and then select `Vale` when the list appears.

## Usage

You can run one of the following commands via the Command Palette:

1. `Vale Server: Lint View`: runs Vale Server on the active view.
2. `Vale Server: Edit Styles`: shows a list of styles relevant to the active view.
3. `Vale Server: Open Dashboard`: opens the Vale Server dashboard in your default browser.

## Configuration

This package exposes a number of [configuration options](https://github.com/jdkato/SubVale/blob/master/Vale.sublime-settings). These include styling the in-text alerts, adding custom HTML/CSS for the pop-ups, and listing accepted syntaxes.

See the Default settings file (`Preferences → Package Settings → Vale → Settings - Default`) for more details.

See the [GitHub repository](https://github.com/errata-ai/SubVale) for more information.

[Vale-home]: https://errata.ai/vale-server/
[Vale-install]: https://errata-ai.github.io/vale-server/docs/install
[pck-ctrl]: https://packagecontrol.io/installation "Sublime Package Control by wbond"

[preview-img]: https://user-images.githubusercontent.com/8785025/60686319-de950a00-9e5c-11e9-87bf-14fd36571778.png
[demo-gif]: https://user-images.githubusercontent.com/8785025/60686352-0f753f00-9e5d-11e9-8ca0-aeeb1054705e.png
