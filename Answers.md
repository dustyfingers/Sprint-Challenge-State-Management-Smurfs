1. What problem does the context API help solve?
the problem of having to use redux for state management lol

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are code blocks you want to fire on some input, a reducer takes in action types and fires off an action, and the store is the app wide state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
when you want access to some piece of state globally, its best to use appl leve state (directly on app.js, or using contextAPI + hooks, or using redux or mobX)
whenever you only want acces to a piece of state within a component (which doesnt seem to be often in my experience), you should use component level state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows asynchonous calls with redux & i have no idea

1. What is your favorite state management system you've learned and this sprint? Please explain why!
context api + hooks
its way cleaner and simpler
