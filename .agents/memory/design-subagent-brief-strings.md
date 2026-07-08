---
name: Building large task-brief strings for subagents in code_execution
description: How to safely construct long, punctuation-heavy prompt strings inside the JS code_execution sandbox without hitting parser errors.
---

When calling `startAsyncSubagent`/`subagent` from the `code_execution` sandbox with a long, richly-punctuated creative brief (parentheses, slashes, em dashes, quotes, hex colors like `#5A2DFF`), writing the whole brief as one big JS template literal can trigger `Unexpected token` parse errors that are hard to localize (error line numbers don't reliably point at the offending character).

**Why:** Long template literals mixing quotes, backticks-adjacent punctuation, and special characters are fragile to construct in one shot inside the sandbox; a single stray character breaks the whole call and wastes a round trip.

**How to apply:** Build the brief as an array of plain strings (one per paragraph/bullet, using straight quotes and avoiding em dashes/smart punctuation) and join with `"\n"` before passing it as the `task` field. This isolates syntax issues per-line and avoids template-literal edge cases entirely.
