<script>
    export let navOptions;
    export let intSelected;
    export let selected;

    function changeComponent(event) {
        selected = navOptions[event.srcElement.id];
        intSelected = event.srcElement.id;
    }
</script>

<nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href=".">WALLEYE</a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        {#each navOptions as option, i}
            {#if option.page !== "Home"}
            <li class="nav-item">
                <button class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button>
            </li>
            {/if}
        {/each}
        </ul>
    </div>
</nav>

<style>
    .navbar-expand-lg {
        background-color: #4C887A;
        margin-left: 1.5%;
    }
    button {
        color: white;
        background-color:  #4C887A;
        border: none;
        font-size: 20px;
    }
    .navbar-brand {
        color: white;
        font-size: 20px;
    }
</style>