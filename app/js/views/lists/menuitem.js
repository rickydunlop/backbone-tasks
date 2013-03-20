define([
  'text!templates/lists/menuitem.html',
  'views/tasks/index',
  'collections/tasks'
],

function(template, TasksIndexView, Tasks) {
  var ListMenuItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    template: _.template(template),

    events: {
      'click': 'open'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      this.model.on('select', this.open, this);
    },

    render: function() {
      var $el = $(this.el);
      $el.html(this.template(this.model.toJSON()));
      return this;
    },

    open: function() {
      if (tasks.views.activeListMenuItem) {
        tasks.views.activeListMenuItem.$el.removeClass('active');
      }

      tasks.views.activeListMenuItem = this;
      this.$el.addClass('active');

      // Render the tasks
      if (tasks.views.tasksIndexView) {
        tasks.views.tasksIndexView.remove();
      }

      tasks.views.tasksIndexView = new TasksIndexView({
        collection: new Tasks({
          tasklist: this.model.get('id')
        }),
        model: this.model
      });
      tasks.views.app.$el.find('#tasks-container').html(tasks.views.tasksIndexView.render().el);
      tasks.routes.navigate('lists/' + this.model.get('id'));

      return false;
    }
  });

  return ListMenuItemView;
});