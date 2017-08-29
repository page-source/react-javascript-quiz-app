# React-Express-MongoDB based Javascript Quiz

This gist contains the code to create a simple "javascript quiz" with react & ES6. In this version, you can see following features in this app-

1. User can take a quiz and get to know if their answers to questions are right or wrong through red/green signals showing next to question.
2. Questions can be added through UI interface and those will get saved in database.

----
### Setup

First, fork this gist to your own account by clicking the fork symbol in the upper right.

Then copy the clone URL to your clipboard.

#### Assuming you'll have Node already installed, go with following steps to get the app working:

1. Setup MongoDB on your system through this link-> [Setup MongoDB](https://docs.mongodb.com/manual/installation/).

2. Verify mongoDB setup by going in the bin folder of mongodb(in my case: C:/mongodb/bin) and run `mongo --version`. This will display the MongoDB version installed on your system and various other information.

3. Run `npm install` to install all the dependencies & devDependencies.

4. Run `npm run start-dev` to start the server. This will start both Express server and Webpack server for react.

5. Go into the bin folder inside mongodb(in my case: C:/mongodb/bin), open command prompt, and run `mongod` to start the mongoDB server.

And you'll be good to go :thumbsup:
