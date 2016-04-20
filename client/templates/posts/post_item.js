Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    }
});

Template.postItem.events({
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});