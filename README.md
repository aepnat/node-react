## Node React
[https://node-react-aepnat.herokuapp.com](https://node-react-aepnat.herokuapp.com)

This application uses NodeJS for backend and React for frontend. This application serves to create a campaign via email and tracking a feedback from user.


### Instalation

1. Install package for server using command `yarn` or `npm install`
2. Install package for client in client folder using command `yarn` or `npm install`
3. Create `.env` file, you can copy `.example.env` file
4. Fill all config on `.env` file

### Run Server and Client

1. In root folder using command `yarn run dev`

### Deployment on Heroku

1. Create a new app
2. Deploy app with github

### Stacks

- [Heroku for Server](https://heroku.com)
- [Google API for Sign in](https://console.developers.google.com/)
- [MongoDB Atlas for Cloud MongoDB](https://cloud.mongodb.com)
- [Stripe for payment](https://stripe.com)
- [SendGrid for Email Sender](https://sendgrid.com)

### Features
- [x] Login with Google
- [x] Add credit with Stripe payment
- [x] List surveys
- [x] Create surveys
- [x] Form validations
- [x] Track email clicks
- [ ] Delete a survey
- [ ] Allow user to specify the 'from' field on surveys email
- [ ] Allow client side sorting of surveys
- [ ] Draft surveys