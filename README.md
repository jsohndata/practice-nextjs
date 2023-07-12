# Initial
`npx create-next-app@latest`

`npm run dev`
http://localhost:3000/

<br>

## Hosting on GCP
```
* firebase experiments:enable webframeworks
* firebase init hosting
```

<br>

### Hosting Question
* ? Detected an existing Next.js codebase in the current directory, should we use 
this? `Yes`
* ? In which region would you like to host server-side content, if applicable? 
`us-east1 (South Carolina)`
* ? Set up automatic builds and deploys with GitHub? `No`

### Deply
`firebase deploy`
Note: No need to `npm run build`