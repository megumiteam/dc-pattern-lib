/**
 * Module for js that fires on all pages.
 */

module.exports = function() {

  console.log('We have liftoff.');

  function patternClone() {
    $('.pattern--item').each(function( index ) {

      var $this = $($this);
      var $parent = $(this).parent();
      var $children = $(this).children()
      var $clone = $($children).clone();

      $clone.appendTo($parent).wrapAll("<pre><code class='language-markup'><script type='prism-html-markup'></script></code></pre>");

    });
  }

  // patternClone();

};
