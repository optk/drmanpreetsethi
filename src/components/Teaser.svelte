<script>
  export let page;
  export let helpers;
  export let type;
</script>

<li class="my-2">
  {#if type === 'blog'}
    <a href={helpers.permalinks.blog({ slug: page.slug })}>{page.frontmatter.title}</a>
  {:else}
    <a href={helpers.permalinks.faq({ slug: page.slug })}>{page.frontmatter.title}</a>
  {/if}
</li>
