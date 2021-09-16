# Forms
- In react forms, 2 way to submit the data:
  1. By adding the onSubmit={} in the form tag, or
  2 .By adding the onClick={} in the submit button. Both will work in the same way.
- In Js object, if the key and value have same value then use the variable or the element which is holding the value, no need to set with key. Like {firstName: firstName, email: email} = {firstName, email}.
- In set value from useState 2 steps:
  1. Use the function and return the value to set.
  2. Or just use simple method.
- Ex: setPeople((xyz) => { 
      return ([...xyz,newThingToAdd]); 
}); OR
setPeople([...xyz,newThingToAdd]);
- ....xyz is the spread out which preserves the old values and appends a new value to them.
