"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");

const dataset_name = config.dataset_name;
const table_name = config.ttd_table_name;
const sheetName = "TTD";

const update = async function () {
  const range = `${sheetName}!A2:G300000`;
  const sheets_data = await sheets.getData(config.google_sheet_id, range);

  const { bucket_name, file_name } = await saveToGCS(sheets_data.values, "ttd");

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
    name: "Campaign",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Placement",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Date",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Cost",
    type: "STRING",
    mode: "NULLABLE",
  },
];

exports.update_ttd = async (message, context) => {
  return await update();
};
