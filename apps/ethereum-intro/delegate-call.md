# In JS

The `call()` method of function instances call this function with a given this value and arguments provided individually (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).

```js
class Foo {
  private bar: number;
  foo() { console.log('foo', this.bar) }
}

// undefined
// 42
const foo = new Foo()
foo.foo()
foo.foo.call({
  bar: 42
})
```

# Example of call()

```js
function greet() {
  console.log(this.animal, 'typically sleep between', this.sleepDuration);
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```
