# MDB-React-Protected-Routes-ContextAPI
## _Realm + React Starter Kit_

# LIVE DEMO 
https://react-protected-contextapi-vbtsc.mongodbstitch.com/

# Inspired by 
Blog Post: https://www.jeffedmondson.dev/blog/react-protected-routes/

This project is meant to be a good starting point for everything from a hackathon, to a production-ready project. Most templates or starter kits are very opinionated, and force you to do things in their pre-determined structure. This template seeks to do the opposite. 

The 'master' branch is going to be specific to MongoDB Realm / App Services, but the goal is to have many branches with different tools/frameworks. Each branch containing just enough to get started quickly. 

The projects goes for a minimalistic approach - providing only the absolute minimum to make things usable. This gives you the power to add ANYTHING to the project. You have the ability to quickly adjust, without having to re-code the main parts of the application. Routing/Secure Navigation, Authentication, and the UI/UX. 

# Project Goals
- Quickly empower developers to build cool features
- Flexibility to style/design the UI/UX as desired
- No need to re-code, worry about Authentication and securing routes
- GraphQL communication without Apollo client

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

From here, you need to change two files to get everythng working...

```sh
const app = Realm.getApp("__YOUR__APP__ID__"); //src/hooks/useAuth.tsx
fetch("__GRAPHQL_ENDPOINT__", options); //src/components/ItemList.tsx
```

If you'd like to modify the GraphQL query, just change this line:
```sh
const getMovies = () => `{ movies { _id rated title year } }`; //src/components/ItemList.tsx
```

