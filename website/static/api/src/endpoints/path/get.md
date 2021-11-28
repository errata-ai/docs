---
summary: Get the user's StylesPath

tags:
  - Local Resources

produces:
  - application/json

responses:
  200:
    description: An array of suggestions
    content:
      application/json:
        schema:
          type: object
          required:
            - path
          properties:
            path:
              type: string

operationId: GetPath
---

The `/path` endpoint returns the user's active [`StylesPath`](https://errata-ai.github.io/vale-server/docs/style).

This is useful for implementing the ability to browse and edit rules within your application&mdash;for example, the "View Rule" functionality in the Atom, Visual Studio Code, and Sublime Text clients.


