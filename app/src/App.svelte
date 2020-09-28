<script>
  import { FirebaseApp, User } from "sveltefire";
  import Customers from './Customers.svelte';

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

  function signUp() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  function signIn() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
</script>

<main>

  <FirebaseApp {firebase}>

    <h1>💪🔥 Welcome to Walleye</h1>

    <p>We are in <strong>development</strong>; we appreciate your patience!</p>

    <User let:user let:auth>
      Howdy 😀! User
      <em>{user.uid}</em>

      <button on:click={() => auth.signOut()}>Sign Out</button>

      <div slot="signed-out">

        Email<br>
        <input type="email" bind:value={email}>
        Password<br>
        <input type="password" bind:value={password}>

        <button on:click={signUp}>
          Sign Up
        </button>
        <button on:click={signIn}>
          Sign In
        </button>
      </div>

      <hr />

      <Customers uid={user.uid} db={firebase.database()}/>

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
    color: #ff3e00;
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