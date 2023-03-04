async function* foo() {
    yield await Promise.resolve('Hello');
    yield await Promise.resolve('World');
    yield await Promise.resolve(',');
}

let str = '';

const data = foo();

async function generate() {
    /*  for await (const val of foo()) {
        str = str + val;
      } */
    const res = await data.next()
    console.log(res);

    if (res.done) return "DONE";
    return generate();
}

const result = generate();
console.log(result.then((res) => console.log(res)))