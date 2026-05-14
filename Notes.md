### HOW A PROJECT SETUP IS DONE FOR INDUSTRY LEVEL BACkEND
src/
│
├── controllers/
│   └── auth.controller.js      # login, signup, refresh, logout
│
├── models/
│   └── user.model.js           # user schema + token methods
│
├── routes/
│   └── auth.routes.js          # /login /signup /refresh /logout
│
├── middlewares/
│   └── auth.middleware.js      # token verification
│
├── utils/
│   └── token.util.js           # helper functions (optional)
│
├── config/
│   └── db.js                   # database connection
│
├── app.js                      # express app setup
└── server.js                   # server start







# Express.js
it is used to send and accept request between server and host/computer

# How to write / use express.js

# M1:
 require('dotenv').config() 
 const express = require('express')
 const app = express()
 const port = 5000
# M2. 
import express from "express"
const app = express()


# to send data in form of json on url
// const githubData = {
//     "login": "Deepanshu2501",
//     "id": 175596052,
//     "node_id": "U_kgDOCndiFA",
//     "avatar_url": "https://avatars.githubusercontent.com/u/175596052?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Deepanshu2501",
//     "html_url": "https://github.com/Deepanshu2501",
//     "followers_url": "https://api.github.com/users/Deepanshu2501/followers",
//     "following_url": "https://api.github.com/users/Deepanshu2501/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Deepanshu2501/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Deepanshu2501/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Deepanshu2501/subscriptions",
//     "organizations_url": "https://api.github.com/users/Deepanshu2501/orgs",
//     "repos_url": "https://api.github.com/users/Deepanshu2501/repos",
//     "events_url": "https://api.github.com/users/Deepanshu2501/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Deepanshu2501/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 0,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 2,
//     "created_at": "2024-07-15T08:13:07Z",
//     "updated_at": "2024-08-09T07:27:03Z"
// }

// app.get('/github', (req, res) => {
//     res.json(githubData)
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/instagram', (req, res) => {
//     res.send('deepanshu_')
// });  

// app.get('/login', (req,res) => {
//     res.send('<h1>Please login at deepanshu.com</h1>')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// here after starting this, code does not terminate as doing before when we are simply doing console.log this is server
// to check it simply go to localhost as it is not porting


# Mongoose
it is used to write data models which tells about the input/data fields used in the page

# Syntax or example to create data model:
1. import mongoose from "mongoose"
2. create schema which contains two objects, one for types of data fields stored in database and another is to define timestramps(createdAt,updatedAt):
const userSchema = new mongoose.Schema({
a =>  username: String,
      email: String,
      unique: Boolean
b =>
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
// to connect two models, use two keywords: type, ref
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "name" , here we give name of model which we want to connect and name given inside model while exporting
    }
},{timestramp: true})
3. export const User = new mongoose.model("for what","on what basis")
Ex: export const User = new mongoose.model("User","userSchema")


# git file/folder pushing optimization
1.to push any empty folder on git, we need to create a file inside that folder named '.gitkeep'
2.to make new files using commands, use  this syntax:
       cd fn; dir; New-Item fileName
3. to create folder: mkdir folderName
4. to delete folder: rmdir folderName



# Project Setup
1. first create package.json file
2. add git repository
3. create index.js file
4. install nodemon(for server updation)
5. then modify package.json file(addtype,script(dev))
6. npm i -D prettier
7. now, make folders inside src: 
* controllers(which control functionality)
* models(which contains data models)
* routes(which contains routes for server)
* db(which contains business logic)
* utils(which contains utility functions)
* middlewares(which run b/w server fetching e.g. cookies)
8. now install prettier and make prettier files: .prettierrc(props) , .prettierignore
9. make a database account on mongodb atlas and connect it by adding port and its url in .env file
10. install dotenv, mongoose, express.js
11. make db connection functionality separately in db and export it in index.js
12. then connect express in index.js
13. then install cookie-parser and cors and then import & config them in app.js for use
14. now we make a utility file(to remove writing of trycatch multiple times for better db connection)
15. now make an separate functionality for async handling(asyncHandler), error handling(apiError) and response(apiResponse) in utils
16. now start making models: user model and video model
17. now install aggregation pipeline functionality as : npm i mongoose-aggregate-paginate-v2
18. install bcrypt package : npm i bcrypt
19. install jwt token : npm i jsonwebtoken
20. add access and refresh token secret and expiry in .env file and define custom methods in user model
21. now make account on cloudinary and install cloudinary
22. now make cloudinary file for file uploading functioning and add cloudinary key,secret,name
23. now make a middleware named multer and add functioning of middleware using multer and also install it
24. create a method to register user in controllers/user.controller
25. now make a routes so that we run this controller in user.routes and also add router in app.js 
26. now make account on postman and use it to check proper functioning of controller
27. now make functionality for registering user in user.controller








