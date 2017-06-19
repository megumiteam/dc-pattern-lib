/**
 * Module for js that fires on all pages.
 */

module.exports = function() {

  console.log('We have liftoff.');

  function clonePattern() {
    function escapeHtml(text) {
      var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };

      return text.replace(/[&<>"']/g, function(m) {
        return map[m];
      });
    }

    var codeWrapOpen = '<div class="pattern__code-example"><pre><code class="language-markup">';
    var codeWrapClose = '</code></pre></div>';

    $('.pattern--item').each(function(index) {
      var $this = $(this);
      var content = codeWrapOpen;
      content += escapeHtml($this.html());
      content += codeWrapClose;
      $this.append(content);
    });
  }

  clonePattern();

};
