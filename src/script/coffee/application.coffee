Marionette     = require 'marionette'
Backbone       = require 'backbone'

AppRouter      = require './router'
MainController = require './controller'


class App extends Marionette.Application
  region: '#app-hook'


app = new App()


app.on 'before:start', () ->
  mainController = new MainController app: app
  router = new AppRouter controller: mainController
  
  Backbone.history.start()


app.start()
