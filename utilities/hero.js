export function loadHero(){

const hero = `

<section class="hero">

<img src="./icons1/logo.png" class="logo" alt="VIDHAI Logo">

<h1>VIDHAI</h1>

<p>Human + AI Execution Platform</p>

<p style="max-width:600px;margin:auto;">
Give your task. Set your budget. VIDHAI completes it.
</p>

<div class="hero-buttons">

<a class="btn btn-primary" href="#submit">
Submit Work
</a>

<a class="btn btn-outline" href="#how">
How it Works
</a>

</div>

</section>

`

document.getElementById("hero").innerHTML = hero

}
