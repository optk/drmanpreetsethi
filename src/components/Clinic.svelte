<script>
  export let clinic;

  let color = `color: ${clinic.color};`
</script>

<div class="notification is-light my-3">
  <span class="icon-text is-medium mb-3">
    <span class="icon">
      <i class="fas fa-map-marker-alt" style={color} />
    </span>
    <span class="title is-5">{clinic.name}</span>
  </span>

    {#if clinic.address}
    <p class="subtitle is-6"><em>{clinic.address}</em></p>
    {/if}

    {#each clinic.avail as avail}
      <p class="is-6">{avail}</p>
    {/each}
</div>
