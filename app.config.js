import 'dotenv/config';

export default {
  "expo": {
    "name": "hyways",
    "slug": "hyways",
    "owner": "hywaysapp",
    "version": "1.0.1",
    "orientation": "portrait",
    "icon": "./assets/logo/logo.png",
    "userInterfaceStyle": "light",
    "scheme": "hyways",
    "splash": {
      "image": "./assets/splash-logo/slash-logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier":"hyways.app",
    },
    "android": {
      "package":"hyways.app",
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo/logo.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/splash-logo/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": process.env.PROJECT_ID
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      expoClientId: process.env.EXPO_CLIENT_ID,
      androidClientId: process.env.ANDROID_CLIENT_ID,
      iosClientId: process.env.IOS_CLIENT_ID,
      xRapidApiKey: process.env.X_RAPIDAPI_KEY,
      xRapidApiHost: process.env.X_RAPIDAPI_HOST,
      taskId: process.env.TASK_ID,
      groupId: process.env.GROUP_ID,
      fbAppId: process.env.FB_APP_ID,
      fbAppSecret: process.env.FB_APP_SECRET,
    }
  }
}
