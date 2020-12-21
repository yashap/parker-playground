# RNFoodDelivery

The ordering app from [the Pusher food delivery tutorial](https://pusher.com/tutorials/food-ordering-app-react-native-part-1).

## Contributing

### Environment Setup
* [nvm](https://github.com/nvm-sh/nvm)
* [yarn](https://yarnpkg.com/) - verified to work with v1.22.10
* [Setup your environment for React Native](https://reactnative.dev/docs/environment-setup)
    * Go through the "React Native CLI Quickstart", for both iOS and Android
* Create a `.env` file with the following structure:
    ```bash
    CHANNELS_APP_KEY="YOUR CHANNELS APP KEY"
    CHANNELS_APP_CLUSTER="YOUR CHANNELS APP CLUSTER"
    GOOGLE_API_KEY="YOUR GOOGLE API KEY"
    NGROK_HTTPS_URL="YOUR NGROK HTTPS URL"
    ```
    * Setup Pusher Channels, Google Cloud and ngrok as described [here](https://pusher.com/tutorials/food-ordering-app-react-native-part-1)

### Dev Workflow

```bash
# Make sure you're using the right node version
nvm use

# Install all dependencies
make install

# Run Metro (React Native JS bundler)
make run-bundler

# Run app in the Android emulator (must have `make run-bundler` running in another shell)
make run-android

# Run app in the iOS emulator (must have `make run-bundler` running in another shell)
make run-ios
```
