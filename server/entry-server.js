import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React4, { Component, useRef, useEffect, lazy, useState, useCallback, Suspense, useMemo, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { useNavigate, useLocation, Routes, Route, Navigate, StaticRouter } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var reactFastCompare;
var hasRequiredReactFastCompare;
function requireReactFastCompare() {
  if (hasRequiredReactFastCompare) return reactFastCompare;
  hasRequiredReactFastCompare = 1;
  var hasElementType = typeof Element !== "undefined";
  var hasMap = typeof Map === "function";
  var hasSet = typeof Set === "function";
  var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
  function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; )
          if (!equal(a[i], b[i])) return false;
        return true;
      }
      var it;
      if (hasMap && a instanceof Map && b instanceof Map) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0]))) return false;
        return true;
      }
      if (hasSet && a instanceof Set && b instanceof Set) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        return true;
      }
      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; )
          if (a[i] !== b[i]) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      if (hasElementType && a instanceof Element) return false;
      for (i = length; i-- !== 0; ) {
        if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
          continue;
        }
        if (!equal(a[keys[i]], b[keys[i]])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
  reactFastCompare = function isEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if ((error.message || "").match(/stack|recursion/i)) {
        console.warn("react-fast-compare cannot handle circular refs");
        return false;
      }
      throw error;
    }
  };
  return reactFastCompare;
}
var reactFastCompareExports = requireReactFastCompare();
const fastCompare = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompareExports);
var invariant_1;
var hasRequiredInvariant;
function requireInvariant() {
  if (hasRequiredInvariant) return invariant_1;
  hasRequiredInvariant = 1;
  var NODE_ENV = process.env.NODE_ENV;
  var invariant2 = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== "production") {
      if (format === void 0) {
        throw new Error("invariant requires an error message argument");
      }
    }
    if (!condition) {
      var error;
      if (format === void 0) {
        error = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++];
          })
        );
        error.name = "Invariant Violation";
      }
      error.framesToPop = 1;
      throw error;
    }
  };
  invariant_1 = invariant2;
  return invariant_1;
}
var invariantExports = requireInvariant();
const invariant = /* @__PURE__ */ getDefaultExportFromCjs(invariantExports);
var shallowequal;
var hasRequiredShallowequal;
function requireShallowequal() {
  if (hasRequiredShallowequal) return shallowequal;
  hasRequiredShallowequal = 1;
  shallowequal = function shallowEqual2(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
      return !!ret;
    }
    if (objA === objB) {
      return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];
      if (!bHasOwnProperty(key)) {
        return false;
      }
      var valueA = objA[key];
      var valueB = objB[key];
      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
      if (ret === false || ret === void 0 && valueA !== valueB) {
        return false;
      }
    }
    return true;
  };
  return shallowequal;
}
var shallowequalExports = requireShallowequal();
const shallowEqual = /* @__PURE__ */ getDefaultExportFromCjs(shallowequalExports);
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title2, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title2);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title2, attributes) => {
  const initProps = {
    key: title2,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React4.createElement("title", props, title2)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content2 = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content2 };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React4.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title: title2 = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => [],
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title: title2, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  instances = [];
  canUseDOM = isDocument;
  context;
  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => this.canUseDOM ? instances : this.instances,
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      }
    }
  };
  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var major = parseInt(React4.version.split(".")[0], 10);
var isReact19 = major >= 19;
var defaultValue = {};
var Context = React4.createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends Component {
  static canUseDOM = isDocument;
  helmetData;
  constructor(props) {
    super(props);
    if (isReact19) {
      this.helmetData = null;
    } else {
      this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
    }
  }
  render() {
    if (isReact19) {
      return /* @__PURE__ */ React4.createElement(React4.Fragment, null, this.props.children);
    }
    return /* @__PURE__ */ React4.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
};
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            const cssText = tag.cssText;
            newElement.appendChild(document.createTextNode(cssText));
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title2, attributes) => {
  if (typeof title2 !== "undefined" && document.title !== title2) {
    document.title = flattenArray(title2);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title: title2,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title2, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  rendered = false;
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const { context: _context, ...props } = instance.props;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var react19Instances = [];
var toHtmlAttributes = (props) => {
  const result = {};
  for (const key of Object.keys(props)) {
    result[HTML_TAG_MAP[key] || key] = props[key];
  }
  return result;
};
var toReactProps = (attrs) => {
  const result = {};
  for (const key of Object.keys(attrs)) {
    const mapped = REACT_TAG_MAP[key];
    result[mapped || key] = attrs[key];
  }
  return result;
};
var applyAttributes = (tagName, attributes) => {
  if (!isDocument)
    return;
  const el = document.getElementsByTagName(tagName)[0];
  if (!el)
    return;
  const managedAttr = "data-rh-managed";
  const prev = el.getAttribute(managedAttr);
  const prevKeys = prev ? prev.split(",") : [];
  const nextKeys = Object.keys(attributes);
  for (const key of prevKeys) {
    if (!nextKeys.includes(key)) {
      el.removeAttribute(key);
    }
  }
  for (const key of nextKeys) {
    const value = attributes[key];
    if (value === void 0 || value === null || value === false) {
      el.removeAttribute(key);
    } else if (value === true) {
      el.setAttribute(key, "");
    } else {
      el.setAttribute(key, String(value));
    }
  }
  if (nextKeys.length > 0) {
    el.setAttribute(managedAttr, nextKeys.join(","));
  } else {
    el.removeAttribute(managedAttr);
  }
};
var syncAllAttributes = () => {
  const htmlAttrs = {};
  const bodyAttrs = {};
  for (const instance of react19Instances) {
    const { htmlAttributes, bodyAttributes } = instance.props;
    if (htmlAttributes) {
      Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
    }
    if (bodyAttributes) {
      Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
    }
  }
  applyAttributes("html", htmlAttrs);
  applyAttributes("body", bodyAttrs);
};
var React19Dispatcher = class extends Component {
  componentDidMount() {
    react19Instances.push(this);
    syncAllAttributes();
  }
  componentDidUpdate() {
    syncAllAttributes();
  }
  componentWillUnmount() {
    const index = react19Instances.indexOf(this);
    if (index !== -1) {
      react19Instances.splice(index, 1);
    }
    syncAllAttributes();
  }
  resolveTitle() {
    const { title: title2, titleTemplate, defaultTitle } = this.props;
    if (title2 && titleTemplate) {
      return titleTemplate.replace(/%s/g, () => Array.isArray(title2) ? title2.join("") : title2);
    }
    return title2 || defaultTitle || void 0;
  }
  renderTitle() {
    const title2 = this.resolveTitle();
    if (title2 === void 0)
      return null;
    const titleAttributes = this.props.titleAttributes || {};
    return React4.createElement("title", toReactProps(titleAttributes), title2);
  }
  renderBase() {
    const { base } = this.props;
    if (!base)
      return null;
    return React4.createElement("base", toReactProps(base));
  }
  renderMeta() {
    const { meta } = this.props;
    if (!meta || !Array.isArray(meta))
      return null;
    return meta.map(
      (attrs, i) => React4.createElement("meta", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderLink() {
    const { link } = this.props;
    if (!link || !Array.isArray(link))
      return null;
    return link.map(
      (attrs, i) => React4.createElement("link", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderScript() {
    const { script } = this.props;
    if (!script || !Array.isArray(script))
      return null;
    return script.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React4.createElement("script", { key: i, ...props });
    });
  }
  renderStyle() {
    const { style } = this.props;
    if (!style || !Array.isArray(style))
      return null;
    return style.map((attrs, i) => {
      const { cssText, ...rest } = attrs;
      const props = toReactProps(rest);
      if (cssText) {
        props.dangerouslySetInnerHTML = { __html: cssText };
      }
      return React4.createElement("style", { key: i, ...props });
    });
  }
  renderNoscript() {
    const { noscript } = this.props;
    if (!noscript || !Array.isArray(noscript))
      return null;
    return noscript.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React4.createElement("noscript", { key: i, ...props });
    });
  }
  render() {
    return React4.createElement(
      React4.Fragment,
      null,
      this.renderTitle(),
      this.renderBase(),
      this.renderMeta(),
      this.renderLink(),
      this.renderScript(),
      this.renderStyle(),
      this.renderNoscript()
    );
  }
};
var Helmet = class extends Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  };
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name2) => child.type === name2),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React4.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    if (isReact19) {
      return /* @__PURE__ */ React4.createElement(React19Dispatcher, { ...newProps });
    }
    return helmetData ? /* @__PURE__ */ React4.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React4.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React4.createElement(HelmetDispatcher, { ...newProps, context }));
  }
};
const nav$2 = { "home": "Home", "about": "About", "history": "Research", "mill": "The Mill", "name": "The Name", "dna": "DNA", "lineage": "Lineage", "contact": "Get in Touch", "language_toggle_label": "Language" };
const home$1 = { "hero_subtitle": "From Flanders, to the World", "mystery_question": "A surname. A region. An open question.", "mystery_intro_p1": "This site is a genealogical research project dedicated to the surname", "mystery_intro_p1_cont": "— a name borne by families who lived for centuries in the villages of the Meetjesland in East Flanders: Ursel, Bassevelde, Boekhoute, Kaprijke, Evergem, and their neighbours.", "mystery_visitor_note": "If you arrived here looking for information about the Flanders region itself, you are warmly welcome — and we hope the history woven through this research is of interest to you. This project is about one family name, not the region as a whole.", "mystery_toponymic_p1": "The conventional reading of the surname is", "mystery_toponymic_p1_cont": "simply means 'from Flanders,' a label that could have attached to any family that migrated from the broader region into a more local community. Many Flemish surnames share this pattern, and for most bearers of the name, this explanation may well be the complete story.", "mystery_emerging": "But the documentary record raises two questions that a purely toponymic explanation does not easily answer — and this project exists to investigate them.", "hypothesis_one_label": "Working hypothesis one", "hypothesis_one_title": "A small number of founding families", "hypothesis_one_body": "When the earliest traceable Van Vlaenderen lines across the Meetjesland parishes are mapped together, the name does not appear to scatter randomly across the region. Early research suggests the possibility that all documented Van Vlaenderen lines descend from no more than two or three founding families — perhaps even a single common ancestor within the early modern documentary period — rather than from independent families who happened to share a descriptive label. This hypothesis is being tested through parish record analysis and genetic genealogy. It remains unproven, and the evidence gathered so far is suggestive rather than conclusive.", "hypothesis_two_label": "Working hypothesis two", "hypothesis_two_title": "A title that became a surname", "hypothesis_two_p1": "Historical records document a figure named Victor van Vlaenderen, an acknowledged natural son of Louis II, Count of Flanders, who held the lordship of Wessegem in the parish of Ursel — the very heart of the region where the Van Vlaenderen surname later appears in parish registers. Victor died before 1442, leaving documented natural sons Lodewyc, Janne, and Adam van Vlaendren. Local records place Adam in the Maldegem and Ursel area in the mid-fifteenth century.", "hypothesis_two_p2": "The working hypothesis — and it is no more than that at this stage — is that as the era of the Counts of Flanders ended, descendants of this comital line may have carried the name van Vlaenderen forward not as a description of geographic origin, but as a form of inherited identity. If so, the surname may have seeded one or more of the family lines that later appear in the Meetjesland parish registers. This connection is plausible and merits further investigation, but at present remains a hypothesis requiring additional archival and genetic evidence. The archival work required to confirm or refute it is ongoing.", "pull_quote": "One name. One region. The question is whether it was ever truly one family.", "cta_research": "View the Research Dossier", "cta_collaborative_p1": "This project is collaborative by design. If you carry the name", "cta_collaborative_p1_cont": "— in any historical spelling — or if you descend from a Van Vlaenderen woman whose line continued under a different name, your family records and DNA results may hold a piece of the answer. We invite you to explore what has been gathered here, compare it against your own research, and get in touch.", "research_note": "No claim is made here that any living person descends from the Counts of Flanders. We are researchers, not storytellers. The evidence will go where it goes.", "explore_archive": "Explore the Archive", "card_mill_title": "The Mill", "card_mill_subtitle": "A family's livelihood", "card_mill_quote": "The miller families of Meetjesland — their lives, their land, their legacy.", "card_name_title": "The Name", "card_name_subtitle": "Origins & variants", "card_name_quote": "Where did the name begin — and how many families share a single root?", "card_research_title": "Research", "card_research_subtitle": "Medieval & Collateral Lines", "card_research_quote": "Exploring the lineages of Louis II 'de Male,' Count of Flanders, including Victor and the Praet line.", "card_dna_title": "Are We Connected?", "card_dna_subtitle": "The DNA project", "card_dna_quote": "Y-DNA and autosomal testing are being used to test whether all Van Vlaenderen lines share a common ancestor.", "cta_explore": "Explore the Origins", "cta_contribute": "Contribute Your Research", "footer_project": "An independent genealogical research project", "footer_permission": "No publication without permission", "hero_subtitle_narrative": "From Flanders, to the World", "hero_subtitle_locations": "Meetjesland · Ghent · East Flanders" };
const about$1 = { "page_title": "About This Project", "intro_heading": "15+ Years in the Making", "intro_body": "What began as a search for an astronomer's unknown origins became one of the most rewarding research journeys of our lives. Our father never knew where his family came from. We do now.", "project_heading": "The Research", "project_body": "We have traced the Van Vlaenderen line through 40+ East Flanders parishes, from a documented miller in 1568 Ghent to Charles Louis Van Vlaenderen, who left Bassevelde for America in 1881. Along the way we have worked with Flemish archives, DNA science, and the generosity of researchers on both sides of the Atlantic.", "tools_heading": "How We Work", "tools_body": "Our research draws on Flemish civil and parish records, archival collections at Rijksarchief Gent and Rijksarchief Brugge, Y-DNA analysis, and AI-assisted paleography of 16th–17th century secretary hand.", "festival_note": "We first encountered the Van Vlaenderen name on a promotional banner at the Festival van Vlaenderen — a small, surreal moment that set everything in motion.", "lineage_cta_heading": "Explore the Documented Line", "lineage_cta_body": "We have traced 14 generations of the Van Vlaenderen family through East Flanders parish records, civil archives, and DNA analysis. Click below to see the interactive family tree.", "lineage_cta_link": "View the Lineage", "contributors_heading": "The Team", "contributor_michael": "Michael — research, technology, and American family records", "contributor_constance": "Constance — co-researcher and family memory keeper", "hero_eyebrow": "Van Vlaenderen · About This Project", "hero_title": "The Van Vlaenderen Research Initiative", "hero_lead": "A genealogical and historical project dedicated to documenting the origins, migration patterns, and familial connections of the Van Vlaenderen surname.", "scope_heading": "Research Scope and Methodology", "scope_intro": "Our work focuses on the Meetjesland region of East Flanders, specifically the parishes and villages of Bassevelde, Boekhoute, Waarschoot, Oostwinkel, and their surrounding areas. We employ a multi-disciplinary approach that integrates traditional archival research with modern genetic genealogy.", "scope_sources": "Our primary source material includes:", "source_parish": "Parish Registers and Civil Records", "source_parish_desc": "Systematic indexing of births, marriages, and deaths from the 17th century forward.", "source_estate": "Estate Inventories (Staten van Goed)", "source_estate_desc": "Analysis of inheritance and property records to reconstruct family structures.", "source_land": "Land Registers and Notarial Archives", "source_land_desc": "Mapping land ownership and legal transactions to trace geographic movement.", "source_dna": "Y-DNA Analysis", "source_dna_desc": "Utilizing paternal-line genetic testing to investigate shared origins between geographically distinct branches.", "methodology_note": "We maintain a strict distinction between documented evidence and working hypotheses. Our findings are subject to ongoing revision as new archival material and DNA results become available.", "origins_heading": "Project Origins", "origins_body": "The initiative was established by siblings Michael and Constance Van Flandern. The project's initial impetus was a personal effort to reconstruct our own family history, which had been obscured by the early loss of family members in our father's generation. This absence of inherited records necessitated a rigorous, source-based approach that eventually expanded into a broader study of the Van Vlaenderen surname across time and region.", "photo_caption": "Michael and Constance Van Flandern conducting field research in East Flanders.", "goals_heading": "Collaborative Goals", "goals_intro": "This website serves as a platform for organizing findings, referencing primary sources, and facilitating collaboration with the broader research community. We are committed to an open-exchange model and welcome contact from researchers, historians, and family historians across disciplines and geographies.", "goals_seeking": "We are actively seeking:", "collab_historians": "Historians and Genealogists", "collab_historians_desc": "Particularly those specializing in the Meetjesland or Flemish migratory patterns.", "collab_dna": "DNA Participants", "collab_dna_desc": "Individuals bearing the Van Vlaenderen surname (in any historical spelling) interested in Y-DNA testing.", "collab_family": "Family Researchers", "collab_family_desc": "Descendants with relevant primary source documents, such as family bibles or 19th-century correspondence.", "closing": "By bridging the gap between 15th-century comital records and early modern parish registers, we aim to provide a comprehensive account of the Van Vlaenderen heritage.", "contact_cta_body": "Are you a researcher, historian, or descendant interested in contributing?", "contact_cta_note": "We welcome collaboration and look forward to hearing from you." };
const history$1 = { "page_title": "Our History", "timeline_heading": "The Documented Line", "section_ghent": "Ghent Origins", "ghent_body": "The earliest documented ancestor is Franciscus Van Vlaenderen, recorded in Sint-Salvator parish, Ghent, in 1568. A weaver turned miller, his family's movement from the city to the rural parishes of East Flanders over the following generations reflects the broader patterns of Flemish rural life.", "section_eastflanders": "East Flanders, 1600–1850", "eastflanders_body": "For nearly three centuries the family worked the land and mills of parishes including Bassevelde, Oostwinkel, Boekhoute, and Waarschoot. The Van Vlaenderen name appears consistently in baptism, marriage, and burial records across this network of villages.", "section_charles": "Charles Louis Leaves", "charles_body": "In 1881, Charles Louis Van Vlaenderen — born in Bassevelde in 1854 — emigrated to America. He married Jacqueline Vermaas, a Dutch immigrant, and built a life in the New World. It is his branch that carries the name in America today.", "section_noble": "A Speculative Thread", "noble_body": "A separate and unproven hypothesis traces a possible line back to Victor van Vlaenderen, a documented natural son of Louis II 'de Male,' Count of Flanders, who died before 1442 and held the lordship of Wessegem. We present this as what it is: an intriguing possibility, not a proven connection.", "noble_caveat": "Speculative — not yet supported by documentary evidence" };
const mill$1 = { "page_title": "The Van Vlaenderensmolen", "intro_heading": "A Mill in the Family", "intro_body": "The mill is more than a landmark — it is the thread that connects generations. The Van Vlaenderen family were lineages of millers, and the mill at the heart of Bassevelde still bears their name.", "history_heading": "History of the Mill", "visit_heading": "Visiting Today", "visit_body": "The mill still stands in Bassevelde today, serving as an anchor point for anyone tracing the roots of this family.", "hero_eyebrow": "Van Vlaenderen · Vinderhoute · Meetjesland", "hero_title": "The Van Vlaenderensmolen", "hero_lead": "A windmill was more than a machine. For the Van Vlaenderen family, it was a livelihood, an identity, and a beacon in the East Flanders landscape.", "proverb_quote": "The mill cannot grind with the water that is past.", "proverb_source": "Flemish miller's proverb", "history_p1": "In the village of Vinderhoute, within the municipality of Lovendegem in East Flanders, stands a historic windmill that has long been known as the Van Vlaenderensmolen. This wooden post mill, mounted on a central pivot so the entire structure could be turned into the wind, is one of the most tangible connections between the Van Vlaenderen family and the landscape of the Meetjesland.", "history_p2": "The mill took its name from the family that owned and operated it. In 1886, the property was purchased by Eduardus Van Vlaenderen (1832–1886), a farmer and miller who established the family's presence at the site. This acquisition made the Van Vlaenderen household part of the network of millers who played an essential role in the region's agricultural economy.", "history_p3": "Following Eduardus's death later that same year, the mill remained within the family, continuing its association with the Van Vlaenderen name into the next generation. His son, Frans Eduard Van Vlaenderen (1879–1954), grew up in the miller's household and continued the family's agricultural and milling traditions.", "lineage_title": "A Lineage of Millers", "lineage_gerardus": "Gerardus Van Vlaenderen", "lineage_gerardus_note": "Miller in Bassevelde, ca. 1720", "lineage_eduardus": "Eduardus Van Vlaenderen", "lineage_eduardus_note": "Purchased the Vinderhoute mill in 1886", "lineage_frans": "Frans Eduard Van Vlaenderen", "lineage_frans_note": "Continued the family tradition into the 20th century", "photo_caption": "The Van Vlaenderensmolen, Vinderhoute — the mill that bears the family name.", "photo_attribution": "Photo by", "social_title": "The Miller's Place in Flemish Society", "social_p1": "In rural Flanders during the nineteenth century, the miller occupied a position of considerable importance. Farmers from the surrounding countryside brought their grain to the mill to be ground into flour, and the mill stood at the center of village economic life. Ownership of a working windmill required capital, land, and technical knowledge, and millers were often among the more established families of their communities.", "social_p2": "Wind power was the renewable energy of its age — patient, unpredictable, and essential. The miller's skill lay in reading the weather, adjusting the sails, and coaxing work from the wind. It was a craft passed from father to son, bound up in the rhythms of the seasons and the needs of the surrounding farms.", "region_title": "The Meetjesland Region", "region_p1": "The Meetjesland is a historic region in the province of East Flanders, Belgium, lying between the cities of Ghent and Bruges. It is a flat, green landscape of polders, canals, and small villages — a world shaped by water management, farming, and the rhythms of the seasons. The Van Vlaenderen family appears in the records of several Meetjesland villages, including Bassevelde, Ursel, Evergem, Boekhoute, and Merendree.", "location_title": "Location", "location_village": "Bassevelde, East Flanders", "location_coords": "51°06′N 3°36′E", "location_link": "View on Google Maps →", "cta_text": "Do you have family records or photos related to the Van Vlaenderensmolen?", "cta_note": "We are always looking to expand our archive of the family's milling history.", "proverb_text": "Heaven gives; whoever catches has it.", "history_title": "The Van Vlaenderensmolen", "lineage_gen_1": "I", "lineage_name_1": "Gerardus", "lineage_dates_1": "Van Vlaenderen", "lineage_role_1": "Farmer · Meetjesland", "lineage_gen_2": "II", "lineage_name_2": "Eduardus", "lineage_dates_2": "1832 – 1886", "lineage_role_2": "Farmer & Miller", "lineage_gen_3": "III", "lineage_name_3": "Frans Eduard", "lineage_dates_3": "1879 – 1954", "lineage_role_3": "Miller's household", "photo_alt": "The Van Vlaenderensmolen in Vinderhoute, East Flanders", "social_p3": "The history of the Van Vlaenderensmolen also reflects the vulnerability of these wooden structures to the forces of nature. In 1905, a powerful storm severely damaged the mill. The family rebuilt and restored the structure, ensuring that the mill continued to serve the surrounding farms and remained a visible landmark in the landscape of Vinderhoute.", "social_p4": "Today, the Van Vlaenderensmolen stands as a rare physical reminder of the family's historical presence in the Meetjesland — a point where landscape, livelihood, and surname intersect.", "location_name": "Van Vlaenderensmolen", "location_address": "Vinderhoute, Lovendegem, East Flanders, Belgium", "visit_p1": "Today, the Van Vlaenderensmolen is a protected monument, standing as a testament to the industrial heritage of East Flanders. While it is no longer a working commercial mill, it remains a significant site for those interested in the intersection of family history and regional history.", "visit_p2": "The mill is located on the Molenstraat in Vinderhoute. Visitors can view the exterior of the structure and, on specific heritage days, may have the opportunity to explore the interior and learn more about the mechanics of traditional Flemish milling." };
const dna$1 = { "page_title": "DNA Project", "intro_heading": "Science Meets History", "intro_body": "By combining traditional genealogy with Y-DNA testing, we are working to determine if the various Van Vlaenderen branches share a common biological ancestor.", "haplogroup_label": "Current haplogroup", "haplogroup_value": "R-FT1573 (singleton)", "what_heading": "What We're Looking For", "what_body": "We are seeking male-line Van Vlaenderen descendants willing to take a Big Y-700 test. Autosomal DNA (AncestryDNA, 23andMe) is useful for close relationships but cannot confirm a shared paternal line across many generations. Y-DNA can.", "privacy_heading": "Your Privacy", "privacy_body": "Participation is entirely voluntary. Your results are your own. We will never share individual results without explicit permission.", "cta": "Get in Touch About DNA", "hero_eyebrow": "Van Vlaenderen · Genetic Genealogy", "hero_title": "The DNA Project", "hero_lead": "Where the paper trail ends, the genetic record begins. We are using DNA analysis to bridge the gaps in the archival record and test our hypotheses of shared origin.", "origin_heading": "The Question of Common Origin", "origin_p1": "Genealogical research into the Van Vlaenderen name has identified several documented family lines rooted in the Meetjesland and surrounding regions of East Flanders. At first glance, these lines appear in different parishes and at different moments in the historical record.", "origin_p2": 'The traditional assumption has been that families bearing the surname Van Vlaenderen — meaning "from Flanders" — may have adopted it independently as a locative designation. Yet closer examination of parish registers, land records, and patterns of proximity reveals a striking geographic concentration and recurring associations between families carrying the name.', "origin_p3": "Rather than suggesting fragmentation, the documentation raises the possibility that many, perhaps even all, Van Vlaenderen families of the region may descend from a shared ancestor whose identity predates surviving parish records.", "origin_p4": "Traditional genealogical research — relying on parish registers, civil records, and land documents — allows us to reconstruct much of this story, but gaps remain in the medieval period. DNA testing offers a complementary avenue of inquiry, helping to determine whether present-day Van Vlaenderens share a common paternal lineage.", "origin_p5": "This question remains open — and it is one that can only be answered collectively.", "origin_p6": "If you bear the name Van Vlaenderen, your family history may hold an essential piece of the puzzle.", "pullquote": "Genealogy without genetics is like a map without a compass. Both are useful; together, they are powerful.", "family_photo_caption": "Every Van Vlaenderen family carries a story. Photographs like this one — passed down through generations — are part of the evidence that connects us across time.", "dna_heading": "How DNA Genealogy Works", "dna_intro": "Modern genetic genealogy uses several types of DNA testing to trace family connections across generations:", "dna_ydna": "Y-DNA", "dna_ydna_desc": "Passed from father to son, Y-DNA testing traces the direct paternal line. It is particularly useful for surname research, as the Y chromosome and the surname are often inherited together. Two men who share the surname and closely matching Y-DNA results — particularly at the terminal SNP level — may share a relatively recent common paternal ancestor.", "dna_autosomal": "Autosomal DNA", "dna_autosomal_desc": "Autosomal DNA is inherited from both parents and can identify cousins across all family lines within approximately five to seven generations. Services such as AncestryDNA, 23andMe, and FamilyTreeDNA use autosomal testing to match you with living relatives who have also tested.", "dna_mtdna": "mtDNA", "dna_mtdna_desc": "Mitochondrial DNA is passed from mother to child and traces the direct maternal line. While less commonly used in surname research, it can confirm or challenge assumptions about maternal ancestry.", "project_heading": "The Van Vlaenderen Genetic Genealogy Project", "project_p1": "The Van Vlaenderen DNA Project brings together descendants of the various documented Van Vlaenderen family lines to explore a central question: do we share a common ancestor?", "project_p2": "Historical records allow us to trace the surname across multiple parishes in the Meetjesland and surrounding regions of East Flanders. DNA analysis offers a complementary tool, enabling us to examine whether present-day bearers of the name share a common paternal lineage that predates surviving parish records.", "project_p3": "Participation is open to anyone who carries the Van Vlaenderen surname — in any historical spelling — as well as to descendants of Van Vlaenderen women whose family lines continued under different names.", "project_p4": "No prior genealogical research is required. If you have already tested with services such as AncestryDNA, 23andMe, or FamilyTreeDNA, your existing results may be usable. Those interested in deeper paternal-line analysis may choose to pursue additional Y-DNA testing.", "project_p5": "This project is collaborative, voluntary, and research-based. Each participant helps clarify the historical origins of our shared name.", "services_heading": "Recommended Testing Services", "service_familytreedna": "FamilyTreeDNA", "service_familytreedna_note": "Best for Y-DNA and surname projects", "service_ancestry": "AncestryDNA", "service_ancestry_note": "Largest autosomal database", "service_23andme": "23andMe", "service_23andme_note": "Health + ancestry combined", "service_myheritage": "MyHeritage DNA", "service_myheritage_note": "Strong European database", "cta_body": "Are you a Van Vlaenderen descendant who has already taken a DNA test?", "cta_note": "Contact us to learn more about the testing process and how you can contribute.", "results_heading": "Current Findings", "results_body": "Initial testing has shown promising connections between families in Bassevelde and those who emigrated to the United States. We are actively seeking more participants to broaden our data set.", "science_title": "The Science of Shared Ancestry", "science_p1": "This project utilizes Y-DNA testing, which analyzes the Y-chromosome passed down from father to son. Because the Y-chromosome remains relatively unchanged over generations, it is a powerful tool for investigating paternal lineages and determining if two men with the same surname share a common ancestor within a genealogical timeframe.", "science_p2": "In addition to Y-DNA, we also look at autosomal DNA results to find connections between descendants of Van Vlaenderen women, helping to reconstruct the broader family network across the centuries.", "goals_title": "Project Goals", "goal_1": "Verify the connection between the various Meetjesland branches of the family.", "goal_2": "Investigate the potential link to the medieval comital-bastard lines.", "goal_3": "Assist family members in identifying their specific branch of the Van Vlaenderen tree.", "participation_title": "How to Participate", "participation_p1": "We invite any male bearing the Van Vlaenderen surname (or its variants) to join our DNA project. We primarily use FamilyTreeDNA for our Y-DNA testing, as it hosts the largest database for surname-based research.", "participation_p2": "If you have already tested with another service like AncestryDNA or 23andMe, your autosomal results can still be a valuable contribution to our research.", "cta_text": "Interested in joining the Van Vlaenderen DNA Project?" };
const contact$1 = { "page_title": "Contact Us", "intro_body": "We welcome inquiries from fellow researchers, historians, and anyone interested in the Van Vlaenderen family history.", "name_label": "Your name", "email_label": "Email address", "message_label": "Your message", "submit_label": "Send message", "privacy_note": "We respect your privacy. Your details will never be shared or used for any purpose other than responding to you.", "success_message": "Thank you for your message. We will be in touch soon.", "hero_eyebrow": "Van Vlaenderen · Collaboration", "hero_title": "Connect With the Project", "hero_lead": "Genealogy is a collaborative journey. Whether you have a question, a correction, or a piece of the puzzle to share, we look forward to hearing from you.", "reasons_title": "Why Reach Out?", "reason_name_title": "You carry the name", "reason_name_text": "If your surname is Van Vlaenderen — in any spelling — we want to know your story. Every branch of the family matters.", "reason_docs_title": "You have documents or photographs", "reason_docs_text": "Old letters, birth certificates, photographs, land records — any document connected to the Van Vlaenderen family is valuable.", "reason_dna_title": "You have taken a DNA test", "reason_dna_text": "If you have tested with AncestryDNA, 23andMe, or FamilyTreeDNA and have Van Vlaenderen ancestry, your results could connect the branches.", "reason_local_title": "You have local knowledge", "reason_local_text": "If you live in or near the Meetjesland and know stories about the Van Vlaenderen family or the mill at Vinderhoute, please share them.", "reason_question_title": "You have a question", "reason_question_text": "Genealogical research can be confusing. If you have a question about the Van Vlaenderen family or how to research your own roots, ask away.", "privacy_text": "Your personal information is never shared, sold, or published without your explicit consent. This is a private family research project.", "form_title": "Send a Message", "form_name": "Name", "form_name_placeholder": "e.g. Jan Van Vlaenderen", "form_email": "Email", "form_email_placeholder": "your@email.com", "form_subject": "Subject", "form_subject_placeholder": "Select a topic…", "form_subject_research": "Family Research", "form_subject_dna": "DNA Project", "form_subject_docs": "Documents or Photographs", "form_subject_mill": "The Mill", "form_subject_general": "General Enquiry", "form_message": "Message", "form_message_placeholder": "Tell us about your connection to the Van Vlaenderen family…", "form_submit": "Send Message", "form_sending": "Sending...", "form_success": "Thank you for reaching out! We have received your message and will respond as soon as possible.", "form_error": "There was an issue sending your message. Please try again.", "pull_quote": "Family history is not just about the past. It is about understanding who we are and where we come from — and perhaps finding others who share that journey.", "collage_caption": "Every family has photographs. Every photograph tells part of the story. Share yours with the Van Vlaenderen archive.", "intro_heading": "Get in Touch", "info_heading": "Research Inquiries", "info_body": "For specific questions regarding our archival findings, DNA project, or methodology, please use the form below. We aim to respond to all serious research inquiries within a few days.", "collab_heading": "Collaborative Opportunities", "collab_body": "We are particularly interested in hearing from individuals with Y-DNA results or primary source documents from the Meetjesland region.", "error_message": "There was an error sending your message. Please try again." };
const footer$1 = { "tagline": "Van Vlaenderen — from Flanders", "rights": "All rights reserved", "built_with": "Built with care in Belgium and America" };
const common$1 = { "read_more": "Read more", "back": "Back", "speculative": "Speculative", "documented": "Documented", "loading": "Loading…", "error": "Something went wrong" };
const lineage$1 = { "page_title": "Family Lineage", "page_intro": "The documented Van Vlaenderen line from Jeremiah (~1575) to the present — traced through East Flanders parish records, civil archives, and DNA. Click any ancestor to see the archival details.", "legend_label": "Evidence status key", "tree_label": "Van Vlaenderen ancestor tree", "click_hint": "Click any card for details", "generation": "Generation", "born_prefix": "b.", "records_available": "Records available", "status_documented": "Fully documented", "status_partial": "Partial records", "status_inferred": "Inferred / approximate", "status_modern": "Modern family", "record_birth": "Birth", "record_marriage": "Marriage", "record_death": "Death", "view_archive": "View in archive", "detail_born": "Born", "detail_parish": "Parish", "detail_birth": "Birth record", "detail_marriage": "Marriage record", "detail_death": "Death record", "detail_status": "Evidence status", "source_note": "Parish and civil records sourced from", "source_note_2": " and Rijksarchief Brugge. Research ongoing." };
const research$1 = { "hero_eyebrow": "Van Vlaenderen · Medieval Research", "hero_title": "Medieval & Collateral Lines", "hero_lead": "Investigating the potential origins of the Van Vlaenderen surname within the illegitimate branches of the Comital House of Flanders.", "dossier_title": "Research Overview", "dossier_updated": "Updated April 2026", "intro_title": "The Scope of Investigation", "intro_p1": "This section of the project focuses on the period between the 14th and 16th centuries, exploring the documented individuals who bore the name 'van Vlaenderen' before the establishment of consistent parish registers. Our primary focus is the illegitimate descent from the Counts of Flanders, specifically the lines of Louis II 'de Male.'", "intro_p2": "The emergence of 'van Vlaenderen' as a heritable surname appears to coincide with the 'crystallisation' of the Dampierre dynasty's identity. As the era of the Counts of Flanders reached its transition point in 1384, the name was adopted by certain natural sons not as a description of origin, but as a formal hereditary identifier of their comital roots.", "methodology_title": "Methodology & Evidence Levels", "method_attested_label": "Directly Attested", "method_attested_text": "Statements resting on quoted charter language or explicit documentary summaries in published authorities.", "method_corroborated_label": "Strongly Corroborated", "method_corroborated_text": "Statements supported by concordant published historical or heritage authorities.", "method_probable_label": "Probable", "method_probable_text": "Source-based statements that require fuller inspection of the underlying editions before being treated as settled.", "method_hypothesis_label": "Hypothesis", "method_hypothesis_text": "Genealogical inferences proposed for further testing, not yet proven as fact.", "significance_title": "Genealogical Significance", "significance_p1": "The central question of this research is whether the modern Van Vlaenderen families of the Meetjesland descend from these medieval comital-bastard lines. While the surname and geographic proximity (Ursel/Wessegem) are highly suggestive, the 'generational bridge' between 1450 and 1550 remains the primary focus of our ongoing archival work.", "branches_title": "Primary Research Branches", "branches_intro": "Our investigation is currently divided into two main documented branches of the comital-bastard line:", "branch_victor_title": "The Line of Victor van Vlaenderen", "branch_victor_text": "Lord of Wessegem in Ursel. This branch is of particular interest due to its direct territorial connection to the heart of the Van Vlaenderen surname distribution.", "branch_victor_link": "Explore the Victor Lineage", "branch_louis_title": "The Line of Louis 'Friese' (Praet)", "branch_louis_text": "The House of Flanders-Praet. A well-documented branch that held significant lordships and high offices in the Burgundian and Habsburg Netherlands.", "branch_louis_link": "Explore the Praet Lineage", "conclusion_title": "Ongoing Work", "conclusion_p1": "We are actively searching the archives of Ghent and Bruges for 15th-century records that may provide the missing links between these medieval figures and the earliest ancestors found in parish registers.", "cta_text": "Are you a researcher specializing in 15th-century Flemish archives?", "cta_note": "We welcome collaboration on the archival search for the 'missing generations' of the Van Vlaenderen line." };
const name$1 = /* @__PURE__ */ JSON.parse(`{"hero_eyebrow":"Van Vlaenderen · Etymology · History","hero_title":"The Van Vlaenderen Name","hero_lead":"A name is a vessel for history. To understand the Van Vlaenderen surname is to trace the movement of people across the landscape of Flanders.","intro_p1":"The surname \\"Van Vlaenderen\\" is a classic example of a toponymic name, literally meaning \\"from Flanders.\\" In the context of medieval Europe, such names were often given to individuals who had migrated from a larger region into a more local community, serving as a marker of their origin.","intro_p2":"However, as our research suggests, the story of the Van Vlaenderen name in the Meetjesland may be more nuanced. The striking geographic concentration of the name and its recurring associations with specific parishes raise the possibility of a shared ancestral root, perhaps even a connection to the comital house of Flanders itself.","intro_p3":"This page explores the various ways the name has been recorded over the centuries, the regions where it is most prevalent, and the historical documents that provide clues to its earliest origins.","map_alt":"Map of the Meetjesland region in East Flanders showing Bassevelde and Ursel","map_caption":"The Meetjesland region of East Flanders — the villages of Bassevelde and Ursel represent the documented heartland of the Van Vlaenderen surname, situated between Bruges and Ghent.","pull_quote":"The name Van Vlaenderen is, in itself, a piece of history — a record of movement, identity, and belonging written into the family's very title.","villages_title":"Where the Name Appears","village_bassevelde":"Bassevelde","village_bassevelde_note":"Parish records from the 17th century","village_ursel":"Ursel","village_ursel_note":"Land and mill ownership records","village_boekhoute":"Boekhoute","village_boekhoute_note":"Early civic and land records","village_waarschoot":"Waarschoot","village_waarschoot_note":"A significant cluster of Van Vlaenderen families in the 18th century.","village_oostwinkel":"Oostwinkel","village_oostwinkel_note":"Home to several documented agricultural lines.","variations_title":"Spelling Variations","cronike_title":"The Cronike Van Vlaenderen","cronike_p1":"One of the most important medieval chronicles of Flanders is the Cronike Van Vlaenderen — the Chronicle of Flanders. This 15th-century manuscript documents the history of the Counts of Flanders and the great events of the region from its earliest recorded history. It is a remarkable work of medieval historiography, richly illustrated with heraldic shields and portraits of the Flemish nobility.","cronike_p2":"The chronicle is not a genealogical record of the Van Vlaenderen family, but it provides essential context for understanding the world in which the family lived. The Counts of Flanders — whose heraldic lion, the Leeuw van Vlaanderen, became the symbol of the entire region — shaped the political, economic, and cultural landscape that the Van Vlaenderen family inhabited for generations.","manuscript_alt":"Illuminated manuscript page from the Cronike van Vlaenderen.","manuscript_caption":"A page from the Cronike van Vlaenderen, illustrating the rich heraldic and historical tradition of the region.","card_heraldry_title":"Heraldic Traditions","card_heraldry_text":"The use of the lion of Flanders in various family seals and coats of arms.","card_charters_title":"Medieval Charters","card_charters_text":"Documentary evidence of the name in 14th and 15th-century legal records.","card_migration_title":"Migration Patterns","card_migration_text":"Tracing the movement of the name from the comital courts to the rural parishes.","cta_text":"Is your family name a variant of Van Vlaenderen?","cta_note":"We are documenting all historical spellings and regional variations of the name.","history_title":"History of a Surname","history_p1":"Early parish and civic records show the name concentrated within a relatively small area of the Meetjesland in East Flanders, particularly in Bassevelde, Boekhoute, Evergem, Lovendegem, Sleidinge, Ursel, and Wessegem. The continuity of the surname in this region across multiple generations invites closer historical examination.","history_p2":"While the conventional toponymic explanation remains entirely plausible, the geographic density and early persistence of the name — together with its relative rarity outside East Flanders — invite an additional question: whether the surname may at some point have developed from a more specific territorial or local designation during the late medieval period, perhaps connected to the close of the era of the Counts of Flanders.","history_p3":"This site gathers available documentation and invites Van Vlaenderens around the world to explore the records, contribute family narratives, connect family trees, and participate in the Van Vlaenderen Family Genealogy Project.","villages_intro":"The Van Vlaenderen name appears in the historical records of several East Flemish communities, concentrated in the Meetjesland region. The villages where the name is most frequently documented include:","village_evergem":"Evergem","village_evergem_note":"Civil registration from 1796","village_lovendegem":"Lovendegem","village_lovendegem_note":"Municipal records, 19th century","village_sleidinge":"Sleidinge","village_sleidinge_note":"Parish and notarial records","village_wessegem":"Wessegem","village_wessegem_note":"Medieval territorial and seigneurial references associated with the Ursel area","village_vinderhoute":"Vinderhoute","village_vinderhoute_note":"Home of the Van Vlaenderensmolen","variations_intro":"Before standardised spelling was enforced through civil registration in the Napoleonic period (after 1796 in Belgium), surnames were recorded phonetically by parish priests and local officials. The Van Vlaenderen name appears in historical documents in a wide variety of forms:","variations_footer":"If you are researching the Van Vlaenderen family in historical archives, it is worth searching for all of these variants, particularly in records predating 1800.","document_alt":"Pages from the Cronike Van Vlaenderen showing heraldic shields with medieval Flemish labels referring to the Counts and noble houses of Flanders","document_caption":"Pages from the Cronike van Vlaenderen showing heraldic shields labeled with medieval forms referring to the Counts and noble houses of Flanders. These are not genealogical attestations of the later hereditary surname, but important contextual evidence for the linguistic and political use of 'van Vlaenderen' in medieval documentary culture.","manuscript_1_alt":"Countess of Flanders on horseback surrounded by heraldic shields — illuminated manuscript","manuscript_1_caption":"Countess of Flanders — from the Cronike Van Vlaenderen, surrounded by the heraldic shields of the great Flemish houses","manuscript_2_alt":"Philip of Alsace, Count of Flanders — illuminated manuscript illustration","manuscript_2_caption":"Philip of Alsace, Count of Flanders — bearing the black lion banner, from a 15th-century illuminated manuscript","manuscript_3_alt":"The Lion of Flanders — woodcut engraving","manuscript_3_caption":"The Lion of Flanders — the enduring symbol of the region the Van Vlaenderen family called home for centuries","cta_button":"Share your story →","page_title":"The Name","intro_heading":"Origins of Van Vlaenderen","intro_body":"The surname Van Vlaenderen is a toponymic name, literally meaning 'from Flanders.' While common in its descriptive form, its specific use as a hereditary surname in the Meetjesland region suggests a more focused origin.","variants_heading":"Historical Variants","variants_body":"Over centuries, the name has appeared in various forms in parish and civil records, reflecting changes in spelling conventions and regional dialects.","etymology_title":"Etymology and Meaning","etymology_p1":"The surname Van Vlaenderen belongs to the category of toponymic surnames — names derived from a geographic location. In the Dutch language, 'van' means 'from' or 'of,' and 'Vlaenderen' is the historical spelling of Flanders. Literally translated, the name identifies the original bearer as someone 'from Flanders.'","etymology_p2":"While this may seem straightforward, the use of such a broad regional name as a specific family identifier is noteworthy. In many cases, toponymic names were given to individuals who moved from their place of origin to a new community. A person moving from the County of Flanders to a neighboring region might be called 'the Fleming' or 'from Flanders.'","variants_title":"Spelling and Regional Variants","variants_p1":"Genealogical research across East Flanders reveals several historical variants of the name. These variations often reflect the phonetic spelling used by parish priests or civil clerks, as well as the evolution of the Dutch language over time.","variant_list_title":"Common historical forms include:","variant_1":"Van Vlaenderen","variant_1_note":"The most common historical and modern form in East Flanders.","variant_2":"Van Vlaandren","variant_2_note":"A common variant found in 17th and 18th-century parish registers.","variant_3":"Van Flandern","variant_3_note":"The form often adopted by branches that emigrated to North America.","variant_4":"De Flandre","variant_4_note":"The French equivalent, often found in early medieval or aristocratic contexts.","distribution_title":"Geographic Distribution","distribution_p1":"The name is most densely concentrated in the Meetjesland region of East Flanders, particularly in the triangle formed by the villages of Bassevelde, Ursel, and Kaprijke. This concentration supports the hypothesis that the modern bearers of the name may descend from a limited number of founding families in this specific area.","four_bucket_title":"What \\"Van Vlaenderen\\" Was Doing in Medieval Documents","four_bucket_intro":"The automatic response to any surname beginning with a place-name is to classify it as toponymic — meaning the family simply came from that place. For \\"van Vlaenderen,\\" that response runs: it just means \\"from Flanders.\\" Debrabandere's authoritative dictionary of Belgian family names gives a PlN (place-name) classification. Case closed.","four_bucket_rebuttal":"The problem is that \\"van Vlaenderen\\" — and its French equivalents de Flandre and de Flandres — was doing at least four different jobs in medieval Flemish and Burgundian documents simultaneously, and only one of them is the hereditary surname. Before any record can be counted as evidence for our family, it must be assigned to the right category. Debrabandere's classification is an etymological statement about word origin, not a genealogical statement about family continuity. The two questions are separate.","four_bucket_table_heading":"Four Functions of \\"Van Vlaenderen\\" in the Documentary Record","four_bucket_b1_label":"Governmental phrase","four_bucket_b1_desc":"The phrase appears routinely in institutional headings with no surname function: Souvereyne Kamer van Redeninge van Vlaenderen, De Gedeputeerde van de Staeden van Vlaenderen. These tell us where an institution operated, not who someone's family was.","four_bucket_b2_label":"Feudal titulature","four_bucket_b2_desc":"Dienstman Mijnsheeren van Vlaenderen — \\"vassal of my lord of Flanders.\\" This denotes a relationship to the Count, not a family name. Robert de Béthune, Count of Flanders, appears in a 1309–10 Aardenburg record as \\"mijn here Robrecht van Vlaendren\\" — the Count himself, not a surname bearer.","four_bucket_b3_label":"Official staff designation","four_bucket_b3_desc":"Mijns heeren van Vlaenderen messagier — \\"messenger of my lord of Flanders.\\" Staff attached to the comital court carried an office-title that included the phrase. Finding \\"van Vlaenderen\\" in a civic account book does not automatically mean a hereditary surname. However, this bucket is also the most common progenitor of Bucket 4: the son of an office-holder often inherited the name long after the office itself had passed.","four_bucket_b4_label":"Hereditary surname","four_bucket_b4_desc":"Identifiable individuals and multi-generational family clusters using the name as a transmitted family identifier: Victor van Vlaenderen and his documented natural sons Lodewyc, Janne, and Adam (1441/42 charter); the Brugse Vrije testator Joos van Vlaenderen (1547); the East Flanders parish-record families across Bassevelde, Boekhoute, Ursel, and Waarschoot. This is the genealogical evidence. Buckets 1–3 must be excluded before Bucket 4 can be counted.","four_bucket_conclusion":"The genealogical case for the Van Vlaenderen family rests entirely on Bucket 4. But Buckets 1–3 are not irrelevant — they explain why a hereditary surname based on this phrase could emerge and stabilise in the first place. The phrase was prestigious, administratively embedded, and culturally significant in Flemish documentary life for two centuries before our earliest hereditary surname bearers appear. Bucket 3 in particular is often the progenitor of Bucket 4: when an office-holder's son inherits not the office but the name attached to it, a hereditary surname is born. That is the soil in which the surname took root — it does not make the name generic; it makes its persistence meaningful.","map_caption_bucket_note":"The map plots the geographic research cluster — parishes where the Van Vlaenderen surname appears in documented records. Individual map points represent locations, not pre-classified surname attestations; the four-bucket analysis above must be applied to each source before a record can be treated as hereditary surname evidence."}`);
const victor$1 = { "hero_eyebrow": "Van Vlaenderen · Genealogical Research", "hero_title": "Victor van Vlaenderen", "hero_lead": "Lord of Wessegem in Ursel; natural son of Louis II 'de Male,' Count of Flanders. A central figure in the investigation of the surname's origins.", "dossier_title": "Victor van Vlaenderen Dossier", "dossier_updated": "Updated April 2026", "origin_title": "Origins and Status", "origin_p1": 'Victor van Vlaenderen was an acknowledged natural son of Louis II "de Male," Count of Flanders. His status as a member of the comital family, though illegitimate, granted him significant standing within the Flemish nobility. He was granted the lordship of Wessegem, a territory in the parish of Ursel, which became the seat of his branch of the family.', "origin_p2": 'The recognition of Victor by his father is documented in several contemporary charters and accounts. As a "natural" son, he bore the surname "Van Vlaenderen," a direct reference to his comital parentage. This practice was common among the high nobility of the time, serving to distinguish acknowledged illegitimate offspring from the broader population.', "wessegem_title": "The Lordship of Wessegem", "wessegem_p1": "The lordship of Wessegem was a significant landholding in the Meetjesland. Under Victor's tenure, it served as a center of local administration and a base for the family's influence in the region. The records of the lordship provide valuable insights into the social and economic life of 14th-century Flanders.", "wessegem_p2": "Victor's presence in Ursel is particularly noteworthy, as this parish would later become a primary cluster for the Van Vlaenderen surname in the early modern period. The geographic continuity between Victor's medieval lordship and the later distribution of the name is a key focus of our research.", "descendants_title": "Documented Descendants", "descendants_p1": "Victor van Vlaenderen died before 1442, leaving behind several documented sons who continued the Van Vlaenderen name. These include documented natural sons Lodewyc, Janne, and Adam van Vlaendren. Adam, in particular, is recorded in the Maldegem and Ursel area in the mid-15th century, further solidifying the family's connection to the region.", "descendants_p2": "The challenge for genealogical research is to bridge the gap between these 15th-century figures and the earliest entries in the parish registers, which typically begin in the late 16th or early 17th century. Our work involves a meticulous analysis of land records, estate inventories, and notarial archives to trace the survival of the lineage through this transitional period.", "hypothesis_title": "The Survival Hypothesis", "hypothesis_p1": "The central hypothesis of this research branch is that the Van Vlaenderen families found in the Meetjesland parish registers are the direct, albeit socially transformed, descendants of Victor's line. Over the course of the 15th and 16th centuries, cadet branches of the noble family may have moved into the ranks of the local gentry and eventually the prosperous farming and milling classes.", "hypothesis_p2": 'This pattern of "social downward mobility" was not uncommon for illegitimate noble lines. While the primary titles and lands might be lost or subdivided, the surname remained a marker of their shared origin. Testing this hypothesis requires both traditional archival work and the integration of Y-DNA results from present-day Van Vlaenderens.', "tree_title": "The Lineage of Victor van Vlaenderen", "tree_alt": "Lineage diagram showing Victor van Vlaenderen and his sons", "pull_quote": "Victor van Vlaenderen represents the most direct documented link between the Comital House of Flanders and the Meetjesland region.", "sources_title": "Notes & Bibliography", "source_1": "Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut.", "source_2": "Inventaris Onroerend Erfgoed, 'Hoeve Hof van Wessegem.'", "source_3": "'Ursel, een Meetjeslands dorp.'", "back_button": "Back to Research Overview", "badge_attested": "Directly Attested", "badge_corroborated": "Strongly Corroborated", "badge_hypothesis": "Hypothesis", "identity_title": "Identity and Parentage", "identity_p1": "Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II 'de Male,' Count of Flanders. Published regional and prosopographical authorities place him in direct connection with Wessegem in Ursel and identify him as one of Louis van Male's bastard sons.", "territorial_title": "Territorial Setting: Wessegem and Ursel", "territorial_p1": "The territorial setting is central. The Flemish heritage inventory for the Hof van Wessegem traces the estate to the medieval seigneurie of Wessegem and states that by the end of the fourteenth century 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,' were lords of Wessegem; it further notes that the property reverted to the comital domain in 1431. A local Ursel history likewise states that in 1399 Wessegem passed to Victor van Vlaanderen, 'another bastard son of Louis van Male,' and that he often resided there.", "charter_title": "Direct Charter Nucleus", "charter_p1": "The documentary core of Victor's dossier lies in the charter material summarized by the Foundation for Medieval Genealogy. FMG's Flanders, Hainaut material preserves a summary of a charter dated 12 May 1427 naming 'Adam van Vlandren' as the natural son of 'mer Victor van Vlaendren' and specifying that Adam was Victor's son by 'Gertruden Liendekins.'", "charter_p2": "A second FMG summary for a Ghent act of 10 March 1441 Old Style records that 'Mergriete Aelfhuuts Heindricx Maye...wijf' donated property to 'Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen...mer Victor van Vlaendren.' These summaries directly establish that Victor had at least three acknowledged natural sons, that their names were Lodewyc, Janne, and Adam, and that Victor was already dead by the date of the later act.", "military_title": "Victor van Vlaenderen: Naval and Military Activity", "military_p1": 'Victor also appears in published military-maritime literature. A DBNL article states: "Victor was, en dit is belangrijk, kapitein van de vesting Biervliet." A UGent-hosted study on Flemish corsair warfare likewise notes the appointment of "een nieuwe admiraal: Victor van Vlaenderen." These sources support the conclusion that Victor held an important coastal or naval command role.', "significance_title": "Victor van Vlaenderen: Genealogical Significance", "significance_p1": "The genealogical significance of Victor van Vlaenderen lies in the convergence of lineage, locality, and surname. The published record establishes an illegitimate comital branch rooted in the Ursel/Wessegem region and shows Victor's acknowledged natural sons bearing the surname form van Vlaendren.", "significance_p2": "It does, however, provide a substantial medieval documentary nucleus that makes such a continuity hypothesis materially stronger than a mere coincidence-of-surname explanation.", "source_4": 'R. Degryse, "Willem Beukel(s) van Hughevliet: Geschiedenis en legende van een Vlaamse vissersheld," De Vlaamse Gids 38 (1954).', "source_5": "Corvers en zeeschuimers van den Vlaemsche zeecoste, UGent repository copy.", "cta_text": "Do you have research that connects to the line of Victor van Vlaenderen?", "cta_note": "We are actively seeking to bridge the gap between the 15th-century records and the early modern parish registers.", "gap_title": "Bridging the Gap (1442-1547)", "gap_p1": "The single most important unresolved question in this research is the generational bridge between the last documented fifteenth-century van Vlaendren (Adam, last confirmed 1447) and the first confirmed early modern bearer (Joos, fl. 1547). This gap of approximately a century spans the transition from feudal record-keeping to consistent parish registration, and it is where the hypothesis of continuous descent either stands or falls.", "gap_p2": "What the fifteenth-century record establishes is clear: Adam van Vlaendren, natural son of Victor, held land in the Ursel and Wessegem area and was alive as late as the 1441/42 charter. The lordship of Wessegem had reverted to the comital domain in 1431, which means Adam and his brothers did not inherit the lordship itself. They would instead appear in the records not as leaseholders, feudal tenants, or freeholders -- making them harder to trace but not untraceable.", "gap_p3": "Three archival paths offer the most realistic prospect of closing the gap:", "gap_p4": "First, cijnsboeken (rent rolls) and leenboeken (feudal registers) for the ambachten of Ursel and Maldegem, covering the period 1440-1540. If land that was held by Victor's family in the 1420s and 1430s appears in the name van Vlaenderen one or two generations later, that constitutes property continuity — one of the strongest available forms of indirect evidence for continuity of descent.", "gap_p5": "Second, Staten van Goed (probate inventories) for the same region. If Adam died leaving heirs, an estate division record naming his children would be transformative. The relevant collections at Rijksarchief Gent include the Ambacht Ursel, Ambacht Maldegem, and the surrounding heerlijkheden.", "gap_p6": "Third, Raad van Vlaanderen court records. Inheritance disputes, guardianship cases, and kinship statements in court proceedings sometimes preserve genealogical relationships that never appear in parish registers. These records are held at Rijksarchief Gent and have not yet been systematically searched for van Vlaenderen parties.", "gap_p7": "The archival work required to bridge this gap is ongoing. Until it is complete, the connection between the fifteenth-century comital-bastard line and the sixteenth-century Meetjesland van Vlaenderens remains a well-supported hypothesis rather than a proven lineage.", "badge_probable": "Probable" };
const louis_friese$1 = { "hero_eyebrow": "Van Vlaenderen · Genealogical Research", "hero_title": 'Louis "Friese" van Vlaenderen', "hero_lead": "Lord of Praet and Woestine; natural son of Louis II 'de Male,' Count of Flanders. Founder of the House of Flanders-Praet.", "dossier_title": "Louis Friese van Vlaenderen Dossier", "dossier_updated": "Updated April 2026", "praet_title": "The House of Flanders-Praet", "praet_p1": "Louis Friese van Vlaenderen — also styled Lodewijk de Fries or Louis le Frison — was an illegitimate son of Louis II de Male, Count of Flanders. He was granted the lordship of Praet (Oedelem) and the lordship of Woestine, establishing a significant noble branch that bore the van Vlaenderen surname for several generations.", "praet_p2": "The House of Flanders-Praet is one of the most well-documented illegitimate branches of the comital house. Its members held high offices, including the Golden Fleece, and served as advisors to the Dukes of Burgundy and the Habsburg sovereigns.", "extinction_title": "The Extinction of the Noble Line", "extinction_p1": 'The direct noble line of the House of Flanders-Praet is traditionally considered to have become extinct in the male line in 1556 with the death of Louis of Flanders, Lord of Praet, a prominent diplomat and advisor to Emperor Charles V. However, this "extinction" typically refers only to the primary, titled branch of the family.', "extinction_p2": "Our research investigates the possibility that younger sons and cadet branches of the Praet line survived and continued the Van Vlaenderen name in a non-noble capacity. The movement of these branches into the rural parishes of East Flanders would mirror the patterns seen in other illegitimate noble lineages of the period.", "figures_title": "Key Figures of the Praet Line", "figure_1": "Louis Friese van Vlaenderen (d. 1396) — Founder; Lord of Praet and Woestine.", "figure_2": "Johan I van Vlaenderen (d. c.1440) — Lord of Praet; Knighted by the Duke of Burgundy.", "figure_3": "Lodewijk II van Vlaenderen — Lord of Praet and Woestine.", "figure_4": "Lodewijk III van Vlaenderen (d. 1490) — Lord of Praet.", "tree_title": "The Lineage of the House of Flanders-Praet", "tree_alt": "Lineage diagram showing the House of Flanders-Praet from Louis Friese to Jan II", "sources_title": "Notes & Bibliography", "source_1": "Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut.", "source_2": "Foundation for Medieval Genealogy, MedLands: Flemish Nobility.", "source_3": "Wappenwiki: House of Flanders-Praet.", "back_button": "Back to Research Overview", "praet_p3": "Louis Friese was born approximately 1350. He was a prominent military figure and was killed at the Battle of Nicopolis on 28 September 1396, alongside his brothers Louis le Haeze and Jean Sans Terre.", "praet_p4": "The lordship of Praet was acquired by Louis de Male in 1373 and subsequently granted to Louis Friese. This established the family's seat in West Flanders, though their influence and holdings extended across the county.", "praet_p5": "The consistent use of 'van Vlaenderen' by this branch is a key focus of our research. It demonstrates how the name functioned as a hereditary marker of comital descent during the transition from the Dampierre dynasty to the House of Burgundy.", "praet_p6": "The legitimate male line of the House of Flanders-Praet ended with the death of Lodewijk IV in 1556. His only documented son, Jan II, predeceased him without issue, and the lordship of Praet passed to other families.", "survival_title": "Survival of the Surname", "survival_p1": "While the legitimate male line of the Praet lordship ended in 1556, the question of whether cadet or illegitimate branches of this house survived and integrated into the broader Van Vlaenderen population of the Meetjesland remains a subject of investigation.", "survival_p2": "The Praet line serves as a critical 'research control' for our project. By documenting the known members of this high-status branch, we can better distinguish them from the contemporary Van Vlaenderen families appearing in the parish registers of Ursel, Bassevelde, and the surrounding villages.", "figures_intro": "The following individuals represent the primary descent of the House of Flanders-Praet:", "figure_5": "Lodewijk IV van Vlaenderen (d. 1555) — Knight of the Golden Fleece; Stadtholder of Holland.", "source_4": "GenealogieOnline: West-Europese Adel (Lodewijk van Vlaanderen).", "source_5": "GenealogieOnline: West-Europese Adel (Johan van Vlaanderen).", "source_6": "DBNL: Correspondence of Erasmus (referencing Louis of Praet).", "source_7": 'Rootenberg, S. F. U. (2013). "The Van Hille descent of the Swanepoel family". Familia, 50(4), 221-228.', "cta_text": "Do you have research on the cadet branches of the House of Praet?", "cta_note": "We are investigating the potential survival of the van Vlaenderen name through non-seigneurial lines of this house.", "badge_corroborated": "Strongly Corroborated", "badge_hypothesis": "Hypothesis", "badge_attested": "Directly Attested", "badge_probable": "Probable" };
const en = {
  nav: nav$2,
  home: home$1,
  about: about$1,
  history: history$1,
  mill: mill$1,
  dna: dna$1,
  contact: contact$1,
  footer: footer$1,
  common: common$1,
  lineage: lineage$1,
  research: research$1,
  name: name$1,
  victor: victor$1,
  louis_friese: louis_friese$1
};
const nav$1 = { "home": "Home", "about": "Over dit project", "history": "Onderzoek", "mill": "De molen", "name": "De naam", "dna": "DNA", "contact": "Contact", "language_toggle_label": "Taal" };
const home = { "hero_title": "Van Vlaenderen", "hero_subtitle": "Uit Vlaanderen, naar de wereld", "hero_body": "Een familienaam die 'uit Vlaanderen' betekent — voor Belgen vanzelfsprekend, voor de Amerikanen die hem dragen stilletjes betekenisvol. Dit is het verhaal van hoe een molenaarsfamilie uit Oost-Vlaanderen deel werd van het Amerikaanse verhaal.", "cta_history": "Ontdek onze geschiedenis", "cta_dna": "Doe mee aan het DNA-project", "hero_subtitle_narrative": "Van Vlaanderen, naar de wereld", "hero_subtitle_locations": "Meetjesland · Gent · Oost-Vlaanderen", "mystery_question": "Een achternaam. Een regio. Een open vraag.", "mystery_intro_p1": "Deze site is een genealogisch onderzoeksproject gewijd aan de achternaam", "mystery_intro_p1_cont": "— een naam gedragen door families die eeuwenlang in de dorpen van het Meetjesland in Oost-Vlaanderen woonden: Ursel, Bassevelde, Boekhoute, Kaprijke, Evergem en hun buren.", "mystery_visitor_note": "Als u hier bent gekomen op zoek naar informatie over de regio Vlaanderen zelf, bent u van harte welkom — en we hopen dat de geschiedenis die in dit onderzoek verweven is, u interesseert. Dit project gaat over één familienaam, niet over de regio als geheel.", "mystery_toponymic_p1": "De conventionele lezing van de achternaam is", "mystery_toponymic_p1_cont": "betekent simpelweg 'uit Vlaanderen', een label dat verbonden had kunnen zijn aan elke familie die vanuit de bredere regio naar een meer lokale gemeenschap migreerde. Veel Vlaamse achternamen delen dit patroon, en voor de meeste dragers van de naam is deze uitleg wellicht het volledige verhaal.", "mystery_emerging": "Maar het documentaire archief roept twee vragen op die een puur toponymische verklaring niet gemakkelijk beantwoordt — en dit project bestaat om deze te onderzoeken.", "hypothesis_one_label": "Werkhypothese één", "hypothesis_one_title": "Een klein aantal stichtende families", "hypothesis_one_body": "Wanneer de vroegst traceerbare Van Vlaenderen-lijnen in de parochies van het Meetjesland samen in kaart worden gebracht, lijkt de naam zich niet willekeurig over de regio te verspreiden. Vroeg onderzoek suggereert de mogelijkheid dat alle gedocumenteerde Van Vlaenderen-lijnen afstammen van niet meer dan twee of drie stichtende families — misschien zelfs van één enkele gemeenschappelijke voorouder — in plaats van onafhankelijke families die toevallig een beschrijvend label deelden. Deze hypothese wordt getest door middel van analyse van parochieregisters en genetische genealogie. Het blijft onbewezen, en het tot nu toe verzamelde bewijsmateriaal is eerder suggestief dan sluitend.", "hypothesis_two_label": "Werkhypothese twee", "hypothesis_two_title": "Een titel die een achternaam werd", "hypothesis_two_p1": "Historische registers documenteren een figuur genaamd Victor van Vlaenderen, een erkende natuurlijke zoon van Lodewijk II, graaf van Vlaanderen, die de heerlijkheid Wessegem bezat in de parochie Ursel — het hart van de regio waar de achternaam Van Vlaenderen later in de parochieregisters verschijnt. Victor stierf voor 1442 en liet gedocumenteerde natuurlijke zonen na: Lodewyc, Janne en Adam van Vlaendren. Lokale registers plaatsen Adam in het midden van de vijftiende eeuw in de regio Maldegem en Ursel.", "hypothesis_two_p2": "De werkhypothese — en het is in dit stadium niet meer dan dat — is dat naarmate het tijdperk van de graven van Vlaanderen eindigde, nakomelingen van deze grafelijke lijn de naam van Vlaenderen mogelijk hebben voortgezet, niet als een beschrijving van geografische oorsprong, maar als een vorm van geërfde identiteit. Als dat zo is, kan de achternaam een of meer van de familielijnen hebben gevormd die later in de parochieregisters van het Meetjesland verschijnen. Deze verbinding is aannemelijk en wordt ondersteund door indirect bewijs, maar is niet bewezen. Het archiefwerk dat nodig is om dit te bevestigen of te weerleggen is gaande.", "pull_quote": "Eén naam. Eén regio. De vraag is of het ooit echt één familie was.", "cta_research": "Bekijk het onderzoeksdossier", "cta_collaborative_p1": "Dit project is door opzet collaboratief. Als u de naam draagt", "cta_collaborative_p1_cont": "— in welke historische spelling dan ook — of als u afstamt van een Van Vlaenderen-vrouw wiens lijn onder een andere naam werd voortgezet, kunnen uw familieregisters en DNA-resultaten een stukje van het antwoord bevatten. We nodigen u uit om te verkennen wat hier is verzameld, het te vergelijken met uw eigen onderzoek en contact op te nemen.", "research_note": "Er wordt hier geen claim gemaakt dat een levend persoon afstamt van de graven van Vlaanderen. Wij zijn onderzoekers, geen verhalenvertellers. Het bewijs zal gaan waar het gaat.", "explore_archive": "Verken het archief", "card_mill_title": "De molen", "card_mill_subtitle": "Het levensonderhoud van een familie", "card_mill_quote": "De molenaarsfamilies van het Meetjesland — hun leven, hun land, hun nalatenschap.", "card_name_title": "De naam", "card_name_subtitle": "Oorsprong & varianten", "card_name_quote": "Waar begon de naam — en hoeveel families sharen één enkele wortel?", "card_research_title": "Onderzoek", "card_research_subtitle": "Middeleeuwse & collaterale lijnen", "card_research_quote": "Verkenning van de linies van Lodewijk II 'van Male', graaf van Vlaanderen, inclusief Victor en de Praet-lijn.", "card_dna_title": "Zijn we verbonden?", "card_dna_subtitle": "Het DNA-project", "card_dna_quote": "Y-DNA en autosomaal testen worden gebruikt om te onderzoeken of alle Van Vlaenderen-lijnen een gemeenschappelijke voorouder delen.", "cta_explore": "Verken de oorsprong", "cta_contribute": "Draag bij aan uw onderzoek", "footer_project": "Een onafhankelijk genealogisch onderzoeksproject", "footer_permission": "Geen publicatie zonder toestemming" };
const about = { "page_title": "Over dit project", "intro_heading": "Meer dan 15 jaar onderzoek", "intro_body": "Wat begon als een zoektocht naar de onbekende roots van een astronoom, werd een van de meest boeiende onderzoeksreizen van ons leven. Onze vader wist nooit waar zijn familie vandaan kwam. Wij weten het nu.", "project_heading": "Het onderzoek", "project_body": "We hebben de lijn Van Vlaenderen gevolgd door meer dan 40 Oost-Vlaamse parochies, van een gedocumenteerde molenaar in het Gent van 1568 tot Charles Louis Van Vlaenderen, die Bassevelde in 1881 verliet voor Amerika. Onderweg werkten we met Vlaamse archieven, DNA-wetenschap en de generositeit van onderzoekers aan beide kanten van de Atlantische Oceaan.", "tools_heading": "Onze werkwijze", "tools_body": "Ons onderzoek steunt op Vlaamse burgerlijke en parochieregisters, archiefcollecties in het Rijksarchief Gent en het Rijksarchief Brugge, Y-DNA-analyse en AI-ondersteunde paleografie van 16de- en 17de-eeuws secretariusschrift.", "festival_note": "We kwamen de naam Van Vlaenderen voor het eerst tegen op een promotiebanner van het Festival van Vlaanderen — een klein, surrealistisch moment dat alles in gang zette.", "lineage_cta_heading": "Verken de gedocumenteerde lijn", "lineage_cta_body": "We have traced 14 generations of the Van Vlaenderen family through East Flanders parish records, civil archives, and DNA analysis. Click below to see the interactive family tree.", "lineage_cta_link": "Bekijk de familielijn", "contributors_heading": "Het team", "contributor_michael": "Michael — onderzoek, technologie en Amerikaanse familiegegevens", "contributor_constance": "Constance — mede-onderzoeker en bewaarder van de familieherinnering" };
const history = { "page_title": "Onze geschiedenis", "timeline_heading": "De gedocumenteerde lijn", "section_ghent": "Gentse oorsprong", "ghent_body": "De vroegst gedocumenteerde voorouder is Franciscus Van Vlaenderen, vermeld in de Sint-Salvatorparochie in Gent in 1568. Als wever die molenaar werd, weerspiegelt de verhuizing van zijn familie van de stad naar de landelijke parochies van Oost-Vlaanderen de bredere patronen van het Vlaamse plattelandsleven.", "section_eastflanders": "Oost-Vlaanderen, 1600–1850", "eastflanders_body": "Bijna drie eeuwen lang bewerkte de familie de grond en molens van parochies zoals Bassevelde, Oostwinkel, Boekhoute en Waarschoot. De naam Van Vlaenderen duikt geregeld op in doop-, huwelijks- en overlijdensregisters doorheen dit netwerk van dorpen.", "section_charles": "Charles Louis vertrekt", "charles_body": "In 1881 emigreerde Charles Louis Van Vlaenderen — geboren in Bassevelde in 1854 — naar Amerika. Hij trouwde met Jacqueline Vermaas, een Nederlandse immigrante, en bouwde een leven op in de Nieuwe Wereld. Zijn tak draagt de naam vandaag nog in Amerika.", "section_noble": "Een speculatieve draad", "noble_body": "Een afzonderlijke en onbewezen hypothese traceert een mogelijke lijn terug naar Victor van Vlaenderen, een gedocumenteerde natuurlijke zoon van Lodewijk II de Male, graaf van Vlaanderen, die voor 1442 stierf en de heerlijkheid Wessegem bezat. We presenteren dit als wat het is: een intrigerende mogelijkheid, geen bewezen verbinding.", "noble_caveat": "Speculatief — nog niet gestaafd door documentair bewijs" };
const mill = { "page_title": "De Van Vlaenderensmolen", "intro_heading": "Een molen in de familie", "intro_body": "De molen is meer dan een herkenningspunt — het is de draad die generaties met elkaar verbindt. De familie Van Vlaenderen waren molenaarsgeslachten, en de molen in het hart van Bassevelde draagt hun naam nog steeds.", "history_heading": "Geschiedenis van de molen", "visit_heading": "Vandaag een bezoek brengen", "visit_body": "De molen staat er nog steeds in Bassevelde en is een ankerpunt voor iedereen die de roots van deze familie wil opsporen.", "hero_eyebrow": "Van Vlaenderen · Vinderhoute · Meetjesland", "hero_title": "De Van Vlaenderensmolen", "hero_lead": "Een windmolen was meer dan een machine. Voor de familie Van Vlaenderen was het een bron van inkomsten, een identiteit en een baken in het Oost-Vlaamse landschap.", "proverb_quote": "De molen kan niet malen met het water dat al voorbij is.", "proverb_source": "Vlaams molenaarsspreekwoord", "history_p1": "In het dorp Vinderhoute, in de gemeente Lovendegem in Oost-Vlaanderen, staat een historische windmolen die al lang bekend staat als de Van Vlaenderensmolen. Deze houten staakmolen, gemonteerd op een centrale spil zodat de hele structuur in de wind gedraaid kon worden, is een van de meest tastbare verbindingen tussen de familie Van Vlaenderen en het landschap van het Meetjesland.", "history_p2": "De molen ontleende zijn naam aan de familie die hem bezat en exploiteerde. In 1886 werd het eigendom gekocht door Eduardus Van Vlaenderen (1832–1886), een landbouwer en molenaar die de aanwezigheid van de familie op de site vestigde. Door deze aankoop werd het huishouden Van Vlaenderen deel van het netwerk van molenaars die een essentiële rol speelden in de landbouweconomie van de regio.", "history_p3": "Na de dood van Eduardus later datzelfde jaar bleef de molen binnen de familie en bleef hij verbonden met de naam Van Vlaenderen tot in de volgende generatie. Zijn zoon, Frans Eduard Van Vlaenderen (1879–1954), groeide op in het molenaarsgezin en zette de landbouw- en molenaarstradities van de familie voort.", "lineage_title": "Een geslacht van molenaars", "lineage_gerardus": "Gerardus Van Vlaenderen", "lineage_gerardus_note": "Molenaar in Bassevelde, ca. 1720", "lineage_eduardus": "Eduardus Van Vlaenderen", "lineage_eduardus_note": "Kocht de molen in Vinderhoute in 1886", "lineage_frans": "Frans Eduard Van Vlaenderen", "lineage_frans_note": "Zette de familietraditie voort in de 20ste eeuw", "photo_caption": "De Van Vlaenderensmolen, Vinderhoute — de molen die de familienaam draagt.", "photo_attribution": "Foto door", "social_title": "De plaats van de molenaar in de Vlaamse samenleving", "social_p1": "Op het Vlaamse platteland van de negentiende eeuw nam de molenaar een positie van aanzienlijk belang in. Boeren uit de omliggende streek brachten hun graan naar de molen om tot meel te worden gemalen, en de molen stond centraal in het economische leven van het dorp. Het bezit van een werkende windmolen vereiste kapitaal, land en technische kennis, en molenaars behoorden vaak tot de meer gevestigde families van hun gemeenschap.", "social_p2": "Windkracht was de hernieuwbare energie van die tijd — geduldig, onvoorspelbaar en essentieel. De vaardigheid van de molenaar lag in het lezen van het weer, het aanpassen van de wieken en het werk uit de wind halen. Het was een ambacht dat van vader op zoon werd doorgegeven, verbonden met de ritmes van de seizoenen en de behoeften van de omliggende boerderijen.", "region_title": "De regio Meetjesland", "region_p1": "Het Meetjesland is een historische regio in de provincie Oost-Vlaanderen, België, gelegen tussen de steden Gent en Brugge. Het is een vlak, groen landschap van polders, kanalen en kleine dorpjes — een wereld gevormd door waterbeheer, landbouw en de ritmes van de seizoenen. De familie Van Vlaenderen komt voor in de registers van verschillende Meetjeslandse dorpen, waaronder Bassevelde, Ursel, Evergem, Boekhoute en Merendree.", "location_title": "Locatie", "location_village": "Bassevelde, Oost-Vlaanderen", "location_coords": "51°06′N 3°36′O", "location_link": "Bekijk op Google Maps →", "cta_text": "Heeft u familiegegevens of foto's gerelateerd aan de Van Vlaenderensmolen?", "cta_note": "We zijn altijd op zoek naar uitbreiding van ons archief over de molengeschiedenis van de familie.", "proverb_text": "De hemel geeft; wie vangt, die heeft.", "history_title": "De Van Vlaenderensmolen", "lineage_gen_1": "I", "lineage_name_1": "Gerardus", "lineage_dates_1": "Van Vlaenderen", "lineage_role_1": "Landbouwer · Meetjesland", "lineage_gen_2": "II", "lineage_name_2": "Eduardus", "lineage_dates_2": "1832 – 1886", "lineage_role_2": "Landbouwer & Molenaar", "lineage_gen_3": "III", "lineage_name_3": "Frans Eduard", "lineage_dates_3": "1879 – 1954", "lineage_role_3": "Molenaarsgezin", "photo_alt": "De Van Vlaenderensmolen in Vinderhoute, Oost-Vlaanderen", "social_p3": "De geschiedenis van de Van Vlaenderensmolen weerspiegelt ook de kwetsbaarheid van deze houten structuren voor de natuurkrachten. In 1905 werd de molen zwaar beschadigd door een krachtige storm. De familie herbouwde en restaureerde de structuur, zodat de molen de omliggende boerderijen kon blijven bedienen en een zichtbaar baken bleef in het landschap van Vinderhoute.", "social_p4": "Vandaag de dag staat de Van Vlaenderensmolen als een zeldzame fysieke herinnering aan de historische aanwezigheid van de familie in het Meetjesland — een punt waar landschap, levensonderhoud en achternaam samenkomen.", "location_name": "Van Vlaenderensmolen", "location_address": "Vinderhoute, Lovendegem, Oost-Vlaanderen, België", "visit_p1": "Vandaag de dag is de Van Vlaenderensmolen een beschermd monument, een getuigenis van het industriële erfgoed van Oost-Vlaanderen. Hoewel het geen commerciële molen meer is, blijft het een belangrijke plek voor wie geïnteresseerd is in de kruising van familiegeschiedenis en regionale geschiedenis.", "visit_p2": "De molen bevindt zich aan de Molenstraat in Vinderhoute. Bezoekers kunnen de buitenkant van de structuur bekijken en op specifieke erfgoeddagen de kans krijgen om het interieur te verkennen en meer te leren over de mechanica van het traditionele Vlaamse malen." };
const dna = { "page_title": "DNA-project", "intro_heading": "Wetenschap ontmoet geschiedenis", "intro_body": "Door traditionele genealogie te combineren met Y-DNA-testen, onderzoeken we of de verschillende Van Vlaenderen-takken een gemeenschappelijke biologische voorouder delen.", "haplogroup_label": "Huidge haplogroep", "haplogroup_value": "R-FT1573 (singleton)", "what_heading": "Wat we zoeken", "what_body": "We zijn op zoek naar mannelijke erfgenamen van Van Vlaenderen die bereid zijn een Big Y-700-test te doen. Autosomaal DNA (AncestryDNA, 23andMe) is nuttig voor nauwe verwantschappen, maar kan een gedeelde vaderlijke lijn over vele generaties niet bevestigen. Y-DNA wel.", "privacy_heading": "Uw privacy", "privacy_body": "Deelname is volledig vrijwillig. Uw resultaten zijn van u. We delen individuele resultaten nooit zonder uitdrukkelijke toestemming.", "cta": "Contact opnemen over DNA", "results_heading": "Huidige bevindingen", "results_body": "Eerste testen hebben veelbelovende verbindingen aangetoond tussen families in Bassevelde en degenen die naar de Verenigde Staten zijn geëmigreerd. We zijn actief op zoek naar meer deelnemers om onze dataset uit te breiden.", "hero_eyebrow": "Van Vlaenderen · Genetische genealogie", "hero_title": "Het DNA-project", "hero_lead": "Waar het papieren spoor eindigt, begint het genetische archief. We gebruiken DNA-analyse om de gaten in het archief te overbruggen en onze hypothesen over een gedeelde oorsprong te testen.", "science_title": "De wetenschap van gedeelde afstamming", "science_p1": "Dit project maakt gebruik van Y-DNA-testen, waarbij het Y-chromosoom wordt geanalyseerd dat van vader op zoon wordt doorgegeven. Omdat het Y-chromosoom over generaties heen relatief onveranderd blijft, is het een krachtig hulpmiddel voor het onderzoeken van vaderlijke lijnen en het bepalen of twee mannen met dezelfde achternaam een gemeenschappelijke voorouder delen binnen een genealogisch tijdsbestek.", "science_p2": "Naast Y-DNA kijken we ook naar autosomale DNA-resultaten om verbindingen te vinden tussen afstammelingen van Van Vlaenderen-vrouwen, wat helpt bij het reconstrueren van het bredere familienetwerk door de eeuwen heen.", "goals_title": "Projectdoelen", "goal_1": "De verbinding tussen de verschillende Meetjeslandse takken van de familie verifiëren.", "goal_2": "De mogelijke link met de middeleeuwse grafelijke bastaardlijnen onderzoeken.", "goal_3": "Familieleden helpen bij het identificeren van hun specifieke tak van de Van Vlaenderen-stamboom.", "participation_title": "Hoe deel te nemen", "participation_p1": "We nodigen elke man met de achternaam Van Vlaenderen (of varianten daarvan) uit om deel te nemen aan ons DNA-project. We gebruiken voornamelijk FamilyTreeDNA voor onze Y-DNA-testen, omdat dit de grootste database voor achternaam-gebaseerd onderzoek herbergt.", "participation_p2": "Als u al bij een andere dienst zoals AncestryDNA of 23andMe heeft getest, kunnen uw autosomale resultaten nog steeds een waardevolle bijdrage leveren aan ons onderzoek.", "cta_text": "Geïnteresseerd in deelname aan het Van Vlaenderen DNA-project?", "cta_note": "Neem contact met ons op voor meer informatie over het testproces en hoe u kunt bijdragen." };
const contact = { "page_title": "Contact", "intro_body": "We verwelkomen vragen van mede-onderzoekers, historici en iedereen die geïnteresseerd is in de familiegeschiedenis van Van Vlaenderen.", "name_label": "Uw naam", "email_label": "E-mailadres", "message_label": "Uw bericht", "submit_label": "Verstuur bericht", "privacy_note": "We respecteren uw privacy. Uw gegevens worden nooit gedeeld of gebruikt voor enig ander doel dan om u te antwoorden.", "success_message": "Bedankt voor uw bericht. We nemen spoedig contact met u op.", "hero_eyebrow": "Van Vlaenderen · Samenwerking", "hero_title": "Verbind u met het project", "hero_lead": "Genealogie is een gezamenlijke reis. Of u nu een vraag, een correctie of een puzzelstukje heeft om te delen, we kijken ernaar uit van u te horen.", "reasons_title": "Waarom contact opnemen?", "reason_name_title": "U draagt de naam", "reason_name_text": "Als uw achternaam Van Vlaenderen is — in welke spelling dan ook — willen we uw verhaal kennen. Elke tak van de familie telt.", "reason_docs_title": "U heeft documenten of foto's", "reason_docs_text": "Oude brieven, geboorteakten, foto's, landregisters — elk document dat verbonden is met de familie Van Vlaenderen is waardevol.", "reason_dna_title": "U heeft een DNA-test gedaan", "reason_dna_text": "Als u getest heeft bij AncestryDNA, 23andMe of FamilyTreeDNA en Van Vlaenderen-voorouders heeft, kunnen uw resultaten de takken verbinden.", "reason_local_title": "U heeft lokale kennis", "reason_local_text": "Als u in of nabij het Meetjesland woont en verhalen kent over de familie Van Vlaenderen of de molen in Vinderhoute, deel ze dan met ons.", "reason_question_title": "U heeft een vraag", "reason_question_text": "Genealogisch onderzoek kan verwarrend zijn. Als u een vraag heeft over de familie Van Vlaenderen of hoe u uw eigen roots kunt onderzoeken, stel ze gerust.", "privacy_text": "Uw persoonlijke gegevens worden nooit gedeeld, verkocht of gepubliceerd zonder uw uitdrukkelijke toestemming. Dit is een privaat familieonderzoeksproject.", "form_title": "Stuur een bericht", "form_name": "Naam", "form_name_placeholder": "bijv. Jan Van Vlaenderen", "form_email": "E-mail", "form_email_placeholder": "uw@email.com", "form_subject": "Onderwerp", "form_subject_placeholder": "Selecteer een onderwerp…", "form_subject_research": "Familieonderzoek", "form_subject_dna": "DNA-project", "form_subject_docs": "Documenten of foto's", "form_subject_mill": "De molen", "form_subject_general": "Algemene vraag", "form_message": "Bericht", "form_message_placeholder": "Vertel ons over uw band met de familie Van Vlaenderen…", "form_submit": "Bericht versturen", "form_sending": "Verzenden...", "form_success": "Bedankt voor uw bericht! We hebben het ontvangen en zullen zo snel mogelijk reageren.", "form_error": "Er was een probleem bij het verzenden van uw bericht. Probeer het opnieuw.", "pull_quote": "Familiegeschiedenis gaat niet alleen over het verleden. Het gaat over begrijpen wie we zijn en waar we vandaan komen — en misschien anderen vinden die die reis delen.", "collage_caption": "Elke familie heeft foto's. Elke foto vertelt een deel van het verhaal. Deel de uwe met het Van Vlaenderen-archief.", "intro_heading": "Neem contact op", "info_heading": "Onderzoeksvragen", "info_body": "Voor specifieke vragen over onze archiefbevindingen, het DNA-project of onze methodologie kunt u onderstaand formulier gebruiken. We streven ernaar om binnen enkele dagen op alle serieuze onderzoeksvragen te reageren.", "collab_heading": "Mogelijkheden tot samenwerking", "collab_body": "We zijn bijzonder geïnteresseerd in contact met personen met Y-DNA-resultaten of primaire brondocumenten uit de Meetjeslandse regio.", "error_message": "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw." };
const footer = { "tagline": "Van Vlaenderen — uit Vlaanderen", "rights": "Alle rechten voorbehouden", "built_with": "Met zorg gebouwd in België en Amerika" };
const common = { "read_more": "Lees meer", "back": "Terug", "speculative": "Speculatief", "documented": "Gedocumenteerd", "loading": "Laden…", "error": "Er is iets misgegaan" };
const lineage = { "page_title": "Familielijn", "page_intro": "De gedocumenteerde Van Vlaenderen-lijn van Jeremiah (~1575) tot heden — opgespoord via Oost-Vlaamse parochieregisters, burgerlijke archieven en DNA. Klik op een voorouder voor de archiefdetails.", "legend_label": "Verklaring bewijsstatus", "tree_label": "Voorouderboom Van Vlaenderen", "click_hint": "Klik op een kaart voor details", "generation": "Generatie", "born_prefix": "geb.", "records_available": "Beschikbare documenten", "status_documented": "Volledig gedocumenteerd", "status_partial": "Gedeeltelijke documenten", "status_inferred": "Afgeleid / bij benadering", "status_modern": "Moderne familie", "record_birth": "Geboorte", "record_marriage": "Huwelijk", "record_death": "Overlijden", "view_archive": "Bekijk in archief", "detail_born": "Geboren", "detail_parish": "Parochie", "detail_birth": "Geboorteakte", "detail_marriage": "Huwelijksakte", "detail_death": "Overlijdensakte", "detail_status": "Bewijsstatus", "source_note": "Parochie- en burgerlijke akten afkomstig van", "source_note_2": " en Rijksarchief Brugge. Onderzoek lopende." };
const research = { "hero_eyebrow": "Van Vlaenderen · Middeleeuws onderzoek", "hero_title": "Middeleeuwse & collaterale lijnen", "hero_lead": "Onderzoek naar de mogelijke oorsprong van de achternaam Van Vlaenderen binnen de onwettige takken van het grafelijk huis van Vlaanderen.", "dossier_title": "Onderzoeksoverzicht", "dossier_updated": "Bijgewerkt april 2026", "intro_title": "De reikwijdte van het onderzoek", "intro_p1": "Dit gedeelte van het project richt zich op de periode tussen de 14de en 16de eeuw en verkent de gedocumenteerde individuen die de naam 'van Vlaenderen' droegen vóór de invoering van consistente parochieregisters. Onze primaire focus ligt op de onwettige afstamming van de graven van Vlaanderen, specifiek de lijnen van Lodewijk II 'van Male.'", "intro_p2": "Het ontstaan van 'van Vlaenderen' als een erfelijke achternaam lijkt samen te vallen met de 'kristallisatie' van de identiteit van de Dampierre-dynastie. Toen het tijdperk van de graven van Vlaanderen in 1384 zijn overgangspunt bereikte, werd de naam door bepaalde natuurlijke zonen aangenomen, niet als een beschrijving van herkomst, maar als een formele erfelijke identificatie van hun grafelijke wortels.", "methodology_title": "Methodologie & bewijsniveaus", "method_attested_label": "Direct geattesteerd", "method_attested_text": "Verklaringen die steunen op geciteerde oorkondetaal of expliciete documentaire samenvattingen in gepubliceerde autoriteiten.", "method_corroborated_label": "Sterk gecorroboreerd", "method_corroborated_text": "Verklaringen die worden ondersteund door overeenstemmende gepubliceerde historische of erfgoedautoriteiten.", "method_probable_label": "Waarschijnlijk", "method_probable_text": "Op bronnen gebaseerde verklaringen die een volledige inspectie van de onderliggende edities vereisen voordat ze als vaststaand worden beschouwd.", "method_hypothesis_label": "Hypothese", "method_hypothesis_text": "Genealogische gevolgtrekkingen voorgesteld voor verdere toetsing, nog niet bewezen als feit.", "significance_title": "Genealogische betekenis", "significance_p1": "De centrale vraag van dit onderzoek is of de moderne Van Vlaenderen-families van het Meetjesland afstammen van deze middeleeuwse grafelijke bastaardlijnen. Hoewel de achternaam en de geografische nabijheid (Ursel/Wessegem) zeer suggestief zijn, blijft de 'generationele brug' tussen 1450 en 1550 de primaire focus van ons lopende archiefonderzoek.", "branches_title": "Primaire onderzoekstakken", "branches_intro": "Ons onderzoek is momenteel verdeeld in twee hoofdzakelijk gedocumenteerde takken van de grafelijke bastaardlijn:", "branch_victor_title": "De lijn van Victor van Vlaenderen", "branch_victor_text": "Heer van Wessegem in Ursel. Deze tak is van bijzonder belang vanwege de directe territoriale verbinding met het hart van de verspreiding van de achternaam Van Vlaenderen.", "branch_victor_link": "Verken de Victor-lijn", "branch_louis_title": "De lijn van Lodewijk 'de Fries' (Praet)", "branch_louis_text": "Het huis van Vlaanderen-Praet. Een goed gedocumenteerde tak die belangrijke heerlijkheden en hoge ambten bekleedde in de Bourgondische en Habsburgse Nederlanden.", "branch_louis_link": "Verken de Praet-lijn", "conclusion_title": "Lopend werk", "conclusion_p1": "We zoeken actief in de archieven van Gent en Brugge naar 15de-eeuwse registers die de ontbrekende schakels kunnen vormen tussen deze middeleeuwse figuren en de vroegste voorouders in de parochieregisters.", "cta_text": "Bent u een onderzoeker gespecialiseerd in 15de-eeuwse Vlaamse archieven?", "cta_note": "We verwelkomen samenwerking bij het archiefonderzoek naar de 'ontbrekende generaties' van de Van Vlaenderen-lijn." };
const name = /* @__PURE__ */ JSON.parse(`{"hero_eyebrow":"Van Vlaenderen · Etymologie · Geschiedenis","hero_title":"De naam Van Vlaenderen","hero_lead":"Een naam is een vat voor geschiedenis. De achternaam Van Vlaenderen begrijpen is de beweging van mensen door het Vlaamse landschap volgen.","intro_p1":"De achternaam \\"Van Vlaenderen\\" is een klassiek voorbeeld van een toponiem, wat letterlijk \\"uit Vlaanderen\\" betekent. In de context van het middeleeuwse Europa werden dergelijke namen vaak gegeven aan personen die vanuit een grotere regio naar een meer lokale gemeenschap waren gemigreerd, als aanduiding van hun herkomst.","intro_p2":"Zoals ons onderzoek suggereert, is het verhaal van de naam Van Vlaenderen in het Meetjesland echter genuanceerder. De opvallende geografische concentratie van de naam en de terugkerende associaties met specifieke parochies doen de mogelijkheid vermoeden van een gedeelde voorouderlijke wortel, misschien zelfs een verbinding met het grafelijke huis van Vlaanderen zelf.","intro_p3":"Deze pagina verkent de verschillende manieren waarop de naam door de eeuwen heen is genoteerd, de regio's waar hij het meest voorkomt en de historische documenten die aanwijzingen geven over de vroegste oorsprong.","map_alt":"Kaart van de regio Meetjesland in Oost-Vlaanderen met Bassevelde en Ursel","map_caption":"De regio Meetjesland in Oost-Vlaanderen — de dorpen Bassevelde en Ursel vormen het gedocumenteerde hartland van de achternaam Van Vlaenderen, gelegen tussen Brugge en Gent.","pull_quote":"De naam Van Vlaenderen is op zich al een stukje geschiedenis — een verslag van beweging, identiteit en verbondenheid, geschreven in de eigen titel van de familie.","villages_title":"Waar de naam voorkomt","village_bassevelde":"Bassevelde","village_bassevelde_note":"Parochieregisters uit de 17e eeuw","village_ursel":"Ursel","village_ursel_note":"Registers van land- en molenbezit","village_boekhoute":"Boekhoute","village_boekhoute_note":"Vroege burgerlijke en landregisters","village_waarschoot":"Waarschoot","village_waarschoot_note":"Een aanzienlijke concentratie van Van Vlaenderen-families in de 18e eeuw.","village_oostwinkel":"Oostwinkel","village_oostwinkel_note":"Thuisbasis van verschillende gedocumenteerde landbouwlijnen.","variations_title":"Spellingvariaties","cronike_title":"De Cronike Van Vlaenderen","cronike_p1":"Een van de belangrijkste middeleeuwse kronieken van Vlaanderen is de Cronike Van Vlaenderen — de Kroniek van Vlaanderen. Dit 15e-eeuwse manuscript documenteert de geschiedenis van de graven van Vlaanderen en de grote gebeurtenissen in de regio vanaf de vroegste opgetekende geschiedenis. Het is een opmerkelijk werk van middeleeuwse historiografie, rijk geïllustreerd met heraldische schilden en portretten van de Vlaamse adel.","cronike_p2":"De kroniek is geen genealogisch verslag van de familie Van Vlaenderen, maar biedt de essentiële context om de wereld te begrijpen waarin de familie leefde. De graven van Vlaanderen — wier heraldische leeuw, de Leeuw van Vlaanderen, het symbool van de hele regio werd — gaven vorm aan het politieke, economische en culturele landschap dat de familie Van Vlaenderen generaties lang bewoonde.","manuscript_alt":"Verluchte manuscriptpagina uit de Cronike van Vlaenderen.","manuscript_caption":"Een pagina uit de Cronike van Vlaenderen, die de rijke heraldische en historische traditie van de regio illustreert.","card_heraldry_title":"Heraldische tradities","card_heraldry_text":"Het gebruik van de leeuw van Vlaanderen in verschillende familiezegels en wapenschilden.","card_charters_title":"Middeleeuwse oorkonden","card_charters_text":"Documentair bewijs van de naam in 14e- en 15e-eeuwse juridische registers.","card_migration_title":"Migratiepatronen","card_migration_text":"Het traceren van de beweging van de naam van de grafelijke hoven naar de landelijke parochies.","cta_text":"Is uw familienaam een variant van Van Vlaenderen?","cta_note":"We documenteren alle historische spellingen en regionale variaties van de naam.","history_title":"Geschiedenis van een achternaam","history_p1":"Vroege parochiale en burgerlijke registers tonen aan dat de naam geconcentreerd was in een relatief klein gebied van het Meetjesland in Oost-Vlaanderen, met name in Bassevelde, Boekhoute, Evergem, Lovendegem, Sleidinge, Ursel en Wessegem. De continuïteit van de achternaam in deze regio over meerdere generaties nodigt uit tot nader historisch onderzoek.","history_p2":"Hoewel de conventionele toponymische verklaring volledig aannemelijk blijft, roepen de geografische dichtheid en de vroege persistentie van de naam — samen met de relatieve zeldzaamheid buiten Oost-Vlaanderen — een bijkomende vraag op: of de achternaam op een bepaald moment in de late middeleeuwen is ontstaan uit een specifiekere territoriale of lokale aanduiding, wellicht verbonden met het einde van het tijdperk van de graven van Vlaanderen.","history_p3":"Deze site verzamelt beschikbare documentatie en nodigt Van Vlaenderens over de hele wereld uit om de registers te verkennen, familieverhalen bij te dragen, stambomen te verbinden en deel te nemen aan het Van Vlaenderen Family Genealogy Project.","villages_intro":"De naam Van Vlaenderen komt voor in de historische registers van verschillende Oost-Vlaamse gemeenschappen, geconcentreerd in de regio Meetjesland. De dorpen waar de naam het vaakst gedocumenteerd is, zijn onder meer:","village_evergem":"Evergem","village_evergem_note":"Burgerlijke stand vanaf 1796","village_lovendegem":"Lovendegem","village_lovendegem_note":"Gemeentelijke registers, 19e eeuw","village_sleidinge":"Sleidinge","village_sleidinge_note":"Parochiale en notariële registers","village_wessegem":"Wessegem","village_wessegem_note":"Doop- en huwelijksregisters","village_vinderhoute":"Vinderhoute","village_vinderhoute_note":"Thuisbasis van de Van Vlaenderensmolen","variations_intro":"Voordat de gestandaardiseerde spelling werd afgedwongen via de burgerlijke stand in de Napoleontische tijd (na 1796 in België), werden achternamen fonetisch genoteerd door parochiepriesters en lokale ambtenaren. De naam Van Vlaenderen komt in historische documenten in een grote verscheidenheid aan vormen voor:","variations_footer":"Als u de familie Van Vlaenderen in historische archieven onderzoekt, is het de moeite waard om naar al deze varianten te zoeken, vooral in registers van voor 1800.","document_alt":"Pagina's uit de Cronike Van Vlaenderen met heraldische schilden van familieleden Van Vlaenderen","document_caption":"Pagina's uit de Cronike Van Vlaenderen — heraldische schilden met de namen \\"Gillam Ban Claendren\\", \\"Philips Ban Claendren\\", \\"Boulben Ban Claendren\\" en \\"die connestauell Ban Claendren\\". Direct documentair bewijs van de naam Van Vlaenderen in middeleeuwse Vlaamse heraldische registers.","manuscript_1_alt":"Gravin van Vlaanderen te paard omringd door heraldische schilden — verlucht manuscript","manuscript_1_caption":"Gravin van Vlaanderen — uit de Cronike Van Vlaenderen, omringd door de heraldische schilden van de grote Vlaamse huizen","manuscript_2_alt":"Filips van de Elzas, graaf van Vlaanderen — illustratie uit verlucht manuscript","manuscript_2_caption":"Filips van de Elzas, graaf van Vlaanderen — met de zwarte leeuwenbanier, uit een 15e-eeuws verlucht manuscript","manuscript_3_alt":"De Leeuw van Vlaanderen — houtsnede","manuscript_3_caption":"De Leeuw van Vlaanderen — het blijvende symbool van de regio die de familie Van Vlaenderen eeuwenlang hun thuis noemde","cta_button":"Deel uw verhaal →","page_title":"De naam","intro_heading":"Oorsprong van Van Vlaenderen","intro_body":"De achternaam Van Vlaenderen is een toponymische naam, wat letterlijk 'uit Vlaanderen' betekent. Hoewel de naam in zijn beschrijvende vorm veel voorkomt, suggereert het specifieke gebruik ervan als een erfelijke achternaam in de Meetjeslandse regio een meer gerichte oorsprong.","variants_heading":"Historische varianten","variants_body":"Door de eeuwen heen is de naam in verschillende vormen verschenen in parochiale en burgerlijke registers, wat de veranderingen in spellingconventies en regionale dialecten weerspiegelt.","etymology_title":"Etymologie en betekenis","etymology_p1":"De achternaam Van Vlaenderen behoort tot de categorie van toponymische achternamen — namen die zijn afgeleid van een geografische locatie. In de Nederlandse taal betekent 'van' 'afkomstig van' of 'van,' en 'Vlaenderen' is de historische spelling van Vlaanderen. Letterlijk vertaald identificeert de naam de oorspronkelijke drager als iemand 'uit Vlaanderen.'","etymology_p2":"Hoewel dit eenvoudig lijkt, is het gebruik van zo'n brede regionale naam als een specifieke familie-identificatie opmerkelijk. In veel gevallen werden toponymische namen gegeven aan individuen die van hun plaats van herkomst naar een nieuwe gemeenschap verhuisden. Iemand die van het graafschap Vlaanderen naar een naburige regio verhuisde, kon 'de Vlaming' of 'uit Vlaanderen' worden genoemd.","variants_title":"Spelling en regionale varianten","variants_p1":"Genealogisch onderzoek in Oost-Vlaanderen onthult verschillende historische varianten van de naam. Deze variaties weerspiegelen vaak de fonetische spelling die door parochiepriesters of burgerlijke ambtenaren werd gebruikt, evenals de evolutie van de Nederlandse taal in de loop van de tijd.","variant_list_title":"Veelvoorkomende historische vormen zijn onder meer:","variant_1":"Van Vlaenderen","variant_1_note":"De meest voorkomende historische en moderne vorm in Oost-Vlaanderen.","variant_2":"Van Vlaandren","variant_2_note":"Een veelvoorkomende variant in 17de- en 18de-eeuwse parochieregisters.","variant_3":"Van Flandern","variant_3_note":"De vorm die vaak werd aangenomen door takken die naar Noord-Amerika emigreerden.","variant_4":"De Flandre","variant_4_note":"Het Franse equivalent, vaak aangetroffen in vroegmiddeleeuwse of aristocratische contexten.","distribution_title":"Geografische spreiding","distribution_p1":"De naam is het dichtst geconcentreerd in de Meetjeslandse regio van Oost-Vlaanderen, met name in de driehoek gevormd door de dorpen Bassevelde, Ursel en Kaprijke. Deze concentratie ondersteunt de hypothese dat de moderne dragers van de naam kunnen afstammen van een beperkt aantal stichtende families in dit specifieke gebied.","four_bucket_title":"Wat \\"Van Vlaenderen\\" deed in middeleeuwse documenten","four_bucket_intro":"De automatische reactie op een familienaam die begint met een plaatsnaam is deze als toponymisch te classificeren — de familie kwam eenvoudigweg van die plaats. Voor \\"van Vlaenderen\\" luidt die redenering: het betekent gewoon \\"uit Vlaanderen.\\" Debrabanderes gezaghebbende woordenboek van Belgische familienamen geeft een PlN-classificatie (plaatsnaam). Zaak gesloten.","four_bucket_rebuttal":"Het probleem is dat \\"van Vlaenderen\\" — en de Franse equivalenten de Flandre en de Flandres — in middeleeuwse Vlaamse en Bourgondische documenten tegelijkertijd minstens vier verschillende functies had, en slechts één daarvan is de erfelijke familienaam. Voordat een archiefstuk als bewijs voor onze familie kan worden meegeteld, moet het aan de juiste categorie worden toegewezen. Debrabanderes classificatie is een etymologische uitspraak over woordoorsprong, geen genealogische uitspraak over familiecontinuïteit.","four_bucket_table_heading":"Vier functies van \\"Van Vlaenderen\\" in het documentaire erfgoed","four_bucket_b1_label":"Bestuurlijke formule","four_bucket_b1_desc":"De frase verschijnt routinematig in institutionele hoofdingen zonder naamfunctie: Souvereyne Kamer van Redeninge van Vlaenderen, De Gedeputeerde van de Staeden van Vlaenderen. Dit zegt waar een instelling actief was, niet wie iemands familie was.","four_bucket_b2_label":"Feodaal titulatuur","four_bucket_b2_desc":"Dienstman Mijnsheeren van Vlaenderen — \\"vazal van mijn heer van Vlaanderen.\\" Dit duidt een relatie tot de graaf aan, geen familienaam. Robrecht van Béthune, graaf van Vlaanderen, verschijnt in een Aardenburg-rekening van 1309–10 als \\"mijn here Robrecht van Vlaendren\\" — de graaf zelf, geen naamdrager.","four_bucket_b3_label":"Ambtelijke functieaanduiding","four_bucket_b3_desc":"Mijns heeren van Vlaenderen messagier — \\"boodschapper van mijn heer van Vlaanderen.\\" Personeel verbonden aan het grafelijk hof droeg een ambtstittel die de frase bevatte. Het aantreffen van \\"van Vlaenderen\\" in een stadsrekening betekent niet automatisch een erfelijke familienaam. Deze emmer is echter ook de meest gebruikelijke voorloper van Emmer 4: de zoon van een ambtenaar erfde vaak de naam lang nadat het ambt zelf was overgegaan.","four_bucket_b4_label":"Erfelijke familienaam","four_bucket_b4_desc":"Identificeerbare individuen en meertalige familieclusters die de naam als overgedragen familieaanduiding gebruiken: Victor van Vlaenderen en zijn gedocumenteerde natuurlijke zonen Lodewyc, Janne en Adam (charter 1441/42); de Brugse Vrije-erflater Joos van Vlaenderen (1547); de Oost-Vlaamse parochieregisterfamilies in Bassevelde, Boekhoute, Ursel en Waarschoot. Dit is het genealogisch bewijs. Emmers 1–3 moeten worden uitgesloten voordat Emmer 4 kan worden meegeteld.","four_bucket_conclusion":"De genealogische casus voor de familie Van Vlaenderen berust uitsluitend op Emmer 4. Maar Emmers 1–3 zijn niet irrelevant — zij verklaren waarom een erfelijke familienaam gebaseerd op deze frase kon ontstaan en stabiliseren. Emmer 3 is in het bijzonder vaak de voorloper van Emmer 4: wanneer de zoon van een ambtenaar niet het ambt erft maar wel de naam die eraan verbonden was, ontstaat een erfelijke familienaam. Dat is de bodem waarin de familienaam wortel schoot — het maakt de naam niet generiek; het maakt het voortbestaan ervan betekenisvol.","map_caption_bucket_note":"De kaart toont het geografische onderzoekscluster — parochies waar de familienaam Van Vlaenderen in gedocumenteerde bronnen voorkomt. Afzonderlijke kaartpunten vertegenwoordigen locaties, geen vooraf geclassificeerde naamvermeldingen; de vier-emmeranalyse hierboven moet op elke bron worden toegepast voordat een archiefstuk als erfelijk naamsbewijs kan worden beschouwd."}`);
const victor = /* @__PURE__ */ JSON.parse(`{"hero_eyebrow":"Van Vlaenderen · Genealogisch onderzoek","hero_title":"Victor van Vlaenderen","hero_lead":"Heer van Wessegem in Ursel; natuurlijke zoon van Lodewijk II 'van Male', graaf van Vlaanderen. Een centrale figuur in het onderzoek naar de oorsprong van de achternaam.","dossier_title":"Dossier Victor van Vlaenderen","dossier_updated":"Bijgewerkt april 2026","origin_title":"Oorsprong en status","origin_p1":"Victor van Vlaenderen was een erkende natuurlijke zoon van Lodewijk II \\"van Male\\", graaf van Vlaanderen. Zijn status als lid van de grafelijke familie, hoewel onwettig, verleende hem een aanzienlijke positie binnen de Vlaamse adel. Hij kreeg de heerlijkheid Wessegem toegewezen, een gebied in de parochie Ursel, dat de zetel werd van zijn tak van de familie.","origin_p2":"De erkenning van Victor door zijn vader is gedocumenteerd in verschillende hedendaagse oorkonden en rekeningen. Als \\"natuurlijke\\" zoon droeg hij de achternaam \\"Van Vlaenderen\\", een directe verwijzing naar zijn grafelijke afkomst. Dit gebruik was gebruikelijk onder de hoge adel van die tijd en diende om erkende onwettige nakomelingen te onderscheiden van de rest van de bevolking.","wessegem_title":"De heerlijkheid Wessegem","wessegem_p1":"De heerlijkheid Wessegem was een belangrijk grondbezit in het Meetjesland. Onder het bewind van Victor diende het als centrum van lokaal bestuur en als basis voor de invloed van de familie in de regio. De registers van de heerlijkheid bieden waardevolle inzichten in het sociale en economische leven van het 14e-eeuwse Vlaanderen.","wessegem_p2":"Victors aanwezigheid in Ursel is bijzonder opmerkelijk, aangezien deze parochie later een belangrijk centrum zou worden voor de achternaam Van Vlaenderen in de vroegmoderne tijd. De geografische continuïteit tussen Victors middeleeuwse heerlijkheid en de latere verspreiding van de naam is een kernpunt van ons onderzoek.","descendants_title":"Gedocumenteerde nakomelingen","descendants_p1":"Victor van Vlaenderen stierf voor 1442 en liet verschillende gedocumenteerde zonen na die de naam Van Vlaenderen voortzetten. Onder hen waren de gedocumenteerde natuurlijke zonen Lodewyc, Janne en Adam van Vlaendren.voor 1442 en liet gedocumenteerde natuurlijke zonen na: Lodewyc, Janne en Adam van Vlaendren. Met name Adam wordt in het midden van de 15e eeuw vermeld in de regio Maldegem en Ursel, wat de band van de familie met de regio verder verstevigde.","descendants_p2":"De uitdaging voor genealogisch onderzoek is om de kloof te overbruggen tussen deze 15e-eeuwse figuren en de vroegste vermeldingen in de parochieregisters, die doorgaans in de late 16e of vroege 17e eeuw beginnen. Ons werk omvat een nauwgezette analyse van landregisters, staten van goed en notariële archieven om het voortbestaan van de lijn door deze overgangsperiode te traceren.","hypothesis_title":"De overlevingshypothese","hypothesis_p1":"De centrale hypothese van deze onderzoekstak is dat de Van Vlaenderen-families die in de Meetjeslandse parochieregisters worden aangetroffen, de directe, zij het sociaal getransformeerde, nakomelingen zijn van de lijn van Victor. In de loop van de 15e en 16e eeuw kunnen zijtakken van de adellijke familie zijn overgegaan naar de rangen van de lokale gentry en uiteindelijk naar de welvarende boeren- en molenaarsklassen.","hypothesis_p2":"Dit patroon van \\"sociale neerwaartse mobiliteit\\" was niet ongebruikelijk voor onwettige adellijke lijnen. Hoewel de primaire titels en landerijen verloren konden gaan of onderverdeeld werden, bleef de achternaam een kenmerk van hun gedeelde oorsprong. Het testen van deze hypothese vereist zowel traditioneel archiefwerk als de integratie van Y-DNA-resultaten van huidige Van Vlaenderens.","tree_title":"De afstamming van Victor van Vlaenderen","tree_alt":"Stamboomdiagram met Victor van Vlaenderen en zijn zonen","pull_quote":"Victor van Vlaenderen vormt de meest directe gedocumenteerde schakel tussen het grafelijk huis van Vlaanderen en de regio Meetjesland.","sources_title":"Noten & bibliografie","source_1":"Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut.","source_2":"Inventaris Onroerend Erfgoed, 'Hoeve Hof van Wessegem.'","source_3":"'Ursel, een Meetjeslands dorp.'","back_button":"Terug naar onderzoeksoverzicht","badge_attested":"Direct geattesteerd","badge_corroborated":"Sterk gecorroboreerd","badge_hypothesis":"Hypothese","identity_title":"Identiteit en afstamming","identity_p1":"Victor van Vlaanderen, ook wel Victor de Flandre genoemd, behoort tot de onwettige grafelijke lijn die afstamt van Lodewijk II 'van Male', graaf van Vlaanderen. Gepubliceerde regionale en prosopografische autoriteiten plaatsen hem in directe verbinding met Wessegem in Ursel en identificeren hem als een van de bastaardzonen van Lodewijk van Male.","territorial_title":"Territoriale setting: Wessegem en Ursel","territorial_p1":"De territoriale setting is centraal. De Vlaamse erfgoedinventaris voor het Hof van Wessegem voert het landgoed terug naar de middeleeuwse heerlijkheid Wessegem en stelt dat tegen het einde van de veertiende eeuw 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male', heren van Wessegem waren; er wordt verder opgemerkt dat het eigendom in 1431 terugkeerde naar het grafelijk domein. Een lokale geschiedenis van Ursel stelt eveneens dat Wessegem in 1399 overging op Victor van Vlaanderen, 'een andere bastaardzoon van Lodewijk van Male', en dat hij daar vaak verbleef.","charter_title":"Directe oorkondekern","charter_p1":"De documentaire kern van Victors dossier ligt in het oorkondemateriaal dat is samengevat door de Foundation for Medieval Genealogy. Het FMG-materiaal over Vlaanderen en Henegouwen bevat een samenvatting van een oorkonde van 12 mei 1427 waarin \\"Adam van Vlandren\\" wordt genoemd als de natuurlijke zoon van \\"mer Victor van Vlaendren\\" en waarin wordt gespecificeerd dat Adam Victors zoon was bij \\"Gertruden Liendekins.\\"","charter_p2":"Een tweede FMG-samenvatting voor een Gentse akte van 10 maart 1441 (oude stijl) vermeldt dat \\"Mergriete Aelfhuuts Heindricx Maye...wijf\\" eigendom schonk aan \\"Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen...mer Victor van Vlaendren.\\" Deze samenvattingen stellen direct vast dat Victor ten minste drie erkende natuurlijke zonen had, dat hun namen Lodewyc, Janne en Adam waren, en dat Victor op de datum van de latere akte reeds was overleden.","military_title":"Victor van Vlaenderen: Maritieme en militaire activiteit","military_p1":"Victor komt ook voor in de gepubliceerde militair-maritieme literatuur. Een DBNL-artikel stelt: \\"Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.\\" Een door de UGent gehoste studie over de Vlaamse kaapvaart vermeldt eveneens de aanstelling van \\"een nieuwe admiraal: Victor van Vlaenderen.\\" Deze bronnen ondersteunen de conclusie dat Victor een belangrijke kust- of marinecommandofunctie bekleedde.","significance_title":"Victor van Vlaenderen: Genealogische betekenis","significance_p1":"De genealogische betekenis van Victor van Vlaenderen ligt in de convergentie van afstamming, locatie en achternaam. Het gepubliceerde register stelt een onwettige grafelijke tak vast die geworteld is in de regio Ursel/Wessegem en toont Victors erkende natuurlijke zonen die de achternaamvorm van Vlaendren dragen.","significance_p2":"Het vormt echter een substantiële middeleeuwse documentaire kern die een dergelijke continuïteitshypothese materieel sterker maakt dan een loutere toevallige-achternaam-verklaring.","source_4":"R. Degryse, \\"Willem Beukel(s) van Hughevliet: Geschiedenis en legende van een Vlaamse vissersheld,\\" De Vlaamse Gids 38 (1954).","source_5":"Corvers en zeeschuimers van den Vlaemsche zeecoste, UGent repository copy.","cta_text":"Heeft u onderzoek dat aansluit bij de lijn van Victor van Vlaenderen?","cta_note":"We zijn actief op zoek naar manieren om de kloof tussen de 15e-eeuwse registers en de vroegmoderne parochieregisters te overbruggen.","gap_title":"De kloof overbruggen (1442-1547)","gap_p1":"De belangrijkste onopgeloste vraag in dit onderzoek is de generationele brug tussen de laatst gedocumenteerde vijftiende-eeuwse van Vlaendren (Adam, vermeld 1441) en de eerste bevestigde vroegmoderne drager (Joos, vermeld 1547). Deze kloof van ongeveer een eeuw overspant de overgang van feodale verslaglegging naar consistente parochieregistratie, en het is hier waar de hypothese van continue afstamming staat of valt.","gap_p2":"Wat het vijftiende-eeuwse archief vaststelt is duidelijk: Adam van Vlaendren, natuurlijke zoon van Victor, bezat land in de regio Ursel en Wessegem en was nog in leven ten tijde van het charter van 1441/42. De heerlijkheid Wessegem was in 1431 teruggekeerd naar het grafelijk domein, wat betekent dat Adam en zijn broers de heerlijkheid zelf niet erfden. Zij zouden in de registers verschijnen niet als heren, maar als pachtvrijen, leenhouders of eigenërfden -- wat hen moeilijker maar niet onmogelijk op te sporen maakt.","gap_p3":"Drie archiefpaden bieden het meest realistische vooruitzicht om de kloof te dichten:","gap_p4":"Ten eerste, cijnsboeken en leenboeken voor de ambachten Ursel en Maldegem, over de periode 1440-1540. Als land dat in de jaren 1420 en 1430 in het bezit was van Victors familie een of twee generaties later verschijnt onder de naam van Vlaenderen, vormt dat eigendomscontinuïteit -- het sterkst beschikbare niet-genealogische bewijs van afstamming.","gap_p5":"Ten tweede, Staten van Goed (boedelbeschrijvingen) voor dezelfde regio. Als Adam stierf en erfgenamen naliet, zou een boedelverdeling waarin zijn kinderen worden genoemd transformatief zijn. De relevante collecties in het Rijksarchief Gent omvatten het Ambacht Ursel, Ambacht Maldegem en de omliggende heerlijkheden.","gap_p6":"Ten derde, de procesdossiers van de Raad van Vlaanderen. Erfenisgeschillen, voogdijzaken en verwantschapsverklaringen in gerechtelijke procedures bewaren soms genealogische relaties die nooit in parochieregisters verschijnen. Deze registers worden bewaard in het Rijksarchief Gent en zijn nog niet systematisch doorzocht op partijen met de naam van Vlaenderen.","gap_p7":"Het archiefwerk dat nodig is om deze kloof te overbruggen is gaande. Totdat dit voltooid is, blijft de verbinding tussen de vijftiende-eeuwse grafelijke bastaardlijn en de zestiende-eeuwse Meetjeslandse van Vlaenderens een goed onderbouwde hypothese in plaats van een bewezen afstamming.","badge_probable":"Waarschijnlijk"}`);
const louis_friese = { "hero_eyebrow": "Van Vlaenderen · Genealogisch onderzoek", "hero_title": "Lodewijk 'de Fries' van Vlaenderen", "hero_lead": "Heer van Praet en Woestine; natuurlijke zoon van Lodewijk II 'van Male', graaf van Vlaanderen. Stichter van het huis van Vlaanderen-Praet.", "dossier_title": "Dossier Lodewijk 'de Fries' van Vlaenderen", "dossier_updated": "Bijgewerkt april 2026", "praet_title": "Het huis van Vlaanderen-Praet", "praet_p1": "Lodewijk 'de Fries' van Vlaenderen — ook wel Lodewijk de Fries of Louis le Frison genoemd — was een onwettige zoon van Lodewijk II van Male, graaf van Vlaanderen. Hij kreeg de heerlijkheid Praet (Oedelem) en de heerlijkheid Woestine toegewezen, waarmee hij een belangrijke adellijke tak stichtte die gedurende verschillende generaties de achternaam van Vlaenderen droeg.", "praet_p2": "Het huis van Vlaanderen-Praet is een van de best gedocumenteerde onwettige takken van het grafelijk huis. De leden bekleedden hoge ambten, waaronder het Gulden Vlies, en dienden als adviseurs van de hertogen van Bourgondië en de Habsburgse vorsten.", "extinction_title": "Het uitsterven van de adellijke lijn", "extinction_p1": 'De directe adellijke lijn van het Huis Vlaanderen-Praet wordt traditioneel geacht in de mannelijke lijn te zijn uitgestorven in 1556 met de dood van Lodewijk van Vlaanderen, heer van Praet, een prominent diplomaat en adviseur van keizer Karel V. Dit "uitsterven" heeft echter doorgaans alleen betrekking op de primaire, getitelde tak van de familie.', "extinction_p2": "Ons onderzoek onderzoekt de mogelijkheid dat jongere zonen en zijtakken van de Praet-lijn overleefden en de naam Van Vlaenderen voortzetten in een niet-adellijke hoedanigheid. De verhuizing van deze takken naar de landelijke parochies van Oost-Vlaanderen zou de patronen weerspiegelen die te zien zijn bij andere onwettige adellijke linies uit die periode.", "figures_title": "Sleutelfiguren van de Praet-lijn", "figure_1": "Lodewijk 'de Fries' van Vlaenderen (d. 1396) — Stichter; heer van Praet en Woestine.", "figure_2": "Johan I van Vlaenderen (d. ca. 1440) — Heer van Praet; geridderd door de hertog van Bourgondië.", "figure_3": "Lodewijk II van Vlaenderen — Heer van Praet en Woestine.", "figure_4": "Lodewijk III van Vlaenderen (d. 1490) — Heer van Praet.", "tree_title": "De afstamming van het huis van Vlaanderen-Praet", "tree_alt": "Stamboomdiagram van het huis van Vlaanderen-Praet van Lodewijk de Fries tot Jan II", "sources_title": "Noten & bibliografie", "source_1": "Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut.", "source_2": "Foundation for Medieval Genealogy, MedLands: Flemish Nobility.", "source_3": "Wappenwiki: House of Flanders-Praet.", "back_button": "Terug naar onderzoeksoverzicht", "praet_p3": "Lodewijk de Fries werd geboren rond 1350. Hij was een prominente militaire figuur en sneuvelde in de Slag bij Nicopolis op 28 september 1396, samen met zijn broers Lodewijk de Haze en Jan zonder Vrees.", "praet_p4": "De heerlijkheid Praet werd in 1373 door Lodewijk van Male verworven en vervolgens aan Lodewijk de Fries geschonken. Hiermee werd de zetel van de familie in West-Vlaanderen gevestigd, hoewel hun invloed en bezittingen zich over het hele graafschap uitstrekten.", "praet_p5": "Het consistente gebruik van 'van Vlaenderen' door deze tak is een belangrijk aandachtspunt van ons onderzoek. Het laat zien hoe de naam fungeerde als een erfelijk kenmerk van grafelijke afstamming tijdens de overgang van de Dampierre-dynastie naar het huis van Bourgondië.", "praet_p6": "De legitieme mannelijke lijn van het huis van Vlaanderen-Praet eindigde met de dood van Lodewijk IV in 1556. Zijn enige gedocumenteerde zoon, Jan II, stierf vóór hem zonder nakomelingen, en de heerlijkheid Praet ging over op andere families.", "survival_title": "Voortbestaan van de achternaam", "survival_p1": "Hoewel de legitieme mannelijke lijn van de heerlijkheid Praet in 1556 eindigde, blijft de vraag of zijtakken of onwettige takken van dit huis overleefden en opgingen in de bredere Van Vlaenderen-bevolking van het Meetjesland een onderwerp van onderzoek.", "survival_p2": "De Praet-lijn dient als een cruciaal 'onderzoekscontrolepunt' voor ons project. Door de bekende leden van deze hooggeplaatste tak te documenteren, kunnen we hen beter onderscheiden van de hedendaagse Van Vlaenderen-families die voorkomen in de parochieregisters van Ursel, Bassevelde en de omliggende dorpen.", "figures_intro": "De volgende personen vertegenwoordigen de primaire afstamming van het huis van Vlaanderen-Praet:", "figure_5": "Lodewijk IV van Vlaenderen (d. 1555) — Ridder in de Orde van het Gulden Vlies; stadhouder van Holland.", "source_4": "GenealogieOnline: West-Europese Adel (Lodewijk van Vlaanderen).", "source_5": "GenealogieOnline: West-Europese Adel (Johan van Vlaanderen).", "source_6": "DBNL: Correspondentie van Erasmus (verwijzend naar Lodewijk van Praet).", "source_7": 'Rootenberg, S. F. U. (2013). "The Van Hille descent of the Swanepoel family". Familia, 50(4), 221-228.', "cta_text": "Heeft u onderzoek naar de zijtakken van het huis van Praet?", "cta_note": "We onderzoeken het mogelijke voortbestaan van de naam van Vlaenderen via niet-seigneuriale lijnen van dit huis.", "badge_corroborated": "Sterk gecorroboreerd", "badge_hypothesis": "Hypothese", "badge_attested": "Direct geattesteerd", "badge_probable": "Waarschijnlijk" };
const nl = {
  nav: nav$1,
  home,
  about,
  history,
  mill,
  dna,
  contact,
  footer,
  common,
  lineage,
  research,
  name,
  victor,
  louis_friese
};
const lionShield = "/assets/lion-shield-CCv7FaFa.png";
const container = "_container_14ab3_1";
const button = "_button_14ab3_10";
const active$1 = "_active_14ab3_24";
const styles$4 = {
  container,
  button,
  active: active$1
};
function LanguageToggle() {
  const { i18n: i18n2 } = useTranslation();
  const current = i18n2.language?.startsWith("nl") ? "nl" : "en";
  const toggle = (lang) => {
    i18n2.changeLanguage(lang);
    document.documentElement.lang = lang;
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$4.container, "aria-label": i18n2.t("nav.language_toggle_label"), children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `${styles$4.button} ${current === "nl" ? styles$4.active : ""}`,
        onClick: () => toggle("nl"),
        "aria-pressed": current === "nl",
        "aria-label": "Switch to Dutch",
        children: "NL"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `${styles$4.button} ${current === "en" ? styles$4.active : ""}`,
        onClick: () => toggle("en"),
        "aria-pressed": current === "en",
        "aria-label": "Switch to English",
        children: "EN"
      }
    )
  ] });
}
const nav = "_nav_ezmhu_1";
const logo = "_logo_ezmhu_16";
const logoImg = "_logoImg_ezmhu_30";
const logoText = "_logoText_ezmhu_36";
const tabs = "_tabs_ezmhu_45";
const tab = "_tab_ezmhu_45";
const active = "_active_ezmhu_73";
const styles$3 = {
  nav,
  logo,
  logoImg,
  logoText,
  tabs,
  tab,
  active
};
const TAB_PATHS = [
  { id: "home", path: "/" },
  { id: "mill", path: "/mill" },
  { id: "name", path: "/name" },
  { id: "research", path: "/research" },
  { id: "dna", path: "/dna" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" }
];
function Nav(_props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;
  const activeTab = TAB_PATHS.find(
    (t2) => t2.path === "/" ? activePath === "/" : activePath.startsWith(t2.path)
  )?.id ?? "home";
  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("nav", { className: styles$3.nav, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: styles$3.logo,
        onClick: () => handleNav("/"),
        "aria-label": "Van Vlaenderen — Home",
        children: [
          /* @__PURE__ */ jsx("img", { src: lionShield, alt: "Lion of Flanders heraldic shield", className: styles$3.logoImg }),
          /* @__PURE__ */ jsx("span", { className: styles$3.logoText, children: "Van Vlaenderen" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: styles$3.tabs, role: "menubar", children: TAB_PATHS.map(({ id, path }) => {
      const labelKey = id === "dna" ? "nav.dna" : id === "research" ? "nav.history" : `nav.${id}`;
      return /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx(
        "button",
        {
          role: "menuitem",
          className: `${styles$3.tab} ${activeTab === id ? styles$3.active : ""}`,
          onClick: () => handleNav(path),
          "aria-current": activeTab === id ? "page" : void 0,
          children: t(labelKey)
        }
      ) }, id);
    }) }),
    /* @__PURE__ */ jsx("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsx(LanguageToggle, {}) })
  ] });
}
const MAX_NODES = 52;
const MAX_SEGS = 72;
const MAX_DEPTH = 4;
const SCROLL_PX_S = 24;
const DRAW_PX_S = 220;
const BASE_ALPHA = 0.17;
const DEPTH_FADE = 0.7;
const TARGET_FPS = 30;
const FRAME_MS = 1e3 / TARGET_FPS;
const H_STEP_MIN = 110;
const H_STEP_MAX = 180;
const V_SPREAD = 0.22;
const GOLD_BRIGHT = "rgba(232,184,48,";
const GOLD_DEEP = "rgba(175,125,18,";
function rng(seed) {
  let s = (seed ^ 3735928559) >>> 0;
  return () => {
    s += 1831565813;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967295;
  };
}
function FamilyTreeCanvas() {
  if (typeof window === "undefined") return null;
  const canvasRef = useRef(null);
  useEffect(() => {
    const raw = canvasRef.current;
    if (!raw) return;
    const cvs = raw;
    const ctx = cvs.getContext("2d", { alpha: true });
    const nodes = [];
    const segs = [];
    let scrollX = 0;
    let seedCtr = 1;
    let lastTs = 0;
    let lastFr = 0;
    let animId = 0;
    function resize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    resize();
    const scx = (wx) => wx - scrollX;
    function spawnRoot() {
      if (nodes.length >= MAX_NODES) return;
      const r = rng(seedCtr++);
      nodes.push({
        wx: scrollX + cvs.width + 30 + r() * 60,
        ny: 0.15 + r() * 0.7,
        depth: 0,
        expanded: false,
        gold: r() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP
      });
    }
    function expand(n) {
      if (n.expanded || n.depth >= MAX_DEPTH) return;
      if (nodes.length >= MAX_NODES || segs.length >= MAX_SEGS) return;
      if (scx(n.wx) > cvs.width + 80) return;
      n.expanded = true;
      const r = rng(seedCtr++);
      const childCount = n.depth <= 1 && r() < 0.45 ? 2 : 1;
      const hStep = H_STEP_MIN + r() * (H_STEP_MAX - H_STEP_MIN);
      const offsets = childCount === 1 ? [(r() - 0.5) * V_SPREAD * 0.6] : [-(V_SPREAD * 0.5 + r() * 0.05), V_SPREAD * 0.5 + r() * 0.05];
      for (const dyNorm of offsets) {
        if (nodes.length >= MAX_NODES || segs.length >= MAX_SEGS) break;
        const cr = rng(seedCtr++);
        const childNy = Math.max(0.05, Math.min(0.95, n.ny + dyNorm));
        const child = {
          wx: n.wx + hStep,
          ny: childNy,
          depth: n.depth + 1,
          expanded: false,
          gold: cr() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP
        };
        nodes.push(child);
        const hLen = hStep;
        const vLen = Math.abs((childNy - n.ny) * cvs.height);
        segs.push({ from: n, to: child, hLen, vLen, drawn: 0, done: false });
      }
    }
    function cull() {
      const edge = scrollX - 150;
      for (let i = segs.length - 1; i >= 0; i--) {
        if (segs[i].to.wx < edge) segs.splice(i, 1);
      }
      for (let i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].wx < edge) nodes.splice(i, 1);
      }
    }
    function drawSeg(seg) {
      const fromX = scx(seg.from.wx);
      if (fromX > cvs.width + 20) return;
      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, seg.from.depth);
      const fade = Math.min(1, Math.max(0, (fromX + 100) / 100));
      const a = alpha * fade;
      if (a < 4e-3) return;
      const fromY = seg.from.ny * cvs.height;
      const toX = scx(seg.to.wx);
      const toY = seg.to.ny * cvs.height;
      const elbowX = toX;
      const drawn = seg.drawn;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = seg.from.gold + "1)";
      ctx.lineWidth = Math.max(0.5, 1.2 - seg.from.depth * 0.2);
      ctx.lineCap = "square";
      ctx.beginPath();
      if (drawn <= 0) ;
      else if (drawn <= seg.hLen) {
        const t = drawn / seg.hLen;
        const ex = fromX + (elbowX - fromX) * t;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(ex, fromY);
      } else {
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(elbowX, fromY);
        const vDrawn = drawn - seg.hLen;
        const t = vDrawn / Math.max(seg.vLen, 1e-3);
        const ey = fromY + (toY - fromY) * Math.min(1, t);
        ctx.lineTo(elbowX, ey);
      }
      ctx.stroke();
      ctx.restore();
    }
    function drawNode(n) {
      const x = scx(n.wx);
      if (x < -8 || x > cvs.width + 8) return;
      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, n.depth);
      const fade = Math.min(1, Math.max(0, (x + 100) / 100));
      const a = alpha * fade;
      if (a < 4e-3) return;
      const y = n.ny * cvs.height;
      const r = Math.max(1, 2.4 - n.depth * 0.4);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = n.gold + "1)";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    function frame(ts) {
      animId = requestAnimationFrame(frame);
      if (ts - lastFr < FRAME_MS) return;
      const dt = Math.min((ts - lastTs) / 1e3, 0.05);
      lastTs = ts;
      lastFr = ts;
      scrollX += SCROLL_PX_S * dt;
      for (const seg of segs) {
        if (!seg.done && scx(seg.from.wx) < cvs.width + 80) {
          const segTotal = seg.hLen + seg.vLen;
          seg.drawn = Math.min(segTotal, seg.drawn + DRAW_PX_S * dt);
          if (seg.drawn >= segTotal) seg.done = true;
        }
      }
      for (const n of nodes) {
        if (!n.expanded) {
          expand(n);
          break;
        }
      }
      const rightmost = nodes.reduce((m, n) => Math.max(m, n.wx), scrollX);
      if (rightmost < scrollX + cvs.width + 160 && nodes.length < MAX_NODES) {
        spawnRoot();
      }
      cull();
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (const seg of segs) drawSeg(seg);
      for (const node of nodes) drawNode(node);
    }
    const ir = rng(99);
    for (let i = 0; i < 7; i++) {
      const wx = scrollX + ir() * cvs.width * 0.85;
      nodes.push({
        wx,
        ny: 0.12 + ir() * 0.76,
        depth: 0,
        expanded: false,
        gold: ir() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP
      });
    }
    animId = requestAnimationFrame((ts) => {
      lastTs = ts;
      lastFr = ts;
      animId = requestAnimationFrame(frame);
    });
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      style: {
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        display: "block"
      }
    }
  );
}
const heroBg = "/assets/hero-background-rVYnRAiM.jpg";
const millVinderhoute = "/assets/van-vlaenderensmolen-vinderhoute-cc-by-sa-3.0-DLfqQN5a.jpg";
const manuscriptNoblewoman$1 = "/assets/manuscript-noblewoman-DWtkNqY0.jpg";
const cronikeShields = "/assets/cronike-van-vlaenderen-shields-double-page-CTwR9X-P.jpg";
const page$3 = "_page_10apn_1";
const hero = "_hero_10apn_8";
const heroOverlay = "_heroOverlay_10apn_18";
const heroContent = "_heroContent_10apn_29";
const shield = "_shield_10apn_37";
const title$1 = "_title_10apn_50";
const subtitle = "_subtitle_10apn_60";
const heroSubtitleNarrative = "_heroSubtitleNarrative_10apn_70";
const heroSubtitleLocations = "_heroSubtitleLocations_10apn_76";
const heroScrollHint = "_heroScrollHint_10apn_83";
const villageStrip = "_villageStrip_10apn_95";
const villageScroll = "_villageScroll_10apn_103";
const villageItem = "_villageItem_10apn_120";
const villageDot = "_villageDot_10apn_132";
const mysterySection = "_mysterySection_10apn_138";
const mysteryInner = "_mysteryInner_10apn_149";
const mysteryQuestion = "_mysteryQuestion_10apn_155";
const mysteryBody = "_mysteryBody_10apn_170";
const dividerLine = "_dividerLine_10apn_189";
const emergingTheory = "_emergingTheory_10apn_196";
const pullQuote$1 = "_pullQuote_10apn_204";
const pullQuoteMark = "_pullQuoteMark_10apn_217";
const callToAction = "_callToAction_10apn_225";
const visitorNote = "_visitorNote_10apn_240";
const hypothesisBlock = "_hypothesisBlock_10apn_251";
const hypothesisLabel = "_hypothesisLabel_10apn_265";
const hypothesisTitle = "_hypothesisTitle_10apn_273";
const researchNote = "_researchNote_10apn_281";
const mysteryActions = "_mysteryActions_10apn_292";
const primaryBtn = "_primaryBtn_10apn_300";
const secondaryBtn = "_secondaryBtn_10apn_321";
const heraldicDivider = "_heraldicDivider_10apn_343";
const heraldicLine = "_heraldicLine_10apn_352";
const heraldicSymbol = "_heraldicSymbol_10apn_359";
const cardsSection = "_cardsSection_10apn_366";
const cardsHeading = "_cardsHeading_10apn_371";
const cards = "_cards_10apn_366";
const card$1 = "_card_10apn_366";
const cardImg = "_cardImg_10apn_408";
const cardImgOverlay = "_cardImgOverlay_10apn_427";
const cardBody = "_cardBody_10apn_433";
const cardTitle = "_cardTitle_10apn_441";
const cardSub = "_cardSub_10apn_448";
const cardQuote = "_cardQuote_10apn_456";
const cardArrow = "_cardArrow_10apn_466";
const footerStrip = "_footerStrip_10apn_476";
const footerDivider = "_footerDivider_10apn_492";
const styles$2 = {
  page: page$3,
  hero,
  heroOverlay,
  heroContent,
  shield,
  title: title$1,
  subtitle,
  heroSubtitleNarrative,
  heroSubtitleLocations,
  heroScrollHint,
  villageStrip,
  villageScroll,
  villageItem,
  villageDot,
  mysterySection,
  mysteryInner,
  mysteryQuestion,
  mysteryBody,
  dividerLine,
  emergingTheory,
  pullQuote: pullQuote$1,
  pullQuoteMark,
  callToAction,
  visitorNote,
  hypothesisBlock,
  hypothesisLabel,
  hypothesisTitle,
  researchNote,
  mysteryActions,
  primaryBtn,
  secondaryBtn,
  heraldicDivider,
  heraldicLine,
  heraldicSymbol,
  cardsSection,
  cardsHeading,
  cards,
  card: card$1,
  cardImg,
  cardImgOverlay,
  cardBody,
  cardTitle,
  cardSub,
  cardQuote,
  cardArrow,
  footerStrip,
  footerDivider
};
const TOP_PATHS = {
  home: "/",
  mill: "/mill",
  name: "/name",
  dna: "/dna",
  research: "/research",
  lineage: "/lineage",
  about: "/about",
  contact: "/contact"
};
const RESEARCH_PATHS = {
  main: "/research",
  victor: "/research/victor",
  "louis-friese": "/research/louis-friese",
  "victor-dossier": "/research/victor-dossier",
  "praet-dossier": "/research/praet-dossier",
  "praet-lineage-dossier": "/research/praet-lineage-dossier",
  "methodology": "/research/methodology",
  "bibliography": "/research/bibliography",
  "gap-dossier": "/research/gap-dossier",
  "nieus-seals": "/research/nieus-seals",
  "drincham-dossier": "/research/drincham-dossier"
};
function useNav() {
  const navigate = useNavigate();
  const goTo = (tab2) => {
    const path = TOP_PATHS[tab2] ?? "/";
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goToResearch = (subpage) => {
    if (subpage === "contact") {
      navigate("/contact");
    } else {
      const path = RESEARCH_PATHS[subpage] ?? "/research";
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { goTo, goToResearch };
}
const villages = [
  "Ursel",
  "Bassevelde",
  "Boekhoute",
  "Evergem",
  "Merendree",
  "Lovendegem",
  "Vinderhoute",
  "Wessegem",
  "Kaprijke",
  "Adegem",
  "Eeklo",
  "Ghent"
];
function HomePage() {
  const { goTo } = useNav();
  const { t } = useTranslation();
  const cards2 = [
    {
      id: "mill",
      titleKey: "home.card_mill_title",
      subtitleKey: "home.card_mill_subtitle",
      quoteKey: "home.card_mill_quote",
      img: millVinderhoute
    },
    {
      id: "name",
      titleKey: "home.card_name_title",
      subtitleKey: "home.card_name_subtitle",
      quoteKey: "home.card_name_quote",
      img: manuscriptNoblewoman$1
    },
    {
      id: "research",
      titleKey: "home.card_research_title",
      subtitleKey: "home.card_research_subtitle",
      quoteKey: "home.card_research_quote",
      img: manuscriptNoblewoman$1
    },
    {
      id: "dna",
      titleKey: "home.card_dna_title",
      subtitleKey: "home.card_dna_subtitle",
      quoteKey: "home.card_dna_quote",
      img: cronikeShields
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: styles$2.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Van Vlaenderen — Flemish Heritage & Family History Research" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Genealogical research tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders (1330–1384). Fourteen generations documented from Meetjesland to America." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Van Vlaenderen — Flemish Heritage Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders. Fourteen generations, archival evidence, Y-DNA research." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://vanvlaenderen.org/assets/hero-background-rVYnRAiM.jpg" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.hero, style: { backgroundImage: `url(${heroBg})` }, children: [
      /* @__PURE__ */ jsx("div", { className: styles$2.heroOverlay }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.heroContent, children: [
        /* @__PURE__ */ jsx("img", { src: lionShield, alt: "Lion of Flanders", className: styles$2.shield }),
        /* @__PURE__ */ jsx("h1", { className: styles$2.title, children: "Van Vlaenderen" }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.subtitle, children: [
          /* @__PURE__ */ jsx("div", { className: styles$2.heroSubtitleNarrative, children: t("home.hero_subtitle_narrative") }),
          /* @__PURE__ */ jsxs("div", { className: styles$2.heroSubtitleLocations, children: [
            "· ",
            t("home.hero_subtitle_locations")
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$2.heroScrollHint, children: "↓" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$2.villageStrip, children: /* @__PURE__ */ jsx("div", { className: styles$2.villageScroll, children: [...villages, ...villages].map((v, i) => /* @__PURE__ */ jsxs("span", { className: styles$2.villageItem, children: [
      v,
      /* @__PURE__ */ jsx("span", { className: styles$2.villageDot, children: "✦" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("div", { className: styles$2.mysterySection, children: /* @__PURE__ */ jsxs("div", { className: styles$2.mysteryInner, children: [
      /* @__PURE__ */ jsx("div", { className: styles$2.mysteryQuestion, children: t("home.mystery_question") }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.mysteryBody, children: [
        /* @__PURE__ */ jsxs("p", { children: [
          t("home.mystery_intro_p1"),
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Van Vlaenderen" }),
          " ",
          t("home.mystery_intro_p1_cont")
        ] }),
        /* @__PURE__ */ jsx("p", { className: styles$2.visitorNote, children: /* @__PURE__ */ jsx("em", { children: t("home.mystery_visitor_note") }) }),
        /* @__PURE__ */ jsx("div", { className: styles$2.dividerLine }),
        /* @__PURE__ */ jsxs("p", { children: [
          t("home.mystery_toponymic_p1"),
          " ",
          /* @__PURE__ */ jsx("strong", { children: "toponymic" }),
          ": ",
          /* @__PURE__ */ jsx("em", { children: "Van Vlaenderen" }),
          " ",
          t("home.mystery_toponymic_p1_cont")
        ] }),
        /* @__PURE__ */ jsx("p", { className: styles$2.emergingTheory, children: t("home.mystery_emerging") }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.hypothesisBlock, children: [
          /* @__PURE__ */ jsx("div", { className: styles$2.hypothesisLabel, children: t("home.hypothesis_one_label") }),
          /* @__PURE__ */ jsx("div", { className: styles$2.hypothesisTitle, children: t("home.hypothesis_one_title") }),
          /* @__PURE__ */ jsx("p", { children: t("home.hypothesis_one_body") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.hypothesisBlock, children: [
          /* @__PURE__ */ jsx("div", { className: styles$2.hypothesisLabel, children: t("home.hypothesis_two_label") }),
          /* @__PURE__ */ jsx("div", { className: styles$2.hypothesisTitle, children: t("home.hypothesis_two_title") }),
          /* @__PURE__ */ jsx("p", { children: t("home.hypothesis_two_p1") }),
          /* @__PURE__ */ jsx("p", { children: t("home.hypothesis_two_p2") }),
          /* @__PURE__ */ jsxs("button", { className: styles$2.primaryBtn, onClick: () => goTo("research"), children: [
            t("home.cta_research"),
            " →"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.pullQuote, children: [
          /* @__PURE__ */ jsx("span", { className: styles$2.pullQuoteMark, children: '"' }),
          t("home.pull_quote"),
          /* @__PURE__ */ jsx("span", { className: styles$2.pullQuoteMark, children: '"' })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: styles$2.callToAction, children: [
          t("home.cta_collaborative_p1"),
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Van Vlaenderen" }),
          " ",
          t("home.cta_collaborative_p1_cont")
        ] }),
        /* @__PURE__ */ jsx("p", { className: styles$2.researchNote, children: t("home.research_note") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.mysteryActions, children: [
        /* @__PURE__ */ jsx("button", { className: styles$2.primaryBtn, onClick: () => goTo("name"), children: t("home.cta_explore") }),
        /* @__PURE__ */ jsx("button", { className: styles$2.secondaryBtn, onClick: () => goTo("contact"), children: t("home.cta_contribute") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.heraldicDivider, children: [
      /* @__PURE__ */ jsx("span", { className: styles$2.heraldicLine }),
      /* @__PURE__ */ jsx("span", { className: styles$2.heraldicSymbol, children: "✦" }),
      /* @__PURE__ */ jsx("span", { className: styles$2.heraldicLine })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.cardsSection, children: [
      /* @__PURE__ */ jsx("div", { className: styles$2.cardsHeading, children: t("home.explore_archive") }),
      /* @__PURE__ */ jsx("div", { className: styles$2.cards, children: cards2.map((card2) => /* @__PURE__ */ jsxs(
        "button",
        {
          className: styles$2.card,
          onClick: () => goTo(card2.id),
          children: [
            /* @__PURE__ */ jsxs("div", { className: styles$2.cardImg, children: [
              /* @__PURE__ */ jsx("img", { src: card2.img, alt: t(card2.titleKey) }),
              /* @__PURE__ */ jsx("div", { className: styles$2.cardImgOverlay })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$2.cardBody, children: [
              /* @__PURE__ */ jsx("div", { className: styles$2.cardTitle, children: t(card2.titleKey) }),
              /* @__PURE__ */ jsx("div", { className: styles$2.cardSub, children: t(card2.subtitleKey) }),
              /* @__PURE__ */ jsx("div", { className: styles$2.cardQuote, children: t(card2.quoteKey) }),
              /* @__PURE__ */ jsx("div", { className: styles$2.cardArrow, children: "→" })
            ] })
          ]
        },
        card2.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.footerStrip, children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 VanVlaenderen.org" }),
      /* @__PURE__ */ jsx("span", { className: styles$2.footerDivider, children: "·" }),
      /* @__PURE__ */ jsx("span", { children: "East Flanders, Belgium" }),
      /* @__PURE__ */ jsx("span", { className: styles$2.footerDivider, children: "·" }),
      /* @__PURE__ */ jsx("span", { children: t("home.footer_project") }),
      /* @__PURE__ */ jsx("span", { className: styles$2.footerDivider, children: "·" }),
      /* @__PURE__ */ jsx("span", { children: t("home.footer_permission") })
    ] })
  ] });
}
const meetjeslandMap$1 = "/assets/meetjesland-map-CT1b2Tqt.jpg";
const page$2 = "_page_5rbee_3";
const heroStrip = "_heroStrip_5rbee_15";
const heroImg = "_heroImg_5rbee_21";
const heroImgOverlay = "_heroImgOverlay_5rbee_28";
const heroText = "_heroText_5rbee_35";
const textHero = "_textHero_5rbee_48";
const eyebrow = "_eyebrow_5rbee_59";
const heroLead = "_heroLead_5rbee_68";
const content$1 = "_content_5rbee_78";
const section = "_section_5rbee_87";
const pullQuote = "_pullQuote_5rbee_108";
const mapNote = "_mapNote_5rbee_133";
const mapNoteInner = "_mapNoteInner_5rbee_147";
const mapNoteIcon = "_mapNoteIcon_5rbee_153";
const mapNoteCoords = "_mapNoteCoords_5rbee_173";
const ctaBox = "_ctaBox_5rbee_180";
const ctaText = "_ctaText_5rbee_195";
const ctaNote = "_ctaNote_5rbee_204";
const styles$1 = {
  page: page$2,
  heroStrip,
  heroImg,
  heroImgOverlay,
  heroText,
  textHero,
  eyebrow,
  heroLead,
  content: content$1,
  section,
  pullQuote,
  mapNote,
  mapNoteInner,
  mapNoteIcon,
  mapNoteCoords,
  ctaBox,
  ctaText,
  ctaNote
};
const millPhotoRow = "_millPhotoRow_1095v_1";
const millPhotoCard = "_millPhotoCard_1095v_12";
const millPhotoCaption = "_millPhotoCaption_1095v_28";
const proverbBox = "_proverbBox_1095v_44";
const proverbDecor = "_proverbDecor_1095v_54";
const proverbText = "_proverbText_1095v_61";
const proverbSource = "_proverbSource_1095v_71";
const lineageContainer = "_lineageContainer_1095v_81";
const lineageNode = "_lineageNode_1095v_91";
const lineageGeneration = "_lineageGeneration_1095v_102";
const lineageName = "_lineageName_1095v_111";
const lineageDates = "_lineageDates_1095v_118";
const lineageRole = "_lineageRole_1095v_126";
const lineageConnector = "_lineageConnector_1095v_134";
const lineageConnectorLine = "_lineageConnectorLine_1095v_141";
const lineageConnectorArrow = "_lineageConnectorArrow_1095v_147";
const meetjeslandSection = "_meetjeslandSection_1095v_160";
const meetjeslandMapBg = "_meetjeslandMapBg_1095v_168";
const meetjeslandContent = "_meetjeslandContent_1095v_177";
const millStyles = {
  millPhotoRow,
  millPhotoCard,
  millPhotoCaption,
  proverbBox,
  proverbDecor,
  proverbText,
  proverbSource,
  lineageContainer,
  lineageNode,
  lineageGeneration,
  lineageName,
  lineageDates,
  lineageRole,
  lineageConnector,
  lineageConnectorLine,
  lineageConnectorArrow,
  meetjeslandSection,
  meetjeslandMapBg,
  meetjeslandContent
};
function MillPage() {
  const { goTo } = useNav();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Mill — Van Vlaenderen Family Origins | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "The documented miller lineage of the Van Vlaenderen family from 1568 Ghent through East Flanders — Wassegem, Oostwinkel, Waarschoot, Boekhoute, and Bassevelde." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/mill" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "The Mill — Van Vlaenderen Family Origins" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Documented miller lineage from 1568 Ghent through East Flanders." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/mill" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${millVinderhoute})`, backgroundPosition: "center center" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("mill.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("mill.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: t("mill.hero_lead") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: millStyles.proverbBox, children: [
        /* @__PURE__ */ jsx("div", { className: millStyles.proverbDecor, children: "✦" }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.proverbText, children: [
          '"',
          t("mill.proverb_text"),
          '"'
        ] }),
        /* @__PURE__ */ jsx("div", { className: millStyles.proverbSource, children: t("mill.proverb_source") }),
        /* @__PURE__ */ jsx("div", { className: millStyles.proverbDecor, children: "✦" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("mill.history_title") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.history_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.history_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.history_p3") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: millStyles.lineageContainer, children: [
        /* @__PURE__ */ jsxs("div", { className: millStyles.lineageNode, children: [
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageGeneration, children: t("mill.lineage_gen_1") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageName, children: t("mill.lineage_name_1") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageDates, children: t("mill.lineage_dates_1") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageRole, children: t("mill.lineage_role_1") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.lineageConnector, children: [
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageConnectorLine }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageConnectorArrow, children: "›" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.lineageNode, children: [
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageGeneration, children: t("mill.lineage_gen_2") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageName, children: t("mill.lineage_name_2") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageDates, children: t("mill.lineage_dates_2") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageRole, children: t("mill.lineage_role_2") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.lineageConnector, children: [
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageConnectorLine }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageConnectorArrow, children: "›" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.lineageNode, children: [
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageGeneration, children: t("mill.lineage_gen_3") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageName, children: t("mill.lineage_name_3") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageDates, children: t("mill.lineage_dates_3") }),
          /* @__PURE__ */ jsx("div", { className: millStyles.lineageRole, children: t("mill.lineage_role_3") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: millStyles.millPhotoRow, children: /* @__PURE__ */ jsxs("div", { className: millStyles.millPhotoCard, children: [
        /* @__PURE__ */ jsx("img", { src: millVinderhoute, alt: t("mill.photo_alt") }),
        /* @__PURE__ */ jsxs("div", { className: millStyles.millPhotoCaption, children: [
          t("mill.photo_caption"),
          " ",
          /* @__PURE__ */ jsxs("em", { children: [
            t("mill.photo_attribution"),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://commons.wikimedia.org/wiki/User:Pvhuf", target: "_blank", rel: "noopener noreferrer", children: "Pvhuf" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://creativecommons.org/licenses/by-sa/3.0/", target: "_blank", rel: "noopener noreferrer", children: "CC BY-SA 3.0" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("mill.social_title") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.social_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.social_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.social_p3") }),
        /* @__PURE__ */ jsx("p", { children: t("mill.social_p4") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: millStyles.meetjeslandSection, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: millStyles.meetjeslandMapBg,
            style: { backgroundImage: `url(${meetjeslandMap$1})` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: millStyles.meetjeslandContent, children: [
          /* @__PURE__ */ jsx("h2", { children: t("mill.region_title") }),
          /* @__PURE__ */ jsx("p", { children: t("mill.region_p1") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$1.mapNote, children: /* @__PURE__ */ jsxs("div", { className: styles$1.mapNoteInner, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.mapNoteIcon, children: "📍" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: t("mill.location_name") }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { children: t("mill.location_address") }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: styles$1.mapNoteCoords, children: t("mill.location_coords") }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.google.com/maps/place/Van+Vlaenderensmolen/@51.1009,3.5985,17z",
              target: "_blank",
              rel: "noopener noreferrer",
              style: { fontSize: "0.85rem", letterSpacing: "0.06em", marginTop: "0.5rem", display: "inline-block" },
              children: t("mill.location_link")
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.ctaBox, onClick: () => goTo("contact"), style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("mill.cta_text") }),
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("mill.cta_note") })
      ] })
    ] })
  ] });
}
const villageGrid = "_villageGrid_y0x67_1";
const villageCard = "_villageCard_y0x67_8";
const villageName = "_villageName_y0x67_17";
const villageNote = "_villageNote_y0x67_24";
const spellingList = "_spellingList_y0x67_31";
const spellingTag = "_spellingTag_y0x67_38";
const shareStoryBtn = "_shareStoryBtn_y0x67_50";
const mapContainer = "_mapContainer_y0x67_83";
const mapImage = "_mapImage_y0x67_90";
const mapCaption = "_mapCaption_y0x67_98";
const documentContainer = "_documentContainer_y0x67_109";
const documentImage = "_documentImage_y0x67_117";
const documentCaption = "_documentCaption_y0x67_127";
const manuscriptRow = "_manuscriptRow_y0x67_137";
const manuscriptCard = "_manuscriptCard_y0x67_148";
const manuscriptCaption = "_manuscriptCaption_y0x67_183";
const lightboxOverlay = "_lightboxOverlay_y0x67_193";
const lightboxImage = "_lightboxImage_y0x67_210";
const lightboxCaption = "_lightboxCaption_y0x67_218";
const lightboxClose = "_lightboxClose_y0x67_231";
const nameStyles = {
  villageGrid,
  villageCard,
  villageName,
  villageNote,
  spellingList,
  spellingTag,
  shareStoryBtn,
  mapContainer,
  mapImage,
  mapCaption,
  documentContainer,
  documentImage,
  documentCaption,
  manuscriptRow,
  manuscriptCard,
  manuscriptCaption,
  lightboxOverlay,
  lightboxImage,
  lightboxCaption,
  lightboxClose
};
const manuscriptNoblewoman = "/assets/cronike-van-vlaenderen-countess-of-flanders-FFuOL0Qw.jpg";
const knightPhilip = "/assets/cronike-van-vlaenderen-philip-of-alsace-knight-DGQauyu8.jpg";
const lionWoodcut = "/assets/lion-woodcut-BatZURmx.jpg";
const ResearchMap$1 = lazy(() => import("./assets/ResearchMap-DF8B_k4w.js"));
function NamePage() {
  const { goTo } = useNav();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);
  const villages2 = [
    { name: t("name.village_bassevelde"), note: t("name.village_bassevelde_note") },
    { name: t("name.village_boekhoute"), note: t("name.village_boekhoute_note") },
    { name: t("name.village_ursel"), note: t("name.village_ursel_note") },
    { name: t("name.village_evergem"), note: t("name.village_evergem_note") },
    { name: t("name.village_lovendegem"), note: t("name.village_lovendegem_note") },
    { name: t("name.village_sleidinge"), note: t("name.village_sleidinge_note") },
    { name: t("name.village_wessegem"), note: t("name.village_wessegem_note") },
    { name: t("name.village_vinderhoute"), note: t("name.village_vinderhoute_note") }
  ];
  const variations = [
    "Van Vlaenderen",
    "Van Vlaendereen",
    "Vanvlaenderen",
    "Van Flanderen",
    "Vanflanderen",
    "de Flandre",
    "van Vlanderen",
    "Van Vlaendren"
  ];
  const manuscripts = [
    { src: manuscriptNoblewoman, alt: t("name.manuscript_1_alt"), caption: t("name.manuscript_1_caption") },
    { src: knightPhilip, alt: t("name.manuscript_2_alt"), caption: t("name.manuscript_2_caption") },
    { src: lionWoodcut, alt: t("name.manuscript_3_alt"), caption: t("name.manuscript_3_caption") }
  ];
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: 'The Name — Where "Van Vlaenderen" Comes From | vanvlaenderen.org' }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Analysis of the Van Vlaenderen surname: why it is comital identity, not a common toponym. Evidence from Victor van Vlaenderen's 1441 charter and the bastard children of Louis II de Male." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/name" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "The Name — Where Van Vlaenderen Comes From" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Comital identity, not a toponym. Evidence from the 1441 charter of Victor van Vlaenderen." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/name" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${knightPhilip})`, backgroundPosition: "top center" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("name.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("name.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: t("name.hero_lead") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("name.history_title") }),
        /* @__PURE__ */ jsx("p", { children: t("name.history_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("name.history_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("name.history_p3") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("name.four_bucket_title") }),
        /* @__PURE__ */ jsx("p", { children: t("name.four_bucket_intro") }),
        /* @__PURE__ */ jsx("p", { children: t("name.four_bucket_rebuttal") }),
        /* @__PURE__ */ jsxs("div", { style: { margin: "2rem 0" }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            fontSize: "0.78rem",
            fontFamily: "var(--font-ui)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem"
          }, children: t("name.four_bucket_table_heading") }),
          [
            { num: "1", label: t("name.four_bucket_b1_label"), desc: t("name.four_bucket_b1_desc"), muted: true },
            { num: "2", label: t("name.four_bucket_b2_label"), desc: t("name.four_bucket_b2_desc"), muted: true },
            { num: "3", label: t("name.four_bucket_b3_label"), desc: t("name.four_bucket_b3_desc"), muted: true },
            { num: "4", label: t("name.four_bucket_b4_label"), desc: t("name.four_bucket_b4_desc"), muted: false }
          ].map(({ num, label, desc, muted }) => /* @__PURE__ */ jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "2.5rem 1fr",
            gap: "0 1rem",
            padding: "1rem 1.25rem",
            marginBottom: "0.5rem",
            borderRadius: "4px",
            background: muted ? "rgba(255,255,255,0.02)" : "rgba(232,184,48,0.06)",
            border: muted ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(232,184,48,0.25)",
            boxShadow: muted ? "none" : "0 0 12px rgba(232,184,48,0.07)"
          }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              fontSize: "1.4rem",
              fontWeight: 700,
              color: muted ? "var(--text-muted)" : "var(--gold)",
              lineHeight: 1,
              paddingTop: "0.1rem"
            }, children: num }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: {
                fontWeight: 600,
                color: muted ? "var(--text-muted)" : "var(--text-primary)",
                marginBottom: "0.3rem",
                fontSize: "0.9rem"
              }, children: label }),
              /* @__PURE__ */ jsx("div", { style: {
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.6
              }, children: desc })
            ] })
          ] }, num))
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontStyle: "italic", color: "var(--text-muted)", fontSize: "0.95rem" }, children: t("name.four_bucket_conclusion") }),
        /* @__PURE__ */ jsxs("div", { style: {
          marginTop: "2rem",
          padding: "1.5rem 1.75rem",
          background: "rgba(232,184,48,0.04)",
          border: "1px solid rgba(232,184,48,0.2)",
          borderRadius: "4px"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontSize: "0.72rem", fontFamily: "var(--font-ui)", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "0.6rem" }, children: "Research Article" }),
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.6rem" }, children: "Four Functions, Three Clusters" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1rem", fontStyle: "normal" }, children: "The name appears, at first glance, to explain itself. But when the earliest surname populations are mapped geographically across three centuries, they cluster in ways that pure toponymy cannot explain — concentrated inside Flanders itself, stable over two hundred years in specific villages. This analysis sets out what the documentary and distributional evidence actually shows." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                navigate("/name/surname-origins");
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              style: {
                background: "none",
                border: "1px solid rgba(232,184,48,0.35)",
                color: "var(--gold)",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderRadius: "3px",
                fontSize: "0.82rem",
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.06em"
              },
              children: "Read the Analysis →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { style: { height: "400px" } }), children: /* @__PURE__ */ jsx(ResearchMap$1, {}) }),
      /* @__PURE__ */ jsxs("div", { className: nameStyles.mapContainer, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: meetjeslandMap$1,
            alt: t("name.map_alt"),
            className: nameStyles.mapImage
          }
        ),
        /* @__PURE__ */ jsx("div", { className: nameStyles.mapCaption, children: t("name.map_caption") }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic", marginTop: "0.5rem", padding: "0 0.5rem" }, children: t("name.map_caption_bucket_note") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$1.pullQuote, children: /* @__PURE__ */ jsxs("blockquote", { children: [
        '"',
        t("name.pull_quote"),
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("name.villages_title") }),
        /* @__PURE__ */ jsx("p", { children: t("name.villages_intro") }),
        /* @__PURE__ */ jsx("div", { className: nameStyles.villageGrid, children: villages2.map((v) => /* @__PURE__ */ jsxs("div", { className: nameStyles.villageCard, children: [
          /* @__PURE__ */ jsx("div", { className: nameStyles.villageName, children: v.name }),
          /* @__PURE__ */ jsx("div", { className: nameStyles.villageNote, children: v.note })
        ] }, v.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("name.variations_title") }),
        /* @__PURE__ */ jsx("p", { children: t("name.variations_intro") }),
        /* @__PURE__ */ jsx("div", { className: nameStyles.spellingList, children: variations.map((s) => /* @__PURE__ */ jsx("span", { className: nameStyles.spellingTag, children: s }, s)) }),
        /* @__PURE__ */ jsx("p", { children: t("name.variations_footer") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("name.cronike_title") }),
        /* @__PURE__ */ jsx("p", { children: t("name.cronike_p1") }),
        /* @__PURE__ */ jsxs("div", { className: nameStyles.documentContainer, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: cronikeShields,
              alt: t("name.document_alt"),
              className: nameStyles.documentImage
            }
          ),
          /* @__PURE__ */ jsx("div", { className: nameStyles.documentCaption, children: t("name.document_caption") })
        ] }),
        /* @__PURE__ */ jsx("p", { children: t("name.cronike_p2") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: nameStyles.manuscriptRow, children: manuscripts.map((m, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: nameStyles.manuscriptCard,
          role: "button",
          tabIndex: 0,
          "aria-label": `${m.caption} — click to enlarge`,
          onClick: () => setLightbox(m),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightbox(m);
            }
          },
          children: [
            /* @__PURE__ */ jsx("img", { src: m.src, alt: m.alt }),
            /* @__PURE__ */ jsx("div", { className: nameStyles.manuscriptCaption, children: m.caption })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.ctaBox, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("name.cta_text") }),
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("name.cta_note") }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: nameStyles.shareStoryBtn,
            onClick: () => goTo("contact"),
            children: t("name.cta_button")
          }
        )
      ] })
    ] }),
    lightbox && /* @__PURE__ */ jsxs(
      "div",
      {
        className: nameStyles.lightboxOverlay,
        onClick: closeLightbox,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Image lightbox",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: nameStyles.lightboxClose,
              onClick: closeLightbox,
              "aria-label": "Close lightbox",
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: lightbox.src,
              alt: lightbox.alt,
              className: nameStyles.lightboxImage,
              onClick: (e) => e.stopPropagation()
            }
          ),
          /* @__PURE__ */ jsx("div", { className: nameStyles.lightboxCaption, children: lightbox.caption })
        ]
      }
    )
  ] });
}
const dnaGrid = "_dnaGrid_35pwo_1";
const dnaCard = "_dnaCard_35pwo_8";
const dnaType = "_dnaType_35pwo_23";
const dnaDesc = "_dnaDesc_35pwo_31";
const testingServices = "_testingServices_35pwo_39";
const servicesHeading = "_servicesHeading_35pwo_47";
const servicesGrid = "_servicesGrid_35pwo_57";
const serviceCard = "_serviceCard_35pwo_63";
const serviceName = "_serviceName_35pwo_81";
const serviceNote = "_serviceNote_35pwo_87";
const serviceArrow = "_serviceArrow_35pwo_95";
const familyPhotoContainer = "_familyPhotoContainer_35pwo_116";
const familyPhoto = "_familyPhoto_35pwo_116";
const familyPhotoCaption = "_familyPhotoCaption_35pwo_146";
const dnaStyles = {
  dnaGrid,
  dnaCard,
  dnaType,
  dnaDesc,
  testingServices,
  servicesHeading,
  servicesGrid,
  serviceCard,
  serviceName,
  serviceNote,
  serviceArrow,
  familyPhotoContainer,
  familyPhoto,
  familyPhotoCaption
};
const vintageFamilyPhoto = "/assets/vintage-family-photo-CrbyeLFQ.jpg";
function DnaPage() {
  const { goTo } = useNav();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "DNA Evidence — Y-DNA Research | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Y-DNA haplogroup research for the Van Vlaenderen patrilineal line. Big Y-700 results, R-FT1573 singleton branch, and the case for a single common ancestor." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/dna" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "DNA Evidence — Van Vlaenderen Y-DNA Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Y-DNA analysis placing the Van Vlaenderen line in haplogroup R-FT1573. Big Y-700 results and single-ancestor hypothesis." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/dna" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${cronikeShields})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("dna.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("dna.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: t("dna.hero_lead") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("dna.origin_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.origin_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.origin_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.origin_p3") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.origin_p4") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.origin_p5") }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("dna.origin_p6") }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$1.pullQuote, children: /* @__PURE__ */ jsxs("blockquote", { children: [
        '"',
        t("dna.pullquote"),
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: dnaStyles.familyPhotoContainer, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: vintageFamilyPhoto,
            alt: "Vintage family photograph — early 20th century",
            className: dnaStyles.familyPhoto
          }
        ),
        /* @__PURE__ */ jsx("div", { className: dnaStyles.familyPhotoCaption, children: t("dna.family_photo_caption") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("dna.dna_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.dna_intro") }),
        /* @__PURE__ */ jsxs("div", { className: dnaStyles.dnaGrid, children: [
          /* @__PURE__ */ jsxs("div", { className: dnaStyles.dnaCard, children: [
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaType, children: t("dna.dna_ydna") }),
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaDesc, children: t("dna.dna_ydna_desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: dnaStyles.dnaCard, children: [
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaType, children: t("dna.dna_autosomal") }),
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaDesc, children: t("dna.dna_autosomal_desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: dnaStyles.dnaCard, children: [
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaType, children: t("dna.dna_mtdna") }),
            /* @__PURE__ */ jsx("div", { className: dnaStyles.dnaDesc, children: t("dna.dna_mtdna_desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("dna.project_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.project_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.project_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.project_p3") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.project_p4") }),
        /* @__PURE__ */ jsx("p", { children: t("dna.project_p5") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: dnaStyles.testingServices, children: [
        /* @__PURE__ */ jsx("div", { className: dnaStyles.servicesHeading, children: t("dna.services_heading") }),
        /* @__PURE__ */ jsx("div", { className: dnaStyles.servicesGrid, children: [
          { name: t("dna.service_familytreedna"), note: t("dna.service_familytreedna_note"), url: "https://www.familytreedna.com" },
          { name: t("dna.service_ancestry"), note: t("dna.service_ancestry_note"), url: "https://www.ancestry.com/dna" },
          { name: t("dna.service_23andme"), note: t("dna.service_23andme_note"), url: "https://www.23andme.com" },
          { name: t("dna.service_myheritage"), note: t("dna.service_myheritage_note"), url: "https://www.myheritage.com/dna" }
        ].map((s) => /* @__PURE__ */ jsxs("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", className: dnaStyles.serviceCard, children: [
          /* @__PURE__ */ jsx("div", { className: dnaStyles.serviceName, children: s.name }),
          /* @__PURE__ */ jsx("div", { className: dnaStyles.serviceNote, children: s.note }),
          /* @__PURE__ */ jsx("div", { className: dnaStyles.serviceArrow, children: "↗" })
        ] }, s.name)) })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: styles$1.ctaBox,
          onClick: () => goTo("contact"),
          style: { background: "none", border: "none", cursor: "pointer", padding: 0, width: "100%", textAlign: "center" },
          children: [
            /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("dna.cta_body") }),
            /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("dna.cta_note") })
          ]
        }
      )
    ] })
  ] });
}
const dossierHeader = "_dossierHeader_1pohl_1";
const dossierTitle = "_dossierTitle_1pohl_10";
const dossierMeta = "_dossierMeta_1pohl_17";
const methodologyBox = "_methodologyBox_1pohl_25";
const methodologyTitle = "_methodologyTitle_1pohl_33";
const methodologyGrid = "_methodologyGrid_1pohl_41";
const methodItem = "_methodItem_1pohl_47";
const methodLabel = "_methodLabel_1pohl_52";
const evidenceLevel = "_evidenceLevel_1pohl_62";
const levelAttested = "_levelAttested_1pohl_73";
const levelCorroborated = "_levelCorroborated_1pohl_74";
const levelProbable = "_levelProbable_1pohl_75";
const levelHypothesis = "_levelHypothesis_1pohl_76";
const treeContainer = "_treeContainer_1pohl_78";
const referenceList = "_referenceList_1pohl_159";
const refItem = "_refItem_1pohl_174";
const refNumber = "_refNumber_1pohl_181";
const refLink = "_refLink_1pohl_187";
const branchCards = "_branchCards_1pohl_199";
const branchCard = "_branchCard_1pohl_199";
const branchLink = "_branchLink_1pohl_239";
const researchStyles = {
  dossierHeader,
  dossierTitle,
  dossierMeta,
  methodologyBox,
  methodologyTitle,
  methodologyGrid,
  methodItem,
  methodLabel,
  evidenceLevel,
  levelAttested,
  levelCorroborated,
  levelProbable,
  levelHypothesis,
  treeContainer,
  referenceList,
  refItem,
  refNumber,
  refLink,
  branchCards,
  branchCard,
  branchLink
};
const C = {
  root: "#e8812a",
  victor: "#9b7fd4",
  praet: "#4aaed4",
  focus: "#d4a830",
  red: "#e06060",
  blue: "#60a5fa",
  text: "#f0e8d0",
  sub: "#d0d4dc",
  muted: "#d0d4dc",
  surf: "#1c2030"
};
const EV = {
  direct: { label: "Directly Attested", bg: "rgba(74,222,128,0.18)", c: "#4ade80" },
  strong: { label: "Strongly Corroborated", bg: "rgba(251,191,36,0.18)", c: "#fbbf24" },
  focus: { label: "Research Focus", bg: "rgba(212,168,48,0.18)", c: "#d4a830" },
  hypo: { label: "Evidentiary Gap", bg: "rgba(248,113,113,0.18)", c: "#f87171" },
  parish: { label: "Parish Records", bg: "rgba(96,165,250,0.18)", c: "#60a5fa" },
  ends: { label: "Line Ends Here", bg: "rgba(248,113,113,0.18)", c: "#f87171" }
};
function connectionPath(a, b) {
  const my = (a.bot + b.top) / 2;
  return `M${a.cx},${a.bot} C${a.cx},${my + 16} ${b.cx},${my - 16} ${b.cx},${b.top}`;
}
function DiagramNode({ cfg, x, y, onClick, onMouseEnter, onMouseLeave }) {
  const W = cfg.w || 180;
  const H = cfg.h || (cfg.tag ? 96 : cfg.dates ? 68 : 58);
  const color = cfg.color;
  const lines = (cfg.name || "").split("\n");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-n": "1",
      onClick: (e) => onClick(cfg, e),
      onMouseEnter: (e) => onMouseEnter(cfg, e),
      onMouseLeave,
      style: {
        position: "absolute",
        left: x,
        top: y,
        width: W,
        height: H,
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: -2,
              borderRadius: 8,
              background: color + "14",
              border: `1px solid ${color}28`,
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 6,
              background: cfg.focus ? "#1e1c10" : C.surf,
              border: `${cfg.focus ? 2.5 : 1.5}px solid ${color}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
              boxSizing: "border-box"
            },
            children: [
              lines.map((line, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    fontFamily: "Cinzel, serif",
                    fontSize: cfg.focus ? 14 : 13,
                    fontWeight: 600,
                    color: C.text,
                    textAlign: "center",
                    lineHeight: "18px",
                    whiteSpace: "nowrap"
                  },
                  children: line
                },
                i
              )),
              cfg.dates && /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    fontFamily: "EB Garamond, Georgia, serif",
                    fontSize: 13,
                    fontStyle: "italic",
                    color: C.sub,
                    textAlign: "center",
                    lineHeight: "16px",
                    marginTop: 1
                  },
                  children: cfg.dates
                }
              ),
              cfg.tag && /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    display: "inline-block",
                    marginTop: 6,
                    padding: "3px 8px",
                    borderRadius: 3,
                    background: color + "44",
                    border: `0.5px solid ${color}66`,
                    fontFamily: "Cinzel, serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.55px",
                    color,
                    textAlign: "center",
                    lineHeight: "15px",
                    whiteSpace: "nowrap"
                  },
                  children: cfg.tag
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function LineageDiagram({ diagram: diagram2, title: title2, subtitle: subtitle2 }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const tipRef = useRef(null);
  const [tipData, setTipData] = useState(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const [pinned, setPinned] = useState(null);
  const [scale, setScale] = useState(1);
  const [canvasW, canvasH] = useMemo(() => {
    const parts = diagram2.viewBox.split(/\s+/).map(Number);
    return [parts[2] || 920, parts[3] || 580];
  }, [diagram2.viewBox]);
  const nodeBoxes = useMemo(() => {
    const boxes = {};
    for (const n of diagram2.nodes) {
      const W = n.cfg.w || 180;
      const H = n.cfg.h || (n.cfg.tag ? 96 : n.cfg.dates ? 68 : 58);
      boxes[n.id] = {
        cx: n.x + W / 2,
        top: n.y,
        bot: n.y + H
      };
    }
    return boxes;
  }, [diagram2.nodes]);
  useEffect(() => {
    const container2 = canvasRef.current?.parentElement;
    if (!container2) return;
    const update = () => {
      const parentW = container2.offsetWidth;
      if (parentW > 0) setScale(parentW / canvasW);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(container2);
    return () => ro.disconnect();
  }, [canvasW]);
  const toCanvasPos = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: clientX, y: clientY };
    const rect = canvas.getBoundingClientRect();
    const currentScale = rect.width / canvasW;
    return {
      x: (clientX - rect.left) / currentScale,
      y: (clientY - rect.top) / currentScale
    };
  }, [canvasW]);
  const handleHover = useCallback((data, e) => {
    if (!pinned) {
      setTipData(data);
      setTipPos(toCanvasPos(e.clientX, e.clientY));
    }
  }, [pinned, toCanvasPos]);
  const handleLeave = useCallback(() => {
    if (!pinned) setTipData(null);
  }, [pinned]);
  const handleClick = useCallback((data, e) => {
    e.stopPropagation();
    if (pinned === data) {
      setPinned(null);
      setTipData(null);
    } else {
      setPinned(data);
      setTipData(data);
      setTipPos(toCanvasPos(e.clientX, e.clientY));
    }
  }, [pinned, toCanvasPos]);
  useEffect(() => {
    const handleDocClick = (e) => {
      if (!e.target.closest("[data-n]")) {
        setPinned(null);
        setTipData(null);
      }
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);
  useEffect(() => {
    const handleMove = (e) => {
      if (tipData && !pinned) {
        setTipPos(toCanvasPos(e.clientX, e.clientY));
      }
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, [tipData, pinned, toCanvasPos]);
  const ev = tipData?.ev ? EV[tipData.ev] || EV.strong : null;
  let tx = tipPos.x + 16;
  let ty = tipPos.y + 16;
  const tipW = 270;
  const tipH = 160;
  if (tx + tipW > canvasW - 8) tx = tipPos.x - tipW - 16;
  if (ty + tipH > canvasH - 8) ty = tipPos.y - tipH - 16;
  tx = Math.max(8, Math.min(tx, canvasW - tipW - 8));
  ty = Math.max(8, Math.min(ty, canvasH - tipH - 8));
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, style: { position: "relative" }, children: [
    title2 && /* @__PURE__ */ jsxs("div", { style: { marginBottom: 16 }, children: [
      subtitle2 && /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            fontFamily: "Cinzel, serif",
            fontSize: 12,
            letterSpacing: "0.22em",
            color: "#c4a55a",
            textTransform: "uppercase",
            marginBottom: 6
          },
          children: subtitle2
        }
      ),
      /* @__PURE__ */ jsx(
        "h3",
        {
          style: {
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(17px, 3vw, 22px)",
            color: "#f0e8d0",
            margin: "0 0 6px"
          },
          children: title2
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          background: "#12151c",
          border: "1px solid #252836",
          borderRadius: 8,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "relative",
                width: "100%",
                paddingBottom: `${canvasH / canvasW * 100}%`,
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsxs(
                "div",
                {
                  ref: canvasRef,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: canvasW,
                    height: canvasH,
                    transformOrigin: "top left",
                    transform: `scale(${scale})`,
                    background: "#12151c"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: canvasW,
                          height: canvasH,
                          pointerEvents: "none"
                        },
                        viewBox: `0 0 ${canvasW} ${canvasH}`,
                        children: diagram2.connections.map((conn, i) => {
                          const a = nodeBoxes[conn.from];
                          const b = nodeBoxes[conn.to];
                          if (!a || !b) return null;
                          return /* @__PURE__ */ jsx(
                            "path",
                            {
                              d: connectionPath(a, b),
                              stroke: conn.color,
                              strokeWidth: conn.dashed ? 1.5 : 2,
                              fill: "none",
                              opacity: conn.dashed ? 0.5 : 0.7,
                              strokeDasharray: conn.dashed ? "5 4" : void 0
                            },
                            i
                          );
                        })
                      }
                    ),
                    diagram2.labels?.map((label, i) => /* @__PURE__ */ jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: label.x,
                          top: label.y,
                          transform: "translate(-50%, -50%)",
                          fontFamily: "Cinzel, serif",
                          fontSize: label.size || 14,
                          letterSpacing: "0.08em",
                          color: label.color || "#d0d4dc",
                          whiteSpace: "nowrap",
                          pointerEvents: "none"
                        },
                        children: label.text
                      },
                      `label-${i}`
                    )),
                    diagram2.annotations?.map((ann, i) => /* @__PURE__ */ jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: ann.x,
                          top: ann.y,
                          transform: "translateY(-50%)",
                          fontFamily: "EB Garamond, Georgia, serif",
                          fontSize: 15,
                          fontStyle: "italic",
                          color: ann.color || C.muted,
                          whiteSpace: "nowrap",
                          pointerEvents: "none"
                        },
                        children: ann.text
                      },
                      `ann-${i}`
                    )),
                    diagram2.nodes.map((n) => /* @__PURE__ */ jsx(
                      DiagramNode,
                      {
                        cfg: n.cfg,
                        x: n.x,
                        y: n.y,
                        onClick: handleClick,
                        onMouseEnter: handleHover,
                        onMouseLeave: handleLeave
                      },
                      n.id
                    )),
                    tipData && /* @__PURE__ */ jsxs(
                      "div",
                      {
                        ref: tipRef,
                        "data-n": "1",
                        style: {
                          position: "absolute",
                          left: tx,
                          top: ty,
                          background: "#0d0f14",
                          border: "1px solid #7a6535",
                          borderRadius: 6,
                          padding: "13px 15px",
                          maxWidth: 270,
                          pointerEvents: "none",
                          zIndex: 9999,
                          fontFamily: "EB Garamond, Georgia, serif",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.6)"
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              style: {
                                fontFamily: "Cinzel, serif",
                                fontSize: 15,
                                fontWeight: 600,
                                color: "#f0e8d0",
                                marginBottom: 4
                              },
                              children: tipData.name?.replace("\n", " ")
                            }
                          ),
                          tipData.dates && /* @__PURE__ */ jsx(
                            "div",
                            {
                              style: {
                                fontSize: 13,
                                color: "#d0d4dc",
                                marginBottom: 7,
                                fontStyle: "italic"
                              },
                              children: tipData.dates
                            }
                          ),
                          ev && /* @__PURE__ */ jsx(
                            "span",
                            {
                              style: {
                                display: "inline-block",
                                fontSize: 11,
                                padding: "2px 7px",
                                borderRadius: 3,
                                fontFamily: "Cinzel, serif",
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                marginBottom: 7,
                                background: ev.bg,
                                color: ev.c
                              },
                              children: ev.label
                            }
                          ),
                          tipData.body && /* @__PURE__ */ jsx("div", { style: { fontSize: 15, color: "#f0e8d0", lineHeight: 1.55 }, children: tipData.body }),
                          tipData.src && /* @__PURE__ */ jsxs(
                            "div",
                            {
                              style: {
                                fontSize: 13,
                                color: "#d0d4dc",
                                marginTop: 8,
                                paddingTop: 7,
                                borderTop: "1px solid #1e2230",
                                fontStyle: "italic"
                              },
                              children: [
                                "Source: ",
                                tipData.src
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 18px",
                padding: "12px 16px",
                borderTop: "1px solid #1e2230",
                background: "rgba(255,255,255,0.015)"
              },
              children: diagram2.legendItems.map((item, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 14,
                    color: "#d0d4dc"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        style: {
                          width: 11,
                          height: 11,
                          borderRadius: 2,
                          flexShrink: 0,
                          background: item.color
                        }
                      }
                    ),
                    item.label
                  ]
                },
                i
              ))
            }
          )
        ]
      }
    )
  ] });
}
const diagram$2 = {
  viewBox: "0 0 920 580",
  nodes: [
    { id: "lm", x: 350, y: 20, cfg: { name: "Louis II de Male", dates: "Count of Flanders · 1330–1384", tag: "HOUSE OF DAMPIERRE · LAST COUNT", body: "Fathered at least 13 illegitimate children. His death in 1384 ended Dampierre rule — the moment van Vlaenderen crystallises as a heritable surname among his bastard children.", src: "Wikipedia; FMG MedLands [817]", color: C.root, ev: "direct", w: 220, h: 76 } },
    { id: "vic", x: 90, y: 145, cfg: { name: "Victor van Vlaenderen", dates: "d. before 10 Mar 1442", tag: "LORD OF URSEL & WESSEGEM", body: "Natural son of Louis de Male. Lord of Ursel and Wessegem. Burgundian admiral; captain of Biervliet. Three natural sons documented in primary charters 1427–1447.", src: "FMG MedLands [841–855]", color: C.victor, ev: "direct", w: 185, h: 76 } },
    { id: "lod", x: 18, y: 275, cfg: { name: "Lodewyc van Vlaendren", dates: "fl. 1427–1442", body: "Natural son by Alix van Boyeghem. Married Jacqueline de Wilde. Son Josse died young; daughter Margareta married into noble families.", src: "FMG MedLands [846–850]", color: C.victor, ev: "direct", w: 155, h: 55 } },
    { id: "jan", x: 188, y: 275, cfg: { name: "Janne van Vlaendren", dates: "fl. 1427–1442", body: "Natural son by Alix van Boyeghem. No records after 1442.", src: "FMG MedLands [851,852]", color: C.victor, ev: "direct", w: 150, h: 55 } },
    { id: "adam", x: 360, y: 268, cfg: { name: "Adam van Vlaendren", dates: "fl. 1427 – 18 Mar 1447 N.S.", tag: "RESEARCH FOCUS", body: "Natural son by Gertrud Lindekens. Named in all three charters (1427, 1441, 1446). Active donor in the 1446/1447 charter: 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem.' Last confirmed 15th-century bearer.", src: "FMG MedLands [853–855]; Vredius (1443) pp.285–287", color: C.focus, ev: "focus", focus: true, w: 168, h: 74 } },
    { id: "gap", x: 360, y: 390, cfg: { name: "EVIDENTIARY GAP", dates: "c.1447 – 1547", body: "~100 years between Adam (last confirmed 1447) and Joos (1547). Archival targets: cijnsboeken, leenboeken, and Staten van Goed (Ambacht Ursel / Maldegem).", src: "Research hypothesis; Rijksarchief Gent", color: C.red, ev: "hypo", w: 168, h: 50 } },
    { id: "joos", x: 360, y: 472, cfg: { name: "Joos van Vlaenderen", dates: "fl. 1547", body: "Testator, Brugse Vrije 1547. Earliest confirmed early modern bearer. No direct genealogical link to Adam yet demonstrated.", src: "Staten van Goed, Brugse Vrije 1548 (TBO 184, bundle 21300)", color: C.blue, ev: "parish", w: 168, h: 50 } },
    { id: "fri", x: 648, y: 145, cfg: { name: "Louis Friese van Vlaenderen", dates: "c.1350 – 28 Sep 1396", tag: "LORD OF PRAET & WOESTINE", body: "Natural son of Louis de Male. Killed at Nicopolis. Founded the House of Flanders-Praet — six generations using van Vlaenderen as hereditary surname.", src: "FMG MedLands [864–869]", color: C.praet, ev: "direct", w: 195, h: 76 } },
    { id: "j1", x: 653, y: 268, cfg: { name: "Johan I van Vlaenderen", dates: "d. after 10 Sep 1439", body: "Own charter as Lord of Praet 10 Sep 1439. Seven documented children.", src: "FMG MedLands [872,873]", color: C.praet, ev: "direct", w: 185, h: 55 } },
    { id: "l4", x: 653, y: 368, cfg: { name: "Lodewijk IV van Vlaenderen", dates: "d. 1555", tag: "GOLDEN FLEECE 1531", body: "Grand Bailiff of Ghent and Bruges. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from Wessegem seigneurie — Meetjesland territorial link.", src: "FMG MedLands [891–893]; Wikipedia", color: C.focus, ev: "focus", focus: true, w: 185, h: 74 } },
    { id: "j2", x: 653, y: 480, cfg: { name: "Jan II van Vlaenderen", dates: "d. 10 Dec 1545", tag: "LEGITIMATE LINE ENDS", body: "Only son of Lodewijk IV. Predeceased father without issue. Legitimate Praet male line ends here.", src: "FMG MedLands [894,895]; epitaph Aeltere", color: C.red, ev: "ends", w: 185, h: 66 } }
  ],
  connections: [
    { from: "lm", to: "vic", color: C.victor },
    { from: "lm", to: "fri", color: C.praet },
    { from: "vic", to: "lod", color: C.victor },
    { from: "vic", to: "jan", color: C.victor },
    { from: "vic", to: "adam", color: C.focus },
    { from: "adam", to: "gap", color: C.red, dashed: true },
    { from: "gap", to: "joos", color: C.blue, dashed: true },
    { from: "fri", to: "j1", color: C.praet },
    { from: "j1", to: "l4", color: C.praet, dashed: true },
    { from: "l4", to: "j2", color: C.red }
  ],
  labels: [
    { x: 183, y: 125, text: "VICTOR'S LINE", color: C.victor },
    { x: 745, y: 125, text: "PRAET LINE", color: C.praet }
  ],
  annotations: [
    { x: 460, y: 108, text: "13 documented illegitimate children — two surname-bearing lines shown", color: "#f0e8d0" },
    { x: 680, y: 346, text: "(Lodewijk II and III — see Diagram 3)", color: "#d0d4dc" }
  ],
  legendItems: [
    { color: C.root, label: "Comital source" },
    { color: C.victor, label: "Victor's line" },
    { color: C.praet, label: "Praet line" },
    { color: "#4ade80", label: "Directly attested" },
    { color: C.focus, label: "Research focus" },
    { color: "#f87171", label: "Unproven / line ends" },
    { color: C.blue, label: "Parish-record era" }
  ]
};
function OverviewDiagram() {
  return /* @__PURE__ */ jsx(
    LineageDiagram,
    {
      diagram: diagram$2,
      subtitle: "Research Overview"
    }
  );
}
const diagram$1 = {
  viewBox: "0 0 920 560",
  nodes: [
    { id: "lm", x: 360, y: 18, cfg: { name: "Louis II de Male", dates: "Count of Flanders · 1330–1384", body: "Father of Victor van Vlaenderen by his mistress Margaretha Haelshuuts — the only named mistress in the primary sources.", src: "FMG MedLands [817,841]", color: C.root, ev: "direct", w: 200, h: 55 } },
    { id: "vic", x: 330, y: 118, cfg: { name: "Victor van Vlaenderen", dates: "d. before 10 Mar 1442", tag: "SEIGNEUR D'URSELE ET WESSEGHEM", body: "Natural son of Louis de Male. Burgundian admiral; captain of Biervliet. Testament 1430 names brothers Robert and Karel as executors. Married Jeanne de Gavre 1420.", src: "FMG MedLands [841–845]", color: C.victor, ev: "direct", w: 260, h: 90 } },
    { id: "lod", x: 30, y: 260, cfg: { name: "Lodewyc van Vlaendren", dates: "fl. 1427–1442", tag: "BY ALIX VAN BOYEGHEM", body: "Natural son. Named in charters of 1427 and 1441. Married Jacqueline de Wilde (-Apr 1482, bur Oostborch).", src: "FMG MedLands [846,847]", color: C.victor, ev: "direct", w: 200, h: 90 } },
    { id: "jan_s", x: 350, y: 260, cfg: { name: "Janne van Vlaendren", dates: "fl. 1427–1442", tag: "BY ALIX VAN BOYEGHEM", body: "Natural son. Named in charters of 1427 and 1441. No further records identified.", src: "FMG MedLands [851,852]", color: C.victor, ev: "direct", w: 200, h: 90 } },
    { id: "adam", x: 640, y: 254, cfg: { name: "Adam van Vlaendren", dates: "fl. 1427 – 18 Mar 1447 N.S.", tag: "RESEARCH FOCUS", body: "Natural son by Gertrud Lindekens. Named in all three charters. Active donor in 1446 charter: ‘Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem.’ Margriete Aelfhuuts still active patroness in 1446.", src: "FMG MedLands [853–855]; Vredius (1643) pp.285–287", color: C.focus, ev: "focus", focus: true, w: 210, h: 96 } },
    { id: "josse_l", x: 18, y: 372, cfg: { name: "Josse van Vlaenderen", dates: "died young, bur Oostborch", body: "Son of Lodewyc. Died young. Cannot be the 1547 Brugse Vrije testator. Confirms the name Josse was in use in Victor’s direct line in the mid-to-late 15th century.", src: "FMG MedLands [849]; Bethune (1900) p.356", color: C.victor, ev: "direct", w: 158, h: 50 } },
    { id: "marg", x: 196, y: 372, cfg: { name: "Margareta van Vlaenderen", dates: "fl. 1478–1486", body: "Daughter of Lodewyc. Married firstly Lodewijk van Baenst Heer van Santvelde; secondly Adriaan van Schouteten Heer van Erpe. Documented in charters 1478 and 1486.", src: "FMG MedLands [850]; Vredius (1643) p.287", color: C.victor, ev: "direct", w: 162, h: 50 } },
    { id: "gap", x: 660, y: 376, cfg: { name: "EVIDENTIARY GAP", dates: "c.1447 – 1547  (~100 years)", body: "No documented generational link found. Archival targets: cijnsboeken and leenboeken (Ambacht Ursel / Maldegem), Staten van Goed, Raad van Vlaanderen (Rijksarchief Gent).", src: "Research hypothesis", color: C.red, ev: "hypo", w: 185, h: 50 } },
    { id: "joos", x: 660, y: 462, cfg: { name: "Joos van Vlaenderen", dates: "fl. 1547", body: "Testator, Brugse Vrije 1548. First confirmed early modern bearer. Chronologically consistent with Adam’s descent but no direct link demonstrated.", src: "Staten van Goed, Brugse Vrije 1548 (TBO 184, bundle 21300)", color: C.blue, ev: "parish", w: 185, h: 50 } }
  ],
  connections: [
    { from: "lm", to: "vic", color: C.victor },
    { from: "vic", to: "lod", color: C.victor },
    { from: "vic", to: "jan_s", color: C.victor },
    { from: "vic", to: "adam", color: C.focus },
    { from: "lod", to: "josse_l", color: C.victor },
    { from: "lod", to: "marg", color: C.victor },
    { from: "adam", to: "gap", color: C.red, dashed: true },
    { from: "gap", to: "joos", color: C.blue, dashed: true }
  ],
  legendItems: [
    { color: "#4ade80", label: "Directly attested (charter)" },
    { color: C.focus, label: "Research focus — bridge candidate" },
    { color: "#f87171", label: "Evidentiary gap (c.1447–1547)" },
    { color: C.blue, label: "Early modern — parish records" }
  ]
};
function VictorDiagram() {
  return /* @__PURE__ */ jsx(
    LineageDiagram,
    {
      diagram: diagram$1,
      title: "Victor van Vlaenderen — Documented Line and Evidentiary Gap",
      subtitle: "Victor van Vlaenderen Page"
    }
  );
}
const ROW_Y = 370;
const NODE_W = 180;
const GAP = 25;
const START_X = 40;
const X1 = START_X;
const X2 = X1 + NODE_W + GAP;
const X3 = X2 + NODE_W + GAP;
const X4 = X3 + NODE_W + GAP;
const X5 = X4 + NODE_W + GAP;
const diagram = {
  viewBox: "0 0 1100 1000",
  nodes: [
    {
      id: "lm",
      x: X3,
      y: 18,
      cfg: {
        name: "Louis II de Male",
        dates: "Count of Flanders · 1330–1384",
        body: "In 1373 purchased the leengoed of Praet in Oedelem from the van Praet family, then granted it to his natural son Louis Friese.",
        src: "FMG MedLands [817]; Lauwens (2010)",
        color: C.root,
        ev: "direct",
        w: 200,
        h: 65
      }
    },
    {
      id: "fri",
      x: X3 - 5,
      y: 125,
      cfg: {
        name: "Louis Friese van Vlaenderen",
        dates: "c.1350 – 28 Sep 1396",
        tag: "LORD OF PRAET & WOESTINE",
        body: "Natural son of Louis de Male by a daughter of Monsieur de Borre. Praet granted c.1373. Married (2nd) Marie van Gistel. Killed at Nicopolis.",
        src: "FMG MedLands [864–869]; Vredius (1643); Espinoy (1631)",
        color: C.praet,
        ev: "direct",
        w: 210,
        h: 84
      }
    },
    {
      id: "j1",
      x: X3,
      y: 250,
      cfg: {
        name: "Johan I van Vlaenderen",
        dates: "d. after 10 Sep 1439",
        tag: "LORD OF PRAET",
        body: "Son of Louis Friese. Issued own charter as Lord of Praet 10 Sep 1439. Married Johanna van Reygersvliet. Had seven documented children.",
        src: "FMG MedLands [872,873,875]",
        color: C.praet,
        ev: "direct",
        w: 200,
        h: 82
      }
    },
    // ── The Sibling Row (Generation 3) ───────────────────────────────────
    {
      id: "jean",
      x: X1,
      y: ROW_Y,
      cfg: {
        name: "Jean de Flandre",
        dates: "d. 6 Sep 1523",
        body: "Son of Johan I. Heer van Onlede en Beveren. Grand Bailiff of Bruges. Married Marguerite Boulengier.",
        src: "FMG MedLands [879,880]",
        color: C.blue,
        ev: "direct",
        w: NODE_W,
        h: 60
      }
    },
    {
      id: "josse",
      x: X2,
      y: ROW_Y,
      cfg: {
        name: "Josse de Flandre",
        dates: "d. after 1526",
        tag: "LINE TO 1592",
        body: "Son of Johan I. Inherited lordships of Onlede, Bevere and Wijchuize 1523. Married Martina van Moerkerke. Multiple children; family survived to at least 1592.",
        src: "FMG MedLands [881,882]; Buylaert",
        color: C.blue,
        ev: "direct",
        w: NODE_W,
        h: 74
      }
    },
    {
      id: "l2",
      x: X3,
      y: ROW_Y,
      cfg: {
        name: "Lodewijk II van Vlaenderen",
        dates: "d. 24 Aug 1488",
        tag: "LORD OF PRAET, WOESTINE, BEVERE",
        body: "Son of Johan I. Married Louise de Bruges, daughter of Jan van de Aa Heer van Gruuthuse. Death confirmed by epitaph at Aeltere.",
        src: "FMG MedLands [876,878]; Bethune (1900)",
        color: C.praet,
        ev: "direct",
        w: 200,
        h: 82
      }
    },
    {
      id: "jeanne",
      x: X4,
      y: ROW_Y,
      cfg: {
        name: "Jeanne de Flandre",
        dates: "d. after 1446",
        body: "Daughter of Johan I. Married Jean Seigneur de Poucques, Vicomte d'Ypres. Documented in charter 24 Jan 1441 and document 1446.",
        src: "FMG MedLands [883–885]",
        color: C.blue,
        ev: "direct",
        w: NODE_W,
        h: 60
      }
    },
    {
      id: "oth",
      x: X5,
      y: ROW_Y,
      cfg: {
        name: "Marguerite · Isabelle\nLandrade de Flandre",
        dates: "fl. c.1440s–60s",
        body: "Three further daughters of Johan I. Marguerite married Louis de Bailleul; Isabelle married Waleran de Landas; Landrade became Canoness at Mons Sainte-Waudru.",
        src: "FMG MedLands [886,887,888]; Vredius (1643)",
        color: C.blue,
        ev: "strong",
        w: NODE_W,
        h: 72
      }
    },
    // ── Continuation of Main Line ────────────────────────────────────────
    {
      id: "l3",
      x: X3,
      y: 510,
      cfg: {
        name: "Lodewijk III van Vlaenderen",
        dates: "d. 1 Jan 1490",
        tag: "LORD OF PRAET",
        body: "Son of Lodewijk II. Married Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent). Death 1 January 1490 confirmed by epitaph at Aeltere.",
        src: "FMG MedLands [889,890]; Bethune (1900)",
        color: C.praet,
        ev: "direct",
        w: 200,
        h: 82
      }
    },
    {
      id: "l4",
      x: X3 - 6,
      y: 630,
      cfg: {
        name: "Lodewijk IV van Vlaenderen",
        dates: "d. 1555",
        tag: "KNIGHT OF THE GOLDEN FLEECE 1531",
        body: "Grand Bailiff of Ghent and Bruges. Stadtholder Holland & Zeeland 1544–46. Advisor to Charles V. 1517 charter: holds 6 fiefs at Knesselare from the Wessegem seigneurie — direct Meetjesland territorial connection.",
        src: "FMG MedLands [891–893]; Wikipedia",
        color: C.focus,
        ev: "focus",
        focus: true,
        w: 212,
        h: 88
      }
    },
    {
      id: "j2",
      x: X3,
      y: 760,
      cfg: {
        name: "Jan II van Vlaenderen",
        dates: "d. 10 Dec 1545",
        tag: "LEGITIMATE LINE ENDS",
        body: "Only son of Lodewijk IV. Predeceased father without issue. Widow Jacqueline de Bourgogne remarried and died in childbirth 1556.",
        src: "FMG MedLands [894,895]; epitaph Aeltere",
        color: C.red,
        ev: "ends",
        w: 200,
        h: 76
      }
    }
  ],
  connections: [
    { from: "lm", to: "fri", color: C.praet },
    { from: "fri", to: "j1", color: C.praet },
    // Johan I to all siblings in the row
    { from: "j1", to: "jean", color: C.blue },
    { from: "j1", to: "josse", color: C.blue },
    { from: "j1", to: "l2", color: C.praet },
    { from: "j1", to: "jeanne", color: C.blue },
    { from: "j1", to: "oth", color: C.blue },
    // Descent from Lodewijk II
    { from: "l2", to: "l3", color: C.praet },
    { from: "l3", to: "l4", color: C.praet },
    { from: "l4", to: "j2", color: C.red }
  ],
  labels: [
    { x: X3, y: 350, text: "CHILDREN OF JOHAN I (SIBLINGS)", color: "#f0e8d0" }
  ],
  annotations: [
    { x: X3 + 220, y: 680, text: "← 1517: 6 fiefs at Knesselare (Meetjesland)", color: C.focus }
  ],
  legendItems: [
    { color: "#4ade80", label: "Directly attested (charter or epitaph)" },
    { color: "#fbbf24", label: "Strongly corroborated" },
    { color: C.blue, label: "Documented cadet branch" },
    { color: "#f87171", label: "Legitimate line ends" }
  ]
};
function PraetDiagram() {
  return /* @__PURE__ */ jsx(
    LineageDiagram,
    {
      diagram,
      title: "The House of Flanders-Praet — Six Generations",
      subtitle: "Louis Friese / Praet Line"
    }
  );
}
const ResearchMap = lazy(() => import("./assets/ResearchMap-DF8B_k4w.js"));
function ResearchPage() {
  const { goToResearch } = useNav();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Research Overview — Van Vlaenderen Archival Dossiers | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Overview of Van Vlaenderen archival research: the Victor line (Lord of Wessegem) and the Louis Friese / Praet line, both descending from Louis II de Male, Count of Flanders." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Research Overview — Van Vlaenderen Archival Dossiers" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Two surname-bearing bastard lines of Louis II de Male: Victor van Vlaenderen and Louis Friese van Vlaenderen." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("research.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("research.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsxs("p", { className: styles$1.heroLead, children: [
          "Louis II de Male, Count of Flanders (1330–1384), fathered at least thirteen illegitimate children. Two of his natural sons founded surname-bearing lines that used ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " as a hereditary identifier: Victor van Vlaenderen and Louis Friese van Vlaenderen."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: t("research.dossier_title") }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Two Surname-Bearing Lines" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The research is structured around two documented lines descending from Louis de Male. Both lines used ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " (and its variants: van Vlaendren, de Flandre, de Flandres) as a hereditary surname — not a geographic descriptor, but a marker of comital illegitimate descent that crystallised at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "There is a further dimension worth noting. Louis II de Male was the last Count of Flanders from the House of Dampierre. On his death in 1384, the county passed to his daughter Margaret and her husband Philip the Bold of Burgundy, and the Dampierre hold on Flanders ended permanently. The evidence suggests that ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " crystallised as a heritable surname among Louis's bastard children at precisely this moment — not as a geographic descriptor meaning ‘from Flanders,’ but as an inherited identity marking comital blood at the point when the title itself was extinguished. This pattern is documented independently in both Victor's line and the Praet line, and it is one of the strongest arguments that the surname functions as inherited comital identity rather than as a common toponym. It also narrows the field: families adopting ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " as a geographic descriptor after 1384 would have had diminishing reason to do so, since Flanders was no longer ruled by a Flemish count. Bearers of the name after that date are more plausibly connected to the bastard comital network than to generic toponymy."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: researchStyles.treeContainer, children: [
        /* @__PURE__ */ jsx(OverviewDiagram, {}),
        /* @__PURE__ */ jsxs("div", { className: "sr-only", children: [
          /* @__PURE__ */ jsx("h3", { children: "Research overview diagram — text summary" }),
          /* @__PURE__ */ jsx("p", { children: "This diagram presents both surname-bearing bastard lines descending from Louis II de Male, Count of Flanders (1330–1384), the last Count from the House of Dampierre. Left branch (Victor's line): Victor van Vlaenderen (died before 1442), Lord of Ursel and Wessegem, had three documented natural sons — Lodewyc, Janne, and Adam van Vlaendren — all named in primary charters 1427–1447. Adam van Vlaendren (research focus, fl. 1427 – 1447) is the primary bridge candidate to the early modern parish-record Van Vlaenderens of the Meetjesland. A ~100-year evidentiary gap separates Adam from Joos van Vlaenderen (fl. 1547), the first confirmed early modern bearer. Right branch (Praet line): Louis Friese van Vlaenderen (c.1350 – 1396), Lord of Praet and Woestine, founded the House of Flanders-Praet through his son Johan I van Vlaenderen. The line descends through multiple generations to Lodewijk IV van Vlaenderen (died 1555), Knight of the Golden Fleece, whose 1517 charter shows him holding six fiefs at Knesselare from the Wessegem seigneurie — a direct Meetjesland territorial connection. The legitimate Praet male line ended with Jan II van Vlaenderen (died 10 December 1545), who predeceased his father without issue." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, children: /* @__PURE__ */ jsx("h2", { children: "Research Branches" }) }),
      /* @__PURE__ */ jsxs("div", { className: researchStyles.branchCards, children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: researchStyles.branchCard,
            role: "button",
            tabIndex: 0,
            style: { cursor: "pointer" },
            onClick: () => goToResearch("victor"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToResearch("victor");
              }
            },
            "aria-label": "Victor van Vlaenderen",
            children: [
              /* @__PURE__ */ jsx("h3", { children: "Victor van Vlaenderen" }),
              /* @__PURE__ */ jsx("p", { children: "Natural son of Louis de Male. Lord of Ursel and Wessegem. Three natural sons documented across three primary charters (1427, 1441, 1446). Adam van Vlaendren (fl. 1427 – 18 Mar 1447 N.S.) is the last confirmed 15th-century bearer and the primary research focus for bridging the evidentiary gap to the early modern parish records." }),
              /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Explore Victor's Line →" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: researchStyles.branchCard,
            role: "button",
            tabIndex: 0,
            style: { cursor: "pointer" },
            onClick: () => goToResearch("louis-friese"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToResearch("louis-friese");
              }
            },
            "aria-label": "Louis Friese van Vlaenderen",
            children: [
              /* @__PURE__ */ jsx("h3", { children: "Louis Friese van Vlaenderen" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Natural son of Louis de Male. Lord of Praet and Woestine. Killed at Nicopolis 1396. Founded the House of Flanders-Praet — six generations using ",
                /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
                " as a hereditary surname. The legitimate male line ended with the death of Lodewijk IV in 1556. Whether the surname continued through cadet or illegitimate branches into the commoner population remains an open research question."
              ] }),
              /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Explore the Praet Line →" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Reference" }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.branchCards, children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              tabIndex: 0,
              style: { cursor: "pointer" },
              onClick: () => goToResearch("gap-dossier"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("gap-dossier");
                }
              },
              "aria-label": "The Documentary Gap",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "The Documentary Gap, 1447–1580" }),
                /* @__PURE__ */ jsx("p", { children: "The 130-year span between the last confirmed comital-line bearer and the first Meetjesland parish generation. Evidence in hand, searches completed, active archival targets, and three working hypotheses for how the gap closes." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Explore the Gap →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              tabIndex: 0,
              style: { cursor: "pointer" },
              onClick: () => goToResearch("methodology"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("methodology");
                }
              },
              "aria-label": "Methodology and Sources",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Methodology & Sources" }),
                /* @__PURE__ */ jsx("p", { children: "How archival documents are transcribed and translated, and the curated reading list of primary and secondary works that underpin the research." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Methodology & Sources →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              tabIndex: 0,
              style: { cursor: "pointer" },
              onClick: () => goToResearch("bibliography"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("bibliography");
                }
              },
              "aria-label": "Sources and Scholarship",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Sources & Scholarship" }),
                /* @__PURE__ */ jsx("p", { children: "Primary sources, archival finding aids, and scholarly literature cited in the dossiers — the evidentiary basis of the project in one place." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Sources & Scholarship →" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, style: { marginTop: "3rem" }, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: t("research.methodology_title") }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyGrid, children: [
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.methodLabel, children: t("research.method_attested_label") }),
            t("research.method_attested_text")
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.methodLabel, children: t("research.method_corroborated_label") }),
            t("research.method_corroborated_text")
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.methodLabel, children: t("research.method_probable_label") }),
            t("research.method_probable_text")
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.methodLabel, children: t("research.method_hypothesis_label") }),
            t("research.method_hypothesis_text")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { style: { height: "400px" } }), children: /* @__PURE__ */ jsx(ResearchMap, {}) }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, style: { marginTop: "3rem" }, children: [
        /* @__PURE__ */ jsx("h2", { children: "Archival Dossiers" }),
        /* @__PURE__ */ jsx("p", { children: "For researchers seeking the underlying documentary evidence, we maintain detailed archival dossiers with full charter transcriptions, epitaph data, and source analysis." }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.branchCards, children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
              onClick: () => goToResearch("victor-dossier"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("victor-dossier");
                }
              },
              "aria-label": "Victor van Vlaenderen Dossier",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Victor van Vlaenderen Dossier" }),
                /* @__PURE__ */ jsx("p", { children: "Three-charter nucleus (1427, 1441, 1446), Victor's 1430 testament, Lodewyc's descendants, and the Oostborch epitaph evidence." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Archival Evidence →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
              onClick: () => goToResearch("praet-dossier"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("praet-dossier");
                }
              },
              "aria-label": "Louis Friese Archival Dossier",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Louis Friese: Archival Dossier" }),
                /* @__PURE__ */ jsx("p", { children: "Primary source extracts and territorial history of the House of Flanders-Praet." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Archival Evidence →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
              onClick: () => goToResearch("praet-lineage-dossier"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("praet-lineage-dossier");
                }
              },
              "aria-label": "House of Praet Lineage Dossier",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "House of Praet: Lineage Dossier" }),
                /* @__PURE__ */ jsx("p", { children: "Six generations with primary-source confirmed data. Johan I's seven children, Josse de Flandre cadet branch, and the 1517 Knesselare charter." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Lineage Evidence →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
              onClick: () => goToResearch("drincham-dossier"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("drincham-dossier");
                }
              },
              "aria-label": "Jan sans terre van Vlaenderen Drincham Dossier",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Jan sans terre — Drincham Dossier" }),
                /* @__PURE__ */ jsx("p", { children: "The 1383 Drincham land grant, four documented generations in the Cassel area, the Veurne epitaph of Jacques de Drincham, and the geographic-documentary case for the French Flanders Van Vlaenderen cluster." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Archival Evidence →" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, style: { marginTop: "3rem" }, children: [
        /* @__PURE__ */ jsx("h2", { children: "Research Articles" }),
        /* @__PURE__ */ jsx("p", { children: "Analytical and contextual writing that sits alongside the archival evidence — distributional analysis, historical interpretation, and speculative threads with clearly marked evidentiary status." }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.branchCards, children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid rgba(232,184,48,0.45)", cursor: "pointer" },
              onClick: () => {
                navigate("/name/surname-origins");
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate("/name/surname-origins");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              },
              "aria-label": "Four Functions Three Clusters",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Four Functions, Three Clusters" }),
                /* @__PURE__ */ jsx("p", { children: "A primary source and distributional analysis of the Van Vlaenderen surname across four documentary functions and three geographic clusters spanning three centuries. Tests the toponymic and bastard-line hypotheses against Geneanet heat-map data and the onomastic record." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Read Analysis →" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: researchStyles.branchCard,
              role: "button",
              tabIndex: 0,
              style: { borderTop: "3px solid rgba(232,184,48,0.45)", cursor: "pointer" },
              onClick: () => goToResearch("nieus-seals"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToResearch("nieus-seals");
                }
              },
              "aria-label": "Seals Lions and the Politics of a Surname",
              children: [
                /* @__PURE__ */ jsx("h3", { children: "Seals, Lions, and the Politics of a Surname" }),
                /* @__PURE__ */ jsx("p", { children: "How twelfth-century Flemish noble seal culture — the lion, the Dover Recognitio, and the political weight of territorial identity — provides historical depth for the Van Vlaenderen hypothesis. Based on Nieus (2021)." }),
                /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "Read Article →" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("research.conclusion_title") }),
        /* @__PURE__ */ jsx("p", { children: t("research.conclusion_p1") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.ctaBox, onClick: () => goToResearch("contact"), style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("research.cta_text") }),
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("research.cta_note") })
      ] })
    ] })
  ] });
}
function VictorLineagePage() {
  const { goToResearch } = useNav();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Victor van Vlaenderen — Lord of Wessegem | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Victor van Vlaenderen: bastard son of Louis II de Male, Lord of Ursel and Wessegem, father of Lodewyc, Janne, and Adam van Vlaendren per the 1441/42 charter." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/victor" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Victor van Vlaenderen — Lord of Wessegem" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Bastard son of Louis II de Male. Father of Lodewyc, Janne, and Adam van Vlaendren — documented in the 1441 charter." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/victor" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("victor.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("victor.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Natural son of Louis II de Male, Count of Flanders. Lord of Ursel and Wessegem. Burgundian admiral; captain of Biervliet. Father of Lodewyc, Janne, and Adam van Vlaendren — documented across three primary charters (1427, 1441, 1446)." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: t("victor.dossier_title") }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Identity and Parentage ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II de Male, Count of Flanders (1330–1384). FMG MedLands lists him as illegitimate child 9 of Louis II, noting that Espinoy records his parentage [841]. His mother is identified in the 12 May 1427 charter as Mergriete Haelfhuuts (Heinricx Mayen…wijf). Victor is styled Seigneur d'Ursele et de Wesseghem and is documented as a Burgundian admiral and captain of Biervliet." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Territorial Setting: Wessegem and Ursel ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Flemish heritage inventory for the Hof van Wessegem states that by the end of the fourteenth century 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,' were lords of Wessegem, and that the property reverted to the comital domain in 1431. A local Ursel history states that in 1399 Wessegem passed to Victor van Vlaanderen, 'another bastard son of Louis van Male,' and that he often resided there. The lordship sits in the heart of the Meetjesland — the same region where the later parish-record Van Vlaenderens cluster." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The Three-Charter Nucleus ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Three charters from the Ghent partition court records, preserved in Vredius (1643) via FMG MedLands, form the documentary nucleus of Victor's line. Together they span twenty years (1427–1447) and name all three of Victor's acknowledged natural sons." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Charter 1 (12 May 1427):" }),
          " Mergriete Haelfhuuts, Victor's mother, donates property to 'Lodekinen ende Hannekinen' (Lodewyc and Janne), Victor's natural sons by Alix van Boyeghem, and to 'Adaemkine' (Adam), his natural son by Gertrud Lindekens [FMG 846,853]."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Charter 2 (10 March 1441 O.S. = 1442 N.S.):" }),
          " Mergriete donates to 'Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen…mer Victor van Vlaendren heere was van Desele ende van Wesseghem.' Victor is now described as deceased ('wijlen') [FMG 847,852,854]."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Charter 3 (18 March 1446 O.S. = 1447 N.S.):" }),
          " 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem' donates money from 'joncfr Margriete Aelhuuts zijn groete vrauwe' to Christiane van Rouse. Adam is the active donor — the only charter where he acts independently [FMG 855]."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: researchStyles.treeContainer, children: [
        /* @__PURE__ */ jsx(VictorDiagram, {}),
        /* @__PURE__ */ jsxs("div", { className: "sr-only", children: [
          /* @__PURE__ */ jsx("h3", { children: "Victor van Vlaenderen lineage — text summary" }),
          /* @__PURE__ */ jsx("p", { children: "This diagram shows the descent from Louis II de Male, Count of Flanders (1330–1384), through his natural son Victor van Vlaenderen (died before 1442), Lord of Ursel and Wessegem. Victor had three documented natural sons by Alix van Boyeghem: Lodewyc van Vlaendren (fl. 1427–1442), Janne van Vlaendren (fl. 1427–1442), and Adam van Vlaendren (fl. 1427 – 18 March 1447), the primary research focus and bridge candidate. Lodewyc married Jacqueline de Wilde and had two children: Josse van Vlaenderen (died young, buried Oostborch) and Margareta van Vlaenderen (fl. 1478–1486, married into noble families). An evidentiary gap of approximately 100 years separates Adam (last confirmed 1447) from Joos van Vlaenderen (fl. 1547), the first confirmed early modern bearer as testator in the Brugse Vrije probate records (TBO 184, bundle 21300). No direct genealogical link between Adam and Joos has yet been demonstrated. Key archival targets for bridging this gap: cijnsboeken and leenboeken (Ambacht Ursel / Maldegem), Staten van Goed, and Raad van Vlaanderen records at Rijksarchief Gent." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Adam van Vlaendren (fl. 1427 – 18 Mar 1447 N.S.) ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Adam is named in all three charters but is only the active donor in the third (1446/1447). His corrected date range — fl. 1427 to 18 March 1447 N.S. — extends his documented life five years beyond the previous terminus of 1442. He is the last confirmed 15th-century bearer of the van Vlaendren surname in Victor's line." }),
        /* @__PURE__ */ jsx("p", { children: "The 1446 charter is significant because Adam explicitly identifies Victor as 'Rudder, Heer van Orsele en van Wesseghem' — Knight, Lord of Ursel and Wessegem — and because Margriete Aelfhuuts is still active as his patroness four years after the previous donation." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Lodewyc's Descendants ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Lodewyc van Vlaenderen married Jacqueline de Wilde (-Apr 1482, bur Oostborch). An epitaph at Oostborch records the burial of Jacqueline and nearby 'haer Joos van Vlaenderen fs Lodewijcx' [FMG 848,849]. Josse died young and cannot be the 1547 Brugse Vrije testator — but his existence confirms the name Josse/Joos was in active use in Victor's direct line." }),
        /* @__PURE__ */ jsx("p", { children: "Lodewyc's daughter Margareta van Vlaenderen (fl. 1478–1486) married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe [FMG 850]." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Bridging the Gap: Adam to Joos ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: t("victor.gap_p1") }),
        /* @__PURE__ */ jsx("p", { children: "Adam is documented across three charters spanning 1427–1447, but he is only the active donor in the 1446/1447 charter. In the earlier two charters he is named as a beneficiary of his grandmother's donations. The gap between Adam (last confirmed 1447) and Joos van Vlaenderen (testator, Brugse Vrije 1547) spans approximately 100 years — three to four generations." }),
        /* @__PURE__ */ jsx("p", { children: t("victor.gap_p3") }),
        /* @__PURE__ */ jsx("p", { children: t("victor.gap_p4") }),
        /* @__PURE__ */ jsx("p", { children: t("victor.gap_p5") }),
        /* @__PURE__ */ jsx("p", { children: t("victor.gap_p6") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Naval and Military Activity ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: t("victor.military_p1") })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, style: { marginTop: "3rem", borderTop: "1px solid rgba(232, 184, 48, 0.2)", paddingTop: "2rem" }, children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: researchStyles.branchCard,
          role: "button",
          tabIndex: 0,
          style: { borderTop: "3px solid var(--gold)", maxWidth: "100%", cursor: "pointer" },
          onClick: () => goToResearch("victor-dossier"),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              goToResearch("victor-dossier");
            }
          },
          "aria-label": "Victor van Vlaenderen: Archival Dossier",
          children: [
            /* @__PURE__ */ jsx("h3", { children: "Victor van Vlaenderen: Archival Dossier" }),
            /* @__PURE__ */ jsx("p", { children: "Full charter transcriptions, chronology table, and detailed source analysis. Includes Victor's 1430 testament, all three charter texts, Lodewyc's descendants, and the Oostborch epitaph evidence." }),
            /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Archival Evidence →" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: styles$1.pullQuote, children: /* @__PURE__ */ jsxs("blockquote", { children: [
        '"',
        t("victor.pull_quote"),
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h3", { children: t("victor.sources_title") }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          "FMG MedLands: Flanders, Hainaut. v5.0, January 2025. Victor entry [841–855]. Source for all three charters: Vredius (1643) ",
          /* @__PURE__ */ jsx("em", { children: "Pars secunda" }),
          ", pp.285–287.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          "Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Inventaris Onroerend Erfgoed, Erfgoedobject 33384" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          "Bethune, J.B. de. ",
          /* @__PURE__ */ jsx("em", { children: "Epitaphes et monuments des eglises de la Flandre." }),
          " Third part. 1900. p.356. Oostborch epitaph for Jacqueline de Wilde and Josse van Vlaenderen [FMG 848–849]."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          "Degryse, R. Willem Beukel(s) van Hughevliet. ",
          /* @__PURE__ */ jsx("em", { children: "De Vlaamse Gids" }),
          " 38 (1954).",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "DBNL, Vlaamse Stam (1954)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          "Tailler, Margaux. ",
          /* @__PURE__ */ jsx("em", { children: "Corvers en zeeschuimers van den Vlaemsche zeecoste: Kaapvaart en piraterij onder Jan zonder Vrees." }),
          " MA thesis, Ghent University, 2011. Supervised by Jan Dumolyn.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Ghent University Library, Thesis RUG01-001786522 (2012)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.ctaBox, onClick: () => goToResearch("contact"), style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("victor.cta_text") }),
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("victor.cta_note") })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(232, 184, 48, 0.2)" }, children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToResearch("main"),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--gold)",
            fontSize: "16px",
            textDecoration: "underline",
            fontFamily: "var(--font-ui)",
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          },
          children: t("victor.back_button")
        }
      ) })
    ] })
  ] });
}
function LouisFrieseLineagePage() {
  const { goToResearch } = useNav();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Louis Friese van Vlaenderen — The Praet Line | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Louis Friese van Vlaenderen, Lord of Praet and Woestine: the second bastard line of Louis II de Male using the Van Vlaenderen surname. Ancestor of Lodewijk IV (Louis of Praet)." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/louis-friese" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Louis Friese van Vlaenderen — The Praet Line" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "The Praet bastard line: Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece — extinct 1556." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/louis-friese" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("louis_friese.hero_eyebrow") }),
        /* @__PURE__ */ jsx("h1", { children: t("louis_friese.hero_title") }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Natural son of Louis II de Male, Count of Flanders. Lord of Praet and Woestine. Killed at the Battle of Nicopolis, 28 September 1396. Founder of the House of Flanders-Praet — six generations using van Vlaenderen as a hereditary surname." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: t("louis_friese.dossier_title") }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          t("louis_friese.praet_title"),
          " ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p2") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p3") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p4") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p5") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.praet_p6") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: researchStyles.treeContainer, children: [
        /* @__PURE__ */ jsx(PraetDiagram, {}),
        /* @__PURE__ */ jsxs("div", { className: "sr-only", children: [
          /* @__PURE__ */ jsx("h3", { children: "Praet line lineage — text summary" }),
          /* @__PURE__ */ jsx("p", { children: "This diagram shows the descent from Louis II de Male, Count of Flanders (1330–1384), through his natural son Louis Friese van Vlaenderen (c.1350 – 28 September 1396), Lord of Praet and Woestine, killed at Nicopolis. Louis Friese's son Johan I van Vlaenderen (died after 10 September 1439), Lord of Praet, had seven documented children: Jean de Flandre (died 6 September 1523, Grand Bailiff of Bruges); Josse de Flandre (died after 1526, line survived to at least 1592); Lodewijk II van Vlaenderen (died 24 August 1488, Lord of Praet); Jeanne de Flandre (died after 1446); and three further daughters Marguerite, Isabelle, and Landrade. Lodewijk II's son was Lodewijk III van Vlaenderen (died 1 January 1490), whose son was Lodewijk IV van Vlaenderen (died 1555), Knight of the Golden Fleece (1531), Grand Bailiff of Ghent and Bruges, Stadtholder of Holland and Zeeland, and advisor to Charles V. Lodewijk IV's only son Jan II van Vlaenderen (died 10 December 1545) predeceased his father without issue, ending the legitimate Praet male line. The Praet line functions as a documented research control: men styled van Vlaenderen in 16th-century records cannot be assigned to Victor's descendants without first eliminating a possible Praet connection." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Johan I's Seven Documented Children ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Johan I van Vlaenderen (d. after 10 Sep 1439), lord of Praet and Woestine, issued his own charter as lord of Praet on 10 September 1439 [FMG 873]. He married Johanna van Reygersvliet [875]. Seven children are documented from primary sources:" }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: "1rem", fontSize: "0.88rem" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "2px solid var(--gold)", textAlign: "left" }, children: [
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Name" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Dates" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Notes" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Source" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Lodewijk II" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "d. 24 Aug 1488" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Lord of Praet; married Louise de Bruges" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Epitaph [876]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Jean de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "d. 6 Sep 1523" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Heer van Onlede; Grand Bailiff of Bruges" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Epitaph [879]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Josse de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "d. after 1526" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Inherited Onlede, Bevere, Wijchuize; married Martina van Moerkerke; line survived to 1592" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Buylaert [881,882]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Jeanne de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "d. after 1446" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Married Jean Seigneur de Poucques, Vicomte d'Ypres" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Charter [884,885]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Marguerite de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "fl. c.1440s" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Married Louis de Bailleul" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Vredius MS [886]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Isabelle de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "fl. c.1440s" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Married Waleran de Landas" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Vredius MS [887]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Landrade de Flandre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "fl. c.1460s" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Canoness at Mons Sainte-Waudru" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: "Vredius MS [888]" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The 1517 Knesselare Charter ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "A charter [FMG 891] records Lodewijk IV van Vlaenderen holding six fiefs at Knesselare from the seigneurie of Wessegem in 1517. Knesselare is one of the parishes in the active research coverage, and it sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen cluster in the Meetjesland." }),
        /* @__PURE__ */ jsx("p", { children: "This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderens who later appear in Knesselare parish records. But it confirms that the Praet branch had territorial interests in the precise geographic area where the later parish-record bearers lived — which is relevant to the branch-control problem identified in the research design." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          t("louis_friese.survival_title"),
          " ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: t("louis_friese.badge_hypothesis") })
        ] }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.survival_p1") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.survival_p2") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("louis_friese.figures_title") }),
        /* @__PURE__ */ jsx("p", { children: t("louis_friese.figures_intro") }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: t("louis_friese.figure_1") }),
          /* @__PURE__ */ jsx("li", { children: t("louis_friese.figure_2") }),
          /* @__PURE__ */ jsx("li", { children: t("louis_friese.figure_3") }),
          /* @__PURE__ */ jsx("li", { children: t("louis_friese.figure_4") }),
          /* @__PURE__ */ jsx("li", { children: t("louis_friese.figure_5") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, style: { marginTop: "3rem", borderTop: "1px solid rgba(232, 184, 48, 0.2)", paddingTop: "2rem" }, children: /* @__PURE__ */ jsxs("div", { className: researchStyles.branchCards, children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: researchStyles.branchCard,
            role: "button",
            tabIndex: 0,
            style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
            onClick: () => goToResearch("praet-dossier"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToResearch("praet-dossier");
              }
            },
            "aria-label": "Louis Friese: Archival Dossier",
            children: [
              /* @__PURE__ */ jsx("h3", { children: "Louis Friese: Archival Dossier" }),
              /* @__PURE__ */ jsx("p", { children: "Primary source extracts, territorial history, and the surname van Vlaenderen as comital identity." }),
              /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Archival Evidence →" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: researchStyles.branchCard,
            role: "button",
            tabIndex: 0,
            style: { borderTop: "3px solid var(--gold)", cursor: "pointer" },
            onClick: () => goToResearch("praet-lineage-dossier"),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToResearch("praet-lineage-dossier");
              }
            },
            "aria-label": "House of Praet: Lineage Dossier",
            children: [
              /* @__PURE__ */ jsx("h3", { children: "House of Praet: Lineage Dossier" }),
              /* @__PURE__ */ jsx("p", { children: "Six generations with primary-source confirmed data. Includes Johan I's seven children, Josse de Flandre cadet branch, and the 1517 Knesselare charter." }),
              /* @__PURE__ */ jsx("span", { className: researchStyles.branchLink, "aria-hidden": "true", children: "View Lineage Evidence →" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h3", { children: t("louis_friese.sources_title") }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          t("louis_friese.source_1"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          t("louis_friese.source_2"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLEMISH%20NOBILITY.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flemish Nobility" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          t("louis_friese.source_3"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://wappenwiki.org/index.php/House_of_Flanders-Praet", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Wappenwiki, House of Flanders-Praet" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          t("louis_friese.source_4"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.genealogieonline.nl/west-europese-adel/I75515.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "GenealogieOnline, West-Europese Adel: Louis le Friese" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          t("louis_friese.source_5"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.genealogieonline.nl/en/west-europese-adel/I194314.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "GenealogieOnline, West-Europese Adel: Johan I van Vlaanderen" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "6." }),
          t("louis_friese.source_6"),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.dbnl.org/tekst/eras001corr10_01/eras001corr10_01_0112.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "DBNL, Erasmus Correspondentie, Vol. 10" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "7." }),
          "Buylaert, Frederik. Published genealogical and prosopographical research on Flemish nobility. Cited via FMG MedLands [881,882] for Josse de Flandre."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.ctaBox, onClick: () => goToResearch("contact"), style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("louis_friese.cta_text") }),
        /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("louis_friese.cta_note") })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(232, 184, 48, 0.2)" }, children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToResearch("main"),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--gold)",
            fontSize: "16px",
            textDecoration: "underline",
            fontFamily: "var(--font-ui)",
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          },
          children: t("louis_friese.back_button")
        }
      ) })
    ] })
  ] });
}
function VictorDossierPage() {
  const { goToResearch } = useNav();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Victor van Vlaenderen — Archival Dossier | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence, FMG MedLands documentation, Hof van Wessegem heritage record, and the Alix van Boyeghem connection." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/victor-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Victor van Vlaenderen — Archival Dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Primary source evidence: the 1427 and 1441/42 charters, Wessegem heritage, and Victor's three natural sons." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/victor-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Victor van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence, FMG MedLands documentation, Hof van Wessegem heritage record, and the Alix van Boyeghem connection.","url":"https://vanvlaenderen.org/research/victor-dossier","inLanguage":"en","dateModified":"2026-04-11","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Victor van Vlaenderen","item":"https://vanvlaenderen.org/research/victor"},{"@type":"ListItem","position":4,"name":"Archival Dossier","item":"https://vanvlaenderen.org/research/victor-dossier"}]}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Archival Evidence" }),
        /* @__PURE__ */ jsx("h1", { children: "Victor van Vlaenderen" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Bastard son of Louis II de Male, Count of Flanders; lord of Wessegem in Ursel; attested father of Lodewyc, Janne, and Adam van Vlaendren. Updated April 2026 with FMG MedLands primary charter data." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Archival Dossier" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: "Method" }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", marginBottom: "1rem", color: "var(--text-muted)" }, children: [
          "This dossier follows a four-level evidentiary framework. ",
          /* @__PURE__ */ jsx("strong", { children: "Directly attested" }),
          " statements rest on quoted charter language or explicit documentary summaries in a published authority. ",
          /* @__PURE__ */ jsx("strong", { children: "Strongly corroborated" }),
          " statements are supported by concordant published sources. ",
          /* @__PURE__ */ jsx("strong", { children: "Probable" }),
          " statements are source-based but require fuller inspection of underlying editions. ",
          /* @__PURE__ */ jsx("strong", { children: "Hypotheses" }),
          " are genealogical inferences proposed for further testing."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyGrid, children: [
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Directly Attested" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Quoted charter language or explicit documentary summary." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Strongly Corroborated" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Supported by concordant published historical authorities." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Probable" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Source-based but require fuller inspection of underlying edition." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Hypothesis" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Genealogical inferences proposed for further testing." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", marginTop: "1.5rem", fontStyle: "italic", color: "var(--text-muted)", borderTop: "1px solid rgba(232, 184, 48, 0.1)", paddingTop: "1rem" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Note:" }),
          " FMG footnote numbers in square brackets refer to the Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut document (v5.0, January 2025)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Identity and Parentage ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II de Male, Count of Flanders. FMG MedLands lists him as illegitimate child 9 of Louis II, noting that Espinoy records his parentage (no source cited) [841], and that his mother is named in her 12 May 1427 charter. He is identified as Seigneur d'Ursele et de Wesseghem and as a Burgundian admiral." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Territorial Setting: Wessegem and Ursel ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Flemish heritage inventory for the Hof van Wessegem states that by the end of the fourteenth century 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,' were lords of Wessegem, and that the property reverted to the comital domain in 1431." }),
        /* @__PURE__ */ jsx("p", { children: "A local Ursel history states that in 1399 Wessegem passed to Victor van Vlaanderen, 'another bastard son of Louis van Male,' and that he often resided there." }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }, children: "Note on spelling: the FMG 1441 charter text consistently renders the lordship as 'Desele ende van Wesseghem' — Desele rather than Ursele. Both forms refer to the same location. Ursele is the parish; Desele / Wessegem is the specific seigneurie within it." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Victor's Testament (1430) ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The testament of 'her Victor van Vlaendren', dated 1430, named executors 'mher Robert van Vlaendren heere van Elverdinghe, Vlamertinghe, Burggrave van Ypre en Karle van Vlaendren beede sijn broeders.' This is summarised in FMG MedLands from Vredius (1643) ",
          /* @__PURE__ */ jsx("em", { children: "Pars secunda" }),
          " p.285, citing the Vander Strate manuscript. It confirms Victor was alive in 1430 and had at least two brothers — Robert [Roeland] and Karel van Vlaenderen."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Direct Charter Nucleus ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "1.5rem" }, children: "Charter 1: 12 May 1427" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "FMG MedLands [846] summarises a charter from Vredius (1643), ",
          /* @__PURE__ */ jsx("em", { children: "Pars secunda" }),
          " p.285, citing the Ghent partition court records (",
          /* @__PURE__ */ jsx("em", { children: "In actis curiae partitionum Gandensium, Ex regist. part." }),
          " f.56): 'Joncfr. Mergriete Haelfhuuts Heinricx Mayen...wijf, moeder van Mer Victoere van Vlaenderen' donated property to 'Lodekinen ende Hannekinen mher Victoers hears soens naturlicke kinderen die by heeft by Alyssen van Boyeghem' and 'Adaemkine svoorsz mer Victoers natuerlick zone die hy heeft by Gertruden Liendekins.'"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This charter directly attests: (1) Mergriete Haelfhuuts as Victor's mother; (2) Lodewyc and Janne as Victor's natural sons by Alix van Boyeghem; (3) Adam as Victor's natural son by Gertrud Lindekens; (4) the distinction between the two mothers." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "2rem" }, children: "Charter 2: 10 March 1441 O.S. (= 10 March 1442 N.S.)" }),
        /* @__PURE__ */ jsx("p", { children: "FMG MedLands [847,852,854] summarises a charter from Vredius (1643) citing the same Ghent partition records: 'Joncfr. Mergriete Aelfhuuts Heindricx Maye...wijf' donated property to 'Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen...mer Victor van Vlaendren heere was van Desele ende van Wesseghem...zone was vande voorz Joncf. Mergriete.'" }),
        /* @__PURE__ */ jsx("p", { children: "This charter directly attests: (1) all three sons named together; (2) Victor described as deceased ('wijlen'); (3) the lordship spelled 'Desele ende van Wesseghem'; (4) Mergriete as Victor's mother." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "2rem" }, children: "Charter 3: 18 March 1446 O.S. (= 18 March 1447 N.S.)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "FMG MedLands [855] summarises a charter from Vredius (1643), ",
          /* @__PURE__ */ jsx("em", { children: "Pars secunda" }),
          " pp.286–7: 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem' donated money from 'joncfr Margriete Aelhuuts zijn groete vrauwe' to 'Christiane van Rouse fil Gheerarts.'"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This charter directly attests: (1) Adam is alive as late as 18 March 1447 N.S. — his death terminus, previously set at 1442, is now extended five years; (2) Adam explicitly names Victor as 'Rudder, Heer van Orsele en van Wesseghem' — Knight, Lord of Ursel and Wessegem; (3) Margriete Aelfhuuts remains Adam's active patroness in 1446, four years after the previous donation; (4) the lordship now spelled 'Orsele' — confirming Ursel and Wessegem as a paired designation." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Chronology ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: "1rem", fontSize: "0.9rem" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "2px solid var(--gold)", textAlign: "left" }, children: [
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Person" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Event" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Date" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Source" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Victor" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Active (Ursel history)" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "1399" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Local history" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Victor" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Married Jeanne de Gavre" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "15 Sep 1420" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "FMG [844]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Victor" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Testament" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "1430" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "FMG [842]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Adam" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Named in charter" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "12 May 1427" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "FMG [853]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Victor" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Deceased ('wijlen')" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "before 10 Mar 1442 N.S." }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "FMG [847]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: "rgba(255,255,255,0.02)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Adam" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "Named in charter" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "10 Mar 1442 N.S." }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: "FMG [854]" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Adam" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "Active donor in charter" }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "18 Mar 1447 N.S." }),
              /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontWeight: "bold" }, children: "FMG [855]" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Lodewyc van Vlaenderen — Documented Descendants ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Lodewyc (also Louis) van Vlaenderen married Jacqueline de Wilde (-Apr 1482, bur Oostborch). An epitaph at Oostborch (source: Bethune (1900) ",
          /* @__PURE__ */ jsx("em", { children: "Epitaphes" }),
          ", third part, p.356 [848]) records the burial of 'Jacquemine de Wilde, ghesellenede van Lodewijc van Vlaenderen, fs Victor...naturelicken zone van...Lodewijc van Male' who died 1482, and nearby 'haer Joos van Vlaenderen fs Lodewijcx.'"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Lodewyc and Jacqueline had two documented children:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "(1) Josse van Vlaenderen" }),
          " (-young, bur Oostborch). Documented by the same Oostborch epitaph [849]. Died young — cannot be the Joos van Vlaenderen appearing in the 1547 Brugse Vrije probate record. His existence does, however, confirm that the name Josse/Joos was in active use within Victor's direct line in the mid-to-late 15th century."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "(2) Margareta van Vlaenderen." }),
          " Charters dated 1478 and 1486 [FMG 850] record that 'Marguerite de Flandres' married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe."
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }, children: "Note on Oostborch: the location of this burial site requires identification. If Oostborch is in or near the Meetjesland, the geographic connection to the later parish-record Van Vlaenderens would be strengthened." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Naval and Military Activity ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "A DBNL article states: 'Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.' A UGent-hosted study on Flemish corsair warfare notes the appointment of 'een nieuwe admiraal: Victor van Vlaanderen.' These sources support Victor's coastal and naval command role." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Genealogical Significance ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The published record establishes an illegitimate comital branch rooted in the Ursel/Wessegem region, with Victor's acknowledged natural sons bearing the surname form ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaendren" }),
          " across three directly attested primary documents spanning 1427–1447. This does not by itself prove continuous descent to the later parish-record Van Vlaenderens of the Meetjesland. It does, however, provide a substantial medieval documentary nucleus that makes such a continuity hypothesis materially stronger than a mere coincidence-of-surname explanation."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The 150-year documentary gap between Adam's last attestation (18 March 1447) and Franciscus van Vlaenderen in Ghent (1568) is the central open question in the project. A systematic onomastic sweep of the Zeeuws-Vlaanderen record (Gysseling, Vier Ambachten, c.1240–1500) has confirmed the surname is not indigenous to that region — it arrives into Bassevelde/Assenede from the Ghent hinterland. The primary remaining bridge candidates are the Staten van Goed series at RAG (Ambacht Assenede I & II) and the Landboek/Leenhof records. For the full distributional and documentary analysis of the surname's origin, see the",
          " ",
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                navigate("/name/surname-origins");
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" },
              children: "Four Functions, Three Clusters analysis →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h3", { children: "Notes & Bibliography" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "1.5rem" }, children: "FMG. Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. v5.0, updated January 2025. All footnote numbers in square brackets refer to this source." }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          "FMG MedLands: Flanders, Hainaut. Victor entry and Adam entry with charters [841]–[855]. Source for all three charters: Vredius, Olivarius. ",
          /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum." }),
          " Bruges: J.B. & Lucas Kerchovios, 1643. Pars secunda, pp.285–287. Note: Vredius cites these charters as deriving from the Ghent partition court records (",
          /* @__PURE__ */ jsx("em", { children: "In actis curiae partitionum Gandensium, Ex regist. part." }),
          " f.56). The underlying register has not been independently verified at Rijksarchief Gent. Research lead: ",
          /* @__PURE__ */ jsx("em", { children: "Curiae partitionum Gandensium" }),
          " may correspond to the RAG Jaarregisters van de Keure or Staten van Goed series.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          "Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem. Quote: 'Eind 14de eeuw vinden we Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male, als heren van Wessegem; in 1431 terug bij het kroondomein gevoegd.'",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Inventaris Onroerend Erfgoed, Erfgoedobject 33384" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          "Ursel, een Meetjeslands dorp. States that in 1399 Wessegem passed to Victor van Vlaanderen, another bastard son of Louis van Male.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://mijnplatteland.com/meetjesland/ursel/", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Ursel, een Meetjeslands dorp" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          "Bethune, J.B. de. ",
          /* @__PURE__ */ jsx("em", { children: "Epitaphes et monuments des eglises de la Flandre." }),
          " Third part. 1900. p.356. [FMG 848–849]. Oostborch epitaph for Jacqueline de Wilde and Josse van Vlaenderen. Print only — not digitised. Held at KBR Brussels (Royal Library of Belgium) and Ghent University Library."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          "Degryse, R. Willem Beukel(s) van Hughevliet. ",
          /* @__PURE__ */ jsx("em", { children: "De Vlaamse Gids" }),
          " 38 (1954).",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "DBNL, Vlaamse Stam (1954)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "6." }),
          "Tailler, Margaux. ",
          /* @__PURE__ */ jsx("em", { children: "Corvers en zeeschuimers van den Vlaemsche zeecoste: Kaapvaart en piraterij onder Jan zonder Vrees." }),
          " Master of Arts in History, Ghent University, 2011. Supervised by Jan Dumolyn. Notes the appointment of 'een nieuwe admiraal: Victor van Vlaanderen.'",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Ghent University Library, Thesis RUG01-001786522 (2012)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(232, 184, 48, 0.2)" }, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("victor"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "16px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            },
            children: "Return to Victor Lineage"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("bibliography"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "14px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginLeft: "1.5rem"
            },
            children: "Full Bibliography →"
          }
        )
      ] })
    ] })
  ] });
}
function PraetDossierPage() {
  const { goToResearch } = useNav();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Praet Line — Archival Dossier | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555). Sources, evidence levels, and open research questions." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/praet-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "The Praet Line — Archival Dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "From Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece. Primary and secondary sources for the Praet bastard line." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/praet-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"The Praet Line \\u2014 Archival Dossier","description":"Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555).","url":"https://vanvlaenderen.org/research/praet-dossier","inLanguage":"en","dateModified":"2026-04-11","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Louis Friese van Vlaenderen","item":"https://vanvlaenderen.org/research/louis-friese"},{"@type":"ListItem","position":4,"name":"Archival Dossier","item":"https://vanvlaenderen.org/research/praet-dossier"}]}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Archival Dossier" }),
        /* @__PURE__ */ jsx("h1", { children: "Louis Friese van Vlaenderen" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Bastard son of Louis II de Male, Count of Flanders; lord of Praet and Woestine; founder of the Praet branch of the van Vlaenderen surname." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Archival Dossier" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: "Methodology & Evidence Levels" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", marginBottom: "1rem", color: "var(--text-muted)" }, children: "This dossier follows the same evidentiary framework as the Victor van Vlaenderen dossier. Directly attested statements rest on quoted charter language or an explicit documentary summary in a published authority." }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyGrid, children: [
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Directly Attested" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Quoted charter language or explicit documentary summary." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Strongly Corroborated" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Supported by concordant published historical authorities." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Probable" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Source-based but require fuller inspection of underlying edition." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Hypothesis" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Genealogical inferences proposed for further testing." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", marginTop: "1.5rem", fontStyle: "italic", color: "var(--text-muted)", borderTop: "1px solid rgba(232, 184, 48, 0.1)", paddingTop: "1rem" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Note on primary sources:" }),
          " the two principal authorities for this lineage are Philippe de l'Espinoy, ",
          /* @__PURE__ */ jsx("em", { children: "Recherche des antiquitez et noblesse de Flandres" }),
          " (Douai, 1631), and Olivarius Vredius (Olivier de Wree), ",
          /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum" }),
          " (Bruges, 1643). Both are published antiquarian works of recognised scholarly standing. Neither has been accessed directly; both are cited through the Foundation for Medieval Genealogy MedLands summaries. Note: Vredius also published an earlier ",
          /* @__PURE__ */ jsx("em", { children: "Sigilla Comitum Flandriae" }),
          " (Bruges, 1639) — a study of the counts' seals — which is a separate work. The genealogical proofs for bastard lines are in the 1643 ",
          /* @__PURE__ */ jsx("em", { children: "Genealogia" }),
          ", not the 1639 ",
          /* @__PURE__ */ jsx("em", { children: "Sigilla" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Identity and Parentage ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Louis Friese van Vlaenderen — also styled Lodewijk de Fries, Louis le Frison, and Louis le Friese de Flandre — was an illegitimate son of Louis II de Male, Count of Flanders (1330-1384). Wikipedia's article on Louis of Praet confirms that Lodewijk IV van Vlaenderen (Louis of Praet) was descended through his father from a bastard son of Louis of Male, count of Flanders, establishing the comital-bastard ancestry of the entire Praet branch.",
          /* @__PURE__ */ jsx("sup", { children: "[2]" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "FMG MedLands, summarising Vredius (1643), preserves the following verbatim extract: ",
          /* @__PURE__ */ jsx("em", { children: "messire Loys de Frise fils bastard de Loys de Male conte de Flandre, lequel il eut d une fille de Monsieur de Borre." }),
          " This passage directly attests Louis Friese's name, his bastard status, his father Louis de Male, and his maternal descent from the family of Monsieur de Borre.",
          /* @__PURE__ */ jsx("sup", { children: "[1][3]" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "FMG MedLands, summarising Espinoy (1631), preserves a record that in 1420 the lands and baronies of Praet and La Woestine were conveyed to the illegitimate son of Louis de Male, styled ",
          /* @__PURE__ */ jsx("em", { children: "Messire Louys de Flandres dit le Frizon." }),
          " This passage directly attests his territorial grant and the variant surname le Frizon.",
          /* @__PURE__ */ jsx("sup", { children: "[1][4]" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Pattou's Batards de Flandres (2014) further identifies him as Louis le Friese, bastard of Flanders, lord of Praet and La Woestine, born approximately 1350, confirming the above.",
          /* @__PURE__ */ jsx("sup", { children: "[5]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Battle of Nicopolis and Death ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Louis Friese's death is directly attested in multiple independent sources. Wikipedia's article on Louis II, Count of Flanders records that Louis the Frisian, lord of Woestyne, was killed at the Battle of Nicopolis on 28 September 1396. This date is corroborated by Pattou's compilation. His death at Nicopolis alongside his brothers Louis le Haeze and Jean Sans Terre makes 28 September 1396 one of the most firmly anchored dates in the Praet lineage.",
          /* @__PURE__ */ jsx("sup", { children: "[2][5]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Territorial Holdings: Praet and Woestine ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The Heerlijkheid Praet is documented as having ancient roots in Oedelem (now Beernem, West Flanders), held by the original van Praet baronial family from at least the twelfth century. A published genealogical study of the van Praet family (Lauwens, 2010) records that in 1373 the leengoed of Praet in Oedelem was sold to Louis de Male, after which it passed as a grant to Louis Friese.",
          /* @__PURE__ */ jsx("sup", { children: "[6]" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The Woestine lordship (Woesten, West Flanders) accompanied Praet. Louis Friese's second wife, Maria van Ghistelles, held the lordships of Zweveghem and Rosebeke in her own right, strengthening the Praet branch's position in western Flanders.",
          /* @__PURE__ */ jsx("sup", { children: "[5]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Marriage and Descent ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Two marriages are attested. The first wife is connected to La Woestine but is unnamed in the accessible sources. The second wife, Maria van Ghistelles, is documented in Pattou's compilation as married after 25 September 1373. From these marriages Louis Friese left at least one son, Johan I van Vlaenderen (lord of Praet), whose marriage in 1420 to Johanna van Reygersvliet is recorded in the GenealogieOnline West-Europese Adel database.",
          /* @__PURE__ */ jsx("sup", { children: "[5][7]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The Surname van Vlaenderen ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The consistent use of van Vlaenderen by Louis Friese and his descendants is the central genealogical point for this project. Like his half-brother Victor, Louis Friese bore the surname in a period when it functioned not as a geographic descriptor but as a marker of comital illegitimate descent — crystallising as a hereditary identifier at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384. Pattou's compilation documents van Vlaenderen styling through at least five further generations of the Praet line.",
          /* @__PURE__ */ jsx("sup", { children: "[2][5]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h3", { children: "Notes & Bibliography" }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          "Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          "Wikipedia. Louis II, Count of Flanders. ",
          /* @__PURE__ */ jsx("a", { href: "https://en.wikipedia.org/wiki/Louis_II,_Count_of_Flanders", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Wikipedia, Louis II, Count of Flanders" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          "Vredius, Olivarius (Olivier de Wree). ",
          /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum." }),
          " Bruges: J.B. & Lucas Kerchovios, 1643. Vol. 2 of 2. [496 pp.] Not freely digitised; held at major European research libraries.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.rct.uk/collection/1021446", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Royal Collection Trust catalogue entry" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          "Espinoy, Philippe de l'Espinoy. ",
          /* @__PURE__ */ jsx("em", { children: "Recherche des antiquitez et noblesse de Flandres." }),
          " Douai: veuve M. Wyon, 1631. BnF shelfmark M-1432.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://gallica.bnf.fr/ark:/12148/bpt6k1180858", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Free access (Gallica / BnF)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          "Pattou, Etienne. Batards de Flandres. 2014. ",
          /* @__PURE__ */ jsx("a", { href: "https://docplayer.fr/21492316-Batards-de-flandres.html", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Pattou, Batards de Flandres (2014)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "6." }),
          "Lauwens, Patrik. Verhalen uit de genealogie Van Praet. September 2010. ",
          /* @__PURE__ */ jsx("a", { href: "https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Lauwens, Verhalen uit de genealogie Van Praet (2010)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "7." }),
          "GenealogieOnline. West-Europese Adel: Johan I van Vlaanderen Heer van Praet. ",
          /* @__PURE__ */ jsx("a", { href: "https://www.genealogieonline.nl/en/west-europese-adel/I75517.php", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "GenealogieOnline, Johan I van Vlaanderen, Heer van Praet" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(232, 184, 48, 0.2)" }, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("louis-friese"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "16px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            },
            children: "Back to Louis Friese Lineage"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("bibliography"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "14px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginLeft: "1.5rem"
            },
            children: "Full Bibliography →"
          }
        )
      ] })
    ] })
  ] });
}
function PraetLineageDossierPage() {
  const { goToResearch } = useNav();
  const lineageData = [
    { gen: 1, name: "Louis Friese van Vlaenderen", dates: "c.1350 – 28 Sep 1396", role: "Bastard of Flanders; Lord of Praet & Woestine", spouse: "1) Unknown (La Woestine) 2) Marie van Gistel", sources: "Vredius MS via FMG [864–869]; Wikipedia", level: "Directly attested", levelClass: researchStyles.levelAttested },
    { gen: 2, name: "Johan I van Vlaenderen", dates: "d. after 10 Sep 1439", role: "Lord of Praet & Woestine; Burgher of Praet", spouse: "Johanna van Reygersvliet", sources: "Charter 10 Sep 1439 via FMG [873]; Vredius MS [875]", level: "Directly attested", levelClass: researchStyles.levelAttested },
    { gen: 3, name: "Lodewijk II van Vlaenderen", dates: "d. 24 Aug 1488", role: "Lord of Praet, Woestine, Bevere, Onnele", spouse: "Louise de Bruges dau. of Jan van Gruuthuse", sources: "Epitaph Aeltere via FMG [876,878]", level: "Directly attested", levelClass: researchStyles.levelAttested },
    { gen: 4, name: "Lodewijk III van Vlaenderen", dates: "d. 1 Jan 1490", role: "Lord of Praet", spouse: "Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent)", sources: "Epitaph Aeltere via FMG [889,890]", level: "Directly attested", levelClass: researchStyles.levelAttested },
    { gen: 5, name: "Lodewijk IV van Vlaenderen", dates: "d. 1555", role: "Knight of the Golden Fleece (1531); Grand Bailiff Ghent & Bruges; Stadtholder Holland & Zeeland; Advisor to Emperor Charles V", spouse: "Jossine van Praet (d. 1535, bur Aeltere)", sources: "Epitaph Aeltere via FMG [891–893]; Wikipedia", level: "Directly attested", levelClass: researchStyles.levelAttested },
    { gen: 6, name: "Jan II van Vlaenderen", dates: "d. 10 Dec 1545", role: "Lord of Woestine, Elverdinghe, Vlamertinghe; predeceased father without issue", spouse: "Jacqueline de Bourgogne (remarried; d. 1556 in childbirth)", sources: "Epitaph Aeltere via FMG [894,895]", level: "Directly attested", levelClass: researchStyles.levelAttested }
  ];
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Praet Lineage Detail — Van Vlaenderen Research | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV — the research control for Van Vlaenderen surname attribution." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/praet-lineage-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Praet Lineage Detail — Van Vlaenderen Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Generational evidence for the Praet descent. Functions as a documented research control for Van Vlaenderen surname attribution." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/praet-lineage-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Praet Lineage Detail \\u2014 Van Vlaenderen Research","description":"Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV.","url":"https://vanvlaenderen.org/research/praet-lineage-dossier","inLanguage":"en","dateModified":"2026-04-11","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Louis Friese van Vlaenderen","item":"https://vanvlaenderen.org/research/louis-friese"},{"@type":"ListItem","position":4,"name":"Lineage Detail","item":"https://vanvlaenderen.org/research/praet-lineage-dossier"}]}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Lineage Dossier" }),
        /* @__PURE__ */ jsx("h1", { children: "The House of Flanders-Praet" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Documented lineage from Louis Friese van Vlaenderen (d. 1396) to the extinction of the legitimate male line (1545), with primary-source confirmed generation data. Updated April 2026 with FMG MedLands primary charter and epitaph data." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Lineage Dossier" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: "Method" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)" }, children: "This dossier has been substantially upgraded from the previous version. All generation data now incorporates primary-source material from FMG MedLands, which preserves charter summaries, epitaph transcriptions, and manuscript citations from Vredius (1643), Bethune (1900), Buylaert, and Pere Anselme. Evidence levels have been revised accordingly. The intermediate generations — previously classified as 'strongly corroborated' — are now largely directly attested via epitaphs or dated charters." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", marginTop: "1rem", fontStyle: "italic", color: "var(--text-muted)", borderTop: "1px solid rgba(232, 184, 48, 0.1)", paddingTop: "1rem" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Source chain note:" }),
          " Espinoy (1631) and Vredius (1643) are the principal 17th-century authorities. Both are cited through FMG MedLands summaries with footnote numbers, which are preserved below for traceability. The FMG footnote numbers in square brackets refer to the Flanders, Hainaut document, section B: Heeren van Praet."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Lineage Summary Table" }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: "1rem", fontSize: "0.85rem" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "2px solid var(--gold)", textAlign: "left" }, children: [
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)", whiteSpace: "nowrap" }, children: "Gen" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Name & Dates" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Title / Role" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Spouse" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Sources" }),
            /* @__PURE__ */ jsx("th", { style: { padding: "10px", color: "var(--gold)" }, children: "Evidence" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: lineageData.map((row2, i) => /* @__PURE__ */ jsxs("tr", { style: { borderBottom: "1px solid rgba(232, 184, 48, 0.1)", backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }, children: [
            /* @__PURE__ */ jsx("td", { style: { padding: "10px", textAlign: "center" }, children: row2.gen }),
            /* @__PURE__ */ jsxs("td", { style: { padding: "10px", fontWeight: "bold" }, children: [
              row2.name,
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { fontWeight: "normal", fontSize: "0.8rem", color: "var(--text-muted)" }, children: row2.dates })
            ] }),
            /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: row2.role }),
            /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: row2.spouse }),
            /* @__PURE__ */ jsx("td", { style: { padding: "10px", fontSize: "0.8rem", color: "var(--text-muted)" }, children: row2.sources }),
            /* @__PURE__ */ jsx("td", { style: { padding: "10px" }, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${row2.levelClass}`, style: { marginLeft: 0, whiteSpace: "nowrap" }, children: row2.level }) })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Generation Notes" }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Louis Friese van Vlaenderen (c.1350 – 28 Sep 1396) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "FMG MedLands [864] summarises Vredius quoting a manuscript: 'messire Loys de Frise fils bastard de...Loys de Male conte de Flandre, lequel il eut dune fille de Monsieur de Borre.' His grant of Praet is recorded from Espinoy [865]: Louis de Male 'en avancement de son mariage avec Dame Marie de Guistelles, Dame de Zweueghem et de Rosebeke' granted 'les terres et Baronies de Praet et de la Woestine' to his illegitimate son 'Messire Louys de Flandres dit le Frizon' (no source cited). Vredius [866] records that Louis 'eut en partage [la Wostine] par acte du 25 de septembre 1373' and died at Nikopolis 28 Sep 1396." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Johan I van Vlaenderen (d. after 10 Sep 1439) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "A charter dated 10 Sep 1439 [FMG 873] is directly issued by 'Ian van Vlaenderen Heere van Praet ande vander Woestine ende Burghemeesters ende Schepenen vanden selven Heerschepe van Praet.' This is Johan I's own charter — directly attested. His marriage to Johanna van Reygersvliet is recorded in Vredius manuscript [875]: 'Iean de Flandre Seign. de Praet et de la Woestine' married 'Ieanne de Reyghersvliet fille de Henry, fils de Gautier.' FMG notes: 'No primary source has been found which confirms her parentage and marriage' — the marriage itself is therefore strongly corroborated, her parentage probable. Espinoy [872] records the 1431 settlement of 'messire Louys son pere en son vivant Seigneur de Praet et de la Woestine' between Johan I and his mother." }),
          /* @__PURE__ */ jsx("h4", { style: { color: "var(--text-primary)", fontSize: "1rem", marginTop: "1.5rem", marginBottom: "0.75rem" }, children: "Johan I's Seven Documented Children" }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", lineHeight: "1.7", color: "var(--text-muted)" }, children: [
            "(a) ",
            /* @__PURE__ */ jsx("strong", { children: "Lodewijk II" }),
            " — epitaph attested [876]; (b) ",
            /* @__PURE__ */ jsx("strong", { children: "Jean de Flandre" }),
            " (-6 Sep 1523) — epitaph at Beveren bij Roeselare [879]; (c) ",
            /* @__PURE__ */ jsx("strong", { children: "Josse de Flandre" }),
            " (-after 1526) — documented by Buylaert [881,882], married Martina van Moerkerke, multiple children, line survived until 1592; (d) ",
            /* @__PURE__ */ jsx("strong", { children: "Jeanne de Flandre" }),
            " — charter 24 Jan 1441 [884] and document 1446 [885]; (e) ",
            /* @__PURE__ */ jsx("strong", { children: "Marguerite de Flandre" }),
            " — Vredius manuscript [886]; (f) ",
            /* @__PURE__ */ jsx("strong", { children: "Isabelle de Flandre" }),
            " — Vredius manuscript [887]; (g) ",
            /* @__PURE__ */ jsx("strong", { children: "Landrade de Flandre" }),
            ", Canoness at Mons — Vredius manuscript [888]."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem", background: "rgba(96, 165, 250, 0.06)", border: "1px solid rgba(96, 165, 250, 0.15)", borderRadius: "4px", padding: "1.25rem" }, children: [
          /* @__PURE__ */ jsx("h4", { style: { color: "#60a5fa", fontSize: "1rem", marginBottom: "0.5rem" }, children: "Note on Josse de Flandre (cadet branch)" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", lineHeight: "1.7", color: "var(--text-muted)" }, children: "Josse de Flandre is a documented cadet branch of Johan I's line, distinct from Victor's son Lodewyc whose son Josse died young at Oostborch. Josse de Flandre (son of Johan I) married into the Moerkerke family and his line survived until at least 1592 per Buylaert. This is the most significant newly confirmed cadet branch." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Lodewijk II van Vlaenderen (d. 24 Aug 1488) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Epitaph at Aeltere [FMG 876,878]: 'Lodewyc van Vlaenderen heere van Praet ende vanden lande van de Wostine, van Bevere ende van Onnele, fs mer Jans ruddere heere van Praet' died 1488 'op Ste Bartholomeus dach' (24 August), and married 'vrau Loije van Brugghe fs mijns heeren Jans hjeere van Gruuthuuse.' This is directly attested from a primary epitaph. His wife Louise de Bruges was the daughter of Jan van de Aa dit de Bruges, Heer van Gruuthuse en Grimbergen. Pere Anselme confirms her parentage and marriage [877]." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Lodewijk III van Vlaenderen (d. 1 Jan 1490) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Epitaph at Aeltere [FMG 889]: 'Loijs van Vlaenderen heere van Praet...bij zijn vader' died 'op den nieudach 1490' (1 January 1490). His marriage to Isabelle de Bourgogne is confirmed by the same epitaph [890]: she died '12 Nov 1504' and was buried 'te Gent, te Galilee.' Isabelle was the daughter of Jean batard de Bourgogne Heer van Elverdinghe en Ulamertinghe and Marie d'Halluin. Source: Bethune (1900) epitaphs via FMG." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Lodewijk IV van Vlaenderen / Louis of Praet (d. 1555) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Epitaph at Aeltere [FMG 892]: 'Lodewijc van Vlaenderen ruddere vanden Gulden Vliese heere van Praet vander Woestine Bevere Onnele Elverdinghe Vlamertinghe.' Knight of the Golden Fleece (1531). Grand Bailiff of Ghent and Bruges. Stadtholder of Holland and Zeeland (1544–46). Advisor to Emperor Charles V." }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Married Jossine van Praet (d. 1535, bur Aeltere), heiress of the original Praet baronial family. Epitaph [893] records: 'vrau Joosijne van Praet vrauwe van Praet vander Woestine.'" })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem", background: "rgba(212, 168, 48, 0.06)", border: "1px solid rgba(212, 168, 48, 0.15)", borderRadius: "4px", padding: "1.25rem" }, children: [
          /* @__PURE__ */ jsx("h4", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem" }, children: "The 1517 Knesselare Charter — Research Significance" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", lineHeight: "1.7", color: "var(--text-muted)" }, children: "A charter [FMG 891] records Lodewijk IV holding six fiefs at Knesselare from the seigneurie of Wessegem in 1517. Knesselare is one of the parishes in the active research coverage, and it sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen cluster in the Meetjesland. This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderens who later appear in Knesselare parish records. But it confirms that the Praet branch had territorial interests in the precise geographic area where your ancestors lived — which is relevant to the branch-control problem identified in the research design." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Jan II van Vlaenderen (d. 10 Dec 1545) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Epitaph at Aeltere [FMG 894]: 'joncheer Jan van Vlaenderen heere van de Woestijne, Elverdinghe ende Vlamertinghe, fs mer Lodewijcx heere van Praet ende van vrau Joosijne van Praet' died 10 Dec 1545. An epitaph at Veere [FMG 895] confirms his wife Jacqueline de Bourgogne remarried Jan Heer van Cruijningen and died 'van haer laetste kint' in 1556 at Beveren — in childbirth with her last child — and that she was childless by Jan van Vlaenderen. The legitimate Praet male line ends here." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Documented Cadet Connections" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }, children: "The following are now documented from primary sources, replacing the previous Geni-only entries." }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Josse de Flandre (son of Johan I, d. after 1526) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Documented by Buylaert [FMG 881,882]. After the death in 1523 of his brother Jean de Flandre Heer van Onlede, Josse inherited 'de heerlijkheden Onlede, Beveren en Wijchuize.' He married Martina van Moerkerke and had 'verschillende kinderen.' The family survived until 1592. This is a directly attested cadet branch of the Praet line extending into the early parish-record period." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Francoise van Praet van Moerkerke (fl. c.1519) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, children: "Strongly Corroborated" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Documented in two independent published sources. Nederland's Adelsboek (1908) records Wessel van Boetzelaer married c.1519 'Francina van Praet.' The Lauwens genealogical study (2010) records 'Francoise van Praet van Moerkerken, vrouwe van Carnesse, huwde Wessel van den Boetzelaer, heer van Langerak en Asperen.' Her precise generation within the Praet-Moerkerke line requires further investigation." })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: [
            "Margareta van Vlaenderen (dau. of Lodewyc, Victor's son) ",
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.95rem", lineHeight: "1.7" }, children: "Charters dated 1478 and 1486 [FMG 850] record that 'Marguerite de Flandres' (daughter of Lodewyc van Vlaenderen, Victor's son) married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe. This is from Victor's line, not the Praet line — noted here to distinguish the two Margaretha van Vlaenderens documented in the 15th century." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Extinction and Open Questions" }),
        /* @__PURE__ */ jsx("p", { children: "The legitimate Praet male line ended 10 December 1545 with Jan II's death. Josse de Flandre (son of Johan I) represents a documented cadet branch surviving until at least 1592, but his line descends from Johan I and does not carry the primary 'van Vlaenderen' surname styling in the sources reviewed. Whether any branch of the Praet network continued to use 'van Vlaenderen' as a surname into the commoner population remains unproven. The Raad van Vlaanderen records at Rijksarchief Gent are the recommended next archival target." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Research Significance" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The Praet branch provides independent corroboration that ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " functioned as inherited comital identity across six generations. The 1517 Knesselare charter is a new finding that places the Praet van Vlaenderens in direct territorial contact with the Meetjesland research cluster during the gap period. The branch functions as a research control: men styled ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " in 16th-century Flemish records must be tested against Praet geography, patronymics, and witness networks before being assigned to Victor's descent."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h3", { children: "Notes & Bibliography" }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          "Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025. Section B: Heeren van Praet. Footnote numbers in square brackets refer to this source.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          "Bethune, J.B. de. ",
          /* @__PURE__ */ jsx("em", { children: "Epitaphes et monuments des eglises de la Flandre." }),
          " Third part. 1900. Primary epitaph transcriptions for Aeltere, Beveren bij Roeselare, and Languemarc. Print only — not digitised. Held at KBR Brussels and Ghent University Library."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          "Wikipedia. Louis of Praet.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://en.wikipedia.org/wiki/Louis_of_Praet", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Wikipedia, Louis of Praet" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          "Lauwens, Patrik. ",
          /* @__PURE__ */ jsx("em", { children: "Verhalen uit de genealogie Van Praet." }),
          " 2010.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Lauwens, Verhalen uit de genealogie Van Praet (2010)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          "Nederland's Adelsboek. Vol. 6 (1908). 's-Gravenhage: W.P. van Stockum en Zoon. Van Boetzelaer entry.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://archive.org/details/nederlandsadelsb28unse_4", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Internet Archive (1908 volume)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "6." }),
          "Buylaert, Frederik. ",
          /* @__PURE__ */ jsx("em", { children: "Repertorium van de Vlaamse adel (ca. 1350–ca. 1500)." }),
          " Gent: Academia Press, 2011. Prosopographical register of Flemish noble families 1350–1500; the source for Josse de Flandre and cadet Praet branch data cited via FMG MedLands [881, 882]. See also by the same author: ",
          /* @__PURE__ */ jsx("em", { children: "Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen" }),
          " (Brussels: Royal Academy, 2010), the accompanying narrative history.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://lib.ugent.be/nl/catalog/rug01:001699683", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Ghent University Library catalogue" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(232, 184, 48, 0.2)" }, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("louis-friese"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "16px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            },
            children: "Back to Louis Friese Lineage"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToResearch("bibliography"),
            style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--gold)",
              fontSize: "14px",
              textDecoration: "underline",
              fontFamily: "var(--font-ui)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginLeft: "1.5rem"
            },
            children: "Full Bibliography →"
          }
        )
      ] })
    ] })
  ] });
}
const twoCol = "_twoCol_19n7v_1";
const reasonsList = "_reasonsList_19n7v_9";
const reasonItem = "_reasonItem_19n7v_16";
const reasonIcon = "_reasonIcon_19n7v_25";
const reasonTitle = "_reasonTitle_19n7v_31";
const reasonText = "_reasonText_19n7v_39";
const privacyNote = "_privacyNote_19n7v_47";
const privacyIcon = "_privacyIcon_19n7v_62";
const formWrap = "_formWrap_19n7v_69";
const form = "_form_19n7v_69";
const field = "_field_19n7v_86";
const submitBtn = "_submitBtn_19n7v_132";
const sentMsg = "_sentMsg_19n7v_152";
const sentIcon = "_sentIcon_19n7v_165";
const errorMsg = "_errorMsg_19n7v_171";
const collageContainer = "_collageContainer_19n7v_192";
const collageImage = "_collageImage_19n7v_201";
const collageCaption = "_collageCaption_19n7v_210";
const contactStyles = {
  twoCol,
  reasonsList,
  reasonItem,
  reasonIcon,
  reasonTitle,
  reasonText,
  privacyNote,
  privacyIcon,
  formWrap,
  form,
  field,
  submitBtn,
  sentMsg,
  sentIcon,
  errorMsg,
  collageContainer,
  collageImage,
  collageCaption
};
const polaroidCollage = "/assets/polaroid-collage-BBjRqmGd.jpg";
function ContactPage() {
  const { t } = useTranslation();
  const [form2, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://formspree.io/f/mkoprkaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form2.name,
          email: form2.email,
          subject: form2.subject || "General Enquiry",
          message: form2.message
        })
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(t("contact.form_error"));
      }
    } catch (err) {
      setError(t("contact.form_error"));
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };
  const reasons = [
    {
      icon: "⚜",
      title: t("contact.reason_name_title"),
      text: t("contact.reason_name_text")
    },
    {
      icon: "⚜",
      title: t("contact.reason_docs_title"),
      text: t("contact.reason_docs_text")
    },
    {
      icon: "⚜",
      title: t("contact.reason_dna_title"),
      text: t("contact.reason_dna_text")
    },
    {
      icon: "⚜",
      title: t("contact.reason_local_title"),
      text: t("contact.reason_local_text")
    },
    {
      icon: "⚜",
      title: t("contact.reason_question_title"),
      text: t("contact.reason_question_text")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact — Van Vlaenderen Research | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get in touch with the Van Vlaenderen research project. Share family connections, Y-DNA results, or archival findings related to the Van Vlaenderen / Van Flandern surname." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/contact" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Contact — Van Vlaenderen Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/contact" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.textHero, children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("contact.hero_eyebrow") }),
      /* @__PURE__ */ jsx("h1", { children: t("contact.hero_title") }),
      /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
      /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: t("contact.hero_lead") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: contactStyles.twoCol, children: [
        /* @__PURE__ */ jsxs("div", { className: contactStyles.reasons, children: [
          /* @__PURE__ */ jsx("h2", { children: t("contact.reasons_title") }),
          /* @__PURE__ */ jsx("div", { className: contactStyles.reasonsList, children: reasons.map((r) => /* @__PURE__ */ jsxs("div", { className: contactStyles.reasonItem, children: [
            /* @__PURE__ */ jsx("div", { className: contactStyles.reasonIcon, children: r.icon }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: contactStyles.reasonTitle, children: r.title }),
              /* @__PURE__ */ jsx("div", { className: contactStyles.reasonText, children: r.text })
            ] })
          ] }, r.title)) }),
          /* @__PURE__ */ jsxs("div", { className: contactStyles.privacyNote, children: [
            /* @__PURE__ */ jsx("span", { className: contactStyles.privacyIcon, children: "⚜" }),
            /* @__PURE__ */ jsx("span", { children: t("contact.privacy_text") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: contactStyles.formWrap, children: [
          /* @__PURE__ */ jsx("h2", { children: t("contact.form_title") }),
          sent ? /* @__PURE__ */ jsxs("div", { className: contactStyles.sentMsg, children: [
            /* @__PURE__ */ jsx("div", { className: contactStyles.sentIcon, children: "✓" }),
            /* @__PURE__ */ jsx("div", { children: t("contact.form_success") })
          ] }) : /* @__PURE__ */ jsxs("form", { className: contactStyles.form, onSubmit: handleSubmit, children: [
            error && /* @__PURE__ */ jsx("div", { className: contactStyles.errorMsg, children: error }),
            /* @__PURE__ */ jsxs("div", { className: contactStyles.field, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", children: t("contact.form_name") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "name",
                  name: "name",
                  type: "text",
                  placeholder: t("contact.form_name_placeholder"),
                  value: form2.name,
                  onChange: handleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: contactStyles.field, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", children: t("contact.form_email") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  placeholder: t("contact.form_email_placeholder"),
                  value: form2.email,
                  onChange: handleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: contactStyles.field, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "subject", children: t("contact.form_subject") }),
              /* @__PURE__ */ jsxs("select", { id: "subject", name: "subject", value: form2.subject, onChange: handleChange, children: [
                /* @__PURE__ */ jsx("option", { value: "", children: t("contact.form_subject_placeholder") }),
                /* @__PURE__ */ jsx("option", { value: "Van Vlaenderen Family Research", children: t("contact.form_subject_research") }),
                /* @__PURE__ */ jsx("option", { value: "Van Vlaenderen DNA Project", children: t("contact.form_subject_dna") }),
                /* @__PURE__ */ jsx("option", { value: "Van Vlaenderen Documents or Photographs", children: t("contact.form_subject_docs") }),
                /* @__PURE__ */ jsx("option", { value: "The Van Vlaenderensmolen", children: t("contact.form_subject_mill") }),
                /* @__PURE__ */ jsx("option", { value: "General Enquiry", children: t("contact.form_subject_general") })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: contactStyles.field, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", children: t("contact.form_message") }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 6,
                  placeholder: t("contact.form_message_placeholder"),
                  value: form2.message,
                  onChange: handleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: contactStyles.submitBtn, disabled: loading, children: loading ? t("contact.form_sending") : t("contact.form_submit") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$1.pullQuote, children: /* @__PURE__ */ jsxs("blockquote", { children: [
        '"',
        t("contact.pull_quote"),
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: contactStyles.collageContainer, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: polaroidCollage,
            alt: t("contact.collage_caption"),
            className: contactStyles.collageImage
          }
        ),
        /* @__PURE__ */ jsx("div", { className: contactStyles.collageCaption, children: t("contact.collage_caption") })
      ] })
    ] })
  ] });
}
const sourcesList = "_sourcesList_1xbqh_4";
const sourceItem = "_sourceItem_1xbqh_11";
const sourceLabel = "_sourceLabel_1xbqh_19";
const sourceDesc = "_sourceDesc_1xbqh_28";
const photoContainer = "_photoContainer_1xbqh_36";
const photo = "_photo_1xbqh_36";
const photoCaption = "_photoCaption_1xbqh_49";
const collaborationGrid = "_collaborationGrid_1xbqh_58";
const collaborationCard = "_collaborationCard_1xbqh_65";
const collaborationTitle = "_collaborationTitle_1xbqh_73";
const collaborationDesc = "_collaborationDesc_1xbqh_81";
const aboutStyles = {
  sourcesList,
  sourceItem,
  sourceLabel,
  sourceDesc,
  photoContainer,
  photo,
  photoCaption,
  collaborationGrid,
  collaborationCard,
  collaborationTitle,
  collaborationDesc
};
const michaelConstanceCanal = "/assets/michael-constance-canal-CzKbZRok.jpg";
function AboutPage() {
  const { goTo, goToResearch } = useNav();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "About — Lions of Flanders Project | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "About the Lions of Flanders project: Michael and Constance Van Flandern's 15-year research into Flemish heritage, archival fieldwork in Belgium, and the path from Bassevelde to America." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/about" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "About — Lions of Flanders Project" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Fifteen years of research into a Flemish family name. Archival fieldwork in Ghent, Bruges, and the Meetjesland." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/about" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.textHero, children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: t("about.hero_eyebrow") }),
      /* @__PURE__ */ jsx("h1", { children: t("about.hero_title") }),
      /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
      /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: t("about.hero_lead") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("about.scope_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("about.scope_intro") }),
        /* @__PURE__ */ jsx("p", { children: t("about.scope_sources") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: aboutStyles.sourcesList, children: [
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.sourceItem, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceLabel, children: t("about.source_parish") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceDesc, children: t("about.source_parish_desc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.sourceItem, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceLabel, children: t("about.source_estate") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceDesc, children: t("about.source_estate_desc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.sourceItem, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceLabel, children: t("about.source_land") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceDesc, children: t("about.source_land_desc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.sourceItem, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceLabel, children: t("about.source_dna") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.sourceDesc, children: t("about.source_dna_desc") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("p", { children: t("about.methodology_note") }),
        /* @__PURE__ */ jsxs("p", { style: { marginTop: "1rem", fontSize: "0.975rem", color: "var(--text-primary)", lineHeight: 1.85 }, children: [
          "In medieval Flanders, territorial designations were rarely neutral. Scholarly research on twelfth-century noble sigillography has shown that aristocratic families in Imperial Flanders — the eastern zone including Ghent, Aalst, and Dendermonde — used visual and symbolic culture tied to territory as political language, sometimes as an explicit assertion of dynastic identity against comital authority. By the fourteenth and fifteenth centuries, when our documented ancestors first appear in the record, this tradition of territorial self-identification was already centuries old. A name styled ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " emerging from the comital milieu was not a generic address label — it was an identity claim with documentary, heraldic, and political depth.",
          " ",
          /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic" }, children: 'Nieus, "Aristocratic seal ownership in twelfth-century Flanders," 2021, p. 26.' })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => goTo("research"),
              style: {
                background: "none",
                border: "1px solid rgba(232,184,48,0.35)",
                borderRadius: "4px",
                color: "var(--gold)",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 1.1rem"
              },
              children: "Research Overview →"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => goToResearch("methodology"),
              style: {
                background: "none",
                border: "1px solid rgba(232,184,48,0.35)",
                borderRadius: "4px",
                color: "var(--gold)",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 1.1rem"
              },
              children: "Methodology & Sources →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("about.origins_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("about.origins_body") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: aboutStyles.photoContainer, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: michaelConstanceCanal,
            alt: "Michael and Constance conducting field research in East Flanders",
            className: aboutStyles.photo
          }
        ),
        /* @__PURE__ */ jsx("div", { className: aboutStyles.photoCaption, children: t("about.photo_caption") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("about.goals_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("about.goals_intro") }),
        /* @__PURE__ */ jsx("p", { children: t("about.goals_seeking") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: aboutStyles.collaborationGrid, children: [
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.collaborationCard, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationTitle, children: t("about.collab_historians") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationDesc, children: t("about.collab_historians_desc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.collaborationCard, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationTitle, children: t("about.collab_dna") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationDesc, children: t("about.collab_dna_desc") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: aboutStyles.collaborationCard, children: [
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationTitle, children: t("about.collab_family") }),
          /* @__PURE__ */ jsx("div", { className: aboutStyles.collaborationDesc, children: t("about.collab_family_desc") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: styles$1.section, children: /* @__PURE__ */ jsx("p", { children: t("about.closing") }) }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: t("about.lineage_cta_heading") }),
        /* @__PURE__ */ jsx("p", { children: t("about.lineage_cta_body") }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: styles$1.ctaBox,
            onClick: () => goTo("lineage"),
            style: { background: "none", border: "none", cursor: "pointer", padding: 0, width: "100%", textAlign: "center" },
            children: /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("about.lineage_cta_link") })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: styles$1.ctaBox,
          onClick: () => goTo("contact"),
          style: { background: "none", border: "none", cursor: "pointer", padding: 0, width: "100%", textAlign: "center" },
          children: [
            /* @__PURE__ */ jsx("div", { className: styles$1.ctaText, children: t("about.contact_cta_body") }),
            /* @__PURE__ */ jsx("div", { className: styles$1.ctaNote, children: t("about.contact_cta_note") })
          ]
        }
      )
    ] })
  ] });
}
const vanVlaenderenLineage = [
  {
    id: 0,
    generation: "I",
    name: "Michael & Constance Van Flandern",
    born: "",
    // birth years intentionally omitted — living persons
    parish: "United States",
    status: "modern",
    comment: "The researchers — American descendants of Charles Louis Van Vlaenderen."
  },
  {
    id: 1,
    generation: "II",
    name: "Tom Van Flandern",
    born: "1940",
    parish: "Cleveland, OH",
    status: "modern",
    birthRecord: { label: "1940 Cleveland, OH" }
  },
  {
    id: 2,
    generation: "III",
    name: "Robert Van Flandern",
    born: "1915",
    parish: "Cleveland, OH",
    status: "modern",
    birthRecord: { label: "1915 Cleveland, OH" }
  },
  {
    id: 3,
    generation: "IV",
    name: "Charles A. Van Vlaenderen",
    born: "1881",
    parish: "Fort Wayne, IN",
    status: "partial",
    birthRecord: { label: "1881 Fort Wayne, IN" },
    comment: "First generation born in America, the year Charles Louis emigrated."
  },
  {
    id: 4,
    generation: "V",
    name: "Charles Louis Van Vlaenderen",
    born: "Jun 13, 1854",
    parish: "Bassevelde",
    status: "documented",
    birthRecord: { label: "1854 Bassevelde (Assenede)" },
    marriageRecord: { label: "Ancestry.com" },
    deathRecord: { label: "Ancestry.com" },
    comment: "Emigrated from Bassevelde to America in 1881. Married Jacqueline Vermaas."
  },
  {
    id: 5,
    generation: "VI",
    name: "Egidius Van Vlaenderen",
    born: "~1793",
    parish: "Bassevelde",
    status: "partial",
    birthRecord: { label: "1793 Bassevelde" },
    marriageRecord: { label: "1822 Bassevelde (Assenede)" },
    deathRecord: { label: "1868 Bassevelde (Assenede)" }
  },
  {
    id: 6,
    generation: "VII",
    name: "Franciscus Van Vlaenderen",
    born: "Apr 1, 1769",
    parish: "Bassevelde",
    status: "documented",
    birthRecord: { label: "1769 Bassevelde" },
    marriageRecord: { label: "~1792" },
    deathRecord: { label: "1836 Bassevelde (Assenede)" },
    comment: "Marriage date approximate."
  },
  {
    id: 7,
    generation: "VIII",
    name: "Livinus Van Vlaenderen",
    born: "Jan 28, 1740",
    parish: "Bouchout",
    status: "documented",
    birthRecord: { label: "1740 Bouchout" },
    marriageRecord: { label: "1763 Bassevelde (Assenede)" },
    deathRecord: { label: "1783 Bassevelde (Assenede)" },
    comment: "Born in Bouchout; married into Bassevelde parish."
  },
  {
    id: 8,
    generation: "IX",
    name: "Petrus Van Vlaenderen",
    born: "Sep 11, 1714",
    parish: "Bassevelde",
    status: "documented",
    birthRecord: { label: "1714 Bassevelde" },
    marriageRecord: { label: "1739 Boekhoute (Assenede)" },
    deathRecord: { label: "Sep 2, 1783" }
  },
  {
    id: 9,
    generation: "X",
    name: "Petrus (Raphael) Van Vlaenderen",
    born: "Aug 8, 1685",
    parish: "Bassevelde",
    status: "documented",
    birthRecord: {
      label: "1685 Bassevelde",
      url: "https://agatha.arch.be/data/images/514/514_1075_000_01458_000/0_0154_r"
    },
    marriageRecord: { label: "1710 Bassevelde (Assenede)" },
    deathRecord: { label: "1727?" },
    comment: "Death date uncertain. Birth record viewable in Rijksarchief Gent via AGATHA."
  },
  {
    id: 10,
    generation: "XI",
    name: "Livinus Van Vlaenderen",
    born: "Jul 7, 1658",
    parish: "Waarschoot (Sint-Gislenus)",
    status: "documented",
    birthRecord: { label: "1658 Waarschoot: Sint-Gislenus" },
    marriageRecord: { label: "1684 Bassevelde (Assenede)" },
    deathRecord: { label: "1694 Bassevelde (Assenede)" },
    comment: "Moved to Bassevelde by 1684 — the family's arrival in Bassevelde parish."
  },
  {
    id: 11,
    generation: "XII",
    name: "Petrus Van Vlaenderen",
    born: "Jul 16, 1634",
    parish: "Oostwinkel (Zomergem)",
    status: "partial",
    birthRecord: { label: "1634 Oostwinkel (Zomergem)" },
    marriageRecord: { label: "1655 Waarschoot: Sint-Gislenus" }
  },
  {
    id: 12,
    generation: "XIII",
    name: "Noe Van Vlaenderen",
    born: "~1605–1610",
    parish: "Oostwinkel",
    status: "inferred",
    birthRecord: { label: "~1605–1610" },
    marriageRecord: { label: "~1632" },
    deathRecord: { label: "1664 Oostwinkel" },
    comment: "Earliest documented Oostwinkel ancestor. Birth and marriage dates inferred."
  },
  {
    id: 13,
    generation: "XIV",
    name: "Jeremiah Van Vlaendern",
    born: "~1575",
    parish: "Unknown",
    status: "inferred",
    birthRecord: { label: "~1575" },
    marriageRecord: { label: "~1600" },
    comment: "Earliest known ancestor. All dates inferred. Note spelling variant — no final -e in surname."
  }
];
const page$1 = "_page_6h410_21";
const header$1 = "_header_6h410_27";
const title = "_title_6h410_31";
const intro = "_intro_6h410_38";
const legend = "_legend_6h410_47";
const legendItem = "_legendItem_6h410_57";
const legendDot = "_legendDot_6h410_63";
const legendHint = "_legendHint_6h410_70";
const tree = "_tree_6h410_79";
const row = "_row_6h410_83";
const genLabel = "_genLabel_6h410_91";
const connector = "_connector_6h410_104";
const card = "_card_6h410_145";
const cardActive = "_cardActive_6h410_177";
const cardName = "_cardName_6h410_183";
const cardDate = "_cardDate_6h410_187";
const cardParish = "_cardParish_6h410_191";
const badgeRow = "_badgeRow_6h410_214";
const badge = "_badge_6h410_214";
const badge_birth = "_badge_birth_6h410_229";
const badge_marriage = "_badge_marriage_6h410_235";
const badge_death = "_badge_death_6h410_241";
const badgeLink = "_badgeLink_6h410_255";
const badgeLinkIcon = "_badgeLinkIcon_6h410_262";
const detail = "_detail_6h410_269";
const slideIn = "_slideIn_6h410_1";
const detailName = "_detailName_6h410_289";
const detailGrid = "_detailGrid_6h410_296";
const detailRow = "_detailRow_6h410_302";
const detailLabel = "_detailLabel_6h410_306";
const detailValue = "_detailValue_6h410_312";
const detailComment = "_detailComment_6h410_316";
const archiveLink = "_archiveLink_6h410_328";
const sourceNote = "_sourceNote_6h410_339";
const styles = {
  page: page$1,
  header: header$1,
  title,
  intro,
  legend,
  legendItem,
  legendDot,
  legendHint,
  tree,
  row,
  genLabel,
  connector,
  card,
  cardActive,
  cardName,
  cardDate,
  cardParish,
  badgeRow,
  badge,
  badge_birth,
  badge_marriage,
  badge_death,
  badgeLink,
  badgeLinkIcon,
  detail,
  slideIn,
  detailName,
  detailGrid,
  detailRow,
  detailLabel,
  detailValue,
  detailComment,
  archiveLink,
  sourceNote
};
const STATUS_COLOR = {
  documented: "var(--status-documented)",
  partial: "var(--status-partial)",
  inferred: "var(--status-inferred)",
  modern: "var(--status-modern)"
};
function RecordBadge({
  type,
  record
}) {
  const { t } = useTranslation();
  if (!record) return null;
  const label = t(`lineage.record_${type}`);
  const content2 = /* @__PURE__ */ jsx("span", { className: `${styles.badge} ${styles[`badge_${type}`]}`, children: label });
  if (record.url) {
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: record.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: styles.badgeLink,
        title: `${t("lineage.view_archive")}: ${record.label}`,
        "aria-label": `${label}: ${record.label} — ${t("lineage.view_archive")}`,
        children: [
          content2,
          /* @__PURE__ */ jsx("span", { className: styles.badgeLinkIcon, "aria-hidden": "true", children: "↗" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx("span", { title: record.label, "aria-label": `${label}: ${record.label}`, children: content2 });
}
function DetailPanel({ ancestor }) {
  const { t } = useTranslation();
  const rows = [
    { label: t("lineage.detail_born"), value: ancestor.born },
    { label: t("lineage.detail_parish"), value: ancestor.parish },
    { label: t("lineage.detail_birth"), value: ancestor.birthRecord?.label, url: ancestor.birthRecord?.url },
    { label: t("lineage.detail_marriage"), value: ancestor.marriageRecord?.label },
    { label: t("lineage.detail_death"), value: ancestor.deathRecord?.label },
    { label: t("lineage.detail_status"), value: t(`lineage.status_${ancestor.status}`) }
  ].filter((r) => r.value);
  return /* @__PURE__ */ jsxs("div", { className: styles.detail, role: "region", "aria-label": ancestor.name, children: [
    /* @__PURE__ */ jsx("h3", { className: styles.detailName, children: ancestor.name }),
    /* @__PURE__ */ jsx("dl", { className: styles.detailGrid, children: rows.map((row2) => /* @__PURE__ */ jsxs("div", { className: styles.detailRow, children: [
      /* @__PURE__ */ jsx("dt", { className: styles.detailLabel, children: row2.label }),
      /* @__PURE__ */ jsx("dd", { className: styles.detailValue, children: row2.url ? /* @__PURE__ */ jsxs(
        "a",
        {
          href: row2.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: styles.archiveLink,
          children: [
            row2.value,
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " ↗" })
          ]
        }
      ) : row2.value })
    ] }, row2.label)) }),
    ancestor.comment && /* @__PURE__ */ jsx("p", { className: styles.detailComment, children: ancestor.comment })
  ] });
}
function LineagePage() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const activeAncestor = vanVlaenderenLineage.find((a) => a.id === activeId) ?? null;
  const handleSelect = (id) => {
    setActiveId((prev) => prev === id ? null : id);
  };
  return /* @__PURE__ */ jsxs("main", { className: styles.page, children: [
    /* @__PURE__ */ jsxs("header", { className: styles.header, children: [
      /* @__PURE__ */ jsx("h1", { className: styles.title, children: t("lineage.page_title") }),
      /* @__PURE__ */ jsx("p", { className: styles.intro, children: t("lineage.page_intro") })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      maxWidth: "780px",
      margin: "0 auto 1.5rem",
      padding: "1rem 1.5rem",
      background: "rgba(232,184,48,0.04)",
      border: "1px solid rgba(232,184,48,0.18)",
      borderRadius: "4px",
      fontSize: "0.875rem",
      color: "var(--text-muted)",
      lineHeight: 1.7
    }, children: [
      "The surname Van Vlaenderen — ",
      /* @__PURE__ */ jsx("em", { children: "from Flanders" }),
      " — was anything but generic in a noble context. The black lion on gold that defines Flemish heraldic identity had been the comital seal device since at least 1163, when Count Philip of Alsace placed it on his seal matrix, sparking a wave of imitation across the Flemish nobility. In medieval Flanders, territorial designations functioned as dynastic and political language: scholarly research on twelfth-century noble sigillography has shown that aristocratic families used visual and symbolic culture tied to territory as an explicit marker of identity and claim. To carry the name ",
      /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
      " in an elite milieu was to carry that symbolism.",
      " ",
      /* @__PURE__ */ jsx("span", { style: { fontStyle: "italic", opacity: 0.75 }, children: 'Nieus, "Aristocratic seal ownership in twelfth-century Flanders," 2021, pp. 23–26.' })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.legend, role: "list", "aria-label": t("lineage.legend_label"), children: [
      ["documented", "partial", "inferred", "modern"].map((s) => /* @__PURE__ */ jsxs("div", { className: styles.legendItem, role: "listitem", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: styles.legendDot,
            style: { background: STATUS_COLOR[s] },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx("span", { children: t(`lineage.status_${s}`) })
      ] }, s)),
      /* @__PURE__ */ jsx("span", { className: styles.legendHint, children: t("lineage.click_hint") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles.tree, role: "list", "aria-label": t("lineage.tree_label"), children: vanVlaenderenLineage.map((ancestor, index) => {
      const isActive = activeId === ancestor.id;
      const isFirst = index === 0;
      const isLast = index === vanVlaenderenLineage.length - 1;
      return /* @__PURE__ */ jsxs("div", { className: styles.row, role: "listitem", children: [
        /* @__PURE__ */ jsx("span", { className: styles.genLabel, "aria-label": `${t("lineage.generation")} ${ancestor.generation}`, children: ancestor.generation }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: styles.connector,
            "aria-hidden": "true",
            "data-first": isFirst || void 0,
            "data-last": isLast || void 0
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `${styles.card} ${isActive ? styles.cardActive : ""}`,
            style: { "--status-color": STATUS_COLOR[ancestor.status] },
            onClick: () => handleSelect(ancestor.id),
            "aria-pressed": isActive,
            "aria-expanded": isActive,
            "aria-controls": isActive ? `detail-${ancestor.id}` : void 0,
            children: [
              /* @__PURE__ */ jsx("span", { className: styles.cardName, children: ancestor.name }),
              ancestor.born && /* @__PURE__ */ jsxs("span", { className: styles.cardDate, children: [
                t("lineage.born_prefix"),
                " ",
                ancestor.born
              ] }),
              /* @__PURE__ */ jsx("span", { className: styles.cardParish, children: ancestor.parish }),
              /* @__PURE__ */ jsxs("span", { className: styles.badgeRow, "aria-label": t("lineage.records_available"), children: [
                /* @__PURE__ */ jsx(RecordBadge, { type: "birth", record: ancestor.birthRecord }),
                /* @__PURE__ */ jsx(RecordBadge, { type: "marriage", record: ancestor.marriageRecord }),
                /* @__PURE__ */ jsx(RecordBadge, { type: "death", record: ancestor.deathRecord })
              ] })
            ]
          }
        )
      ] }, ancestor.id);
    }) }),
    activeAncestor && /* @__PURE__ */ jsx("div", { id: `detail-${activeAncestor.id}`, children: /* @__PURE__ */ jsx(DetailPanel, { ancestor: activeAncestor }) }),
    /* @__PURE__ */ jsxs("p", { className: styles.sourceNote, children: [
      t("lineage.source_note"),
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://agatha.arch.be",
          target: "_blank",
          rel: "noopener noreferrer",
          className: styles.archiveLink,
          children: "Rijksarchief Gent (AGATHA)"
        }
      ),
      t("lineage.source_note_2")
    ] })
  ] });
}
const READING_LIST = [
  {
    group: "The County of Flanders and the Comital House",
    entries: [
      {
        author: "Warlop, E.",
        year: "1975–76",
        title: "The Flemish Nobility Before 1300",
        note: "The foundational English-language prosopographical study of Flemish noble families. The alphabetic repertory of noble families in volumes 3–4 is an essential reference for tracing any lineage with pre-1300 roots in Flanders, including the van Praet family. Available in four volumes.",
        links: [
          { label: "Amazon", url: "https://www.amazon.com/s?k=Warlop+Flemish+Nobility+Before+1300" },
          { label: "Free download (Internet Archive)", url: "https://archive.org/details/flemishnobilityb0002unse_q5k3" },
          { label: "Used copies (AbeBooks)", url: "https://www.abebooks.com/book-search/title/flemish-nobility-before-1300/" }
        ]
      },
      {
        author: "Prevenier, W. & Blockmans, W.",
        year: "1986",
        title: "The Burgundian Netherlands",
        note: "The standard illustrated survey of the Burgundian Low Countries 1380–1530 — exactly the period in which the van Vlaenderen surname crystallises and the Praet line flourishes. Provides essential political and cultural context for Louis de Male and his bastard children. Richly illustrated.",
        links: [
          { label: "Amazon", url: "https://www.amazon.com/Burgundian-Netherlands-Walter-Prevenier/dp/0521306116" },
          { label: "Free download (Internet Archive)", url: "https://archive.org/details/burgundiannether0000prev" },
          { label: "Used copies (AbeBooks)", url: "https://www.abebooks.com/9780521306119/Burgundian-Netherlands-Prevenier-Walter-Wim-0521306116/plp" }
        ]
      },
      {
        author: "Blockmans, W. & Prevenier, W.",
        year: "1999",
        title: "The Promised Lands: The Low Countries Under Burgundian Rule, 1369–1530",
        note: "The accessible single-volume companion to The Burgundian Netherlands. Organised thematically around the key problems of Burgundian history — state formation, social structure, urban economy — rather than as a chronological narrative. Better suited as a first read than the 1986 volume.",
        links: [
          { label: "Amazon", url: "https://www.amazon.com/Promised-Lands-Countries-Burgundian-Rule/dp/0812216504" },
          { label: "Used copies (AbeBooks)", url: "https://www.abebooks.com/book-search/title/promised-lands-low-countries-under-burgundian/" }
        ]
      }
    ]
  },
  {
    group: "Flemish Nobility and Social Structure",
    entries: [
      {
        author: "Buylaert, F.",
        year: "2010",
        title: "Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen",
        note: `The most important recent study of the Flemish nobility in the 14th–15th centuries, by the same Buylaert cited in FMG MedLands for the Josse de Flandre cadet branch. Demonstrates the nobility's adaptability and social mobility during exactly the period our research covers. In Dutch. An English-language article by the same author ("The late medieval crisis of the nobility reconsidered: the case of Flanders", Journal of Social History 45, 2012) covers the main arguments and is freely available.`,
        links: [
          { label: "Amazon", url: "https://www.amazon.com/Eeuwen-Van-Ambitie-Laatmiddeleeuws-Verhandelingen/dp/9065690751" },
          { label: "Free download (Academia.edu)", url: "https://www.academia.edu/2418411/Frederik_Buylaert_Eeuwen_van_ambitie" }
        ]
      }
    ]
  },
  {
    group: "The Meetjesland: Regional History and Rural Economy",
    entries: [
      {
        author: "Augustyn, B. & Thoen, E.",
        year: "1987",
        title: "'Van veen tot bos: Krachtlijnen van de landschapsevolutie van het Noordvlaamse Meetjesland van de 12e tot de 19e eeuw'",
        note: "The key article on the landscape history of the northern Flemish Meetjesland from the 12th to the 19th century — covering precisely the geographic area of our research. Documents the transition from peat extraction to the sandy-loam landscape that characterises the area in the parish-record period. In Dutch. Published in Historisch-Geografisch Tijdschrift.",
        availability: "Not widely available outside Belgian library systems. Can be requested through interlibrary loan or directly from the authors' institutional repositories at Ghent University."
      }
    ]
  },
  {
    group: "Archival Research Methodology and Palaeography",
    entries: [
      {
        author: "Munby, L.",
        year: "2003",
        title: "Reading and Understanding Old Documents: A Guide to Palaeography",
        note: "A practical English-language guide to reading historical handwriting, focused on secretary hand and other scripts common in early modern documents. Useful companion for working through the kinds of documents encountered in Belgian state archives.",
        links: [
          { label: "Amazon", url: "https://www.amazon.com/s?k=Munby+Reading+Understanding+Old+Documents+Palaeography" },
          { label: "Used copies (AbeBooks)", url: "https://www.abebooks.com/book-search/title/reading-understanding-old-documents/" }
        ]
      },
      {
        author: "Moens, J.",
        year: "Various editions",
        title: "Inleiding tot de historische kritiek",
        note: "Standard Belgian introduction to historical source criticism and archival methodology. Covers the evaluation of primary sources, dating conventions, and document types encountered in Flemish archives. In Dutch. Available through Ghent University library and Belgian academic publishers."
      }
    ]
  },
  {
    group: "Digital Genealogy and Genetic Methods",
    entries: [
      {
        author: "Bettinger, B. & Wayne, D.",
        year: "2016",
        title: "Genetic Genealogy in Practice",
        note: "The National Genealogical Society's standard reference for DNA evidence in genealogical research. Covers Y-DNA, autosomal, and mtDNA methods with specific guidance on using DNA to break through brick walls — the primary use case for this project's Y-DNA research thread.",
        links: [
          { label: "Amazon", url: "https://www.amazon.com/Genetic-Genealogy-Practice-National-Genealogical/dp/1935815296" },
          { label: "Used copies (AbeBooks)", url: "https://www.abebooks.com/book-search/title/genetic-genealogy-practice/" }
        ]
      }
    ]
  },
  {
    group: "Primary Sources and Reference Works",
    entries: [
      {
        author: "Cawley, C.",
        year: "2025 (v5.0)",
        title: "MedLands: Flanders, Hainaut (online)",
        note: "The Foundation for Medieval Genealogy's encyclopaedia of territories and noble families in the medieval western world. The primary reference for all comital and bastard-line citations in this project. Free to access online. Version 5.0 updated January 2025.",
        links: [
          { label: "Free access (FMG)", url: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" }
        ]
      },
      {
        author: "Vredius, O. (Olivier de Wrée)",
        year: "1643",
        title: "Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem, Pars Secunda: Continens Probationes XII posteriorum tabularum",
        note: "Published in Bruges in 1643, this is the 17th-century primary source compilation that is the direct basis for all bastard-line charter evidence in this project. Tabula XVI, foll. 275–288 covers Victor van Vlaenderen and all collateral bastard lines. Note: Vredius also published a separate Sigilla Comitum Flandriae (Bruges, 1639) — a study of the counts' seals — which is a different work. The genealogical proofs for bastard lines are in the 1643 Genealogia."
      }
    ]
  },
  {
    group: "Heraldry and Sigillography",
    entries: [
      {
        author: "Nieus, Jean-François",
        year: "2021",
        title: "Aristocratic seal ownership in twelfth-century Flanders: A world in between",
        note: "A sigillographic study of noble seal usage in the County of Flanders, 1071–1200. Establishes that territorial designations in the elite Flemish milieu functioned as political and dynastic language, not mere geographic labels — the strongest contextual argument against the pure-toponymy hypothesis for the Van Vlaenderen surname. Key findings: Philip of Alsace places the Flemish lion on the comital seal from 1163; Michael II of Harnes (castellan of Cassel) confirmed at the Dover Recognitio; Baldwin II lord of Praat confirmed c.1190–1200. Preprint; forthcoming in peer-reviewed publication.",
        links: [
          { label: "Preprint (Academia.edu)", url: "https://www.academia.edu" }
        ],
        availability: "Preprint on file with project. Cite as forthcoming until peer-reviewed publication confirmed."
      }
    ]
  }
];
function MethodologyPage() {
  const { goToResearch } = useNav();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Methodology & Sources — Van Vlaenderen Research | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Transcription and translation methodology for the Van Vlaenderen archival research project, plus a curated reading list of primary and secondary sources." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/methodology" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Methodology & Sources — Van Vlaenderen Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "How archival documents are transcribed and translated, and the historiographical sources that underpin the research." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/methodology" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: "center top" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Research Foundations" }),
        /* @__PURE__ */ jsx("h1", { children: "Methodology & Sources" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "How archival documents are read, transcribed, and translated — and the published works that form the historiographical foundation for this research." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Research Foundations" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Transcription and Translation Methodology" }),
        /* @__PURE__ */ jsx("p", { children: "Archival documents in this project are transcribed using an iterative, multi-system approach. Gemini (Google) serves as the primary real-time reading tool: integrated directly into the browser, it can analyse document images without a separate upload step, allowing the researcher to ask questions about specific characters, words, or passages while actively zooming and navigating the original scan. This ambient availability makes it the natural first pass for difficult passages." }),
        /* @__PURE__ */ jsx("p", { children: "Outputs from Gemini are then cross-checked against independent readings from Claude (Anthropic), GPT-4 (OpenAI), Transkribus, and Tryleo. Where readings converge across systems, confidence is high. Where they diverge, the researcher returns to the original image, zooming to individual characters and applying knowledge of the letter forms, abbreviations, and spelling conventions of the period." }),
        /* @__PURE__ */ jsx("p", { children: "Translation follows the same iterative logic. Early modern Dutch and Latin passages are translated independently by multiple systems, with the researcher cross-checking against known vocabulary, named entities already established in the research, and the documentary context. Passages involving specialist palaeographic challenges — secretary hand abbreviations, damaged text, unusual personal names — are treated as uncertain until verified by at least two independent readings." }),
        /* @__PURE__ */ jsx("p", { children: "Each AI system is given learning samples from the same document hand before being asked to transcribe difficult passages, allowing the system to calibrate to individual scribal idiosyncrasies. This is the same principle professional palaeographers apply when learning a new hand." }),
        /* @__PURE__ */ jsx("p", { children: "AI tools in this project are research instruments, not citation sources. Every claim on this site traces to a named primary or secondary authority. Tool outputs that cannot be verified against a named source are flagged as provisional." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Recommended Reading" }),
        /* @__PURE__ */ jsx("p", { children: "The following works form the historiographical foundation for this project. They are the sources against which our findings are tested and the authorities whose frameworks we apply. Entries are grouped by theme. Acquisition links are provided where available." }),
        READING_LIST.map((group) => /* @__PURE__ */ jsxs("div", { style: { marginTop: "2.5rem" }, children: [
          /* @__PURE__ */ jsx("h3", { style: {
            color: "var(--gold)",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
            paddingBottom: "0.5rem",
            borderBottom: "1px solid rgba(232,184,48,0.2)"
          }, children: group.group }),
          group.entries.map((entry, i) => /* @__PURE__ */ jsxs("div", { style: {
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(232,184,48,0.15)",
            borderRadius: "4px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ jsxs("p", { style: { marginBottom: "0.4rem" }, children: [
              /* @__PURE__ */ jsx("strong", { style: { color: "var(--text-primary)" }, children: entry.author }),
              " ",
              /* @__PURE__ */ jsxs("span", { style: { color: "var(--text-muted)", fontSize: "0.9rem" }, children: [
                "(",
                entry.year,
                ")."
              ] }),
              " ",
              /* @__PURE__ */ jsxs("em", { style: { color: "var(--gold-light)" }, children: [
                entry.title,
                "."
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", margin: "0.5rem 0" }, children: entry.note }),
            entry.availability && /* @__PURE__ */ jsx("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)", marginTop: "0.4rem" }, children: /* @__PURE__ */ jsxs("em", { children: [
              "Note: ",
              entry.availability
            ] }) }),
            entry.links && entry.links.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.75rem" }, children: entry.links.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: researchStyles.refLink,
                style: { fontSize: "0.85rem" },
                children: [
                  link.label,
                  " →"
                ]
              },
              link.url
            )) })
          ] }, i))
        ] }, group.group))
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(232,184,48,0.15)" }, children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToResearch("main"),
          className: researchStyles.refLink,
          style: { background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem" },
          children: "← Back to Research Overview"
        }
      ) })
    ] })
  ] });
}
const meetjeslandMap = "/assets/meetjesland-map-D7thb5CK.jpg";
function GapDossierPage() {
  const { goTo } = useNav();
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Documentary Gap, 1447–1580 | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "The 130-year gap between Adam van Vlaendren (last attested 1447) and the Meetjesland parish cluster (fl. 1547–). Archival evidence in hand, searches completed, active targets, and working hypotheses." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/gap-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "The Documentary Gap, 1447–1580 — Van Vlaenderen Research" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Named gap between the comital bastard lines and the Meetjesland parish cluster. Evidence in hand, active archival targets, and three working hypotheses." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/gap-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"The Documentary Gap, 1447–1580","description":"The evidentiary gap between the last confirmed comital-line van Vlaenderen bearer (1447) and the Meetjesland parish cluster (fl. 1547–). Archival evidence, search record, active targets, and working hypotheses.","url":"https://vanvlaenderen.org/research/gap-dossier","inLanguage":"en","dateModified":"2026-04-12","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"The Gap (1447–1580)","item":"https://vanvlaenderen.org/research/gap-dossier"}]}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${meetjeslandMap})`, backgroundPosition: "center center" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Research Dossier" }),
        /* @__PURE__ */ jsx("h1", { children: "The Documentary Gap" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "1447–1580. The span between the last confirmed comital-line bearer and the first Meetjesland parish generation. This dossier names the gap, records what has been searched, and tracks the archival work required to close it." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Research Dossier" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: "About this dossier" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)" }, children: "This dossier documents what is currently unknown. A gap of approximately 130 years separates the last confirmed bearers of the van Vlaenderen surname in the medieval comital record from the earliest confirmed Van Vlaenderen generation in the Meetjesland parish registers. Naming the gap precisely, recording what has been searched, and identifying the archival targets most likely to close it is itself a research contribution. This page will be updated as evidence emerges." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", marginTop: "1rem", fontStyle: "italic", color: "var(--text-muted)", borderTop: "1px solid rgba(232, 184, 48, 0.1)", paddingTop: "1rem" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Evidence levels" }),
          " follow the same four-tier framework used throughout the research dossiers:",
          /* @__PURE__ */ jsx("strong", { children: " Directly Attested" }),
          " (primary source; quoted or in hand),",
          /* @__PURE__ */ jsx("strong", { children: " Strongly Corroborated" }),
          " (concordant published sources),",
          /* @__PURE__ */ jsx("strong", { children: " Probable" }),
          " (source-based; fuller inspection pending),",
          /* @__PURE__ */ jsx("strong", { children: " Hypothesis" }),
          " (inference proposed for archival testing)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Problem" }),
        /* @__PURE__ */ jsx("p", { children: "The Van Vlaenderen research has two well-documented clusters separated by a substantial chronological gap." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "The lower anchor" }),
          " — the Meetjesland parish cluster — is well established from the 1580s onward. The earliest generation in the documented American line is Jeremiah van Vlaenderen, born approximately 1575 in the Meetjesland. The cluster concentrates in Waarschoot, Oostwinkel, Bassevelde, and adjacent parishes, with continuous parish-record coverage from the 1580s through Charles Louis van Vlaenderen's emigration in 1881. The 1547 Bruges estate records (TBO 184, bundle 21300) push this anchor back further — placing Van Vlaenderen individuals in the same geographic zone approximately 30 years before Jeremiah's birth."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "The upper anchor is not a single line but two" }),
          ", both descending from Louis II de Male and both documented using ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " as a hereditary surname."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("em", { children: "Victor's line." }),
          " Victor van Vlaenderen's three natural sons — Lodewyc, Janne, and Adam — are directly attested across three charters spanning 1427 to 1447. Adam van Vlandren is the last confirmed bearer of the surname in this line, his final attestation being a charter of 18 March 1447 N.S. After that date, no further record of any of Victor's sons has been located in any source yet consulted. The gap between Adam's last attestation and the lower anchor is approximately 130 years."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("em", { children: "The Praet line." }),
          " Louis Friese van Vlaenderen (d. Nicopolis, 1396) founded a parallel comital-bastard branch whose surname use is documented across six generations through to Jan II van Vlaenderen (d. 10 December 1545). The legitimate Praet male line ends with Jan II, who died without issue. However, a documented cadet branch — Josse de Flandre, son of Johan I, married Martina van Moerkerke — survived until at least 1592, directly overlapping with the first parish-record generation of the Meetjesland cluster. The surname form used by Josse's descendants has not yet been confirmed in sources currently reviewed, but the branch is documented and the question remains open."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The gap, precisely stated, is not a single span but a structural problem: two comital lines bearing the surname are documented above 1545; a commoner cluster bearing the surname is documented below 1547; and no record has yet been located connecting either upper line to the lower cluster." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The 1517 Knesselare Charter — Closest Known Bridge ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The single most significant piece of evidence currently in hand for the gap period is a charter of 1517 [FMG 891] recording Lodewijk IV van Vlaenderen holding six fiefs at Knesselare from the seigneurie of Wessegem." }),
        /* @__PURE__ */ jsx("p", { children: "Knesselare sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen Meetjesland cluster. The Wessegem seigneurie is the same lordship held by Victor van Vlaenderen and his sons in the 15th century. This charter therefore places a Praet-line van Vlaenderen in direct territorial contact with the research zone, holding rights derived from Victor's former lordship, 30 years before the TBO 184 cluster and 58 years before Jeremiah's estimated birth." }),
        /* @__PURE__ */ jsx("p", { children: "This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderen cluster. But it confirms that the two lines were operating in overlapping territory during the gap period, and that the Wessegem seigneurie — the geographic and genealogical anchor of the entire research — remained in van Vlaenderen hands well into the 16th century." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Archival note:" }),
          " cited in FMG MedLands [891] via Vredius (1643). Underlying archive not yet directly consulted."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Evidence from the Gap Period" }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "1.5rem" }, children: [
          "Bruges State Archives, TBO 184, bundle 21300 (1547) ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Estate records for Joos, Jacob, and Phillip van Vlaenderen, dated 1547. Jacob's land is described as adjacent to Phillip's — a strong indicator of family relationship. These are the earliest primary sources yet located for the Meetjesland cluster and predate the first parish-record generation by approximately 30 years. They are Bucket 4 hereditary surname attestations. No connection to either comital line is established." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Archival signature:" }),
          " Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21300. Consulted April 2026. Reference: case 2026/0451."
        ] }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "2rem" }, children: [
          "Bruges State Archives, TBO 184, bundle 21302 (1549) ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Guardianship record for Joos van Vlaenderen, 1549. Confirms the same Meetjesland cluster two years after bundle 21300." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Archival signature:" }),
          " Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21302. Consulted April 2026. Reference: case 2026/0451."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Search Record — Negative and Partial Results" }),
        /* @__PURE__ */ jsx("p", { children: "The following sources have been searched without producing a bridging record:" }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: [
          "Debrabandere, ",
          /* @__PURE__ */ jsx("em", { children: "Woordenboek van de familienamen in Zeeland" }),
          " (WFZ), 2009"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Searched in full. One attestation in Zeeland (Aardenburg, 1309–10) refers to Count Robert de Béthune himself — Bucket 2 titular usage, not a surname bearer. No hereditary van Vlaenderen cluster in Zeeland. Strengthens East Flanders as the surname's geographic core." }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: [
          "Debrabandere, ",
          /* @__PURE__ */ jsx("em", { children: "Woordenboek van de familienamen in België en Noord-Frankrijk" }),
          " (WFB2), 2003"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Van Vlaenderen entry read via CBG Familienamenbank. Pure place-name classification; three attestations (1280, 1376, 1426), all pre-cluster, none in the Meetjesland. Entry uncorrected in 2010 and 2019 corrigenda. Does not engage with the East Flanders parish-record concentration." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "AGATHA portal — Staten van Goed searches, March 2026" }),
        /* @__PURE__ */ jsx("p", { children: "Searched Ambacht Assenede I & II, Boekhoute I–III, Waarschoot/Oostwinkel/Ronsele, and Heerlijkheid Praet met Oedelem for Van Vlaenderen entries to build the Rijksarchief Gent request list. Results being processed." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "Familiekunde Vlaanderen, Aalter — visit March 2026" }),
        /* @__PURE__ */ jsx("p", { children: "Archivist absent during visit. Follow-up correspondence pending." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "Rijksarchief Gent — Goal 1 and Goal 2 threads (appointment March 31, 2026)" }),
        /* @__PURE__ */ jsx("p", { children: "Twenty documents requested across two research threads. Results being processed. Any record naming a Van Vlaenderen individual between 1447 and 1580 in the Meetjesland zone would be significant." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Active Archival Targets" }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: [
          "1. Gysseling & Debrabandere, ",
          /* @__PURE__ */ jsx("em", { children: "Persoonsnamen in de Vier Ambachten" }),
          " (GYSS. 1999), KCTD vol. 71"
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Personal names in Boekhoute, Assenede, Axel, and Hulst — the heart of the research zone — in the 14th and 15th centuries. Free via the KCTD portal at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://openjournals.ugent.be/hctd", target: "_blank", rel: "noopener noreferrer", className: researchStyles.refLink, children: "openjournals.ugent.be/hctd" }),
          ". The single highest-priority unread source."
        ] }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "2. Buylaert — Josse de Flandre cadet branch documentation" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Josse de Flandre's line (son of Johan I) is documented by Buylaert [FMG 881, 882] as surviving until at least 1592 — directly overlapping with the first Meetjesland parish-record generation. The underlying Buylaert prosopographical sources have not been consulted directly. Tracing Josse's children and grandchildren into parish or estate records, whether under ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("em", { children: "de Flandre" }),
          ", or a variant form, is the shortest archival path to closing the Praet gap."
        ] }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "3. Rijksarchief Gent — Raad van Vlaanderen records" }),
        /* @__PURE__ */ jsx("p", { children: "Court records of the Council of Flanders. Family disputes, property litigation, and testamentary proceedings often preserved surname continuity across generations that parish records missed. Recommended next archival target for both the Victor and Praet threads." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "4. Leenregisters — Kasselrij Oudburg and Brugse Vrije" }),
        /* @__PURE__ */ jsx("p", { children: "The Wessegem seigneurie passed through van Vlaenderen hands from Victor through Lodewijk IV (confirmed 1517). Leenregisters tracking those holdings may record van Vlaenderen individuals through the gap period. The chain of Wessegem tenure is itself an archival thread worth following independently of the surname record." }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: "5. Verbeurde Goederen 1382 (VG), ARA Brussels, Rekenkamer 1163" }),
        /* @__PURE__ */ jsx("p", { children: "Confiscated goods list compiled immediately after the Ghent rebellion of 1382, during Louis II de Male's final years. May contain van Vlaenderen individuals from the comital milieu. Requires ARA Brussels visit or remote request." }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1rem", marginBottom: "0.5rem", marginTop: "1.5rem" }, children: [
          "6. Limburg-Stirum, ",
          /* @__PURE__ */ jsx("em", { children: "Cartulaire de Louis de Male" }),
          " (CLM), Bruges, 1898–1901"
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Primary cartulary for Louis II de Male's reign with an alphabetical personal names index. Explicitly cited in the WFB2 apparatus. Held at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "http://lib.ugent.be/catalog/rug01:002005149", target: "_blank", rel: "noopener noreferrer", className: researchStyles.refLink, children: "Ghent University Library" }),
          ". Most direct route to additional 14th-century charter evidence for either comital line."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Working Hypotheses" }),
        /* @__PURE__ */ jsx("p", { children: "Three hypotheses are currently viable. They are not mutually exclusive — the 1547 TBO 184 cluster could represent a mixed population drawing from more than one origin." }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "1.5rem" }, children: [
          "Hypothesis A — Descent from Victor's line ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "One of Victor's three sons (most probably Adam, the last attested) had descendants who settled in the Meetjesland as the family's comital identity faded into the commoner population. The surname persisted as a hereditary identifier. The gap would be closed by locating estate or leenregister records naming van Vlaenderen individuals in the Ursel/Assenede/Boekhoute zone between 1447 and 1547." }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: "Current status: plausible. Not evidenced. ~130-year gap." }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "2rem" }, children: [
          "Hypothesis B — Descent from the Praet line ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Josse de Flandre cadet branch, documented to at least 1592, represents a Praet-line van Vlaenderen population that survived into the parish-record period. The 1517 Knesselare charter places Lodewijk IV in direct territorial contact with the research zone. Under this hypothesis the TBO 184 individuals and/or Jeremiah's generation descend from Josse's branch. The gap would be closed by tracing Josse's descendants through Buylaert's sources and into Meetjesland records." }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: [
          "Current status: plausible. Josse's branch is the shortest documentary path. Surname form in his descendants not yet confirmed in sources reviewed. Note: in late medieval and early modern records, the alternation between ",
          /* @__PURE__ */ jsx("em", { children: "de Flandre" }),
          " and ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " often reflects the scribe's working language (Latin/French vs. Dutch) rather than the family's chosen identity — the same individual can appear under both forms in different documents."
        ] }),
        /* @__PURE__ */ jsxs("h3", { style: { color: "var(--gold)", fontSize: "1.1rem", marginBottom: "0.75rem", marginTop: "2rem" }, children: [
          "Hypothesis C — Independent Bucket 4 emergence ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Meetjesland Van Vlaenderens acquired the surname independently of either comital line — through the Bucket 3 mechanism (an office-holder's son inheriting the name rather than the office) or through geographic association with the former comital territory. Under this hypothesis no documentary chain connects the clusters and the gap is structural rather than resolvable by archival work alone." }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }, children: "Current status: cannot be excluded. Y-DNA testing is the primary tool for distinguishing Hypothesis C from Hypotheses A and B." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Y-DNA as a Parallel Verification Strategy" }),
        /* @__PURE__ */ jsx("p", { children: "Documentary research alone cannot currently distinguish between the three working hypotheses. Y-DNA testing offers a complementary path: if additional male-line Van Vlaenderen descendants can be recruited for comparison, a shared haplogroup across geographically separated lines would support a common patrilineal ancestor (Hypotheses A or B), while divergent haplogroups between branches would support independent emergence (Hypothesis C). The American line has been tested (haplogroup R-FT1573, Big Y-700); no close database matches have been found to date." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The full genetic genealogy project — including haplogroup details, methodology, and how to participate — is documented on the",
          " ",
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => goTo("dna"),
              style: { background: "none", border: "none", cursor: "pointer", padding: 0, color: "var(--gold)", textDecoration: "underline", font: "inherit" },
              children: "DNA page"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.referenceList, children: [
        /* @__PURE__ */ jsx("h2", { children: "Notes & Bibliography" }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
          "Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21300 (1547). Estate records, Joos, Jacob, and Phillip van Vlaenderen. Consulted April 2026. Reference: case 2026/0451."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
          "Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21302 (1549). Guardianship record, Joos van Vlaenderen. Consulted April 2026. Reference: case 2026/0451."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
          "Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025. Adam van Vlaendren [855]; Lodewijk IV Knesselare charter [891]; Josse de Flandre [881, 882].",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Foundation for Medieval Genealogy, MedLands: Flanders & Hainaut" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
          "Buylaert, Frederik. Prosopographical research on Flemish nobility. Cited via FMG MedLands [881, 882] for Josse de Flandre and cadet Praet branches. Underlying sources not yet directly consulted."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
          "Debrabandere, Frans. ",
          /* @__PURE__ */ jsx("em", { children: "Woordenboek van de familienamen in België en Noord-Frankrijk." }),
          " ",
          "LJ Veen, 2003. Van Vlaenderen entry via CBG Familienamenbank.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.cbgfamilienamen.nl", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "cbgfamilienamen.nl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "6." }),
          "Debrabandere, Frans. ",
          /* @__PURE__ */ jsx("em", { children: "Woordenboek van de familienamen in Zeeland." }),
          " 2009. Searched in full — no hereditary surname bearers.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Free PDF, naamkunde.net" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "7." }),
          "Gysseling, M. & Debrabandere, F. ",
          /* @__PURE__ */ jsx("em", { children: "Persoonsnamen in de Vier Ambachten, 14e en 15e eeuw." }),
          " ",
          "KCTD vol. 71 (1999), pp. 491–588.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://openjournals.ugent.be/hctd", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Free via KCTD portal" }),
          " ",
          "— not yet read."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "8." }),
          "Limburg-Stirum, Th. de. ",
          /* @__PURE__ */ jsx("em", { children: "Cartulaire de Louis de Male, comte de Flandre." }),
          " ",
          "Bruges, 1898–1901. Held at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "http://lib.ugent.be/catalog/rug01:002005149", className: researchStyles.refLink, target: "_blank", rel: "noopener noreferrer", children: "Ghent University Library" }),
          " ",
          "— not yet consulted."
        ] })
      ] })
    ] })
  ] });
}
const researchTodo = `# Lions of Flanders — Research To-Do List
*Last updated: April 16, 2026*

---

## 🔴 HIGH PRIORITY

### Debrabandere Source Chain — Immediate Targets
- [x] Obtain **WFB2** entry for Van Vlaenderen — **COMPLETE via CBG Familienamenbank** (cbgfamilienamen.nl, free, no login) — see extracted entry below
- [x] Read the **actual dictionary entry for Vlaenderen / van Vlaenderen** in WFB2 — **COMPLETE** — see extracted entry and analysis below
- [ ] **DEBR. 1958** = *Kortrijkse persoonsnamen omstreeks 1400*, Debrabandere, 1958, 261pp. — **West Flanders (Kortrijk), not East Flanders** — relevant only as the intermediate source for the 1426 Jaquemaerde attestation in the citation chain. If closing that chain to the original Kortrijk register matters, worth obtaining (€10 at Miagenea, Ghent, Belgium/NL shipping only: https://www.booksinbelgium.be/nl/b/kortrijkse-persoonsnamen-omstreeks-1400-f-debrabandere-12983694). Lower priority than GYSS. 1999 for East Flanders surname research.
- [ ] **DEBR. 1980** = *Kortrijkse Naamkunde 1200-1300 met een kumulatief familienamenregister*, Debrabandere, 1980, 288pp. — **West Flanders (Kortrijk), not East Flanders** — lower priority than GYSS. 1999. Cumulative family names index across the Kortrijk series is the main value, but WFB2 via CBG already covers this comprehensively for surname purposes. Defer until GYSS. 1999 and DEBR. 1999 (Vier Ambachten / East Flanders) are searched. Available €20 from Collectomundi, Belgium/NL shipping only: https://www.booksinbelgium.be/nl/b/kortrijkse-naamkunde-1200-1300-met-een-kumulatief-familienamenregister-f-de-brabandere-12395225
- [ ] Locate **DEBR. 1980'** = *Persoonsnamen in de Leiestreek voor 1200* — Leie valley names before 1200
- [x] Download **WFZ** (Debrabandere, *Dict. of Family Names in Zeeland*, 2009) — **COMPLETE** — see WFZ entry extracted below

### CLM — Louis de Male Cartulary (HIGHEST PRIORITY for Victor hypothesis)
- [ ] Locate **CLM** = Th. de Limburg-Stirum, *Cartulaire de Louis de Male, comte de Flandre* (1348–1358), Brugge, 1898–1901 — **Note:** CLM is explicitly cited in the WFB2 foreword bibliography (cbgfamilienamen.nl/nfb/aanhangsels/wfb-voorwerk.pdf), confirming Debrabandere used it as a source — strengthens case for obtaining it. Ghent University Library holds it (lib.ugent.be/catalog/rug01:002005149); 2017 reprint on AbeBooks
- [ ] Search CLM for Victor van Vlaenderen, Wessegem/Ursel lordship, and the 1441/1442 charter naming Lodewyc, Janne, and Adam van Vlaendren

### 1280 Catharina de Flandria — Earliest Attestation
- [ ] Trace exact citation in WFB2 for *1280 Catharina de Flandria*
- [ ] Check **Corpus-Gysseling (CG)** = *Corpus van Middelnederlandse teksten (tot en met het jaar 1300)*
- [ ] Determine her status context: widow / religious / noblewoman / urban citizen / landholder

### West Flanders / Third Origin Thread
- [ ] Investigate **Jacob van Vlaendre, Ypres, 1376** — determine record type and residency vs. transaction
- [ ] Investigate **Jaquemaerde van Vlaendren, Kortrijk, 1426** — civic/estate record; source DEBR. 1958
- [ ] Assess whether Ypres–Kortrijk arc connects to **Volckerinckhove cluster** as coherent western branch

### Comital Bastard Line
- [ ] Evaluate whether any of **Louis I de Crécy's** illegitimate children have documented descendants in the Lille / West Flanders zone
- [ ] Confirm whether the Geneanet Flandres Bâtards chart continues to Louis II de Male's bastards (swipe right)

---

### NEW — April 2026 Research Leads

**HIGHEST PRIORITY — Arnoldus × De Jaeghere before 1600**
- [ ] Geneanet deduplication exercise surfaced an **Arnoldus van Vlaenderen × Maria de Jaeghere** pairing dated c.1490. Documented line has Arnoldus "Aert" × Maeyken De Yaeghere, married Waarschoot 1620, died Oostwinkel 1666.
- [ ] Three interpretations: (1) date error — Geneanet user guessed c.1490 birth for the 1620 Arnoldus; (2) genuine earlier individual — first named bridge candidate for 1447–1568 gap; (3) impossible — eliminated. Interpretation 2 is highest consequence.
- [ ] **Action**: search parish record database and Waarschoot/Oostwinkel/Meetjesland records for any Van Vlaenderen × De Jaeghere pairing before 1600. If found with plausible dates (c.1480–1560), this is the first potential named individual bridging the Adam (1447) → Franciscus (1568) gap.

**HIGH PRIORITY — Staten van Goed RAG (Ambacht Assenede I & II)**
- [ ] Confirmed as **primary remaining bridge candidates** for the 1447–1568 gap following the Gysseling onomastic sweep. Gysseling did not index these records for the onomasticon. Not yet searched.
- [ ] Also: Landboek/Leenhof records — same priority tier.
- [ ] Archive: Rijksarchief Gent. Previous AGATHA portal searches covered Ambacht Assenede I & II but full record review not complete.

**HIGH PRIORITY — Catherine van Staederen vs Catherine van Vlaenderen**
- [ ] Geneanet deduplication found Catherine van Vlaenderen (Volckerinckhove/Cassel zone) being merged with Catherine van Staederen in some trees. Staederen = Staden, near Ypres, West Flanders — 40–50km from Cassel. These are almost certainly two different women.
- [ ] **Action**: search West Flanders records (Ypres/Langemark area) for Catherine van Staederen independently of Volckerinckhove results. If she resolves as a separate individual, the Volckerinckhove cluster reduces from ~5 unique individuals to ~3.

**HIGH PRIORITY — Louise van Vlaenderen-Drincham**
- [ ] Named individual surfaced in Geneanet deduplication, appearing in the Drincham/Cassel thread. Not found in de Wrée's documented Drincham line. De Wrée notes unnamed daughters at Generation 2/3.
- [ ] Hyphenated form *van Vlaenderen-Drincham* is unusual and potentially significant if authentic.
- [ ] **Action**: check de Wrée Vol. 2 pp.281–283 for unnamed daughters; check Archives Départementales du Nord (Lille).

**MEDIUM PRIORITY — Arras Legitimation Letter (Gen 4 Jan de Flandres)**
- [ ] De Wrée records that Jan de Flandres (Generation 4, son of Gen 3 Jan × Isabella de Vernieulles) received a letter of legitimation from the Duke of Burgundy at Arras. This is the last documented member of the Drincham line.
- [ ] **Action**: Archives Départementales du Nord (Lille) — search for the Arras legitimation letter. If located, this would be the bridge document for the Gen 4 gap and would confirm the line's continued presence in the Cassel area through the mid-to-late fifteenth century.

**MEDIUM PRIORITY — Geneanet Deduplication: 551 → ~5 unique individuals**
- [ ] Direct deduplication of the Geneanet pre-1500 Van Vlaenderen results confirms the entire Volckerinckhove/Renescure cluster reduces to approximately 5 unique individuals: Catherine van Vlaenderen (×Rémi Drieux), Baudouin van Vlaenderen, Margaretha de Mols, Nicolas Feuts (×2 husband traditions). All remaining 546+ entries are copies.
- [ ] Once Catherine's connection to the Drincham line is confirmed from a primary source, update the Four Functions article methodological caveat to cite this as a specific worked example.

---

## 🟡 MEDIUM PRIORITY

### Meygem Schepen — New Lead
- [ ] Identify **D. Van Vlaenderen, schepen of Meygem** (mid-19th century municipal directory) — trace through Ghent civil registration and population registers
- [ ] Confirm geographic continuity with 16th–17th century land records in same Meetjesland corridor
- [ ] Check whether this family connects to the Bassevelde / Boekhoute line or represents a parallel East Flanders branch

### Ghent City Directory Cluster — New Lead
- [ ] **C. Vanvlaenderen** (rag merchant) and **widow K. Vanvlaenderen**, Begijnhofboulevard 18 — trace through Ghent population registers, census books, civil registration
- [ ] Additional entries: J. Vanvlaenderen (grocer, Brugse Steenweg 142); G. Vanvlaenderen (Catholic school administrator, Vlotstraat 22)
- [ ] **De Flandre G.** (Godshuizenboulevard 96) — French-form variant; note in variant chain

### Cumulative Social Profile — Book Argument
The family's standing across centuries constitutes a distinct argument strand:
- *meester* titles · office holders · millers · landholders · estate inventory appearances · civic magistracy (schepen, Meygem)
- [ ] Compile this profile formally as a section or sidebar in Chapter 1 or 2
- [ ] Frame as: not a diffuse generic place-name — a socially established East Flemish family with multi-generational standing and a tight geographic core

### Bruges Records — Connect to Civic Sources
- [ ] Cross-reference 1547–49 Bruges land record names (Philips, Jacob, Cornelis, Frans, Suzanna, Joos, Baldwin) against:
  - **ROB** = Register op de oorkonden van het stadsbestuur van Brugge
  - **PARM** = indices on Bruges burgher books
  - **JAM / JAM II** = Brugse poorters (burgher rolls)
  - **GAILLIARD** = Bruges city archives, family-name tables

### Rijksarchief Gent Follow-Up
- [ ] Review findings from March 31 appointment — document which of the 20 requests yielded results
- [ ] Process Goal 1 thread results (pre-parish records, Franciscus 1568 gap)
- [ ] Process Goal 2 thread results (Constance's comital connection research)
- [ ] Follow up on any documents not yet received / needing copies

### Familiekunde Vlaanderen / Aalter
- [ ] Send follow-up letter to archief@aalter.be (archivist was absent during visit)

### Zeeland Thread
- [ ] Connect Laureys Arentsz van Vlaenderen (Ritthem, ~1530–1601) and Arent van Vlaenderen (postal messenger, Middelburg–Ghent, 1596) to WFZ attestations
- [ ] Assess "Laurentius" naming pattern (Arnoldus naming son Laurentius, 1628) as possible ancestral memory link

---

## 🟢 BACKLOG / LONGER TERM

### Documentary Chain to Build
> **1376 Ypres / 1426 Kortrijk → 1547–49 Bruges land records → 1600s Meetjesland → 1800s Bassevelde/Boekhoute → Charles Louis (1854, emigrated 1881)**

- [ ] Map all known attestations onto this chain with source citations
- [ ] Identify remaining gaps and assign archival targets

### Variant Form Analysis
> Van Vlaenderen · Van Vlaanderen · Van Vlaendren · van Vlaendre · van Flandre · de Flandria · Deflandre

- [ ] Compile full variant list with dates, places, and sources
- [ ] Include in Chapter 1 of *Lions of Flanders*

### Y-DNA
- [ ] Follow up with **Pieter van Vlaanderen (Piet)** re: Y-DNA collaboration, Big Y-700, R-FT1573
- [ ] Join **Benelux DNA Project** and **Flanders-Flemish DNA Project**
- [ ] Continue outreach to male-line descendants for Y-DNA testing

### Lions of Flanders Book
- [ ] Integrate CBG/Debrabandere attestations into Chapter 1
- [ ] Use Debrabandere's methodology as scholarly grounding: *"the modern spelling alone cannot determine the surname's origin; early documentary forms and regional continuity must guide interpretation"*
- [ ] Frame Ypres 1376 / Kortrijk 1426 / Volckerinckhove cluster as "western branch" hypothesis
- [ ] Decide whether Louis I bâtards chart belongs as atmospheric context or active hypothesis
- [ ] Continue 27-week self-publishing timeline
- [ ] Add four-bucket framework as analytical sidebar or footnote in Chapter 1 — framework already live on vanvlaenderen.org/name as reference

### vanvlaenderen.org
→ See **vanvlaenderen.org-todo.md** for full website backlog, citation audit tasks, and changelog.

**April 13, 2026** — Citation corrections (Corvers author, Cronike URL) + selective scholarly tone pass from ChatGPT/Dr. Larmuseau review. Central interpretive arguments preserved. See website todo for full detail.

### Next session agenda
- [ ] Verify Gemini can crawl prerendered pages with trailing slash URLs
- [ ] **GYSS. 1999** — download from KCTD portal and search (highest priority unread source)
- [ ] **Oostborch** — identify modern location; if near Meetjesland, strengthens Lodewyc geographic link
- [ ] **Digital gallery** — TBO 184 photos from Bruges visit as first addition
- [ ] **Knesselare charter "Archival Quest" tag** — flag in gap dossier as single highest-value RAG target

**April 12, 2026 sprint complete** — build failures resolved, gap dossier live, private docs page live, citation audit complete across all three dossiers and bibliography.json. Key audit findings: Vredius 1639 (*Sigilla*) vs 1643 (*Genealogia, Pars secunda*) correctly differentiated; full archival signatures added for TBO 184 records; Buylaert, Bethune, Espinoy, Cronike van Vlaenderen all corrected or upgraded. See website todo changelog for full detail.

---

## 📥 INBOX — Constance's Notes
*(Add here as received)*

---

## ✍️ Book Language — Settled Formulations

These phrasings have been developed and approved for use in *Lions of Flanders*:

**On the etymological vs. genealogical distinction:**
> "Debrabandere does not assign a noble etymology to the name form itself — but this is an etymological statement, not a genealogical one. Whether a hereditary lineage cluster emerged from a historically specific family branch remains fully open."

**On the institutional phrase vs. surname distinction:**
> "While 'van Vlaenderen' frequently appears in administrative headings simply meaning 'of Flanders' — as in *Souvereyne Kamer van Redeninge van Vlaenderen* or *De Gedeputeerde van de Staeden van Vlaenderen* — our documentary evidence also shows it functioning independently as a hereditary surname attached to identifiable individuals and family clusters in East Flanders."

**On Debrabandere's methodology:**
> "The modern spelling alone cannot determine the surname's origin; early documentary forms and regional continuity must guide interpretation."

**Four-bucket framework for classifying "van Vlaenderen" appearances in sources:**
This taxonomy should be applied consistently when evaluating any new record. Framework is now live on vanvlaenderen.org/name.

| Bucket | Type | Examples |
|--------|------|---------|
| 1 | Territorial / governmental phrase | *de Staeden van Vlaenderen*; *Kamer van Redeninge van Vlaenderen* |
| 2 | Feudal title / noble titulature | *dienstman Mijnsheeren van Vlaenderen* (Jan den Hinne) |
| 3 | Official staff / office phrase | *mijns heeren van Vlaenderen messagier* (Gentse stadsrekeningen 346.12) — **note: Bucket 3 is often the progenitor of Bucket 4** |
| 4 | True hereditary surname | D. Van Vlaenderen schepen Meygem; Ghent directory households; land record individuals |

The genealogical case rests on Bucket 4. Buckets 2 and 3 are the linguistic bridge — the phrase was prestigious, normalized, and embedded in documentary culture. Bucket 1 must be excluded from surname evidence but cited for institutional resonance. Together, Buckets 1–3 explain *why* a hereditary surname based on this phrase could emerge and stabilize; Bucket 4 is the evidence that it did. Framework applies equally to French variants: *de Flandre*, *de Flandres*.

- [x] ~~Add four-bucket framework as analytical sidebar or footnote in Chapter 1~~ — **live on vanvlaenderen.org/name; adapt for book**
- [x] ~~Apply four-bucket framework to vanvlaenderen.org explanatory note~~ — **live on /name page**
- [ ] **Identify and obtain the Debrabandere-Gysseling joint edition** — likely *Persoonsnamen in de vier ambachten, 14e en 15e eeuw* (Debrabandere & Gysseling, 1999); covers personal names in the Vier Ambachten (Boekhoute, Assenede, Axel, Hulst) — the heart of your research zone; page 102 commentary and page 665 index almost certainly from this volume; contains *messagier* reference (346.12) and Jan den Hinne entry (p. 419)
- [ ] Check page 419 of that edition for the full Jan den Hinne entry in context
- [ ] Note: Gysseling also published the **Corpus van Middelnederlandse teksten (CG)** and the **Toponymisch Woordenboek** — he is the single scholar linking your surname, place-name, and personal-name research threads

---

## 🔍 WFB2 Apparatus — Key Findings for Active Use

These items were extracted directly from the WFB2 preface and abbreviations list and should be applied to research and writing immediately.

**Critical primary sources newly identified in WFB2:**

| Code | Full Citation | Why It Matters |
|------|--------------|----------------|
| BEELE | W. Beele, *Studie van de Ieperse persoonsnamen uit de stads- en baljuwsrekeningen 1250–1400*, 1975 | Ypres personal names 1250–1400 — directly covers the Jacob van Vlaendre (1376) milieu |
| BEELE 1959 | W. Beele, *Bijdrage tot de studie van de persoonsnamen uit het Ieperse in de XIIIe en XIVe eeuw*, lic.verh. Leuven, 1959 | Ypres 13th–14th century names |
| VG | *Lijst Verbeurde Goederen 1382*, ARA, Rekenkamer 1163 | Confiscated goods list 1382 — immediately post-Ghent rebellion, Louis II era; may contain van Vlaendren individuals |
| WYFFELS | C. Wyffels, *Analyses de reconnaissances de dettes passées devant les échevins d'Ypres (1249–1291)*, Brussel, 1991 | Ypres debt recognitions 1249–1291 — potential pre-1376 bridge |
| VERKEST | R.M. Verkest, *Anthroponymische studie aan de hand van de Brugse stadsrekeningen van 1298–1303*, lic.verh. Leuven, 1949 | Bruges city accounts 1298–1303 — earliest Bruges surname attestations |
| VERHULST-GYSS | A. Verhulst & M. Gysseling, *Le Compte Général de 1187 (Gros Brief)*, Brussel, 1962 | 12th-century Flemish financial institutions — foundational source |
| V.D.AUW. | D. Van den Auweele, *De Brugse gijzelaarslijsten van 1301, 1305 en 1328*, Hand.Em. 110 (1973) | Bruges hostage lists 1301–1328 — Flemish political upheaval period |
| BAELDE | L. Baelde, *Antroponymie van de poorterslijst van Kortrijk anno 1440*, lic.verh. Leuven, 1982 | Kortrijk burgher list 1440 — covers same milieu as Jaquemaerde 1426 |
| AUBRY | M. Aubry, *4000 Bourgeois de Lille au XIVe siècle*, Lille, 1999 | 4000 Lille burghers 14th century — **direct source to check for Lille/French Flanders van Vlaenderen entries** |
| VAN G. 1963–75 | A. Van Geertsom, *De hoofdcijnsboeken van de Sint-Baafsabdij te Gent* (1462, 1475, 1560–1796) | Sint-Baafs Abbey rent books — East Flanders family names across multiple centuries |
| V Register | *Register van de Vierschaar*, SAK/RAK | Court/tribunal registers — better than parish records for surname continuity across generations |

**Methodological terms to use in book and website writing:**
- *Verhaspeling* — deformation/corruption of a name (use when explaining why variants don't imply separate origins)
- *Reïnterpretatie* — folk-etymological reshaping (use when addressing the "it just means from Flanders" objection)
- *Wisseling* — consonant interchange explaining spelling drift (Vlaendren/Vlaenderen/Vlaanderen)

**DEBR. 1980 and 1980' confirmed:** The preface explicitly states: *"Nadat wij in 1980 ons laatste Kortrijkse antroponymisch materiaal (DEBR. 1980 en 1980') hadden uitgegeven..."* — these are definitively Debrabandere's own Kortrijk name studies, the last before he began WFB2.

**AUBRY (Lille) is now a priority target** — 4000 Bourgeois de Lille au XIVe siècle is exactly the source to search for Lille-area van Vlaenderen entries to test the third-origin hypothesis.

- [ ] Search **AUBRY** (*4000 Bourgeois de Lille*, 1999) for van Vlaendren / de Flandre entries
- [ ] Search **VG** (Verbeurde Goederen 1382, ARA Rekenkamer 1163) for van Vlaendren individuals
- [ ] Locate **BEELE** (Ypres personal names 1250–1400) — directly contextualizes Jacob van Vlaendre 1376
- [ ] Locate **WYFFELS** (Ypres debt recognitions 1249–1291) — potential pre-1376 Ypres bridge
- [ ] Locate **BAELDE** (Kortrijk burgher list 1440) — covers Jaquemaerde 1426 milieu
- [ ] Check **V.D.HAL.** (Gentse meerseniersambacht 1305–1540) for van Vlaenderen entries in Ghent guild records

---

## 📚 Key Sources Reference

| Code | Full Citation | Relevance |
|------|--------------|-----------|
| WFB2 | Debrabandere, *Dict. of Family Names in Belgium and N. France*, LJ Veen, 2003 | Primary surname authority; 1376 & 1426 attestations |
| WFZ | Debrabandere, *Dict. of Family Names in Zeeland*, 2009 | Zeeland thread — **searched; no hereditary surname bearers found** |
| DEBR. 1958 | Debrabandere, *Kortrijkse persoonsnamen omstreeks 1400* | Source for 1426 Jaquemaerde, Kortrijk |
| DEBR. 1980 | Debrabandere, *Kortrijkse naamkunde 1200–1300* | Pre-1376 West Flanders forms |
| DEBR. 1980' | Debrabandere, *Persoonsnamen in de Leiestreek voor 1200* | Pre-1200 Leie valley names |
| CLM | Limburg-Stirum, *Cartulaire de Louis de Male*, Brugge, 1898–1901 | Primary source for Victor / Louis II hypothesis |
| CG | *Corpus van Middelnederlandse teksten (tot en met 1300)* | Best source for 1280 Catharina de Flandria |
| GYSS. 1999 | Gysseling & Debrabandere, *Persoonsnamen in de Vier Ambachten 14e en 15e eeuw*, KCTD 71 (1999), 491-588 | Jan den Hinne / messagier entries; covers Boekhoute, Assenede, Axel, Hulst |

---
*This is a living document. Add discoveries as they come in.*

### Citation Chain — Reconstruct to Archive Level
The goal: dictionary → academic monograph → archive register → manuscript folio.

**1376 Jacop van Vlaendre, Ypres:**
> WFB2 → **BEELE 1975** (*Ieperse persoonsnamen uit stads- en baljuwsrekeningen 1250–1400*) → Ypres city/bailiff accounts → original medieval ledger
- [ ] Search BEELE 1975 on DBNL, Google Books, HathiTrust, *Handelingen van het Genootschap voor Geschiedenis*
- [ ] Exact phrase search: \`"Jacop van Vlaendre"\` on Google Books and Internet Archive
- [ ] Contact Stadsarchief Ieper if needed for underlying account book

**1426 Jaquemaerde van Vlaendren, Kortrijk:**
> WFB2 → **DEBR. 1980 / 1980'** → Kortrijk city register / Vierschaar → original folio
- [ ] Search: \`"Frans Debrabandere" Kortrijk 1980 persoonsnamen\` on DBNL and Google Books
- [ ] Exact phrase search: \`"Jaquemaerde van Vlaendren"\` on Google Books and Internet Archive
- [ ] Check *Vlaamse Stam*, *Naamkunde*, *Handelingen Emulatie Brugge* for Debrabandere Kortrijk articles
- [ ] Ultimate archive homes: SAK (Stadsarchief Kortrijk), Weeskamer registers, Register van de Vierschaar

### New from WFB2 PDF — Additional Source Identifications
- [ ] **DEBR. 1957** = Debrabandere, *Aantekeningen uit de Kortrijkse antroponymie van omstreeks 1400*, MVN 33 (1957), 7–16 — journal article **precursor** to DEBR. 1958; may contain first published appearance of 1426 Kortrijk attestation; search *Mededelingen van de Vereniging voor Naamkunde* vol. 33
- [x] **GYSS. 1999** = Gysseling & Debrabandere, *Persoonsnamen in de Vier Ambachten 14e en 15e eeuw*, KCTD 71 (1999), pp. 491–588. **SEARCHED AND COMPLETE — April 2026.** V-section entries 407 (Vlaminc) → 408 (Vlascopere, de): no Van Vlaenderen entry at the critical alphabetical juncture. Zero Bucket 4 hits across 3,000+ individual mentions covering Sint-Baafsabdij, Sint-Pietersabdij, Rijke Gasthuis, Nieuwenbosse, Sint-Janskerk, and Karthuizers Gent fonds for Zeeuws-Vlaanderen, c.1240–1500. **Conclusion: Van Vlaenderen is not an indigenous Zeeuws-Vlaanderen surname formation. It arrives into Bassevelde/Assenede from elsewhere — most likely the Ghent hinterland, consistent with the 1568 Franciscus attestation.** Incorporated into Four Functions v5 article and Victor dossier.
- [ ] **⬇️ DOWNLOAD NOW: DEBR. 1999** = Debrabandere, *Persoonsnamen in Hulster Ambacht 1300–1400*, KCTD 71 (1999), pp. 295–490 — **free via KCTD portal: https://openjournals.ugent.be/hctd** — companion to GYSS. 1999 in same volume; Hulster Ambacht borders Boekhoute/Assenede zone directly. Download and search alongside GYSS. 1999.
- [ ] **DEBR. 2000** = Debrabandere, *Persoonsnamen in de Kortrijkse baljuwsrekeningen 1385–1400*, KCTD 72 (2000), 203–412 — bailiff accounts Kortrijk 1385–1400; may contain van Vlaendren entries
- [ ] **GSB** = A. Van Werveke, *Gentse stads- en baljuwsrekeningen (1351–1364)*, Brussel, 1970 — **this is the source of the Gentse stadsrekeningen images Constance found**; check index for van Vlaenderen entries
- [ ] **RSG** = N. De Pauw & J. Vuylsteke, *De rekeningen der stad Gent. Tijdvak van Jacob van Artevelde 1336–1349*, Gent, 1874–1885 — earlier Ghent accounts; Artevelde period

### Online Access — Sources Located
- [x] **KCTD full archive** = ALL volumes 1927–present freely available at https://openjournals.ugent.be/hctd — download GYSS. 1999 (vol. 71, pp. 491–588), DEBR. 1999 (vol. 71, pp. 295–490), DEBR. 2000 (vol. 72, pp. 203–412), DEBR. 2002 (vol. 74, pp. 69–330) directly from this URL
- [ ] **CLM** = Not digitized as free text; held at Ghent University Library (catalog: lib.ugent.be/catalog/rug01:002005149); 2017 reprint available on AbeBooks; original also available secondhand via Antiquariaat A. Kok & Zn., Amsterdam — note it includes an alphabetical personal names index
- [ ] **DBNL Debrabandere 1993 (Vol 2, L-Z)** — the 1993 first edition Vol 2 (L–Z) is on DBNL at https://www.dbnl.org/tekst/debr001verk01_01/ — check if V/Vlaenderen section is accessible (may be copyright restricted; try direct URL)
- [x] **WFZ (Zeeland surnames)** = Full PDF confirmed at https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf — **downloaded and searched; no hereditary surname bearers**
- [x] **DEBR. 2019 Corrigenda & Addenda** = *Nog Corrigenda en Addenda*, KCTD 91 (2019) — **READ; van Vlaenderen entry stands uncorrected**
- [ ] **Familienamendatabank Marcel Vervloet** — partial online version of WFB2; search *Vlaenderen* at this database (mentioned at taalverhalen.be)
- [ ] **Beljike** — online Belgian surname list based on Debrabandere; search *van Vlaenderen* variants
- [x] **CBG Familienamenbank** — WFB2 Van Vlaenderen entry obtained and read — **COMPLETE** — see WFB2 entry extracted below
- [ ] **familienaam.be** — Debrabandere's dictionary being added in partnership with Familiekunde Vlaanderen; check for Van Vlaenderen entry (may mirror CBG result)

### WFZ — van Vlaanderen Entry (EXTRACTED April 10, 2026)
Full text of the WFZ entry:

> **Vlaanderen, (van); Vlaander, van Vlaenderen:** Naar de afkomst uit het graafschap Vlaanderen. 1309-10 mijn here Robrecht van Vlaendren, Aardenburg (HAES. 169). Hier wordt Robrecht van Béthune bedoeld, graaf van Vlaanderen (1305-1322).
> **Vlaenderen, van,** zie (van) Vlaanderen.

**Findings:** WFZ has ONE Zeeland attestation (1309-10, Aardenburg) — the Count himself, not a surname bearer. Confirms no hereditary van Vlaenderen surname bearers in Zeeland. Strengthens East Flanders as the surname's geographic core. The Zeeland thread (Laureys Arentsz, Arent van Vlaenderen) must rest on other sources.

- [x] WFZ downloaded and searched — **COMPLETE**
- [ ] Obtain **HAES. 1954** = R. Haeserijn, *Bijnamen in de oudste rekening van Aardenburg a° 1309-1310*, VMKVA 1954, pp. 109-174
- [ ] Note for book: WFZ absence of hereditary van Vlaenderen supports East Flanders rather than Zeeland as geographic core

### WFB2 — Van Vlaenderen Entry (EXTRACTED April 11, 2026)
Full text of WFB2 entry, obtained via CBG Familienamenbank (cbgfamilienamen.nl), free access:

> **Flanders, (of); of Vla(e)nderen, of Vlaender:** Originating from Flanders, originally the coastal region; the later County of Flanders comprised the present-day territories, FV, OV, WV and Zeelandic Flanders. **1280 Catharina de Flandria; 1376 Jacop van Vlaendre, Ip. (BEELE); 1426 Jaquemaerde van Vlaendren, Ktr. (DEBR. 1958).** [WFB2]

**Classification:** Pure *herkomstnaam* (origin name) — "originating from Flanders." PlN classification, no mention of comital connection, no note about historically specific family usage, no caveat about bastard lines.

**What this means for the research:**
- Debrabandere is making an etymological statement about word origin, not a genealogical statement about family continuity. The four-bucket framework addresses this directly: his PlN classification answers a different question than the one the research is asking.
- The three attestations he cites (1280 Catharina, 1376 Jacop, 1426 Jaquemaerde) are now confirmed **Bucket 1–3 control cases** — all pre-cluster, none in the Meetjesland hereditary concentration. This is analytically useful: it shows Debrabandere's entry is built on pre-cluster evidence that does not engage with the East Flanders parish-record concentration at all.
- The entry is stable: uncorrected in both the 2010 and 2019 corrigenda. Citable as-is from WFB2 (2003).
- **The CBG version supersedes the 2003 print edition.** CBG's page states explicitly: "The entries in CBG Familienamen are based on a manuscript with improvements and additions by the author." This means the entry obtained via CBG reflects Debrabandere's most current version — post-2003, incorporating any improvements he made after publication. The physical book is not needed for the Van Vlaenderen entry. It remains useful for browsing related entries (Vlaanderen variants, de Flandre, de Flandria) and checking the full source apparatus in print form.

**Action items from WFB2 entry:**
- [x] WFB2 entry obtained and read — **COMPLETE**
- [ ] Check **"analysis and explanation"** tab on cbgfamilienamen.nl for Van Vlaenderen — may contain additional commentary beyond the WFB2 documentation tab
- [ ] Check **"variants"** tab on cbgfamilienamen.nl — may list de Flandre, de Flandria, Deflandre variants with their own entries
- [ ] Confirm BEELE as source for 1376 Jacop entry — WFB2 cites BEELE without page number; locate BEELE 1975 to find the original attestation
- [ ] Confirm DEBR. 1958 as source for 1426 Jaquemaerde — entry cites DEBR. 1958 (Kortrijkse persoonsnamen omstreeks 1400); this is now definitively confirmed as the intermediate source

### DEBR. 2019 Corrigenda — Result (April 10, 2026)
- [x] **READ AND SEARCHED** — van Vlaenderen does not appear in 2019 or 2010 corrigenda. WFB2 entry stands uncorrected and unrevised as of 2019. Entry is stable and citable as-is.
- [ ] Note: **van Hovorst / Hoogvorst** entry mentions *Hogevorst in Bassevelde (OV)* as a PlN — worth a footnote in *Lions of Flanders* as a Bassevelde place-name parallel

---

## 📋 Citation Chain Status

| Attestation | Dictionary Source | Intermediate Source | Archive Target | Status |
|-------------|------------------|--------------------|--------------------|--------|
| 1280 Catharina de Flandria | WFB2 | Corpus-Gysseling (CG) | Unknown | 🔴 Not traced |
| 1309-10 Robrecht van Vlaendren, Aardenburg | WFZ (HAES. 169) | HAES. 1954 (VMKVA) | Stadsarchief Aardenburg | 🟡 Intermediate identified — **NOTE: Count of Flanders, not a surname bearer** |
| 1376 Jacop van Vlaendre, Ypres | WFB2 | BEELE 1975 | Stadsarchief Ieper, bailiff accounts | 🟡 Intermediate identified |
| 1426 Jaquemaerde van Vlaendren, Kortrijk | WFB2 | **DEBR. 1958** (confirmed from WFB2 entry) | SAK Kortrijk, Vierschaar or Weeskamer | 🟡 Intermediate confirmed |
| 1547–49 Bruges land records (Joos, Jacob, Phillip) | TBO 184, bundle 21300 | — | Bruges State Archives ✅ | 🟢 Primary source in hand |
| Zeeuws-Vlaanderen medieval record, c.1240–1500 | Gysseling (GYSS. 1999) | Vier Ambachten onomastic index | Sint-Baafsabdij / Sint-Pietersabdij fonds | 🟢 **SEARCHED — zero Bucket 4 hits. Surname not indigenous to region.** |

---

## 📰 Journals to Monitor

- *Handelingen van het Genootschap voor Geschiedenis* (Bruges) — West Flemish archival studies
- *Vlaamse Stam* — genealogical/historical; Debrabandere published series here 1953–1987
- *Naamkunde* — linguistic; key for name-form analysis
- *Handelingen Emulatie Brugge* — Bruges historical society; covers Bruges Vrije records
- *Oostvlaamse Zanten* (O.K.Waas) — Waasland / East Flanders; Van Geertsom Sint-Baafs studies
`;
const readingList = "# Lions of Flanders — Reading List & Methodology\n*Last updated: April 16, 2026*\n*Companion document to the Research To-Do List*\n\nThis document covers two things: the project's transcription/translation methodology (source of record for the live page at `/research/methodology`) and an extended internal reading list covering both the public curated sources and the specialist onomastic/archival literature used in active research.\n\n---\n\n## Transcription and Translation Methodology\n*Source of record for `/research/methodology` (live April 12, 2026)*\n\n> Archival documents in this project are transcribed using an iterative, multi-system approach. Gemini (Google) serves as the primary real-time reading tool: integrated directly into the browser, it can analyse document images without a separate upload step, allowing the researcher to ask questions about specific characters, words, or passages while actively zooming and navigating the original scan. This ambient availability makes it the natural first pass for difficult passages.\n>\n> Outputs from Gemini are then cross-checked against independent readings from Claude (Anthropic), GPT-4 (OpenAI), Transkribus, and Tryleo. Where readings converge across systems, confidence is high. Where they diverge, the researcher returns to the original image, zooming to individual characters and applying knowledge of the letter forms, abbreviations, and spelling conventions of the period.\n>\n> Translation follows the same iterative logic. Early modern Dutch and Latin passages are translated independently by multiple systems, with the researcher cross-checking against known vocabulary, named entities already established in the research, and the documentary context. Passages involving specialist palaeographic challenges — secretary hand abbreviations, damaged text, unusual personal names — are treated as uncertain until verified by at least two independent readings.\n>\n> Each AI system is given learning samples from the same document hand before being asked to transcribe difficult passages, allowing the system to calibrate to individual scribal idiosyncrasies. This is the same principle professional palaeographers apply when learning a new hand.\n>\n> AI tools in this project are research instruments, not citation sources. Every claim on this site traces to a named primary or secondary authority. Tool outputs that cannot be verified against a named source are flagged as provisional.\n\n---\n\n## Recommended Reading\n*Public reading list — also live at `/research/methodology`*\n\n> The following works form the historiographical foundation for this project. They are the sources against which our findings are tested and the authorities whose frameworks we apply. Entries are grouped by theme. Acquisition links are provided where available.\n\n#### The County of Flanders and the Comital House\n\n**Warlop, E.** (1975–76). *The Flemish Nobility Before 1300.*\nThe foundational English-language prosopographical study of Flemish noble families. The alphabetic repertory of noble families in volumes 3–4 is an essential reference for tracing any lineage with pre-1300 roots in Flanders, including the van Praet family. Available in four volumes.\n- Amazon: https://www.amazon.com/s?k=Warlop+Flemish+Nobility+Before+1300\n- Free download: https://archive.org/details/flemishnobilityb0002unse_q5k3\n- Used copies: https://www.abebooks.com/book-search/title/flemish-nobility-before-1300/\n\n**Prevenier, W. & Blockmans, W.** (1986). *The Burgundian Netherlands.*\nThe standard illustrated survey of the Burgundian Low Countries 1380–1530 — exactly the period in which the van Vlaenderen surname crystallises and the Praet line flourishes. Provides essential political and cultural context for Louis de Male and his bastard children. Richly illustrated.\n- Amazon: https://www.amazon.com/Burgundian-Netherlands-Walter-Prevenier/dp/0521306116\n- Free download: https://archive.org/details/burgundiannether0000prev\n- Used copies: https://www.abebooks.com/9780521306119/Burgundian-Netherlands-Prevenier-Walter-Wim-0521306116/plp\n\n**Blockmans, W. & Prevenier, W.** (1999). *The Promised Lands: The Low Countries Under Burgundian Rule, 1369–1530.*\nThe accessible single-volume companion to The Burgundian Netherlands. Organised thematically around the key problems of Burgundian history — state formation, social structure, urban economy — rather than as a chronological narrative. Better suited as a first read than the 1986 volume.\n- Amazon: https://www.amazon.com/Promised-Lands-Countries-Burgundian-Rule/dp/0812216504\n- Used copies: https://www.abebooks.com/book-search/title/promised-lands-low-countries-under-burgundian/\n\n#### Flemish Nobility and Social Structure\n\n**Buylaert, F.** (2010). *Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen.*\nThe most important recent study of the Flemish nobility in the 14th–15th centuries, by the same Buylaert cited in FMG MedLands for the Josse de Flandre cadet branch. Demonstrates the nobility's adaptability and social mobility during exactly the period our research covers. In Dutch. An English-language article by the same author ('The late medieval crisis of the nobility reconsidered: the case of Flanders', *Journal of Social History* 45, 2012) covers the main arguments and is freely available.\n- Amazon: https://www.amazon.com/Eeuwen-Van-Ambitie-Laatmiddeleeuws-Verhandelingen/dp/9065690751\n- Free download: https://www.academia.edu/2418411/Frederik_Buylaert_Eeuwen_van_ambitie\n\n#### The Meetjesland: Regional History and Rural Economy\n\n**Augustyn, B. & Thoen, E.** (1987). *'Van veen tot bos: Krachtlijnen van de landschapsevolutie van het Noordvlaamse Meetjesland van de 12e tot de 19e eeuw.'*\nThe key article on the landscape history of the northern Flemish Meetjesland from the 12th to the 19th century — covering precisely the geographic area of our research. Documents the transition from peat extraction to the sandy-loam landscape that characterises the area in the parish-record period. In Dutch. Published in *Historisch-Geografisch Tijdschrift*.\n*Note: not widely available outside Belgian library systems. Request through interlibrary loan or directly from the authors' institutional repositories at Ghent University.*\n\n#### Archival Research Methodology and Palaeography\n\n**Munby, L.** (2003). *Reading and Understanding Old Documents: A Guide to Palaeography.*\nA practical English-language guide to reading historical handwriting, focused on secretary hand and other scripts common in early modern documents. Useful companion for working through the kinds of documents encountered in Belgian state archives.\n- Amazon: https://www.amazon.com/s?k=Munby+Reading+Understanding+Old+Documents+Palaeography\n- Used copies: https://www.abebooks.com/book-search/title/reading-understanding-old-documents/\n\n**Moens, J.** (Various editions). *Inleiding tot de historische kritiek.*\nStandard Belgian introduction to historical source criticism and archival methodology. Covers the evaluation of primary sources, dating conventions, and document types encountered in Flemish archives. In Dutch. Available through Ghent University library and Belgian academic publishers.\n\n#### Digital Genealogy and Genetic Methods\n\n**Bettinger, B. & Wayne, D.** (2016). *Genetic Genealogy in Practice.*\nThe National Genealogical Society's standard reference for DNA evidence in genealogical research. Covers Y-DNA, autosomal, and mtDNA methods with specific guidance on using DNA to break through brick walls — the primary use case for this project's Y-DNA research thread.\n- Amazon: https://www.amazon.com/Genetic-Genealogy-Practice-National-Genealogical/dp/1935815296\n- Used copies: https://www.abebooks.com/book-search/title/genetic-genealogy-practice/\n\n#### Primary Sources and Reference Works\n\n**Cawley, C.** (2025, v5.0). *MedLands: Flanders, Hainaut* (online).\nThe Foundation for Medieval Genealogy's encyclopaedia of territories and noble families in the medieval western world. The primary reference for all comital and bastard-line citations in this project. Free to access online. Version 5.0 updated January 2025.\n- Free access: https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm\n\n**Vredius, O. (Olivier de Wree)** (1643). *Sigilla Comitum Flandriae et Inscriptiones Diplomatum.*\nPublished in Bruges in 1643, this is the 17th-century primary source compilation that underlies most of the FMG MedLands charter citations used in this project. The original is available on Internet Archive. Pars secunda, pp. 285–287 is the specific locus for the Victor van Vlaenderen charter evidence.\n- Free download: https://archive.org/details/bub_gb_CNSBZDBvNV4C\n\n**Nieus, Jean-François** (2021). \"Aristocratic seal ownership in twelfth-century Flanders: A world in between.\" Preprint. Academia.edu. University of Namur. Forthcoming in peer-reviewed publication.\nSigillographic study of noble seal usage in the County of Flanders, 1071–1200. Establishes that territorial designations in the elite Flemish milieu functioned as political and dynastic language, not mere geographic labels. Key findings: Philip of Alsace places the Flemish lion on the comital seal from 1163 (imitatio comitis); Michael II of Harnes (castellan of Cassel, constable of Flanders) confirmed as Dover Recognitio sealer (fn. 89; appendix p. 28); Baldwin II lord of Praat and Watervliet confirmed c.1190–1200. Provides contextual depth for the Van Vlaenderen surname hypothesis. Full text on file with project.\n- Scope: 1071–1200 only. Does not directly address 14th–15th century Van Vlaenderen lines — argument is contextual scaffolding, not direct evidential continuity.\n- Key pages: pp. 7–8, 17 n.89, 23–26, 28 (appendix)\n- **Status:** ✅ Read April 2026. Integrated into website (About page, Lineage page, Nieus Seals article at /research/nieus-seals, Drincham dossier)\n\n---\n\n## 📖 RESEARCH READING LIST — Additional Sources\n\n*These sources are identified through active research but are not yet on the website reading list. They are tracked here for acquisition and consultation.*\n\n### Essential — Obtain and Read First\n\n**Debrabandere, Frans**\n*Woordenboek van de familienamen in België en Noord-Frankrijk* (WFB2)\nAmsterdam/Antwerp: LJ Veen, 2003. ISBN 9020402072.\n- **Status:** ✅ Entry obtained via CBG Familienamenbank (cbgfamilienamen.nl, free). Pure PlN classification. Three attestations: 1280 Catharina de Flandria, 1376 Jacop van Vlaendre (Ypres, BEELE), 1426 Jaquemaerde van Vlaendren (Kortrijk, DEBR.1958). Entry uncorrected in 2010 and 2019 corrigenda. CBG version supersedes print (author's post-2003 manuscript improvements).\n- **Contains:** 1376 Jacop van Vlaendre (Ypres) and 1426 Jaquemaerde van Vlaendren (Kortrijk) attestations\n\n**Limburg-Stirum, Th. de**\n*Cartulaire de Louis de Male, comte de Flandre* (CLM), Brugge, 1898–1901.\n- **Status:** Not yet obtained — check Belgica digital library / Ghent University\n- **Priority:** HIGHEST for Victor hypothesis\n- **Key task:** Search for Victor van Vlaenderen, Wessegem/Ursel lordship, 1441/1442 charter\n\n### High Priority — Locate and Consult\n\n**Debrabandere, Frans**\n*Kortrijkse persoonsnamen omstreeks 1400* (DEBR. 1958)\n- **Status:** Not yet located — try *Handelingen van het Genootschap voor Geschiedenis*, *Vlaamse Stam*\n- **Key task:** Confirms 1426 Jaquemaerde; may contain additional West Flanders attestations\n\n**Debrabandere, Frans**\n*Kortrijkse naamkunde 1200–1300* (DEBR. 1980)\n- **Status:** Not yet located\n- **Key task:** May push West Flanders van Vlaendren forms earlier than 1376\n\n**Debrabandere, Frans**\n*Persoonsnamen in de Leiestreek voor 1200* (DEBR. 1980')\n- **Status:** Not yet located\n- **Key task:** Leie valley names before 1200\n\n**Debrabandere, Frans & Gysseling, Maurits**\n*Persoonsnamen in de vier ambachten, 14e en 15e eeuw* (GYSS. 1999), KCTD 71 (1999), pp. 491–588\n- **Status:** ✅ SEARCHED AND COMPLETE — April 2026. Downloaded free via KCTD portal (openjournals.ugent.be/hctd).\n- **Result:** V-section (entries 394–417): NO Van Vlaenderen entry between Vlaminc (407) and Vlascopere (408). Zero Bucket 4 hits across 3,000+ individual mentions from Sint-Baafsabdij, Sint-Pietersabdij, Rijke Gasthuis, Nieuwenbosse, Sint-Janskerk, and Karthuizers Gent fonds for Zeeuws-Vlaanderen, c.1240–1500. **Conclusion: surname is not indigenous to Zeeuws-Vlaanderen. Arrives from Ghent hinterland.** Incorporated into Four Functions v5 article and Victor dossier.\n- **Covers:** Vier Ambachten: Boekhoute, Assenede, Axel, Hulst\n\n**Debrabandere, Frans**\n*Woordenboek van de familienamen in Zeeland* (WFZ), 2009\n- **Status:** ✅ Downloaded and searched — April 2026. Full PDF at https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf\n- **Result:** ONE Zeeland attestation (1309-10 Robrecht van Vlaendren, Aardenburg) — the Count himself, not a surname bearer. No hereditary Van Vlaenderen surname bearers in Zeeland. Confirms East Flanders as geographic core.\n\n**Beele, W.**\n*Studie van de Ieperse persoonsnamen uit de stads- en baljuwsrekeningen 1250–1400* (BEELE 1975)\n- **Status:** Not yet located — search DBNL, Google Books, HathiTrust\n- **Key task:** Almost certainly the source of 1376 Jacop van Vlaendre, Ypres\n\n**Beele, W.**\n*Bijdrage tot de studie van de persoonsnamen uit het Ieperse in de XIIIe en XIVe eeuw* (BEELE 1959), lic.verh. Leuven\n- **Status:** Not yet located\n- **Key task:** Ypres 13th–14th century names; companion to BEELE 1975\n\n### Targeted Searches — Specific Entries to Find\n\n**Aubry, M.**\n*4000 Bourgeois de Lille au XIVe siècle*, Lille, 1999.\n- **Status:** Not yet consulted\n- **Priority:** HIGH for Lille / third-origin hypothesis\n- **Key task:** Search for van Vlaendren / de Flandre entries\n\n**Corpus-Gysseling (CG)**\n*Corpus van Middelnederlandse teksten (tot en met het jaar 1300)*, ed. Gysseling, 1980.\n- **Status:** Digitized and searchable at https://ivdnt.org/corpora-lexica/corpus-gysseling/\n- **Key task:** Search for *Catharina de Flandria 1280* and any pre-1300 forms\n\n**Verbeurde Goederen 1382 (VG)**\nARA Brussels, Rekenkamer 1163.\n- **Status:** Archival — requires ARA Brussels visit or remote request\n- **Key task:** Search for van Vlaenderen individuals post-Ghent rebellion\n\n**Wyffels, C.**\n*Analyses de reconnaissances de dettes passées devant les échevins d'Ypres (1249–1291)*, Brussel, 1991.\n- **Status:** Not yet consulted\n- **Key task:** Potential pre-1376 Ypres bridge\n\n**Baelde, L.**\n*Antroponymie van de poorterslijst van Kortrijk anno 1440*, lic.verh. Leuven, 1982.\n- **Status:** Not yet located\n- **Key task:** Kortrijk burgher list 1440 — contextualizes Jaquemaerde 1426 milieu\n\n---\n\n## 📋 CITATION CHAIN STATUS\n\n| Attestation | Dictionary Source | Intermediate Source | Archive Target | Status |\n|-------------|------------------|--------------------|--------------------|--------|\n| 1280 Catharina de Flandria | WFB2 | Corpus-Gysseling (CG) | Unknown | 🔴 Not traced |\n| 1376 Jacop van Vlaendre, Ypres | WFB2 | BEELE 1975 | Stadsarchief Ieper, bailiff accounts | 🟡 Intermediate identified |\n| 1426 Jaquemaerde van Vlaendren, Kortrijk | WFB2 | DEBR. 1980 / 1980' | SAK Kortrijk, Vierschaar or Weeskamer | 🟡 Intermediate identified |\n| 1547–49 Bruges land records (Joos, Jacob, Phillip) | TBO 184, bundle 21300 | — | Bruges State Archives ✅ | 🟢 Primary source in hand |\n\n---\n\n## 📰 JOURNALS TO MONITOR\n\n- *Handelingen van het Genootschap voor Geschiedenis* (Bruges) — West Flemish archival studies\n- *Vlaamse Stam* — genealogical/historical; Debrabandere published series here 1953–1987\n- *Naamkunde* — linguistic; key for name-form analysis\n- *Handelingen Emulatie Brugge* — Bruges historical society; covers Bruges Vrije records\n- *Oostvlaamse Zanten* (O.K.Waas) — Waasland / East Flanders; Van Geertsom Sint-Baafs studies\n\n---\n*This is a living document. Update as sources are located, read, and cited. Website section is approved and ready for deployment.*\n\n---\n\n## 🌐 Online Access — Sources Located\n\n| Source | Access | URL |\n|--------|--------|-----|\n| KCTD full archive (all volumes 1927–present) | **Free, open access** | https://openjournals.ugent.be/hctd |\n| GYSS. 1999 (Vier Ambachten, vol. 71) | Free via KCTD portal | https://openjournals.ugent.be/hctd |\n| DEBR. 1999, 2000, 2002 (Kortrijk series) | Free via KCTD portal | https://openjournals.ugent.be/hctd |\n| CLM (Cartulaire Louis de Male) | Ghent University Library | http://lib.ugent.be/catalog/rug01:002005149 |\n| CLM (reprint/used copies) | AbeBooks | https://www.abebooks.com/servlet/SearchResults?tn=Cartulaire+Louis+Male |\n| Corpus-Gysseling (CG) | Free, searchable online | https://ivdnt.org/corpora-lexica/corpus-gysseling/ |\n| WFZ (Zeeland surnames) | Free PDF | http://www.naamkunde.net/?p=309 |\n| WFB2 van Vlaenderen entry | CBG online | https://www.cbgfamilienamen.nl (login required for full entry) |\n\n---\n\n## 🗺️ Research Strategy — Two-Track Approach\n\nPer Constance's AI analysis, the research is now at the point where secondary lexicographic evidence should be separated from primary documentary evidence:\n\n**Track 1 — Secondary lexicographic (largely complete)**\nDebrabandere's dictionaries and CBG give the scholarly framework, earliest attestations, and methodological vocabulary. This track is well-advanced.\n\n**Track 2 — Primary documentary (the next breakthrough)**\nThe actual 1376 and 1426 original records need to be found. This is where the academic case becomes publication-quality. Targets:\n- Stadsarchief Ieper (city and bailiff accounts 1250–1400 — BEELE 1975 source)\n- Stadsarchief Kortrijk / RAK Kortrijk (Weeskamer, Vierschaar registers — DEBR. 1958/1980 source)\n- Rijksarchief Gent (ongoing)\n- Brugse Vrije scans / Staten van Goed\n\n---\n\n## 🌐 Complete Online Access Table\n\n| Source | Access | URL / Notes |\n|--------|--------|-------------|\n| KCTD full archive (all volumes 1927–present) | **Free, open access** | https://openjournals.ugent.be/hctd |\n| GYSS. 1999 (Vier Ambachten, KCTD vol. 71) | Free via KCTD portal | Search vol. 71 at openjournals.ugent.be/hctd |\n| DEBR. 1999, 2000, 2002 (Kortrijk series) | Free via KCTD portal | Vols. 71, 72, 74 at openjournals.ugent.be/hctd |\n| DEBR. 2019 Nog Corrigenda & Addenda | ✅ READ — van Vlaenderen absent; entry stands uncorrected | https://openjournals.ugent.be/hctd/article/id/88833/ |\n| WFZ (Zeeland surnames, full PDF) | **Free, direct download** | https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf |\n| Corpus-Gysseling (CG) | Free, searchable | https://ivdnt.org/corpora-lexica/corpus-gysseling/ |\n| CBG Familienamenbank (WFB2 documentation tab) | Free (login for full) | https://www.cbgfamilienamen.nl |\n| DBNL Debrabandere 1993 (Vol 1, A–K) | Partial / check access | https://www.dbnl.org/tekst/debr001verk01_01/ |\n| CLM (Cartulaire Louis de Male) | Ghent University Library | http://lib.ugent.be/catalog/rug01:002005149 |\n| CLM (reprint / used copies) | AbeBooks purchase | https://www.abebooks.com/servlet/SearchResults?tn=Cartulaire+Louis+Male |\n| WFB2 (2003, physical book) | Bol.com Belgium | https://www.bol.com/be/nl/p/woordenboek-van-familienamen-in-belgie/1001004001949982/ |\n| DEBR. 2019 (ResearchGate) | Request full text | https://www.researchgate.net/publication/377720459 |\n\n---\n\n## 📋 Updated Citation Chain Status\n\n| Attestation | Dictionary Source | Intermediate | Archive Target | Status |\n|-------------|-----------------|-------------|----------------|--------|\n| 1280 Catharina de Flandria | WFB2 | Corpus-Gysseling (CG) | Unknown | 🔴 Not traced |\n| 1309-10 Robrecht van Vlaendren, Aardenburg | WFZ (HAES. 169) | HAES. 1954 (VMKVA) | Stadsarchief Aardenburg | 🟡 Intermediate identified — **NOTE: this is the Count of Flanders, not a surname bearer** |\n| 1376 Jacop van Vlaendre, Ypres | WFB2 | BEELE 1975 | Stadsarchief Ieper, bailiff accounts | 🟡 Intermediate identified |\n| 1426 Jaquemaerde van Vlaendren, Kortrijk | WFB2 | DEBR. 1980 / 1980' | SAK Kortrijk, Vierschaar or Weeskamer | 🟡 Intermediate identified |\n| 1547–49 Bruges land records (Joos, Jacob, Phillip) | TBO 184, bundle 21300 | — | Bruges State Archives ✅ | 🟢 Primary source in hand |\n\n**Key WFZ finding (April 10, 2026):** The WFZ contains no hereditary van Vlaenderen surname bearers in Zeeland. The single attestation (1309-10, Aardenburg) refers to Count Robert de Béthune himself — Bucket 2 titular usage. The absence of a hereditary Zeeland surname cluster in WFZ strengthens the argument that **East Flanders is the geographic core** of the hereditary Van Vlaenderen surname.\n";
const analysisSessions = '# Lions of Flanders — Analysis Sessions Log\n*Running record of AI-assisted analysis findings*\n*Last updated: April 16, 2026*\n\nThis document records findings from AI-assisted analysis sessions — deduplication exercises, onomastic sweeps, database queries, and structured data analysis. Each entry records the input, method, findings, and research implications. This is a working log, not a publication record.\n\n---\n\n## Session 2 — April 2026\n### Geneanet Pre-1500 Deduplication\n**Input:** Full Geneanet result set for Van Vlaenderen / variant forms, pre-1500 entries, pasted by Constance\n**Tool:** ChatGPT (Constance)\n**Method:** Systematic deduplication of user-contributed tree entries, grouping by cluster and confidence level\n\n#### Finding 1 — The 551 Collapses to Five\nThe entire Volckerinckhove/Renescure cluster reduces to approximately **5 unique individuals** after deduplication:\n- Catherine / Catharina van Vlaenderen (c.1405–1450/60) × Rémi Drieux\n- Baudouin / Balduinus van Vlaenderen (c.1380–1440) — probable father\n- Margaretha de Mols — wife of Baudouin\n- Nicolas Feuts / van Huysen — second husband tradition (may be same person)\n\nAll remaining ~546 entries are copies of this small cluster replicated across noble genealogical trees. Confirms the methodological caveat in the Four Functions article: Geneanet counts are clustering signals, not population estimates.\n\n**Article impact:** Incorporated into Four Functions v5 methodological caveat. Once Catherine\'s connection to the Drincham line is confirmed from a primary source, the caveat should be updated to cite this as a specific worked example.\n\n#### Finding 2 — Van Staederen Aliasing: Warning Flag\nCatherine appears in some trees as *Catherine van Staederen* and in others as *Catherine van Vlaenderen*. Staederen = Staden, near Ypres, West Flanders — 40–50km from Volckerinckhove/Cassel. These are almost certainly two different women:\n- **Catherine van Vlaenderen**: Volckerinckhove/Cassel zone, probable Drincham bastard line connection\n- **Catherine van Staederen**: Staden/Ypres zone, possible connection to Karel van Vlaenderen (Lord of Grutersale, Langemark) or Robert [Roeland] (Burgrave of Ypres) branches\n\n**Status:** Unverified. If confirmed as a conflation, the Volckerinckhove cluster reduces from ~5 to ~3 unique individuals.\n**Action:** Search West Flanders records (Ypres/Langemark area) for Catherine van Staederen independently.\n\n#### Finding 3 — Louise van Vlaenderen-Drincham\nNamed individual surfaced in the Drincham/Cassel thread of results. Not found in de Wrée\'s documented Drincham line, though de Wrée notes unnamed daughters at Generation 2/3. Hyphenated form *van Vlaenderen-Drincham* is unusual and potentially significant if authentic.\n**Status:** Unverified. Requires primary source.\n**Action:** Check de Wrée Vol. 2 pp.281–283; check Archives Départementales du Nord (Lille).\n\n#### Finding 4 — Arnoldus × De Jaeghere (HIGHEST PRIORITY)\nGeneanet entry shows Arnoldus van Vlaenderen × Maria de Jaeghere, dated c.1490. Documented line has Arnoldus "Aert" × Maeyken De Yaeghere, married Waarschoot 1620, died Oostwinkel 1666. De Yaeghere and de Jaeghere are the same surname.\n\nThree interpretations:\n1. **Date error** — Geneanet user guessed c.1490 birth for the 1620 Arnoldus. Most common error type.\n2. **Two generations** — genuine earlier Arnoldus × De Jaeghere c.1490, separate individual, potentially first named bridge candidate for the 1447–1568 gap (**highest consequence**).\n3. **Impossible** — c.1490 as birth date for the 1620 Arnoldus would make him ~130 at marriage. Eliminated.\n\n**Status:** Unverified. Interpretation 2 would place a named Van Vlaenderen individual in the Meetjesland c.1490 — right generation to be a son or grandson of Adam (last attested 1447).\n**Action:** Search parish record database and Waarschoot/Oostwinkel/Meetjesland records for any Van Vlaenderen × De Jaeghere pairing before 1600.\n\n**Grand total from deduplication:** ~23 high-confidence unique surname bearers (pre-1500) plus ~15–20 copied dynastic nobles = ~40 unique individuals from what Geneanet presents as 551+ entries.\n\n---\n\n## Session 1 — April 2026\n### Gysseling Vier Ambachten Onomastic Sweep\n**Input:** Gysseling & Debrabandere, *Persoonsnamen in de vier ambachten, 14e en 15e eeuw* (GYSS. 1999), KCTD 71 (1999), pp. 491–588\n**Tool:** Direct index scan (Michael)\n**Method:** Systematic scan of V-section entries (394–417, pages 565–569) and all *vlaen / flandr / flandria* occurrences in the document\n\n#### Finding 5 — Zero Bucket 4 Hits in Zeeuws-Vlaanderen\nThe alphabetical sequence at the critical juncture:\n```\n407. Vlaminc → 408. Vlascopere, de → 409. Vliete, van den\n```\nNo entry for *Vlaenderen, van* or any orthographic variant. The gap is structural, not a scanning artifact — if a hereditary surname bearer existed in the source material, Debrabandere would have lemmatized it here.\n\nAll *vlaen / flandr / flandria* occurrences in the document, by bucket:\n| Page | Text | Bucket |\n|------|------|--------|\n| 492 | de Vier Ambachten geographic/institutional description | 1 |\n| 492 | "baeliu in de Virambacht" (1292) | 1 |\n| 494 | "Rijksvlaanderen" — imperial fief terminology | 2 |\n| 495 | Abbreviation VA = Vier Ambachten (archive sigil) | 1 |\n| 407 | Entry Vlaminc: 1319 Clais Vlamijnc, Bh. (RG) — ethnic nickname "Fleming" | 3/BN |\n| 514 | "Fernandi comitis Flandrie et Hainonie" (1219) — Ferrand of Portugal, Count of Flanders | 2 |\n| 515 | "dominus Sigerus de Gandavo … prefati scabini de Hassenede" (GA 42) — Van Gent entry, not Van Vlaenderen | 1 |\n\n**Bucket 4 (hereditary surname) hits: zero.**\n\n**Coverage:** This index covers every scabinus, scoutate, and maenre record that Gysseling extracted from the Sint-Baafsabdij, Sint-Pietersabdij, Rijke Gasthuis, Nieuwenbosse, Sint-Janskerk, and Karthuizers Gent fonds for the entire Zeeuws-Vlaanderen region, roughly 1240–1500. Together with the earlier Hulster Ambacht article (DEBR. 1999), this represents north of 3,000 individual mentions.\n\n**Conclusion:** Van Vlaenderen is not an indigenous Zeeuws-Vlaanderen surname formation. It arrives into Bassevelde/Assenede from elsewhere — most likely via the Ghent hinterland, consistent with the 1568 Franciscus attestation in Ghent parish records. The Vier Ambachten records do not bridge the 1447–1568 gap; they rule out the gap being bridged here.\n\n**Best remaining bridge candidates:** Staten van Goed RAG (Ambacht Assenede I & II) and the Landboek/Leenhof records — neither indexed by Gysseling for this onomasticon.\n\n**Article impact:** Incorporated into Four Functions v5 article (Zeeland cluster observation, Tier 2 Lodewijc entry, bastard-line testing section, conclusions, research priorities). Also added to Victor dossier cross-link paragraph.\n\n---\n\n*Add new sessions above this line, most recent first.*\n';
const websiteTodo = '# vanvlaenderen.org — Website To-Do & Changelog\n*Last updated: April 12, 2026*\n*Repository: github.com/iamabotama/vanvlaenderen.org · Branch: main*\n\n---\n\n## 🔴 BACKLOG — HIGH PRIORITY\n\n### Citations & Source Links (Research Pages)\nThe research dossier pages currently have Notes & Bibliography sections with reference numbers, but most entries lack live hyperlinks to digitally accessible sources. The goal is that every Directly Attested and Strongly Corroborated claim either links inline to a digitised source or has a numbered reference with a working URL.\n\n**VictorDossierPage** (`/research/victor-dossier`)\n- [ ] FMG MedLands — link all `[FMG NNN]` footnote numbers to the specific anchor on fmg.ac where available\n- [ ] Inventaris Onroerend Erfgoed (Hof van Wessegem) — ref 2 already has link, verify it\'s still live: https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384\n- [ ] Ursel, een Meetjeslands dorp — ref 3 link: https://mijnplatteland.com/meetjesland/ursel/\n- [ ] Vredius (1643) *Sigilla Comitum Flandriae* — add Internet Archive link: https://archive.org/details/bub_gb_CNSBZDBvNV4C\n- [ ] DBNL sources (Degryse, UGent corsair study) — verify existing links are live\n- [ ] Bethune (1900) *Epitaphes* — not digitally accessible; flag as print-only\n\n**PraetDossierPage** (`/research/praet-dossier`)\n- [ ] Audit all source citations — identify which have URLs and which are print-only\n- [ ] Wikipedia Louis of Praet — add inline link\n- [ ] Pattou *Bâtards de Flandres* — add link: http://racineshistoire.free.fr/LGN/PDF/Flandre-B%E2tards.pdf\n- [ ] Remmé Genealogie Online — add link: https://www.genealogieonline.nl/en/genealogie-richard-remme/I97902.php\n\n**PraetLineageDossierPage** (`/research/praet-lineage-dossier`)\n- [ ] Same audit as Praet dossier — link Pattou, FMG, Wikipedia, Buylaert Academia.edu\n\n**VictorLineagePage** (`/research/victor`)\n- [ ] Audit inline citations — FMG refs, 1441/42 charter note, Wessegem references\n- [ ] Add link to Brugse Vrije TBO 184 via AGATHA portal where accessible\n\n**ResearchPage** (`/research`)\n- [ ] Crystallisation paragraph sources — add inline links to Wikipedia (Louis II, Count of Flanders) and Pattou\n\n### New Content Pages\n- [ ] `/research/methodology` — add Warlop *Flemish Nobility Before 1300* entry once acquisition confirmed (currently reading list only; no direct citation)\n- [ ] `/research/bibliography` — add WFB2 entry now that CBG access is confirmed:\n  - Author: Debrabandere, Frans\n  - Full entry via: cbgfamilienamen.nl (search Van Vlaenderen, WFB2 documentation tab) — **Note: CBG version is based on author\'s post-2003 manuscript with improvements; more current than the printed edition**\n  - Foreword/apparatus PDF: https://www.cbgfamilienamen.nl/nfb/aanhangsels/wfb-voorwerk.pdf\n- [ ] `/research/bibliography` — add CLM entry once obtained\n- [ ] Consider `/research/attestations` — a dedicated page mapping all known Van Vlaenderen attestations chronologically with bucket classifications and source links (longer term)\n\n---\n\n## 🟡 BACKLOG — MEDIUM PRIORITY\n\n### Content Improvements\n- [ ] **Name page** — add variant form section linking the four-bucket analysis to the spelling variants list; clarify that *de Flandre* / *de Flandria* / *Deflandre* are covered by the same framework\n- [ ] **Name page** — update CBG Familienamenbank note: WFB2 entry is now confirmed as purely PlN classification; update any hedging language that implied the entry was unknown\n- [ ] **Research Overview** — add link to `/research/bibliography` from the crystallisation paragraph source notes\n- [ ] **About page** — add Methodology & Sources link in project scope section (noted in handoff doc)\n- [ ] **Lineage page** — audit archive deep-links; verify all AGATHA / FamilySearch links still resolve\n- [ ] **All research pages** — add `<time dateTime="">` markup to "Updated April 2026" dates for Schema.org compatibility\n\n### Technical\n- [ ] **Code splitting** — Vite build warns that the single JS bundle exceeds 500KB. Split at route level using `React.lazy()` per page component to reduce initial load. Low urgency but worth doing before the site grows further.\n- [x] **Schema.org markup** — `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on all three dossier pages. ✅ April 12, 2026\n- [ ] **French locale (fr)** — backlogged pending Lille/French Flanders research content. Add to i18n infrastructure when content is ready; no architectural change required.\n- [ ] **`/research/methodology`** — Augustyn & Thoen (1987) entry notes the article is not widely available; if a digitised copy is located, add link.\n\n### SEO / Crawlability\n- [ ] Verify Gemini can now crawl research content — Gemini requested a reassessment once crawl blocks were removed and content was prerendered. Run a test crawl and check whether `/research/victor-dossier` content is visible.\n- [ ] Submit sitemap.xml to Google Search Console: https://vanvlaenderen.org/sitemap.xml\n- [ ] Submit sitemap.xml to Bing Webmaster Tools\n\n---\n\n## 🟢 BACKLOG — LONGER TERM\n\n- [ ] **`/research/attestations`** — dedicated chronological attestation page: every known Van Vlaenderen record mapped with date, location, source, bucket classification, and link. Derived from the Citation Chain Status table in the research todo. Highly crawlable; strong SEO signal for scholarly searches.\n- [x] **Gap dossier** — `/research/gap-dossier` live. Two upper anchors (Victor + Praet), 1517 Knesselare charter, TBO 184, three hypotheses, Y-DNA handoff. ✅ April 12, 2026\n- [x] **Private docs page** — `/docs` live. Three tabs: Research Notes, Website Backlog, Belgium Research Plan. Not indexed, not in sitemap, blocked in robots.txt. ✅ April 12, 2026 — `.sr-only` diagram summaries live on all three diagram pages. ✅ April 12, 2026\n- [ ] **Image alt text audit** — all manuscript and heraldic images should have specific descriptive alt text (e.g. "Heraldic shields from the Cronike Van Vlaenderen, 15th century manuscript, BnF" not "heraldic image").\n- [ ] **`/research/zeeland`** — possible future page if Zeeland thread develops (Laureys Arentsz, Arent van Vlaenderen). Skeleton only until primary sources are in hand.\n- [ ] **Constance\'s research** — Goal 2 thread (comital connection) may generate new dossier content once Rijksarchief Gent results are processed.\n\n---\n\n## 📋 CHANGELOG\n\n### April 13, 2026 — Citation corrections + selective scholarly tone pass\n\n**Factual corrections (taken without reservation)**\n- Victor dossier ref 6 (*Corvers en zeeschuimers*): author corrected from "Brouwers, D.D." → **Tailler, Margaux**; year 2012 → **2011**; supervisor Jan Dumolyn added. Same fix applied to VictorLineagePage.\n- bibliography.json *Cronike van Vlaenderen*: unverified Gallica ARK replaced with confirmed Utrecht University Repository link\n- NamePage spelling variants: removed duplicate "Van Vlaenderen" entry\n- Note: Buylaert [881, 882] = *Repertorium van de Vlaamse adel* (2011) confirmed via FMG citation pattern — citation stands as-is\n\n**Legitimate softening (taken)**\n- Homepage hypothesis two: "circumstantial evidence" → "merits further investigation, but at present remains a hypothesis requiring additional archival and genetic evidence"\n- Homepage hypothesis one: "single common ancestor" → adds "within the early modern documentary period" to prevent overreach\n- DNA page: "almost certainly share a common paternal ancestor" → "closely matching Y-DNA results — particularly at the terminal SNP level — may share a relatively recent common paternal ancestor" (scientific accuracy)\n- DNA page: "compelling possibility" → "raises the possibility" ("compelling" implies conclusion)\n- Victor lineage gap: internal date inconsistency fixed — "Adam, fl. 1441" → "last confirmed 1447"\n- Victor lineage gap: "strongest available non-genealogical evidence" → "one of the strongest available forms of indirect evidence"\n- NamePage Wessegem village note: "Baptism and marriage registers" → "Medieval territorial and seigneurial references associated with the Ursel area" (historically imprecise as stated)\n- NamePage Cronike caption: "Direct documentary evidence of the Van Vlaenderen name" → reframed as contextual/political evidence (the shields refer to counts, not the surname family — caption was genuinely misleading)\n\n**Deliberately preserved (feedback declined)**\n- ResearchPage crystallisation paragraph: "not a geographic descriptor, but a marker of comital illegitimate descent" — this is the site\'s central interpretive argument; over-hedging flattens it\n- Victor pull quote: "most direct documented link" — pull quotes are assertive by convention\n- Name page four-bucket conclusion: "often the progenitor" and "it makes its persistence meaningful" — these are in an explicitly argumentative section\n- DNA pull quote: "Genealogy without genetics is like a map without a compass" — public-facing page, acceptable\n- Mill page: "craft passed from father to son" — evocative and not inaccurate\n\n### April 12, 2026 — Citation audit across all three dossiers + bibliography\n\n**Vredius edition correction (critical)**\n- Identified that Vredius published two separate works: *Sigilla Comitum Flandriae* (1639, seals study) and *Genealogia Comitum Flandriae, Pars secunda* (1643, genealogical proofs). Bastard-line charter evidence is in the 1643 *Genealogia*, not the 1639 *Sigilla*\n- Victor dossier ref 1: corrected title from *Sigilla* → *Genealogia, Pars secunda* (1643); was already citing correct year\n- Praet dossier: corrected both inline text and ref 3 from *Sigilla* (1639) → *Genealogia* (1643); added two-work clarification note\n- bibliography.json Vredius entry: corrected title, publisher, URL → Royal Collection Trust catalogue (1639 Internet Archive link removed — pointed to wrong work)\n\n**Archival signatures added**\n- bibliography.json Brugse Vrije entry: full signature added — RAB, Brugse Vrije, TBO 184, nrs. 21300 (1547) and 21302 (1549), case ref 2026/0451\n- Victor dossier ref 1: RAG research lead note added — *Curiae partitionum Gandensium* may correspond to RAG Jaarregisters van de Keure or Staten van Goed series\n\n**Additional fixes**\n- Praet dossier ref 4: Espinoy Gallica link added (ark:/12148/bpt6k1180858, BnF shelfmark M-1432)\n- Praet lineage dossier ref 5: Nederland\'s Adelsboek — Scribd replaced with Internet Archive link\n- Praet lineage dossier ref 6: Buylaert — proper citation added (*Repertorium van de Vlaamse adel*, Academia Press, 2011 + *Eeuwen van ambitie*, 2010; UGent library link)\n- Victor dossier ref 4 + Praet lineage ref 2: Bethune *Epitaphes* flagged as print only, held at KBR Brussels and Ghent University Library\n- Victor dossier ref 6: *Corvers en zeeschuimers* given full author attribution (Brouwers, D.D., UGent thesis 2012)\n- bibliography.json *Cronike van Vlaenderen*: corrected to 1531 Vorsterman *Excellente Cronike van Vlaenderen* with proper Gallica ARK\n-\n- ### April 12, 2026 — Build fix, new pages live, branch cleanup, gap dossier, docs page\n\n**Bug fix — root cause of build failures**\n- JSON-LD schema curly braces inside TSX template literals were breaking Vite compilation\n- Fix: wrapped all JSON-LD blocks in `dangerouslySetInnerHTML` (`a27ed3b`)\n- Secondary issues resolved in same pass: `MethodologyPage.tsx` had never been committed; `App.tsx` was missing routes for `/research/bibliography` and `/research/methodology`; prerender template corruption bug fixed\n\n**New pages now live**\n- `/research/bibliography` — 22 annotated entries, colour-coded badges, access links; `public/data/bibliography.json` is now the source of truth for bibliography entries\n- `/research/methodology` — transcription/translation methodology + curated reading list; nav link live from `/research`\n- `/research/gap-dossier` — gap dossier: two upper anchors (Victor\'s line, Praet line), 1517 Knesselare charter, TBO 184 records, three working hypotheses (A/B/C), Y-DNA handoff to DNA page; Gemini scribal language note added to Hypothesis B\n- `/docs` — private working documents page (not indexed, not in sitemap, blocked in robots.txt); three tabs: Research Notes, Website Backlog, Belgium Research Plan (PII-curated); uses react-markdown + remark-gfm; bare app shell served (SSR skipped)\n\n**Cross-linking complete** (per docs spec)\n- Reference cards on Research overview link to Bibliography, Methodology, and Gap Dossier\n- Full Bibliography linked from all three dossiers\n- Methodology & Sources linked from About page\n\n**Schema**\n- `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on VictorDossierPage, PraetDossierPage, PraetLineageDossierPage, GapDossierPage\n\n**Accessibility**\n- `.sr-only` diagram summaries live on VictorDiagram, PraetDiagram, OverviewDiagram\n\n**Branch cleanup**\n- `dist/` removed from main branch tracking\n- `mvf-v2` deleted (remote + local)\n- `mvf` reset to match `main` exactly\n\n**Bug fix — Research page navigation**\n- `useNav.ts` was missing `methodology`, `bibliography`, and `gap-dossier` from `ResearchSubpage` type and `RESEARCH_PATHS` map\n\n**Dependencies added**\n- `react-markdown` ^10.1.0\n- `remark-gfm` ^4.0.1\n- `src/vite-env.d.ts` added to declare `?raw` imports\n\n\n\n**Bug fix — root cause of build failures**\n- JSON-LD schema curly braces inside TSX template literals were breaking Vite compilation\n- Fix: wrapped all JSON-LD blocks in `dangerouslySetInnerHTML` (`a27ed3b`)\n- Secondary issues resolved in same pass: `MethodologyPage.tsx` had never been committed; `App.tsx` was missing routes for `/research/bibliography` and `/research/methodology`; prerender template corruption bug fixed\n\n**New pages now live**\n- `/research/bibliography` — 22 annotated entries, colour-coded badges, access links; `public/data/bibliography.json` is now the source of truth for bibliography entries\n- `/research/methodology` — transcription/translation methodology + curated reading list; nav link live from `/research`\n\n**Cross-linking complete** (per docs spec)\n- Reference cards on Research overview link to Bibliography\n- Full Bibliography linked from all three dossiers\n- Methodology & Sources linked from About page\n\n**Schema**\n- `ScholarlyArticle` + `BreadcrumbList` JSON-LD live on VictorDossierPage, PraetDossierPage, PraetLineageDossierPage\n\n**Accessibility**\n- `.sr-only` diagram summaries live on VictorDiagram, PraetDiagram, OverviewDiagram\n\n**Branch cleanup**\n- `dist/` removed from main branch tracking\n- `mvf-v2` deleted (remote + local)\n- `mvf` reset to match `main` exactly\n\n**Bug fix — Research page navigation**\n- `useNav.ts` was missing `methodology` and `bibliography` from `ResearchSubpage` type and `RESEARCH_PATHS` map\n- Links on Research page were falling back to `/research` instead of navigating to new pages\n\n### April 11, 2026 — Major rearchitecture + content sprint\n\n**Architecture**\n- Replaced hash-based routing with React Router v7 (BrowserRouter + Routes)\n- 15 routes now have proper URL paths: `/`, `/mill`, `/name`, `/dna`, `/research` + 6 sub-routes, `/lineage`, `/about`, `/contact`\n- Added SSG prerender pipeline: each route bakes to `dist/<route>/index.html` with real HTML content at build time\n- Eliminated Manus deployment dependency — deploy pipeline is self-contained GitHub Actions on `main` branch\n- Created `useNav` hook replacing all `onNavigate`/`onNav` callback props across every page component\n- Nav.tsx now self-manages active state from `useLocation`\n\n**SEO**\n- Per-page title, description, canonical URL, and Open Graph tags on all 15 routes (via `pageMeta.ts` registry)\n- `sitemap.xml` auto-generated by prerender script with priority/changefreq per route\n- `robots.txt` with explicit `Allow` directives for GPTBot and Claude-Web\n- `index.html` upgraded with full OG, Twitter Card, and Schema.org WebSite structured data\n- SSR guards: FamilyTreeCanvas returns null in Node; ResearchMap (Leaflet) lazy-loaded\n\n**Content — Handoff edits (VVL_Manus_Handoff.docx)**\n- Edit 1-A: Replaced unsupported Praet cadet claim in Research Overview card\n- Edit 1-B: Added crystallisation insight paragraph to Research Overview (surname emerges at dynastic extinction point, 1384)\n- Edit 2-A: Replaced "Survival of Surname" section in Louis Friese pages with hedged open-question text (EN + NL)\n- Edit 2-B: Removed Rootenberg/Swanepoel citation (no documented Van Vlaenderen connection)\n- Edit 3-A: Not required — Joos framing already correctly hedged in current codebase\n\n**New pages**\n- `/research/methodology` — transcription and translation methodology (verbatim from VVL_Methodology_Manus.docx) + curated reading list with acquisition links (6 thematic groups)\n- `/research/bibliography` — 22 annotated entries in two sections: Primary Sources & Finding Aids, Scholarly Literature. Colour-coded source type badges, access links throughout.\n\n**Name page — four-bucket framework**\n- Added analytical section "What Van Vlaenderen Was Doing in Medieval Documents" addressing the toponymic dismissal\n- Four-bucket taxonomy: Governmental phrase / Feudal titulature / Official staff / Hereditary surname\n- Explicitly covers French variants (de Flandre, de Flandres)\n- Bucket 3→4 transition mechanism noted (office-holder\'s son inherits name, not office)\n- Map caption clarification: map plots locations, not pre-classified surname attestations\n- Bucket 4 row highlighted in gold with subtle box-shadow\n- Bilingual EN + NL\n\n---\n\n### Pre-April 11, 2026 — Prior sessions (summary)\n\n- React 19 + Vite + TypeScript scaffold built\n- i18n infrastructure: react-i18next, EN/NL locale files, DeepL sync script\n- All core page components: HomePage, MillPage, NamePage, DnaPage, ResearchPage, VictorLineagePage, LouisFrieseLineagePage, VictorDossierPage, PraetDossierPage, PraetLineageDossierPage, AboutPage, ContactPage, LineagePage\n- FamilyTreeCanvas procedural background animation\n- ResearchMap (Leaflet) interactive map\n- VictorDiagram, PraetDiagram, OverviewDiagram SVG components\n- Lineage page: 14 generations from Jeremiah (~1575) to present with TypeScript types and archive deep-links\n- About page copy developed collaboratively\n- Initial multilingual implementation\n\n---\n*See github.com/iamabotama/vanvlaenderen.org/commits/main for full commit history.*\n';
const page = {
  minHeight: "100vh",
  background: "var(--bg, #0d1117)",
  color: "var(--text, #e6e6e6)",
  fontFamily: "Georgia, serif",
  paddingBottom: "4rem"
};
const header = {
  background: "rgba(232, 184, 48, 0.06)",
  borderBottom: "1px solid rgba(232, 184, 48, 0.2)",
  padding: "1.5rem 2rem 1rem"
};
const tabBar = {
  display: "flex",
  gap: "0.5rem",
  padding: "1rem 2rem 0",
  borderBottom: "1px solid rgba(232, 184, 48, 0.15)",
  flexWrap: "wrap"
};
const tabBtn = (active2) => ({
  background: active2 ? "rgba(232, 184, 48, 0.15)" : "transparent",
  border: active2 ? "1px solid rgba(232, 184, 48, 0.4)" : "1px solid rgba(255,255,255,0.1)",
  color: active2 ? "#e8b830" : "#aaa",
  padding: "0.4rem 1rem",
  borderRadius: "4px 4px 0 0",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontFamily: "Georgia, serif",
  marginBottom: "-1px",
  transition: "all 0.15s"
});
const content = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "2rem"
};
const mdWrap = {
  lineHeight: 1.7,
  fontSize: "0.92rem"
};
function BelgiumPlan() {
  return /* @__PURE__ */ jsxs("div", { style: mdWrap, children: [
    /* @__PURE__ */ jsx("h1", { style: { color: "#e8b830", borderBottom: "1px solid rgba(232,184,48,0.3)", paddingBottom: "0.5rem" }, children: "Belgium Genealogy Research Trip" }),
    /* @__PURE__ */ jsxs("p", { style: { color: "#aaa", fontStyle: "italic" }, children: [
      "Constance Van Flandern | Michael Van Flandern",
      /* @__PURE__ */ jsx("br", {}),
      "March 27 – April 3, 2026 · Bassevelde, Ghent, Aalter, Antwerp, Bruges"
    ] }),
    /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830" }, children: "Trip Overview" }),
    /* @__PURE__ */ jsx("p", { children: "Three research goals: (1) push the Van Vlaenderen lineage further back using pre-parish records — land registers, estate inventories, feudal court records, and schepenbank documents — particularly for the period 1450–1650; (2) gather evidence to determine whether the Meetjesland Van Vlaenderen families share a common origin with the noble Van Vlaenderen lines descending from the natural sons of Louis II de Male, Count of Flanders; and (3) absorb the landscape, architecture, and regional history that shaped our ancestors' lives." }),
    /* @__PURE__ */ jsx("table", { style: { width: "100%", borderCollapse: "collapse", margin: "1rem 0", fontSize: "0.88rem" }, children: /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { padding: "4px 12px 4px 0", color: "#e8b830", whiteSpace: "nowrap" }, children: "Base" }),
        /* @__PURE__ */ jsx("td", { children: "Bassevelde" })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { padding: "4px 12px 4px 0", color: "#e8b830", whiteSpace: "nowrap" }, children: "Rijksarchief Gent" }),
        /* @__PURE__ */ jsxs("td", { children: [
          "Tue & Thu (by appt.) · ",
          /* @__PURE__ */ jsx("a", { href: "mailto:Rijksarchief.Gent@arch.be", style: { color: "#60a5fa" }, children: "Rijksarchief.Gent@arch.be" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { padding: "4px 12px 4px 0", color: "#e8b830", whiteSpace: "nowrap" }, children: "FV Documentatiecentrum Aalter" }),
        /* @__PURE__ */ jsxs("td", { children: [
          "Sat AM · ",
          /* @__PURE__ */ jsx("a", { href: "mailto:archief@aalter.be", style: { color: "#60a5fa" }, children: "archief@aalter.be" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { padding: "4px 12px 4px 0", color: "#e8b830", whiteSpace: "nowrap" }, children: "FelixArchief Antwerp" }),
        /* @__PURE__ */ jsx("td", { children: "Wed (Rik meeting)" })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { padding: "4px 12px 4px 0", color: "#e8b830", whiteSpace: "nowrap" }, children: "Bruges archive" }),
        /* @__PURE__ */ jsx("td", { children: "Thu AM · Case ref: 2026/0451" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("blockquote", { style: { borderLeft: "3px solid #e8b830", paddingLeft: "1rem", color: "#aaa", margin: "1rem 0" }, children: [
      /* @__PURE__ */ jsx("strong", { children: "IMPORTANT:" }),
      " Rijksarchief Gent reading room is open Tuesday, Wednesday, and Thursday ONLY — by appointment. Book both slots (Tue Mar 31 + Thu Apr 2) now via email. Confirm Easter week opening. Pre-request specific collections (see Research Plan)."
    ] }),
    /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830", marginTop: "2rem" }, children: "Location 1 — Rijksarchief Gent" }),
    /* @__PURE__ */ jsx("p", { style: { color: "#aaa", fontSize: "0.85rem" }, children: "Bagattenstraat 43, 9000 Gent · Open Tue/Wed/Thu by appointment · Visit: Tuesday March 31" }),
    /* @__PURE__ */ jsx("p", { children: "Twenty documents pre-requested across two research threads. Michael works Goal 1 (pre-parish records); Constance works Goal 2 (comital connection). Reconvene at midday." }),
    /* @__PURE__ */ jsx("h3", { style: { color: "#60a5fa" }, children: "Michael — Goal 1: Pre-Parish Records (M-1 through M-10)" }),
    [
      { id: "M-1", title: "Ambacht Boekhoute — Landboeken (AR22)", body: "Bunderboek van Bassevelde; Evenboek van den ambachte van Bouchaute (Boekhoute, Bassevelde, Oosteeklo); kopie landboek 1679 (1694). Per-parcel owner and tenant listings. Search all Van Vlaenderen entries; note neighbouring parcels.", note: "From early 17th century, landboeken were accompanied by parcel maps — often the oldest cartographic source showing a complete village. Ask whether maps survive for Bassevelde." },
      { id: "M-2", title: "Ambacht Boekhoute — Wettelijke Passeringen (AR22, sectie III.A.3), 1538–1650", body: "Legal deeds: property sales, leases, inheritances, debts. Search Van Vlaenderen as buyer, seller, witness, or party in Bassevelde, Boekhoute, Oosteeklo." },
      { id: "M-3", title: "Ambacht Boekhoute — Procesdossiers (AR22, sectie III.B.9), 1538–1650", body: "Court cases before the vierschaar and in appeal before the Raad van Vlaanderen. Search Van Vlaenderen as plaintiff or defendant." },
      { id: "M-4", title: "Ambacht Assenede — Schepenbank en Wettelijke Passeringen, 1500–1650", body: "Legal deeds and court records. Search Van Vlaenderen as buyer, seller, witness, or party. Also ask archivist about dénombrements referencing Van Vlaenderen tenants in the Leenhof Ten Hulle te Bassevelde." },
      { id: "M-5", title: "Ambacht Assenede — Leenhof Ten Hulle te Bassevelde, 13th century–1650", body: "Feudal court records going back to the 13th century. Search dénombrements and lease registers for Van Vlaenderen as feudal tenant or leaseholder." },
      { id: "M-6", title: "Kasselrij Oudburg — Rekeningen van de Baljuws", body: "Series 1009–1013 (1605–1710); nr. 1010 (Jacques Adornes, 1558–1559). Bailiff accounts sometimes name prominent landholders by parish. Search Van Vlaenderen in Bassevelde, Oostwinkel, Waarschoot." },
      { id: "M-7", title: "Kasselrij Oudburg — Denombrement van Paarden en Koeien, nr. 819 (1580–1589)", body: "Per-parish livestock census naming farm operators. The generation immediately before Jeremiah (~1575) — high potential for naming Van Vlaenderen farmers across Meetjesland parishes." },
      { id: "M-8", title: "Ambacht Waarschoot — Kadaster/Terriers/Zettingboeken + Wezenkamer (AR190, sectie II.A + IV), 1571–1680", body: "Tax registers and orphan chamber records for Waarschoot. Wezenkamer (orphan chamber) records document minor children's property and guardianship when a parent died — often name grandparents and other relatives. Relevant to Petrus Van Vlaenderen (married Waarschoot 1655) and Livinus Van Vlaenderen (born Waarschoot 1658)." },
      { id: "M-9", title: "Priorij van Waarschoot — Renteboeken en Eigendomsregisters", body: "Rental rolls and property registers from the priory. The priory held extensive land in Waarschoot and its records may name Van Vlaenderen tenants predating the parish registers. Ask archivist what survives." },
      { id: "M-10", title: "Ambacht Ursel — Staten van Goed: Index + Vroegste Reeks (AR181)", body: "Nr. 516 (index on staten van goed and wettelijke passeringen, 1614–1742) — consult this first as a roadmap to the entire Ursel collection. Then nrs. 183–199 (staten van goed, voogdijrekeningen, akten van verdelingen, 1573–1689, with index) — earliest series, reaching back to 1573.", note: "AR181 also contains item nr. 627: 'Pierre van Vlaendren c. Pierre Bogaert, 1786' — a Van Vlaenderen litigating in the Ursel/Wessegem jurisdiction as late as 1786. Flag for Constance." }
    ].map((req) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1.25rem", paddingLeft: "1rem", borderLeft: "2px solid rgba(96,165,250,0.3)" }, children: [
      /* @__PURE__ */ jsxs("p", { style: { margin: "0 0 0.25rem", fontWeight: "bold" }, children: [
        /* @__PURE__ */ jsx("span", { style: { color: "#60a5fa" }, children: req.id }),
        " — ",
        req.title
      ] }),
      /* @__PURE__ */ jsx("p", { style: { margin: "0 0 0.25rem", fontSize: "0.88rem" }, children: req.body }),
      req.note && /* @__PURE__ */ jsxs("p", { style: { margin: "0.25rem 0 0", fontSize: "0.83rem", color: "#e8b830", fontStyle: "italic" }, children: [
        "⚑ ",
        req.note
      ] })
    ] }, req.id)),
    /* @__PURE__ */ jsx("h3", { style: { color: "#a78bfa", marginTop: "2rem" }, children: "Constance — Goal 2: Comital Connection (C-1 through C-10)" }),
    [
      { id: "C-1", title: "Oorkonden Graven van Vlaanderen — Testament Victor van Vlaenderen, 1430", body: "Primary documentary target for the noble connection. The testament of 'her Victor van Vlaendren' named brothers Robert and Charles van Vlaenderen as executors and granted the Lordship of Wessegem. Ask specifically whether an original, copy, or regest survives in the charter collection." },
      { id: "C-2", title: "Oorkonden Graven van Vlaanderen — Heerlijkheid Wessegem/Ursel, 15th–16th century", body: "Any charters or regests referencing the Lordship of Wessegem and the Van Vlaenderen name. Seeking descendants of Victor: sons Lodewyc, Janne, and Adam van Vlaenderen." },
      { id: "C-3", title: "Oorkonden Graven van Vlaanderen — Heerlijkheid Praet, 15th–16th century", body: "Records referencing cadet branches of the Praet line: Anton, Josse (Joos), and Jacob van Vlaenderen — individuals who may have transitioned from the noble Praet line into the Meetjesland gentry." },
      { id: "C-4", title: "Ambacht Ursel — Leenhof van Wessegem; Schepenbank van Wessegem; Wessegemse Renten; Wettelijke Passeringen nr. 395 (AR181)", body: "Feudal court records, schepenbank registers, and rent registers of the Lordship of Wessegem — Victor van Vlaenderen's own lordship. Nr. 395 (1671–1681) explicitly covers Wessegem and Ursel 't Vrije. Search all Van Vlaenderen entries. See also procesdossier nr. 627: Pierre van Vlaendren c. Pierre Bogaert, 1786." },
      { id: "C-5", title: "Ambacht Ursel — Wettelijke Passeringen, Vroegste Reeksen (AR181)", body: "Nr. 401 (1542, 1601–1619) — PRIORITY: earliest acts going back to 1542, covering all lordships within Ambacht Ursel including Wessegem. Nr. 388 (1619–1643, with index nr. 389); nr. 390 (1642–1652); nr. 391 (1642–1665)." },
      { id: "C-6", title: "Ambacht Ursel — Ferieboeken (Procedurerollen) (AR181)", body: "Nr. 531 (1586–1599); nr. 532 (1599–1607); nr. 533 (1609–1612). Court procedure rolls naming all parties in local cases — systematic source for the Van Vlaenderen surname in the Ursel/Wessegem jurisdiction in the generations immediately after Jeremiah (~1575)." },
      { id: "C-7", title: "Staten van Goed — Heerlijkheid en Baronie Praet met Oedelem", body: "Estate inventories from the Praet lordship jurisdiction. Any Van Vlaenderen as tenant, heir, or party before 1600 would be a strong circumstantial bridge to the noble Flanders-Praet line. Ask archivist which item numbers cover the period before 1600." },
      { id: "C-8", title: "Sint-Baafsabdij — Heerlijkheidsarchief en Renteboeken, Meetjesland", body: "The Sint-Baafsabdij controlled vast East Flemish landholdings. Its rental rolls and lordship registers may name Van Vlaenderen tenants in the 15th–16th century in Bassevelde, Oostwinkel, Waarschoot, or Ursel. Ask archivist to advise on relevant items." },
      { id: "C-9", title: "Raad van Vlaanderen — Procesdossiers", body: "High court appeals where a Van Vlaenderen party disputes land or inheritance in Bassevelde, Oostwinkel, Waarschoot, Ursel, or Boekhoute. Court dossiers can document family relationships not visible in parish records. Ask archivist to advise on available indices." },
      { id: "C-10", title: "Oorkonden Graven van Vlaanderen — Erkenning Natuurlijke Kinderen Lodewijk II van Male", body: "Dotation or recognition charters for Victor van Vlaenderen and Louis 'Friese' van Vlaenderen — would name the mother, date of recognition, and lands granted. Ask archivist to confirm whether such documents survive in the charter collection." }
    ].map((req) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1.25rem", paddingLeft: "1rem", borderLeft: "2px solid rgba(167,139,250,0.3)" }, children: [
      /* @__PURE__ */ jsxs("p", { style: { margin: "0 0 0.25rem", fontWeight: "bold" }, children: [
        /* @__PURE__ */ jsx("span", { style: { color: "#a78bfa" }, children: req.id }),
        " — ",
        req.title
      ] }),
      /* @__PURE__ */ jsx("p", { style: { margin: 0, fontSize: "0.88rem" }, children: req.body })
    ] }, req.id)),
    /* @__PURE__ */ jsx("p", { style: { fontStyle: "italic", color: "#aaa", fontSize: "0.85rem" }, children: "Constance: after working document requests, use the AGATHA reading room terminals to search Van Vlaenderen across East Flemish collections not covered above. This costs no document slot." }),
    /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830", marginTop: "2.5rem" }, children: "Location 2 — FV Documentatiecentrum Aalter" }),
    /* @__PURE__ */ jsx("p", { style: { color: "#aaa", fontSize: "0.85rem" }, children: "ArtA'A, Stationsplein 25, 9880 Aalter · Open: Tue & Thu 9:00–19:00 | Sat 9:00–13:00 · €4 day entry (cash)" }),
    /* @__PURE__ */ jsx("p", { children: "Your visit: Saturday, March 28, 9:00–13:00. The Meetjesland genealogy specialists. Use this visit to identify specific document numbers before your Rijksarchief days." }),
    /* @__PURE__ */ jsxs("ul", { style: { fontSize: "0.88rem", lineHeight: 1.8 }, children: [
      /* @__PURE__ */ jsx("li", { children: "Staten van Goed — Ambacht Assenede I (1521–1624) and II (1625–1681) — Indexed by Marijn Claeys. Search all Van Vlaenderen entries. Note reference numbers for original document requests at Rijksarchief" }),
      /* @__PURE__ */ jsx("li", { children: "Staten van Goed — Ambacht Boekhoute I–III — Covers the Bassevelde jurisdiction directly" }),
      /* @__PURE__ */ jsx("li", { children: "Staten van Goed — Ambacht Waarschoot, Oostwinkel en Ronsele — Three volumes; covers 17th-century ancestral parishes" }),
      /* @__PURE__ */ jsx("li", { children: "Staten van Goed — Heerlijkheid en Baronie Praet met Oedelem — Indexed by R.L. Dewulf-Heus. Any Van Vlaenderen entry here connects directly to the noble Praet line" }),
      /* @__PURE__ */ jsx("li", { children: "Processed parish registers — Oostwinkel, Waarschoot, Bassevelde, Boekhoute" }),
      /* @__PURE__ */ jsx("li", { children: "Microfilm registers — Oostwinkel and Ronsele available on microfilm here" })
    ] }),
    /* @__PURE__ */ jsx("p", { style: { color: "#e8b830", fontStyle: "italic", fontSize: "0.85rem" }, children: "⚑ Ask the volunteers specifically about Van Vlaenderen. These are local specialists who may know of references, published family histories, or other researchers working on the same name." }),
    /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830", marginTop: "2.5rem" }, children: "Location 3 — FelixArchief Antwerp + Meeting with Rik" }),
    /* @__PURE__ */ jsx("p", { style: { color: "#aaa", fontSize: "0.85rem" }, children: "Oude Leeuwenrui 29, 2000 Antwerpen · Wednesday, April 1" }),
    /* @__PURE__ */ jsx("p", { children: "Primarily a meeting with Rik rather than independent archive research. Key questions:" }),
    /* @__PURE__ */ jsxs("ul", { style: { fontSize: "0.88rem", lineHeight: 1.8 }, children: [
      /* @__PURE__ */ jsx("li", { children: "Penningkohieren — 16th-century tax registers for East Flanders parishes — do any survive at FelixArchief that aren't at Rijksarchief Gent?" }),
      /* @__PURE__ */ jsx("li", { children: "Raad van Vlaanderen records — High court appeals from East Flemish families sometimes document land disputes and chains of ownership extending back before the parish era" }),
      /* @__PURE__ */ jsx("li", { children: "Van Vlaenderen in Antwerp records — The surname appears in Brussels (Laurent, 1645) and Ghent independently of the Meetjesland line — has Rik encountered it in any Antwerp-area sources?" }),
      /* @__PURE__ */ jsx("li", { children: "Regional expertise — Rik may know of published genealogies, heemkundige studies, or other researchers working on Meetjesland families that haven't surfaced in your own searches" })
    ] }),
    /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830", marginTop: "2.5rem" }, children: "Location 4 — Bruges State Archives (Rijksarchief Brugge)" }),
    /* @__PURE__ */ jsx("p", { style: { color: "#aaa", fontSize: "0.85rem" }, children: "Thursday, April 2 · Appointment: webshop.arch.be/reservations · Case reference: 2026/0451 · Two seats: Michael + Constance" }),
    /* @__PURE__ */ jsx("p", { children: "The Bruges archivist has confirmed two Joos Van Vlaenderen estate records from 1547 and 1549 in the Brugse Vrije collection — the oldest known documents naming a Van Vlaenderen in the Meetjesland / West Flemish borderzone." }),
    [
      { id: "B-1", title: "TBO 184 nr. 21300 (CONFIRMED)", body: "Brugse Vrije. Staten van Goed. Eerste Reeks. Estate/guardianship account relating to Joos Van Vlaenderen, 1547. Read carefully for heirs, guardians, witnesses, property location, and any further Van Vlaenderen names." },
      { id: "B-2", title: "TBO 184 nr. 21302 (CONFIRMED)", body: "Brugse Vrije. Staten van Goed. Eerste Reeks. Estate/guardianship account relating to Joos Van Vlaenderen, 1549. Two records two years apart suggest ongoing guardianship — possibly for minor children after Joos's death. Calculate birth years of any named children: could they align with Jeremiah (~1575)?", note: "Key questions in both documents: What is the geographic location of Joos's property — does it fall within the Meetjesland corridor? Who are the heirs, guardians, and witnesses? Are any other Van Vlaenderen individuals named?" },
      { id: "B-3", title: "TBO 184 — Adjacent Numbers or Further Van Vlaenderen Entries", body: "Ask the archivist whether numbers 21299, 21301, or 21303 relate to the same estate, or whether any other Van Vlaenderen entries appear elsewhere in TBO 184." },
      { id: "B-4", title: "Brugse Vrije — Leenboeken (Feudal Registers)", body: "Any feudal register entries naming Van Vlaenderen as landholder or tenant in parishes adjacent to Bassevelde, Oostwinkel, or Waarschoot, 15th–16th century. The Brugse Vrije leenboeken extend back to the early 15th century and could reach toward Victor van Vlaenderen's generation." },
      { id: "B-5", title: "Brugse Vrije — Schepenbank Wettelijke Passeringen, c. 1530–1560", body: "Legal deeds recorded before the Brugse Vrije court in the decades preceding Joos's 1547/1549 estate records. Seeking Joos Van Vlaenderen as an active adult in property transactions, loans, or witness appearances that would name family members and establish his geographic location." }
    ].map((req) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1.25rem", paddingLeft: "1rem", borderLeft: "2px solid rgba(232,184,48,0.35)" }, children: [
      /* @__PURE__ */ jsxs("p", { style: { margin: "0 0 0.25rem", fontWeight: "bold" }, children: [
        /* @__PURE__ */ jsx("span", { style: { color: "#e8b830" }, children: req.id }),
        " — ",
        req.title
      ] }),
      /* @__PURE__ */ jsx("p", { style: { margin: "0 0 0.25rem", fontSize: "0.88rem" }, children: req.body }),
      req.note && /* @__PURE__ */ jsxs("p", { style: { margin: "0.25rem 0 0", fontSize: "0.83rem", color: "#e8b830", fontStyle: "italic" }, children: [
        "⚑ ",
        req.note
      ] })
    ] }, req.id)),
    /* @__PURE__ */ jsx("h3", { style: { color: "#e8b830" }, children: "Research Strategy — Bruges" }),
    /* @__PURE__ */ jsx("p", { style: { fontSize: "0.88rem" }, children: "Constance: work B-1 and B-2 methodically — transcribe every personal name, property location, and relationship. Michael: work B-3 through B-5 with the archivist's guidance. Midday check-in to cross-reference findings." }),
    /* @__PURE__ */ jsxs("ul", { style: { fontSize: "0.88rem", lineHeight: 1.8 }, children: [
      /* @__PURE__ */ jsx("li", { children: "Transcribe all personal names in full — every heir, guardian, witness, and creditor" }),
      /* @__PURE__ */ jsx("li", { children: "Note all property locations — does any fall within the Meetjesland corridor linking Bassevelde and Oostwinkel?" }),
      /* @__PURE__ */ jsx("li", { children: "If minor children are named, calculate approximate birth years — alignment with Jeremiah (~1575) or Noe (~1605) would be a major breakthrough" }),
      /* @__PURE__ */ jsx("li", { children: "Note any Van Vlaenderen individuals other than Joos" })
    ] })
  ] });
}
function MarkdownDoc({ source }) {
  return /* @__PURE__ */ jsx("div", { style: { ...mdWrap, overflowX: "auto" }, children: /* @__PURE__ */ jsx(
    ReactMarkdown,
    {
      remarkPlugins: [remarkGfm],
      components: {
        h1: ({ children }) => /* @__PURE__ */ jsx("h1", { style: { color: "#e8b830", borderBottom: "1px solid rgba(232,184,48,0.3)", paddingBottom: "0.4rem", marginTop: "2rem" }, children }),
        h2: ({ children }) => /* @__PURE__ */ jsx("h2", { style: { color: "#e8b830", marginTop: "1.75rem" }, children }),
        h3: ({ children }) => /* @__PURE__ */ jsx("h3", { style: { color: "#60a5fa", marginTop: "1.25rem" }, children }),
        h4: ({ children }) => /* @__PURE__ */ jsx("h4", { style: { color: "#a78bfa", marginTop: "1rem" }, children }),
        a: ({ href, children }) => /* @__PURE__ */ jsx("a", { href, style: { color: "#60a5fa" }, target: "_blank", rel: "noopener noreferrer", children }),
        code: ({ children }) => /* @__PURE__ */ jsx("code", { style: { background: "rgba(255,255,255,0.08)", padding: "0.1em 0.35em", borderRadius: "3px", fontSize: "0.85em", fontFamily: "monospace" }, children }),
        blockquote: ({ children }) => /* @__PURE__ */ jsx("blockquote", { style: { borderLeft: "3px solid rgba(232,184,48,0.4)", paddingLeft: "1rem", color: "#aaa", margin: "1rem 0" }, children }),
        table: ({ children }) => /* @__PURE__ */ jsx("table", { style: { borderCollapse: "collapse", width: "100%", margin: "1rem 0", fontSize: "0.88rem" }, children }),
        th: ({ children }) => /* @__PURE__ */ jsx("th", { style: { textAlign: "left", padding: "6px 10px", background: "rgba(232,184,48,0.1)", borderBottom: "1px solid rgba(232,184,48,0.3)", color: "#e8b830" }, children }),
        td: ({ children }) => /* @__PURE__ */ jsx("td", { style: { padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }, children }),
        li: ({ children }) => /* @__PURE__ */ jsx("li", { style: { marginBottom: "0.2rem" }, children }),
        hr: () => /* @__PURE__ */ jsx("hr", { style: { border: "none", borderTop: "1px solid rgba(232,184,48,0.15)", margin: "2rem 0" } }),
        strong: ({ children }) => /* @__PURE__ */ jsx("strong", { style: { color: "#e0e0e0" }, children })
      },
      children: source
    }
  ) });
}
const TABS = [
  { id: "research", label: "Research To-Do" },
  { id: "sources", label: "Sources & Reading" },
  { id: "analysis", label: "Analysis Log" },
  { id: "website", label: "Website Backlog" },
  { id: "belgium", label: "Belgium Trip 2026" }
];
function DocsPage() {
  const [active2, setActive] = useState("research");
  return /* @__PURE__ */ jsxs("div", { style: page, children: [
    /* @__PURE__ */ jsxs("div", { style: header, children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: "0.75rem", letterSpacing: "0.1em", color: "#e8b830", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Van Vlaenderen · Working Documents" }),
      /* @__PURE__ */ jsx("h1", { style: { margin: 0, fontSize: "1.4rem", color: "#e6e6e6" }, children: "Research & Project Files" }),
      /* @__PURE__ */ jsx("p", { style: { margin: "0.35rem 0 0", fontSize: "0.82rem", color: "#666" }, children: "Private — not indexed or linked from the public site. Share URL directly with collaborators." })
    ] }),
    /* @__PURE__ */ jsx("div", { style: tabBar, children: TABS.map((tab2) => /* @__PURE__ */ jsx("button", { style: tabBtn(active2 === tab2.id), onClick: () => setActive(tab2.id), children: tab2.label }, tab2.id)) }),
    /* @__PURE__ */ jsxs("div", { style: content, children: [
      active2 === "research" && /* @__PURE__ */ jsx(MarkdownDoc, { source: researchTodo }),
      active2 === "sources" && /* @__PURE__ */ jsx(MarkdownDoc, { source: readingList }),
      active2 === "analysis" && /* @__PURE__ */ jsx(MarkdownDoc, { source: analysisSessions }),
      active2 === "website" && /* @__PURE__ */ jsx(MarkdownDoc, { source: websiteTodo }),
      active2 === "belgium" && /* @__PURE__ */ jsx(BelgiumPlan, {})
    ] })
  ] });
}
const TYPE_COLORS = {
  "Primary Source": { bg: "rgba(232,184,48,0.15)", color: "#e8b830" },
  "Finding Aid": { bg: "rgba(74,222,128,0.15)", color: "#4ade80" },
  "Belgian Historiography": { bg: "rgba(147,197,253,0.15)", color: "#93c5fd" },
  "Meetjesland": { bg: "rgba(196,165,255,0.15)", color: "#c4a5ff" },
  "Methodology": { bg: "rgba(251,191,36,0.15)", color: "#fbbf24" },
  "Genetic Genealogy": { bg: "rgba(52,211,153,0.15)", color: "#34d399" }
};
function typeBadge(type) {
  const c = TYPE_COLORS[type] ?? { bg: "rgba(255,255,255,0.1)", color: "#ccc" };
  return /* @__PURE__ */ jsx("span", { style: {
    background: c.bg,
    color: c.color,
    fontSize: "0.7rem",
    fontFamily: "var(--font-ui)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "2px 8px",
    borderRadius: "3px",
    border: `1px solid ${c.color}33`,
    whiteSpace: "nowrap"
  }, children: type });
}
function EntryCard({ e }) {
  return /* @__PURE__ */ jsxs("div", { style: {
    borderLeft: "2px solid rgba(232,184,48,0.25)",
    paddingLeft: "1rem",
    marginBottom: "1.5rem"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.3rem" }, children: [
      typeBadge(e.type),
      /* @__PURE__ */ jsx("span", { style: { color: "var(--gold)", fontWeight: 600, fontFamily: "var(--font-ui)", fontSize: "0.9rem" }, children: e.author }),
      /* @__PURE__ */ jsxs("span", { style: { color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }, children: [
        "(",
        e.year,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { color: "rgba(255,255,255,0.9)", fontStyle: "italic", marginBottom: "0.25rem", fontSize: "0.95rem" }, children: e.title }),
    e.publisher && /* @__PURE__ */ jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: "0.25rem" }, children: e.publisher }),
    /* @__PURE__ */ jsx("div", { style: { color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.6 }, children: e.note }),
    e.url && /* @__PURE__ */ jsx(
      "a",
      {
        href: e.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: researchStyles.refLink,
        style: { display: "inline-block", marginTop: "0.4rem", fontSize: "0.8rem" },
        children: e.urlLabel ?? e.url
      }
    )
  ] });
}
function BibliographyPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("/data/bibliography.json").then((r) => {
      if (!r.ok) throw new Error();
      return r.json();
    }).then(setData).catch(() => setError(true));
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sources & Scholarship — Van Vlaenderen" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Primary sources, archival finding aids, and scholarly literature cited in the Van Vlaenderen research dossiers." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/bibliography" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.inner, children: [
      /* @__PURE__ */ jsx("h1", { children: "Sources & Scholarship" }),
      /* @__PURE__ */ jsx("p", { style: { color: "rgba(255,255,255,0.65)", marginBottom: "2rem", maxWidth: "680px", lineHeight: 1.7 }, children: "The primary sources, archival finding aids, and scholarly literature that underpin the research presented in the dossiers. Entries in the first section are directly quoted or cited. Entries in the second section are recommended reading for researchers interested in the broader historiographical context." }),
      error && /* @__PURE__ */ jsx("p", { style: { color: "#f87171" }, children: "Bibliography data could not be loaded." }),
      data && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
          /* @__PURE__ */ jsx("h2", { children: data.sections.primarySources.label }),
          Object.values(data.sections.primarySources.subsections).map((sub) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsx("h3", { style: {
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem"
            }, children: sub.label }),
            sub.entries.map((e, i) => /* @__PURE__ */ jsx(EntryCard, { e }, i))
          ] }, sub.label))
        ] }),
        /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
          /* @__PURE__ */ jsx("h2", { children: data.sections.scholarlyLiterature.label }),
          data.sections.scholarlyLiterature.groups.map((group) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: "2.5rem" }, children: [
            /* @__PURE__ */ jsx("h3", { style: {
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem"
            }, children: group.heading }),
            group.entries.map((e, i) => /* @__PURE__ */ jsx(EntryCard, { e }, i))
          ] }, group.heading))
        ] }),
        /* @__PURE__ */ jsxs("p", { style: { color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: "2rem" }, children: [
          "Last updated: ",
          data.lastUpdated
        ] })
      ] })
    ] })
  ] });
}
const heatmap1500 = "/assets/heatmap-1500-4BkW-n_x.png";
const heatmap1600 = "/assets/heatmap-1600-IVt8v83p.png";
const heatmap1700 = "/assets/heatmap-1700-DunssjTZ.png";
const tdStyle$1 = { padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", verticalAlign: "top", lineHeight: 1.5, fontSize: "0.88rem" };
const thStyle$1 = { padding: "10px 12px", color: "var(--gold)", textAlign: "left", fontWeight: 600, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid rgba(232,184,48,0.3)" };
function HeatMapFigure({ src, alt, caption }) {
  return /* @__PURE__ */ jsxs("figure", { style: { margin: "2rem 0" }, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        style: { width: "100%", borderRadius: "4px", border: "1px solid rgba(232,184,48,0.18)", display: "block" }
      }
    ),
    /* @__PURE__ */ jsx("figcaption", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic", marginTop: "0.6rem", lineHeight: 1.55, paddingLeft: "0.25rem" }, children: caption })
  ] });
}
function DistributionTable({ rows, caption }) {
  return /* @__PURE__ */ jsxs("div", { style: { margin: "1rem 0 2rem" }, children: [
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.78rem", fontFamily: "var(--font-ui)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }, children: caption }),
    /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }, children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Municipality" }),
        /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Region" }),
        /* @__PURE__ */ jsx("th", { style: { ...thStyle$1, textAlign: "right" }, children: "Count" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map(([place, region, count]) => /* @__PURE__ */ jsxs("tr", { style: { transition: "background 0.15s" }, children: [
        /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: /* @__PURE__ */ jsx("strong", { children: place }) }),
        /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: region }),
        /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, textAlign: "right", fontVariantNumeric: "tabular-nums", color: count === rows[0][2] ? "var(--gold)" : "var(--text-primary)" }, children: count })
      ] }, place)) })
    ] })
  ] });
}
function SurnameOriginsPage() {
  const navigate = useNavigate();
  const nav2 = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Four Functions, Three Clusters — The Van Vlaenderen Surname | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "A primary source and distributional analysis of the Van Vlaenderen surname: four documentary functions, three geographic clusters across three centuries, and competing hypotheses for the name's origin." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/name/surname-origins" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Four Functions, Three Clusters — The Van Vlaenderen Surname" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Distributional and documentary analysis testing the toponymic and bastard-line hypotheses for the Van Vlaenderen surname origin." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/name/surname-origins" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Four Functions, Three Clusters — The Van Vlaenderen Surname in the Documentary Record","description":"A primary source and distributional analysis of the Van Vlaenderen surname across four documentary functions and three geographic clusters.","url":"https://vanvlaenderen.org/name/surname-origins","inLanguage":"en","dateModified":"2026-04-15","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.heroImg, style: { backgroundImage: `url(${knightPhilip})`, backgroundPosition: "top center" }, children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · The Name" }),
        /* @__PURE__ */ jsx("h1", { children: "Four Functions, Three Clusters" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "A primary source and distributional analysis of the Van Vlaenderen surname: what the phrase was doing in medieval documents, where surname-bearing families actually lived, and what that tells us about the name's origin." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Research Article" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Analytical Challenge" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The surname Van Vlaenderen presents a problem that genealogical research alone cannot resolve. The name means, literally, ",
          /* @__PURE__ */ jsx("em", { children: "from Flanders" }),
          " — which makes it superficially indistinguishable from the hundreds of Flemish toponymic surnames that attached themselves to migrants as geographic labels. On that reading, tracking the surname's origin is not a genealogical question but a linguistic one, and every family bearing the name simply descends from someone who, at some point, moved away from Flanders into a community where their origin needed a label."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This project does not accept that reading as sufficient. The documentary and distributional evidence raises questions that pure toponymy does not answer. This article sets out what that evidence is, what it supports, and what it leaves unresolved." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Four Functions of the Phrase" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Before any surname-bearing individual can be identified in a historical source, the phrase ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " must be correctly interpreted. In the Flemish documentary record, it performs at least four distinct functions, and conflating them produces false evidence in either direction. The full framework is presented on ",
          /* @__PURE__ */ jsx("button", { onClick: () => nav2("/name"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "The Name page" }),
          "; the summary below provides the necessary context for this analysis."
        ] }),
        [
          {
            num: "1",
            label: "Governmental phrase",
            desc: "Souvereyne Kamer van Redeninge van Vlaenderen, De Gedeputeerde van de Staeden van Vlaenderen — institutional descriptors. These tell us where an institution operated, not who someone's family was.",
            muted: true
          },
          {
            num: "2",
            label: "Feudal titulature",
            desc: "Dienstman Mijnsheeren van Vlaenderen — vassal of my lord of Flanders. Denotes a relationship to the Count, not a family name.",
            muted: true
          },
          {
            num: "3",
            label: "Official staff designation",
            desc: "Mijns heeren van Vlaenderen messagier — messenger of my lord of Flanders. This is the function most likely to produce hereditary surnames: the son of a court official often inherited the name long after the office itself had passed.",
            muted: true
          },
          {
            num: "4",
            label: "Hereditary surname",
            desc: "Identifiable individuals and multi-generational family clusters using the name as a transmitted family identifier. Victor van Vlaenderen and his natural sons (1427–1447 charters); the Brugse Vrije testator Joos van Vlaenderen (1547); the East Flanders parish-record families across Bassevelde, Boekhoute, Ursel, and Waarschoot. Functions 1–3 must be excluded before Function 4 can be counted.",
            muted: false
          }
        ].map(({ num, label, desc, muted }) => /* @__PURE__ */ jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "2.5rem 1fr",
          gap: "0 1rem",
          padding: "1rem 1.25rem",
          marginBottom: "0.5rem",
          borderRadius: "4px",
          background: muted ? "rgba(255,255,255,0.02)" : "rgba(232,184,48,0.06)",
          border: muted ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(232,184,48,0.25)"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontSize: "1.4rem", fontWeight: 700, color: muted ? "var(--text-muted)" : "var(--gold)", lineHeight: 1, paddingTop: "0.1rem" }, children: num }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { fontWeight: 600, color: muted ? "var(--text-muted)" : "var(--text-primary)", marginBottom: "0.3rem", fontSize: "0.9rem" }, children: label }),
            /* @__PURE__ */ jsx("div", { style: { fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }, children: desc })
          ] })
        ] }, num))
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Distribution Data" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Geneanet's surname frequency data, drawn from user-contributed genealogical records, provides a broad distributional picture of where and when the surname Van Vlaenderen appears in the record by century. [",
          /* @__PURE__ */ jsx("a", { href: "https://en.geneanet.org/surnames/van%20VLAENDEREN", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--gold)" }, children: "¹" }),
          "]"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyBox, style: { marginTop: "1.5rem", marginBottom: "2rem" }, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, style: { fontSize: "0.9rem" }, children: "Methodological Caveat: Record Survival" }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }, children: [
            "The Geneanet data does not measure how many people bore the name in a given century — it measures how many ",
            /* @__PURE__ */ jsx("em", { children: "recorded" }),
            " individuals appear in user-contributed databases. Record survival varies enormously by region and period."
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }, children: "In Belgium, systematic parish registration only became widespread following the Council of Trent's mandate (1545–63), with implementation in rural Flemish parishes often lagging into the 1570s–80s. The wars of the Spanish Netherlands — the Spanish Fury (1576), the fall of Ghent (1584) — further thinned surviving registers. Belgian Van Vlaenderen families alive and reproducing in the early sixteenth century are, in many cases, simply invisible: the registers that would document them no longer exist." }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }, children: [
            "In French Flanders, the Ordinance of Villers-Cotterêts (1539) mandated civil registration earlier than the Tridentine reforms reached the southern Netherlands, and the Cassel area had good institutional record infrastructure. The apparent dominance of Volckerinckhove in the 1500 data therefore reflects, at least in part, that it is the ",
            /* @__PURE__ */ jsx("em", { children: "best-documented" }),
            " cluster at that point, not necessarily the oldest or largest. Where the Belgian data appears thin before 1600, the probable explanation is record loss, not a late founding event."
          ] }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 0 }, children: [
            "A further complication applies specifically to lines touching nobility. Where a surname-bearing family connects to a documented comital line — as all the Van Vlaenderen bastard branches do — Geneanet entries multiply sharply through repeated copying of the same individuals across user-contributed trees. A figure like 551 entries attributed to Volckerinckhove before 1500 almost certainly represents a much smaller number of real historical individuals, replicated many times. The raw counts should be treated as ",
            /* @__PURE__ */ jsx("em", { children: "clustering signals" }),
            ", not population estimates."
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.75rem", marginTop: "2rem" }, children: "c. 1500" }),
        /* @__PURE__ */ jsx(
          HeatMapFigure,
          {
            src: heatmap1500,
            alt: "Geneanet heat map showing Van Vlaenderen surname distribution c. 1500, concentrated in French Flanders near Volckerinckhove",
            caption: "Surname distribution c. 1500. The French Flanders cluster near Volckerinckhove/Cassel dominates. Belgian clusters are effectively absent — consistent with pre-Tridentine record scarcity rather than an absence of surname-bearing families. Source: Geneanet, accessed April 2026."
          }
        ),
        /* @__PURE__ */ jsx(
          DistributionTable,
          {
            caption: "Most common municipalities, c. 1500",
            rows: [
              ["Volckerinckhove", "Nord, France", "551"],
              ["Renescure", "Nord, France", "34"],
              ["Aalter", "Belgium", "11"],
              ["Bollezeele", "Nord, France", "5"],
              ["Waarschoot", "Belgium", "5"]
            ]
          }
        ),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.75rem", marginTop: "2.5rem" }, children: "c. 1600" }),
        /* @__PURE__ */ jsx(
          HeatMapFigure,
          {
            src: heatmap1600,
            alt: "Geneanet heat map showing Van Vlaenderen surname distribution c. 1600, with three distinct clusters in French Flanders, Gent/Meetjesland, and Brussels/Brabant",
            caption: "Surname distribution c. 1600. Three distinct clusters are now visible: French Flanders (Volckerinckhove/Cassel area), Gent/Meetjesland (centred on Sleidinge and Oostwinkel), and a smaller cluster near Brussels/Brabant (Wambeek). The emergence of the Belgian clusters reflects both genuine population growth and the onset of systematic parish registration after the 1570s–80s. Source: Geneanet, accessed April 2026."
          }
        ),
        /* @__PURE__ */ jsx(
          DistributionTable,
          {
            caption: "Most common municipalities, c. 1600",
            rows: [
              ["Volckerinckhove", "Nord, France", "539"],
              ["Sleidinge", "Belgium", "273"],
              ["Oostwinkel", "Belgium", "158"],
              ["Wambeek", "Belgium", "39"],
              ["Renescure", "Nord, France", "32"],
              ["Waarschoot", "Belgium", "30"],
              ["Gent", "Belgium", "22"],
              ["Evergem", "Belgium", "22"]
            ]
          }
        ),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.75rem", marginTop: "2.5rem" }, children: "c. 1700" }),
        /* @__PURE__ */ jsx(
          HeatMapFigure,
          {
            src: heatmap1700,
            alt: "Geneanet heat map showing Van Vlaenderen surname distribution c. 1700, with the Belgian cluster now rivalling French Flanders and a new Zeeland cluster visible",
            caption: "Surname distribution c. 1700. The Belgian cluster has grown substantially and now rivals French Flanders in recorded size. A cluster in Zeeuws-Vlaanderen/coastal Zeeland is visible for the first time — geographically consistent with Lodewijc van Vlaenderen's burial at Oostburg (before 1482) and the later Zeeland attestations. Source: Geneanet, accessed April 2026."
          }
        ),
        /* @__PURE__ */ jsx(
          DistributionTable,
          {
            caption: "Most common municipalities, c. 1700",
            rows: [
              ["Sleidinge", "Belgium", "552"],
              ["Volckerinckhove", "Nord, France", "523"],
              ["Oostwinkel", "Belgium", "346"],
              ["Evergem", "Belgium", "150"],
              ["Ertvelde", "Belgium", "121"],
              ["Gent", "Belgium", "85"],
              ["Ursel", "Belgium", "53"],
              ["Bassevelde", "Belgium", "48"]
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { marginTop: "2rem" }, children: [
          /* @__PURE__ */ jsx("p", { children: "Four observations follow from this data, accounting for the record-survival caveat." }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "The French Flanders cluster shows persistent geographic association with a documented bastard-line settlement." }),
            ' The Geneanet material consistently associates early Van Vlaenderen entries with the Volckerinckhove/Cassel zone — precisely the area where Jan "sans terre" van Vlaenderen, a documented natural son of Louis de Male, was granted the castle and lordship of Drincham in 1383, and where his descendants are documented through the 1470s. The raw count of 551 entries before 1500 almost certainly reflects noble-tree duplication rather than that many distinct individuals. The significance lies not in the number but in the geography: the earliest recurring documentary association of the hereditary surname falls in the zone where a bastard comital line was demonstrably settled.'
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "The Belgian cluster is large but its apparent sixteenth-century founding is partly a record artifact." }),
            " Sleidinge, Oostwinkel, and Evergem collectively hold over 500 recorded individuals by 1700. The cluster's near-invisibility in 1500 reflects the near-absence of Flemish parish records before c. 1570. The probable founding event belongs to the mid-fifteenth century — not the mid-sixteenth."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "A third, smaller cluster appears near Brussels by 1600." }),
            " Wambeek, in Flemish Brabant, emerges with 39 individuals and is consistent with a founding event in the mid-to-late sixteenth century with a geographic connection to Brabant."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "A Zeeland cluster becomes visible by 1700." }),
            " The 1700 heat map shows a concentration in Zeeuws-Vlaanderen/coastal Zeeland. This is geographically consistent with Lodewijc van Vlaenderen's burial at Oostburg (before 1482). However, a systematic sweep of over 3,000 individual mentions in Gysseling's onomastic index of the Vier Ambachten records (roughly 1240–1500, covering every scabinus, scoutate, and maenre record from the Sint-Baafsabdij, Sint-Pietersabdij, and related Zeeuws-Vlaanderen fonds) yielded zero Bucket 4 hits for the surname. Van Vlaenderen does not appear as a hereditary surname bearer in the region's medieval record. This rules out an indigenous Zeeuws-Vlaanderen formation and confirms the surname arrives into Bassevelde/Assenede from elsewhere — most likely the Ghent hinterland, consistent with the 1568 Franciscus attestation."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Progenitor Candidates" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The following tables set out the documented individuals who carried the Van Vlaenderen surname before the distributional clusters are established, together with their descendants in the surname-carrying line. All documentary evidence derives from a direct reading of Olivarius Vredius (",
          /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae" }),
          ", Pars Secunda, Tabula XVI, fol. 275–288, Bruges 1642–43) [²] and the Foundation for Medieval Genealogy MedLands: Flanders, Hainaut (v5.0, January 2025). [³]"
        ] }),
        /* @__PURE__ */ jsx("h3", { style: { color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.82rem" }, children: "Tier 1 — Natural sons of Louis II de Male" }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Name" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Territory" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Known descendants (surname-carrying)" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Attested dates" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Most plausible founding region" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: [
            {
              name: "Victor van Vlaenderen",
              territory: "Ursel & Wessegem, Meetjesland. Lord from 1399; reverted to crown 1431.",
              descendants: "Three natural sons: Lodewyc, Janne, Adam (attested 1427–1447). See Tier 2.",
              dates: "1399–1430",
              region: "Progenitor line — founding role exercised through sons",
              highlight: false
            },
            {
              name: "Loys 'le Frison' van Vlaenderen",
              territory: "Woestijne & Praet, Franc de Bruges. Granted 25 Dec 1373. Killed at Nicopolis 1396.",
              descendants: "Son Jan Heer van Praet; six-generation titled line to Jan van Onlede (d. 1523). See Tier 2.",
              dates: "1373–1396",
              region: "Progenitor line — founding role exercised through son Jan",
              highlight: false
            },
            {
              name: "Jan 'sans terre' van Vlaenderen",
              territory: "Drincham castle, near Cassel, French Flanders. Granted 22 Nov 1383. Killed at Nicopolis 1396.",
              descendants: "Son Jan Heer van Drincham; four documented generations to c. 1473. See Tier 2.",
              dates: "1383–1396",
              region: "Progenitor line — founding role exercised through son Jan",
              highlight: false
            },
            {
              name: "Loys 'le Hase' van Vlaenderen",
              territory: "No fixed lordship. Received confiscated goods of Gerard de Moor (1370). Killed at Nicopolis 1396.",
              descendants: "One illegitimate son: Renaud de Flandres, Lord of la Vacke (attested Feb 1397 only).",
              dates: "1370–1396",
              region: "Uncertain — no documented continuation after 1397",
              highlight: false
            },
            {
              name: "Robert [Roeland] van Vlaenderen",
              territory: "Elverdinghe & Vlamertinghe; Burgrave of Ypres.",
              descendants: "None. De Wrée explicitly records death sans generation, 21 Jan 1434.",
              dates: "1420–1434",
              region: "Eliminated — no children",
              highlight: false
            },
            {
              name: "Karel van Vlaenderen, Lord of Grutersale",
              territory: "Grutersale; buried Langemark near Ypres, d. 15 Sep 1491.",
              descendants: "One unnamed daughter (→ de Crane family). No sons. Tombstone anomaly: filius M'her Robrecht — parentage unresolved.",
              dates: "1430–1491",
              region: "West Flanders coastal — daughter's line lost the surname",
              highlight: false
            }
          ].map((row2) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: row2.name }),
            /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: row2.territory }),
            /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: row2.descendants }),
            /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: row2.dates }),
            /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: row2.region })
          ] }, row2.name)) })
        ] }) }),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: "0.82rem", color: "var(--gold)", marginBottom: "1rem", marginTop: "2.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }, children: "Tier 2 — Documented descendants carrying the surname" }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", background: "rgba(255,255,255,0.015)" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Name and parentage" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Territory / location" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Known descendants" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Attested dates" }),
            /* @__PURE__ */ jsx("th", { style: thStyle$1, children: "Most plausible founding region" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Adam van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "natural son of Victor; by Gertrud Lindekens" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Ghent / Meetjesland area. Transfers annuity in Ghent 1446/47. No fixed lordship." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "None documented. No wife named." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "1427–1447 N.S." }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, borderLeft: "2px solid var(--gold)", paddingLeft: "1rem" }, children: [
                /* @__PURE__ */ jsx("strong", { children: "Meetjesland / Ghent — strongest candidate for Belgian cluster." }),
                " Geographically closest to Sleidinge and Oostwinkel. Last attested 1447, three to four undocumented generations before Franciscus (1568). Record scarcity in the intervening period is the expected explanation for the gap, not a late founding event. See also:",
                " ",
                /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/victor-dossier"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Victor Archival Dossier →" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Janne van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "natural son of Victor; by Alyssen van Boyeghem" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Unknown — no lordship or location documented." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "None documented." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "1427–1442 N.S." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "Unknown region — cannot be excluded but provides no evidence to work with." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Lodewijc van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "natural son of Victor; by Alyssen van Boyeghem" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Oostburg, Zeeuws-Vlaanderen. Buried in choir of Oostburg church with wife Jacqueline de Wilde (d. Apr 1482)." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "Joos van Vlaenderen (died young, buried Oostburg — cannot be the Joos in the 1547 Brugse Vrije probate). Daughter Margareta (→ de Baenst; → van Schouteeten — surname lost). Documented male line ends." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "1427–1482" }),
              /* @__PURE__ */ jsxs("td", { style: tdStyle$1, children: [
                /* @__PURE__ */ jsx("strong", { children: "Zeeuws-Vlaanderen / Zeeland." }),
                " Documented male line ends at Oostburg. A systematic onomastic sweep of 3,000+ Zeeuws-Vlaanderen records (Gysseling, Vier Ambachten, c.1240–1500) yielded zero Bucket 4 hits — the surname is not indigenous to this region. An undocumented further child of Lodewijc could still anchor the Zeeland thread, but the bridge would not have been local."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Jan van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "son of Loys le Frison; Heer van Praet en de Woestijne" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Praet & Woestijne, Franc de Bruges. Active 1431–1439 in Ghent Keure records." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "Lodewijc Heer van Praet (d. 1488) + daughters. Six-generation titled line. Lodewijc's epitaph is at Aalter." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "1431–1442" }),
              /* @__PURE__ */ jsxs("td", { style: tdStyle$1, children: [
                /* @__PURE__ */ jsx("strong", { children: "Franc de Bruges / Brabant." }),
                " Lodewijc Heer van Praet's epitaph at Aalter — which appears in the 1500 distribution data with 11 individuals — merits attention. Later marriages into Gruithuyse and Bourgogne families are consistent with the Wambeek/Brussels cluster."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Jan van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "son of Jan sans terre; Heer van Drincham" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Drincham, near Cassel, French Flanders." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "Jan (Gen 3), Philippe (d. unmarried), Jacques (d. Veurne 1459), Loys, Francq. Four documented generations." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "c. 1400–c. 1430" }),
              /* @__PURE__ */ jsxs("td", { style: tdStyle$1, children: [
                /* @__PURE__ */ jsx("strong", { children: "French Flanders — plausible contributor to the Volckerinckhove cluster." }),
                " Geography and chronology are consistent. Whether the Drincham line alone accounts for the cluster's scale, or an earlier Function 3 founding event is also required, remains an open question."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle$1, fontWeight: 500 }, children: [
                "Lodewijc van Vlaenderen Heer van Praet",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, color: "var(--text-muted)", fontSize: "0.82rem" }, children: "grandson of Loys le Frison; epitaph at Aalter, d. 24 Aug 1488" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, color: "var(--text-muted)" }, children: "Praet, Woestijne, Bevere, Ommele." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle$1, children: "Loys, Jan (→ Jan van Onlede d. 1523), Jacques, Josse, Loyse, Jehenne de Flandre." }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle$1, whiteSpace: "nowrap", color: "var(--text-muted)" }, children: "c. 1440–1488" }),
              /* @__PURE__ */ jsxs("td", { style: tdStyle$1, children: [
                /* @__PURE__ */ jsx("strong", { children: "Brabant / Brussels cluster (Wambeek)." }),
                " Marriages into Gruithuyse and Bourgogne families draw descendants toward Brabant. Son Loys was Grand Bailiff of Ghent from 1515."
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Testing the Bastard-Line Hypothesis" }),
        /* @__PURE__ */ jsx("p", { children: "The hypothesis is that the documented surname clusters each descend from one or more of the natural sons of Louis de Male who carried the Van Vlaenderen name as a hereditary identifier. Once the record-survival caveat is applied, the distributional evidence provides stronger support than a raw reading of the data suggests." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The ",
          /* @__PURE__ */ jsx("strong", { children: "Belgian cluster" }),
          " (Sleidinge, Oostwinkel, Evergem, Bassevelde) is geographically consistent with descent from Victor's son Adam. Adam was last attested in Ghent in 1447. The cluster's epicentre lies immediately north of Ghent, within easy distance of Ursel and Wessegem where Victor held his lordship. The cluster's near-invisibility before 1600 is most plausibly explained by record scarcity: the registers that would document Adam's grandchildren simply do not survive. On this reading, the founding event belongs in the mid-fifteenth century, and the Belgian cluster is not appreciably younger than the French Flanders one. This hypothesis is plausible and merits continued archival investigation; it is not yet proven. The 150-year documentary gap between Adam's last attestation (1447) and the first Belgian parish records is discussed in the",
          " ",
          /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/victor-dossier"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Victor Archival Dossier" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The ",
          /* @__PURE__ */ jsx("strong", { children: "Brabant/Brussels cluster" }),
          " (Wambeek) is consistent with descent through the Praet line, whose later documented members married into Brabantine noble families. This is a probable connection but has not been verified through direct archival evidence."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The ",
          /* @__PURE__ */ jsx("strong", { children: "French Flanders cluster" }),
          ' (Volckerinckhove) is most plausibly explained by the documented Drincham bastard line. Jan van Vlaenderen, son of Jan "sans terre" and grandson of Louis de Male, inherited Drincham castle in the Cassel area and his descendants are documented locally through the 1470s. The significance of the Cassel/Volckerinckhove cluster lies not in the inflated Geneanet count — almost certainly a product of noble-tree duplication — but in the fact that the earliest recurring documentary association of the hereditary surname in this zone coincides precisely with the settlement of a documented bastard comital line. That geographic-documentary coincidence is the core of the French Flanders argument. Whether a second, independent Function 3 founding event also contributed remains a secondary hypothesis requiring direct archival verification.'
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The ",
          /* @__PURE__ */ jsx("strong", { children: "Zeeland cluster" }),
          ", visible in the 1700 heat map, is geographically consistent with descent through Lodewijc van Vlaenderen's line at Oostburg. However, a systematic onomastic sweep of Gysseling's Vier Ambachten index — covering 3,000+ individual mentions in the Zeeuws-Vlaanderen documentary record from roughly 1240 to 1500 — yielded no Bucket 4 hits. The surname does not appear as a hereditary identifier anywhere in that region's medieval record. This confirms the surname is not an indigenous Zeeuws-Vlaanderen formation; it arrives from elsewhere. The Zeeland thread therefore requires not only an undocumented descendant of Lodewijc but an explanation for how that descendant crossed into a region where the name had no prior documentary presence."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Testing the Pure Toponymy Hypothesis" }),
        /* @__PURE__ */ jsx("p", { children: 'The hypothesis that Van Vlaenderen is simply a geographic label — "from Flanders," attaching to migrants and hardening into a surname — fails to account for the distributional data on three grounds, none of which are affected by the record-survival caveat.' }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Geography is internally contradictory." }),
          " The Meetjesland and French Flanders clusters are both ",
          /* @__PURE__ */ jsx("em", { children: "inside" }),
          ' the historic County of Flanders. Sleidinge, Oostwinkel, Waarschoot, and Volckerinckhove are not places where a family would be identified as "from Flanders" by their neighbours — they are Flanders. A purely toponymic label attaches to people who have moved away from the place the name describes. The heaviest concentration of Van Vlaenderen surname-bearers is precisely where the label is geographically meaningless. This argument is independent of record survival: it applies equally whether the data shows 11 Belgian individuals in 1500 or 500.'
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "The concentration is wrong for a generic label." }),
          " Purely toponymic surnames typically scatter and thin as geographic memory fades. What the data shows instead is extreme and durable concentration — 551 individuals in one village in 1500, stable for two centuries; explosive growth in a bounded region in East Flanders. These are the patterns of founded lines, not diffuse geographic labels."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "The Zeeland cluster complicates it further." }),
          ' If Van Vlaenderen simply meant "from Flanders" as a migration label, it would be expected in Zeeland — where Flemish migrants genuinely would have been identified by their origin. Yet the Zeeland cluster appears late (visible by 1700) and small, rather than being the earliest and most natural concentration. This is consistent with the name originating as something other than a migration label.'
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The purely toponymic hypothesis is not falsified for individual outlier bearers of the name — a Flemish emigrant to England, Germany, or France acquiring the label in a non-Flemish community is entirely plausible. But it cannot explain the clustered, geographically concentrated, internally-Flemish distribution that the data shows." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Volckerinckhove Question" }),
        /* @__PURE__ */ jsx("p", { children: "Earlier versions of this analysis treated the French Flanders cluster as an anomaly requiring a separate explanation, because the scale of 551 Geneanet entries before 1500 seemed too large to be accounted for by a single bastard line. That framing was wrong in its premises. The raw count almost certainly represents a small number of real historical individuals — the documented Drincham line and their descendants — replicated many times across user-contributed noble genealogical trees. Once the count is set aside, the argument simplifies considerably." }),
        /* @__PURE__ */ jsx("p", { children: `The core observation is this: the earliest recurring documentary association of the hereditary Van Vlaenderen surname in French Flanders falls in the Cassel/Drincham zone — precisely where a documented natural son of Louis de Male, Jan "sans terre" van Vlaenderen, was granted land by charter in 1383 and where his descendants are attested through the 1470s. That is a documentary-geographic coincidence that does not require an inflated count to be meaningful. The bastard-line hypothesis provides the most parsimonious explanation: Jan's documented descendants seeded the French Flanders surname population, which the Geneanet data subsequently echoes — multiply and noisily — across three centuries.` }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A secondary hypothesis — that a Function 3 origin (comital court staff hardening into a hereditary surname at Cassel) also contributed independently of the Drincham line — remains possible. The key archival test is date: any Van Vlaenderen in Cassel administrative records ",
          /* @__PURE__ */ jsx("em", { children: "before" }),
          " 1383 would establish an independent pre-bastard origin; anything after 1383 is more likely a branch of or continuation from the documented line."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyBox, style: { marginTop: "1.5rem" }, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, style: { fontSize: "0.9rem" }, children: "Call for Collaborators — Volckerinckhove / Cassel" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }, children: `This project is seeking collaborators with access to the Cassel castellany administrative record series. The specific research question is whether any individual named Van Vlaenderen (or de Flandre / de Flandres) appears in those records before 1383 — the date of Jan "sans terre"'s documented land grant.` }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }, children: [
            "The relevant archive is the ",
            /* @__PURE__ */ jsx("strong", { children: "Archives Départementales du Nord" }),
            " (Lille), which holds the Cassel castellany records and related comital administrative series. A pre-1383 identification would establish an independent Function 3 origin for the French Flanders cluster; a post-1383 identification would more likely represent a continuation of the bastard line."
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => nav2("/contact"),
              style: {
                background: "rgba(232,184,48,0.1)",
                border: "1px solid rgba(232,184,48,0.4)",
                color: "var(--gold)",
                padding: "0.6rem 1.25rem",
                cursor: "pointer",
                borderRadius: "3px",
                fontSize: "0.85rem",
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.05em"
              },
              children: "Get in Touch →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Conclusions and Open Questions" }),
        /* @__PURE__ */ jsx("p", { children: "The surname Van Vlaenderen cannot be adequately explained by a single mechanism. The distributional and documentary evidence together support a model of multiple documented bastard-line foundations: Victor's branch in the Meetjesland, Jan sans terre's Drincham branch in French Flanders, and the Praet line's later Brabantine trajectory. Pure toponymy is inadequate as a complete explanation and is effectively falsified as a universal account of the name's distribution. The key insight is that the Geneanet distribution evidence is most useful as a geographic clustering signal — pointing to where surname-bearing families persisted — rather than as a demographic count." }),
        /* @__PURE__ */ jsx("p", { children: "The strongest specific conclusions the evidence currently supports: the Belgian cluster is most plausibly founded through Victor's son Adam van Vlaenderen, with the documentary gap explained by record loss rather than a late founding event. The Brabant/Brussels cluster is most plausibly connected to the later Praet line. The French Flanders cluster is most plausibly the Drincham bastard line persisting in its founding geography, with the geographic-documentary coincidence — not the count — as the substantive argument. The Zeeland cluster, visible by 1700, is complicated by the onomastic silence in the Zeeuws-Vlaanderen medieval record: the surname was not indigenous to that region, so any Zeeland thread requires a family that carried the name in from elsewhere — most likely from the Ghent hinterland rather than from Lodewijc's Oostburg line directly." }),
        /* @__PURE__ */ jsx("p", { children: "Three specific research priorities follow. First, the archival gap between Adam's last attestation (1447) and Franciscus in Ghent (1568): the Staten van Goed series at RAG (Ambacht Assenede I & II) and the Landboek/Leenhof records are the primary remaining bridge candidates — Gysseling did not index these, and they have not yet been searched. Second, the Cassel castellany records at the Archives Départementales du Nord for any Van Vlaenderen before 1383 — which would establish whether an independent Function 3 origin preceded the bastard-line settlement at Drincham. Third, Y-DNA comparison between the Belgian and Dutch Van Vlaenderen lines, which would provide a direct test of whether any Zeeland thread shares a common male-line ancestor with the Meetjesland families." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Notes and Sources" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.75 }, children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "[1] Geneanet surname frequency data for ",
            /* @__PURE__ */ jsx("em", { children: "Van Vlaenderen" }),
            ", accessed April 2026.",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://en.geneanet.org/surnames/van%20VLAENDEREN", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--gold)" }, children: "en.geneanet.org/surnames/van%20VLAENDEREN" }),
            ". Figures represent individuals in user-contributed genealogical records attributed to the relevant municipality and century. Record coverage varies significantly by region and period; see the methodological caveat above."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "[2] Olivarius Vredius (Olivier de Wrée), ",
            /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem" }),
            ", Pars Secunda: ",
            /* @__PURE__ */ jsx("em", { children: "Continens Probationes XII posteriorum tabularum" }),
            ", Bruges: J.B. & Lucas Kerchovios, 1642–43. Tabula XVI, fol. 275–288 (PDF pp. 285–298). Direct reading conducted April 2026. The primary charter data for Victor's three sons derives from the ",
            /* @__PURE__ */ jsx("em", { children: "Acta Curiae partitionum Gandensium" }),
            ", as transcribed by Vredius from the Ghent partition court registers."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "[3] Foundation for Medieval Genealogy, ",
            /* @__PURE__ */ jsx("em", { children: "MedLands: Flanders, Hainaut" }),
            ", v5.0, updated January 2025.",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS.htm", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--gold)" }, children: "fmg.ac/Projects/MedLands/FLANDERS.htm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(232,184,48,0.15)", paddingTop: "1.5rem", marginTop: "1rem", display: "flex", gap: "1.5rem", fontSize: "0.875rem" }, children: [
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/name"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "← The Name" }),
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/bibliography"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Full Bibliography →" })
      ] })
    ] })
  ] });
}
function NieusSealPage() {
  const navigate = useNavigate();
  const nav2 = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Seals, Lions, and the Politics of a Surname | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "How twelfth-century Flemish sigillography illuminates the political and dynastic weight of territorial designations — and what that means for the Van Vlaenderen surname." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/nieus-seals" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Seals, Lions, and the Politics of a Surname" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Twelfth-century Flemish noble seal culture and the political meaning of territorial identity in the comital milieu." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/nieus-seals" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Seals, Lions, and the Politics of a Surname","description":"How twelfth-century Flemish sigillography illuminates the political and dynastic weight of territorial designations.","url":"https://vanvlaenderen.org/research/nieus-seals","inLanguage":"en","dateModified":"2026-04-15","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx("div", { className: styles$1.heroImg, style: { backgroundImage: `url(${lionShield})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundColor: "rgba(10,8,4,0.85)" }, children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Research Articles" }),
        /* @__PURE__ */ jsx("h1", { children: "Seals, Lions, and the Politics of a Surname" }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "How twelfth-century Flemish noble seal culture illuminates the political and dynastic weight of territorial designations — and what that means for a surname that claims to come from Flanders itself." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Research Article" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, style: { marginBottom: "2.5rem" }, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, style: { fontSize: "0.9rem" }, children: "Scope and Evidentiary Status" }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 0 }, children: 'This article draws on Jean-François Nieus, "Aristocratic seal ownership in twelfth-century Flanders: A world in between" (preprint, Academia.edu, 2021; University of Namur; forthcoming in peer-reviewed publication), which covers the period 1071–1200. The Van Vlaenderen bastard lines documented in this project date from the fourteenth and fifteenth centuries — two hundred years later. This article does not argue direct evidential continuity between the two periods. It argues contextual depth: the political and symbolic culture of territorial identity that Nieus documents was the inherited framework within which the later comital bastard lines operated. The argument is interpretive scaffolding, not proof of descent.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Lion on the Seal" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The black lion on gold that names this project — and that defines Flemish heraldic identity to this day — entered the documentary record in 1163. In that year, Count Philip of Alsace placed the lion device on his seal matrix, and it became, in Nieus's formulation, the dominant heraldic reference point for the Flemish nobility through ",
          /* @__PURE__ */ jsx("em", { children: "imitatio comitis" }),
          " — the imitation of the count. Within decades the lion was inseparably associated with Flemish princely authority. By the late twelfth century, to bear or evoke the Flemish lion in a noble context was not decorative; it was a declaration of identity and claim."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "This matters for the Van Vlaenderen project because the surname itself — ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          ", from Flanders — is the verbal equivalent of the lion on the seal. Both are territorial identifiers that, in an elite milieu, carry political and dynastic weight far beyond their literal geographic meaning."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Imperial Flanders and the Politics of Territorial Identity" }),
        /* @__PURE__ */ jsx("p", { children: "Nieus's central argument concerns what he calls Imperial Flanders — the eastern zone of the County, including Aalst, Dendermonde, Gavere, and Grammene, which remained part of the Holy Roman Empire and sat in a zone of contested authority between Flemish comital power and the Empire. Noble dynasties in this zone, Nieus shows, deliberately adopted non-comital seal iconography — Brabantine ducal styles rather than Flemish comital ones — as a symbolic assertion of local autonomy and political positioning. As Nieus concludes: in certain circumstances, aristocratic seals assumed a truly political dimension." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The implication for our research is direct. In this elite documentary world, territorial designations were not neutral geographic labels. They were political language. A family in the Flemish noble milieu that styled itself ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " — from Flanders — was making an identity claim, not merely noting an address. The phrase carried the weight of the comital identity it invoked."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "This is the cultural context within which the Van Vlaenderen bastard lines emerge in the fourteenth century. When Louis de Male acknowledged natural sons and attached the identifier ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " to them through the grant of lordships and the formal recognition of their parentage, he was operating within a centuries-old tradition of territorial identity as dynastic claim. The name was not incidental; it was constitutive."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Dover Recognitio, 1163" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Among the signatories to the 1163 Dover Recognitio — a document recording the political relationships of the Flemish nobility at the moment Philip of Alsace was establishing his comital authority — Nieus identifies ",
          /* @__PURE__ */ jsx("strong", { children: "Michael II of Harnes, castellan of Cassel and constable of Flanders" }),
          `. He used a distinctive "hunting style" seal documented in Nieus's footnote 89 and appendix.`
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Michael II of Harnes appears here as a named figure from exactly the noble circles and exactly the geographic zone — the Cassel castellany — that our research identifies as the likely locus of the French Flanders Van Vlaenderen cluster. His presence in this document does not establish a connection to the later Van Vlaenderen lines; the dates are two centuries apart. But it grounds the Cassel area in the politically aware Flemish seal culture that Nieus documents, and it confirms that the castellany of Cassel was, from at least 1163, embedded in the network of comital power and identity from which the Van Vlaenderen surname later emerges." }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.875rem", color: "var(--text-muted)", fontStyle: "italic" }, children: "Note: the connection between Michael II of Harnes and any Van Vlaenderen bastard line is a project hypothesis, not derived from Nieus." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "The Praet Lordship in the Twelfth Century" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Nieus's appendix confirms ",
          /* @__PURE__ */ jsx("strong", { children: "Baldwin II, lord of Praat and Watervliet" }),
          " as an established noble entity in the late twelfth century (c. 1190–1200). The Heerlijkheid Praet — the same lordship that Louis de Male granted to his natural son Loys le Frison van Vlaenderen in 1373, founding the Praet bastard line — was therefore a named, documented territorial unit with at least two centuries of noble history before it passed to a Van Vlaenderen bearer."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This does not establish genealogical continuity between the twelfth-century lords of Praet and the fourteenth-century Van Vlaenderen line. Lordships changed hands, were consolidated, divided, and reassigned constantly in the medieval Flemish context. What it does establish is that the Praet lordship was a real territorial entity with documented noble standing from at least the 1190s — which makes the 1373 grant to Loys le Frison a grant of something with genuine territorial weight, not a nominal title." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "What This Means for the Van Vlaenderen Hypothesis" }),
        /* @__PURE__ */ jsx("p", { children: "Nieus's research does three things for this project, none of them constituting direct proof of anything in our genealogical argument, but all of them providing genuine historical depth." }),
        /* @__PURE__ */ jsx("p", { children: "First, it grounds the lion symbolism of this project in documented heraldic history. The lion that names Lions of Flanders is not a romantic appropriation — it is the specific device that Count Philip of Alsace placed on his seal in 1163 and that became the definitive visual identity of the County of Flanders. The project's name is historically grounded." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Second, it establishes that territorial designations in the Flemish noble milieu functioned as political and dynastic identifiers, not mere geographic labels. This is the strongest contextual argument against the pure-toponymy hypothesis for the Van Vlaenderen surname. The argument is not just that the name is distributed in ways inconsistent with a generic locative (as the Four Functions article argues from distributional evidence) — it is also that the cultural context in which the name was used made territorial self-identification a serious, politically charged act. A natural son of the Count of Flanders carrying the name ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " was not being labelled geographically; he was being placed in a tradition of comital identity assertion."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Third, it confirms the Cassel and Praet territories as documented nodes in the network of Flemish noble power from the twelfth century — providing two centuries of historical depth behind the fourteenth-century grants that are the first documentary evidence for the Van Vlaenderen surname." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Citation" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.8 }, children: [
          /* @__PURE__ */ jsx("p", { children: 'Nieus, Jean-François. "Aristocratic seal ownership in twelfth-century Flanders: A world in between." Preprint. Academia.edu, 2021. University of Namur. Forthcoming in peer-reviewed publication. Full text on file with project.' }),
          /* @__PURE__ */ jsxs("p", { style: { marginTop: "0.75rem", fontSize: "0.82rem" }, children: [
            /* @__PURE__ */ jsx("strong", { children: "Specific page references:" }),
            " Imperial Flanders political dimension: p. 26. Lion on comital seal / Philip of Alsace: pp. 23–24. Michael II of Harnes, castellan of Cassel: p. 17 n. 89; appendix p. 28. Baldwin II, lord of Praat and Watervliet: appendix p. 28. General seal diffusion timeline: pp. 7–8, 25."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(232,184,48,0.15)", paddingTop: "1.5rem", marginTop: "1rem", display: "flex", gap: "1.5rem", fontSize: "0.875rem" }, children: [
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "← Research" }),
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/bibliography"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Full Bibliography →" })
      ] })
    ] })
  ] });
}
const tdStyle = {
  padding: "9px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  verticalAlign: "top",
  lineHeight: 1.55,
  fontSize: "0.9rem"
};
const thStyle = {
  padding: "9px 12px",
  color: "var(--gold)",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottom: "1px solid rgba(232,184,48,0.3)"
};
function DrinchamDossierPage() {
  const navigate = useNavigate();
  const nav2 = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$1.page, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Jan sans terre van Vlaenderen — Archival Dossier | vanvlaenderen.org" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Primary source dossier for Jan 'sans terre' van Vlaenderen and the Drincham line: the 1383 land grant, four documented generations in the Cassel area, the Veurne epitaph of Jacques de Drincham, and the geographic-documentary case for French Flanders surname origin." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://vanvlaenderen.org/research/drincham-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Jan sans terre van Vlaenderen — Archival Dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "The 1383 Drincham land grant, four documented generations in French Flanders, and the geographic-documentary case for the Volckerinckhove cluster." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://vanvlaenderen.org/research/drincham-dossier" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Jan sans terre van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Jan sans terre van Vlaenderen and the Drincham line.","url":"https://vanvlaenderen.org/research/drincham-dossier","inLanguage":"en","dateModified":"2026-04-16","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}` } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Drincham Dossier","item":"https://vanvlaenderen.org/research/drincham-dossier"}]}` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.heroStrip, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$1.heroImg,
          style: { backgroundImage: `url(${knightPhilip})`, backgroundPosition: "top center" },
          children: /* @__PURE__ */ jsx("div", { className: styles$1.heroImgOverlay })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: styles$1.heroText, children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.eyebrow, children: "Van Vlaenderen · Archival Dossier" }),
        /* @__PURE__ */ jsx("h1", { children: 'Jan "sans terre" van Vlaenderen' }),
        /* @__PURE__ */ jsx("div", { className: "gold-rule" }),
        /* @__PURE__ */ jsx("p", { className: styles$1.heroLead, children: "Natural son of Louis II de Male, Count of Flanders; lord of Drincham near Cassel, French Flanders; progenitor of the most plausible documented founding line for the French Flanders Van Vlaenderen surname cluster. Updated April 2026 from direct reading of Vredius." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.content, children: [
      /* @__PURE__ */ jsxs("div", { className: researchStyles.dossierHeader, children: [
        /* @__PURE__ */ jsx("h2", { className: researchStyles.dossierTitle, children: "Archival Dossier" }),
        /* @__PURE__ */ jsx("div", { className: researchStyles.dossierMeta, children: "Updated April 2026" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: researchStyles.methodologyBox, children: [
        /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, children: "Method" }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", marginBottom: "1rem", color: "var(--text-muted)" }, children: [
          "This dossier follows the same four-level evidentiary framework as the Victor van Vlaenderen dossier. ",
          /* @__PURE__ */ jsx("strong", { children: "Directly attested" }),
          " statements rest on quoted charter language or explicit documentary summaries in a published authority. ",
          /* @__PURE__ */ jsx("strong", { children: "Strongly corroborated" }),
          " statements are supported by concordant published sources. ",
          /* @__PURE__ */ jsx("strong", { children: "Probable" }),
          " statements are source-based but require fuller inspection. ",
          /* @__PURE__ */ jsx("strong", { children: "Hypotheses" }),
          " are inferences proposed for further testing."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyGrid, children: [
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Directly Attested" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Quoted charter language or explicit documentary summary." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Strongly Corroborated" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Supported by concordant published historical authorities." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Probable" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Source-based but requires fuller inspection of underlying edition." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.methodItem, children: [
            /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, style: { marginLeft: 0, marginBottom: "5px" }, children: "Hypothesis" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", display: "block" }, children: "Genealogical inference proposed for further testing." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", marginTop: "1.5rem", fontStyle: "italic", color: "var(--text-muted)", borderTop: "1px solid rgba(232, 184, 48, 0.1)", paddingTop: "1rem" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Primary source:" }),
          " Olivarius Vredius (Olivier de Wrée), ",
          /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae" }),
          ", Pars Secunda, Tabula XVI, foll. 281–283 (PDF pp. 291–293), Bruges: J.B. & Lucas Kerchovios, 1642–43. Direct reading conducted April 2026. Collateral attestation from FMG MedLands: Flanders, Hainaut (v5.0, January 2025) and de l'Espinoy, ",
          /* @__PURE__ */ jsx("em", { children: "Recherche des antiquitez et noblesse de Flandres" }),
          " (Douai, 1631)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Identity and Parentage ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jan van Vlaenderen, surnamed ",
          /* @__PURE__ */ jsx("em", { children: "sans terre" }),
          ` ("without land"), was a natural son of Louis II de Male, Count of Flanders (1330–1384). De l'Espinoy identifies him as the fifth natural son of Louis de Male. His mother was `,
          /* @__PURE__ */ jsx("strong", { children: "Ive de Luu" }),
          ", recorded in Vredius."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The surname ",
          /* @__PURE__ */ jsx("em", { children: "van Vlaenderen" }),
          " — used by Jan and his descendants — is confirmed as a shared marker of comital bastard identity in the Gaillard text quoted by Vredius, which names all three brothers killed at Nicopolis explicitly under the Van Vlaenderen name:"
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          margin: "1.25rem 0",
          padding: "1rem 1.5rem",
          background: "rgba(232,184,48,0.04)",
          borderLeft: "3px solid var(--gold)",
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          color: "var(--text-primary)"
        }, children: [
          '"In the battle of Nicopolis, where Duke Jan of Burgundy was taken prisoner, were slain: My Lord Loys van Vlaenderen, called le Hase; Lord Lodewyck van Vlaenderen, called le Friso; and my Lord Jan van Vlaenderen, called sans terre — all bastards of the noble Count Lodewijc van Male, all brave knights; and this happened in the year of Our Lord 1396."',
          /* @__PURE__ */ jsx("div", { style: { fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem", fontStyle: "normal" }, children: "Gaillard, as quoted in Vredius, Tabula XVI. Middle Dutch original; translation by project." })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jan is also documented in Vredius's French-language summary from Grimarezius: ",
          /* @__PURE__ */ jsx("em", { children: '"IEAN, b. de Flandres, dict sans terre, Chevalier, espousa GVILEMETTE de Nevele, fille de Messire Guillaume, Chevalier, & de Dame Guilemette de Halewijn, heritiere de Lichtervelde. Il mourut à la bataille devant la ville de Nicopoli..."' }),
          " — confirming his wife ",
          /* @__PURE__ */ jsx("strong", { children: "Guillemette de Nevele" }),
          " (daughter of Willem de Nevele, Knight, and Guillemette de Halewijn, heiress of Lichtervelde) and his death at Nicopolis."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The 1383 Land Grant ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The founding event for the Drincham line is documented in Vredius from de l'Espinoy. On ",
          /* @__PURE__ */ jsx("strong", { children: "22 November 1383" }),
          ", Louis de Male granted Jan the castle and lordship of Drincham, near Cassel in French Flanders, confiscated from Jean de Scheurvelde. The verbatim French from de l'Espinoy as quoted in Vredius:"
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          margin: "1.25rem 0",
          padding: "1rem 1.5rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "0.875rem",
          lineHeight: 1.8,
          color: "var(--text-muted)"
        }, children: [
          `"Messire IEAN de Flandres, fut le cinquiesme fils bastard dudict Comte de Flandres, & fut surnommé sans terre, auquel ledit Conte donna le chastel & maison de Drincam, avec le fief & avoir principal, rentes, revenues, Seigneuries, terres, prés, bois, caues, pastures, pescheries &c. & ce pour le pourveoir, affin qu'il puisse tant mieux entretenir son estat..."`,
          /* @__PURE__ */ jsx("div", { style: { fontSize: "0.8rem", marginTop: "0.5rem", fontStyle: "normal" }, children: `De l'Espinoy as quoted in Vredius, Tabula XVI, fol. 281. Translation: "Sir Jean de Flandres was the fifth bastard son of the said Count of Flanders, and was surnamed sans terre, to whom the said Count gave the castle and house of Drincam, with the principal fief and assets, rents, revenues, lordships, lands, meadows, woods, waters, pastures, fisheries &c., in order to provide for him, so that he might better maintain his estate..."` })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The grant date of 22 November 1383 is significant for the project's research agenda: any Van Vlaenderen individual appearing in Cassel-area administrative records ",
          /* @__PURE__ */ jsx("em", { children: "before" }),
          " this date would establish a pre-bastard Function 3 origin for the French Flanders cluster; anything after 1383 is more plausibly a branch or continuation of this documented line."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The Four Documented Generations ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Drincham line is the most extensively documented collateral bastard branch in Tabula XVI after the Praet line. Vredius documents four generations, spanning from Jan's death at Nicopolis (1396) through Jacques de Drincham's death at Veurne (1459) and his wife's death (1473), with further children named at Generation 3 whose lines are not fully traced." }),
        /* @__PURE__ */ jsx("div", { style: { overflowX: "auto", marginTop: "1.5rem" }, children: /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { style: thStyle, children: "Generation" }),
            /* @__PURE__ */ jsx("th", { style: thStyle, children: "Individual" }),
            /* @__PURE__ */ jsx("th", { style: thStyle, children: "Spouse" }),
            /* @__PURE__ */ jsx("th", { style: thStyle, children: "Key dates / notes" }),
            /* @__PURE__ */ jsx("th", { style: thStyle, children: "Evidence" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 1" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                'Jan van Vlaenderen, "sans terre"',
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "Lord of Drincham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: [
                "Guillemette de Nevele",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem" }, children: "dau. of Willem de Nevele & Guillemette de Halewijn" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Land grant 22 Nov 1383. Killed at Nicopolis 28 Sep 1396. Mother: Ive de Luu." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { background: "rgba(255,255,255,0.015)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 2" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Jan van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "Lord of Drincham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: [
                "Isabella de Ghistelles",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem" }, children: "Dame de Vissaert" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Son of Gen 1. No dates given in source." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 3" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Jan van Vlaenderen",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "Lord of Drincham" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: "Isabella de Vernieulles" }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Two sons (Philippe d. unmarried; Jan continued line) and three daughters. Gen 4 descends from second son Jan." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { background: "rgba(255,255,255,0.015)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 3" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Jacques de Flandres",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "dict de Drincham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: [
                "Guillemette de Bambeke",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem" }, children: "d. 19 April 1473" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Chamberlain to Philip the Good, Duke of Burgundy. Bailiff of Veurne/Furnes. Died 10 April 1459. Epitaph at Veurne (see below). Brother of the third-generation Jan above." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 3" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Loys de Flandres",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "dict de Drincham" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: "Unknown" }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Named by Vredius as a further son of Gen 2. Line not traced beyond this generation in source." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { style: { background: "rgba(255,255,255,0.015)" }, children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 3" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Francq de Flandres",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "dict de Drincham" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: "Unknown" }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Named by Vredius as a further son of Gen 2. Line not traced beyond this generation in source." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--gold)", fontWeight: 600 }, children: "Gen 4" }),
              /* @__PURE__ */ jsxs("td", { style: { ...tdStyle, fontWeight: 500 }, children: [
                "Jan de Flandres",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 400 }, children: "legitimated at Arras" })
              ] }),
              /* @__PURE__ */ jsx("td", { style: { ...tdStyle, color: "var(--text-muted)" }, children: "Unknown" }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: "Son of Gen 3 Jan × Isabella de Vernieulles. Received a letter of legitimation from the Duke of Burgundy at Arras. Last documented member of the Drincham line in de Wrée. No further descendants recorded. Last attestation c. 1473 (inferred from mother's death date)." }),
              /* @__PURE__ */ jsx("td", { style: tdStyle, children: /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "The Veurne Epitaph of Jacques de Drincham ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`, children: "Directly Attested" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The most concrete physical evidence for the Drincham line is the epitaph of Jacques de Flandres dict de Drincham at the church in Veurne (Furnes), West Flanders, preserved in Gaillard and quoted in Vredius. The original French:" }),
        /* @__PURE__ */ jsxs("div", { style: {
          margin: "1.25rem 0",
          padding: "1rem 1.5rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "0.875rem",
          lineHeight: 1.8,
          color: "var(--text-muted)"
        }, children: [
          `"Cy gift Mesire IAQUES de Drincham, Chevalier, Conseillier & Chambellain de Monseigneur le Duc de Bourgongne, Conte de Flandre, & son Bailly de Furnes à son trespas, lequel mourut l'an de nostre Seigneur 1459. le x. d'Avril..."`,
          /* @__PURE__ */ jsx("div", { style: { fontSize: "0.8rem", marginTop: "0.5rem", fontStyle: "normal" }, children: 'Translation: "Here lies Sir Jacques de Drincham, Knight, Counsellor and Chamberlain of My Lord the Duke of Burgundy, Count of Flanders, and his Bailiff of Furnes at his death, who died in the year of Our Lord 1459, on the 10th of April..."' })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The epitaph confirms: (1) Jacques held the title ",
          /* @__PURE__ */ jsx("em", { children: "Chevalier" }),
          " (Knight); (2) he served Philip the Good, Duke of Burgundy, as both Counsellor and Chamberlain; (3) he held the office of Bailiff of Veurne at his death; (4) death date 10 April 1459. His wife Guillemette de Bambeke's death is recorded as 19 April 1473, presumably from the same or an adjacent monument."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jacques's heraldic arms as recorded — ",
          /* @__PURE__ */ jsx("em", { children: "de Ghistelles with a canton of Flanders and Luxembourg quartering" }),
          " — are directly derived from his mother Isabella de Ghistelles (Gen 2 wife) and confirm the dynastic lineage visually. The Flanders canton explicitly asserts comital bastard descent."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Geographic Significance and the French Flanders Hypothesis ",
          /* @__PURE__ */ jsx("span", { className: `${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`, children: "Hypothesis" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The documented Drincham line spans roughly 1383 (land grant) to c. 1473 (death of Jacques's wife Guillemette de Bambeke). For approximately ninety years, multiple generations of Van Vlaenderen surname-bearers were physically present in the Cassel area of French Flanders — the precise geographic zone where Geneanet's distributional data shows the heaviest pre-1600 concentration of the surname." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The hypothesis — argued in full in the ",
          /* @__PURE__ */ jsx("button", { onClick: () => nav2("/name/surname-origins"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Four Functions, Three Clusters analysis" }),
          " — is that this geographic-documentary coincidence is the explanation for the French Flanders cluster. The argument does not depend on the Geneanet count being accurate (it almost certainly reflects noble-tree duplication). It depends on the observation that the earliest securely documented hereditary Van Vlaenderen surname-bearers in the Cassel zone are precisely the documented bastard comital line, making them the most parsimonious founding explanation."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Drincham line's documented reach is also worth noting. Jacques de Drincham operated as Bailiff of Veurne and Chamberlain to Philip the Good — the kind of administrative reach across French Flanders and the Flemish coast that would explain how a surname attached to one castle near Cassel could spread across the broader Volckerinckhove/Renescure/Bollezeele zone visible in the later data. It should be noted that Veurne, while on the Flemish coast, is firmly in West Flanders — geographically distinct from the Zeeuws-Vlaanderen/Zeeland thread associated with Victor's son Lodewijc at Oostburg. The Drincham line's coastal footprint is a French Flanders and West Flemish phenomenon; the Zeeland anchor, to the extent one exists, belongs to the Victor line." }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.methodologyBox, style: { marginTop: "1.5rem" }, children: [
          /* @__PURE__ */ jsx("span", { className: researchStyles.methodologyTitle, style: { fontSize: "0.9rem" }, children: "Open Research Question — Generation 4 Gap" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }, children: "The Drincham line as documented by Vredius ends with Jan de Flandres (Gen 4), legitimated at Arras, with no further descendants recorded. Vredius was working from early seventeenth-century sources and may simply not have had access to later generations. The gap between Gen 4 (c. 1473) and the Geneanet-visible Volckerinckhove cluster does not invalidate the founding hypothesis, but it does mean the documentary chain is not continuous." }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 0 }, children: [
            "The most productive archival test remains the ",
            /* @__PURE__ */ jsx("strong", { children: "Archives Départementales du Nord" }),
            " (Lille), which holds the Cassel castellany records. Any Van Vlaenderen individual in those records after 1383 — particularly after c. 1473 — would extend the documented line and narrow the gap to the modern Volckerinckhove population."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Relationship to the Other Bastard Lines" }),
        /* @__PURE__ */ jsx("p", { children: "Jan sans terre, Loys le Frison (Praet line), and Loys le Hase were all killed together at Nicopolis on 28 September 1396. The Gaillard text names all three in a single passage under the Van Vlaenderen surname, confirming the name was used by multiple natural sons simultaneously as a shared marker of comital bastard identity — not unique to any one branch." }),
        /* @__PURE__ */ jsx("p", { children: "The Drincham line is geographically and genealogically distinct from the Victor line (Meetjesland/Belgian cluster) and the Praet line (Franc de Bruges/Brabant cluster). The three lines represent parallel surname-carrying foundations in different regions of Flanders, each anchored to a specific lordship granted by Louis de Male in the 1373–1399 period." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For the full multi-line analysis, see the ",
          /* @__PURE__ */ jsx("button", { onClick: () => nav2("/name/surname-origins"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Four Functions, Three Clusters" }),
          " article, and for the Praet line's separate documentation, see the ",
          /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/praet-dossier"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Praet Archival Dossier" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: styles$1.section, children: [
        /* @__PURE__ */ jsx("h2", { children: "Notes and Sources" }),
        /* @__PURE__ */ jsxs("div", { className: researchStyles.referenceList, children: [
          /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "1." }),
            "Vredius, Olivarius (Olivier de Wrée). ",
            /* @__PURE__ */ jsx("em", { children: "Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem" }),
            ", Pars Secunda: ",
            /* @__PURE__ */ jsx("em", { children: "Continens Probationes XII posteriorum tabularum" }),
            ". Bruges: J.B. & Lucas Kerchovios, 1642–43. Tabula XVI, foll. 281–283 (PDF pp. 291–293). Direct reading conducted April 2026. Principal source for all four generations and the 1383 land grant text."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "2." }),
            "De l'Espinoy, Philippe. ",
            /* @__PURE__ */ jsx("em", { children: "Recherche des antiquitez et noblesse de Flandres" }),
            ". Douai, 1631. Cited in Vredius as the source for the identification of Jan as the fifth bastard son and for the land grant details. Not accessed directly."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "3." }),
            "Foundation for Medieval Genealogy. ",
            /* @__PURE__ */ jsx("em", { children: "MedLands: Flanders, Hainaut" }),
            ", v5.0, updated January 2025. ",
            /* @__PURE__ */ jsx("a", { href: "https://fmg.ac/Projects/MedLands/FLANDERS.htm", style: { color: "var(--gold)" }, target: "_blank", rel: "noopener noreferrer", children: "fmg.ac/Projects/MedLands/FLANDERS.htm" }),
            ". Collateral verification of Jan sans terre entry."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "4." }),
            "Gaillard (cited in Vredius). Middle Dutch text naming Loys le Hase, Loys le Frison, and Jan sans terre as Van Vlaenderen at Nicopolis 1396. Tabula XVI. Direct quotation transcribed April 2026."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: researchStyles.refItem, children: [
            /* @__PURE__ */ jsx("span", { className: researchStyles.refNumber, children: "5." }),
            "Epitaph of Jacques de Drincham, Veurne church, as preserved in Gaillard and quoted in Vredius, Tabula XVI. Confirms death date 10 April 1459 and offices held."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(232,184,48,0.15)", paddingTop: "1.5rem", marginTop: "1rem", display: "flex", gap: "1.5rem", fontSize: "0.875rem", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "← Research" }),
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/name/surname-origins"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Four Functions, Three Clusters →" }),
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/praet-dossier"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Praet Archival Dossier →" }),
        /* @__PURE__ */ jsx("button", { onClick: () => nav2("/research/victor-dossier"), style: { background: "none", border: "none", color: "var(--gold)", cursor: "pointer", padding: 0, textDecoration: "underline", fontSize: "inherit" }, children: "Victor Archival Dossier →" })
      ] })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(FamilyTreeCanvas, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/mill", element: /* @__PURE__ */ jsx(MillPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/name", element: /* @__PURE__ */ jsx(NamePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/dna", element: /* @__PURE__ */ jsx(DnaPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research", element: /* @__PURE__ */ jsx(ResearchPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/victor", element: /* @__PURE__ */ jsx(VictorLineagePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/louis-friese", element: /* @__PURE__ */ jsx(LouisFrieseLineagePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/victor-dossier", element: /* @__PURE__ */ jsx(VictorDossierPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/praet-dossier", element: /* @__PURE__ */ jsx(PraetDossierPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/praet-lineage-dossier", element: /* @__PURE__ */ jsx(PraetLineageDossierPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/methodology", element: /* @__PURE__ */ jsx(MethodologyPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/gap-dossier", element: /* @__PURE__ */ jsx(GapDossierPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/bibliography", element: /* @__PURE__ */ jsx(BibliographyPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/name/surname-origins", element: /* @__PURE__ */ jsx(SurnameOriginsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/nieus-seals", element: /* @__PURE__ */ jsx(NieusSealPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/research/drincham-dossier", element: /* @__PURE__ */ jsx(DrinchamDossierPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/lineage", element: /* @__PURE__ */ jsx(LineagePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/docs", element: /* @__PURE__ */ jsx(DocsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
    ] }) })
  ] });
}
const DEFAULT_IMAGE = "https://vanvlaenderen.org/assets/hero-background-rVYnRAiM.jpg";
const PAGE_META = {
  "/": {
    title: "Van Vlaenderen — Flemish Heritage & Family History Research",
    description: "Genealogical research tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders (1330–1384). Fourteen generations documented from Meetjesland to America.",
    canonical: "https://vanvlaenderen.org/",
    ogTitle: "Van Vlaenderen — Flemish Heritage Research",
    ogDescription: "Tracing the Van Vlaenderen surname to Louis II de Male, Count of Flanders. Fourteen generations, archival evidence, Y-DNA research.",
    ogType: "website",
    ogImage: DEFAULT_IMAGE
  },
  "/mill": {
    title: "The Mill — Van Vlaenderen Family Origins | vanvlaenderen.org",
    description: "The documented miller lineage of the Van Vlaenderen family from 1568 Ghent through East Flanders — Wassegem, Oostwinkel, Waarschoot, Boekhoute, and Bassevelde.",
    canonical: "https://vanvlaenderen.org/mill/",
    ogTitle: "The Mill — Van Vlaenderen Family Origins",
    ogDescription: "Documented miller lineage from 1568 Ghent through East Flanders.",
    ogType: "article"
  },
  "/name": {
    title: 'The Name — Where "Van Vlaenderen" Comes From | vanvlaenderen.org',
    description: "Analysis of the Van Vlaenderen surname: why it is comital identity, not a common toponym. Evidence from Victor van Vlaenderen's 1441 charter and the bastard children of Louis II de Male.",
    canonical: "https://vanvlaenderen.org/name/",
    ogTitle: "The Name — Where Van Vlaenderen Comes From",
    ogDescription: "Comital identity, not a toponym. Evidence from the 1441 charter of Victor van Vlaenderen.",
    ogType: "article"
  },
  "/name/surname-origins": {
    title: "Four Functions, Three Clusters — The Van Vlaenderen Surname | vanvlaenderen.org",
    description: "A primary source and distributional analysis of the Van Vlaenderen surname: four documentary functions, three geographic clusters across three centuries, and competing hypotheses for the name's origin.",
    canonical: "https://vanvlaenderen.org/name/surname-origins/",
    ogTitle: "Four Functions, Three Clusters — The Van Vlaenderen Surname",
    ogDescription: "Distributional and documentary analysis testing the toponymic and bastard-line hypotheses for the Van Vlaenderen surname origin.",
    ogType: "article"
  },
  "/research/nieus-seals": {
    title: "Seals, Lions, and the Politics of a Surname | vanvlaenderen.org",
    description: "How twelfth-century Flemish noble seal culture illuminates the political and dynastic weight of territorial designations — and what that means for the Van Vlaenderen surname.",
    canonical: "https://vanvlaenderen.org/research/nieus-seals/",
    ogTitle: "Seals, Lions, and the Politics of a Surname",
    ogDescription: "Twelfth-century Flemish sigillography and the political meaning of territorial identity in the comital milieu.",
    ogType: "article"
  },
  "/research/drincham-dossier": {
    title: "Jan sans terre van Vlaenderen — Archival Dossier | vanvlaenderen.org",
    description: "Primary source dossier for Jan sans terre van Vlaenderen and the Drincham line: the 1383 land grant, four documented generations in French Flanders, the Veurne epitaph, and the geographic-documentary case for the Volckerinckhove cluster.",
    canonical: "https://vanvlaenderen.org/research/drincham-dossier/",
    ogTitle: "Jan sans terre van Vlaenderen — Archival Dossier",
    ogDescription: "The 1383 Drincham land grant, four generations in the Cassel area, and the French Flanders Van Vlaenderen surname origin hypothesis.",
    ogType: "article"
  },
  "/dna": {
    title: "DNA Evidence — Y-DNA Research | vanvlaenderen.org",
    description: "Y-DNA haplogroup research for the Van Vlaenderen patrilineal line. Big Y-700 results, R-FT1573 singleton branch, and the case for a single common ancestor.",
    canonical: "https://vanvlaenderen.org/dna/",
    ogTitle: "DNA Evidence — Van Vlaenderen Y-DNA Research",
    ogDescription: "Y-DNA analysis placing the Van Vlaenderen line in haplogroup R-FT1573. Big Y-700 results and single-ancestor hypothesis.",
    ogType: "article"
  },
  "/research": {
    title: "Research Overview — Van Vlaenderen Archival Dossiers | vanvlaenderen.org",
    description: "Overview of Van Vlaenderen archival research: the Victor line (Lord of Wessegem) and the Louis Friese / Praet line, both descending from Louis II de Male, Count of Flanders.",
    canonical: "https://vanvlaenderen.org/research/",
    ogTitle: "Research Overview — Van Vlaenderen Archival Dossiers",
    ogDescription: "Two surname-bearing bastard lines of Louis II de Male: Victor van Vlaenderen and Louis Friese van Vlaenderen.",
    ogType: "article"
  },
  "/research/victor": {
    title: "Victor van Vlaenderen — Lord of Wessegem | vanvlaenderen.org",
    description: "Victor van Vlaenderen: bastard son of Louis II de Male, Lord of Ursel and Wessegem, father of Lodewyc, Janne, and Adam van Vlaendren per the 1441/42 charter.",
    canonical: "https://vanvlaenderen.org/research/victor/",
    ogTitle: "Victor van Vlaenderen — Lord of Wessegem",
    ogDescription: "Bastard son of Louis II de Male. Father of Lodewyc, Janne, and Adam van Vlaendren — documented in the 1441 charter.",
    ogType: "article"
  },
  "/research/louis-friese": {
    title: "Louis Friese van Vlaenderen — The Praet Line | vanvlaenderen.org",
    description: "Louis Friese van Vlaenderen, Lord of Praet and Woestine: the second bastard line of Louis II de Male using the Van Vlaenderen surname. Ancestor of Lodewijk IV (Louis of Praet).",
    canonical: "https://vanvlaenderen.org/research/louis-friese/",
    ogTitle: "Louis Friese van Vlaenderen — The Praet Line",
    ogDescription: "The Praet bastard line: Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece — extinct 1556.",
    ogType: "article"
  },
  "/research/victor-dossier": {
    title: "Victor van Vlaenderen — Archival Dossier | vanvlaenderen.org",
    description: "Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence, FMG MedLands documentation, Hof van Wessegem heritage record, and the Alix van Boyeghem connection.",
    canonical: "https://vanvlaenderen.org/research/victor-dossier/",
    ogTitle: "Victor van Vlaenderen — Archival Dossier",
    ogDescription: "Primary source evidence: the 1427 and 1441/42 charters, Wessegem heritage, and Victor's three natural sons.",
    ogType: "article"
  },
  "/research/praet-dossier": {
    title: "The Praet Line — Archival Dossier | vanvlaenderen.org",
    description: "Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555). Sources, evidence levels, and open research questions.",
    canonical: "https://vanvlaenderen.org/research/praet-dossier/",
    ogTitle: "The Praet Line — Archival Dossier",
    ogDescription: "From Louis Friese van Vlaenderen to Lodewijk IV, Knight of the Golden Fleece. Primary and secondary sources for the Praet bastard line.",
    ogType: "article"
  },
  "/research/praet-lineage-dossier": {
    title: "Praet Lineage Detail — Van Vlaenderen Research | vanvlaenderen.org",
    description: "Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV — the research control for Van Vlaenderen surname attribution.",
    canonical: "https://vanvlaenderen.org/research/praet-lineage-dossier/",
    ogTitle: "Praet Lineage Detail — Van Vlaenderen Research",
    ogDescription: "Generational evidence for the Praet descent. Functions as a documented research control for Van Vlaenderen surname attribution.",
    ogType: "article"
  },
  "/lineage": {
    title: "Lineage — Fourteen Generations | vanvlaenderen.org",
    description: "The documented American lineage of the Van Vlaenderen / Van Flandern family: fourteen generations from Jeremiah Van Vlaenderen (~1575) to the present, with archival deep-links.",
    canonical: "https://vanvlaenderen.org/lineage/",
    ogTitle: "Lineage — Fourteen Generations",
    ogDescription: "Fourteen documented generations from Flanders to America. Archival deep-links for each ancestor.",
    ogType: "article"
  },
  "/about": {
    title: "About — Lions of Flanders Project | vanvlaenderen.org",
    description: "About the Lions of Flanders project: Michael and Constance Van Flandern's 15-year research into Flemish heritage, archival fieldwork in Belgium, and the path from Bassevelde to America.",
    canonical: "https://vanvlaenderen.org/about/",
    ogTitle: "About — Lions of Flanders Project",
    ogDescription: "Fifteen years of research into a Flemish family name. Archival fieldwork in Ghent, Bruges, and the Meetjesland.",
    ogType: "website"
  },
  "/research/gap-dossier": {
    title: "The Documentary Gap, 1447–1580 | vanvlaenderen.org",
    description: "The 130-year gap between Adam van Vlaendren (last attested 1447) and the Meetjesland parish cluster (fl. 1547–). Archival evidence in hand, searches completed, active targets, and three working hypotheses.",
    canonical: "https://vanvlaenderen.org/research/gap-dossier/",
    ogTitle: "The Documentary Gap, 1447–1580 — Van Vlaenderen Research",
    ogDescription: "Named gap between the comital bastard lines and the Meetjesland parish cluster. Evidence in hand, active archival targets, and three working hypotheses.",
    ogType: "article"
  },
  "/contact": {
    title: "Contact — Van Vlaenderen Research | vanvlaenderen.org",
    description: "Get in touch with the Van Vlaenderen research project. Share family connections, Y-DNA results, or archival findings related to the Van Vlaenderen / Van Flandern surname.",
    canonical: "https://vanvlaenderen.org/contact/",
    ogTitle: "Contact — Van Vlaenderen Research",
    ogType: "website"
  }
};
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      nl: { translation: nl }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}
function render(url) {
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  return { html };
}
export {
  PAGE_META,
  render
};
