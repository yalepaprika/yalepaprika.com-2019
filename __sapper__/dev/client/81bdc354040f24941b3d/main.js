/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "81bdc354040f24941b3d";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + hotCurrentHash + "/" + ({"$slug":"$slug","about":"about","archive":"archive","archive__layout":"archive__layout","archive_articles":"archive_articles","archive_contributors":"archive_contributors","archive_folds":"archive_folds","articles":"articles","articles_$slug":"articles_$slug","contributors":"contributors","contributors_$slug~folds_$slug~index":"contributors_$slug~folds_$slug~index","contributors_$slug":"contributors_$slug","folds_$slug":"folds_$slug","index":"index","support":"support","vendors~folds":"vendors~folds","folds":"folds","vendors~search":"vendors~search","search":"search"}[chunkId]||chunkId) + "." + chunkId + ".js"
/******/ 	}
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "client/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/client.js")(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./__sapper__/client.js":
/*!******************************!*\
  !*** ./__sapper__/client.js ***!
  \******************************/
/*! exports provided: start, goto, prefetch, prefetchRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goto", function() { return goto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetch", function() { return prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchRoutes", function() { return prefetchRoutes; });
/* harmony import */ var _src_routes_layout_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/routes/_layout.html */ "./src/routes/_layout.html");
/* harmony import */ var _src_routes_error_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/routes/_error.html */ "./src/routes/_error.html");
// This file is generated by Sapper — do not edit it!



function goto(href, opts = { replaceState: false }) {
    const target$$1 = select_route(new URL(href, document.baseURI));
    if (target$$1) {
        _history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
        return navigate(target$$1, null).then(() => { });
    }
    location.href = href;
    return new Promise(f => { }); // never resolves
}

const ignore = [/^\/index.json$/, /^\/last-modified.json$/, /^\/contributors.json$/, /^\/contributors\/([^\/]+?).json$/, /^\/support.json$/, /^\/search.json$/, /^\/about.json$/, /^\/articles.json$/, /^\/articles\/([^\/]+?).json$/, /^\/folds.json$/, /^\/folds\/([^\/]+?).json$/];
const components = [
	{
		js: () => Promise.all(/*! import() | index */[__webpack_require__.e("contributors_$slug~folds_$slug~index"), __webpack_require__.e("index")]).then(__webpack_require__.bind(null, /*! ../src/routes/index.html */ "./src/routes/index.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:index.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | contributors */ "contributors").then(__webpack_require__.bind(null, /*! ../src/routes/contributors/index.html */ "./src/routes/contributors/index.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:contributors/index.html__"
	},
	{
		js: () => Promise.all(/*! import() | contributors_$slug */[__webpack_require__.e("contributors_$slug~folds_$slug~index"), __webpack_require__.e("contributors_$slug")]).then(__webpack_require__.bind(null, /*! ../src/routes/contributors/[slug].html */ "./src/routes/contributors/[slug].html")),
		css: "__SAPPER_CSS_PLACEHOLDER:contributors/[slug].html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | articles */ "articles").then(__webpack_require__.bind(null, /*! ../src/routes/articles/index.html */ "./src/routes/articles/index.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:articles/index.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | articles_$slug */ "articles_$slug").then(__webpack_require__.bind(null, /*! ../src/routes/articles/[slug].html */ "./src/routes/articles/[slug].html")),
		css: "__SAPPER_CSS_PLACEHOLDER:articles/[slug].html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | archive__layout */ "archive__layout").then(__webpack_require__.bind(null, /*! ../src/routes/archive/_layout.html */ "./src/routes/archive/_layout.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:archive/_layout.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | archive */ "archive").then(__webpack_require__.bind(null, /*! ../src/routes/archive/index.html */ "./src/routes/archive/index.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:archive/index.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | archive_contributors */ "archive_contributors").then(__webpack_require__.bind(null, /*! ../src/routes/archive/contributors.html */ "./src/routes/archive/contributors.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:archive/contributors.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | archive_articles */ "archive_articles").then(__webpack_require__.bind(null, /*! ../src/routes/archive/articles.html */ "./src/routes/archive/articles.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:archive/articles.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | archive_folds */ "archive_folds").then(__webpack_require__.bind(null, /*! ../src/routes/archive/folds.html */ "./src/routes/archive/folds.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:archive/folds.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | support */ "support").then(__webpack_require__.bind(null, /*! ../src/routes/support.html */ "./src/routes/support.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:support.html__"
	},
	{
		js: () => Promise.all(/*! import() | search */[__webpack_require__.e("vendors~search"), __webpack_require__.e("search")]).then(__webpack_require__.bind(null, /*! ../src/routes/search.html */ "./src/routes/search.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:search.html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(null, /*! ../src/routes/about.html */ "./src/routes/about.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:about.html__"
	},
	{
		js: () => Promise.all(/*! import() | folds */[__webpack_require__.e("vendors~folds"), __webpack_require__.e("folds")]).then(__webpack_require__.bind(null, /*! ../src/routes/folds/index.html */ "./src/routes/folds/index.html")),
		css: "__SAPPER_CSS_PLACEHOLDER:folds/index.html__"
	},
	{
		js: () => Promise.all(/*! import() | folds_$slug */[__webpack_require__.e("contributors_$slug~folds_$slug~index"), __webpack_require__.e("folds_$slug")]).then(__webpack_require__.bind(null, /*! ../src/routes/folds/[slug].html */ "./src/routes/folds/[slug].html")),
		css: "__SAPPER_CSS_PLACEHOLDER:folds/[slug].html__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | $slug */ "$slug").then(__webpack_require__.bind(null, /*! ../src/routes/[slug].html */ "./src/routes/[slug].html")),
		css: "__SAPPER_CSS_PLACEHOLDER:[slug].html__"
	}
];
const pages = (d => [
	{
		// index.html
		pattern: /^\/?$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// contributors/index.html
		pattern: /^\/contributors\/?$/,
		parts: [
			null,
			{ i: 1 }
		]
	},

	{
		// contributors/[slug].html
		pattern: /^\/contributors\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 2, params: match => ({ slug: d(match[1]) }) }
		]
	},

	{
		// articles/index.html
		pattern: /^\/articles\/?$/,
		parts: [
			null,
			{ i: 3 }
		]
	},

	{
		// articles/[slug].html
		pattern: /^\/articles\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 4, params: match => ({ slug: d(match[1]) }) }
		]
	},

	{
		// archive/index.html
		pattern: /^\/archive\/?$/,
		parts: [
			{ i: 5 },
			{ i: 6 }
		]
	},

	{
		// archive/contributors.html
		pattern: /^\/archive\/contributors\/?$/,
		parts: [
			{ i: 5 },
			{ i: 7 }
		]
	},

	{
		// archive/articles.html
		pattern: /^\/archive\/articles\/?$/,
		parts: [
			{ i: 5 },
			{ i: 8 }
		]
	},

	{
		// archive/folds.html
		pattern: /^\/archive\/folds\/?$/,
		parts: [
			{ i: 5 },
			{ i: 9 }
		]
	},

	{
		// support.html
		pattern: /^\/support\/?$/,
		parts: [
			{ i: 10 }
		]
	},

	{
		// search.html
		pattern: /^\/search\/?$/,
		parts: [
			{ i: 11 }
		]
	},

	{
		// about.html
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 12 }
		]
	},

	{
		// folds/index.html
		pattern: /^\/folds\/?$/,
		parts: [
			null,
			{ i: 13 }
		]
	},

	{
		// folds/[slug].html
		pattern: /^\/folds\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 14, params: match => ({ slug: d(match[1]) }) }
		]
	},

	{
		// [slug].html
		pattern: /^\/([^\/]+?)\/?$/,
		parts: [
			{ i: 15, params: match => ({ slug: d(match[1]) }) }
		]
	}
])(decodeURIComponent);
let ready = false;
let root_component;
let segments = [];
let current_token;
let root_preload;
let root_data;
const root_props = {
    path: null,
    params: null,
    query: null,
    child: {
        segment: null,
        component: null,
        props: {}
    }
};
let prefetching = null;
function set_prefetching(href, promise) {
    prefetching = { href, promise };
}
let store;
function set_store(fn) {
    store = fn(initial_data.store);
}
let target;
function set_target(element) {
    target = element;
}
let uid = 1;
function set_uid(n) {
    uid = n;
}
let cid;
function set_cid(n) {
    cid = n;
}
const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
const _history = typeof history !== 'undefined' ? history : {
    pushState: (state, title, href) => { },
    replaceState: (state, title, href) => { },
    scrollRestoration: ''
};
const scroll_history = {};
function select_route(url) {
    if (url.origin !== location.origin)
        return null;
    if (!url.pathname.startsWith(initial_data.baseUrl))
        return null;
    const path = url.pathname.slice(initial_data.baseUrl.length);
    // avoid accidental clashes between server routes and pages
    if (ignore.some(pattern => pattern.test(path)))
        return;
    for (let i = 0; i < pages.length; i += 1) {
        const page = pages[i];
        const match = page.pattern.exec(path);
        if (match) {
            const query = {};
            if (url.search.length > 0) {
                url.search.slice(1).split('&').forEach(searchParam => {
                    const [, key, value] = /([^=]*)(?:=(.*))?/.exec(searchParam);
                    query[decodeURIComponent(key)] = decodeURIComponent((value || '').replace(/\+/g, ' '));
                });
            }
            return { url, path, page, match, query };
        }
    }
}
function scroll_state() {
    return {
        x: scrollX,
        y: scrollY
    };
}
function navigate(target, id, noscroll, hash) {
    if (id) {
        // popstate or initial navigation
        cid = id;
    }
    else {
        const current_scroll = scroll_state();
        // clicked on a link. preserve scroll state
        scroll_history[cid] = current_scroll;
        id = cid = ++uid;
        scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
    }
    cid = id;
    if (root_component) {
        root_component.set({ preloading: true });
    }
    const loaded = prefetching && prefetching.href === target.url.href ?
        prefetching.promise :
        prepare_page(target);
    prefetching = null;
    const token = current_token = {};
    return loaded.then(({ redirect, data, nullable_depth }) => {
        if (redirect) {
            return goto(redirect.location, { replaceState: true });
        }
        render(data, nullable_depth, scroll_history[id], noscroll, hash, token);
        if (document.activeElement)
            document.activeElement.blur();
    });
}
function render(data, nullable_depth, scroll, noscroll, hash, token) {
    if (current_token !== token)
        return;
    if (root_component) {
        // first, clear out highest-level root component
        let level = data.child;
        for (let i = 0; i < nullable_depth; i += 1) {
            if (i === nullable_depth)
                break;
            level = level.props.child;
        }
        const { component } = level;
        level.component = null;
        root_component.set({ child: data.child });
        // then render new stuff
        level.component = component;
        root_component.set(data);
    }
    else {
        // first load — remove SSR'd <head> contents
        const start = document.querySelector('#sapper-head-start');
        const end = document.querySelector('#sapper-head-end');
        if (start && end) {
            while (start.nextSibling !== end)
                detach(start.nextSibling);
            detach(start);
            detach(end);
        }
        Object.assign(data, root_data);
        root_component = new _src_routes_layout_html__WEBPACK_IMPORTED_MODULE_0__["default"]({
            target,
            data,
            store,
            hydrate: true
        });
    }
    if (!noscroll) {
        if (hash) {
            // scroll is an element id (from a hash), we need to compute y.
            const deep_linked = document.querySelector(hash);
            if (deep_linked) {
                scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top
                };
            }
        }
        scroll_history[cid] = scroll;
        if (scroll)
            scrollTo(scroll.x, scroll.y);
    }
    Object.assign(root_props, data);
    ready = true;
}
function prepare_page(target) {
    const { page, path, query } = target;
    const new_segments = path.split('/').filter(Boolean);
    let changed_from = 0;
    while (segments[changed_from] &&
        new_segments[changed_from] &&
        segments[changed_from] === new_segments[changed_from])
        changed_from += 1;
    let redirect = null;
    let error = null;
    const preload_context = {
        store,
        fetch: (url, opts) => fetch(url, opts),
        redirect: (statusCode, location) => {
            if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                throw new Error(`Conflicting redirects`);
            }
            redirect = { statusCode, location };
        },
        error: (statusCode, message) => {
            error = { statusCode, message };
        }
    };
    if (!root_preload) {
        root_preload = _src_routes_layout_html__WEBPACK_IMPORTED_MODULE_0__["default"].preload
            ? initial_data.preloaded[0] || _src_routes_layout_html__WEBPACK_IMPORTED_MODULE_0__["default"].preload.call(preload_context, {
                path,
                query,
                params: {}
            })
            : {};
    }
    return Promise.all(page.parts.map((part, i) => {
        if (i < changed_from)
            return null;
        if (!part)
            return null;
        return load_component(components[part.i]).then(Component => {
            const req = {
                path,
                query,
                params: part.params ? part.params(target.match) : {}
            };
            let preloaded;
            if (ready || !initial_data.preloaded[i + 1]) {
                preloaded = Component.preload
                    ? Component.preload.call(preload_context, req)
                    : {};
            }
            else {
                preloaded = initial_data.preloaded[i + 1];
            }
            return Promise.resolve(preloaded).then(preloaded => {
                return { Component, preloaded };
            });
        });
    })).catch(err => {
        error = { statusCode: 500, message: err };
        return [];
    }).then(results => {
        if (root_data) {
            return results;
        }
        else {
            return Promise.resolve(root_preload).then(value => {
                root_data = value;
                return results;
            });
        }
    }).then(results => {
        if (redirect) {
            return { redirect };
        }
        segments = new_segments;
        const get_params = page.parts[page.parts.length - 1].params || (() => ({}));
        const params = get_params(target.match);
        if (error) {
            const props = {
                path,
                query,
                params,
                error: typeof error.message === 'string' ? new Error(error.message) : error.message,
                status: error.statusCode
            };
            return {
                data: Object.assign({}, props, {
                    preloading: false,
                    child: {
                        component: _src_routes_error_html__WEBPACK_IMPORTED_MODULE_1__["default"],
                        props
                    }
                })
            };
        }
        const props = { path, query, error: null, status: null };
        const data = {
            path,
            preloading: false,
            child: Object.assign({}, root_props.child, {
                segment: segments[0]
            })
        };
        if (changed(query, root_props.query))
            data.query = query;
        if (changed(params, root_props.params))
            data.params = params;
        let level = data.child;
        let nullable_depth = 0;
        for (let i = 0; i < page.parts.length; i += 1) {
            const part = page.parts[i];
            if (!part)
                continue;
            const get_params = part.params || (() => ({}));
            if (i < changed_from) {
                level.props.path = path;
                level.props.query = query;
                level.props.child = Object.assign({}, level.props.child);
                nullable_depth += 1;
            }
            else {
                level.component = results[i].Component;
                level.props = Object.assign({}, level.props, props, {
                    params: get_params(target.match),
                }, results[i].preloaded);
                level.props.child = {};
            }
            level = level.props.child;
            level.segment = segments[i + 1];
        }
        return { data, nullable_depth };
    });
}
function load_css(chunk) {
    const href = `client/${chunk}`;
    if (document.querySelector(`link[href="${href}"]`))
        return;
    return new Promise((fulfil, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => fulfil();
        link.onerror = reject;
        document.head.appendChild(link);
    });
}
function load_component(component) {
    // TODO this is temporary — once placeholders are
    // always rewritten, scratch the ternary
    const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
    promises.unshift(component.js());
    return Promise.all(promises).then(values => values[0].default);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function changed(a, b) {
    return JSON.stringify(a) !== JSON.stringify(b);
}

function prefetch(href) {
    const target$$1 = select_route(new URL(href, document.baseURI));
    if (target$$1) {
        if (!prefetching || href !== prefetching.href) {
            set_prefetching(href, prepare_page(target$$1));
        }
        return prefetching.promise;
    }
}

function start(opts) {
    if ('scrollRestoration' in _history) {
        _history.scrollRestoration = 'manual';
    }
    set_target(opts.target);
    if (opts.store)
        set_store(opts.store);
    addEventListener('click', handle_click);
    addEventListener('popstate', handle_popstate);
    // prefetch
    addEventListener('touchstart', trigger_prefetch);
    addEventListener('mousemove', handle_mousemove);
    return Promise.resolve().then(() => {
        const { hash, href } = location;
        _history.replaceState({ id: uid }, '', href);
        if (!initial_data.error) {
            const target$$1 = select_route(new URL(location.href));
            if (target$$1)
                return navigate(target$$1, uid, false, hash);
        }
    });
}
let mousemove_timeout;
function handle_mousemove(event) {
    clearTimeout(mousemove_timeout);
    mousemove_timeout = setTimeout(() => {
        trigger_prefetch(event);
    }, 20);
}
function trigger_prefetch(event) {
    const a = find_anchor(event.target);
    if (!a || a.rel !== 'prefetch')
        return;
    prefetch(a.href);
}
function handle_click(event) {
    // Adapted from https://github.com/visionmedia/page.js
    // MIT license https://github.com/visionmedia/page.js#license
    if (which(event) !== 1)
        return;
    if (event.metaKey || event.ctrlKey || event.shiftKey)
        return;
    if (event.defaultPrevented)
        return;
    const a = find_anchor(event.target);
    if (!a)
        return;
    if (!a.href)
        return;
    // check if link is inside an svg
    // in this case, both href and target are always inside an object
    const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
    const href = String(svg ? a.href.baseVal : a.href);
    if (href === location.href) {
        if (!location.hash)
            event.preventDefault();
        return;
    }
    // Ignore if tag has
    // 1. 'download' attribute
    // 2. rel='external' attribute
    if (a.hasAttribute('download') || a.getAttribute('rel') === 'external')
        return;
    // Ignore if <a> has a target
    if (svg ? a.target.baseVal : a.target)
        return;
    const url = new URL(href);
    // Don't handle hash changes
    if (url.pathname === location.pathname && url.search === location.search)
        return;
    const target$$1 = select_route(url);
    if (target$$1) {
        const noscroll = a.hasAttribute('sapper-noscroll');
        navigate(target$$1, null, noscroll, url.hash);
        event.preventDefault();
        _history.pushState({ id: cid }, '', url.href);
    }
}
function which(event) {
    return event.which === null ? event.button : event.which;
}
function find_anchor(node) {
    while (node && node.nodeName.toUpperCase() !== 'A')
        node = node.parentNode; // SVG <a> elements have a lowercase name
    return node;
}
function handle_popstate(event) {
    scroll_history[cid] = scroll_state();
    if (event.state) {
        const url = new URL(location.href);
        const target$$1 = select_route(url);
        if (target$$1) {
            navigate(target$$1, event.state.id);
        }
        else {
            location.href = location.href;
        }
    }
    else {
        // hashchange
        set_uid(uid + 1);
        set_cid(uid);
        _history.replaceState({ id: cid }, '', location.href);
    }
}

function prefetchRoutes(pathnames) {
    return pages
        .filter(route => {
        if (!pathnames)
            return true;
        return pathnames.some(pathname => route.pattern.test(pathname));
    })
        .reduce((promise, route) => promise.then(() => {
        return Promise.all(route.parts.map(part => part && load_component(components[part.i])));
    }), Promise.resolve());
}




if (typeof window !== 'undefined') {
	__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! /Users/seththompson/code/sapper/sapper-dev-client.js */ "../../sapper/sapper-dev-client.js")).then(client => {
		client.connect(10000);
	});
}

/***/ }),

/***/ "./components/LoadingBar.html":
/*!************************************!*\
  !*** ./components/LoadingBar.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* components/LoadingBar.html generated by Svelte v2.9.9 */


function data() {
  return {
    visible: false
  }
};

function oncreate() {
  this.timeout = setTimeout(() => {
    this.set({ visible: true })
  }, 250);
};

function ondestroy() {
  clearTimeout(this.timeout)
};

const file = "components/LoadingBar.html";

