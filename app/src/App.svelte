<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

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
  var database = firebase.database()

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

    <h1> 🐟 Walleye</h1>
    <p>
      <strong>Easy</strong> SMS campaigns
    </p>

    <User let:user let:auth>
      Howdy 😀! User
      <em>{user.email}</em>

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

      <!-- Create new Google form when someone signs up & add Google script f(x)'s-->

      <!-- 3. 📜 Get a Firestore document owned by a user -->
      <h1>{database.ref('/{user.uid}/2624243872')}</h1>

      <Doc path={`${user.uid}`} let:data={post} let:ref={postRef} log>

        <h2>{post.title}</h2>

        <p>
          Document
          created at <em>{new Date(post.createdAt).toLocaleString()}</em>
        </p>

        <span slot="loading">Loading post...</span>
        <span slot="fallback">
          <button
            on:click={() => postRef.set({
                title: '📜 I like Svelte',
                createdAt: Date.now()
              })}>
            Create Document
          </button>
        </span>

        <!-- 4. 💬 Get all the comments in its subcollection -->

        <h3>Comments</h3>
        <Collection
          path={postRef.collection('comments')}
          query={ref => ref.orderBy('createdAt')}
          let:data={comments}
          let:ref={commentsRef}
          log>

          {#if !comments.length}
              No comments yet...
          {/if}

          {#each comments as comment}
            <p>
              <!-- ID: <em>{comment.ref.id}</em> -->
            </p>
            <p>
              {comment.text}
              <button on:click={() => comment.ref.delete()}>Delete</button>
            </p>
          {/each}


          <button
            on:click={() => commentsRef.add({
                text: '💬 Me too!',
                createdAt: Date.now()
              })}>
            Add Comment
          </button>

          <span slot="loading">Loading comments...</span>

        </Collection>
      </Doc>
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