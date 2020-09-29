<script>
    import SMS from './SMS.svelte';
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

        if (Object.keys(filterSelections) == 0) {
            return true;
        }
        let truths = [];
        for(var f in filterSelections){
            if (filterSelections[f]){
                for(var ci in columns){
                    if(columns[ci] == f){
                        if (typeof r[ci] === "string"){
                            truths.push(r[ci].includes(filterSelections[f]));
                            truths = truths;
                        }
                    }
                }
            }
        }
        if (truths.length == 0) {
            return true
        } else {
            console.log(truths);
            console.log(truths.every(t => t == true));
            return truths.every(t => t == true);
        }
    });
    $: customerNumbers = availRows.map((entry) => entry[0]);
    let txtMessage;
    $: characterCount = txtMessage ? txtMessage.length : 0

    function estimateCost(customerNumbers) {
        let cost = 0
        for(var num in customerNumbers){
            cost += 0.50;
        }
        cost = cost.toFixed(2);
        return cost;
    }

</script>

<div class='section'>
    <h2 align='left'>Your Options</h2>
    <div class='filter_container'>
        {#each columns as col}
            {#if col !== 'phone'}
                <div class='filter'>
                    <h3>{col.replace(/^\w/, (c) => c.toUpperCase())}</h3>
                    <select name="{col}" id="{col}" bind:value="{filterSelections[col]}">
                        <option hidden disabled selected value> -- Select an Option -- </option>
                        {#each uniqueVals(col) as op}
                            <option value="{op}">{op}</option>
                        {/each}
                    </select>
                </div>
            {/if}
        {/each}
    </div>
</div>

<div class='section'>
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
</div>

<div class='section'>
    <h2 align='left'>Your Message</h2>

    <input type="text" id="txtMessage" name="txtMessage" maxlength="160" bind:value="{txtMessage}">
    <p>Max length is: {characterCount} / 160</p>
</div>

<div class='section'>
    <h2 align='left'>Are You Ready?</h2>
    Estimated cost: ${estimateCost(customerNumbers)}
    <br>
    <br>

    <SMS {customerNumbers} {txtMessage} />
</div>

<style>
    .filter_container {
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
    }
    .filter {
        flex-basis: 25%;
        padding-left: 8px;
        padding-right: 8px;
   }
   .section {
        border-top-style: solid;
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 30px;
   }
   th, td {
       padding: 10px;
       text-align: left;
   }
   input {
        width: 75%;
        height: 100px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
</style>