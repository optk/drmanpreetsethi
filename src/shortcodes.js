/**
 * Shortcodes are a useful way of making content that lives in a CMS or in markdown files dynamic.
 *
 * By default, Elder.js ships with a {{svelteComponent name="" props="" options="" /}} shortcode.
 * Try adding a clock to one of your markdown files with:
 * `{{svelteComponent name="Clock" options='{"preload":true}' props='{"foo": true}' /}}`
 *
 */

module.exports = [
  {
    /**
     * This is a simple shortcode that will wrap content with a magical box.
     * Try adding `{{box class="yellow"}}Your content here{{/box}}` in one of your markdown files.
     * */
    shortcode: 'box',
    run: async ({ content, props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="box ${props.class}">${content}</div>`,

        // This is added to the page's css through the cssStack. You probably want an external css file for most usecases.
        css: '.box{border:1px solid red; padding: 1rem; margin: 1rem 0;} .box.yellow {background: lightyellow;}',

        // Javascript that is added to the footer via the customJsStack.
        js: '<script>var test = true;</script>',

        // Arbitrary HTML that is added to the head via the headStack
        head: '<meta test="true"/>',
      };
    },
  },

  /**
   *
   * A common issue with static content is that someone will need to go back and update that content.
   * * Imagine you have your content in a CMS such as WordPress, Contentful, Prismic, or even a markdown file.
   * * Within this content some "decision maker" has decided that you need to display the number of pages on your site... and it always has to be accurate.
   *
   * Usually pulling this off would require you to put a placeholder like {{numberOfPages /}} and then preprocessing the content, counting the number of pages, and then rendering it.
   *
   * With Elder.js shortcodes, all the preprocessing is done for you, you just need to decide what you want to replace it with.
   *
   * Below is code for the usecase above.
   *
   * It is important to note, even if you wanted {{latestInstagramPhoto /}} to be shown, the same approach would apply. Just use something like
   * `node-fetch` to hit Instagram's API and specify what html, css, js you'd like to add to the page.
   *
   * */

  {
    shortcode: 'numberOfPages',
    run: async ({ allRequests }) => {
      // allRequests represents 'request' objects for all of the pages of our site, if we know the length of that we know the length of our site.
      return {
        html: allRequests.length,
        // other values can be omitted.
      };
    },
  },
  {
    shortcode: 'map',
    run: async ({ }) => {
      return {
        css: `#map {
          top: 0;
          bottom: 0;
          width: 100%;
          height:480px;

          .mapboxgl-popup {
            max-width: 200px;
            }
        }`,
        js: `<script>
        mapboxgl.accessToken =
          'pk.eyJ1IjoieW9kYWFyanVuIiwiYSI6ImNreHdzY3YybjRpZjcycHF3Y2RwN3Bhc3YifQ.JTNmkhzIEehf4D8bhTj2SQ';
    
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [77.20029011923488, 28.574871524337443],
          zoom: 9,
        });

        // Add popups
        const clinic_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Clinic'
          );

        const vaishali_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Max Hospotal Vaishali'
          );

        const noida_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Max Hospital Noida'
          );

        const patparganj_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Max Hospital Patparganj'
          );

        const nehru_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Apollo Cradle Nehru Enclave'
          );

        const gurgaon_popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Galleria Towers Gurgaon'
          );
  
    
        // Create a default Marker and add it to the map.
        const clinic = new mapboxgl.Marker({ color: '#ff5252'})
        .setLngLat([77.307360, 28.654737])
        .setPopup(clinic_popup)
        .addTo(map);

        const vaishali = new mapboxgl.Marker({ color: '#0f9d58'})
        .setLngLat([77.3330108246726, 28.63478909805867])
        .setPopup(vaishali_popup)
        .addTo(map);

        const noida = new mapboxgl.Marker({ color: '#0289d1'})
        .setLngLat([77.32260907723595, 28.577573606426796])
        .setPopup(noida_popup)
        .addTo(map);

        const patparganj = new mapboxgl.Marker({ color: '#fbc02d'})
        .setLngLat([77.30907769954123, 28.63306981727187])
        .setPopup(patparganj_popup)
        .addTo(map);

        const nehru = new mapboxgl.Marker({ color: '#3948ab'})
        .setLngLat([77.2481003998104, 28.544830200840778])
        .setPopup(nehru_popup)
        .addTo(map);

        const gurgaon = new mapboxgl.Marker({ color: '#f57c00'})
        .setLngLat([77.081350253782, 28.467486556969188])
        .setPopup(gurgaon_popup)
        .addTo(map);

      </script>`
      }
    }
  }
];
