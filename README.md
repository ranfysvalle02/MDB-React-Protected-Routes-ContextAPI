# MDB-React-Protected-Routes-ContextAPI
## Atlas App Services + React + GraphQL Starter Kit

# LIVE DEMO 
https://mdb-react-context-spfnd.mongodbstitch.com/

# Inspired by 
Blog Post: https://www.jeffedmondson.dev/blog/react-protected-routes/

# Icons

https://marella.me/material-icons/demo/

This project is meant to be a good starting point for everything from a hackathon, to a production-ready project. Most templates or starter kits are very opinionated, and force you to do things in their pre-determined structure. This template seeks to do the opposite. 

The projects goes for a minimalistic approach - providing only the absolute minimum to make things usable. This gives you the power to add ANYTHING to the project. You have the ability to quickly adjust, without having to re-code the main parts of the application. Routing/Secure Navigation, Authentication, and the UI/UX. 

The project includes bits of functionality that I've struggled in the past integrating into a React application. My hope is that by sharing this - other people can skip the headaches, and get to building cool things on these amazing platforms!

# Project Goals
- Quickly empower developers to build cool features
- Flexibility to style/design the UI/UX as desired
- No need to re-code, worry about Authentication and securing routes
- GraphQL communication without Apollo client (CRUD)
- Avatar View (Movel-Viewer/3D objects) 

## Getting Started

What you will need:
- Realm App (Realm App Id) with Email/Pwd Auth enabled (demo@demo.com as the username/pwd)
- Sample Dataset loaded into a cluster
- GraphQL Endpoint configured for the sample movies collection

If you have not previously done so, I highly encourage you to check out:
https://www.mongodb.com/docs/realm/web/graphql-apollo-react/

Once you are ready, do the following:
```sh
git clone https://github.com/ranfysvalle02/MDB-React-Protected-Routes-ContextAPI.git
cd MDB-React-Protected-Routes-ContextAPI
npm i
```

From here, you need to do a find and replace for the following (across the whole project)

```sh
"__YOUR__APP__ID__" should be replaced with your app id
"__GRAPHQL_ENDPOINT__"should be replaced with your graphql endpoint
```

After you have made the changes in the source code, you are now ready to begin.
```sh
npm run start
```

