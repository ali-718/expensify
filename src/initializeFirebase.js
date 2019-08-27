import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCObDgmhAtgrZjPT0K5B8nKrd1RyyOAtEo",
  authDomain: "sample-3b732.firebaseapp.com",
  databaseURL: "https://sample-3b732.firebaseio.com",
  projectId: "sample-3b732",
  storageBucket: "",
  messagingSenderId: "1070931002696",
  appId: "1:1070931002696:web:a23bfdcd24d1562d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const databse = firebase.database();

// databse.ref().on(
//   "value",
//   snapshot => {
//     const value = snapshot.val();
//     console.log(value);
//   },
//   e => {
//     console.log("Error while fetching data ", e);
//   }
// );

// const notes = [
//   {
//     id: 12,
//     name: "first note",
//     body: "My first note"
//   },
//   {
//     id: 18782,
//     name: "Another note",
//     body: "My Another note"
//   }
// ];

// databse.ref("notes").on("child_moved", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// databse.ref("notes").on("value", snapshot => {
//   // console.log(snapshot.val());
//   const notesArray = [];

//   snapshot.forEach(childSnapshot => {
//     notesArray.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(notesArray);
// });

// databse.ref("notes").push({
//   name: "Morning Work",
//   body: "Go for Running",
//   todo: {
//     first: "Wear your running clothes",
//     second: "tie your shoes",
//     third: "now run for your life"
//   }
// });

// databse.ref("notes/-LlIl5AaDN46VGUJVKaQ").update({
//   "todo/second": "pack your luggage",
//   "todo/third": "get out of the house"
// });

// setTimeout(() => {
//   databse.ref().update({
//     age: 25
//   });
// }, 4000);

// setTimeout(() => {
//   databse.ref().off();
// }, 8000);

// setTimeout(() => {
//   databse.ref().update({
//     age: 30
//   });
// }, 12000);

// databse
//   .ref("location")
//   .once("value")
//   .then(snapshot => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch(e => console.log(e));

// databse
//   .ref()
//   .set({
//     name: "ali haider",
//     age: 20,
//     job: "software developer",
//     married: false,
//     location: {
//       city: "karachi",
//       country: "Pakistan"
//     },
//     skills: [
//       "React",
//       "reactnative",
//       "nodejs",
//       "sass",
//       "less",
//       "laravel",
//       "docker"
//     ]
//   })
//   .then(() => {
//     console.log("data saved successfully");
//   })
//   .catch(e => console.log("this is failed", e));

// databse.ref().update({
//   job: "manager",
//   "location/city": "lahore"
// });

// databse.ref().update({
//   name: "Jason X",
//   age: 26,
//   job: "MERN stack developer",
//   married: null
// });

// databse.ref().set("this is my data");

// databse.ref("age").set(21);
// databse.ref("location/city").set("Islamabad");

// databse.ref("physique").set({
//   height: 6,
//   weight: 88
// });

// databse
//   .ref("married")
//   .remove()
//   .then(() => console.log("data removed successfully"))
//   .catch(e => console.log(`this is failed ${e}`));

// databse.ref("married").set(null);
