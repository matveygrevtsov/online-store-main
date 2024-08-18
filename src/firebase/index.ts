import { initializeApp } from "firebase/app";
import { FirebaseOptions } from "@firebase/app-types";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref as databaseRef,
  set,
  get,
  child,
} from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBRESQuM8FCyd5UL604-FPoi2QvenQFZfY",
  authDomain: "online-shop-9418c.firebaseapp.com",
  projectId: "online-shop-9418c",
  storageBucket: "online-shop-9418c.appspot.com",
  messagingSenderId: "229832791155",
  appId: "1:229832791155:web:58ae6e5d59a3643e0e8606",
};

const firebaseApp = initializeApp(firebaseConfig);

// https://console.firebase.google.com/project/online-shop-9418c/authentication/users
export const firebaseAuth = getAuth(firebaseApp);

// https://console.firebase.google.com/project/online-shop-9418c/database/online-shop-9418c-default-rtdb/data/~2F
export const database = {
  async get<T>(path: string) {
    const databaseReference = databaseRef(getDatabase());
    const dataSnapshot = await get(child(databaseReference, path));
    if (!dataSnapshot.exists()) {
      return undefined;
    }
    return dataSnapshot.val() as T;
  },
  async set(path: string, value: unknown) {
    const database = getDatabase();
    await set(databaseRef(database, path), value);
  },
};
