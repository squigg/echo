module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pusher_channel__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__pusher_channel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pusher_private_channel__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pusher_private_channel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pusher_presence_channel__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__pusher_presence_channel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socketio_channel__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__socketio_channel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socketio_private_channel__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__socketio_private_channel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socketio_presence_channel__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__socketio_presence_channel__["a"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Connector {
    constructor(options) {
        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    setOptions(options) {
        this.options = Object.assign(this._defaultOptions, options);
        if (this.csrfToken()) {
            this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
        }
        return options;
    }
    csrfToken() {
        let selector;
        if (window && window['Laravel'] && window['Laravel'].csrfToken) {
            return window['Laravel'].csrfToken;
        } else if (this.options.csrfToken) {
            return this.options.csrfToken;
        } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
            return selector.getAttribute('content');
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Connector;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Channel {
    notification(callback) {
        return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    listenForWhisper(event, callback) {
        return this.listen('.client-' + event, callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Channel;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(2);


class PusherChannel extends __WEBPACK_IMPORTED_MODULE_1__channel__["a" /* Channel */] {
    constructor(pusher, name, options) {
        super();
        this.name = name;
        this.pusher = pusher;
        this.options = options;
        this.eventFormatter = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* EventFormatter */](this.options.namespace);
        this.subscribe();
    }
    subscribe() {
        this.subscription = this.pusher.subscribe(this.name);
    }
    unsubscribe() {
        this.pusher.unsubscribe(this.name);
    }
    listen(event, callback) {
        this.on(this.eventFormatter.format(event), callback);
        return this;
    }
    stopListening(event) {
        this.subscription.unbind(this.eventFormatter.format(event));
        return this;
    }
    on(event, callback) {
        this.subscription.bind(event, callback);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PusherChannel;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_formatter__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_formatter__["a"]; });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector__ = __webpack_require__(6);

class Echo {
    constructor(options) {
        this.options = options;
        if (typeof Vue === 'function' && Vue.http) {
            this.registerVueRequestInterceptor();
        }
        if (typeof axios === 'function') {
            this.registerAxiosRequestInterceptor();
        }
        if (typeof jQuery === 'function') {
            this.registerjQueryAjaxSetup();
        }
        if (this.options.broadcaster == 'pusher') {
            this.connector = new __WEBPACK_IMPORTED_MODULE_0__connector__["a" /* PusherConnector */](this.options);
        } else if (this.options.broadcaster == 'socket.io') {
            this.connector = new __WEBPACK_IMPORTED_MODULE_0__connector__["b" /* SocketIoConnector */](this.options);
        }
    }
    registerVueRequestInterceptor() {
        Vue.http.interceptors.push((request, next) => {
            if (this.socketId()) {
                request.headers.set('X-Socket-ID', this.socketId());
            }
            next();
        });
    }
    registerAxiosRequestInterceptor() {
        axios.interceptors.request.use(config => {
            if (this.socketId()) {
                config.headers['X-Socket-Id'] = this.socketId();
            }
            return config;
        });
    }
    registerjQueryAjaxSetup() {
        if (typeof jQuery.ajax != 'undefined') {
            jQuery.ajaxSetup({
                beforeSend: xhr => {
                    if (this.socketId()) {
                        xhr.setRequestHeader('X-Socket-Id', this.socketId());
                    }
                }
            });
        }
    }
    listen(channel, event, callback) {
        return this.connector.listen(channel, event, callback);
    }
    channel(channel) {
        return this.connector.channel(channel);
    }
    private(channel) {
        return this.connector.privateChannel(channel);
    }
    join(channel) {
        return this.connector.presenceChannel(channel);
    }
    leave(channel) {
        this.connector.leave(channel);
    }
    socketId() {
        return this.connector.socketId();
    }
    disconnect() {
        this.connector.disconnect();
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Echo;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pusher_connector__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__pusher_connector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socketio_connector__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__socketio_connector__["a"]; });




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(0);


class PusherConnector extends __WEBPACK_IMPORTED_MODULE_0__connector__["a" /* Connector */] {
    constructor() {
        super(...arguments);
        this.channels = {};
    }
    connect() {
        this.pusher = new Pusher(this.options.key, this.options);
    }
    listen(name, event, callback) {
        return this.channel(name).listen(event, callback);
    }
    channel(name) {
        if (!this.channels[name]) {
            this.channels[name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["a" /* PusherChannel */](this.pusher, name, this.options);
        }
        return this.channels[name];
    }
    privateChannel(name) {
        if (!this.channels['private-' + name]) {
            this.channels['private-' + name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["c" /* PusherPrivateChannel */](this.pusher, 'private-' + name, this.options);
        }
        return this.channels['private-' + name];
    }
    presenceChannel(name) {
        if (!this.channels['presence-' + name]) {
            this.channels['presence-' + name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["b" /* PusherPresenceChannel */](this.pusher, 'presence-' + name, this.options);
        }
        return this.channels['presence-' + name];
    }
    leave(name) {
        let channels = [name, 'private-' + name, 'presence-' + name];
        channels.forEach((name, index) => {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        });
    }
    socketId() {
        return this.pusher.connection.socket_id;
    }
    disconnect() {
        this.pusher.disconnect();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PusherConnector;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventFormatter {
    constructor(namespace) {
        this.setNamespace(namespace);
    }
    format(event) {
        if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
            return event.substr(1);
        } else if (this.namespace) {
            event = this.namespace + '.' + event;
        }
        return event.replace(/\./g, '\\');
    }
    setNamespace(value) {
        this.namespace = value;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventFormatter;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pusher_channel__ = __webpack_require__(3);

class PusherPrivateChannel extends __WEBPACK_IMPORTED_MODULE_0__pusher_channel__["a" /* PusherChannel */] {
    whisper(eventName, data) {
        this.pusher.channels.channels[this.name].trigger(`client-${eventName}`, data);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PusherPrivateChannel;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pusher_channel__ = __webpack_require__(3);

class PusherPresenceChannel extends __WEBPACK_IMPORTED_MODULE_0__pusher_channel__["a" /* PusherChannel */] {
    here(callback) {
        this.on('pusher:subscription_succeeded', data => {
            callback(Object.keys(data.members).map(k => data.members[k]));
        });
        return this;
    }
    joining(callback) {
        this.on('pusher:member_added', member => {
            callback(member.info);
        });
        return this;
    }
    leaving(callback) {
        this.on('pusher:member_removed', member => {
            callback(member.info);
        });
        return this;
    }
    whisper(eventName, data) {
        this.pusher.channels.channels[this.name].trigger(`client-${eventName}`, data);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PusherPresenceChannel;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(2);


class SocketIoChannel extends __WEBPACK_IMPORTED_MODULE_1__channel__["a" /* Channel */] {
    constructor(socket, name, options) {
        super();
        this.events = {};
        this.name = name;
        this.socket = socket;
        this.options = options;
        this.eventFormatter = new __WEBPACK_IMPORTED_MODULE_0__util__["a" /* EventFormatter */](this.options.namespace);
        this.subscribe();
        this.configureReconnector();
    }
    subscribe() {
        this.socket.emit('subscribe', {
            channel: this.name,
            auth: this.options.auth || {}
        });
    }
    unsubscribe() {
        this.unbind();
        this.socket.emit('unsubscribe', {
            channel: this.name,
            auth: this.options.auth || {}
        });
    }
    listen(event, callback) {
        this.on(this.eventFormatter.format(event), callback);
        return this;
    }
    on(event, callback) {
        let listener = (channel, data) => {
            if (this.name == channel) {
                callback(data);
            }
        };
        this.socket.on(event, listener);
        this.bind(event, listener);
    }
    configureReconnector() {
        let listener = () => {
            this.subscribe();
        };
        this.socket.on('reconnect', listener);
        this.bind('reconnect', listener);
    }
    bind(event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    }
    unbind() {
        Object.keys(this.events).forEach(event => {
            this.events[event].forEach(callback => {
                this.socket.removeListener(event, callback);
            });
            delete this.events[event];
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocketIoChannel;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);

class SocketIoPrivateChannel extends __WEBPACK_IMPORTED_MODULE_0____["d" /* SocketIoChannel */] {
    whisper(eventName, data) {
        this.socket.emit('client event', {
            channel: this.name,
            event: `client-${eventName}`,
            data: data
        });
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocketIoPrivateChannel;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);

class SocketIoPresenceChannel extends __WEBPACK_IMPORTED_MODULE_0____["f" /* SocketIoPrivateChannel */] {
    here(callback) {
        this.on('presence:subscribed', members => {
            callback(members.map(m => m.user_info));
        });
        return this;
    }
    joining(callback) {
        this.on('presence:joining', member => callback(member.user_info));
        return this;
    }
    leaving(callback) {
        this.on('presence:leaving', member => callback(member.user_info));
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocketIoPresenceChannel;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(0);


class SocketIoConnector extends __WEBPACK_IMPORTED_MODULE_0__connector__["a" /* Connector */] {
    constructor() {
        super(...arguments);
        this.channels = {};
    }
    connect() {
        this.socket = io(this.options.host, this.options);
        return this.socket;
    }
    listen(name, event, callback) {
        return this.channel(name).listen(event, callback);
    }
    channel(name) {
        if (!this.channels[name]) {
            this.channels[name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["d" /* SocketIoChannel */](this.socket, name, this.options);
        }
        return this.channels[name];
    }
    privateChannel(name) {
        if (!this.channels['private-' + name]) {
            this.channels['private-' + name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["f" /* SocketIoPrivateChannel */](this.socket, 'private-' + name, this.options);
        }
        return this.channels['private-' + name];
    }
    presenceChannel(name) {
        if (!this.channels['presence-' + name]) {
            this.channels['presence-' + name] = new __WEBPACK_IMPORTED_MODULE_1__channel__["e" /* SocketIoPresenceChannel */](this.socket, 'presence-' + name, this.options);
        }
        return this.channels['presence-' + name];
    }
    leave(name) {
        let channels = [name, 'private-' + name, 'presence-' + name];
        channels.forEach(name => {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        });
    }
    socketId() {
        return this.socket.id;
    }
    disconnect() {
        this.socket.disconnect();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocketIoConnector;


/***/ })
/******/ ]);