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

## Vercel 

- add postgres storage
- select frankfurt
- redeploy
