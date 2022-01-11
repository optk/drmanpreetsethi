<script>
  export let data, request, helpers, settings;

  import NavBar from '../../components/NavBar.svelte';
  import Teaser from '../../components/Teaser.svelte';
</script>

<svelte:head>
  <title>Blog Archive</title>
  <meta
    name="description"
    content="Blog Posts and Frequently Asked Questions, written and answered by Dr Manpreet Sethi" />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="column is-full-mobile is-half">
  <div class="block mx-6 mt-5 has-text-centered">
    <NavBar />
  </div>
  <section class="section">
    <div class="block">
      <h1 class="title">Blog Archive</h1>
    </div>
    <div class="block">
      <h2 class="title is-4">Blog Posts</h2>
      <ul>
        {#each data.markdown.blog as blog}
          <Teaser page={blog} {helpers} type='blog' />
        {/each}
      </ul>
    </div>
    <div class="block mt-6">
      <h2 class="title is-4">Frequently Asked Questions</h2>
      <ul>
        {#each data.markdown.faq as faq}
          <Teaser page={faq} {helpers} type="faq" />
        {/each}
      </ul>
    </div>
  </section>
</div>
