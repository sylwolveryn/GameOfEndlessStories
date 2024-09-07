# Monorepo vs multirepo

Contents:

- [Dev notes](#dev-notes)
  - [Issue](#issue)
  - [Decision](#decision)
  - [Status](#status)
- [Details](#details)
  - [Assumptions](#assumptions)
  - [Constraints](#constraints)
  - [Positions](#positions)
  - [Argument](#argument)
  - [Implications](#implications)
- [Related](#related)
  - [Related decisions](#related-decisions)
  - [Related requirements](#related-requirements)
  - [Related artifacts](#related-artifacts)
  - [Related principles](#related-principles)
- [Notes](#notes)

## Dev notes

https://pnpm.io/cli/add

### Issue

Chose the right package manager for node, and web development.
It should support everything in need, while staying reliable and fast.

npm, yarn, bun, pnpm

### Decision

### Status

Decision: pnpm
Mainly because of pnpm monorepo usage, but seems it has a good support in every other new technologies I came across.

## Details

### Assumptions

As a hobby-project, this should more of learning new stuff than just using the already established tech stack. pnpm is new for me, but similar to the existing ones.

### Constraints

No known issue yet.

### Argument

None.

### Implications

## Related

### Related decisions

No other package manager should be mixed with this.

### Related requirements

Not at the moment.

### Related artifacts

None.

### Related principles

If not working properly, should be revisit for a newly chosen package manager.

## Notes
