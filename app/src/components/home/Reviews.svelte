<script>
    import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
  } from 'sveltestrap';

  const items = [{
        name: "Jordan Laster",
        review: "I can schedule my texts for the month and be done with it in minutes. After paying hundreds for databases and text messaging before, this is godsend."
  }];
  let activeIndex = 0;
</script>

<section>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        </ol>

        <Carousel {items} bind:activeIndex>
            <CarouselIndicators bind:activeIndex {items} />
            <div class="carousel-inner">
                {#each items as item, index}
                    <CarouselItem bind:activeIndex itemIndex={index}>
                        <h4>" {item['review']} "</h4>
                        <br />
                        <h5>~ {item['name']}</h5>
                    </CarouselItem>
                {/each}
            </div>

            <CarouselControl direction="prev" bind:activeIndex {items} />
            <CarouselControl direction="next" bind:activeIndex {items} />
        </Carousel>
      </div>
</section>

<style>
.carousel-inner {
    background-color: #4C887A;
    height: 200px;
    padding: 3%;
    margin: 10px;
    text-align: center;
}
h4, h5 {
    color: #ffffff;
}
</style>