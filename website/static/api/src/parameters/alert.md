---
name: alert
in: formData
schema:
  $ref: "#/components/schemas/Alert"
---

A `/vale`-generated Alert.

**NOTE**: `/vale` returns an *array* of Alerts, but `/suggest` expects a *single* Alert.

**TIP**: Since the results of `/suggest` are deterministic, your application can employ a cache to improve user interaction time.
