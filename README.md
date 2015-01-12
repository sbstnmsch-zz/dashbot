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
Point your browser to http://localhost:9501

## Serving it
To serve the dashboard with nginx or another webserver edit the layout.json to serve your needs
and point your browser to http://your-server.tld/dist/templates/index.html

## Notes
For polling other than local URLs (like in the example) start up your browser with disabled security, i.e. Chrome with:

```
$ open -a Google\ Chrome --args --disable-web-security
```

## Background images
All background images are downloaded from Wikimedia Commons and can be used in
every single visual by defining ```"class": "<imageid>"```.

- imageid: [comets](http://upload.wikimedia.org/wikipedia/commons/a/a2/Comets_and_Shooting_Stars_Dance_Over_Paranal_%28wallpaper%29.jpg)
- imageid: [milkyway](http://upload.wikimedia.org/wikipedia/commons/1/1e/Forest-night-sky-spruce-trees-stars_-_West_Virginia_-_ForestWander.jpg)
- imageid: [night-sky](http://upload.wikimedia.org/wikipedia/commons/5/5e/Bright_Stars_of_Milky_Way_on_the_Dark_blue_Sky_of_Astronomy.jpg)
- imageid: [skyline](http://upload.wikimedia.org/wikipedia/commons/2/21/The_New_York_City_skyline_just_before_sunrise_December_17,_2011.jpg)
- imageid: [waterfall](http://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)
- imageid: [flower](http://upload.wikimedia.org/wikipedia/commons/0/03/%28www.mrlupen.com%29_nature_0091.jpg)
- imageid: [desert](http://upload.wikimedia.org/wikipedia/commons/7/75/Mojave_Desert-2067.jpg)
- imageid: [storm](http://upload.wikimedia.org/wikipedia/commons/0/04/Storm_over_Miami_Beach.jpg)
