## Mention Tweet App

Written in React + Flow

- DEMO: https://mention-tweet-app.herokuapp.com/

- App created using `create-react-app` (https://github.com/facebookincubator/create-react-app)
- Data is located in `/src/mock.js` and has been generated using `twurl` (https://github.com/twitter/twurl) :
```
% twurl authorize --consumer-key key --consumer-secret secret`
% twurl /1.1/search/tweets.json?q=%23reactjs&src=tyah
```
