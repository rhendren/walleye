<script>
    export let message;
</script>

<style>
    input,
    .column {
      padding-left: 0;
    }
  </style>

<div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <input
            type="text"
            class="input"
            bind:value={message}
            placeholder="Insert SMS message" />
        </div>
      </div>
    </div>
  </div>