armstrong.github.io
===================
The Armstrong project website!

This is a **Github Pages** site. When you commit changes to ``master`` and
push to the repo on Github, the files will be run through **Jekyll** to
build the static ``armstrong.github.io`` site. We use **Bower** to manage
our asset dependencies. Not that we have many, but Bower makes it very
easy to track and update what we do use. **Grunt** handles the build tasks
such as SASS compilation and copying over the asset files we actually need
from Bower.

The file structure we have is based on the tools we use. Jekyll has its
folders and Bower and NPM will have their component and module folders
when you setup the site locally. Jekyll will take anything that isn't
ignored and mash it together into a final ``_site/`` folder. All of the
assets we directly work with are organized in ``assets_src/``. Grunt does
some mashing of its own and puts everything in the ``assets/`` folder.
Since we never need to look in there, having one folder that everything
references standarizes the code and is tidier than the common array of
separate js/css/images folders.


Local development
-----------------
* ``grunt build`` to run the Grunt tasks
* ``bundle exec jekyll serve --watch`` for site generation and running the server
* Browse to ``http://localhost:4000``

Initial setup
"""""""""""""
Node.js and NPM are prerequisites. Then you'll need Grunt-CLI and Bower, which
both like being globally installed (``npm install -g grunt-cli bower``).

From the project directory:

* ``npm install`` to install the Grunt dependencies
* ``bower install`` to install the Bower assets

To run the Github Pages version of Jekyll and thus have your local environment
match Github, you'll first need Ruby and Bundler. (Here are Github's
`instructions`_.) Then from the project directory:

* ``bundle install``

.. _instructions: https://help.github.com/articles/using-jekyll-with-pages

Ongoing updates
"""""""""""""""
Updating assets: ``bower update``

Updating NPM/Grunt packages: ``npm update``

Updating Jekyll: ``bundle update``
