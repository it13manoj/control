"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEAMS_APIS = exports.PORTFOLIOS_APIS = exports.SERVICES_APIS = exports.ABOUTS_APIS = exports.HOME_APIS = exports.IMAGES = exports.REQUEST_TYPE = void 0;
// const SERVER_LINK = "https://connectors.grazitti.com/recruitment-portal-service/";
var SERVER_LINK = "http://localhost:4000";
var REQUEST_TYPE = {
  GET: "GET",
  POST: "POST"
};
exports.REQUEST_TYPE = REQUEST_TYPE;
var IMAGES = {
  imgs: SERVER_LINK + '/uploads/'
};
exports.IMAGES = IMAGES;
var HOME_APIS = {
  getHomepages: SERVER_LINK + "/api/home/v1/find",
  findById: SERVER_LINK + "/api/home/v1/findById"
};
exports.HOME_APIS = HOME_APIS;
var ABOUTS_APIS = {
  find: SERVER_LINK + "/api/about/v1/find",
  findById: SERVER_LINK + "/api/about/v1/findById"
};
exports.ABOUTS_APIS = ABOUTS_APIS;
var SERVICES_APIS = {
  find: SERVER_LINK + "/api/service/v1/find",
  findById: SERVER_LINK + "/api/service/v1/findById"
};
exports.SERVICES_APIS = SERVICES_APIS;
var PORTFOLIOS_APIS = {
  find: SERVER_LINK + "/api/portfolio/v1/find",
  findbytype: SERVER_LINK + "/api/portfolio/v1/findByType",
  groupbytype: SERVER_LINK + "/api/portfolio/v1/groupByType",
  findById: SERVER_LINK + "/api/portfolio/v1/findById"
};
exports.PORTFOLIOS_APIS = PORTFOLIOS_APIS;
var TEAMS_APIS = {
  find: SERVER_LINK + "/api/team/v1/find",
  findById: SERVER_LINK + "/api/team/v1/findById"
};
exports.TEAMS_APIS = TEAMS_APIS;