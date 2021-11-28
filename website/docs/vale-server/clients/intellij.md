---
id: intellij
title: Intellij-based tools
---

An older (seemingly unmatined) plugin for using Vale with IntelliJ-based IDEs is available at [github.com/jjaderberg/vale-gradle-plugin](https://github.com/jjaderberg/vale-gradle-plugin). If you are interested in developing a new one, [add your input to this issue](https://github.com/errata-ai/vale-server/issues/39).

In the meantime [jillesvangurp](https://github.com/jillesvangurp) offered a partial solution to getting Vale CLI to work with IntelliJ-based IDEs, ensure you have Vale CLI installed first.

Two ways to run Vale in Intellij:

1.  in _preferences > tools > external tools_ add a configuration for vale.

Jilles used this as the command line arguments:

```shell
--config /{path_to_config}/.vale.ini --output line --sort --relative $FilePathRelativeToProjectRoot$
```

Set `$ProjectFileDir$` as the working directory. Jilles recommends using the [Awesome Console plugin](https://plugins.jetbrains.com/plugin/7677-awesome-console) to handle output filters.

1.  Execute Vale via a Gradle task. There is lots of room for improvement, but it works.

```groovy
tasks.register("vale") {
    doLast {
        project.exec {
            commandLine("vale", "--config", "/{path_to_config}/.vale.ini", "--output", "line", "--sort", "--relative", "{file}.md")
        }
    }
}
```

In both cases, Jiiles used the Awesome Console plugin to turn the file names + line numbers from the output into clickable links. The only thing missing is for this to pick up the warnings and highlight them in the file.