# whenever we connect to database always use try & catch and also use async & await(because connecting to db take time)


# to import dotenv config:
M1. require('dotenv).config({path:'./env})
M2. import dotenv from 'dotenv
   dotenv.config({path:'./env'})
=> And add (-r dotenv/config --experimental-json-modules) in scripts as {dev:nodemon (-r dotenv/config --experimental-json-modules) src/index.js}


# In js, importing is done in two ways: modules(import) and common.js(require)


# We use Nodemon to stop the method of stop/starting of server again and again
syntax: 1.npm i -D nodemon
        2.And change scripts(dev:nodemon filepath(src/index.js))


# Difference b/w main dependency and dev dependency is that it(dev) use in development not in production

# app.use(cors()) : we use this when we do middleware or configuration settings

# we don't use id in models as moongose automatically generates a unique id in form of string and in bson data

# if we want to make any data field searchable in optimise form, then: index: true


# Aggregation pipeline
// to add insert, many use aggregation pipeline functionality as: 
1. import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
2. videoSchema.plugin(mongooseAggregatePaginate)
now we can write aggregation queries(many,insert)


# bcrypt : a library for nodejs
it helps to hash(encrypt or decrypt) your password
// bcryptjs
it is optimizsed bcrypt in plain js with 0 dependencies and compatible to bcrypt

# JWT(3 things: header,payload/data, verify signature(responsible to make encrypt))
it is used to make your password encrypt and to add token
it is a bearer token means whoever is hving this will get data

# Pre hook in mongoose
it is used to do some functioning just before db connection(save,delete,remove)

# Multer
diskStorage : The disk storage engine gives you full control on storing files to disk.
it has 2 things:
1. destination: is used to determine within which folder the uploaded files should be stored.
2. filename: is used to determine what the file should be named inside the folder. 


# HTTP Crash Course
// URL v/s URI v/s URN
URL : Uniform Resource Locator 
URI : Uniform Resource Identifier
URN : Uniform Resource Name
they tell about server address(location,name,identifier)


user-agent : konse user se request ayi hai


# we can give user defined names to importing function only when it is exporting default


## HOW TO WRITE EVERY PIPELINE:

# Steps to register user
1. get user details from frontend
2. validation - check not empty
3. check if user is already exists:username,email
4. check for images, check for avatar
5. upload them to cloudinary and take url ,avatar
6. create user object - create entry in db
7. remove password and refresh token field from response 
8. check for user creation
9. return res

# if data is coming in form of json or form then we can extract it by: req.body

# How to connect DB
Write a connectDB fn in which include try & catch where try connect db and catch catches error

# How to connect Middleware which store data
S1. write fn as : const storage = multer.diskStorage({})
S2. In it, assign two attribute val of destinatn & filename





## JWT TOKENS FOR AUTHENTICATN AND AUTHORIZATN


# JWT ACCESS AND REFRESH TOKEN FLOW
🔐 Login
User Login
   ↓
Verify Credentials
   ↓
Generate Access + Refresh Token
Access Token (short-lived generally 5-10 min)
Refresh Token (long-lived generally 7-30 day)
   ↓
Send Tokens to Client
   ↓
Protected API Request
   ↓
Middleware Verifies Access Token
   ↓
Controller Executes


🔄 When Access Token expires
Frontend sends refresh token
Backend:
Verifies refresh token
Finds user by _id
Generates new access token
User stays logged in ✅


# WHY WE USE JWT TOKEN
$ PROBLEM : AS HTTP IS STATELESS -> SO AFTER LOGIN, SERVER DON'T REMEMBER USER -> SO SENDING ID & PASSWORD AGAIN & AGAIN -> LEADS TO INSECURITY, SLOWER

$ SOLUTION : 
A. Tokens act as a proof of authentication
B. User logs in once
C. Server gives a token
D. Client sends token with every request
E. Server verifies token → allows access

# Why 2 Token ?
Problem with single token
If token expires → user logs out
If token lifetime is long → security risk if stolen
So we use two token as access & refresh

# IN SIMPLE LANGUAGE:
Tokens are used to maintain user authentication in stateless HTTP systems. An access token is a short-lived JWT used to authorize API requests, while a refresh token is a long-lived token used to generate new access tokens without re-authentication. This separation improves security and user experience by limiting token exposure while maintaining session continuity.


# HOW TO MAKE USER MODEL

MAKE USER SCHEMA(HAVING NAME,EMAIL,PASS,AVATAR,COVERIMAGE,EMAIL, TOKEN)
   ↓
NOW WRITE A METHOD TO HASH THE PASSWORD
   ↓
NOW WRITE A METHOD TO VERIFY PASSWORD
   ↓
THEN WRITE A METHOD TO GENERATE ACCESS TOKEN
   ↓
THEN WRITE A METHOD TO GENERATE REFRESH TOKEN
   ↓
ATLAST EXPORT THAT USER

