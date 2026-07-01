# Asset Notes

## `main.pdf`

`main.pdf` is the current resume PDF used by this site.

This file is intentionally allowed to exist in Git when needed, but it should not be treated like a normal text file:

- it is a binary file
- even a small resume edit usually changes the whole file at the byte level
- Git cannot provide meaningful line-by-line diffs for it
- repeated updates can add unnecessary repository weight over time

## Update Rule

When a new resume version replaces `main.pdf`, do not just overwrite it and commit normally.

Use this rule:

1. remove the old `main.pdf` from Git cache/index first
2. then add the new `main.pdf` as a fresh version
3. commit the replacement after that

The goal is to avoid treating changing binary resume files like ordinary source files.
