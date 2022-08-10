# node-env-schema
This is an experiment on how to best use env-schema library

## goals
- [x] Validate that all the required environment variables are present.
- [x] Additionally, a single object should contain variables instead of process.env

## commands
- Success command `HOST="localhost" node index.js`
- Fail command `node index.js`

## learnings
If we keep it simple, and only use it validation, it is a great utility for following reasons:

- Before starting the service, we confirm that all the required environment variables are present. (We do not want to take risk)
- We do not need to access process.env.VARIABLE_NAME and perform null assertions later in the code.
  - For example in Vanilla JavaScript 
     ```
     const port = process.env.PORT;
     if (port === undefined || port === null) {
        throw new Error("Required environment variable PORT is missing");
     }

     return port.trim();
     ```
  - For example in TypeScript
    ```
    const port = process.env.PORT!.trim();
    ```
- Config object provides us an interface and we can use auto-complete feature due to it.