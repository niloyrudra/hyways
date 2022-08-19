import 'dotenv/config';

export default {
  "expo": {
    "name": "hyways",
    "slug": "hyways",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo/logo.png",
    "userInterfaceStyle": "light",
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
      "supportsTablet": true
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
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    }
  }
}
