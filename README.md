# CampusEats Task Tracker

A small Node.js project used to practise GitHub Flow, automated checks, code
quality, and secure development.

## Run locally

```bash
npm ci
npm test
npm start
```

## Branching and CI strategy

Changes are developed on short-lived `feature/*`, `fix/*`, or `chore/*`
branches and reviewed in a pull request before they reach `main`. The CI
workflow runs on pushes to `main`, feature branches, and chore branches, and on
pull requests targeting `main`. A failing test or high-severity production
dependency audit should block a merge.

Issues can be linked to completed work by adding `Closes #<number>` to a pull
request description or commit message.

## Code-quality and security review

The unsafe example used unclear parameter names, `var`, loose equality, a magic
discount value, a hardcoded API key, and no input validation. The improved
implementation uses descriptive names, `const`, strict equality, a named
discount constant, and validation for negative and non-numeric inputs. Secrets
must be supplied through environment variables or a secrets manager; `.env`
files are ignored so credentials are not committed.

Committed secrets remain in Git history, so an exposed key must be revoked and
rotated immediately, removed from the repository and its history, and replaced
with a securely stored secret. Dependencies should be audited regularly because
known vulnerabilities can enter through third-party packages. Code review and
CI provide independent, repeatable checks before changes are merged.

## Quick Test

1. **(c)** `git switch -c new`
2. **(a)** A pull request proposes changes for review before merging.
3. **(d)** CI/CD automatically builds, tests, and deploys changes.
4. **(b)** Workflow files are stored as `.yml` files in `.github/workflows/`.
5. **(c)** Store secrets outside source control, such as in environment variables.
6. `git add .` followed by `git commit -m "fix: correct total"`.
7. Commit, build, test.
8. A live key can be stolen and abused. Revoke and rotate it, remove it from the
   repository and Git history, and store the replacement in an environment
   variable or secrets manager.