function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-4t6ywm-style';
	style.textContent = "svg.svelte-4t6ywm{height:1rem}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZ0Jhci5odG1sIiwic291cmNlcyI6WyJMb2FkaW5nQmFyLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZyBjbGFzcz1cInBzZiB0MCBsMCByMCB3MTAwIHBlbiB6MyB7dmlzaWJsZSA/ICcnOiAnZG4nfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAxNCAzMiAxOFwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCI0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgPHBhdGggZmlsbD1cIiNlYjVjMjhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiIGQ9XCJNMiAxNCBWMTggSDYgVjE0elwiPlxuICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgdmFsdWVzPVwiMCAwOyAyNCAwOyAwIDBcIiBkdXI9XCIyc1wiIGJlZ2luPVwiMFwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGtleVNwbGluZXM9XCIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44XCIgY2FsY01vZGU9XCJzcGxpbmVcIiAvPlxuICA8L3BhdGg+XG4gIDxwYXRoIGZpbGw9XCIjZWI1YzI4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIiBkPVwiTTAgMTQgVjE4IEg4IFYxNHpcIj5cbiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIHZhbHVlcz1cIjAgMDsgMjQgMDsgMCAwXCIgZHVyPVwiMnNcIiBiZWdpbj1cIjAuMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBrZXlTcGxpbmVzPVwiMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOFwiIGNhbGNNb2RlPVwic3BsaW5lXCIgLz5cbiAgPC9wYXRoPlxuICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIgZD1cIk0wIDE0IFYxOCBIOCBWMTR6XCI+XG4gICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiB2YWx1ZXM9XCIwIDA7IDI0IDA7IDAgMFwiIGR1cj1cIjJzXCIgYmVnaW49XCIwLjJzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIga2V5U3BsaW5lcz1cIjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjhcIiBjYWxjTW9kZT1cInNwbGluZVwiIC8+XG4gIDwvcGF0aD5cbjwvc3ZnPlxuXG48c3R5bGU+XG5zdmcge1xuICBoZWlnaHQ6IDFyZW07XG59XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uY3JlYXRlKCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0KHsgdmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgfSwgMjUwKTtcbiAgICB9LFxuICAgIG9uZGVzdHJveSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgfVxuICB9XG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUEsR0FBRyxjQUFDLENBQUMsQUFDSCxNQUFNLENBQUUsSUFBSSxBQUNkLENBQUMifQ== */";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var svg, path, animateTransform, path_1, animateTransform_1, path_2, animateTransform_2, svg_class_value;

	return {
		c: function create() {
			svg = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("svg");
			path = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("path");
			animateTransform = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("animateTransform");
			path_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("path");
			animateTransform_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("animateTransform");
			path_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("path");
			animateTransform_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createSvgElement"])("animateTransform");
			this.h()
		},

		l: function claim(nodes) {
			svg = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "svg", { class: true, xmlns: true, viewBox: true, width: true, height: true, preserveAspectRatio: true }, true);
			var svg_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			path = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(svg_nodes, "path", { fill: true, transform: true, d: true }, true);
			var path_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(path);

			animateTransform = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(path_nodes, "animateTransform", { attributeName: true, type: true, values: true, dur: true, begin: true, repeatCount: true, keySplines: true, calcMode: true }, true);
			var animateTransform_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(animateTransform);

			animateTransform_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			path_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			path_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(svg_nodes, "path", { fill: true, transform: true, d: true }, true);
			var path_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(path_1);

			animateTransform_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(path_1_nodes, "animateTransform", { attributeName: true, type: true, values: true, dur: true, begin: true, repeatCount: true, keySplines: true, calcMode: true }, true);
			var animateTransform_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(animateTransform_1);

			animateTransform_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			path_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			path_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(svg_nodes, "path", { fill: true, transform: true, d: true }, true);
			var path_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(path_2);

			animateTransform_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(path_2_nodes, "animateTransform", { attributeName: true, type: true, values: true, dur: true, begin: true, repeatCount: true, keySplines: true, calcMode: true }, true);
			var animateTransform_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(animateTransform_2);

			animateTransform_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			path_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			svg_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "attributeName", "transform");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "type", "translate");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "values", "0 0; 24 0; 0 0");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "dur", "2s");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "begin", "0");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "repeatCount", "indefinite");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "keySplines", "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform, "calcMode", "spline");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(animateTransform, file, 2, 4, 242);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path, "fill", "#eb5c28");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path, "transform", "translate(0 0)");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path, "d", "M2 14 V18 H6 V14z");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(path, file, 1, 2, 167);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "attributeName", "transform");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "type", "translate");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "values", "0 0; 24 0; 0 0");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "dur", "2s");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "begin", "0.1s");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "repeatCount", "indefinite");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "keySplines", "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_1, "calcMode", "spline");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(animateTransform_1, file, 5, 4, 524);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_1, "fill", "#eb5c28");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_1, "transform", "translate(0 0)");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_1, "d", "M0 14 V18 H8 V14z");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(path_1, file, 4, 2, 449);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "attributeName", "transform");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "type", "translate");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "values", "0 0; 24 0; 0 0");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "dur", "2s");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "begin", "0.2s");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "repeatCount", "indefinite");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "keySplines", "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(animateTransform_2, "calcMode", "spline");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(animateTransform_2, file, 8, 4, 809);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_2, "fill", "#ffffff");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_2, "transform", "translate(0 0)");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(path_2, "d", "M0 14 V18 H8 V14z");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(path_2, file, 7, 2, 734);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "class", svg_class_value = "psf t0 l0 r0 w100 pen z3 " + (ctx.visible ? '': 'dn') + " svelte-4t6ywm");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "xmlns", "http://www.w3.org/2000/svg");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "viewBox", "0 14 32 18");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "width", "32");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "height", "4");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "preserveAspectRatio", "none");
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(svg, file, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(svg, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(path, svg);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(animateTransform, path);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(path_1, svg);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(animateTransform_1, path_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(path_2, svg);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(animateTransform_2, path_2);
		},

		p: function update(changed, ctx) {
			if ((changed.visible) && svg_class_value !== (svg_class_value = "psf t0 l0 r0 w100 pen z3 " + (ctx.visible ? '': 'dn') + " svelte-4t6ywm")) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(svg, "class", svg_class_value);
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(svg);
			}
		}
	};
}

function LoadingBar(options) {
	this._debugName = '<LoadingBar>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(data(), options.data);
	if (!('visible' in this._state)) console.warn("<LoadingBar> was created without expected data property 'visible'");
	this._intro = true;

	this._handlers.destroy = [ondestroy];

	if (!document.getElementById("svelte-4t6ywm-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assignTrue"])({}, this._state), current: this._state });
	});

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(LoadingBar.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

LoadingBar.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		LoadingBar = register("components/LoadingBar.html", LoadingBar);
	} else {
		// hot update
		LoadingBar = reload("components/LoadingBar.html", LoadingBar);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (LoadingBar);


/***/ }),

/***/ "./components/Nav.html":
/*!*****************************!*\
  !*** ./components/Nav.html ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_1__);
/* components/Nav.html generated by Svelte v2.9.9 */



function data() {
  return {
    hidden: false,
    position: 0
  }
};

function oncreate() {
  this.animation = raf__WEBPACK_IMPORTED_MODULE_1___default()(
    function tick () {
      var { position } = this.get()
      if (position !== window.scrollY) {
        var lastPos = position
        this.set({position: window.scrollY })
        var active = lastPos > window.scrollY
        if (active || window.scrollY < 100) {
          this.set({ hidden: false })
        } else {
          this.set({ hidden: true })
        }
      }
      raf__WEBPACK_IMPORTED_MODULE_1___default()(tick.bind(this))
    }.bind(this)
  )
};

function ondestroy() {
  raf__WEBPACK_IMPORTED_MODULE_1___default.a.cancel(this.animation)
};

const file = "components/Nav.html";

function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-1omf71z-style';
	style.textContent = "header.svelte-1omf71z{transition:transform 250ms ease}header.hidden.svelte-1omf71z{transform:translate(0, -100%);-webkit-transform:translate(0, -100%);-ms-transform:translate(0, -100%)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2Lmh0bWwiLCJzb3VyY2VzIjpbIk5hdi5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIjxoZWFkZXIgY2xhc3M9XCJ7aGlkZGVuID8gJ2hpZGRlbicgOiAnJ30gcHNmIGMxMiB1c24gdDAgbDAgcjAgeCB4dyBweDEgYmdjLXBhcHJpa2EgejFcIj5cbiAgPHVsIGNsYXNzPVwiYzEyIHNtLWM2IHBsMiBtYjBcIj5cbiAgICA8bGkgY2xhc3M9XCJkaSBwcjEge3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdmc2knIDogJyd9XCI+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL1wiPlBhcHJpa2EhPC9hPjwvbGk+XG4gICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnZm9sZHMnID8gJ2ZzaScgOiAnJ31cIj48YSByZWw9cHJlZmV0Y2ggaHJlZj1cIi9mb2xkc1wiPkZvbGRzPC9hPjwvbGk+XG4gICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnYXJjaGl2ZScgPyAnZnNpJyA6ICcnfVwiPjxhIHJlbD1wcmVmZXRjaCBocmVmPVwiL2FyY2hpdmVcIj5BcmNoaXZlPC9hPjwvbGk+XG4gIDwvdWw+XG4gIDx1bCBjbGFzcz1cImMxMiBzbS1jNiBwbDIgbWIwXCI+XG4gICAgICA8bGkgY2xhc3M9XCJkaSBwcjEge3NlZ21lbnQgPT09ICdhYm91dCcgPyAnZnNpJyA6ICcnfVwiPjxhIHJlbD1wcmVmZXRjaCBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImRpIHByMSB7c2VnbWVudCA9PT0gJ3N1cHBvcnQnID8gJ2ZzaScgOiAnJ31cIj48YSByZWw9cHJlZmV0Y2ggaHJlZj1cIi9zdXBwb3J0XCI+U3VwcG9ydDwvYT48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnc2VhcmNoJyA/ICdmc2knIDogJyd9XCI+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaDwvYT48L2xpPlxuICA8L3VsPlxuPC9oZWFkZXI+XG5cbjxzdHlsZT5cbiAgaGVhZGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZTtcbiAgfVxuICBoZWFkZXIuaGlkZGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJhZiBmcm9tICdyYWYnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uY3JlYXRlICgpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gcmFmKFxuICAgICAgICBmdW5jdGlvbiB0aWNrICgpIHtcbiAgICAgICAgICB2YXIgeyBwb3NpdGlvbiB9ID0gdGhpcy5nZXQoKVxuICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gd2luZG93LnNjcm9sbFkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0UG9zID0gcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuc2V0KHtwb3NpdGlvbjogd2luZG93LnNjcm9sbFkgfSlcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBsYXN0UG9zID4gd2luZG93LnNjcm9sbFlcbiAgICAgICAgICAgIGlmIChhY3RpdmUgfHwgd2luZG93LnNjcm9sbFkgPCAxMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXQoeyBoaWRkZW46IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldCh7IGhpZGRlbjogdHJ1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByYWYodGljay5iaW5kKHRoaXMpKVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgIClcbiAgICB9LFxuICAgIG9uZGVzdHJveSAoKSB7XG4gICAgICByYWYuY2FuY2VsKHRoaXMuYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNFLE1BQU0sZUFBQyxDQUFDLEFBQ04sVUFBVSxDQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUNsQyxDQUFDLEFBQ0QsTUFBTSxPQUFPLGVBQUMsQ0FBQyxBQUNiLFNBQVMsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUM5QixpQkFBaUIsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN0QyxhQUFhLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQUFDcEMsQ0FBQyJ9 */";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var header, ul, li, a, text, li_class_value, li_1, a_1, text_1, li_1_class_value, li_2, a_2, text_2, li_2_class_value, text_3, ul_1, li_3, a_3, text_4, li_3_class_value, li_4, a_4, text_5, li_4_class_value, li_5, a_5, text_6, li_5_class_value, header_class_value;

	return {
		c: function create() {
			header = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header");
			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Paprika!");
			li_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Folds");
			li_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Archive");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			ul_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");
			li_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("About");
			li_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Support");
			li_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			text_6 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Search");
			this.h()
		},

		l: function claim(nodes) {
			header = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "HEADER", { class: true }, false);
			var header_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(header);

			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(header_nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_nodes, "LI", { class: true }, false);
			var li_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_nodes, "Paprika!");
			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			li_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_nodes, "LI", { class: true }, false);
			var li_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li_1);

			a_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_1_nodes, "A", { rel: true, href: true }, false);
			var a_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a_1);

			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_1_nodes, "Folds");
			a_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			li_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_nodes, "LI", { class: true }, false);
			var li_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li_2);

			a_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_2_nodes, "A", { rel: true, href: true }, false);
			var a_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a_2);

			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_2_nodes, "Archive");
			a_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			ul_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(header_nodes, "\n  ");

			ul_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(header_nodes, "UL", { class: true }, false);
			var ul_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul_1);

			li_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_1_nodes, "LI", { class: true }, false);
			var li_3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li_3);

			a_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_3_nodes, "A", { rel: true, href: true }, false);
			var a_3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a_3);

			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_3_nodes, "About");
			a_3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			li_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_1_nodes, "LI", { class: true }, false);
			var li_4_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li_4);

			a_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_4_nodes, "A", { rel: true, href: true }, false);
			var a_4_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a_4);

			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_4_nodes, "Support");
			a_4_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_4_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);

			li_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(ul_1_nodes, "LI", { class: true }, false);
			var li_5_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li_5);

			a_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_5_nodes, "A", { rel: true, href: true }, false);
			var a_5_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a_5);

			text_6 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(a_5_nodes, "Search");
			a_5_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_5_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			ul_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			header_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = "/";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a, file, 2, 60, 180);
			li.className = li_class_value = "di pr1 " + (ctx.segment === ctx.undefined ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li, file, 2, 4, 124);
			a_1.rel = "prefetch";
			a_1.href = "/folds";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a_1, file, 3, 58, 283);
			li_1.className = li_1_class_value = "di pr1 " + (ctx.segment === 'folds' ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li_1, file, 3, 4, 229);
			a_2.rel = "prefetch";
			a_2.href = "/archive";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a_2, file, 4, 60, 388);
			li_2.className = li_2_class_value = "di pr1 " + (ctx.segment === 'archive' ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li_2, file, 4, 4, 332);
			ul.className = "c12 sm-c6 pl2 mb0";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul, file, 1, 2, 89);
			a_3.rel = "prefetch";
			a_3.href = "/about";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a_3, file, 7, 60, 538);
			li_3.className = li_3_class_value = "di pr1 " + (ctx.segment === 'about' ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li_3, file, 7, 6, 484);
			a_4.rel = "prefetch";
			a_4.href = "/support";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a_4, file, 8, 62, 645);
			li_4.className = li_4_class_value = "di pr1 " + (ctx.segment === 'support' ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li_4, file, 8, 6, 589);
			a_5.rel = "prefetch";
			a_5.href = "/search";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a_5, file, 9, 61, 755);
			li_5.className = li_5_class_value = "di pr1 " + (ctx.segment === 'search' ? 'fsi' : '');
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li_5, file, 9, 6, 700);
			ul_1.className = "c12 sm-c6 pl2 mb0";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul_1, file, 6, 2, 447);
			header.className = header_class_value = "" + (ctx.hidden ? 'hidden' : '') + " psf c12 usn t0 l0 r0 x xw px1 bgc-paprika z1" + " svelte-1omf71z";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(header, file, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(header, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(ul, header);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li, ul);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a, li);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, a);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li_1, ul);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a_1, li_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_1, a_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li_2, ul);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a_2, li_2);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_2, a_2);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_3, header);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(ul_1, header);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li_3, ul_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a_3, li_3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_4, a_3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li_4, ul_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a_4, li_4);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_5, a_4);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(li_5, ul_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a_5, li_5);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_6, a_5);
		},

		p: function update(changed, ctx) {
			if ((changed.segment || changed.undefined) && li_class_value !== (li_class_value = "di pr1 " + (ctx.segment === ctx.undefined ? 'fsi' : ''))) {
				li.className = li_class_value;
			}

			if ((changed.segment) && li_1_class_value !== (li_1_class_value = "di pr1 " + (ctx.segment === 'folds' ? 'fsi' : ''))) {
				li_1.className = li_1_class_value;
			}

			if ((changed.segment) && li_2_class_value !== (li_2_class_value = "di pr1 " + (ctx.segment === 'archive' ? 'fsi' : ''))) {
				li_2.className = li_2_class_value;
			}

			if ((changed.segment) && li_3_class_value !== (li_3_class_value = "di pr1 " + (ctx.segment === 'about' ? 'fsi' : ''))) {
				li_3.className = li_3_class_value;
			}

			if ((changed.segment) && li_4_class_value !== (li_4_class_value = "di pr1 " + (ctx.segment === 'support' ? 'fsi' : ''))) {
				li_4.className = li_4_class_value;
			}

			if ((changed.segment) && li_5_class_value !== (li_5_class_value = "di pr1 " + (ctx.segment === 'search' ? 'fsi' : ''))) {
				li_5.className = li_5_class_value;
			}

			if ((changed.hidden) && header_class_value !== (header_class_value = "" + (ctx.hidden ? 'hidden' : '') + " psf c12 usn t0 l0 r0 x xw px1 bgc-paprika z1" + " svelte-1omf71z")) {
				header.className = header_class_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(header);
			}
		}
	};
}

function Nav(options) {
	this._debugName = '<Nav>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({ undefined : undefined }, data()), options.data);
	if (!('hidden' in this._state)) console.warn("<Nav> was created without expected data property 'hidden'");
	if (!('segment' in this._state)) console.warn("<Nav> was created without expected data property 'segment'");
	this._intro = true;

	this._handlers.destroy = [ondestroy];

	if (!document.getElementById("svelte-1omf71z-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assignTrue"])({}, this._state), current: this._state });
	});

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Nav.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Nav.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Nav = register("components/Nav.html", Nav);
	} else {
		// hot update
		Nav = reload("components/Nav.html", Nav);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svelte-dev-helper/index.js":
/*!*************************************************!*\
  !*** ./node_modules/svelte-dev-helper/index.js ***!
  \*************************************************/
/*! exports provided: Registry, configure, getConfig, createProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/proxy */ "./node_modules/svelte-dev-helper/lib/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return _lib_proxy__WEBPACK_IMPORTED_MODULE_0__["Registry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _lib_proxy__WEBPACK_IMPORTED_MODULE_0__["configure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return _lib_proxy__WEBPACK_IMPORTED_MODULE_0__["getConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProxy", function() { return _lib_proxy__WEBPACK_IMPORTED_MODULE_0__["createProxy"]; });



/***/ }),

/***/ "./node_modules/svelte-dev-helper/lib/proxy.js":
/*!*****************************************************!*\
  !*** ./node_modules/svelte-dev-helper/lib/proxy.js ***!
  \*****************************************************/
