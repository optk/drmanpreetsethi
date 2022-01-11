<script>
  import style from '../../assets/style.css';
  export let templateHtml, settings;
</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/35604eca00.js" crossorigin="anonymous"></script>

  <style>
    :root{
      border-top: 0.75rem solid hsl(348, 100%, 61%);
    }
  </style>


<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="apple-mobile-web-app-title" content="Dr Manpreet Sethi">
<meta name="application-name" content="Dr Manpreet Sethi">
<meta name="msapplication-TileColor" content="#f14668">
<meta name="theme-color" content="#f14668">
</svelte:head>

<div class="columns m-3 is-centered">
  {@html templateHtml}
</div>
<div class="footer">
  <section class="section">
    <div class="columns">
      <div class="column has-text-centered">
        © Dr Manpreet Sethi 2022
        <br>
        <span class="icon-text is-large mb-3 mt-3">
          <span class="icon has-text-danger">
            <i class="fas fa-phone" />
          </span>
          <span><b>Phone:</b> <a  href="tel:+919810076959/">+919810076959</a></span>
        </span>
        
        <br />
        
        <span class="icon-text is-large mb-3">
          <span class="icon has-text-danger">
            <i class="fas fa-envelope" />
          </span>
          <span
            ><b>Email:</b>
            <a  href="mailto:drmanpreetsethi@gmail.com/">drmanpreetsethi@gmail.com</a
            ></span>
        </span>
        
        <br />
        
        <span class="icon-text is-large">
          <span class="icon has-text-danger">
            <i class="fas fa-star" />
          </span>
          <a href="https://g.page/r/CQf562VeRteREAg/review"> Please leave a review on Google </a>
        </span>
        
      </div>
    </div>
  </section>
</div>
