define([
  'text!templates/app.html',
  'views/lists/add',
  'views/lists/edit'
],

function(template, AddListView, EditListView) {
  var AppView = Backbone.View.extend({
    id: 'main',
    tagName: 'div',
    className: 'container-fluid',
    el: '#todo-app',
    template: _.template(template),

    events: {
      'click #add-list-button': 'addList',
      'click #edit-list-button': 'editList',
      'click #delete-list-button': 'deleteList',
      'click .clear-complete': 'clearComplete'
    },

    initialize: function() {
    },

    listForm: function(form) {
      this.$el.find('#list-editor').html(form.render().el).show();
      form.$el.find('input:first').focus();

      return false;
    },

    addList: function() {
      return this.listForm(new AddListView({ model: new tasks.collections.lists.model({ title: '' }) }));
    },

    editList: function() {
      return this.listForm(new EditListView({ model: tasks.views.activeListMenuItem.model }));
    },

    deleteList: function() {
      if (confirm('Are you sure you want to delete that list?')) {
        tasks.views.activeListMenuItem.model.destroy();
      }
      return false;
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    clearComplete: function() {
      var list = tasks.views.activeListMenuItem.model;
      tasks.collections.tasks.clear(list.get('id'), { success: function() {}});
      return false;
    }

  });

  return AppView;
});