/*! exports provided: Registry, configure, getConfig, createProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProxy", function() { return createProxy; });
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ "./node_modules/svelte-dev-helper/lib/registry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return _registry__WEBPACK_IMPORTED_MODULE_0__["default"]; });



let proxyOptions = {
  noPreserveState: false
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getDebugName(id) {
  const posixID = id.replace(/[/\\]/g, '/');
  const name = posixID.split('/').pop().split('.').shift();
  return `<${capitalize(name)}>`;
}

function groupStart(msg) {
  console.group && console.group(msg);
}

function groupEnd() {
  console.groupEnd && console.groupEnd();
}




function configure(_options) {
  proxyOptions = Object.assign(proxyOptions, _options);
}

function getConfig() {
  return proxyOptions;
}

/*
creates a proxy object that
decorates the original component with trackers
and ensures resolution to the
latest version of the component
*/
function createProxy(id) {
  const handledMethods = '_mount,_unmount,destroy'.split(',');
  const forwardedMethods = 'get,fire,observe,on,set,teardown,_recompute,_set,_bind'.split(',');
  class proxyComponent {

    constructor(options) {
      this.id = id;
      this.__mountpoint = null;
      this.__anchor = null;
      this.__insertionPoint = null;
      this.__mounted = false;

      this._register(options);

      this._debugName = this.proxyTarget._debugName || getDebugName(this.id);

      // ---- forwarded methods ----
      const self = this;
      forwardedMethods.forEach(function(method) {
        self[method] = function() {
          return self.proxyTarget[method].apply(self.proxyTarget, arguments);
        };
      });
      // ---- END forwarded methods ----
    }

    // ---- augmented methods ----

    _mount(target, anchor, insertionPoint) {

      this.__mountpoint = target;
      this.__anchor = anchor;

      if (insertionPoint) {
        this.__insertionPoint = insertionPoint;
      } else {
        // eslint-disable-next-line no-undef
        this.__insertionPoint = document.createComment(this._debugName);
        target.insertBefore(this.__insertionPoint, anchor);
      }

      this.__insertionPoint.__component__ = this;

      anchor = this.__insertionPoint.nextSibling;

      if (target.nodeName == '#document-fragment' && insertionPoint) {
        //handles #4 by forcing a target
        //if original target was a document fragment
        target = this.__insertionPoint.parentNode;
      }

      this.__mounted = true;

      return this.proxyTarget._mount(target, anchor);
    }

    destroy(detach, keepInsertionPoint) {

      _registry__WEBPACK_IMPORTED_MODULE_0__["default"].deRegisterInstance(this);

      if (!keepInsertionPoint && this.__insertionPoint) {
        //deref for GC before removal of node
        this.__insertionPoint.__component__ = null;
        const ip = this.__insertionPoint;
        ip && ip.parentNode && ip.parentNode.removeChild(ip);
      }
      return this.proxyTarget.destroy(detach);
    }

    _unmount() {
      this.__mounted = false;
      return this.proxyTarget._unmount.apply(this.proxyTarget, arguments);
    }

    // ---- END augmented methods ----


    // ---- extra methods ----

    _register(options) {

      const record = _registry__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.id);

      try {

        //resolve to latest version of component
        this.proxyTarget = new record.component(options);

      } catch (e) {

        const rb = record.rollback;

        if (!rb) {
          console.error(e);
          console.warn('Full reload required. Please fix component errors and reload the whole page');
          return;
        }

        groupStart(this._debugName + ' Errors');

        console.warn(e);
        console.warn(this._debugName + ' could not be hot-loaded because it has an error');

        //resolve to previous working version of component
        this.proxyTarget = new rb(options);
        console.info('%c' + this._debugName + ' rolled back to previous working version', 'color:green');

        //set latest version as the rolled-back version
        record.component = rb;

        groupEnd();

      }

      _registry__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.id, record);

      //register current instance, so that
      //we can re-render it when required
      _registry__WEBPACK_IMPORTED_MODULE_0__["default"].registerInstance(this);

      //proxy custom methods
      const self = this;
      let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(self.proxyTarget));
      methods.forEach(function(method) {
        if (!handledMethods.includes(method) && !forwardedMethods.includes(method)) {
          self[method] = function() {
            return self.proxyTarget[method].apply(self.proxyTarget, arguments);
          };
        }
      });

      //(re)expose properties that might be used from outside
      this.refs = this.proxyTarget.refs || {};
      this._fragment = this.proxyTarget._fragment;
      this._slotted = this.proxyTarget._slotted;
      this.root = this.proxyTarget.root;
      this.store = this.proxyTarget.store || null;
    }

    _rerender() {
      const mountpoint = this.__mountpoint || null,
        anchor = this.__anchor || null,
        options = this.proxyTarget.options,
        oldstate = this.get(),
        isMounted = this.__mounted,
        insertionPoint = this.__insertionPoint,
        handlers = this.proxyTarget._handlers;

      this.destroy(true, true);

      this._register(options);

      //re-attach event handlers
      const self = this;
      for (const ev in handlers) {
        const _handlers = handlers[ev];
        _handlers.forEach (function(item) {
          if (item.toString().includes('component.fire(')) {
            self.proxyTarget.on(ev, item);
          }
        });
      }

      if (mountpoint && isMounted) {
        this.proxyTarget._fragment.c();
        this._mount(mountpoint, anchor, insertionPoint);

        //work around _checkReadOnly in svelte (for computed properties)
        this.proxyTarget._updatingReadonlyProperty = true;

        //preserve local state (unless noPreserveState is true)
        if (
          !this.proxyTarget.constructor.noPreserveState
          && !proxyOptions.noPreserveState) {

          //manually flush computations and re-render changes
          let changed = {};
          for (let k in oldstate) {
            changed[k] = true;
          }
          this.proxyTarget._recompute(changed, oldstate);
          this.proxyTarget._fragment && this.proxyTarget._fragment.p(changed, oldstate);

          //set old state back
          this.set(oldstate);

        } else {

          //we have to call .set() here
          //otherwise oncreate is not fired
          this.set(this.get());

        }

        this.proxyTarget._updatingReadonlyProperty = false;

      }
    }

    // ---- END extra methods ----
  }

  //forward static properties and methods
  const originalComponent = _registry__WEBPACK_IMPORTED_MODULE_0__["default"].get(id).component;
  for (let key in originalComponent) {
    proxyComponent[key] = originalComponent[key];
  }

  return proxyComponent;
}


/***/ }),

/***/ "./node_modules/svelte-dev-helper/lib/registry.js":
/*!********************************************************!*\
  !*** ./node_modules/svelte-dev-helper/lib/registry.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class registry {
  constructor() {
    this._items = {};
  }

  set(k, v) {
    this._items[k] = Object.assign({
      rollback: null,
      component: null,
      instances: []
    }, v);
  }

  get(k) {
    return k ? this._items[k] || undefined : this._items;
  }

  registerInstance(instance) {
    const id = instance.id;
    this._items[id] && this._items[id].instances.push(instance);
  }

  deRegisterInstance(instance) {
    const id = instance.id;
    this._items[id] && this._items[id].instances.forEach(function(comp, idx, instances) {
      if (comp == instance) {
        instances.splice(idx, 1);
      }
    });
  }

}


// eslint-disable-next-line no-undef
const componentRegistry = (window.__SVELTE_REGISTRY__ = new registry);

/* harmony default export */ __webpack_exports__["default"] = (componentRegistry);

/***/ }),

/***/ "./node_modules/svelte-loader/lib/hot-api.js":
/*!***************************************************!*\
  !*** ./node_modules/svelte-loader/lib/hot-api.js ***!
  \***************************************************/
/*! exports provided: configure, register, reload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return reload; });
/* harmony import */ var svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte-dev-helper */ "./node_modules/svelte-dev-helper/index.js");


let hotOptions = {
	noPreserveState: false
};

function configure(options) {
	hotOptions = Object.assign(hotOptions, options);
	Object(svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["configure"])(hotOptions);
}

function register(id, component) {

	//store original component in registry
	svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["Registry"].set(id, {
		rollback: null,
		component,
		instances: []
	});

	//create the proxy itself
	const proxy = Object(svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["createProxy"])(id);

	//patch the registry record with proxy constructor
	const record = svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["Registry"].get(id);
	record.proxy = proxy;
	svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["Registry"].set(id, record);

	return proxy;
}

function reload(id, component) {

	const record = svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["Registry"].get(id);

	//keep reference to previous version to enable rollback
	record.rollback = record.component;

	//replace component in registry with newly loaded component
	record.component = component;

	svelte_dev_helper__WEBPACK_IMPORTED_MODULE_0__["Registry"].set(id, record);

	//re-render the proxy instances
	record.instances.slice().forEach(function(instance) {
		instance && instance._rerender();
	});

	//return the original proxy constructor that was `register()`-ed
	return record.proxy;
}

/***/ }),

/***/ "./node_modules/svelte/shared.js":
/*!***************************************!*\
  !*** ./node_modules/svelte/shared.js ***!
  \***************************************/
/*! exports provided: blankObject, destroy, destroyDev, _differs, _differsImmutable, fire, get, init, on, run, set, _set, setDev, callAll, _mount, PENDING, SUCCESS, FAILURE, removeFromStore, proto, protoDev, wrapAnimation, fixPosition, handlePromise, appendNode, insertNode, detachNode, detachBetween, detachBefore, detachAfter, reinsertBetween, reinsertChildren, reinsertAfter, reinsertBefore, destroyEach, createFragment, createElement, createSvgElement, createText, createComment, addListener, removeListener, setAttribute, setAttributes, removeAttribute, setXlinkAttribute, getBindingGroupValue, toNumber, timeRangesToArray, children, claimElement, claimText, setInputType, setStyle, selectOption, selectOptions, selectValue, selectMultipleValue, addResizeListener, destroyBlock, outroAndDestroyBlock, fixAndOutroAndDestroyBlock, updateKeyedEach, measure, animate, getSpreadUpdate, invalidAttributeNameCharacter, spread, escaped, escape, each, missingComponent, validateSsrComponent, linear, generateRule, hash, wrapTransition, outros, groupOutros, transitionManager, noop, assign, assignTrue, isPromise, callAfter, addLoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDev", function() { return setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAnimation", function() { return wrapAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixPosition", function() { return fixPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePromise", function() { return handlePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNode", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNode", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBefore", function() { return detachBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachAfter", function() { return detachAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBetween", function() { return reinsertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertChildren", function() { return reinsertChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertAfter", function() { return reinsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBefore", function() { return reinsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangesToArray", function() { return timeRangesToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOption", function() { return selectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectValue", function() { return selectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMultipleValue", function() { return selectMultipleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyBlock", function() { return destroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyBlock", function() { return outroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAndOutroAndDestroyBlock", function() { return fixAndOutroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadUpdate", function() { return getSpreadUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAttributeNameCharacter", function() { return invalidAttributeNameCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingComponent", function() { return missingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSsrComponent", function() { return validateSsrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outros", function() { return outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupOutros", function() { return groupOutros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTrue", function() { return assignTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAfter", function() { return callAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoc", function() { return addLoc; });
function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function assignTrue(tar, src) {
	for (var k in src) tar[k] = 1;
	return tar;
}

function isPromise(value) {
	return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
	if (i === 0) fn();
	return () => {
		if (!--i) fn();
	};
}

function addLoc(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations, detach) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detach);
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
	for (var key in attributes) {
		if (key in node) {
			node[key] = attributes[key];
		} else {
			if (attributes[key] === undefined) removeAttribute(node, key);
			else setAttribute(node, key, attributes[key]);
		}
	}
}

function removeAttribute(node, attribute) {
	node.removeAttribute(attribute);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
	var array = [];
	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectOptions(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
	return [].map.call(select.querySelectorAll(':checked'), function(option) {
		return option.__value;
	});
}

function addResizeListener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win && win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function linear(t) {
	return t;
}

function generateRule({ a, b, delta, duration }, ease, fn) {
	const step = 16.666 / duration;
	let keyframes = '{\n';

	for (let p = 0; p <= 1; p += step) {
		const t = a + delta * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}

	return keyframes + `100% {${fn(b, 1 - b)}}\n}`;
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
	let obj = fn(node, params);
	let duration;
	let ease;
	let cssText;

	let initialised = false;

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,

		run(b, callback) {
			if (typeof obj === 'function') {
				transitionManager.wait().then(() => {
					obj = obj();
					this._run(b, callback);
				});
			} else {
				this._run(b, callback);
			}
		},

		_run(b, callback) {
			duration = obj.duration || 300;
			ease = obj.easing || linear;

			const program = {
				start: window.performance.now() + (obj.delay || 0),
				b,
				callback: callback || noop
			};

			if (intro && !initialised) {
				if (obj.css && obj.delay) {
					cssText = node.style.cssText;
					node.style.cssText += obj.css(0, 1);
				}

				if (obj.tick) obj.tick(0, 1);
				initialised = true;
			}

			if (!b) {
				program.group = outros.current;
				outros.current.remaining += 1;
			}

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},

		start(program) {
			component.fire(`${program.b ? 'intro' : 'outro'}.start`, { node });

			program.a = this.t;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, obj.css);
				transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},

		update(now) {
			const program = this.program;
			if (!program) return;

			const p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t, 1 - this.t);
		},

		done() {
			const program = this.program;
			this.t = program.b;

			if (obj.tick) obj.tick(this.t, 1 - this.t);

			component.fire(`${program.b ? 'intro' : 'outro'}.end`, { node });

			if (!program.b && !program.invalidated) {
				program.group.callbacks.push(() => {
					program.callback();
					if (obj.css) transitionManager.deleteRule(node, program.name);
				});

				if (--program.group.remaining === 0) {
					program.group.callbacks.forEach(fn => {
						fn();
					});
				}
			} else {
				if (obj.css) transitionManager.deleteRule(node, program.name);
			}

			this.running = !!this.pending;
		},

		abort(reset) {
			if (this.program) {
				if (reset && obj.tick) obj.tick(1, 0);
				if (obj.css) transitionManager.deleteRule(node, this.program.name);
				this.program = this.pending = null;
				this.running = false;
			}
		},

		invalidate() {
			if (this.program) {
				this.program.invalidated = true;
			}
		}
	};
}

let outros = {};

function groupOutros() {
	outros.current = {
		remaining: 0,
		callbacks: []
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},
	promise: null,

	add(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule(rule, name) {
		if (!this.stylesheet) {
			const style = createElement('style');
			document.head.appendChild(style);
			transitionManager.stylesheet = style.sheet;
		}

		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
		}
	},

	next() {
		this.running = false;

		const now = window.performance.now();
		let i = this.transitions.length;

		while (i--) {
			const transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			let i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(anim => anim && anim.indexOf(name) === -1)
			.join(', ');
	},

	wait() {
		if (!transitionManager.promise) {
			transitionManager.promise = Promise.resolve();
			transitionManager.promise.then(() => {
				transitionManager.promise = null;
			});
		}

		return transitionManager.promise;
	}
};

function wrapAnimation(node, from, fn, params) {
	if (!from) return;

	const to = node.getBoundingClientRect();
	if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;

	const info = fn(node, { from, to }, params);

	const duration = 'duration' in info ? info.duration : 300;
	const delay = 'delay' in info ? info.delay : 0;
	const ease = info.easing || linear;
	const start = window.performance.now() + delay;
	const end = start + duration;

	const program = {
		a: 0,
		t: 0,
		b: 1,
		delta: 1,
		duration,
		start,
		end
	};

	const cssText = node.style.cssText;

	const animation = {
		pending: delay ? program : null,
		program: delay ? null : program,
		running: true,

		start() {
			if (info.css) {
				if (delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, info.css);
				program.name = `__svelte_${hash(rule)}`;

				transitionManager.addRule(rule, program.name);

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			animation.program = program;
			animation.pending = null;
		},

		update: now => {
			const p = now - program.start;
			const t = program.a + program.delta * ease(p / program.duration);
			if (info.tick) info.tick(t, 1 - t);
		},

		done() {
			if (info.tick) info.tick(1, 0);
			animation.stop();
		},

		stop() {
			if (info.css) transitionManager.deleteRule(node, program.name);
			animation.running = false;
		}
	};

	transitionManager.add(animation);

	if (info.tick) info.tick(0, 1);

	if (delay) {
		if (info.css) node.style.cssText += info.css(0, 1);
	} else {
		animation.start();
	}

	return animation;
}

function fixPosition(node) {
	const style = getComputedStyle(node);

	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		const b = node.getBoundingClientRect();

		if (a.left !== b.left || a.top !== b.top) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
		}
	}
}

function handlePromise(promise, info) {
	var token = info.token = {};

	function update(type, index, key, value) {
		if (info.token !== token) return;

		info.resolved = key && { [key]: value };

		const child_ctx = assign(assign({}, info.ctx), info.resolved);
		const block = type && (info.current = type)(info.component, child_ctx);

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						groupOutros();
						block.o(() => {
							block.d(1);
							info.blocks[i] = null;
						});
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			block[block.i ? 'i' : 'm'](info.mount(), info.anchor);

			info.component.root.set({}); // flush any handlers that were created
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;
	}

	if (isPromise(promise)) {
		promise.then(value => {
			update(info.then, 1, info.value, value);
		}, error => {
			update(info.catch, 2, info.error, error);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = { [info.value]: promise };
	}
}

function destroyBlock(block, lookup) {
	block.d(1);
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function fixAndOutroAndDestroyBlock(block, lookup) {
	block.f();
	outroAndDestroyBlock(block, lookup);
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, intro_method, next, get_context) {
	var o = old_blocks.length;
	var n = list.length;

	var i = o;
	var old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;

	var new_blocks = [];
	var new_lookup = {};
	var deltas = {};

	var i = n;
	while (i--) {
		var child_ctx = get_context(ctx, list, i);
		var key = get_key(child_ctx);
		var block = lookup[key];

		if (!block) {
			block = create_each_block(component, key, child_ctx);
			block.c();
		} else if (dynamic) {
			block.p(changed, child_ctx);
		}

		new_blocks[i] = new_lookup[key] = block;

		if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
	}

	var will_move = {};
	var did_move = {};

	function insert(block) {
		block[intro_method](node, next);
		lookup[block.key] = block;
		next = block.first;
		n--;
	}

	while (o && n) {
		var new_block = new_blocks[n - 1];
		var old_block = old_blocks[o - 1];
		var new_key = new_block.key;
		var old_key = old_block.key;

		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		}

		else if (!new_lookup[old_key]) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		}

		else if (!lookup[new_key] || will_move[new_key]) {
			insert(new_block);
		}

		else if (did_move[old_key]) {
			o--;

		} else if (deltas[new_key] > deltas[old_key]) {
			did_move[new_key] = true;
			insert(new_block);

		} else {
			will_move[old_key] = true;
			o--;
		}
	}

	while (o--) {
		var old_block = old_blocks[o];
		if (!new_lookup[old_block.key]) destroy(old_block, lookup);
	}

	while (n) insert(new_blocks[n - 1]);

	return new_blocks;
}

function measure(blocks) {
	const rects = {};
	let i = blocks.length;
	while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
	return rects;
}

function animate(blocks, rects, fn, params) {
	let i = blocks.length;
	while (i--) {
		const block = blocks[i];
		const from = rects[block.key];

		if (!from) continue;
		const to = block.node.getBoundingClientRect();

		if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) continue;


	}
}

function getSpreadUpdate(levels, updates) {
	var update = {};

	var to_null_out = {};
	var accounted_for = {};

	var i = levels.length;
	while (i--) {
		var o = levels[i];
		var n = updates[i];

		if (n) {
			for (var key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}

			for (var key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}

			levels[i] = n;
		} else {
			for (var key in o) {
				accounted_for[key] = 1;
			}
		}
	}

	for (var key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}

	return update;
}

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
const invalidAttributeNameCharacter = /[\s'">\/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;

function spread(args) {
	const attributes = Object.assign({}, ...args);
	let str = '';

	Object.keys(attributes).forEach(name => {
		if (invalidAttributeNameCharacter.test(name)) return;

		const value = attributes[name];
		if (value === undefined) return;
		if (value === true) str += " " + name;

		const escaped = String(value)
			.replace(/"/g, '&#34;')
			.replace(/'/g, '&#39;');

		str += " " + name + "=" + JSON.stringify(escaped);
	});

	return str;
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(assign(items[i], i));
	}
	return str;
}

const missingComponent = {
	_render: () => ''
};

function validateSsrComponent(component, name) {
	if (!component || !component._render) {
		if (name === 'svelte:component') name += 'this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function _differsImmutable(a, b) {
	return a != a ? b == b : a !== b;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			try {
				handler.__calling = true;
				handler.call(this, data);
			} finally {
				handler.__calling = false;
			}
		}
	}
}

function get() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = options.store || component.root.store;
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function run(fn) {
	fn();
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy,
	get,
	fire,
	on,
	set,
	_recompute: noop,
	_set,
	_mount,
	_differs
};

var protoDev = {
	destroy: destroyDev,
	get,
	fire,
	on,
	set: setDev,
	_recompute: noop,
	_set,
	_mount,
	_differs
};




/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sapper_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__sapper__/client.js */ "./__sapper__/client.js");


_sapper_client_js__WEBPACK_IMPORTED_MODULE_0__["start"]({
	target: document.querySelector('#sapper')
});


/***/ }),

/***/ "./src/routes/_error.html":
/*!********************************!*\
  !*** ./src/routes/_error.html ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* src/routes/_error.html generated by Svelte v2.9.9 */


const file = "src/routes/_error.html";

