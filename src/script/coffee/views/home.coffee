Marionette = require 'marionette'
_ = require 'underscore'

class HomeView extends Marionette.View

  template: _.template "Home View"


module.exports = HomeView
