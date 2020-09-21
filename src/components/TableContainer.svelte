  
<script>
    import Table from "./Table.svelte";
    import Customers from "./Customers.svelte";

    export let data;
    export let filterSettings;

    console.log(data);

    const columns = [
        {
            key: "name",
            title: "NAME",
            value: v => v.name,
            renderValue: v => v.name,
            sortable: true
        },
        {
            key: "gender",
            title: "GENDER",
            value: v => v.gender,
            renderValue: v => v.gender,
            sortable: true,
            filterOptions: ["Male", "Female"] // provide array
        }
    ];

    function handleClickCell() {
        console.log("hell");
    }

</script>

<Table columns="{columns}" rows="{data}" bind:filterSettings></Table>