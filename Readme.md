# EXPO DEPLOYMENT EXAMPLE

### Database

- add postgres
- add ley
- run ESLint again

### Deployment

- add react-dom
- add react-native-web

The deployment fails if we don't add the dependencies. The React Native web app depends on this. 

```bash
Please install react-native-web@~0.19.10, react-dom@18.2.0 by running:
npx expo install react-native-web react-dom
If you're not using web, please ensure you remove the "web" string from the
platforms array in the project Expo config.
Error: Command "pnpm migrate up && expo export -p web && sed -i 's/"type": "module"/"type": "commonjs"/' package.json" exited with 1
```

- add `api/index.ts` file 
- add `vercel.json` file

- add @expo/server patch

Without patching with `.flat()` it will fail with

```bash
Unhandled Rejection: TypeError: The argument 'headers' is invalid. Received [ [ 'content-type', 'text/html' ] ]
    at ServerResponse.writeHead (node:_http_server:373:15)
    at ServerResponse.n.writeHead (/opt/rust/nodejs.js:8:2972)
    at respond (/var/task/node_modules/@expo/server/build/vendor/vercel.js:62:9)
    at /var/task/node_modules/@expo/server/build/vendor/vercel.js:16:16
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Server.<anonymous> (/opt/rust/nodejs.js:1:10464)
    at Server.<anonymous> (/opt/rust/nodejs.js:8:3933) {
  code: 'ERR_INVALID_ARG_VALUE'
}
Node.js process exited with exit status: 128. The logs above can help with debugging the issue.
```



## Vercel 

- add postgres storage
- select frankfurt
- redeploy
