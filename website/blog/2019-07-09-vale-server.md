---
id: vale-server
title: Introducing Vale Server
author: jdkato
author_url: https://github.com/jdkato
tags: [vale-server]
---

Vale Server is a desktop application that brings your editorial style guide to life.

![A control flow diagram of Vale Server’s functionality](https://cdn-images-1.medium.com/max/2000/1*qBGyIDJlj9jY4osEhr3Q3A.png)

Almost two months ago, I announced that [Vale was coming to the desktop](https://medium.com/@jdkato/vale-comes-to-the-desktop-b813b24b66ba). The goal was simple: move away from the command-line environment, while making it easier to manage Vale-related files and folders.

In this post, I’ll discuss the progress I’ve made and the new features (and enhancements) you can make use of in your writing workflow.

## Vale Server 101

Vale Server is a cross-platform (currently available for macOS and Windows; Linux is on its way) desktop application that helps you “codify” editorial guidelines.

![Vale Server running through its Visual Studio Code client.](https://cdn-images-1.medium.com/max/3488/1*m4YPCAnNs3loML_Z2adEJQ.png)

For example, as a writer, you probably have certain guidelines that you need to follow—e.g., naming conventions, word usage, and capitalization styles—that allow the company or organization you’re writing for to maintain a consistent voice across all of its media. Vale Server allows you to automate the process of checking for these *stylistic* aspects of writing.

### Styles

Vale Server’s key feature is the notion of *styles*. Styles are collections of user-created rules that enforce arbitrary guidelines.

![Vale Server’s web-based dashboard.](https://cdn-images-1.medium.com/max/3756/1*bvhbRiZzI5PI9OF_rXY9IA.png)

Vale Server comes with a growing selection of open-source, pre-made styles for many popular style guides and writing tools (of course, you can also create your own using the [extension system](https://errata-ai.github.io/vale-server/docs/style)).

The biggest styles-related change is the introduction of the Vale Dashboard (shown above). The Vale Dashboard allows you to browse, install, and update any style that has been submitted to the [new style library](https://github.com/errata-ai/styles). This is a significant improvement over the *find-download-unzip-copy* workflow that Vale currently requires.

That said, Vale Server is still 100% compatible with the old StylesPath workflow—meaning you can still use custom styles that you don’t want to submit to the public library.

### Projects

Vale Server (as discussed in the previous post) introduces a new project-management system. Consider the following scenario:

> You’re working for an organization that adheres to the [Microsoft Writing Style Guide](https://github.com/errata-ai/Microsoft), so you’ve installed the style and added it to your configuration file.
>
> Over time, you add your own organization’s terminology to various rules and exception lists (e.g., [Acronyms.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Acronyms.yml) and [Headings.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Headings.yml)).
>
> A few weeks later, a new version of the style is released with a few bug fixes and enhancements. What do you do now? You either have to overwrite your changes altogether or slowly migrate each customized rule individually.

![Vale Server’s project-based vocabulary dashboard.](https://cdn-images-1.medium.com/max/3992/1*dHt8G3gB-4M_TT2xdsyn9w.png)

Projects make this process *much* easier. Each project is a single folder (stored at `<StylesPath>/Vocab/<Project name>/`) that consists of two text files&mdash;`accept.txt` and `reject.txt`&mdash;that contain one word or phrase per line (similar to how [ignore](https://errata-ai.github.io/vale/styles/#spelling) files currently work).

* All entries in accept.txt are automatically added to a case-insensitive substitution rule (`Vocab.Terms`), ensuring that any occurrences of these words or phrases exactly match their corresponding entry in `accept.txt`. Each term is automatically added to every exception list in all inherited styles—meaning that you now only need to update your project’s vocabulary to customize third-party styles.

* Entries in reject.txt are automatically added to an existence rule (`Vocab.Avoid`) that will flag all occurrences as errors.

Additionally, instead of having to add your customizations to the text files themselves, you can manage different project-based [*vocabularies](https://errata-ai.github.io/vale-server/docs/ui#vocabularies) *through the dashboard (shown above).

### Clients

Unlike most writing applications, Vale Server doesn’t include its own editor—its functionality is exposed over a *server *that communicates with other applications (referred to as “clients”). This allows you to use your preferred tools while still using Vale Server to check your content.

Currently, clients are available for [**Sublime Text 3](https://github.com/errata-ai/SubVale/blob/master/README.md), [Atom](https://github.com/errata-ai/vale-atom), [Visual Studio Code](https://github.com/errata-ai/vale-vscode), and [Google Docs](https://errata-ai.github.io/vale-server/docs/gdocs)** (you can also check content via [your clipboard](https://errata-ai.github.io/vale-server/docs/usage#step-4-using-the-clipboard)). These clients take full advantage of Vale Server’s integration with the desktop, allowing for better control of and navigation to your Vale-related assets.

![Clients (Sublime Text 3 shown above) have rich support for Vale Server and its resources.](https://cdn-images-1.medium.com/max/3500/1*Ca3t8c8d9i0aN_m60eueHQ.png)

Some of the new features you can expect in many of the clients are:

* **Jump to Rule Definition**: Access a rule’s definition from its in-text occurrences.

* **Jump to Source**: Open the relevant section of a style guide from occurrences of its rules.

* **StylesPath Navigation**: Browse and edit your styles from within your editor.

### Privacy

Vale Server includes an embedded HTTP server that runs on localhost, meaning that your content never has to be sent to a remote server.

The benefit to this approach (over the CLI) is that Vale Server has the ability to communicate with applications that run in a sandboxed environment (as is the case with the Google Docs add-on) without losing the ability to access your local configuration details.

## Vale vs. Vale Server

I don’t view Vale and Vale Server as competing products: Vale excels in CI/CD environments, while Vale Server offers a better overall experience for individual writers through improved (and expanded) plugins for other apps, a GUI, project management, and a web-based dashboard.

I intend to continue developing Vale and aim to keep a high level of compatibility between the two products.

Ideally, I’d say that you should have:

1. A precise set of guidelines (i.e., error-level, fail-worthy rules) checked through Vale on your CI service; and

1. an expanded set of guidelines checked (on-the-fly) through Vale Server’s various client integrations.

## Going Forward

Vale Server is currently available for a one-off [$40 purchase](https://errata.ai/vale-server/#puchase). This includes *all* platforms (macOS and Windows for now; Linux is on its way!), clients, and future updates. I also offer support through either email (support@errata.ai) or [GitHub issues](https://github.com/errata-ai/vale-server/issues) (my response times are typically less than 24 hours).

In future updates of Vale Server, you can expect (in no particular order):

* Microsoft Word and web browser clients;

* an interactive Rule Creator for the dashboard;

* multiple new styles (including a grammar-focused one);

* support for XML documents; and

* the ability to sync your projects across multiple computers and users.

If you’d like to learn more, read the documentation, or purchase a license, please visit the [Vale Server website](https://errata.ai/vale-server/).

