1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map(), Filter(), and Concat() do not produce side-effects. We use Object.assign() to create a new object while extending the properties of another object, for example, initialState being updated with new state in the new object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    An action is an object which describes in a minimal way what changed in the application; it tells the reducer what happened and how to change state. 
    The reducer takes in state and an action; it returns previous state and the next state, which results due to the action.
    The store deals with all the state in an application. Everything that changes in the application is represented by a single JS object called the store. It is called a single source of truth because it contains all the state for an application, and this state is immutable; the store object cannot ever be mutated. It can only be cloned and its clones modified.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is used with Redux, while Component state is simply held in React. The difference between them is that Application state holds _all_ of the state for an entire application and passes it down to container components as necessary. However, Component state means that multiple states are held across an application. While this is not necessarily problematic in smaller applications, Application state eases the way of larger applications by maintaining all the state in an easily accessible store. Essentially, it eases the flow of state throughout all the components. Therefore, a good time to use Application state (Redux) over Component state (React state) would be when one is interacting with a large application with a great deal of state to manage.
1.  What is middleware?
    Middleware is an extension tool for Redux. It adds new functionality by intercepting every action _before_ the action flows to the reducers. It can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk is a middleware. Since reducers are synchronous by default, Redux thunk allows one to create asynchronous functions to handle async requests.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect()();
