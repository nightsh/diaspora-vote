"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('diaspora-vote/app', ['exports', 'ember', 'diaspora-vote/resolver', 'ember-load-initializers', 'diaspora-vote/config/environment'], function (exports, _ember, _diasporaVoteResolver, _emberLoadInitializers, _diasporaVoteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _diasporaVoteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _diasporaVoteConfigEnvironment['default'].podModulePrefix,
    Resolver: _diasporaVoteResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _diasporaVoteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('diaspora-vote/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'diaspora-vote/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _diasporaVoteConfigEnvironment) {

  var name = _diasporaVoteConfigEnvironment['default'].APP.name;
  var version = _diasporaVoteConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('diaspora-vote/components/g-map-address-marker', ['exports', 'ember-g-map/components/g-map-address-marker'], function (exports, _emberGMapComponentsGMapAddressMarker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapAddressMarker['default'];
    }
  });
});
define('diaspora-vote/components/g-map-address-route', ['exports', 'ember-g-map/components/g-map-address-route'], function (exports, _emberGMapComponentsGMapAddressRoute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapAddressRoute['default'];
    }
  });
});
define('diaspora-vote/components/g-map-infowindow', ['exports', 'ember-g-map/components/g-map-infowindow'], function (exports, _emberGMapComponentsGMapInfowindow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapInfowindow['default'];
    }
  });
});
define('diaspora-vote/components/g-map-marker', ['exports', 'ember-g-map/components/g-map-marker'], function (exports, _emberGMapComponentsGMapMarker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapMarker['default'];
    }
  });
});
define('diaspora-vote/components/g-map-polyline-coordinate', ['exports', 'ember-g-map/components/g-map-polyline-coordinate'], function (exports, _emberGMapComponentsGMapPolylineCoordinate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapPolylineCoordinate['default'];
    }
  });
});
define('diaspora-vote/components/g-map-polyline', ['exports', 'ember-g-map/components/g-map-polyline'], function (exports, _emberGMapComponentsGMapPolyline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapPolyline['default'];
    }
  });
});
define('diaspora-vote/components/g-map-route-address-waypoint', ['exports', 'ember-g-map/components/g-map-route-address-waypoint'], function (exports, _emberGMapComponentsGMapRouteAddressWaypoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapRouteAddressWaypoint['default'];
    }
  });
});
define('diaspora-vote/components/g-map-route-waypoint', ['exports', 'ember-g-map/components/g-map-route-waypoint'], function (exports, _emberGMapComponentsGMapRouteWaypoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapRouteWaypoint['default'];
    }
  });
});
define('diaspora-vote/components/g-map-route', ['exports', 'ember-g-map/components/g-map-route'], function (exports, _emberGMapComponentsGMapRoute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMapRoute['default'];
    }
  });
});
define('diaspora-vote/components/g-map', ['exports', 'ember-g-map/components/g-map'], function (exports, _emberGMapComponentsGMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGMapComponentsGMap['default'];
    }
  });
});
define('diaspora-vote/components/place-autocomplete-field', ['exports', 'ember-place-autocomplete/components/place-autocomplete-field'], function (exports, _emberPlaceAutocompleteComponentsPlaceAutocompleteField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPlaceAutocompleteComponentsPlaceAutocompleteField['default'];
    }
  });
});
define('diaspora-vote/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      onLocationChangeHandler: function onLocationChangeHandler(value) {
        console.log('Location changed ', value);
      },
      placeChanged: function placeChanged(value) {
        // console.log(value);
        this.set('model.googleData', value);
      },
      done: function done() {
        // this.set('model.address', value.formatted_address);
        // alert(this.get('model.address'));
      }
    }
  });
});
define('diaspora-vote/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('diaspora-vote/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('diaspora-vote/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'diaspora-vote/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _diasporaVoteConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_diasporaVoteConfigEnvironment['default'].APP.name, _diasporaVoteConfigEnvironment['default'].APP.version)
  };
});
define('diaspora-vote/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('diaspora-vote/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('diaspora-vote/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('diaspora-vote/initializers/export-application-global', ['exports', 'ember', 'diaspora-vote/config/environment'], function (exports, _ember, _diasporaVoteConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_diasporaVoteConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _diasporaVoteConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_diasporaVoteConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('diaspora-vote/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('diaspora-vote/initializers/register-google', ['exports', 'ember-place-autocomplete/initializers/register-google'], function (exports, _emberPlaceAutocompleteInitializersRegisterGoogle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPlaceAutocompleteInitializersRegisterGoogle['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberPlaceAutocompleteInitializersRegisterGoogle.initialize;
    }
  });
});
define('diaspora-vote/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('diaspora-vote/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("diaspora-vote/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('diaspora-vote/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('diaspora-vote/router', ['exports', 'ember', 'diaspora-vote/config/environment'], function (exports, _ember, _diasporaVoteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _diasporaVoteConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('diaspora-vote/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return new _ember['default'].Object({
        googleData: {
          'formatted_address': ''
        },
        address: this.get('googleData.formatted_address')
      });
    },

    setupController: function setupController(controller, model) {
      controller.set('model', model);
    }
  });
});
define('diaspora-vote/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("diaspora-vote/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 6
            },
            "end": {
              "line": 27,
              "column": 6
            }
          },
          "moduleName": "diaspora-vote/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "g-map-address-marker", [["get", "context", ["loc", [null, [26, 31], [26, 38]]]]], ["address", ["subexpr", "@mut", [["get", "model.address", ["loc", [null, [26, 47], [26, 60]]]]], [], []]], ["loc", [null, [26, 8], [26, 62]]]]],
        locals: ["context"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "diaspora-vote/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "flex-grid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size2");
        var el4 = dom.createTextNode("2");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "leader");
        var el5 = dom.createTextNode("Unde stai?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("b");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size2");
        var el4 = dom.createTextNode("2");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size2");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size8");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "cell size2");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 3, 3);
        morphs[1] = dom.createMorphAt(element1, 5, 5);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [9]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [6, 6], [6, 16]]]], ["inline", "place-autocomplete-field", [], ["value", ["subexpr", "@mut", [["get", "model.address", ["loc", [null, [8, 14], [8, 27]]]]], [], []], "disable", false, "handlerController", ["subexpr", "@mut", [["get", "this", ["loc", [null, [10, 26], [10, 30]]]]], [], []], "inputClass", "place-autocomplete--input", "focusOutCallback", "done", "placeChangedCallback", "placeChanged", "types", "(cities)", "withGeoLocate", true], ["loc", [null, [7, 6], [16, 8]]]], ["content", "model.address", ["loc", [null, [18, 9], [18, 26]]]], ["block", "g-map", [], ["markersFitMode", "live", "lat", 37.7833, "lng", -122.4167, "zoom", 2], 0, null, ["loc", [null, [25, 6], [27, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('diaspora-vote/config/environment', ['ember'], function(Ember) {
  var prefix = 'diaspora-vote';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("diaspora-vote/app")["default"].create({"name":"diaspora-vote","version":"0.0.0+47eacb6b"});
}

/* jshint ignore:end */
//# sourceMappingURL=diaspora-vote.map