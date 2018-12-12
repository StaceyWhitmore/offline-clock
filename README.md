Offline Clock App
=================
This is old source code I came across for an offline clock app. Although its
methods are deprecated([see](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins)) I find it interesting for historical purposes.
Also, I plan to revamp it implementing service workers and a more attractive UI.

It includes some starter code for a basic Clock that returns the date and time
once a second. I uses a cache manifest file `clock.appcache`
which allows it to be used Offline. All of the files in this manifest
work together to make an offline web app. This app will be downloaded an made
available locally by all browsers supporting this HTML 5 feature.

I will later integrate the code from my analog clock app, which uses sine and
cosine functions to plot the x2 and y2 coordinates of the plotted lines that
make up the hands for a more interesting UI.

* When this app was to be implemented on a server, the MIME type `text/cache-manifest`
had to be added for the `.appcache` file extension to ensure that
that the manifest file is sent using the correct type. An easy way of doing this was
to add the following line to a `.htaccess` file in the same folder as the files
to be made available:
`AddType text/cache-manifest .appcache`