function create_main_fragment(component, ctx) {
	var title_value, text, h1, text_1, text_2, p, text_3_value = ctx.error.message, text_3;

	document.title = title_value = ctx.status;

	return {
		c: function create() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(ctx.status);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(text_3_value);
			this.h()
		},

		l: function claim(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "P", {}, false);
			var p_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(p_nodes, text_3_value);
			p_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h1, file, 4, 0, 56);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(p, file, 6, 0, 75);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_1, h1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_2, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(p, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_3, p);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				text_1.data = ctx.status;
			}

			if ((changed.error) && text_3_value !== (text_3_value = ctx.error.message)) {
				text_3.data = text_3_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_2);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(p);
			}
		}
	};
}

function Error(options) {
	this._debugName = '<Error>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	if (!('status' in this._state)) console.warn("<Error> was created without expected data property 'status'");
	if (!('error' in this._state)) console.warn("<Error> was created without expected data property 'error'");
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Error.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Error.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Error = register("src/routes/_error.html", Error);
	} else {
		// hot update
		Error = reload("src/routes/_error.html", Error);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Error);


/***/ }),

/***/ "./src/routes/_layout.html":
/*!*********************************!*\
  !*** ./src/routes/_layout.html ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* harmony import */ var _components_Nav_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Nav.html */ "./components/Nav.html");
/* harmony import */ var _components_LoadingBar_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoadingBar.html */ "./components/LoadingBar.html");
/* src/routes/_layout.html generated by Svelte v2.9.9 */




function oncreate() {
  (function(f, a, t, h, o, m){
    a[h]=a[h]||function(){
      (a[h].q=a[h].q||[]).push(arguments)
    };
    o=f.createElement('script'),
    m=f.getElementsByTagName('script')[0];
    o.async=1; o.src=t; o.id='fathom-script';
    m.parentNode.insertBefore(o,m)
  })(document, window, '//analytics.yalepaprika.com/tracker.js', 'fathom');
  fathom('trackPageview');
};

const file = "src/routes/_layout.html";

function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-17noc30-style';
	style.textContent = "main.svelte-17noc30{min-height:100vh}#background.svelte-17noc30{height:100vh;z-index:-1;background:linear-gradient(\n      to top,\n      hsla(16, 83%, 54%, 0) 0%,\n      hsla(16, 83%, 54%, 0.262) 19%,\n      hsla(16, 83%, 54%, 0.459) 34%,\n      hsla(16, 83%, 54%, 0.618) 47%,\n      hsla(16, 83%, 54%, 0.722) 56.5%,\n      hsla(16, 83%, 54%, 0.806) 65%,\n      hsla(16, 83%, 54%, 0.874) 73%,\n      hsla(16, 83%, 54%, 0.925) 80.2%,\n      hsla(16, 83%, 54%, 0.958) 86.1%,\n      hsla(16, 83%, 54%, 0.979) 91%,\n      hsla(16, 83%, 54%, 0.992) 95.2%,\n      hsla(16, 83%, 54%, 0.998) 98.2%,\n      hsla(16, 83%, 54%, 1) 100%\n    )}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5odG1sIiwic291cmNlcyI6WyJfbGF5b3V0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiPE5hdiBzZWdtZW50PXtjaGlsZC5zZWdtZW50fS8+XG5cbnsjaWYgcHJlbG9hZGluZ31cbjxMb2FkaW5nQmFyLz5cbnsvaWZ9XG5cbjxtYWluIGNsYXNzPVwicHQ0IHBiMSBweDEgcHNyXCI+XG4gIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCIgY2xhc3M9XCJwc2YgdDAgbDAgcjBcIj48L2Rpdj5cbiAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17Y2hpbGQuY29tcG9uZW50fSB7Li4uY2hpbGQucHJvcHN9Lz5cbjwvbWFpbj5cblxuPHN0eWxlPlxuICBtYWluIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAjYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byB0b3AsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMCkgMCUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC4yNjIpIDE5JSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjQ1OSkgMzQlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuNjE4KSA0NyUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC43MjIpIDU2LjUlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuODA2KSA2NSUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC44NzQpIDczJSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjkyNSkgODAuMiUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC45NTgpIDg2LjElLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuOTc5KSA5MSUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC45OTIpIDk1LjIlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuOTk4KSA5OC4yJSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAxKSAxMDAlXG4gICAgKTtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdjogJy4uLy4uL2NvbXBvbmVudHMvTmF2Lmh0bWwnLFxuICAgICAgTG9hZGluZ0JhcjogJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0Jhci5odG1sJ1xuICAgIH0sXG4gICAgb25jcmVhdGUoKSB7XG4gICAgICAoZnVuY3Rpb24oZiwgYSwgdCwgaCwgbywgbSl7XG4gICAgICAgIGFbaF09YVtoXXx8ZnVuY3Rpb24oKXtcbiAgICAgICAgICAoYVtoXS5xPWFbaF0ucXx8W10pLnB1c2goYXJndW1lbnRzKVxuICAgICAgICB9O1xuICAgICAgICBvPWYuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICAgIG09Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIG8uYXN5bmM9MTsgby5zcmM9dDsgby5pZD0nZmF0aG9tLXNjcmlwdCc7XG4gICAgICAgIG0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxtKVxuICAgICAgfSkoZG9jdW1lbnQsIHdpbmRvdywgJy8vYW5hbHl0aWNzLnlhbGVwYXByaWthLmNvbS90cmFja2VyLmpzJywgJ2ZhdGhvbScpO1xuICAgICAgZmF0aG9tKCd0cmFja1BhZ2V2aWV3Jyk7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlFLElBQUksZUFBQyxDQUFDLEFBQ0osVUFBVSxDQUFFLEtBQUssQUFDbkIsQ0FBQyxBQUNELFdBQVcsZUFBQyxDQUFDLEFBQ1gsTUFBTSxDQUFFLEtBQUssQ0FDYixPQUFPLENBQUUsRUFBRSxDQUNYLFVBQVUsQ0FBRTtNQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUM7TUFDUCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUN6QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUNoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUNoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUNoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUM5QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUNoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUNoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7S0FDM0IsQUFDSCxDQUFDIn0= */";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var text, text_1, main, div, text_2;

	var nav_initial_data = { segment: ctx.child.segment };
	var nav = new _components_Nav_html__WEBPACK_IMPORTED_MODULE_1__["default"]({
		root: component.root,
		store: component.store,
		data: nav_initial_data
	});

	var if_block = (ctx.preloading) && create_if_block(component, ctx);

	var switch_instance_spread_levels = [
		ctx.child.props
	];

	var switch_value = ctx.child.component;

	function switch_props(ctx) {
		var switch_instance_initial_data = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_initial_data = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(switch_instance_initial_data, switch_instance_spread_levels[i]);
		}
		return {
			root: component.root,
			store: component.store,
			data: switch_instance_initial_data
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			nav._fragment.c();
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			if (if_block) if_block.c();
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			main = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("main");
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			if (switch_instance) switch_instance._fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			nav._fragment.l(nodes);
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");
			if (if_block) if_block.l(nodes);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			main = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "MAIN", { class: true }, false);
			var main_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(main_nodes, "DIV", { id: true, class: true }, false);
			var div_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(main_nodes, "\n  ");
			if (switch_instance) switch_instance._fragment.l(main_nodes);
			main_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			div.id = "background";
			div.className = "psf t0 l0 r0 svelte-17noc30";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div, file, 7, 2, 103);
			main.className = "pt4 pb1 px1 psr svelte-17noc30";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(main, file, 6, 0, 70);
		},

		m: function mount(target, anchor) {
			nav._mount(target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(main, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div, main);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_2, main);

			if (switch_instance) {
				switch_instance._mount(main, null);
			}
		},

		p: function update(changed, ctx) {
			var nav_changes = {};
			if (changed.child) nav_changes.segment = ctx.child.segment;
			nav._set(nav_changes);

			if (ctx.preloading) {
				if (!if_block) {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(text_1.parentNode, text_1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			var switch_instance_changes = changed.child ? Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["getSpreadUpdate"])(switch_instance_spread_levels, [
				ctx.child.props
			]) : {};

			if (switch_value !== (switch_value = ctx.child.component)) {
				if (switch_instance) {
					switch_instance.destroy();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					switch_instance._fragment.c();
					switch_instance._mount(main, null);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance._set(switch_instance_changes);
			}
		},

		d: function destroy(detach) {
			nav.destroy(detach);
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
			}

			if (if_block) if_block.d(detach);
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(main);
			}

			if (switch_instance) switch_instance.destroy();
		}
	};
}

// (3:0) {#if preloading}
function create_if_block(component, ctx) {

	var loadingbar = new _components_LoadingBar_html__WEBPACK_IMPORTED_MODULE_2__["default"]({
		root: component.root,
		store: component.store
	});

	return {
		c: function create() {
			loadingbar._fragment.c();
		},

		l: function claim(nodes) {
			loadingbar._fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			loadingbar._mount(target, anchor);
		},

		d: function destroy(detach) {
			loadingbar.destroy(detach);
		}
	};
}

