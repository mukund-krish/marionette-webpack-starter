Marionette = require 'marionette'


class AppRouter extends Marionette.AppRouter

  appRoutes:
    '': 'showHome'


module.exports = AppRouter
