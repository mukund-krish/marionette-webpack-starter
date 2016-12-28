Marionette = require 'marionette'
_ = require 'underscore'


# A simple view. 
class HomeView extends Marionette.View

  template: _.template "Home View"


module.exports = HomeView
