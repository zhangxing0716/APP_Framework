/**
 * @desc 首页View
 * @author 曾文彬
 * @since V1.0.0 2017-2-2
*/

define([
  'jquery',
  'underscore',
  'SuperView',
  'Header', 
  'MessageList',
  'Footer'], function ($, _, SuperView, Header, MessageList, Footer) {
    var IndexView = Backbone.View.extend({
      initialize: function (options) {
        SuperView.call(this, options);

        this.header = new Header({
          className: 'header bg-green'
        });                   
        this.footer = new Footer({
          className: 'foot-toolbar'
        });

        this.$el.append(this.header.render('首页'));
        this.$el.append(this.footer.render());
        setTimeout((function () {
          this.messageList = new MessageList({
            className: 'message-list',
            callback: this.createMainDom.bind(this),
            visualHeight: window.innerHeight - this.header.el.offsetHeight - this.footer.el.offsetHeight
          }); 
        }.bind(this)), 0);
      },
      createMainDom: function (messageListEl) {
        var mainEl = null;

        if (!this.$el.has('.main').length) {
          mainEl = $('<div class="main"></div>').insertBefore(this.$el.children().last());
        } else {
          mainEl = this.$el.find('.main');
        }
        
        mainEl.append(messageListEl);
      }
    });
    
    _.extend(IndexView.prototype, SuperView.prototype); 

    return new IndexView({
      id: 'index',
      className: 'index',
      funcName: 'indexView'
    });
});
