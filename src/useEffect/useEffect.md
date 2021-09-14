## Use Effect :
- useEffect() takes two 2 parameter:
1. A function
2.  A array of dependencies,  if empty array is passed it means that useEffects only runs
in the initial render.
- If in any situation you  nedd to run the useEffect only when initial render not again and again.
- useEffect is like to use in such place where the code run only single time and in next render it will not run, like if you want to fetch some value and don't want to update again.
- We use as many useEffect in code.
- useEffect Cleanup function helps in EventListener, like creating a EventListener about the resizing the window size, when you resize the window browser has lot to do, we think that only single time a EventListener happened but in browser it doesn't , browser resize window by bunch of EventListener defined it itself.
- cleanup function is just a return function which removethe EventListener before calling a new useEffect. It basically stop calling the useEffect function.
- And we can use the empty array as second argument in the useEffect so no need to use the cleanup function. But cleanup function is important when we deal with component appearing and disappearing.
