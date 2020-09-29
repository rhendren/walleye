<script>
  import { FirebaseApp, User } from "sveltefire";
  import Customers from './Customers.svelte';
  import Form from './Form.svelte';

  import firebase from "firebase/app";
  import "firebase/database";
  import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyD3JMcNw3DABki851hQVS1khO-cxffuxpA",
    authDomain: "walleye-290115.firebaseapp.com",
    databaseURL: "https://walleye-290115.firebaseio.com",
    projectId: "walleye-290115",
    storageBucket: "walleye-290115.appspot.com",
    messagingSenderId: "297052177074",
    appId: "1:297052177074:web:9301a3eec7903d7dfb3fab",
    measurementId: "G-PB9BS3B96G"
  };

  firebase.initializeApp(firebaseConfig);

  let email = '';
  let password = '';
  let db = firebase.database();

  function signUp() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    var user = firebase.auth().currentUser;
    console.log(user);
    console.log('signed up');
  }

  function signIn() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       const user_ref = db.ref('users/' + user.uid);
//       const d = new Date();
//       const t = d.getTime();
//       let exists = false;
//       user_ref.on('child_added', function(s) {
//           console.log(s);
//           if (s.exists()) {
//               exists = true;
//               exists = exists;
//               console.log('should be true');
//               console.log(exists);
//           }
//       });
//       console.log('finally');
//       console.log(exists);
//       if (exists == false) {
//         console.log(exists == false);
//           user_ref.set({
//             signed_up_at: t
//           });
//       }
//     } else {
      
//     }
// });
</script>

<main>

  <FirebaseApp {firebase}>

    <h1>🐟 Walleye SMS Marketing 📱</h1>

    <User let:user let:auth>
      Welcome to the <em>Walleye</em> family 😀!
      <br>
      <br>

      <button on:click={() => auth.signOut()}>Sign Out</button>

      <div slot="signed-out">
        We are in <em>development</em>; we appreciate your patience!
        <br>
        <br>
        Email
        <input type="email" bind:value={email}>
        <br>
        Password
        <input type="password" bind:value={password}>
        <br>

        <button on:click={signUp}>
          Sign Up
        </button>
        <button on:click={signIn}>
          Sign In
        </button>
      </div>

      User: {user.uid}



      <hr />

      <Form uid={user.uid} {db}/>
      <Customers uid={user.uid} {db}/>

    </User>
  </FirebaseApp>

</main>


<!-- Styles -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1,
  em {
    color: #29e094;
  }

  hr {
    height: 1px;
    border: none;
    background: rgb(195, 195, 195);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>