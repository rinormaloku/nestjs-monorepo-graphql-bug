The bug is caused when libraries in monorepo use graphql scalars.


Run
```
npm install --prefix server
npm install --prefix libs/types
```


Run the tests:
```
npm run test:e2e --prefix server
```

Fails with:
```
Cannot determine a GraphQL output type for the "id". Make sure your class is decorated with an appropriate decorator.
```