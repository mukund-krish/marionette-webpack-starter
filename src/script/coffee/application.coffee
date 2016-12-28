Marionette     = require 'marionette'
Backbone       = require 'backbone'

AppRouter      = require './router'
MainController = require './controller'


# Single entry point to my application
class App extends Marionette.Application
  region: '#app-hook'


app = new App()

app.on 'before:start', () ->
  # Intantiate and run the app router and start backbone's history
  mainController = new MainController app: app
  router = new AppRouter controller: mainController
  Backbone.history.start()

# actually run the application
app.start()
