<script>
  import { navOptions } from  './components/navigation/Nav.svelte';
  import NavBar from './components/navigation/NavBar.svelte';
  let selected = navOptions[0];	// keep track of the selected 'page' object (default to the about component since we must have local db connection established first)
  let intSelected = 0;	// selected page index
  
  </script>
  <!-- Include Bootstrap CSS-->
  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>
  <div class="container">
    <NavBar {intSelected} {navOptions} bind:selected='{selected}'/>
    <!-- content wrapper -->
    <div class="row">
      <div class="col-sm-12">
        <div class="p-2">
          <!-- this is where our main content is placed -->
          <svelte:component this={selected.component}/>
        </div>
      </div>
    </div>
  </div>