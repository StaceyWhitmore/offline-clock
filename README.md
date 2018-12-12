Offline Clock App
=================
My starter code for a basic Clock that returns the date and time
once a second. I uses a cache manifest file `clock.appcache`
which allows it to be used Offline. All of the files in this manifest
work together to make an offline web app. This app will be downloaded an made
available locally by all browsers supporting this HTML 5 feature.

I will later integrate the code from my analog clock app, which uses sine and
cosine functions to plot the x2 and y2 coordinates of the plotted lines that
make up the hands.

* If this app is to be implemented on a server, the MIME type `text/cache-manifest`
will need to be added for the `.appcache` file extension. This will ensure that
that the manifest file is sent using the correct type. An easy way to do this is
to add the following line to a `.htaccess` file in the same folder as the files
to be made available:
`AddType text/cache-manifest .appcache`
