"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");

const dataset_name = config.dataset_name;
const table_name = config.facebook_table_name;
const sheetName = "Facebook (Last 2 Years)";

const update = async function () {
  const range = `${sheetName}!A2:E300000`;
  const sheets_data = await sheets.getData(config.google_sheet_id, range);

  const { bucket_name, file_name } = await saveToGCS(
    sheets_data.values,
    sheetName
  );

  await bigquery.saveToBigQuery(
    schema,
    dataset_name,
    table_name,
    bucket_name,
    file_name
  );
};

const schema = [
  {
    name: "StartDate",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Campaign",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Cost",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Impressions",
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
