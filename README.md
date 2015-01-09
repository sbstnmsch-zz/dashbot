
# dashbot

Simple dashboard - don't use it, cause it's not ready at all.

![](examples/screenshot.png "Looks like")

## Run it
```
$ bower install
$ npm install
$ copy examples/layout.json ./layout.json
$ grunt serve
```
Point your brower to http://localhost:9501

## Serving it
To serve the dashboard with nginx or another webserver edit the layout.json to serve your needs
and point your browser to http://localhost:9501/dist/templates/index.html

## Notes
For polling other than local URLs (like in the example) start up your browser with disabled security, i.e. Chrome with:

```
$ open -a Google\ Chrome --args --disable-web-security
```
