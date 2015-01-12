# dashbot

... is yet another live dashboard solution to monitor your software- or
product development process. Use it for dashboards served by a i.e.
Rasperry PI or as a intranet website.

![](examples/screenshot.png "Looks like")

## Run it

```shell
bower install
npm install
copy examples/layout.json ./layout.json
grunt serve
```

Point your browser to `http://localhost:9501`

## Serve it
To serve the dashboard with nginx or another webserver edit the layout.json to
serve your needs and point your browser to
`http://your-server.tld/dist/templates/index.html`.

### Notes on CORS
For polling other than local URLs (like in the example) start up your browser
with disabled security, i.e. Chrome with:

```shell
$ open -a Google\ Chrome --args --disable-web-security
```

## Lay it out
Dashbot's tiles are called visuals. These visuals are layouted to fill your
screen. Just edit your `layout.json`:

```javascript
[
  [
    { /* Visual A: Row 1, Col 1 - Full width */ }
  ],
  [
    { /* Visual B: Row 2, Col 1 - 50% width */ },
    { /* Visual C: Row 2, Col 2 - 50% width */ }
  ],
  [
    { /* Visual D: Row 3, Col 1 - ~33% width */ },
    { /* Visual E: Row 3, Col 2 - ~33% width */ },
    { /* Visual F: Row 3, Col 3 - ~33% width */ }
  ]
]
```

## Visuals
Choose from a growing set of visuals to serve your needs.

### Number Visual Examples
The simplest way to display a number visual with a static value and title:

```javascript
{
  "visual": "number",
  "title": "Ali Baba and the...",
  "value": 40
}
```

Make it poll external sources every 60secs:

```javascript
{
  "visual": "number",
  "title": "Ali Baba and the...",
  "xhr": "/some/url/ali/baba.json",
  "xhrValue": "thieves.count",
  "xhrInterval": 60
}
```

... whereas the `baba.json` file has following dynamic content:

```javascript
{
    "name": "Ali Baba",
    "thieves": {
      "count": 40,
      ...
    }
}
```

As you can see the value is evaluated against whatever you tell `xhrValue`
to be. So there is no need to change your existing JSON-files.

If you want you can define a red/ green state:

```javascript
{
  ...
  "red": "!=40",
  "green": "==40"
}
```

#### Display units
To display your values in a special unit just define `unit`:

```javascript
{
  ...
  "unit": "percent"
}
```

or ...

```javascript
{
  ...
  "unit": "bytes"
}
```

The `bytes` unit automatically calculates bytes, kilobytes and megabytes.


### Graph Visual
The graph visual displays more than one value in a graph:

```javascript
{
  "visual": "graph",
  "title": "Application Downloads",
  "value": [2302, 2658, 1987, 2001, 2160, 2852]
}
```

Note: Polling external resources is still not implemented yet. Feel free :-)

### Weather Visual
Just for fun - getting the temperature in your `city`.

```javascript
{
  "visual": "weather",
  "city": "berlin", /* name of your city or lat, lng */
  "unit": "c" /* `c` for celsius, or `f` for fahrenheit */
}
```

## Background images
All background images are downloaded from Wikimedia Commons and can be used in
every single visual by defining `"class": "<imageid>"`.

- imageid: [comets](http://upload.wikimedia.org/wikipedia/commons/a/a2/Comets_and_Shooting_Stars_Dance_Over_Paranal_%28wallpaper%29.jpg)
- imageid: [milkyway](http://upload.wikimedia.org/wikipedia/commons/1/1e/Forest-night-sky-spruce-trees-stars_-_West_Virginia_-_ForestWander.jpg)
- imageid: [night-sky](http://upload.wikimedia.org/wikipedia/commons/5/5e/Bright_Stars_of_Milky_Way_on_the_Dark_blue_Sky_of_Astronomy.jpg)
- imageid: [skyline](http://upload.wikimedia.org/wikipedia/commons/2/21/The_New_York_City_skyline_just_before_sunrise_December_17,_2011.jpg)
- imageid: [waterfall](http://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)
- imageid: [flower](http://upload.wikimedia.org/wikipedia/commons/0/03/%28www.mrlupen.com%29_nature_0091.jpg)
- imageid: [desert](http://upload.wikimedia.org/wikipedia/commons/7/75/Mojave_Desert-2067.jpg)
- imageid: [storm](http://upload.wikimedia.org/wikipedia/commons/0/04/Storm_over_Miami_Beach.jpg)
