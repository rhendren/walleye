<script>
    // import encode from 'base-64';
    // import {fetch} from 'node-fetch';
    // const fetch = require('node-fetch');

    export let customerNumbers;
    export let txtMessage;

    function sendText(){
        const username = 'a337590a843d';
        const password = 'e68232bac23cbb34';
        const url = "https://api.callfire.com/v2/texts";
        console.log(customerNumbers);

        customerNumbers.forEach(async (phoneNumber) => {
            console.log('...sending texts');
            console.log("Making request");
            console.log(phoneNumber);
            console.log(txtMessage);
            console.log('Basic ' + btoa(username + ":" + password));

            await fetch(url, {
                method: 'POST',
                "headers": {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                },
                "body": JSON.stringify([{
                    phoneNumber: phoneNumber,
                    message: txtMessage
                }])
            })
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                return;
            })
            .catch((error) => {
                console.log(error);
                return;
            })

        });
        console.log('texts sent');

    }
</script>

<!-- <script>
    import {encode} from 'base-64';
    const fetch = require('node-fetch');

    export let txtMessage;
    export let filterSettings;
    export let customerData;

    function requestTexts(e) {
        // Need to filter using filterSettings
        console.log(filterSettings);
        customerData.forEach(async (person) => {
            await textRequest(person.phone, txtMessage);
        });

        async function textRequest(number, txtMessage) {
            console.log("trying");
            txtMessage = "Something";
            const username = 'c1d2c6ea2510';
            const password = '8a67b000295d56f8';
            const url = "https://api.callfire.com/v2/texts";
            console.log("Making request");
            console.log(number);
            console.log(txtMessage);

            await fetch(url, {
                method: 'POST',
                "headers": {
                    'Content-Ty    34wpe': 'application/json',
                    'Authorization': 'Basic ' + encode(username + ":" + password)
                },
                "body": JSON.stringify([{
                    phoneNumber: number,
                    message: txtMessage
                }])
            })
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                return;
            })
            .catch((error) => {
                console.log(error);
                return;
            })
        }
    }

</script> -->

<button on:click|once={sendText}>Submit</button>

{#each customerNumbers as num}
    <p>{num}</p>
{/each}

<p>{txtMessage}</p>