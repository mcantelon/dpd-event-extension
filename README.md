dpd-event-extension
===================

This module patches the Deployd dpd-event module to allow those
writing endpoint logic to access the require function, the process
object, and Deployd context data.

The require function can be used as it normally is in Node.

The process object can be used to import modules that aren't
in the node_modules directory. For example:

    var path = require('path'),
        helpers = require(
          path.join(process().cwd(), 'resources/aips/lib/helpers.js')
        );

The context data, returned by calling the `context` function, can
be used to inspect various Deployd state data.

The code is a modified version of a Gist by GitHub user Fedia:

https://gist.github.com/Fedia/4089364
