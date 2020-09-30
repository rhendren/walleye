<script>
    import About from '../components/home/About.svelte';
    import Reviews from '../components/home/Reviews.svelte';
    import Pricing from '../components/home/Pricing.svelte';
    import Intro from '../components/home/Intro.svelte';
</script>
<body>
<div class="hero">
    <img height="800" width="1100" class="hero" alt="Phone" src="https://cdn.pixabay.com/photo/2017/08/03/12/22/people-2575936_1280.jpg">
    <div class="hero-text">
        <h1>Walleye</h1>
        <h2 class="hero">SMS marketing that isn't carp.</h2>
    </div>
</div>

<About />
<Reviews />
<Pricing />
<Intro />

</body>

<style>
 /* Container holding the image and the text */
.hero {
  position: relative;
  text-align: center;
  color: white;
}
.hero-text h1{
    position: absolute;
    top: 15%;
    left: 30%;
    font-family: brush script mt;
    font-size: 200px;
    color: #04483f;
    transform: translate(-50%, -50%);
}
.hero-text h2{
    color: #ffffff;
    left: 60%;
    top: 50%;
    font-size: 50px;
    font-family: lucida bright;
    transform: translate(-40%, -150%);
}
body {
    padding-bottom: 35%;
}
</style>