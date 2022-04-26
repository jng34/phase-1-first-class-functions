//returns callback fn
function receivesAFunction(cb) {
    return cb();
}


//returns a named fn

function returnsANamedFunction() {
    const namedFn = () => 'Hello World!';
    return namedFn;
}


//returns an anonymous fn
function returnsAnAnonymousFunction() {
    return () => 'Bye!';
}