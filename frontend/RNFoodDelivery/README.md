# RNFoodDelivery

The ordering app from [the Pusher food delivery tutorial](https://pusher.com/tutorials/food-ordering-app-react-native-part-1).

## Contributing

### Environment Setup
* [nvm](https://github.com/nvm-sh/nvm)
* [yarn](https://yarnpkg.com/) - verified to work with v1.22.10
* [Setup your environment for React Native](https://reactnative.dev/docs/environment-setup)
    * Go through the "React Native CLI Quickstart", for both iOS and Android
* Create a `.env` file (in this directory) with the following structure:
    ```bash
    CHANNELS_APP_KEY="YOUR CHANNELS APP KEY"
    CHANNELS_APP_CLUSTER="YOUR CHANNELS APP CLUSTER"
    GOOGLE_API_KEY="YOUR GOOGLE API KEY"
    NGROK_HTTPS_URL="YOUR NGROK HTTPS URL"
    ```
    * Setup Pusher Channels, Google Cloud and ngrok as described [here](https://pusher.com/tutorials/food-ordering-app-react-native-part-1)
    * Add the various keys to the `.env` file
        * Note that the `NGROK_HTTPS_URL` will change every time you run `make ngrok` when exposing your [server](../../service/food-delivery/README.md)
* Create a `android/app/src/main/res/values/secrets.xml` file with the following structure:
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <resources>
        <string name="google_maps_api_key">YOUR GOOGLE API KEY</string>
    </resources>
    ```
    * Add the same Google Maps API key as in your `.env` file

### Dev Workflow

```bash
# Make sure you're using the right node version
nvm use

# Install all dependencies
make install

# Run Metro (React Native JS bundler)
make run-bundler
# In the bundler, at any time, hit `r` to reload, `d` to open the dev tools

# Run app in the Android emulator (must have `make run-bundler` running in another shell)
make run-android

# Run app in the iOS emulator (must have `make run-bundler` running in another shell)
make run-ios
```
