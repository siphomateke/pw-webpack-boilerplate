# ProcessWire Webpack Boilerplate
This is a basic Webpack based ProcessWire boilerplate.

Mainly built for my own needs.

# Installation

First, clone the repository:

```
$ git clone https://github.com/siphomateke/pw-webpack-boilerplate.git
```

Next, install ProcessWire, as you normally would, into the `dist/` directory and add the following to your `config.php`:

```php
$config->prependTemplateFile = 'includes/_init.php';
$config->useMarkupRegions = true;
```

Then, assuming you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) installed, install all the required npm packages:

```
$ npm install
```

Now you are all set to begin development;

```
# watch for local changes
$ npm run watch

# build for devlopment
$ npm run dev

# build for production
$ npm run build
```

# Notes
If you have any issues getting this running, let me know over on the issues page.

# Credits
Based largely on [PWBoilerPlate](https://github.com/heldercervantes/PWBoilerplate)
