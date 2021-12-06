---
id: plugins
title: Creating a plugin
---

Vale can provide JSON output that extensions can use. How you get this output can depend on if you use Vale server or CLI.

## With Vale CLI

Your extension should call the Vale CLI binary, which the user of your plugin needs to have installed, setting the output to `JSON` mode, along with any other arguments.

```shell
vale --output JSON {path/file}
```

Look at how the VSCode extension uses the [`buildCommand`](https://github.com/errata-ai/vale-vscode/blob/78cd80ff5bcc043f51aa22126997c4e86e5b13fd/src/features/vsUtils.ts#L290) method to create [a reusable command the extension can call](https://github.com/errata-ai/vale-vscode/blob/78cd80ff5bcc043f51aa22126997c4e86e5b13fd/src/features/vsProvider.ts#L97) with a variety of parameters.

## With Vale Server

Your extension should call the Vale server [`/vale`](https://docs.errata.ai/api/index.html#/Linting%20and%20Suggestions/LintText) endpoint, which the user of your plugin needs to have installed.

_<http://localhost:7777/vale>_ with the text to lint in the `text` parameter and `format` as the file extension of the file to check, including the leading ".".

The VSCode extension does something similar, creating a [`postString`](https://github.com/errata-ai/vale-vscode/blob/dbdb13bdf05c3ca8562a3f181c07fcb609ea9793/src/features/vsUtils.ts#L238) method that handles creating the request and response to the endpoint, [that the extension calls](https://github.com/errata-ai/vale-vscode/blob/78cd80ff5bcc043f51aa22126997c4e86e5b13fd/src/features/vsProvider.ts#L44) when needed.

## JSON output of checks

Whether using Vale CLI or Server, the JSON output of the checks configured to run is similar, consisting of a file name with an array of check objects.

```json
{
  "index.md": [
    {
      "Action": {
        "Name": "",
        "Params": null
      },
      "Check": "write-good.Passive",
      "Description": "",
      "Line": 6,
      "Link": "",
      "Message": "'was created' may be passive voice. Use active voice if you can.",
      "Severity": "warning",
      "Span": [
        59,
        69
      ],
      "Match": "was created"
    },
  ]
}
```

Each object contains the following information:

-   `Action`: An action or change to the text that Vale server can take with a rule, containing a `Name` for the action and `Params` passed to the action.
-   `Check`: The ruleset and rule triggered.
-   `Description`: A more detailed explanation for a rule. You can use it with [custom output format](https://docs.errata.ai/vale/cli#--output) or an editor integration's UI.
-   `Line`: The line that contains the error.
-   `Link`: Link to explanation of style guide rule
-   `Message`: Help text output by the rule
-   `Severity`: The error level.
-   `Span`: The start and finish characters on the line.
-   `Match`: The text matched.

A plugin should loop through these checks, and parse the values, to output them to an appropriate part of the IDE or editor interface.

For example, the VSCode extension uses the shared [`handleJSON`](https://github.com/errata-ai/vale-vscode/blob/78cd80ff5bcc043f51aa22126997c4e86e5b13fd/src/features/vsProvider.ts#L110) method to take each check object and convert it to a [VSCode diagnostic](https://code.visualstudio.com/api/references/vscode-api#Diagnostic) that appears in the bottom status bar of the editor window. If a user uses Vale server, you can also implement some form of "fix" solution propagated from the rule to the JSON, to the IDE or editor with the `Action` property. For example, in the [Microsoft style ellipses check](https://github.com/errata-ai/Microsoft/blob/ec219cff4ef10c558945f25dcb47eb1fc6ebca24/Microsoft/Ellipses.yml), the action is to offer to remove the ellipses.

## General tips

### Configuration options

If the editor or IDE allows for user-configured settings for a plugin, then some of the following are good settings to include:

-   When to check a document with Vale, on every change, or on save?
-   How to toggle between Vale CLI or Vale Server
-   Custom paths for the Vale CLI binary, configuration, or styles paths

## Vale server API reference

You can find the full API reference for Vale server [in the OAS spec](https://docs.errata.ai/api/index.html#/Linting%20and%20Suggestions/LintText).
