"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");

const dataset_name = config.dataset_name;
const table_name = config.bing_table_name;
const sheetName = "Bing";

const update = async function () {
  // await BigQuery.createTable('109156790', `${sheetName}_Cost_Data_Temp`,  schema) // create if non exists

  const range = `${sheetName}!A2:G300000`;
  const sheets_data = await sheets.getData(
    config.google_sheet_id,
    range
  );

  const { bucket_name, file_name } = await saveToGCS(sheets_data.values, sheetName);

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
    name: "Campaign_Name",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Date",
    type: "DATE",
    mode: "NULLABLE",
  },
  {
    name: "Device_Type",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Cost",
    type: "FLOAT",
    mode: "NULLABLE",
  },
  {
    name: "Clicks",
    type: "FLOAT",
    mode: "NULLABLE",
  },
  {
    name: "Impressions",
    type: "FLOAT",
    mode: "NULLABLE",
  },
];

exports.update_bing = async (message, context) => {
  return await update();
};
