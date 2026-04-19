export function loadVidhai(){

const section = `

<!-- =========================
   VIDHAI INTRO
========================= -->
<section class="section">

<div class="container">

<div class="section-title">VIDHAI — Human + AI Execution</div>

<div class="about-content">

<p>
AI alone cannot execute real-world tasks.
Humans alone cannot match the speed and scale of AI.
</p>

<p>
<strong>VIDHAI combines both.</strong>
</p>

<p>
Give us your work, define your budget, and our system will execute it using the perfect combination of human expertise and AI intelligence.
</p>

</div>

</div>
</section>


<!-- =========================
   HOW IT WORKS
========================= -->
<section class="section" id="how">

<div class="container">

<div class="section-title">How It Works</div>

<div class="grid">

<div class="card">
<div class="card-title">1. Submit Work</div>
<div class="card-desc">Enter requirement, budget and details</div>
</div>

<div class="card">
<div class="card-title">2. AI + Human Planning</div>
<div class="card-desc">VIDHAI selects best execution method</div>
</div>

<div class="card">
<div class="card-title">3. Execution</div>
<div class="card-desc">Experts + AI complete your task</div>
</div>

<div class="card">
<div class="card-title">4. Delivery</div>
<div class="card-desc">Final output delivered within your budget</div>
</div>

</div>

</div>
</section>


<!-- =========================
   SUBMISSION FORM
========================= -->
<section class="section" id="submit">

<div class="container">

<div class="section-title">Submit Your Work</div>


<form id="vidhaiForm" class="card vidhai-form">

<input type="text" placeholder="Your Name" required />

<input type="email" placeholder="Email Address" required />

<input type="tel" placeholder="Mobile Number" required pattern="[0-9]{10,15}" />

<textarea placeholder="Describe your requirement in detail..." required></textarea>

<input type="number" placeholder="Your Budget (₹ or $)" required />

<input type="file" />

<button class="btn btn-primary" type="submit">
Submit to VIDHAI
</button>

</form>

</div>
</section>

`

document.getElementById("vidhai").innerHTML = section


// =========================
// FORM LOGIC
// =========================

const form = document.getElementById("vidhaiForm")

form.addEventListener("submit", async (e) => {

e.preventDefault()

const data = {
name: form[0].value,
email: form[1].value,
mobile: form[2].value,
requirement: form[3].value,
budget: form[4].value
}

try{

const res = await fetch("https://purple-haze-4f4f.needfullfil.workers.dev", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
})

alert("✅ Submitted successfully. VIDHAI team will contact you.")
form.reset()

}catch(err){
alert("❌ Submission failed. Try again.")
}

})

}
