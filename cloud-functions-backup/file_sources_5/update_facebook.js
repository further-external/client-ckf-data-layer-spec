"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");
const facebook = require("./facebook");

const dataset_name = config.dataset_name;
const table_name = config.facebook_table_name;

const update = async function () {
  //   const queries =
  //     "DELETE FROM `comfort-keepers-2b659.109156790.TTD_Cost_Data_Temp` WHERE TRUE;";

  //   await bigquery.createJob(queries);

  //   console.log(
  //     "Table comfort-keepers-2b659.109156790.TTD_Cost_Data_Temp emptied."
  //   );

  //const access_token = await facebook.get_token();
  const campaigns = facebook.create_entry();
  console.log(campaigns);
  //   const [start_date, end_date, window] = await range();

  //   const data = await facebook.createEntry(access_token, window + 10);
  // await fs.writeFileSync("./holding/facebook.csv", data);
  // // await BQ.createTable('109156790', 'Facebook_FrontEndAndSecondaryMetrics_temp', facebook.schema)
  // await BQ.loadLocalFile(
  //   `./holding/facebook.csv`,
  //   "109156790",
  //   "Facebook_FrontEndAndSecondaryMetrics_temp"
  // );
  //   return data; //'Facebook Update complete'
};

const schema = [
  {
    name: "StartDate",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "AccountId",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Account",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Campaign",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Impressions",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Cost",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Clicks",
    type: "STRING",
    mode: "NULLABLE",
  },
];

exports.update_facebook = async () => {
  return await update();
};
