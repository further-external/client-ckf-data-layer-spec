"use strict";

const sheets = require("./sheets");
const config = require("./config.json");
const { saveToGCS } = require("./storage");
const bigquery = require("./bigquery");

const dataset_name = config.dataset_name;
const table_name = config.linkedin_table_name;
const sheetName = "LinkedIn";

const update = async function () {
  // await BigQuery.createTable('109156790', `${sheetName}_Cost_Data_Temp`,  schema) // create if non exists

  const queries =
    "DELETE FROM `comfort-keepers-2b659.109156790.linkedIn_temp` WHERE TRUE;";

  await bigquery.createJob(queries);

  console.log(
    "Table comfort-keepers-2b659.109156790.linkedIn_temp emptied."
  );

  const range = `${sheetName}!A2:G300000`;
  const sheets_data = await sheets.getData(
    config.google_sheet_id,
    range
  );

  const { bucket_name, file_name } = await saveToGCS(sheets_data.values, "bing");

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
    name: "date",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "campaign",
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
  {
    name: "cost",
    type: "STRING",
    mode: "NULLABLE",
  }
];

exports.update_linkedin = async () => {
  return await update();
};
