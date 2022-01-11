<script>
  import Clinic from '../../components/Clinic.svelte';
  import HeroBlock from '../../components/HeroBlock.svelte';
  export let data, helpers, settings;
</script>

<svelte:head>
  <title>Dr Manpreet Sethi</title>
  <meta name="description" content="Dr Manpreet Sethi - Paediatric Endocrinologist Based in New Delhi." />
  <link href="{settings.origin}/" rel="canonical" />

  <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>

  <style>
    
  </style>
</svelte:head>

<div class="column is-full-mobile is-half">
  <section class="section is-small has-text-centered">
    <HeroBlock {data} />
  </section>

  <hr />

  <section class="section is-small">
    <h3 class="title is-4">Availability</h3>

    <figure class="image mb-6"><div id="map"></div></figure>
    
    {@html helpers.shortcode({name: 'map'})}

    {#each data.clinics as clinic}
      <div class="block">
        <Clinic {clinic} />
      </div>
    {/each}
  </section>

  <hr />

  <section class="section">
    <h3 class="title is-4">About Me</h3>

    <div class="content">
      Dr Manpreet Sethi is a Paediatric Endocrinologist who deals with all types of hormonal disorders in children.
      These include the following:
      <ul>
        <li>Short Stature</li>
        <li>Early Puberty</li>
        <li>Late Puberty</li>
        <li>Congenital Hypothyroidism</li>
        <li>Acquired Hypothyroidism</li>
        <li>Rickets</li>
        <li>Disorders of Calcium, Phosphorus and Vitamin D Metabolism and of the Parathyroid Gland</li>
        <li>Disorders of the Adrenal Gland: Adrenal Insufficiency and Adrenal Excess (Cushing Syndrome)</li>
        <li>Congenital Adrenal Hyperplasia</li>
        <li>Disorders of Sexual Development:</li>
        <li>Ambiguous Genitalia</li>
        <li>Menstrual Disorders in Adolescent Girls</li>
        <li>Hirsutism</li>
        <li>Gynaecomastia or Male Breast</li>
        <li>Childhood Obesity</li>
      </ul>
    </div>
  </section>
</div>
