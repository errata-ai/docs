---
id: vsintro
title: Vale Comes to the Desktop
author: jdkato
author_url: https://github.com/jdkato
tags: [vale-server, announcements]
---

Introducing Vale Server, a native desktop app for Vale

![Vale Server running on macOS](https://cdn-images-1.medium.com/max/2708/1*JHnZHTJnRZq0Y1cv8Ee_xg.png)

8 months ago, I released the first [stable version of Vale](https://github.com/errata-ai/vale). Since then, I’ve shifted my focus to bringing Vale’s command-line functionality to a native desktop application. This post will discuss some of the enhancements and refinements that have been implemented along the way.

## Architecture

Vale Server maintains Vale’s high standards for performance and privacy. It consists of three components:

* A cross-platform GUI layer written in C++, allowing the app to appear as native as possible without having to maintain multiple codebases;

* a platform-specific OS interaction layer that makes use of native APIs (e.g., Cocoa on macOS); and

* an embedded HTTP server for interacting with a custom build of Vale. This server runs locally, meaning that you never have to send your content to a remote destination.

## Projects

![Project configuration using Vale Server](https://cdn-images-1.medium.com/max/2944/1*yr1m6cGi43hNI--sqtZCmQ.png)

The biggest core change is the introduction of *projects, *which address the long-standing issue of style inheritance. To illustrate the purpose of projects, consider the following scenario:
> You’re working for an organization that adheres to the [Microsoft Writing Style Guide](https://github.com/errata-ai/Microsoft), so you’ve installed the style and added it to your configuration file.
> Over time, you add your own organization’s terminology to various rules and exception lists (e.g., [Acronyms.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Acronyms.yml) and [Headings.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Headings.yml)).
> A few weeks later, a new version of the style is released with various bug fixes and enhancements. What do you do now? You either have to overwrite your changes altogether or slowly migrate each customized rule individually.

Projects make this process *much* easier. Each project is a single folder (stored at `<StylesPath>/Vocab/<Project name>/`) that consists of two text files—accept.txt and reject.txt—that contain one word or phrase per line (similar to how [ignore](https://errata-ai.github.io/vale/styles/#spelling) files currently work).

All entries in `accept.txt` are automatically added to a case-insensitive substitution rule (`Vocab.Terms`), ensuring that any occurrences of these words or phrases exactly match their corresponding entry in `accept.txt`. **Additionally, each term is automatically added to every exception list in all inherited styles — meaning that you now only need to update your project’s vocabulary to customize third-party styles.**

Entries in `reject.txt` are automatically added to an existence rule (`Vocab.Avoid`) that will flag all occurrences as errors.

You can associate a project with a particular .vale.ini file via the new Project key, as shown in the screenshot above.

## Vale Dashboard

![An example of using the new Vale Dashboard](https://cdn-images-1.medium.com/max/2000/1*nFqYL_r0yTjyS78-nLcjkw.gif)*An example of using the new Vale Dashboard*

The Vale Dashboard represents the future of Vale asset management. It currently allows you to create, delete, and sort vocabulary terms for each of your projects.

In future releases of Vale Server, you can expect to be able to manage *all *of your Vale-related assets—ignore files, rules, and even entire styles—right from your browser-based dashboard.

## Style Management

![Vale Server’s style management page](https://cdn-images-1.medium.com/max/2944/1*HilhMN7YQ0nVarIvwq6hog.png)

The introduction of *projects *opens the door to a lot of style-related improvements. Since you can now customize styles without having to actually edit their source files, future releases of Vale Server will have the ability to install, remove, and update styles from within the application itself.

## Integrations

![Vale Server running on a GitHub text box](https://cdn-images-1.medium.com/max/6720/1*e-iwoef9em45JWnCZpArgQ.png)

One of the most important features of Vale Server is its ability to interact with sandboxed (or otherwise restrictive) applications such as web browsers and email clients. There are two ways to use Vale Server with other applications:

* By installing one of its official plugins for Google Docs, Microsoft Word, Sublime Text, Atom, or Visual Studio Code (Note: some of these are still in development, but they will all be available by the end of the testing period discussed below); or

* by using its [native clipboard API](https://errata-ai.github.io/vale-server/#clipboard), allowing you to use it with applications that don’t have an official plugin (as shown in the above screenshot).

## Going Forward

Vale Server is currently in a pre-release testing phase.

Once this phase is complete, it will be available as a one-time purchase for macOS, Windows, and Linux. One license key will give you access on multiple platforms and devices.

Stay tuned for updates!

