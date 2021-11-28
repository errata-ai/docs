---
summary: Retrieve suggestions to fix a given Alert

parameters:
  - $ref: '#/components/parameters/alert'

tags:
  - Linting and Suggestions

produces:
  - application/json

responses:
  200:
    description: An array of suggestions
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Suggestions'
  400:
    description: Missing parameter
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
                - "missing 'alert'"

operationId: FindSuggestions
---

The `/suggest` endpoint accepts a `/vale`-generated Alert and returns an array of possible fixes for the error, warning, or suggestion. The array will be empty if no fixes are found.

Also, while the response of `/vale` depends on the user's configuration, the response of `/suggest` is deterministic: the same suggestions will *always* be returned for a particular Alert.
