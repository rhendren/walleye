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

        customerNumbers.forEach(async (phoneNumber) => {

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
    }
</script>

<button on:click|once={sendText}>Submit</button>