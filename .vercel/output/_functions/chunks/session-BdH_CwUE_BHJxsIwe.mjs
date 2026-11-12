import { t as oAuthStateCookieName } from "./constants-D4Fuu7j-_I0KY26Dy.mjs";
import { a as string, i as object, r as number } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { t as isSafeReturnUrl } from "./isSafeReturnUrl-BC7tBd65_B3qHEtzg.mjs";
import { LoginState } from "@wix/sdk";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/rolldown-runtime-BPOCksWG.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/session-BdH_CwUE.mjs
var AuthRequestError = class extends Error {
	code;
	status;
	cookies;
	constructor(code, status, cookies) {
		super(code);
		this.code = code;
		this.status = status;
		this.cookies = cookies;
	}
};
function getPublicOrigin(request, url) {
	const forwardedUrl = request.headers.get("x-wix-forwarded-url");
	if (forwardedUrl != null && forwardedUrl !== "" && URL.canParse(forwardedUrl)) {
		const publicUrl = new URL(forwardedUrl);
		if (publicUrl.protocol === "https:" || publicUrl.protocol === "http:") return publicUrl.origin;
	}
	return url.origin;
}
async function readBody(request) {
	const contentType = request.headers.get("content-type")?.split(";")[0]?.trim();
	try {
		switch (contentType) {
			case "application/json": return await request.json();
			case "application/x-www-form-urlencoded":
			case "multipart/form-data": return parseFormFields(await request.formData());
			case void 0:
			default: throw new AuthRequestError("UNSUPPORTED_MEDIA_TYPE", 415);
		}
	} catch (error) {
		if (error instanceof AuthRequestError) throw error;
		throw new AuthRequestError("INVALID_REQUEST", 400);
	}
}
function validateOrigin(request, url) {
	const origin = request.headers.get("origin");
	const crossOrigin = origin != null && origin !== getPublicOrigin(request, url);
	const crossSite = request.headers.get("sec-fetch-site") === "cross-site";
	if (crossOrigin || crossSite) throw new AuthRequestError("FORBIDDEN", 403);
}
function validateRedirects(input, url, json) {
	if (input.returnToUrl !== void 0 && !isSafeReturnUrl(input.returnToUrl, url)) throw new AuthRequestError("INVALID_REQUEST", 400);
	if (input.failureUrl !== void 0) {
		if (!isSafeReturnUrl(input.failureUrl, url)) throw new AuthRequestError("INVALID_REQUEST", 400);
		return;
	}
	if (!json) throw new AuthRequestError("INVALID_REQUEST", 400);
}
function parseFormFields(form) {
	const seen = /* @__PURE__ */ new Set();
	for (const key of form.keys()) {
		if (seen.has(key)) throw new AuthRequestError("INVALID_REQUEST", 400);
		seen.add(key);
	}
	return Object.fromEntries(form);
}
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_charset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredCharsets;
	module.exports.preferredCharsets = preferredCharsets;
	/**
	* Module variables.
	* @private
	*/
	var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Charset header.
	* @private
	*/
	function parseAcceptCharset(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var charset = parseCharset(accepts[i].trim(), i);
			if (charset) accepts[j++] = charset;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a charset from the Accept-Charset header.
	* @private
	*/
	function parseCharset(str, i) {
		var match = simpleCharsetRegExp.exec(str);
		if (!match) return null;
		var charset = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			charset,
			q,
			i
		};
	}
	/**
	* Get the priority of a charset.
	* @private
	*/
	function getCharsetPriority(charset, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(charset, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the charset.
	* @private
	*/
	function specify(charset, spec, index) {
		var s = 0;
		if (spec.charset.toLowerCase() === charset.toLowerCase()) s |= 1;
		else if (spec.charset !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred charsets from an Accept-Charset header.
	* @public
	*/
	function preferredCharsets(accept, provided) {
		var accepts = parseAcceptCharset(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
		var priorities = provided.map(function getPriority(type, index) {
			return getCharsetPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full charset string.
	* @private
	*/
	function getFullCharset(spec) {
		return spec.charset;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_encoding = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredEncodings;
	module.exports.preferredEncodings = preferredEncodings;
	/**
	* Module variables.
	* @private
	*/
	var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Encoding header.
	* @private
	*/
	function parseAcceptEncoding(accept) {
		var accepts = accept.split(",");
		var hasIdentity = false;
		var minQuality = 1;
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var encoding = parseEncoding(accepts[i].trim(), i);
			if (encoding) {
				accepts[j++] = encoding;
				hasIdentity = hasIdentity || specify("identity", encoding);
				minQuality = Math.min(minQuality, encoding.q || 1);
			}
		}
		if (!hasIdentity) accepts[j++] = {
			encoding: "identity",
			q: minQuality,
			i
		};
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse an encoding from the Accept-Encoding header.
	* @private
	*/
	function parseEncoding(str, i) {
		var match = simpleEncodingRegExp.exec(str);
		if (!match) return null;
		var encoding = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			encoding,
			q,
			i
		};
	}
	/**
	* Get the priority of an encoding.
	* @private
	*/
	function getEncodingPriority(encoding, accepted, index) {
		var priority = {
			encoding,
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(encoding, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the encoding.
	* @private
	*/
	function specify(encoding, spec, index) {
		var s = 0;
		if (spec.encoding.toLowerCase() === encoding.toLowerCase()) s |= 1;
		else if (spec.encoding !== "*") return null;
		return {
			encoding,
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred encodings from an Accept-Encoding header.
	* @public
	*/
	function preferredEncodings(accept, provided, preferred) {
		var accepts = parseAcceptEncoding(accept || "");
		var comparator = preferred ? function comparator(a, b) {
			if (a.q !== b.q) return b.q - a.q;
			var aPreferred = preferred.indexOf(a.encoding);
			var bPreferred = preferred.indexOf(b.encoding);
			if (aPreferred === -1 && bPreferred === -1) return b.s - a.s || a.o - b.o || a.i - b.i;
			if (aPreferred !== -1 && bPreferred !== -1) return aPreferred - bPreferred;
			return aPreferred === -1 ? 1 : -1;
		} : compareSpecs;
		if (!provided) return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
		var priorities = provided.map(function getPriority(type, index) {
			return getEncodingPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
	}
	/**
	* Get full encoding string.
	* @private
	*/
	function getFullEncoding(spec) {
		return spec.encoding;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_language = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredLanguages;
	module.exports.preferredLanguages = preferredLanguages;
	/**
	* Module variables.
	* @private
	*/
	var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Language header.
	* @private
	*/
	function parseAcceptLanguage(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var language = parseLanguage(accepts[i].trim(), i);
			if (language) accepts[j++] = language;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a language from the Accept-Language header.
	* @private
	*/
	function parseLanguage(str, i) {
		var match = simpleLanguageRegExp.exec(str);
		if (!match) return null;
		var prefix = match[1];
		var suffix = match[2];
		var full = prefix;
		if (suffix) full += "-" + suffix;
		var q = 1;
		if (match[3]) {
			var params = match[3].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].split("=");
				if (p[0] === "q") q = parseFloat(p[1]);
			}
		}
		return {
			prefix,
			suffix,
			q,
			i,
			full
		};
	}
	/**
	* Get the priority of a language.
	* @private
	*/
	function getLanguagePriority(language, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(language, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the language.
	* @private
	*/
	function specify(language, spec, index) {
		var p = parseLanguage(language);
		if (!p) return null;
		var s = 0;
		if (spec.full.toLowerCase() === p.full.toLowerCase()) s |= 4;
		else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) s |= 2;
		else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) s |= 1;
		else if (spec.full !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred languages from an Accept-Language header.
	* @public
	*/
	function preferredLanguages(accept, provided) {
		var accepts = parseAcceptLanguage(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
		var priorities = provided.map(function getPriority(type, index) {
			return getLanguagePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full language string.
	* @private
	*/
	function getFullLanguage(spec) {
		return spec.full;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_mediaType = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredMediaTypes;
	module.exports.preferredMediaTypes = preferredMediaTypes;
	/**
	* Module variables.
	* @private
	*/
	var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept header.
	* @private
	*/
	function parseAccept(accept) {
		var accepts = splitMediaTypes(accept);
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var mediaType = parseMediaType(accepts[i].trim(), i);
			if (mediaType) accepts[j++] = mediaType;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a media type from the Accept header.
	* @private
	*/
	function parseMediaType(str, i) {
		var match = simpleMediaTypeRegExp.exec(str);
		if (!match) return null;
		var params = Object.create(null);
		var q = 1;
		var subtype = match[2];
		var type = match[1];
		if (match[3]) {
			var kvps = splitParameters(match[3]).map(splitKeyValuePair);
			for (var j = 0; j < kvps.length; j++) {
				var pair = kvps[j];
				var key = pair[0].toLowerCase();
				var val = pair[1];
				var value = val && val[0] === "\"" && val[val.length - 1] === "\"" ? val.slice(1, -1) : val;
				if (key === "q") {
					q = parseFloat(value);
					break;
				}
				params[key] = value;
			}
		}
		return {
			type,
			subtype,
			params,
			q,
			i
		};
	}
	/**
	* Get the priority of a media type.
	* @private
	*/
	function getMediaTypePriority(type, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(type, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the media type.
	* @private
	*/
	function specify(type, spec, index) {
		var p = parseMediaType(type);
		var s = 0;
		if (!p) return null;
		if (spec.type.toLowerCase() == p.type.toLowerCase()) s |= 4;
		else if (spec.type != "*") return null;
		if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) s |= 2;
		else if (spec.subtype != "*") return null;
		var keys = Object.keys(spec.params);
		if (keys.length > 0) {
			if (keys.every(function(k) {
				return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
			})) s |= 1;
			else return null;
		}
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred media types from an Accept header.
	* @public
	*/
	function preferredMediaTypes(accept, provided) {
		var accepts = parseAccept(accept === void 0 ? "*/*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
		var priorities = provided.map(function getPriority(type, index) {
			return getMediaTypePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full type string.
	* @private
	*/
	function getFullType(spec) {
		return spec.type + "/" + spec.subtype;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
	/**
	* Count the number of quotes in a string.
	* @private
	*/
	function quoteCount(string) {
		var count = 0;
		var index = 0;
		while ((index = string.indexOf("\"", index)) !== -1) {
			count++;
			index++;
		}
		return count;
	}
	/**
	* Split a key value pair.
	* @private
	*/
	function splitKeyValuePair(str) {
		var index = str.indexOf("=");
		var key;
		var val;
		if (index === -1) key = str;
		else {
			key = str.slice(0, index);
			val = str.slice(index + 1);
		}
		return [key, val];
	}
	/**
	* Split an Accept header into media types.
	* @private
	*/
	function splitMediaTypes(accept) {
		var accepts = accept.split(",");
		for (var i = 1, j = 0; i < accepts.length; i++) if (quoteCount(accepts[j]) % 2 == 0) accepts[++j] = accepts[i];
		else accepts[j] += "," + accepts[i];
		accepts.length = j + 1;
		return accepts;
	}
	/**
	* Split a string of parameters.
	* @private
	*/
	function splitParameters(str) {
		var parameters = str.split(";");
		for (var i = 1, j = 0; i < parameters.length; i++) if (quoteCount(parameters[j]) % 2 == 0) parameters[++j] = parameters[i];
		else parameters[j] += ";" + parameters[i];
		parameters.length = j + 1;
		for (var i = 0; i < parameters.length; i++) parameters[i] = parameters[i].trim();
		return parameters;
	}
}));
/*!
* negotiator
* Copyright(c) 2012 Federico Romero
* Copyright(c) 2012-2014 Isaac Z. Schlueter
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var import_negotiator = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var preferredCharsets = require_charset();
	var preferredEncodings = require_encoding();
	var preferredLanguages = require_language();
	var preferredMediaTypes = require_mediaType();
	/**
	* Module exports.
	* @public
	*/
	module.exports = Negotiator;
	module.exports.Negotiator = Negotiator;
	/**
	* Create a Negotiator instance from a request.
	* @param {object} request
	* @public
	*/
	function Negotiator(request) {
		if (!(this instanceof Negotiator)) return new Negotiator(request);
		this.request = request;
	}
	Negotiator.prototype.charset = function charset(available) {
		var set = this.charsets(available);
		return set && set[0];
	};
	Negotiator.prototype.charsets = function charsets(available) {
		return preferredCharsets(this.request.headers["accept-charset"], available);
	};
	Negotiator.prototype.encoding = function encoding(available, opts) {
		var set = this.encodings(available, opts);
		return set && set[0];
	};
	Negotiator.prototype.encodings = function encodings(available, options) {
		var opts = options || {};
		return preferredEncodings(this.request.headers["accept-encoding"], available, opts.preferred);
	};
	Negotiator.prototype.language = function language(available) {
		var set = this.languages(available);
		return set && set[0];
	};
	Negotiator.prototype.languages = function languages(available) {
		return preferredLanguages(this.request.headers["accept-language"], available);
	};
	Negotiator.prototype.mediaType = function mediaType(available) {
		var set = this.mediaTypes(available);
		return set && set[0];
	};
	Negotiator.prototype.mediaTypes = function mediaTypes(available) {
		return preferredMediaTypes(this.request.headers.accept, available);
	};
	Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
	Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
	Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
	Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
	Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
	Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
	Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
	Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
})))(), 1);
function authResponse(body, status, options) {
	const headers = new Headers({
		"Cache-Control": "no-store",
		"Referrer-Policy": "no-referrer",
		Vary: "Accept"
	});
	if (options.cookie !== void 0) for (const cookie of [options.cookie].flat()) headers.append("Set-Cookie", cookie);
	if (!options.json && options.redirectUrl !== void 0) {
		headers.set("Location", options.redirectUrl);
		return new Response(null, {
			headers,
			status: 303
		});
	}
	if (body == null) return new Response(null, {
		headers,
		status
	});
	return Response.json(body, {
		headers,
		status
	});
}
function failureRedirect(failureUrl, url, body) {
	if (failureUrl === void 0) return;
	const target = new URL(failureUrl, url);
	for (const key of [
		"loginState",
		"errorCode",
		"error"
	]) target.searchParams.delete(key);
	for (const [key, value] of Object.entries(body)) target.searchParams.set(key, value);
	return target.href;
}
function negotiateResponseType(request) {
	return new import_negotiator.default({ headers: { accept: request.headers.get("accept") ?? void 0 } }).mediaType(["text/html", "application/json"]);
}
/** A malformed request never reaches the auth service, nor the failure page. */
var requestErrorCodes = /* @__PURE__ */ new Set([
	"FORBIDDEN",
	"INVALID_REQUEST",
	"UNSUPPORTED_MEDIA_TYPE"
]);
/** Negotiate, check the origin, parse, hand to the route, respond. */
function authRoute(schema, handle) {
	return async ({ cookies, request, url }) => {
		const responseType = negotiateResponseType(request);
		if (responseType === void 0) return authResponse(null, 406, { json: false });
		const json = responseType === "application/json";
		const publicUrl = new URL(getPublicOrigin(request, url));
		let input;
		try {
			validateOrigin(request, url);
			input = parseInput(schema, await readBody(request), publicUrl, json);
			return toResponse(await handle(input, {
				cookies,
				json,
				publicUrl,
				request,
				url
			}), {
				failureUrl: input.failureUrl,
				json,
				publicUrl
			});
		} catch (error) {
			return toResponse(errorResult(error), {
				failureUrl: isRequestError(error) ? void 0 : input?.failureUrl,
				json,
				publicUrl
			});
		}
	};
}
function errorResult(error) {
	if (error instanceof AuthRequestError) return {
		body: { error: error.code },
		cookies: error.cookies,
		status: error.status
	};
	return {
		body: { error: "INTERNAL_ERROR" },
		status: 500
	};
}
function isRequestError(error) {
	return error instanceof AuthRequestError && requestErrorCodes.has(error.code);
}
function parseInput(schema, body, publicUrl, json) {
	const result = schema.safeParse(body);
	if (!result.success) throw new AuthRequestError("INVALID_REQUEST", 400);
	validateRedirects(result.data, publicUrl, json);
	return result.data;
}
function toResponse(result, { failureUrl, json, publicUrl }) {
	return authResponse(result.body, result.status, {
		cookie: result.cookies,
		json,
		redirectUrl: result.redirectUrl ?? failureRedirect(failureUrl, publicUrl, result.body)
	});
}
async function prepareOAuth(auth, request, url, returnToUrl, options) {
	const callbackUrl = new URL("/api/auth/callback", getPublicOrigin(request, url));
	const oauthData = auth.generateOAuthData(callbackUrl.toString(), returnToUrl);
	const { authUrl } = await auth.getAuthUrl(oauthData, {
		...options,
		responseMode: "query"
	});
	return {
		authUrl,
		cookie: `${oAuthStateCookieName}=${JSON.stringify(oauthData)}; Max-Age=1800; Path=/; HttpOnly; Secure; SameSite=None`
	};
}
var cookieName = "wixEmailVerification";
var lifetimeSeconds = 900;
var cookieAttributes = "Path=/api/auth; HttpOnly; Secure; SameSite=Lax";
var schema = object({
	expiresAt: number(),
	returnToUrl: string(),
	stateToken: string().min(1)
});
function clearVerificationState() {
	return `${cookieName}=; Max-Age=0; ${cookieAttributes}`;
}
function consumeVerificationState(cookies, url) {
	try {
		const state = schema.parse(cookies.get(cookieName)?.json());
		if (state.expiresAt > Date.now() && isSafeReturnUrl(state.returnToUrl, url)) return state;
	} catch {}
	throw new AuthRequestError("VERIFICATION_STATE_EXPIRED", 400, [clearVerificationState()]);
}
function createVerificationStateCookie(stateToken, returnToUrl, expiresAt = Date.now() + lifetimeSeconds * 1e3) {
	return `${cookieName}=${encodeURIComponent(JSON.stringify({
		expiresAt,
		returnToUrl,
		stateToken
	}))}; Max-Age=${Math.max(0, Math.floor((expiresAt - Date.now()) / 1e3))}; ${cookieAttributes}`;
}
/** The one place a login state becomes an HTTP outcome, cookies included. */
async function loginStateResult(state, context) {
	switch (state.loginState) {
		case LoginState.EMAIL_VERIFICATION_REQUIRED: return {
			body: { loginState: state.loginState },
			cookies: [createVerificationStateCookie(state.data.stateToken, context.returnToUrl, context.challenge.expiresAt)],
			status: 403
		};
		case LoginState.FAILURE: return {
			body: {
				errorCode: failureCode(context.operation, state.errorCode),
				loginState: LoginState.FAILURE
			},
			cookies: idleChallengeCookies(context.challenge),
			status: state.errorCode === "resetPassword" ? 403 : 422
		};
		case LoginState.OWNER_APPROVAL_REQUIRED: return {
			body: { loginState: state.loginState },
			cookies: [clearVerificationState()],
			status: 403
		};
		case LoginState.SILENT_CAPTCHA_REQUIRED:
		case LoginState.USER_CAPTCHA_REQUIRED:
			if (context.operation === "signup") return {
				body: { loginState: state.loginState },
				cookies: idleChallengeCookies(context.challenge),
				status: 403
			};
			return unknownFailure(context.challenge);
		case LoginState.SUCCESS: {
			const { authUrl, cookie } = await startOAuth(context, state.data.sessionToken);
			return {
				body: {
					loginState: "SUCCESS",
					redirectUrl: authUrl
				},
				cookies: [cookie, clearVerificationState()],
				redirectUrl: authUrl,
				status: 200
			};
		}
		case LoginState.INITIAL:
		default: return unknownFailure(context.challenge);
	}
}
function failureCode(operation, errorCode) {
	if (operation === "login" && (errorCode === "invalidEmail" || errorCode === "invalidPassword")) return "invalidCredentials";
	return errorCode ?? "unknown";
}
/** Cookies for an outcome that neither issues nor answers a challenge. */
function idleChallengeCookies(challenge) {
	return challenge.kind === "start" ? [clearVerificationState()] : [];
}
async function startOAuth(context, sessionToken) {
	try {
		return await prepareOAuth(context.auth, context.request, context.url, context.returnToUrl, {
			prompt: "none",
			sessionToken
		});
	} catch {
		throw new AuthRequestError("AUTH_SERVICE_ERROR", 502, [clearVerificationState()]);
	}
}
function unknownFailure(challenge) {
	return {
		body: {
			errorCode: "unknown",
			loginState: LoginState.FAILURE
		},
		cookies: idleChallengeCookies(challenge),
		status: 422
	};
}
/**
* Wix starts every credentials flow from a visitor session: the same call made
* with member tokens is rejected upstream, and the rejection is indistinguishable
* from wrong credentials. Answer the real reason before asking the auth service.
*/
function assertLoggedOut(auth) {
	if (auth.loggedIn()) throw new AuthRequestError("ALREADY_LOGGED_IN", 409);
}
export { consumeVerificationState as a, clearVerificationState as i, assertLoggedOut as n, loginStateResult as o, authRoute as r, prepareOAuth as s, AuthRequestError as t };
