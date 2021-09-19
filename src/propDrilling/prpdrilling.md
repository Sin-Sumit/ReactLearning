## Prop Drilling
- Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. 
- Problem with prop drilling is breaking out your render method into multiple components unnecessarily.
- useContext is used to avoid propdrilling.
- React.createContext has 2 compenent: Provider & Consumer
- Provider is distributor that wraps the root elements.
- And set the values in object form and pass to component.
