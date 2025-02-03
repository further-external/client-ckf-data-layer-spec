"use strict";

const { update_bing } = require("./update_bing");
const { update_ttd } = require("./update_ttd");
const { update_linkedin } = require("./update_linkedin");
const { update_facebook } = require("./update_facebook");
const { update_patch } = require("./update_patch");

require("dotenv").config();

module.exports = {
  update_bing,
  update_ttd,
  update_linkedin,
  update_patch,
  update_facebook
};
