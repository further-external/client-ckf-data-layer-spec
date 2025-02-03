require("dotenv").config();
const fetch = require("node-fetch");
const fs = require("fs");
const { type } = require("os");
const moment = require("moment");
const token = process.env.FACEBOOKTOKEN;
const accountId = process.env.FACEBOOKACCOUNTID;
const clientId = process.env.FACEBOOKAPIID;
const secret = process.env.FACEBOOKAPISECRET;

// const get_token = async function () {
//   const requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   const resp = await fetch(
//     `https://graph.facebook.com/oauth/access_token?client_id=${clientId}&client_secret=${secret}&grant_type=client_credentials`,
//     requestOptions
//   );

//   return await resp.json();
// };

const list_campaigns = async function () {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const resp = await fetch(
    `https://graph.facebook.com/v12.0/act_${accountId}/campaigns?access_token=${token}&debug=all&format=json&pretty=0&suppress_http_code=1&transport=cors&fields=name%2Cobjective`,
    requestOptions
  );
  const r = await resp.json();
  console.log(r);
  return r;
};

const listAdsets = async function (token, accountId) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const resp = await fetch(
    `https://graph.facebook.com/v9.0/act_${accountId}/adsets?access_token=${token}&debug=all&format=json&pretty=0&suppress_http_code=1&transport=cors&fields=name%2Cobjective`,
    requestOptions
  );
  return JSON.parse(resp.json());
};

const getCampaignStats = async function (campaignId, window) {
  let listDates = await generateDates(window);
  listDates = JSON.stringify(listDates);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const resp = await fetch(
    `https://graph.facebook.com/v9.0/${campaignId}/insights?access_token=${token}&debug=all&format=json&pretty=0&suppress_http_code=1&transport=cors&fields=actions%2Cclicks%2Cimpressions%2Cspend&time_ranges=${listDates}&limit=100`,
    requestOptions
  );
  return resp.json();
};

const create_entry = async function (window) {
  let campaigns = await list_campaigns();
  return campaigns.data;
  //   console.log(campaigns);
  //   let final = await campaigns.map(async (campaign) => {
  //     const stats = await getCampaignStats( campaign.id, window);
  //     if (stats.data.length > 0) {
  //       const dressedArray = stats.data.map((x) => {
  //         const linkClicks = x.actions.find((y) => y.action_type == "link_click");
  //         const dressed = {
  //           Date: x.date_start,
  //           "Account Id": accountId,
  //           Account: "Comfort Keepers",
  //           Campaign: campaign.name,
  //           Impressions: x.impressions,
  //           Cost: x.spend,
  //           Clicks: linkClicks.value,
  //         };
  //         return dressed;
  //       });
  //       return dressedArray;
  //     }
  //   });
  //   // const hold = await Promise.all(final)
  //   final = await Promise.all(final);
  //   final = final.filter((x) => x);
  //   final = convertToCSV(final);
  //   return final;
};

/**
 *
 * @param {integer} window How many days back do we need to pull data
 */
const generateDates = async function (window) {
  let dateArray = [];
  for (let index = 0; index < window; index++) {
    let focus = moment()
      .add(index * -1, "days")
      .format("YYYY-MM-DD");

    let dateSet = {
      since: focus,
      until: focus,
    };
    dateArray.push(dateSet);
  }
  return dateArray;
};

function convertToCSV(ary) {
  let arr = [];
  ary.map((x) => {
    arr.push(...x);
  });

  const array = [Object.keys(arr[0])].concat(arr);

  let final = array.map((it) => {
    return Object.values(it).toString();
  });
  final = final.slice(1);
  final = final.join("\n");
  return final;
}
const writeData = async function () {
  const focus = data[0];
};

module.exports = {
  create_entry,
  //   get_token,
};

// get_token(clientId, secret)
// getCampaignStats(token, "6172542598127", 30)
// listCampaigns(token, accountId)
// createEntry(token, accountId, 33)
// .then(x => convertToCSV(x))
// .then(x => console.log(x))
// .then(x => fs.writeFileSync('./holding/facebook.csv', x))
// .catch(err => console.log(err))

// time_range=%7B%22since%22%3A%222020-03-01%22%2C%22until%22%3A%222020-08-31%22%7D
// time_range={"since":"2020-03-01","until":"2020-08-31"}
// 6199944829727/insights?time_ranges=list[{'since':"2020-09-11",'until':"2020-09-13"}]
