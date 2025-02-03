"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");

const dataset_name = config.dataset_name;
const table_name = config.patch_table_name;
const sheetName = "Patch";

const update = async function () {
  const range = `${sheetName}!A2:G300000`;
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
    name: "Date",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "CampaignName",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "device",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "cost",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "impressions",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "clicks",
    type: "STRING",
    mode: "NULLABLE",
  },
];

exports.update_patch = async (message, context) => {
  return await update();
};
