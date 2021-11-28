---
summary: Lint the given text according to its given format.

parameters:
  - $ref: '#/components/parameters/text'
  - $ref: '#/components/parameters/format'

tags:
  - Linting and Suggestions

produces:
  - application/json

responses:
  200:
    description: An array of alerts
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Alerts'
  400:
    description: Missing parameters
    content:
      application/json:
        schema:
          type: object
          required:
            - error
          properties:
            error:
              type: string
              enum:
                - "missing 'text' or 'format'"

operationId: LintText
---

The `/vale` endpoint accepts a string with an assigned format and returns an array of alerts (errors, warnings, or suggestions) about the provided content.

Alerts are generated according to [user-defined rules and configurations](https://errata-ai.github.io/vale-server/docs/ini), so the same `text` value can generate many different responses depending on how the [active project](https://errata-ai.github.io/vale-server/docs/ui#projects) is configured.
