<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;

  import NavBar from '../../components/NavBar.svelte';

  if (frontmatter.date) {
    var parsed = Date.parse(frontmatter.date);
    var rawDate = new Date(parsed);
    var date = rawDate.toLocaleDateString("en-GB");
  };
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

      {#if html}
        {@html html}
      {:else}
        <h1>Oops!! Markdown not found!</h1>
      {/if}
    </div>
    <div class="block mt-6 has-text-centered">
      <a class="button is-danger" href="/archive/">Back</a>
    </div>
  </section>
</div>
