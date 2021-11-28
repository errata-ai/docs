---
title: Vale Server API
version: 1.0.0
contact:
  email: support@errata.ai
---

The Vale Server API provides a means of communicating with the Vale Server desktop application, which manages user settings and interfaces with the Vale CLI tool, from third-party "client" applications:

<img src="/img/flow.svg" alt="An illustration of Vale Server's API flow." style="margin: auto; min-width: 50%; display: block;">

All of the official Vale Server clients&mdash;[Atom][1], [Sublime Text][2], [Visual Studio Code][3], [Google Docs][5], and [Chrome][4]&mdash;use this API to communicate with the core desktop application.

**NOTE**: Unlike most production APIs, the Vale Server API is embedded within the desktop application itself and runs on `localhost`. This means that users don't have to send their text to a remote server, but it also means that **you'll have to have an instance of Vale Server running to test the API here**.

[1]: https://github.com/errata-ai/vale-atom
[2]: https://github.com/errata-ai/SubVale
[3]: https://github.com/errata-ai/vale-vscode
[4]: https://errata-ai.github.io/vale-server/docs/chrome
[5]: https://errata-ai.github.io/vale-server/docs/gdocs
