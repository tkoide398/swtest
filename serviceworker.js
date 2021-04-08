self.addEventListener('fetch', function (event) {
    event.respondWith(
      new Response('SW working')
    );
});

self.addEventListener('push', function (event) {
    console.log('Received a push message', event);
    var title = "Push message received";
    var body = "This is body";

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: '',
            tag: 'push-notification-tag'
        })
    );
});
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    clients.openWindow("/");
}, false);
