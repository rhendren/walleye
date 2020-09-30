<script>
    const pricingOptions = [
        {price: '$75', description: 'Pay monthly, no strings attached. Give us a try! Contact us for questions about testing.'},
        {price: '$50', description: 'Love us already? Amazing! Sign up for a year and receive a HUGE discount.'}
    ]
</script>
<section>
    <h2>Affordable Pricing for All</h2>
    <div class='prices'>
        <h3>Database Management</h3>
        {#each pricingOptions as priceOption}
            <div class='row'>
                <div class='price'>{priceOption['price']}</div>
                <div class='price-description'>{priceOption['description']}</div>
            </div>
        {/each}
    </div>
    <div class='text-price'>
        <h3>Per Text</h3>
        <div class='text-price-dollar'>10¢</div>
        <div class='text-price-value'>That's it! Sending 100 text messages will only cost you $10. Two fancy coffees.</div>
    </div>
</section>

<style>
    .prices {
        float: left;
        width: 65%;
    }
    .text-price {
        float: left;
        width: 30%;
    }
    .text-price-dollar {
        float: left;
        text-align: center;
        margin-top: 15%;
        font-size: 5vh;
        width: 100%;
        margin-bottom: 5%;
        color:#4C887A;
    }
    .text-price-value {
        float: left;
        text-align: left;
        font-size: 2vh;
        width: 100%;
        margin: 5%;
    }
    .price {
        float: left;
        width: 20%;
        margin: 2%;
        padding: 2%;
        text-align: center;
        font-size: 5vh;
        color: #4C887A;
    }
    .price-description {
        float: left;
        width: 50%;
        margin-top: 5%;
        padding-left: 2%;
        text-align: left;
        font-size: 2vh;
    }

    h2 {
        color: #04483f;
        text-align: center;
        margin: 5%;
    }
    h3 {
        color: #04483f;
        text-align: left;
        margin: 2%;
    }
</style>