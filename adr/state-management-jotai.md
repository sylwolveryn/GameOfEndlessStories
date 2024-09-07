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

https://tutorial.jotai.org/quick-start/intro

### Issue

The project requires a state management decision, which is scalable and easy to use.
React already has built in solutions, but context might not be the preferred way.

There are multiple state managment libs, tools available, and a lot of discussions which one is the right for different projects.

https://www.reddit.com/r/reactjs/comments/szuyza/honestly_what_is_the_best_painfree_state/
https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/#heading-recoil
https://jotai.org/docs/basics/comparison

Redux, stateX, MobX, recoil, zustand, jotai, ...

### Decision

### Status

Decision: Jotai.
Great extensibility, support for different use-cases:
https://jotai.org/docs/guides/vite

Easy setup and usage

Built-in simple but elegant async support
https://jotai.org/docs/guides/async

## Details

### Assumptions

As a hobby-project, this should more of learning new stuff than just using the already established tech stack. Jotai is new, but seems like an easy to learn tool.

### Constraints

No known issue yet.

### Argument

None.

### Implications

## Related

### Related decisions

No other state management should be mixed with this, except for the primitive ones, provided by react.

### Related requirements

Not at the moment.

### Related artifacts

None.

### Related principles

If not working properly, should be revisit for a newly chosen tool.

## Notes
