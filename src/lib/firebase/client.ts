import { configDotenv } from "dotenv";
import { initializeApp, getApps, getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";

configDotenv();

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (getApps().length !== 0) {
	deleteApp(getApp());
}
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
