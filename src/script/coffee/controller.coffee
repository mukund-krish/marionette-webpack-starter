Marionette = require 'marionette'

HomeView   = require './views/home.coffee'


# Controller that handles the routes triggered by the router
class MainController extends Marionette.Object

  initialize: (options) ->
    @mergeOptions(options, ['app'])

  showHome: () ->
    @app.showView new HomeView()


module.exports = MainController
