var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '952183',
    key: '6ac329b2e968044fac7f',
    secret: '61cd47b110cdb59496aa',
    cluster: 'us2',
    encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
});