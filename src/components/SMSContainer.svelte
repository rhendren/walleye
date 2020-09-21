<script>
    import {encode} from 'base-64';
    const fetch = require('node-fetch');

    export let message;
    export let filterSettings;
    export let customerData;

    // Need to filter using filterSettings
    console.log(filterSettings);
    customerData.forEach(async (person) => {
        await textRequest(person.phone, message);
    });

    export async function textRequest(number, message) {
        message = "Something";
        const username = 'c1d2c6ea2510';
        const password = '8a67b000295d56f8';
        const url = "https://api.callfire.com/v2/texts";
        console.log("Making request");
        console.log(number);
        console.log(message);

        await fetch(url, {
            method: 'POST',
            "headers": {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encode(username + ":" + password)
            },
            "body": JSON.stringify([{
                phoneNumber: number,
                message: message
            }])
        })
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

</script>

<p>SMS container</p>