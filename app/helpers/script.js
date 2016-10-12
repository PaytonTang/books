import Ember from 'ember';

export function script(params/*, hash*/) {
  var js = params[0];
  console.log(js);
  if (!Ember.isEmpty(js)) {
    var escaped = Ember.Handlebars.Utils.escapeExpression(js);

    return Ember.String.htmlSafe('<script src=' + escaped + '></script>');
  } else {
    return '';
  }
}

export default Ember.Helper.helper(script);
