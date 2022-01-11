<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;

  import NavBar from '../../components/NavBar.svelte';

  if (frontmatter.date) {
    var parsed = Date.parse(frontmatter.date);
    var rawDate = new Date(parsed);
    var date = rawDate.toLocaleDateString("en-GB");
  };

  if (frontmatter.image) {
    var imagePath = `/images/${frontmatter.image}.jpg`
  }
</script>

<svelte:head>
  <title>{frontmatter.title}</title>
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="column is-full-mobile is-half">
  <div class="block mx-6 mt-5 has-text-centered">
      <NavBar />
  </div>
  <section class="section">
    <div class="block">
      <h1 class="title is-2">{frontmatter.title}</h1>
      {#if frontmatter.date} <p class="subtitle is-6">{date}</p> {/if}
    </div>
    <div class="content">

      {#if frontmatter.image}
      <figure class="image my-5">
        <img src={imagePath} alt={frontmatter.image} style="width:100%">
      </figure>
      {/if}

      {#if html}
        {@html html}
      {:else}
        <h1>Oops!! Markdown not found!</h1>
      {/if}
    </div>

    <hr>

    <div class="block mt-6">
      <div class="notification is-link is-light">
        <p class="title is-5">About the Author</p>
        <p>
          Dr Manpreet Sethi is a practicing paediatric endocrinologist and has worked at some of India's top medical instituions, 
          including Sir Ganaga Ram Hospital New Delhi and Nair Hospital Mumbai.
        </p>
        <br>
        <p>
          She has over 21 years of experience as a paediatrician, and 7 years experience as an endocrinologist.
        </p>
        <br>
        <a href="/">She consults at multiple locations in and around New Delhi.</a>
      </div>
    </div>

    <div class="block mt-6 has-text-centered">
      <a class="button is-danger" href="/archive/">Back</a>
    </div>
  </section>
</div>
