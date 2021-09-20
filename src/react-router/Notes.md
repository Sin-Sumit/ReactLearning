## React-Router-Dom

- React Router is to wrap the whole project while deploying.
- Route is where react allow to pass the Component with their paths, so that react render that component.
- But in case where the path of two component start with same name like '/' for home or index page then path for about page is like '/about', in these cases react render both the component or pages in a single page.
- To avoid these mistakes, 'exact path' is used for the index component, so it will never matches with anyone.
- Switch component is too good for the above cases, because switch allow react to take only that path which first matches, if home page path matches first, React will render it. No matter whether the paths are same or not.
