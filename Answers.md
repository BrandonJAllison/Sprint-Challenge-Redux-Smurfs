1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

        Filter, reduce, map do not produce side effcts, map would be used to create a new object while extending the properties of another object.  

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        The 'store' is a single source of truth because it's the global state for the entire application. 'Actions' sends the data from the application to the store. Reducers are pure functions that never produce any side effects. When an action is dispatched it flows through reducers. Reducers take in 2 arguments the state and actions. Reducers never update state directly but always return a new object.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

        An applications state is the state for the entire applications. The 'component' state is local to that particular component. I would use component state in a component like sign up form. 


4.  What is middleware?

        Middleware is an extension that adds new functionality to Redux by intercepting every action before it flows through the reducers. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Redux-thunk is a way to dispatch asynchornous change from one state to another. It is a part of middleware and looks for actions that are functions. If an action is a function then it will dispatch it.


6.  Which `react-redux` method links up our `components` with our `redux store`?

        The "connect" method allows us to link our components with our redux store. We first wrap our app in a provide component that allows us to connect to the store. 
