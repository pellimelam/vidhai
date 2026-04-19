export function loadUtilities() {

const section = `

<section class="section">
  <div class="container">

    <div class="section-title">Utilities</div>

    <div class="grid">

      <a class="card" href="https://registry.vidhwaan.com">
        <div class="card-title">Artist Directory</div>
        <div class="card-desc">
          Global network of artists and performers
        </div>
      </a>

      <a class="card" href="https://chat.whatsapp.com/FJA8b0K4f67GXKMXjWzVOd">
        <div class="card-title">Community Network</div>
        <div class="card-desc">
          Global collaboration platform
        </div>
      </a>

      <a class="card" href="https://radio.vidhwaan.com">
        <div class="card-title">Music Archive</div>
        <div class="card-desc">
          Preserving traditional music digitally
        </div>
      </a>

      <a class="card" href="https://apps.vidhwaan.com">
        <div class="card-title">Developer Platform</div>
        <div class="card-desc">
          APIs and tools for developers
        </div>
      </a>

    </div>

  </div>
</section>

`

document.getElementById("utilities").innerHTML = section

}
