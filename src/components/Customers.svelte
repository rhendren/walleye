<script>
    import Table from "./Table.svelte";

    export let c_rows;

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

</script>

<p></p>

<Table columns="{columns}" rows="{c_rows}"></Table>