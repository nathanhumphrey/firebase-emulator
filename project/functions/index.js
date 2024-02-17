/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest, onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// /**
//  * Simple HTTP function that returns the "?text" query parameter in the response text.
//  */
// exports.simpleHttp = onRequest((request, response) => {
//     response.send(`text: ${request.query.text}`);
// });

// /**
//  * Simple callable function that adds two numbers.
//  */
// exports.simpleCallable = onCall((data, ctx) => {
//     // This function implements addition (a + b = c)
//     const sum = data.a + data.b;
//     return {
//         c: sum,
//     };
// });

// /**
//  * Firestore-triggered function which uppercases a string field of a document.
//  */
// exports.firestoreUppercase = functions.firestore
//     .document("/lowercase/{doc}")
//     .onCreate(async (doc, ctx) => {
//         const docId = doc.id;

//         const docData = doc.data();
//         const lowercase = docData.text;

//         const firestore = admin.firestore();
//         await firestore.collection("uppercase").doc(docId).set({
//             text: lowercase.toUpperCase(),
//         });
//     });

// /**
//  * Auth-triggered function which writes a user document to Firestore.
//  */
// exports.userSaver = functions.auth.user().onCreate(async (user, ctx) => {
//     const firestore = admin.firestore();

//     // Make a document in the user's collection with everything we know about the user
//     const userId = user.uid;
//     const userRef = firestore.collection("users").doc(userId);
//     await userRef.set(user.toJSON());
// });
