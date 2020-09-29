<script>
    import Table from './Table.svelte';
    export let uid;
    export let db;

    let rows = [];
    let columns = ['phone'];
    var customer_ref = db.ref('users/' + uid + '/customers');

    var row_index = 0;
    customer_ref.orderByKey().on("child_added", function(data) {
        var row = [];
        row.push(data.key);
        row = row;
        for(var key in data.val()){
            if (row_index == 0){
                columns.push(key);
                columns = columns;
            }

            row.push(data.val()[key]);
            row = row;
        }
        row_index += 1;
        rows.push(row);
        rows = rows;
    });
</script>


{#if rows.length != 0}
    <Table {rows} {columns} />
{/if}