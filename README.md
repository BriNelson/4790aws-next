# Movies search app
* You can search Movies
* Add Movies to list of movies
* Delete Movies 
* Sign up
* Log in 
* Log out
* Delete movies you have added
* Not delete movies others have added
  

### Effectively use conditional logic, JavaScript array methods, and front-end framework elements to render large lists on the web client.
1. [Line 128](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/movies/index.js) maps over retrieved data from from AWS database
2. [Line 77](https://github.com/BriNelson/4790aws-next/blob/main/src/components/SearchDialogue.js) maps over retrieved dat from watchmode database
3. [Line 149 & 128](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/movies/index.js)

### Work with the proper libraries to create and manage the NextJS front-end portion of your project using a real development toolset.
- [Line 12](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/movies/index.js)  MUI components used through out as example some imported right here

###  Work with Yarn/NPM, Amplify CLI, and Amplify Studio to create and manage the back-end portion of your project.
- [Amplify config folder](https://github.com/BriNelson/4790aws-next/tree/main/amplify)

### A GraphQL Data Model and associated API.
- [GraphQL Schema](https://github.com/BriNelson/4790aws-next/blob/main/amplify/backend/api/nextjscoursecode/schema.graphql)

### An Authentication workflow using AWS Cognito users to signup, login, and logout users via a valid email address.
- [Line 18](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/_app.js) configuration for login
- [Line 132](https://github.com/BriNelson/4790aws-next/blob/main/src/components/ResponsiveAppBar.js) Sign out for auth

### A mix of Page and API routes within your NextJS code
- [Api route made](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/api/movie.js)
- [line 59](https://github.com/BriNelson/4790aws-next/blob/main/src/pages/movies/index.js)Api route called 
- [line 99](https://github.com/BriNelson/4790aws-next/blob/main/src/components/ResponsiveAppBar.js)Page route

###  A simple example of Authorization using Cognito users to conditionally render UI or access a page route.
- [line 1](https://github.com/BriNelson/4790aws-next/blob/main/amplify/backend/api/nextjscoursecode/schema.graphql) auth guide lines( owner can add and delete others cant )

### Properly use Git for your source version control with an established record of at least 4 days of commits each week from April 4th through May 2nd.
- [For what its worth](https://github.com/BriNelson)


## How does it work?
[Amplify Studio](https://aws.amazon.com/amplify/studio/) controls the back end, handling data modeling, the database, hosting, and authentication.
[Next.js](https://nextjs.org/) handles front end.



### deployed url
https://www.brineldesign.xyz/movies

### github
https://github.com/BriNelson/4790aws-next


### developement server
npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


