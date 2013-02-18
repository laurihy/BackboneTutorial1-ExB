var PoemView = Backbone.View.extend({
  render: function() {
    this.$el.html(Handlebars.templates.poem());
    return this;
  }
});

$(function() {
  var poemView = new PoemView();
  $("body").append(poemView.render().el);  
});