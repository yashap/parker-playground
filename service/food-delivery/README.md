# Food Delivery Service

The backend from [the Pusher food delivery tutorial](https://pusher.com/tutorials/food-ordering-app-react-native-part-1).

## Contributing

### Environment Setup
* [nvm](https://github.com/nvm-sh/nvm)
* [yarn](https://yarnpkg.com/) - verified to work with v1.22.10
* Setup your secrets (not checked into source control)
    * Create a `.env` file (in this directory) with the following structure:
        ```bash
        PUSHER_APP_ID="YOUR PUSHER APP ID"
        PUSHER_APP_KEY="YOUR PUSHER APP KEY"
        PUSHER_APP_SECRET="YOUR PUSHER APP SECRET"
        PUSHER_APP_CLUSTER="YOUR PUSHER APP CLUSTER"
        ```
        * Setup Pusher Channels and ngrok as described [here](https://pusher.com/tutorials/food-ordering-app-react-native-part-1)
        * Add the various keys to the `.env` file

### Dev Workflow

```bash
# Make sure you're using the right node version
nvm use

# Install all dependencies
make install

# Run the HTTP server
make run

# Run ngrok, exposing the local HTTP server to the internet
make ngrok
# Then, if running a frontend, get your ngrok HTTPS URL, and use it in the frontend's config
```