function Layout(options) {
	this._debugName = '<Layout>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	if (!('child' in this._state)) console.warn("<Layout> was created without expected data property 'child'");
	if (!('preloading' in this._state)) console.warn("<Layout> was created without expected data property 'preloading'");
	this._intro = true;

	if (!document.getElementById("svelte-17noc30-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assignTrue"])({}, this._state), current: this._state });
	});

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._beforecreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._aftercreate);
		this._lock = false;
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Layout.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Layout.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Layout = register("src/routes/_layout.html", Layout);
	} else {
		// hot update
		Layout = reload("src/routes/_layout.html", Layout);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX19zYXBwZXJfXy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nQmFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuaHRtbCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmVsdGUtZGV2LWhlbHBlci9saWIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1kZXYtaGVscGVyL2xpYi9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZlbHRlLWxvYWRlci9saWIvaG90LWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9fZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL19sYXlvdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU8sS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHLEVBQUU7Ozs7c0ZBQ2hDLE9BQU8sS0FBSyxTQUFTLEdBQUcsS0FBSyxHQUFHLEVBQUU7Ozs7c0ZBQ2xDLE9BQU8sS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLEVBQUU7Ozs7a0ZBVDFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixxQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDelBBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzZEOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QzFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO0FBQzdDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSx3Q0FBd0MsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzRSxFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozt1Q0F0RFMsS0FBSyxDQUFDLE9BQU87Ozs7Ozs7cUJBRXRCLFVBQVU7OztNQU1nQyxLQUFLLENBQUMsS0FBSzs7O3dCQUFoQyxLQUFLLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBUjNCLEtBQUssQ0FBQyxPQUFPOzs7V0FFdEIsVUFBVTs7Ozs7Ozs7Ozs7O1FBTWdDLEtBQUssQ0FBQyxLQUFLOzs7NENBQWhDLEtBQUssQ0FBQyxTQUFTIiwiZmlsZSI6IjgxYmRjMzU0MDQwZjI0OTQxYjNkL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdDtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjgxYmRjMzU0MDQwZjI0OTQxYjNkXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIvXCIgKyAoe1wiJHNsdWdcIjpcIiRzbHVnXCIsXCJhYm91dFwiOlwiYWJvdXRcIixcImFyY2hpdmVcIjpcImFyY2hpdmVcIixcImFyY2hpdmVfX2xheW91dFwiOlwiYXJjaGl2ZV9fbGF5b3V0XCIsXCJhcmNoaXZlX2FydGljbGVzXCI6XCJhcmNoaXZlX2FydGljbGVzXCIsXCJhcmNoaXZlX2NvbnRyaWJ1dG9yc1wiOlwiYXJjaGl2ZV9jb250cmlidXRvcnNcIixcImFyY2hpdmVfZm9sZHNcIjpcImFyY2hpdmVfZm9sZHNcIixcImFydGljbGVzXCI6XCJhcnRpY2xlc1wiLFwiYXJ0aWNsZXNfJHNsdWdcIjpcImFydGljbGVzXyRzbHVnXCIsXCJjb250cmlidXRvcnNcIjpcImNvbnRyaWJ1dG9yc1wiLFwiY29udHJpYnV0b3JzXyRzbHVnfmZvbGRzXyRzbHVnfmluZGV4XCI6XCJjb250cmlidXRvcnNfJHNsdWd+Zm9sZHNfJHNsdWd+aW5kZXhcIixcImNvbnRyaWJ1dG9yc18kc2x1Z1wiOlwiY29udHJpYnV0b3JzXyRzbHVnXCIsXCJmb2xkc18kc2x1Z1wiOlwiZm9sZHNfJHNsdWdcIixcImluZGV4XCI6XCJpbmRleFwiLFwic3VwcG9ydFwiOlwic3VwcG9ydFwiLFwidmVuZG9yc35mb2xkc1wiOlwidmVuZG9yc35mb2xkc1wiLFwiZm9sZHNcIjpcImZvbGRzXCIsXCJ2ZW5kb3JzfnNlYXJjaFwiOlwidmVuZG9yc35zZWFyY2hcIixcInNlYXJjaFwiOlwic2VhcmNoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsgY2h1bmtJZCArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJjbGllbnQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2NsaWVudC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsaWVudC5qc1wiKTtcbiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmltcG9ydCBSb290Q29tcG9uZW50IGZyb20gJy4uL3NyYy9yb3V0ZXMvX2xheW91dC5odG1sJztcbmltcG9ydCBFcnJvckNvbXBvbmVudCBmcm9tICcuLi9zcmMvcm91dGVzL19lcnJvci5odG1sJztcblxuZnVuY3Rpb24gZ290byhocmVmLCBvcHRzID0geyByZXBsYWNlU3RhdGU6IGZhbHNlIH0pIHtcbiAgICBjb25zdCB0YXJnZXQkJDEgPSBzZWxlY3Rfcm91dGUobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG4gICAgaWYgKHRhcmdldCQkMSkge1xuICAgICAgICBfaGlzdG9yeVtvcHRzLnJlcGxhY2VTdGF0ZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKHsgaWQ6IGNpZCB9LCAnJywgaHJlZik7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0ZSh0YXJnZXQkJDEsIG51bGwpLnRoZW4oKCkgPT4geyB9KTtcbiAgICB9XG4gICAgbG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGYgPT4geyB9KTsgLy8gbmV2ZXIgcmVzb2x2ZXNcbn1cblxuY29uc3QgaWdub3JlID0gWy9eXFwvaW5kZXguanNvbiQvLCAvXlxcL2xhc3QtbW9kaWZpZWQuanNvbiQvLCAvXlxcL2NvbnRyaWJ1dG9ycy5qc29uJC8sIC9eXFwvY29udHJpYnV0b3JzXFwvKFteXFwvXSs/KS5qc29uJC8sIC9eXFwvc3VwcG9ydC5qc29uJC8sIC9eXFwvc2VhcmNoLmpzb24kLywgL15cXC9hYm91dC5qc29uJC8sIC9eXFwvYXJ0aWNsZXMuanNvbiQvLCAvXlxcL2FydGljbGVzXFwvKFteXFwvXSs/KS5qc29uJC8sIC9eXFwvZm9sZHMuanNvbiQvLCAvXlxcL2ZvbGRzXFwvKFteXFwvXSs/KS5qc29uJC9dO1xuY29uc3QgY29tcG9uZW50cyA9IFtcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleFwiICovIFwiLi4vc3JjL3JvdXRlcy9pbmRleC5odG1sXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6aW5kZXguaHRtbF9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb250cmlidXRvcnNcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvY29udHJpYnV0b3JzL2luZGV4Lmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpjb250cmlidXRvcnMvaW5kZXguaHRtbF9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb250cmlidXRvcnNfJHNsdWdcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvY29udHJpYnV0b3JzL1tzbHVnXS5odG1sXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6Y29udHJpYnV0b3JzL1tzbHVnXS5odG1sX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFydGljbGVzXCIgKi8gXCIuLi9zcmMvcm91dGVzL2FydGljbGVzL2luZGV4Lmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphcnRpY2xlcy9pbmRleC5odG1sX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFydGljbGVzXyRzbHVnXCIgKi8gXCIuLi9zcmMvcm91dGVzL2FydGljbGVzL1tzbHVnXS5odG1sXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YXJ0aWNsZXMvW3NsdWddLmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJjaGl2ZV9fbGF5b3V0XCIgKi8gXCIuLi9zcmMvcm91dGVzL2FyY2hpdmUvX2xheW91dC5odG1sXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YXJjaGl2ZS9fbGF5b3V0Lmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJjaGl2ZVwiICovIFwiLi4vc3JjL3JvdXRlcy9hcmNoaXZlL2luZGV4Lmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphcmNoaXZlL2luZGV4Lmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJjaGl2ZV9jb250cmlidXRvcnNcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvYXJjaGl2ZS9jb250cmlidXRvcnMuaHRtbFwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmFyY2hpdmUvY29udHJpYnV0b3JzLmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJjaGl2ZV9hcnRpY2xlc1wiICovIFwiLi4vc3JjL3JvdXRlcy9hcmNoaXZlL2FydGljbGVzLmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphcmNoaXZlL2FydGljbGVzLmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJjaGl2ZV9mb2xkc1wiICovIFwiLi4vc3JjL3JvdXRlcy9hcmNoaXZlL2ZvbGRzLmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjphcmNoaXZlL2ZvbGRzLmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3VwcG9ydFwiICovIFwiLi4vc3JjL3JvdXRlcy9zdXBwb3J0Lmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpzdXBwb3J0Lmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2VhcmNoXCIgKi8gXCIuLi9zcmMvcm91dGVzL3NlYXJjaC5odG1sXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6c2VhcmNoLmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWJvdXRcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvYWJvdXQuaHRtbFwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmFib3V0Lmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZm9sZHNcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvZm9sZHMvaW5kZXguaHRtbFwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmZvbGRzL2luZGV4Lmh0bWxfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZm9sZHNfJHNsdWdcIiAqLyBcIi4uL3NyYy9yb3V0ZXMvZm9sZHMvW3NsdWddLmh0bWxcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpmb2xkcy9bc2x1Z10uaHRtbF9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCIkc2x1Z1wiICovIFwiLi4vc3JjL3JvdXRlcy9bc2x1Z10uaHRtbFwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOltzbHVnXS5odG1sX19cIlxuXHR9XG5dO1xuY29uc3QgcGFnZXMgPSAoZCA9PiBbXG5cdHtcblx0XHQvLyBpbmRleC5odG1sXG5cdFx0cGF0dGVybjogL15cXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogMCB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBjb250cmlidXRvcnMvaW5kZXguaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvY29udHJpYnV0b3JzXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHRudWxsLFxuXHRcdFx0eyBpOiAxIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGNvbnRyaWJ1dG9ycy9bc2x1Z10uaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvY29udHJpYnV0b3JzXFwvKFteXFwvXSs/KVxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMiwgcGFyYW1zOiBtYXRjaCA9PiAoeyBzbHVnOiBkKG1hdGNoWzFdKSB9KSB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBhcnRpY2xlcy9pbmRleC5odG1sXG5cdFx0cGF0dGVybjogL15cXC9hcnRpY2xlc1xcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMyB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBhcnRpY2xlcy9bc2x1Z10uaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvYXJ0aWNsZXNcXC8oW15cXC9dKz8pXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHRudWxsLFxuXHRcdFx0eyBpOiA0LCBwYXJhbXM6IG1hdGNoID0+ICh7IHNsdWc6IGQobWF0Y2hbMV0pIH0pIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGFyY2hpdmUvaW5kZXguaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvYXJjaGl2ZVxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiA1IH0sXG5cdFx0XHR7IGk6IDYgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYXJjaGl2ZS9jb250cmlidXRvcnMuaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvYXJjaGl2ZVxcL2NvbnRyaWJ1dG9yc1xcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiA1IH0sXG5cdFx0XHR7IGk6IDcgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYXJjaGl2ZS9hcnRpY2xlcy5odG1sXG5cdFx0cGF0dGVybjogL15cXC9hcmNoaXZlXFwvYXJ0aWNsZXNcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogNSB9LFxuXHRcdFx0eyBpOiA4IH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGFyY2hpdmUvZm9sZHMuaHRtbFxuXHRcdHBhdHRlcm46IC9eXFwvYXJjaGl2ZVxcL2ZvbGRzXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDUgfSxcblx0XHRcdHsgaTogOSB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBzdXBwb3J0Lmh0bWxcblx0XHRwYXR0ZXJuOiAvXlxcL3N1cHBvcnRcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogMTAgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gc2VhcmNoLmh0bWxcblx0XHRwYXR0ZXJuOiAvXlxcL3NlYXJjaFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAxMSB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBhYm91dC5odG1sXG5cdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAxMiB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBmb2xkcy9pbmRleC5odG1sXG5cdFx0cGF0dGVybjogL15cXC9mb2xkc1xcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMTMgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gZm9sZHMvW3NsdWddLmh0bWxcblx0XHRwYXR0ZXJuOiAvXlxcL2ZvbGRzXFwvKFteXFwvXSs/KVxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMTQsIHBhcmFtczogbWF0Y2ggPT4gKHsgc2x1ZzogZChtYXRjaFsxXSkgfSkgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gW3NsdWddLmh0bWxcblx0XHRwYXR0ZXJuOiAvXlxcLyhbXlxcL10rPylcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdHsgaTogMTUsIHBhcmFtczogbWF0Y2ggPT4gKHsgc2x1ZzogZChtYXRjaFsxXSkgfSkgfVxuXHRcdF1cblx0fVxuXSkoZGVjb2RlVVJJQ29tcG9uZW50KTtcbmxldCByZWFkeSA9IGZhbHNlO1xubGV0IHJvb3RfY29tcG9uZW50O1xubGV0IHNlZ21lbnRzID0gW107XG5sZXQgY3VycmVudF90b2tlbjtcbmxldCByb290X3ByZWxvYWQ7XG5sZXQgcm9vdF9kYXRhO1xuY29uc3Qgcm9vdF9wcm9wcyA9IHtcbiAgICBwYXRoOiBudWxsLFxuICAgIHBhcmFtczogbnVsbCxcbiAgICBxdWVyeTogbnVsbCxcbiAgICBjaGlsZDoge1xuICAgICAgICBzZWdtZW50OiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fVxuICAgIH1cbn07XG5sZXQgcHJlZmV0Y2hpbmcgPSBudWxsO1xuZnVuY3Rpb24gc2V0X3ByZWZldGNoaW5nKGhyZWYsIHByb21pc2UpIHtcbiAgICBwcmVmZXRjaGluZyA9IHsgaHJlZiwgcHJvbWlzZSB9O1xufVxubGV0IHN0b3JlO1xuZnVuY3Rpb24gc2V0X3N0b3JlKGZuKSB7XG4gICAgc3RvcmUgPSBmbihpbml0aWFsX2RhdGEuc3RvcmUpO1xufVxubGV0IHRhcmdldDtcbmZ1bmN0aW9uIHNldF90YXJnZXQoZWxlbWVudCkge1xuICAgIHRhcmdldCA9IGVsZW1lbnQ7XG59XG5sZXQgdWlkID0gMTtcbmZ1bmN0aW9uIHNldF91aWQobikge1xuICAgIHVpZCA9IG47XG59XG5sZXQgY2lkO1xuZnVuY3Rpb24gc2V0X2NpZChuKSB7XG4gICAgY2lkID0gbjtcbn1cbmNvbnN0IGluaXRpYWxfZGF0YSA9IHR5cGVvZiBfX1NBUFBFUl9fICE9PSAndW5kZWZpbmVkJyAmJiBfX1NBUFBFUl9fO1xuY29uc3QgX2hpc3RvcnkgPSB0eXBlb2YgaGlzdG9yeSAhPT0gJ3VuZGVmaW5lZCcgPyBoaXN0b3J5IDoge1xuICAgIHB1c2hTdGF0ZTogKHN0YXRlLCB0aXRsZSwgaHJlZikgPT4geyB9LFxuICAgIHJlcGxhY2VTdGF0ZTogKHN0YXRlLCB0aXRsZSwgaHJlZikgPT4geyB9LFxuICAgIHNjcm9sbFJlc3RvcmF0aW9uOiAnJ1xufTtcbmNvbnN0IHNjcm9sbF9oaXN0b3J5ID0ge307XG5mdW5jdGlvbiBzZWxlY3Rfcm91dGUodXJsKSB7XG4gICAgaWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbilcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKCF1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChpbml0aWFsX2RhdGEuYmFzZVVybCkpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHBhdGggPSB1cmwucGF0aG5hbWUuc2xpY2UoaW5pdGlhbF9kYXRhLmJhc2VVcmwubGVuZ3RoKTtcbiAgICAvLyBhdm9pZCBhY2NpZGVudGFsIGNsYXNoZXMgYmV0d2VlbiBzZXJ2ZXIgcm91dGVzIGFuZCBwYWdlc1xuICAgIGlmIChpZ25vcmUuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChwYXRoKSkpXG4gICAgICAgIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tpXTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBwYWdlLnBhdHRlcm4uZXhlYyhwYXRoKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgICAgICAgICAgaWYgKHVybC5zZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5mb3JFYWNoKHNlYXJjaFBhcmFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgWywga2V5LCB2YWx1ZV0gPSAvKFtePV0qKSg/Oj0oLiopKT8vLmV4ZWMoc2VhcmNoUGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVtkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSBkZWNvZGVVUklDb21wb25lbnQoKHZhbHVlIHx8ICcnKS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB1cmwsIHBhdGgsIHBhZ2UsIG1hdGNoLCBxdWVyeSB9O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2Nyb2xsX3N0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHNjcm9sbFgsXG4gICAgICAgIHk6IHNjcm9sbFlcbiAgICB9O1xufVxuZnVuY3Rpb24gbmF2aWdhdGUodGFyZ2V0LCBpZCwgbm9zY3JvbGwsIGhhc2gpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgICAgLy8gcG9wc3RhdGUgb3IgaW5pdGlhbCBuYXZpZ2F0aW9uXG4gICAgICAgIGNpZCA9IGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9zY3JvbGwgPSBzY3JvbGxfc3RhdGUoKTtcbiAgICAgICAgLy8gY2xpY2tlZCBvbiBhIGxpbmsuIHByZXNlcnZlIHNjcm9sbCBzdGF0ZVxuICAgICAgICBzY3JvbGxfaGlzdG9yeVtjaWRdID0gY3VycmVudF9zY3JvbGw7XG4gICAgICAgIGlkID0gY2lkID0gKyt1aWQ7XG4gICAgICAgIHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBub3Njcm9sbCA/IGN1cnJlbnRfc2Nyb2xsIDogeyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIGNpZCA9IGlkO1xuICAgIGlmIChyb290X2NvbXBvbmVudCkge1xuICAgICAgICByb290X2NvbXBvbmVudC5zZXQoeyBwcmVsb2FkaW5nOiB0cnVlIH0pO1xuICAgIH1cbiAgICBjb25zdCBsb2FkZWQgPSBwcmVmZXRjaGluZyAmJiBwcmVmZXRjaGluZy5ocmVmID09PSB0YXJnZXQudXJsLmhyZWYgP1xuICAgICAgICBwcmVmZXRjaGluZy5wcm9taXNlIDpcbiAgICAgICAgcHJlcGFyZV9wYWdlKHRhcmdldCk7XG4gICAgcHJlZmV0Y2hpbmcgPSBudWxsO1xuICAgIGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuICAgIHJldHVybiBsb2FkZWQudGhlbigoeyByZWRpcmVjdCwgZGF0YSwgbnVsbGFibGVfZGVwdGggfSkgPT4ge1xuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBnb3RvKHJlZGlyZWN0LmxvY2F0aW9uLCB7IHJlcGxhY2VTdGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoZGF0YSwgbnVsbGFibGVfZGVwdGgsIHNjcm9sbF9oaXN0b3J5W2lkXSwgbm9zY3JvbGwsIGhhc2gsIHRva2VuKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlcihkYXRhLCBudWxsYWJsZV9kZXB0aCwgc2Nyb2xsLCBub3Njcm9sbCwgaGFzaCwgdG9rZW4pIHtcbiAgICBpZiAoY3VycmVudF90b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAocm9vdF9jb21wb25lbnQpIHtcbiAgICAgICAgLy8gZmlyc3QsIGNsZWFyIG91dCBoaWdoZXN0LWxldmVsIHJvb3QgY29tcG9uZW50XG4gICAgICAgIGxldCBsZXZlbCA9IGRhdGEuY2hpbGQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVsbGFibGVfZGVwdGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IG51bGxhYmxlX2RlcHRoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbC5wcm9wcy5jaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNvbXBvbmVudCB9ID0gbGV2ZWw7XG4gICAgICAgIGxldmVsLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHJvb3RfY29tcG9uZW50LnNldCh7IGNoaWxkOiBkYXRhLmNoaWxkIH0pO1xuICAgICAgICAvLyB0aGVuIHJlbmRlciBuZXcgc3R1ZmZcbiAgICAgICAgbGV2ZWwuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICByb290X2NvbXBvbmVudC5zZXQoZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBmaXJzdCBsb2FkIOKAlCByZW1vdmUgU1NSJ2QgPGhlYWQ+IGNvbnRlbnRzXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlci1oZWFkLXN0YXJ0Jyk7XG4gICAgICAgIGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXItaGVhZC1lbmQnKTtcbiAgICAgICAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgICAgICAgICAgd2hpbGUgKHN0YXJ0Lm5leHRTaWJsaW5nICE9PSBlbmQpXG4gICAgICAgICAgICAgICAgZGV0YWNoKHN0YXJ0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIGRldGFjaChzdGFydCk7XG4gICAgICAgICAgICBkZXRhY2goZW5kKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHJvb3RfZGF0YSk7XG4gICAgICAgIHJvb3RfY29tcG9uZW50ID0gbmV3IFJvb3RDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgaHlkcmF0ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFub3Njcm9sbCkge1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGlzIGFuIGVsZW1lbnQgaWQgKGZyb20gYSBoYXNoKSwgd2UgbmVlZCB0byBjb21wdXRlIHkuXG4gICAgICAgICAgICBjb25zdCBkZWVwX2xpbmtlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaCk7XG4gICAgICAgICAgICBpZiAoZGVlcF9saW5rZWQpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGRlZXBfbGlua2VkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbDtcbiAgICAgICAgaWYgKHNjcm9sbClcbiAgICAgICAgICAgIHNjcm9sbFRvKHNjcm9sbC54LCBzY3JvbGwueSk7XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24ocm9vdF9wcm9wcywgZGF0YSk7XG4gICAgcmVhZHkgPSB0cnVlO1xufVxuZnVuY3Rpb24gcHJlcGFyZV9wYWdlKHRhcmdldCkge1xuICAgIGNvbnN0IHsgcGFnZSwgcGF0aCwgcXVlcnkgfSA9IHRhcmdldDtcbiAgICBjb25zdCBuZXdfc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGxldCBjaGFuZ2VkX2Zyb20gPSAwO1xuICAgIHdoaWxlIChzZWdtZW50c1tjaGFuZ2VkX2Zyb21dICYmXG4gICAgICAgIG5ld19zZWdtZW50c1tjaGFuZ2VkX2Zyb21dICYmXG4gICAgICAgIHNlZ21lbnRzW2NoYW5nZWRfZnJvbV0gPT09IG5ld19zZWdtZW50c1tjaGFuZ2VkX2Zyb21dKVxuICAgICAgICBjaGFuZ2VkX2Zyb20gKz0gMTtcbiAgICBsZXQgcmVkaXJlY3QgPSBudWxsO1xuICAgIGxldCBlcnJvciA9IG51bGw7XG4gICAgY29uc3QgcHJlbG9hZF9jb250ZXh0ID0ge1xuICAgICAgICBzdG9yZSxcbiAgICAgICAgZmV0Y2g6ICh1cmwsIG9wdHMpID0+IGZldGNoKHVybCwgb3B0cyksXG4gICAgICAgIHJlZGlyZWN0OiAoc3RhdHVzQ29kZSwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZGlyZWN0ID0geyBzdGF0dXNDb2RlLCBsb2NhdGlvbiB9O1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKHN0YXR1c0NvZGUsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGVycm9yID0geyBzdGF0dXNDb2RlLCBtZXNzYWdlIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmICghcm9vdF9wcmVsb2FkKSB7XG4gICAgICAgIHJvb3RfcHJlbG9hZCA9IFJvb3RDb21wb25lbnQucHJlbG9hZFxuICAgICAgICAgICAgPyBpbml0aWFsX2RhdGEucHJlbG9hZGVkWzBdIHx8IFJvb3RDb21wb25lbnQucHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDoge307XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYWdlLnBhcnRzLm1hcCgocGFydCwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNoYW5nZWRfZnJvbSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIXBhcnQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSkudGhlbihDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxID0ge1xuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKHRhcmdldC5tYXRjaCkgOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBwcmVsb2FkZWQ7XG4gICAgICAgICAgICBpZiAocmVhZHkgfHwgIWluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZGVkID0gQ29tcG9uZW50LnByZWxvYWRcbiAgICAgICAgICAgICAgICAgICAgPyBDb21wb25lbnQucHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwgcmVxKVxuICAgICAgICAgICAgICAgICAgICA6IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZGVkID0gaW5pdGlhbF9kYXRhLnByZWxvYWRlZFtpICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByZWxvYWRlZCkudGhlbihwcmVsb2FkZWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IENvbXBvbmVudCwgcHJlbG9hZGVkIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSkpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGVycm9yID0geyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyciB9O1xuICAgICAgICByZXR1cm4gW107XG4gICAgfSkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgaWYgKHJvb3RfZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJvb3RfcHJlbG9hZCkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdF9kYXRhID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVkaXJlY3QgfTtcbiAgICAgICAgfVxuICAgICAgICBzZWdtZW50cyA9IG5ld19zZWdtZW50cztcbiAgICAgICAgY29uc3QgZ2V0X3BhcmFtcyA9IHBhZ2UucGFydHNbcGFnZS5wYXJ0cy5sZW5ndGggLSAxXS5wYXJhbXMgfHwgKCgpID0+ICh7fSkpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBnZXRfcGFyYW1zKHRhcmdldC5tYXRjaCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSAnc3RyaW5nJyA/IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSA6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXNDb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7IHBhdGgsIHF1ZXJ5LCBlcnJvcjogbnVsbCwgc3RhdHVzOiBudWxsIH07XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcHJlbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZDogT2JqZWN0LmFzc2lnbih7fSwgcm9vdF9wcm9wcy5jaGlsZCwge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQ6IHNlZ21lbnRzWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBpZiAoY2hhbmdlZChxdWVyeSwgcm9vdF9wcm9wcy5xdWVyeSkpXG4gICAgICAgICAgICBkYXRhLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIGlmIChjaGFuZ2VkKHBhcmFtcywgcm9vdF9wcm9wcy5wYXJhbXMpKVxuICAgICAgICAgICAgZGF0YS5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGxldCBsZXZlbCA9IGRhdGEuY2hpbGQ7XG4gICAgICAgIGxldCBudWxsYWJsZV9kZXB0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5wYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhZ2UucGFydHNbaV07XG4gICAgICAgICAgICBpZiAoIXBhcnQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBnZXRfcGFyYW1zID0gcGFydC5wYXJhbXMgfHwgKCgpID0+ICh7fSkpO1xuICAgICAgICAgICAgaWYgKGkgPCBjaGFuZ2VkX2Zyb20pIHtcbiAgICAgICAgICAgICAgICBsZXZlbC5wcm9wcy5wYXRoID0gcGF0aDtcbiAgICAgICAgICAgICAgICBsZXZlbC5wcm9wcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAgICAgICAgIGxldmVsLnByb3BzLmNoaWxkID0gT2JqZWN0LmFzc2lnbih7fSwgbGV2ZWwucHJvcHMuY2hpbGQpO1xuICAgICAgICAgICAgICAgIG51bGxhYmxlX2RlcHRoICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXZlbC5jb21wb25lbnQgPSByZXN1bHRzW2ldLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBsZXZlbC5wcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGxldmVsLnByb3BzLCBwcm9wcywge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGdldF9wYXJhbXModGFyZ2V0Lm1hdGNoKSxcbiAgICAgICAgICAgICAgICB9LCByZXN1bHRzW2ldLnByZWxvYWRlZCk7XG4gICAgICAgICAgICAgICAgbGV2ZWwucHJvcHMuY2hpbGQgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsID0gbGV2ZWwucHJvcHMuY2hpbGQ7XG4gICAgICAgICAgICBsZXZlbC5zZWdtZW50ID0gc2VnbWVudHNbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRhdGEsIG51bGxhYmxlX2RlcHRoIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkX2NzcyhjaHVuaykge1xuICAgIGNvbnN0IGhyZWYgPSBgY2xpZW50LyR7Y2h1bmt9YDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tocmVmPVwiJHtocmVmfVwiXWApKVxuICAgICAgICByZXR1cm47XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWwsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgbGluay5vbmxvYWQgPSAoKSA9PiBmdWxmaWwoKTtcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgLy8gVE9ETyB0aGlzIGlzIHRlbXBvcmFyeSDigJQgb25jZSBwbGFjZWhvbGRlcnMgYXJlXG4gICAgLy8gYWx3YXlzIHJld3JpdHRlbiwgc2NyYXRjaCB0aGUgdGVybmFyeVxuICAgIGNvbnN0IHByb21pc2VzID0gKHR5cGVvZiBjb21wb25lbnQuY3NzID09PSAnc3RyaW5nJyA/IFtdIDogY29tcG9uZW50LmNzcy5tYXAobG9hZF9jc3MpKTtcbiAgICBwcm9taXNlcy51bnNoaWZ0KGNvbXBvbmVudC5qcygpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4odmFsdWVzID0+IHZhbHVlc1swXS5kZWZhdWx0KTtcbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gY2hhbmdlZChhLCBiKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKTtcbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goaHJlZikge1xuICAgIGNvbnN0IHRhcmdldCQkMSA9IHNlbGVjdF9yb3V0ZShuZXcgVVJMKGhyZWYsIGRvY3VtZW50LmJhc2VVUkkpKTtcbiAgICBpZiAodGFyZ2V0JCQxKSB7XG4gICAgICAgIGlmICghcHJlZmV0Y2hpbmcgfHwgaHJlZiAhPT0gcHJlZmV0Y2hpbmcuaHJlZikge1xuICAgICAgICAgICAgc2V0X3ByZWZldGNoaW5nKGhyZWYsIHByZXBhcmVfcGFnZSh0YXJnZXQkJDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJlZmV0Y2hpbmcucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KG9wdHMpIHtcbiAgICBpZiAoJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiBfaGlzdG9yeSkge1xuICAgICAgICBfaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgIH1cbiAgICBzZXRfdGFyZ2V0KG9wdHMudGFyZ2V0KTtcbiAgICBpZiAob3B0cy5zdG9yZSlcbiAgICAgICAgc2V0X3N0b3JlKG9wdHMuc3RvcmUpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlX2NsaWNrKTtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGhhbmRsZV9wb3BzdGF0ZSk7XG4gICAgLy8gcHJlZmV0Y2hcbiAgICBhZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdHJpZ2dlcl9wcmVmZXRjaCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlX21vdXNlbW92ZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGhhc2gsIGhyZWYgfSA9IGxvY2F0aW9uO1xuICAgICAgICBfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogdWlkIH0sICcnLCBocmVmKTtcbiAgICAgICAgaWYgKCFpbml0aWFsX2RhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCQkMSA9IHNlbGVjdF9yb3V0ZShuZXcgVVJMKGxvY2F0aW9uLmhyZWYpKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQkJDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRlKHRhcmdldCQkMSwgdWlkLCBmYWxzZSwgaGFzaCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmxldCBtb3VzZW1vdmVfdGltZW91dDtcbmZ1bmN0aW9uIGhhbmRsZV9tb3VzZW1vdmUoZXZlbnQpIHtcbiAgICBjbGVhclRpbWVvdXQobW91c2Vtb3ZlX3RpbWVvdXQpO1xuICAgIG1vdXNlbW92ZV90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpO1xuICAgIH0sIDIwKTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpIHtcbiAgICBjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoIWEgfHwgYS5yZWwgIT09ICdwcmVmZXRjaCcpXG4gICAgICAgIHJldHVybjtcbiAgICBwcmVmZXRjaChhLmhyZWYpO1xufVxuZnVuY3Rpb24gaGFuZGxlX2NsaWNrKGV2ZW50KSB7XG4gICAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9wYWdlLmpzXG4gICAgLy8gTUlUIGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanMjbGljZW5zZVxuICAgIGlmICh3aGljaChldmVudCkgIT09IDEpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoIWEpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIWEuaHJlZilcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGNoZWNrIGlmIGxpbmsgaXMgaW5zaWRlIGFuIHN2Z1xuICAgIC8vIGluIHRoaXMgY2FzZSwgYm90aCBocmVmIGFuZCB0YXJnZXQgYXJlIGFsd2F5cyBpbnNpZGUgYW4gb2JqZWN0XG4gICAgY29uc3Qgc3ZnID0gdHlwZW9mIGEuaHJlZiA9PT0gJ29iamVjdCcgJiYgYS5ocmVmLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTVkdBbmltYXRlZFN0cmluZyc7XG4gICAgY29uc3QgaHJlZiA9IFN0cmluZyhzdmcgPyBhLmhyZWYuYmFzZVZhbCA6IGEuaHJlZik7XG4gICAgaWYgKGhyZWYgPT09IGxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5oYXNoKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgaWYgdGFnIGhhc1xuICAgIC8vIDEuICdkb3dubG9hZCcgYXR0cmlidXRlXG4gICAgLy8gMi4gcmVsPSdleHRlcm5hbCcgYXR0cmlidXRlXG4gICAgaWYgKGEuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpIHx8IGEuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ2V4dGVybmFsJylcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIElnbm9yZSBpZiA8YT4gaGFzIGEgdGFyZ2V0XG4gICAgaWYgKHN2ZyA/IGEudGFyZ2V0LmJhc2VWYWwgOiBhLnRhcmdldClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZik7XG4gICAgLy8gRG9uJ3QgaGFuZGxlIGhhc2ggY2hhbmdlc1xuICAgIGlmICh1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lICYmIHVybC5zZWFyY2ggPT09IGxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldCQkMSA9IHNlbGVjdF9yb3V0ZSh1cmwpO1xuICAgIGlmICh0YXJnZXQkJDEpIHtcbiAgICAgICAgY29uc3Qgbm9zY3JvbGwgPSBhLmhhc0F0dHJpYnV0ZSgnc2FwcGVyLW5vc2Nyb2xsJyk7XG4gICAgICAgIG5hdmlnYXRlKHRhcmdldCQkMSwgbnVsbCwgbm9zY3JvbGwsIHVybC5oYXNoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX2hpc3RvcnkucHVzaFN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgdXJsLmhyZWYpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdoaWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50LndoaWNoID09PSBudWxsID8gZXZlbnQuYnV0dG9uIDogZXZlbnQud2hpY2g7XG59XG5mdW5jdGlvbiBmaW5kX2FuY2hvcihub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnQScpXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7IC8vIFNWRyA8YT4gZWxlbWVudHMgaGF2ZSBhIGxvd2VyY2FzZSBuYW1lXG4gICAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBoYW5kbGVfcG9wc3RhdGUoZXZlbnQpIHtcbiAgICBzY3JvbGxfaGlzdG9yeVtjaWRdID0gc2Nyb2xsX3N0YXRlKCk7XG4gICAgaWYgKGV2ZW50LnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IHRhcmdldCQkMSA9IHNlbGVjdF9yb3V0ZSh1cmwpO1xuICAgICAgICBpZiAodGFyZ2V0JCQxKSB7XG4gICAgICAgICAgICBuYXZpZ2F0ZSh0YXJnZXQkJDEsIGV2ZW50LnN0YXRlLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBoYXNoY2hhbmdlXG4gICAgICAgIHNldF91aWQodWlkICsgMSk7XG4gICAgICAgIHNldF9jaWQodWlkKTtcbiAgICAgICAgX2hpc3RvcnkucmVwbGFjZVN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgbG9jYXRpb24uaHJlZik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaFJvdXRlcyhwYXRobmFtZXMpIHtcbiAgICByZXR1cm4gcGFnZXNcbiAgICAgICAgLmZpbHRlcihyb3V0ZSA9PiB7XG4gICAgICAgIGlmICghcGF0aG5hbWVzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBwYXRobmFtZXMuc29tZShwYXRobmFtZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QocGF0aG5hbWUpKTtcbiAgICB9KVxuICAgICAgICAucmVkdWNlKChwcm9taXNlLCByb3V0ZSkgPT4gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJvdXRlLnBhcnRzLm1hcChwYXJ0ID0+IHBhcnQgJiYgbG9hZF9jb21wb25lbnQoY29tcG9uZW50c1twYXJ0LmldKSkpO1xuICAgIH0pLCBQcm9taXNlLnJlc29sdmUoKSk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0LCBnb3RvLCBwcmVmZXRjaCwgcHJlZmV0Y2hSb3V0ZXMgfTtcblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0aW1wb3J0KFwiL1VzZXJzL3NldGh0aG9tcHNvbi9jb2RlL3NhcHBlci9zYXBwZXItZGV2LWNsaWVudC5qc1wiKS50aGVuKGNsaWVudCA9PiB7XG5cdFx0Y2xpZW50LmNvbm5lY3QoMTAwMDApO1xuXHR9KTtcbn0iLCI8c3ZnIGNsYXNzPVwicHNmIHQwIGwwIHIwIHcxMDAgcGVuIHozIHt2aXNpYmxlID8gJyc6ICdkbid9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDE0IDMyIDE4XCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuICA8cGF0aCBmaWxsPVwiI2ViNWMyOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIgZD1cIk0yIDE0IFYxOCBINiBWMTR6XCI+XG4gICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJ0cmFuc2xhdGVcIiB2YWx1ZXM9XCIwIDA7IDI0IDA7IDAgMFwiIGR1cj1cIjJzXCIgYmVnaW49XCIwXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIga2V5U3BsaW5lcz1cIjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjhcIiBjYWxjTW9kZT1cInNwbGluZVwiIC8+XG4gIDwvcGF0aD5cbiAgPHBhdGggZmlsbD1cIiNlYjVjMjhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiIGQ9XCJNMCAxNCBWMTggSDggVjE0elwiPlxuICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwidHJhbnNsYXRlXCIgdmFsdWVzPVwiMCAwOyAyNCAwOyAwIDBcIiBkdXI9XCIyc1wiIGJlZ2luPVwiMC4xc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGtleVNwbGluZXM9XCIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44XCIgY2FsY01vZGU9XCJzcGxpbmVcIiAvPlxuICA8L3BhdGg+XG4gIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIiBkPVwiTTAgMTQgVjE4IEg4IFYxNHpcIj5cbiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInRyYW5zbGF0ZVwiIHZhbHVlcz1cIjAgMDsgMjQgMDsgMCAwXCIgZHVyPVwiMnNcIiBiZWdpbj1cIjAuMnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBrZXlTcGxpbmVzPVwiMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOFwiIGNhbGNNb2RlPVwic3BsaW5lXCIgLz5cbiAgPC9wYXRoPlxuPC9zdmc+XG5cbjxzdHlsZT5cbnN2ZyB7XG4gIGhlaWdodDogMXJlbTtcbn1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgb25jcmVhdGUoKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXQoeyB2aXNpYmxlOiB0cnVlIH0pXG4gICAgICB9LCAyNTApO1xuICAgIH0sXG4gICAgb25kZXN0cm95KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIjxoZWFkZXIgY2xhc3M9XCJ7aGlkZGVuID8gJ2hpZGRlbicgOiAnJ30gcHNmIGMxMiB1c24gdDAgbDAgcjAgeCB4dyBweDEgYmdjLXBhcHJpa2EgejFcIj5cbiAgPHVsIGNsYXNzPVwiYzEyIHNtLWM2IHBsMiBtYjBcIj5cbiAgICA8bGkgY2xhc3M9XCJkaSBwcjEge3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/ICdmc2knIDogJyd9XCI+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL1wiPlBhcHJpa2EhPC9hPjwvbGk+XG4gICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnZm9sZHMnID8gJ2ZzaScgOiAnJ31cIj48YSByZWw9cHJlZmV0Y2ggaHJlZj1cIi9mb2xkc1wiPkZvbGRzPC9hPjwvbGk+XG4gICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnYXJjaGl2ZScgPyAnZnNpJyA6ICcnfVwiPjxhIHJlbD1wcmVmZXRjaCBocmVmPVwiL2FyY2hpdmVcIj5BcmNoaXZlPC9hPjwvbGk+XG4gIDwvdWw+XG4gIDx1bCBjbGFzcz1cImMxMiBzbS1jNiBwbDIgbWIwXCI+XG4gICAgICA8bGkgY2xhc3M9XCJkaSBwcjEge3NlZ21lbnQgPT09ICdhYm91dCcgPyAnZnNpJyA6ICcnfVwiPjxhIHJlbD1wcmVmZXRjaCBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImRpIHByMSB7c2VnbWVudCA9PT0gJ3N1cHBvcnQnID8gJ2ZzaScgOiAnJ31cIj48YSByZWw9cHJlZmV0Y2ggaHJlZj1cIi9zdXBwb3J0XCI+U3VwcG9ydDwvYT48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiZGkgcHIxIHtzZWdtZW50ID09PSAnc2VhcmNoJyA/ICdmc2knIDogJyd9XCI+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaDwvYT48L2xpPlxuICA8L3VsPlxuPC9oZWFkZXI+XG5cbjxzdHlsZT5cbiAgaGVhZGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZTtcbiAgfVxuICBoZWFkZXIuaGlkZGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJhZiBmcm9tICdyYWYnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uY3JlYXRlICgpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gcmFmKFxuICAgICAgICBmdW5jdGlvbiB0aWNrICgpIHtcbiAgICAgICAgICB2YXIgeyBwb3NpdGlvbiB9ID0gdGhpcy5nZXQoKVxuICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gd2luZG93LnNjcm9sbFkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0UG9zID0gcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuc2V0KHtwb3NpdGlvbjogd2luZG93LnNjcm9sbFkgfSlcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBsYXN0UG9zID4gd2luZG93LnNjcm9sbFlcbiAgICAgICAgICAgIGlmIChhY3RpdmUgfHwgd2luZG93LnNjcm9sbFkgPCAxMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXQoeyBoaWRkZW46IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldCh7IGhpZGRlbjogdHJ1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByYWYodGljay5iaW5kKHRoaXMpKVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgIClcbiAgICB9LFxuICAgIG9uZGVzdHJveSAoKSB7XG4gICAgICByYWYuY2FuY2VsKHRoaXMuYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyZm9ybWFuY2Utbm93LmpzLm1hcFxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICBvYmplY3QgPSByb290O1xuICB9XG4gIG9iamVjdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgb2JqZWN0LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG4iLCJpbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmxldCBwcm94eU9wdGlvbnMgPSB7XG4gIG5vUHJlc2VydmVTdGF0ZTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKGlkKSB7XG4gIGNvbnN0IHBvc2l4SUQgPSBpZC5yZXBsYWNlKC9bL1xcXFxdL2csICcvJyk7XG4gIGNvbnN0IG5hbWUgPSBwb3NpeElELnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpO1xuICByZXR1cm4gYDwke2NhcGl0YWxpemUobmFtZSl9PmA7XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3RhcnQobXNnKSB7XG4gIGNvbnNvbGUuZ3JvdXAgJiYgY29uc29sZS5ncm91cChtc2cpO1xufVxuXG5mdW5jdGlvbiBncm91cEVuZCgpIHtcbiAgY29uc29sZS5ncm91cEVuZCAmJiBjb25zb2xlLmdyb3VwRW5kKCk7XG59XG5cblxuZXhwb3J0IHsgUmVnaXN0cnkgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShfb3B0aW9ucykge1xuICBwcm94eU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHByb3h5T3B0aW9ucywgX29wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKCkge1xuICByZXR1cm4gcHJveHlPcHRpb25zO1xufVxuXG4vKlxuY3JlYXRlcyBhIHByb3h5IG9iamVjdCB0aGF0XG5kZWNvcmF0ZXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCB3aXRoIHRyYWNrZXJzXG5hbmQgZW5zdXJlcyByZXNvbHV0aW9uIHRvIHRoZVxubGF0ZXN0IHZlcnNpb24gb2YgdGhlIGNvbXBvbmVudFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eShpZCkge1xuICBjb25zdCBoYW5kbGVkTWV0aG9kcyA9ICdfbW91bnQsX3VubW91bnQsZGVzdHJveScuc3BsaXQoJywnKTtcbiAgY29uc3QgZm9yd2FyZGVkTWV0aG9kcyA9ICdnZXQsZmlyZSxvYnNlcnZlLG9uLHNldCx0ZWFyZG93bixfcmVjb21wdXRlLF9zZXQsX2JpbmQnLnNwbGl0KCcsJyk7XG4gIGNsYXNzIHByb3h5Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIHRoaXMuX19tb3VudHBvaW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19hbmNob3IgPSBudWxsO1xuICAgICAgdGhpcy5fX2luc2VydGlvblBvaW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19tb3VudGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3JlZ2lzdGVyKG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9kZWJ1Z05hbWUgPSB0aGlzLnByb3h5VGFyZ2V0Ll9kZWJ1Z05hbWUgfHwgZ2V0RGVidWdOYW1lKHRoaXMuaWQpO1xuXG4gICAgICAvLyAtLS0tIGZvcndhcmRlZCBtZXRob2RzIC0tLS1cbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgZm9yd2FyZGVkTWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICBzZWxmW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5wcm94eVRhcmdldFttZXRob2RdLmFwcGx5KHNlbGYucHJveHlUYXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIC8vIC0tLS0gRU5EIGZvcndhcmRlZCBtZXRob2RzIC0tLS1cbiAgICB9XG5cbiAgICAvLyAtLS0tIGF1Z21lbnRlZCBtZXRob2RzIC0tLS1cblxuICAgIF9tb3VudCh0YXJnZXQsIGFuY2hvciwgaW5zZXJ0aW9uUG9pbnQpIHtcblxuICAgICAgdGhpcy5fX21vdW50cG9pbnQgPSB0YXJnZXQ7XG4gICAgICB0aGlzLl9fYW5jaG9yID0gYW5jaG9yO1xuXG4gICAgICBpZiAoaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fX2luc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdGhpcy5fX2luc2VydGlvblBvaW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLl9kZWJ1Z05hbWUpO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuX19pbnNlcnRpb25Qb2ludCwgYW5jaG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luc2VydGlvblBvaW50Ll9fY29tcG9uZW50X18gPSB0aGlzO1xuXG4gICAgICBhbmNob3IgPSB0aGlzLl9faW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG5cbiAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJyNkb2N1bWVudC1mcmFnbWVudCcgJiYgaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgICAgLy9oYW5kbGVzICM0IGJ5IGZvcmNpbmcgYSB0YXJnZXRcbiAgICAgICAgLy9pZiBvcmlnaW5hbCB0YXJnZXQgd2FzIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy5fX2luc2VydGlvblBvaW50LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19tb3VudGVkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHRoaXMucHJveHlUYXJnZXQuX21vdW50KHRhcmdldCwgYW5jaG9yKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRldGFjaCwga2VlcEluc2VydGlvblBvaW50KSB7XG5cbiAgICAgIFJlZ2lzdHJ5LmRlUmVnaXN0ZXJJbnN0YW5jZSh0aGlzKTtcblxuICAgICAgaWYgKCFrZWVwSW5zZXJ0aW9uUG9pbnQgJiYgdGhpcy5fX2luc2VydGlvblBvaW50KSB7XG4gICAgICAgIC8vZGVyZWYgZm9yIEdDIGJlZm9yZSByZW1vdmFsIG9mIG5vZGVcbiAgICAgICAgdGhpcy5fX2luc2VydGlvblBvaW50Ll9fY29tcG9uZW50X18gPSBudWxsO1xuICAgICAgICBjb25zdCBpcCA9IHRoaXMuX19pbnNlcnRpb25Qb2ludDtcbiAgICAgICAgaXAgJiYgaXAucGFyZW50Tm9kZSAmJiBpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnByb3h5VGFyZ2V0LmRlc3Ryb3koZGV0YWNoKTtcbiAgICB9XG5cbiAgICBfdW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX19tb3VudGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5wcm94eVRhcmdldC5fdW5tb3VudC5hcHBseSh0aGlzLnByb3h5VGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIC0tLS0gRU5EIGF1Z21lbnRlZCBtZXRob2RzIC0tLS1cblxuXG4gICAgLy8gLS0tLSBleHRyYSBtZXRob2RzIC0tLS1cblxuICAgIF9yZWdpc3RlcihvcHRpb25zKSB7XG5cbiAgICAgIGNvbnN0IHJlY29yZCA9IFJlZ2lzdHJ5LmdldCh0aGlzLmlkKTtcblxuICAgICAgdHJ5IHtcblxuICAgICAgICAvL3Jlc29sdmUgdG8gbGF0ZXN0IHZlcnNpb24gb2YgY29tcG9uZW50XG4gICAgICAgIHRoaXMucHJveHlUYXJnZXQgPSBuZXcgcmVjb3JkLmNvbXBvbmVudChvcHRpb25zKTtcblxuICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgIGNvbnN0IHJiID0gcmVjb3JkLnJvbGxiYWNrO1xuXG4gICAgICAgIGlmICghcmIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIGNvbnNvbGUud2FybignRnVsbCByZWxvYWQgcmVxdWlyZWQuIFBsZWFzZSBmaXggY29tcG9uZW50IGVycm9ycyBhbmQgcmVsb2FkIHRoZSB3aG9sZSBwYWdlJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBTdGFydCh0aGlzLl9kZWJ1Z05hbWUgKyAnIEVycm9ycycpO1xuXG4gICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgY29uc29sZS53YXJuKHRoaXMuX2RlYnVnTmFtZSArICcgY291bGQgbm90IGJlIGhvdC1sb2FkZWQgYmVjYXVzZSBpdCBoYXMgYW4gZXJyb3InKTtcblxuICAgICAgICAvL3Jlc29sdmUgdG8gcHJldmlvdXMgd29ya2luZyB2ZXJzaW9uIG9mIGNvbXBvbmVudFxuICAgICAgICB0aGlzLnByb3h5VGFyZ2V0ID0gbmV3IHJiKG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmluZm8oJyVjJyArIHRoaXMuX2RlYnVnTmFtZSArICcgcm9sbGVkIGJhY2sgdG8gcHJldmlvdXMgd29ya2luZyB2ZXJzaW9uJywgJ2NvbG9yOmdyZWVuJyk7XG5cbiAgICAgICAgLy9zZXQgbGF0ZXN0IHZlcnNpb24gYXMgdGhlIHJvbGxlZC1iYWNrIHZlcnNpb25cbiAgICAgICAgcmVjb3JkLmNvbXBvbmVudCA9IHJiO1xuXG4gICAgICAgIGdyb3VwRW5kKCk7XG5cbiAgICAgIH1cblxuICAgICAgUmVnaXN0cnkuc2V0KHRoaXMuaWQsIHJlY29yZCk7XG5cbiAgICAgIC8vcmVnaXN0ZXIgY3VycmVudCBpbnN0YW5jZSwgc28gdGhhdFxuICAgICAgLy93ZSBjYW4gcmUtcmVuZGVyIGl0IHdoZW4gcmVxdWlyZWRcbiAgICAgIFJlZ2lzdHJ5LnJlZ2lzdGVySW5zdGFuY2UodGhpcyk7XG5cbiAgICAgIC8vcHJveHkgY3VzdG9tIG1ldGhvZHNcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IG1ldGhvZHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2VsZi5wcm94eVRhcmdldCkpO1xuICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICBpZiAoIWhhbmRsZWRNZXRob2RzLmluY2x1ZGVzKG1ldGhvZCkgJiYgIWZvcndhcmRlZE1ldGhvZHMuaW5jbHVkZXMobWV0aG9kKSkge1xuICAgICAgICAgIHNlbGZbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucHJveHlUYXJnZXRbbWV0aG9kXS5hcHBseShzZWxmLnByb3h5VGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyhyZSlleHBvc2UgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWQgZnJvbSBvdXRzaWRlXG4gICAgICB0aGlzLnJlZnMgPSB0aGlzLnByb3h5VGFyZ2V0LnJlZnMgfHwge307XG4gICAgICB0aGlzLl9mcmFnbWVudCA9IHRoaXMucHJveHlUYXJnZXQuX2ZyYWdtZW50O1xuICAgICAgdGhpcy5fc2xvdHRlZCA9IHRoaXMucHJveHlUYXJnZXQuX3Nsb3R0ZWQ7XG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLnByb3h5VGFyZ2V0LnJvb3Q7XG4gICAgICB0aGlzLnN0b3JlID0gdGhpcy5wcm94eVRhcmdldC5zdG9yZSB8fCBudWxsO1xuICAgIH1cblxuICAgIF9yZXJlbmRlcigpIHtcbiAgICAgIGNvbnN0IG1vdW50cG9pbnQgPSB0aGlzLl9fbW91bnRwb2ludCB8fCBudWxsLFxuICAgICAgICBhbmNob3IgPSB0aGlzLl9fYW5jaG9yIHx8IG51bGwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLnByb3h5VGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgIG9sZHN0YXRlID0gdGhpcy5nZXQoKSxcbiAgICAgICAgaXNNb3VudGVkID0gdGhpcy5fX21vdW50ZWQsXG4gICAgICAgIGluc2VydGlvblBvaW50ID0gdGhpcy5fX2luc2VydGlvblBvaW50LFxuICAgICAgICBoYW5kbGVycyA9IHRoaXMucHJveHlUYXJnZXQuX2hhbmRsZXJzO1xuXG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX3JlZ2lzdGVyKG9wdGlvbnMpO1xuXG4gICAgICAvL3JlLWF0dGFjaCBldmVudCBoYW5kbGVyc1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBmb3IgKGNvbnN0IGV2IGluIGhhbmRsZXJzKSB7XG4gICAgICAgIGNvbnN0IF9oYW5kbGVycyA9IGhhbmRsZXJzW2V2XTtcbiAgICAgICAgX2hhbmRsZXJzLmZvckVhY2ggKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50b1N0cmluZygpLmluY2x1ZGVzKCdjb21wb25lbnQuZmlyZSgnKSkge1xuICAgICAgICAgICAgc2VsZi5wcm94eVRhcmdldC5vbihldiwgaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vdW50cG9pbnQgJiYgaXNNb3VudGVkKSB7XG4gICAgICAgIHRoaXMucHJveHlUYXJnZXQuX2ZyYWdtZW50LmMoKTtcbiAgICAgICAgdGhpcy5fbW91bnQobW91bnRwb2ludCwgYW5jaG9yLCBpbnNlcnRpb25Qb2ludCk7XG5cbiAgICAgICAgLy93b3JrIGFyb3VuZCBfY2hlY2tSZWFkT25seSBpbiBzdmVsdGUgKGZvciBjb21wdXRlZCBwcm9wZXJ0aWVzKVxuICAgICAgICB0aGlzLnByb3h5VGFyZ2V0Ll91cGRhdGluZ1JlYWRvbmx5UHJvcGVydHkgPSB0cnVlO1xuXG4gICAgICAgIC8vcHJlc2VydmUgbG9jYWwgc3RhdGUgKHVubGVzcyBub1ByZXNlcnZlU3RhdGUgaXMgdHJ1ZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLnByb3h5VGFyZ2V0LmNvbnN0cnVjdG9yLm5vUHJlc2VydmVTdGF0ZVxuICAgICAgICAgICYmICFwcm94eU9wdGlvbnMubm9QcmVzZXJ2ZVN0YXRlKSB7XG5cbiAgICAgICAgICAvL21hbnVhbGx5IGZsdXNoIGNvbXB1dGF0aW9ucyBhbmQgcmUtcmVuZGVyIGNoYW5nZXNcbiAgICAgICAgICBsZXQgY2hhbmdlZCA9IHt9O1xuICAgICAgICAgIGZvciAobGV0IGsgaW4gb2xkc3RhdGUpIHtcbiAgICAgICAgICAgIGNoYW5nZWRba10gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb3h5VGFyZ2V0Ll9yZWNvbXB1dGUoY2hhbmdlZCwgb2xkc3RhdGUpO1xuICAgICAgICAgIHRoaXMucHJveHlUYXJnZXQuX2ZyYWdtZW50ICYmIHRoaXMucHJveHlUYXJnZXQuX2ZyYWdtZW50LnAoY2hhbmdlZCwgb2xkc3RhdGUpO1xuXG4gICAgICAgICAgLy9zZXQgb2xkIHN0YXRlIGJhY2tcbiAgICAgICAgICB0aGlzLnNldChvbGRzdGF0ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vd2UgaGF2ZSB0byBjYWxsIC5zZXQoKSBoZXJlXG4gICAgICAgICAgLy9vdGhlcndpc2Ugb25jcmVhdGUgaXMgbm90IGZpcmVkXG4gICAgICAgICAgdGhpcy5zZXQodGhpcy5nZXQoKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJveHlUYXJnZXQuX3VwZGF0aW5nUmVhZG9ubHlQcm9wZXJ0eSA9IGZhbHNlO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLSBFTkQgZXh0cmEgbWV0aG9kcyAtLS0tXG4gIH1cblxuICAvL2ZvcndhcmQgc3RhdGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAgY29uc3Qgb3JpZ2luYWxDb21wb25lbnQgPSBSZWdpc3RyeS5nZXQoaWQpLmNvbXBvbmVudDtcbiAgZm9yIChsZXQga2V5IGluIG9yaWdpbmFsQ29tcG9uZW50KSB7XG4gICAgcHJveHlDb21wb25lbnRba2V5XSA9IG9yaWdpbmFsQ29tcG9uZW50W2tleV07XG4gIH1cblxuICByZXR1cm4gcHJveHlDb21wb25lbnQ7XG59XG4iLCJcbmNsYXNzIHJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB7fTtcbiAgfVxuXG4gIHNldChrLCB2KSB7XG4gICAgdGhpcy5faXRlbXNba10gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJvbGxiYWNrOiBudWxsLFxuICAgICAgY29tcG9uZW50OiBudWxsLFxuICAgICAgaW5zdGFuY2VzOiBbXVxuICAgIH0sIHYpO1xuICB9XG5cbiAgZ2V0KGspIHtcbiAgICByZXR1cm4gayA/IHRoaXMuX2l0ZW1zW2tdIHx8IHVuZGVmaW5lZCA6IHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgcmVnaXN0ZXJJbnN0YW5jZShpbnN0YW5jZSkge1xuICAgIGNvbnN0IGlkID0gaW5zdGFuY2UuaWQ7XG4gICAgdGhpcy5faXRlbXNbaWRdICYmIHRoaXMuX2l0ZW1zW2lkXS5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gIH1cblxuICBkZVJlZ2lzdGVySW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBpZCA9IGluc3RhbmNlLmlkO1xuICAgIHRoaXMuX2l0ZW1zW2lkXSAmJiB0aGlzLl9pdGVtc1tpZF0uaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oY29tcCwgaWR4LCBpbnN0YW5jZXMpIHtcbiAgICAgIGlmIChjb21wID09IGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jb25zdCBjb21wb25lbnRSZWdpc3RyeSA9ICh3aW5kb3cuX19TVkVMVEVfUkVHSVNUUllfXyA9IG5ldyByZWdpc3RyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudFJlZ2lzdHJ5OyIsImltcG9ydCB7IFJlZ2lzdHJ5LCBjb25maWd1cmUgYXMgY29uZmlndXJlUHJveHksIGNyZWF0ZVByb3h5IH0gZnJvbSAnc3ZlbHRlLWRldi1oZWxwZXInO1xuXG5sZXQgaG90T3B0aW9ucyA9IHtcblx0bm9QcmVzZXJ2ZVN0YXRlOiBmYWxzZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG5cdGhvdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGhvdE9wdGlvbnMsIG9wdGlvbnMpO1xuXHRjb25maWd1cmVQcm94eShob3RPcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGlkLCBjb21wb25lbnQpIHtcblxuXHQvL3N0b3JlIG9yaWdpbmFsIGNvbXBvbmVudCBpbiByZWdpc3RyeVxuXHRSZWdpc3RyeS5zZXQoaWQsIHtcblx0XHRyb2xsYmFjazogbnVsbCxcblx0XHRjb21wb25lbnQsXG5cdFx0aW5zdGFuY2VzOiBbXVxuXHR9KTtcblxuXHQvL2NyZWF0ZSB0aGUgcHJveHkgaXRzZWxmXG5cdGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkoaWQpO1xuXG5cdC8vcGF0Y2ggdGhlIHJlZ2lzdHJ5IHJlY29yZCB3aXRoIHByb3h5IGNvbnN0cnVjdG9yXG5cdGNvbnN0IHJlY29yZCA9IFJlZ2lzdHJ5LmdldChpZCk7XG5cdHJlY29yZC5wcm94eSA9IHByb3h5O1xuXHRSZWdpc3RyeS5zZXQoaWQsIHJlY29yZCk7XG5cblx0cmV0dXJuIHByb3h5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsb2FkKGlkLCBjb21wb25lbnQpIHtcblxuXHRjb25zdCByZWNvcmQgPSBSZWdpc3RyeS5nZXQoaWQpO1xuXG5cdC8va2VlcCByZWZlcmVuY2UgdG8gcHJldmlvdXMgdmVyc2lvbiB0byBlbmFibGUgcm9sbGJhY2tcblx0cmVjb3JkLnJvbGxiYWNrID0gcmVjb3JkLmNvbXBvbmVudDtcblxuXHQvL3JlcGxhY2UgY29tcG9uZW50IGluIHJlZ2lzdHJ5IHdpdGggbmV3bHkgbG9hZGVkIGNvbXBvbmVudFxuXHRyZWNvcmQuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFJlZ2lzdHJ5LnNldChpZCwgcmVjb3JkKTtcblxuXHQvL3JlLXJlbmRlciB0aGUgcHJveHkgaW5zdGFuY2VzXG5cdHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGluc3RhbmNlKSB7XG5cdFx0aW5zdGFuY2UgJiYgaW5zdGFuY2UuX3JlcmVuZGVyKCk7XG5cdH0pO1xuXG5cdC8vcmV0dXJuIHRoZSBvcmlnaW5hbCBwcm94eSBjb25zdHJ1Y3RvciB0aGF0IHdhcyBgcmVnaXN0ZXIoKWAtZWRcblx0cmV0dXJuIHJlY29yZC5wcm94eTtcbn0iLCJmdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRydWUodGFyLCBzcmMpIHtcblx0Zm9yICh2YXIgayBpbiBzcmMpIHRhcltrXSA9IDE7XG5cdHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGNhbGxBZnRlcihmbiwgaSkge1xuXHRpZiAoaSA9PT0gMCkgZm4oKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIS0taSkgZm4oKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkTG9jKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuXHRlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG5cdFx0bG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZE5vZGUobm9kZSwgdGFyZ2V0KSB7XG5cdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShub2RlLCB0YXJnZXQsIGFuY2hvcikge1xuXHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvcik7XG59XG5cbmZ1bmN0aW9uIGRldGFjaE5vZGUobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJldHdlZW4oYmVmb3JlLCBhZnRlcikge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHRiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEJlZm9yZShhZnRlcikge1xuXHR3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0YWZ0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEFmdGVyKGJlZm9yZSkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydEJldHdlZW4oYmVmb3JlLCBhZnRlciwgdGFyZ2V0KSB7XG5cdHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChiZWZvcmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiZWZvcmUubmV4dFNpYmxpbmcpKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWluc2VydENoaWxkcmVuKHBhcmVudCwgdGFyZ2V0KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRBZnRlcihiZWZvcmUsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZWZvcmUoYWZ0ZXIsIHRhcmdldCkge1xuXHR2YXIgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZTtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSBhZnRlcikgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveUVhY2goaXRlcmF0aW9ucywgZGV0YWNoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihub2RlLCBldmVudCwgaGFuZGxlcikge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRpZiAoa2V5IGluIG5vZGUpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSByZW1vdmVBdHRyaWJ1dGUobm9kZSwga2V5KTtcblx0XHRcdGVsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuXHRub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG5mdW5jdGlvbiBzZXRYbGlua0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmluZGluZ0dyb3VwVmFsdWUoZ3JvdXApIHtcblx0dmFyIHZhbHVlID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoZ3JvdXBbaV0uY2hlY2tlZCkgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiArdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRpbWVSYW5nZXNUb0FycmF5KHJhbmdlcykge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4gKGVsZW1lbnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY2xhaW1FbGVtZW50IChub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdOyAvLyBUT0RPIHN0cmlwIHVud2FudGVkIGF0dHJpYnV0ZXNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3ZnID8gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSA6IGNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYWltVGV4dCAobm9kZXMsIGRhdGEpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBub2RlID0gbm9kZXNbaV07XG5cdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0XHRyZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVUZXh0KGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFR5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwga2V5LCB2YWx1ZSkge1xuXHRub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXG5cdFx0aWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFZhbHVlKHNlbGVjdCkge1xuXHR2YXIgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcblx0cmV0dXJuIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLl9fdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE11bHRpcGxlVmFsdWUoc2VsZWN0KSB7XG5cdHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0cmV0dXJuIG9wdGlvbi5fX3ZhbHVlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcblx0aWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblxuXHRjb25zdCBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG5cdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cblx0bGV0IHdpbjtcblxuXHRvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdHdpbiA9IG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKTtcblx0fTtcblxuXHRpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0d2luICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUNoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuXHRyZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSdWxlKHsgYSwgYiwgZGVsdGEsIGR1cmF0aW9uIH0sIGVhc2UsIGZuKSB7XG5cdGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcblx0bGV0IGtleWZyYW1lcyA9ICd7XFxuJztcblxuXHRmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcblx0XHRjb25zdCB0ID0gYSArIGRlbHRhICogZWFzZShwKTtcblx0XHRrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuXHR9XG5cblx0cmV0dXJuIGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXBUcmFuc2l0aW9uKGNvbXBvbmVudCwgbm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcblx0bGV0IG9iaiA9IGZuKG5vZGUsIHBhcmFtcyk7XG5cdGxldCBkdXJhdGlvbjtcblx0bGV0IGVhc2U7XG5cdGxldCBjc3NUZXh0O1xuXG5cdGxldCBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cblx0XHRydW4oYiwgY2FsbGJhY2spIHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLndhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRvYmogPSBvYmooKTtcblx0XHRcdFx0XHR0aGlzLl9ydW4oYiwgY2FsbGJhY2spO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3J1bihiLCBjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF9ydW4oYiwgY2FsbGJhY2spIHtcblx0XHRcdGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0XHRcdGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGIsXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayB8fCBub29wXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoaW50cm8gJiYgIWluaXRpYWxpc2VkKSB7XG5cdFx0XHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0XHRcdGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ICs9IG9iai5jc3MoMCwgMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDAsIDEpO1xuXHRcdFx0XHRpbml0aWFsaXNlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYikge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwID0gb3V0cm9zLmN1cnJlbnQ7XG5cdFx0XHRcdG91dHJvcy5jdXJyZW50LnJlbWFpbmluZyArPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHN0YXJ0KHByb2dyYW0pIHtcblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5zdGFydGAsIHsgbm9kZSB9KTtcblxuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKHByb2dyYW0uYiAtIHByb2dyYW0uYSk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAob2JqLmNzcykge1xuXHRcdFx0XHRpZiAob2JqLmRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdGNvbnN0IHJ1bGUgPSBnZW5lcmF0ZVJ1bGUocHJvZ3JhbSwgZWFzZSwgb2JqLmNzcyk7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocnVsZSwgcHJvZ3JhbS5uYW1lID0gJ19fc3ZlbHRlXycgKyBoYXNoKHJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSkpXG5cdFx0XHRcdFx0LmNvbmNhdChgJHtwcm9ncmFtLm5hbWV9ICR7cHJvZ3JhbS5kdXJhdGlvbn1tcyBsaW5lYXIgMSBmb3J3YXJkc2ApXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cblx0XHR1cGRhdGUobm93KSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCFwcm9ncmFtKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQsIDEgLSB0aGlzLnQpO1xuXHRcdH0sXG5cblx0XHRkb25lKCkge1xuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblxuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQsIDEgLSB0aGlzLnQpO1xuXG5cdFx0XHRjb21wb25lbnQuZmlyZShgJHtwcm9ncmFtLmIgPyAnaW50cm8nIDogJ291dHJvJ30uZW5kYCwgeyBub2RlIH0pO1xuXG5cdFx0XHRpZiAoIXByb2dyYW0uYiAmJiAhcHJvZ3JhbS5pbnZhbGlkYXRlZCkge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKC0tcHJvZ3JhbS5ncm91cC5yZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5mb3JFYWNoKGZuID0+IHtcblx0XHRcdFx0XHRcdGZuKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cblx0XHRhYm9ydChyZXNldCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHRpZiAocmVzZXQgJiYgb2JqLnRpY2spIG9iai50aWNrKDEsIDApO1xuXHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0uaW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxubGV0IG91dHJvcyA9IHt9O1xuXG5mdW5jdGlvbiBncm91cE91dHJvcygpIHtcblx0b3V0cm9zLmN1cnJlbnQgPSB7XG5cdFx0cmVtYWluaW5nOiAwLFxuXHRcdGNhbGxiYWNrczogW11cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXHRwcm9taXNlOiBudWxsLFxuXG5cdGFkZCh0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGUocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQoKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHRjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0bGV0IGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRsZXQgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZShub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiBhbmltLmluZGV4T2YobmFtZSkgPT09IC0xKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH0sXG5cblx0d2FpdCgpIHtcblx0XHRpZiAoIXRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UpIHtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UgPSBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2U7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIHdyYXBBbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuXHRpZiAoIWZyb20pIHJldHVybjtcblxuXHRjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKSByZXR1cm47XG5cblx0Y29uc3QgaW5mbyA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcblxuXHRjb25zdCBkdXJhdGlvbiA9ICdkdXJhdGlvbicgaW4gaW5mbyA/IGluZm8uZHVyYXRpb24gOiAzMDA7XG5cdGNvbnN0IGRlbGF5ID0gJ2RlbGF5JyBpbiBpbmZvID8gaW5mby5kZWxheSA6IDA7XG5cdGNvbnN0IGVhc2UgPSBpbmZvLmVhc2luZyB8fCBsaW5lYXI7XG5cdGNvbnN0IHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgZGVsYXk7XG5cdGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XG5cblx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRhOiAwLFxuXHRcdHQ6IDAsXG5cdFx0YjogMSxcblx0XHRkZWx0YTogMSxcblx0XHRkdXJhdGlvbixcblx0XHRzdGFydCxcblx0XHRlbmRcblx0fTtcblxuXHRjb25zdCBjc3NUZXh0ID0gbm9kZS5zdHlsZS5jc3NUZXh0O1xuXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHtcblx0XHRwZW5kaW5nOiBkZWxheSA/IHByb2dyYW0gOiBudWxsLFxuXHRcdHByb2dyYW06IGRlbGF5ID8gbnVsbCA6IHByb2dyYW0sXG5cdFx0cnVubmluZzogdHJ1ZSxcblxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKGluZm8uY3NzKSB7XG5cdFx0XHRcdGlmIChkZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRjb25zdCBydWxlID0gZ2VuZXJhdGVSdWxlKHByb2dyYW0sIGVhc2UsIGluZm8uY3NzKTtcblx0XHRcdFx0cHJvZ3JhbS5uYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1gO1xuXG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocnVsZSwgcHJvZ3JhbS5uYW1lKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSkpXG5cdFx0XHRcdFx0LmNvbmNhdChgJHtwcm9ncmFtLm5hbWV9ICR7cHJvZ3JhbS5kdXJhdGlvbn1tcyBsaW5lYXIgMSBmb3J3YXJkc2ApXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGFuaW1hdGlvbi5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdGFuaW1hdGlvbi5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBub3cgPT4ge1xuXHRcdFx0Y29uc3QgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHRjb25zdCB0ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKGluZm8udGljaykgaW5mby50aWNrKHQsIDEgLSB0KTtcblx0XHR9LFxuXG5cdFx0ZG9uZSgpIHtcblx0XHRcdGlmIChpbmZvLnRpY2spIGluZm8udGljaygxLCAwKTtcblx0XHRcdGFuaW1hdGlvbi5zdG9wKCk7XG5cdFx0fSxcblxuXHRcdHN0b3AoKSB7XG5cdFx0XHRpZiAoaW5mby5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdGFuaW1hdGlvbi5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdHRyYW5zaXRpb25NYW5hZ2VyLmFkZChhbmltYXRpb24pO1xuXG5cdGlmIChpbmZvLnRpY2spIGluZm8udGljaygwLCAxKTtcblxuXHRpZiAoZGVsYXkpIHtcblx0XHRpZiAoaW5mby5jc3MpIG5vZGUuc3R5bGUuY3NzVGV4dCArPSBpbmZvLmNzcygwLCAxKTtcblx0fSBlbHNlIHtcblx0XHRhbmltYXRpb24uc3RhcnQoKTtcblx0fVxuXG5cdHJldHVybiBhbmltYXRpb247XG59XG5cbmZ1bmN0aW9uIGZpeFBvc2l0aW9uKG5vZGUpIHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG5cdGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG5cdFx0Y29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0bm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0aWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcblxuXHRcdFx0bm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSwgaW5mbykge1xuXHR2YXIgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG5cblx0ZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKGluZm8udG9rZW4gIT09IHRva2VuKSByZXR1cm47XG5cblx0XHRpbmZvLnJlc29sdmVkID0ga2V5ICYmIHsgW2tleV06IHZhbHVlIH07XG5cblx0XHRjb25zdCBjaGlsZF9jdHggPSBhc3NpZ24oYXNzaWduKHt9LCBpbmZvLmN0eCksIGluZm8ucmVzb2x2ZWQpO1xuXHRcdGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoaW5mby5jb21wb25lbnQsIGNoaWxkX2N0eCk7XG5cblx0XHRpZiAoaW5mby5ibG9jaykge1xuXHRcdFx0aWYgKGluZm8uYmxvY2tzKSB7XG5cdFx0XHRcdGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG5cdFx0XHRcdFx0XHRncm91cE91dHJvcygpO1xuXHRcdFx0XHRcdFx0YmxvY2subygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrLmQoMSk7XG5cdFx0XHRcdFx0XHRcdGluZm8uYmxvY2tzW2ldID0gbnVsbDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbmZvLmJsb2NrLmQoMSk7XG5cdFx0XHR9XG5cblx0XHRcdGJsb2NrLmMoKTtcblx0XHRcdGJsb2NrW2Jsb2NrLmkgPyAnaScgOiAnbSddKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuXG5cdFx0XHRpbmZvLmNvbXBvbmVudC5yb290LnNldCh7fSk7IC8vIGZsdXNoIGFueSBoYW5kbGVycyB0aGF0IHdlcmUgY3JlYXRlZFxuXHRcdH1cblxuXHRcdGluZm8uYmxvY2sgPSBibG9jaztcblx0XHRpZiAoaW5mby5ibG9ja3MpIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuXHR9XG5cblx0aWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuXHRcdHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG5cdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0dXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcblx0XHR9KTtcblxuXHRcdC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuXHRcdGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuXHRcdFx0dXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGluZm8ucmVzb2x2ZWQgPSB7IFtpbmZvLnZhbHVlXTogcHJvbWlzZSB9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmQoMSk7XG5cdGxvb2t1cFtibG9jay5rZXldID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0cm9BbmREZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5vKGZ1bmN0aW9uKCkge1xuXHRcdGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGZpeEFuZE91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlS2V5ZWRFYWNoKG9sZF9ibG9ja3MsIGNvbXBvbmVudCwgY2hhbmdlZCwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBpbnRyb19tZXRob2QsIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdHZhciBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdHZhciBuID0gbGlzdC5sZW5ndGg7XG5cblx0dmFyIGkgPSBvO1xuXHR2YXIgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblxuXHR2YXIgbmV3X2Jsb2NrcyA9IFtdO1xuXHR2YXIgbmV3X2xvb2t1cCA9IHt9O1xuXHR2YXIgZGVsdGFzID0ge307XG5cblx0dmFyIGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG5cdFx0dmFyIGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcblx0XHR2YXIgYmxvY2sgPSBsb29rdXBba2V5XTtcblxuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soY29tcG9uZW50LCBrZXksIGNoaWxkX2N0eCk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHRibG9jay5wKGNoYW5nZWQsIGNoaWxkX2N0eCk7XG5cdFx0fVxuXG5cdFx0bmV3X2Jsb2Nrc1tpXSA9IG5ld19sb29rdXBba2V5XSA9IGJsb2NrO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzW2tleV0gPSBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSk7XG5cdH1cblxuXHR2YXIgd2lsbF9tb3ZlID0ge307XG5cdHZhciBkaWRfbW92ZSA9IHt9O1xuXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdGJsb2NrW2ludHJvX21ldGhvZF0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwW2Jsb2NrLmtleV0gPSBibG9jaztcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdHZhciBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG5cdFx0dmFyIG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdHZhciBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblxuXHRcdGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuXHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0bmV4dCA9IG5ld19ibG9jay5maXJzdDtcblx0XHRcdG8tLTtcblx0XHRcdG4tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbmV3X2xvb2t1cFtvbGRfa2V5XSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIWxvb2t1cFtuZXdfa2V5XSB8fCB3aWxsX21vdmVbbmV3X2tleV0pIHtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKGRpZF9tb3ZlW29sZF9rZXldKSB7XG5cdFx0XHRvLS07XG5cblx0XHR9IGVsc2UgaWYgKGRlbHRhc1tuZXdfa2V5XSA+IGRlbHRhc1tvbGRfa2V5XSkge1xuXHRcdFx0ZGlkX21vdmVbbmV3X2tleV0gPSB0cnVlO1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlW29sZF9rZXldID0gdHJ1ZTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblxuXHR3aGlsZSAoby0tKSB7XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwW29sZF9ibG9jay5rZXldKSBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0fVxuXG5cdHdoaWxlIChuKSBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuXG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG5mdW5jdGlvbiBtZWFzdXJlKGJsb2Nrcykge1xuXHRjb25zdCByZWN0cyA9IHt9O1xuXHRsZXQgaSA9IGJsb2Nrcy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHJlY3RzW2Jsb2Nrc1tpXS5rZXldID0gYmxvY2tzW2ldLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiByZWN0cztcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShibG9ja3MsIHJlY3RzLCBmbiwgcGFyYW1zKSB7XG5cdGxldCBpID0gYmxvY2tzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdGNvbnN0IGJsb2NrID0gYmxvY2tzW2ldO1xuXHRcdGNvbnN0IGZyb20gPSByZWN0c1tibG9jay5rZXldO1xuXG5cdFx0aWYgKCFmcm9tKSBjb250aW51ZTtcblx0XHRjb25zdCB0byA9IGJsb2NrLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSkgY29udGludWU7XG5cblxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFNwcmVhZFVwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0dmFyIHVwZGF0ZSA9IHt9O1xuXG5cdHZhciB0b19udWxsX291dCA9IHt9O1xuXHR2YXIgYWNjb3VudGVkX2ZvciA9IHt9O1xuXG5cdHZhciBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBvID0gbGV2ZWxzW2ldO1xuXHRcdHZhciBuID0gdXBkYXRlc1tpXTtcblxuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbikge1xuXHRcdFx0XHRpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuXHRcdFx0XHRcdHVwZGF0ZVtrZXldID0gbltrZXldO1xuXHRcdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmNvbnN0IGludmFsaWRBdHRyaWJ1dGVOYW1lQ2hhcmFjdGVyID0gL1tcXHMnXCI+XFwvPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuXG5mdW5jdGlvbiBzcHJlYWQoYXJncykge1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG5cdGxldCBzdHIgPSAnJztcblxuXHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdGlmIChpbnZhbGlkQXR0cmlidXRlTmFtZUNoYXJhY3Rlci50ZXN0KG5hbWUpKSByZXR1cm47XG5cblx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XHRpZiAodmFsdWUgPT09IHRydWUpIHN0ciArPSBcIiBcIiArIG5hbWU7XG5cblx0XHRjb25zdCBlc2NhcGVkID0gU3RyaW5nKHZhbHVlKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmIzM0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJiMzOTsnKTtcblxuXHRcdHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KGVzY2FwZWQpO1xuXHR9KTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG5jb25zdCBlc2NhcGVkID0ge1xuXHQnXCInOiAnJnF1b3Q7Jyxcblx0XCInXCI6ICcmIzM5OycsXG5cdCcmJzogJyZhbXA7Jyxcblx0JzwnOiAnJmx0OycsXG5cdCc+JzogJyZndDsnXG59O1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuXHRyZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cblxuZnVuY3Rpb24gZWFjaChpdGVtcywgYXNzaWduLCBmbikge1xuXHRsZXQgc3RyID0gJyc7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRzdHIgKz0gZm4oYXNzaWduKGl0ZW1zW2ldLCBpKSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgbWlzc2luZ0NvbXBvbmVudCA9IHtcblx0X3JlbmRlcjogKCkgPT4gJydcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3NyQ29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuXHRpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50Ll9yZW5kZXIpIHtcblx0XHRpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKSBuYW1lICs9ICd0aGlzPXsuLi59Jztcblx0XHR0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG5cdH1cblxuXHRyZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBibGFua09iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IG5vb3A7XG5cblx0dGhpcy5fZnJhZ21lbnQuZChkZXRhY2ggIT09IGZhbHNlKTtcblx0dGhpcy5fZnJhZ21lbnQgPSBudWxsO1xuXHR0aGlzLl9zdGF0ZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBfZGlmZmVyc0ltbXV0YWJsZShhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcblxuXHRcdGlmICghaGFuZGxlci5fX2NhbGxpbmcpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGRhdGEpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0aGFuZGxlci5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KCkge1xuXHRyZXR1cm4gdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBvcHRpb25zLnN0b3JlIHx8IGNvbXBvbmVudC5yb290LnN0b3JlO1xufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bihmbikge1xuXHRmbigpO1xufVxuXG5mdW5jdGlvbiBzZXQobmV3U3RhdGUpIHtcblx0dGhpcy5fc2V0KGFzc2lnbih7fSwgbmV3U3RhdGUpKTtcblx0aWYgKHRoaXMucm9vdC5fbG9jaykgcmV0dXJuO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSB0cnVlO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYmVmb3JlY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX29uY3JlYXRlKTtcblx0Y2FsbEFsbCh0aGlzLnJvb3QuX2FmdGVyY3JlYXRlKTtcblx0dGhpcy5yb290Ll9sb2NrID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXQobmV3U3RhdGUpIHtcblx0dmFyIG9sZFN0YXRlID0gdGhpcy5fc3RhdGUsXG5cdFx0Y2hhbmdlZCA9IHt9LFxuXHRcdGRpcnR5ID0gZmFsc2U7XG5cblx0Zm9yICh2YXIga2V5IGluIG5ld1N0YXRlKSB7XG5cdFx0aWYgKHRoaXMuX2RpZmZlcnMobmV3U3RhdGVba2V5XSwgb2xkU3RhdGVba2V5XSkpIGNoYW5nZWRba2V5XSA9IGRpcnR5ID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWRpcnR5KSByZXR1cm47XG5cblx0dGhpcy5fc3RhdGUgPSBhc3NpZ24oYXNzaWduKHt9LCBvbGRTdGF0ZSksIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdHRoaXMuZmlyZShcInN0YXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0XHR0aGlzLl9mcmFnbWVudC5wKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0XHR0aGlzLmZpcmUoXCJ1cGRhdGVcIiwgeyBjaGFuZ2VkOiBjaGFuZ2VkLCBjdXJyZW50OiB0aGlzLl9zdGF0ZSwgcHJldmlvdXM6IG9sZFN0YXRlIH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNldERldihuZXdTdGF0ZSkge1xuXHRpZiAodHlwZW9mIG5ld1N0YXRlICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdHRoaXMuX2RlYnVnTmFtZSArICcuc2V0IHdhcyBjYWxsZWQgd2l0aG91dCBhbiBvYmplY3Qgb2YgZGF0YSBrZXktdmFsdWVzIHRvIHVwZGF0ZS4nXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuX2NoZWNrUmVhZE9ubHkobmV3U3RhdGUpO1xuXHRzZXQuY2FsbCh0aGlzLCBuZXdTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBbGwoZm5zKSB7XG5cdHdoaWxlIChmbnMgJiYgZm5zLmxlbmd0aCkgZm5zLnNoaWZ0KCkoKTtcbn1cblxuZnVuY3Rpb24gX21vdW50KHRhcmdldCwgYW5jaG9yKSB7XG5cdHRoaXMuX2ZyYWdtZW50W3RoaXMuX2ZyYWdtZW50LmkgPyAnaScgOiAnbSddKHRhcmdldCwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG52YXIgUEVORElORyA9IHt9O1xudmFyIFNVQ0NFU1MgPSB7fTtcbnZhciBGQUlMVVJFID0ge307XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21TdG9yZSgpIHtcblx0dGhpcy5zdG9yZS5fcmVtb3ZlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSB7XG5cdGRlc3Ryb3ksXG5cdGdldCxcblx0ZmlyZSxcblx0b24sXG5cdHNldCxcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X21vdW50LFxuXHRfZGlmZmVyc1xufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRkZXN0cm95OiBkZXN0cm95RGV2LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQ6IHNldERldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X21vdW50LFxuXHRfZGlmZmVyc1xufTtcblxuZXhwb3J0IHsgYmxhbmtPYmplY3QsIGRlc3Ryb3ksIGRlc3Ryb3lEZXYsIF9kaWZmZXJzLCBfZGlmZmVyc0ltbXV0YWJsZSwgZmlyZSwgZ2V0LCBpbml0LCBvbiwgcnVuLCBzZXQsIF9zZXQsIHNldERldiwgY2FsbEFsbCwgX21vdW50LCBQRU5ESU5HLCBTVUNDRVNTLCBGQUlMVVJFLCByZW1vdmVGcm9tU3RvcmUsIHByb3RvLCBwcm90b0Rldiwgd3JhcEFuaW1hdGlvbiwgZml4UG9zaXRpb24sIGhhbmRsZVByb21pc2UsIGFwcGVuZE5vZGUsIGluc2VydE5vZGUsIGRldGFjaE5vZGUsIGRldGFjaEJldHdlZW4sIGRldGFjaEJlZm9yZSwgZGV0YWNoQWZ0ZXIsIHJlaW5zZXJ0QmV0d2VlbiwgcmVpbnNlcnRDaGlsZHJlbiwgcmVpbnNlcnRBZnRlciwgcmVpbnNlcnRCZWZvcmUsIGRlc3Ryb3lFYWNoLCBjcmVhdGVGcmFnbWVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCwgYWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyLCBzZXRBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZXMsIHJlbW92ZUF0dHJpYnV0ZSwgc2V0WGxpbmtBdHRyaWJ1dGUsIGdldEJpbmRpbmdHcm91cFZhbHVlLCB0b051bWJlciwgdGltZVJhbmdlc1RvQXJyYXksIGNoaWxkcmVuLCBjbGFpbUVsZW1lbnQsIGNsYWltVGV4dCwgc2V0SW5wdXRUeXBlLCBzZXRTdHlsZSwgc2VsZWN0T3B0aW9uLCBzZWxlY3RPcHRpb25zLCBzZWxlY3RWYWx1ZSwgc2VsZWN0TXVsdGlwbGVWYWx1ZSwgYWRkUmVzaXplTGlzdGVuZXIsIGRlc3Ryb3lCbG9jaywgb3V0cm9BbmREZXN0cm95QmxvY2ssIGZpeEFuZE91dHJvQW5kRGVzdHJveUJsb2NrLCB1cGRhdGVLZXllZEVhY2gsIG1lYXN1cmUsIGFuaW1hdGUsIGdldFNwcmVhZFVwZGF0ZSwgaW52YWxpZEF0dHJpYnV0ZU5hbWVDaGFyYWN0ZXIsIHNwcmVhZCwgZXNjYXBlZCwgZXNjYXBlLCBlYWNoLCBtaXNzaW5nQ29tcG9uZW50LCB2YWxpZGF0ZVNzckNvbXBvbmVudCwgbGluZWFyLCBnZW5lcmF0ZVJ1bGUsIGhhc2gsIHdyYXBUcmFuc2l0aW9uLCBvdXRyb3MsIGdyb3VwT3V0cm9zLCB0cmFuc2l0aW9uTWFuYWdlciwgbm9vcCwgYXNzaWduLCBhc3NpZ25UcnVlLCBpc1Byb21pc2UsIGNhbGxBZnRlciwgYWRkTG9jIH07XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsImltcG9ydCAqIGFzIHNhcHBlciBmcm9tICcuLi9fX3NhcHBlcl9fL2NsaWVudC5qcyc7XG5cbnNhcHBlci5zdGFydCh7XG5cdHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhcHBlcicpXG59KTtcbiIsIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPiIsIjxOYXYgc2VnbWVudD17Y2hpbGQuc2VnbWVudH0vPlxuXG57I2lmIHByZWxvYWRpbmd9XG48TG9hZGluZ0Jhci8+XG57L2lmfVxuXG48bWFpbiBjbGFzcz1cInB0NCBwYjEgcHgxIHBzclwiPlxuICA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiIGNsYXNzPVwicHNmIHQwIGwwIHIwXCI+PC9kaXY+XG4gIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e2NoaWxkLmNvbXBvbmVudH0gey4uLmNoaWxkLnByb3BzfS8+XG48L21haW4+XG5cbjxzdHlsZT5cbiAgbWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgI2JhY2tncm91bmQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gdG9wLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDApIDAlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuMjYyKSAxOSUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC40NTkpIDM0JSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjYxOCkgNDclLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuNzIyKSA1Ni41JSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjgwNikgNjUlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuODc0KSA3MyUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMC45MjUpIDgwLjIlLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuOTU4KSA4Ni4xJSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjk3OSkgOTElLFxuICAgICAgaHNsYSgxNiwgODMlLCA1NCUsIDAuOTkyKSA5NS4yJSxcbiAgICAgIGhzbGEoMTYsIDgzJSwgNTQlLCAwLjk5OCkgOTguMiUsXG4gICAgICBoc2xhKDE2LCA4MyUsIDU0JSwgMSkgMTAwJVxuICAgICk7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBOYXY6ICcuLi8uLi9jb21wb25lbnRzL05hdi5odG1sJyxcbiAgICAgIExvYWRpbmdCYXI6ICcuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdCYXIuaHRtbCdcbiAgICB9LFxuICAgIG9uY3JlYXRlKCkge1xuICAgICAgKGZ1bmN0aW9uKGYsIGEsIHQsIGgsIG8sIG0pe1xuICAgICAgICBhW2hdPWFbaF18fGZ1bmN0aW9uKCl7XG4gICAgICAgICAgKGFbaF0ucT1hW2hdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cylcbiAgICAgICAgfTtcbiAgICAgICAgbz1mLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLFxuICAgICAgICBtPWYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBvLmFzeW5jPTE7IG8uc3JjPXQ7IG8uaWQ9J2ZhdGhvbS1zY3JpcHQnO1xuICAgICAgICBtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sbSlcbiAgICAgIH0pKGRvY3VtZW50LCB3aW5kb3csICcvL2FuYWx5dGljcy55YWxlcGFwcmlrYS5jb20vdHJhY2tlci5qcycsICdmYXRob20nKTtcbiAgICAgIGZhdGhvbSgndHJhY2tQYWdldmlldycpO1xuICAgIH1cbiAgfTtcbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=