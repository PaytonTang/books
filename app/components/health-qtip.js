import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement() {

    var $tipContent = $(this.findElementInParentElement(this.elementId)).find('.tip-content');

    $tipContent.qtip({
      content: {
        text: function () {
          return $(this).next("div").html();
        },
        title: {
          text: $tipContent.text(),
          button: true
        }
      },
      position: {
        my: 'left center',  // Position tooltip's top left...
        at: 'right center', // at the right center of invoker element
        viewport: $(window),
        adjust: {
          method: 'shift',
          resize: true,
        }
      },
      show: {
        event: 'click', // Show it on click...
        solo: true, // ...and hide all other tooltips
        effect: function () {
          $(this).fadeIn();
        }
      },
      hide: {
        event: 'unfocus',
        effect: function () {
          $(this).fadeOut();
        }
      },
      style: {
        classes: "qtip-jtools lucy",
        tip: {
          corner: "left center",
          mimic: "left center",
          offset: 0,
          width: 25,
          height: 20
        }
      }
    });
  }
});
