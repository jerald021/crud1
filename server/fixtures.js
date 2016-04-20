if (Posts.find().count() === 0) {
    for (var i = 0; i < 5; i++) {
        Posts.insert({
            title: 'titulo #' + i,
            url: 'http://google.com/?q=test-' + i
        });
    }
}