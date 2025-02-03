const { google } = require("googleapis");
require("dotenv").config();

// process.env.GOOGLE_APPLICATION_CREDENTIALS='./ck-sa.json'

async function gsrun(sheetId, range) {
  const client = await google.auth.getClient({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const gsapi = google.sheets({ version: "v4", auth: client });

  const opt = {
    spreadsheetId: sheetId,
    range,
  };

  let data = await gsapi.spreadsheets.values.get(opt);

  return data.data;
}


const DV360Schema = [
  {
    name: "Date",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Campaign",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "LineItem",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "InsertionOrder",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Impression",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Clicks",
    type: "STRING",
    mode: "NULLABLE",
  },
  {
    name: "Costs",
    type: "STRING",
    mode: "NULLABLE",
  },
];

const PatchSchema = [
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

module.exports = {
  getData: gsrun,
  DV360Schema,
  PatchSchema,
};
