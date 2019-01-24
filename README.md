# slow-react-redux-todomvc

Slow React TodoMVC implementation using Redux architecture.

## Why ?

This project is build to make it easy to illustrate various performance issues which may happen in React/Redux applications and their solutions.

## What is slow?

1. Random slowness is introduced in `TodoItem` component render.
1. Random slowness is introduced in `TodoTextInput` component render.
1. Fixed slowness is introduced in each action of `todos` reducer.
1. Fixed slowness is introduced in each action of `visibilityFilter` reducer.
