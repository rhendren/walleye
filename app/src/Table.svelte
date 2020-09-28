<script>
    import {sendText} from './sms.js';
    export let rows;
    export let columns;

    function uniqueVals(c){
        if (c == 'phone') {
            return [];
        }

        let values = [];
        for(var ci in columns){
            if (columns[ci] == c) {
                for(var ri in rows){
                    var choices = rows[ri][ci].split(',').map(s => s.trim());
                    values.push(...choices);
                    values = values;
                }
            }
        }
        values = [...new Set(values)];
        return values;
    }

    let filterSelections = {};
    $: availRows = rows.filter(r => {
        for(var f in filterSelections){
            if (filterSelections[f]){
                for(var ci in columns){
                    if(columns[ci] == f){
                        if (typeof r[ci] == "string"){
                            return r[ci].includes(filterSelections[f]);
                        }
                    }
                }
            }
        }
    });

    let txtMessage;

</script>

<h2 align='left'>Your Options</h2>

{#each columns as col}
    {#if col !== 'phone'}
        <select name="{col}" id="{col}" bind:value="{filterSelections[col]}">
            {#each uniqueVals(col) as op}
                <option value="{op}">{op}</option>
            {/each}
        </select>
    {/if}
{/each}

<h2 align='left'>Your Customers</h2>

<table>
    {#each columns as col}
        <th>
            {col}
        </th>
    {/each}
    {#each availRows as row}
        <tr>
            {#each row as cells}
                <td>
                    {cells}
                </td>
            {/each}
        </tr>
    {/each}
</table>

<h2 align='left'>Your Message</h2>

<input type='text' bind:value="{txtMessage}">

<h2 align='left'>Are You Ready?</h2>

<button on:click|once={sendText}>Submit</button>