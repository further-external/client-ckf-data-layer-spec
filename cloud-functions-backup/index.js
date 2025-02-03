/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

  
const Storage = require('@google-cloud/storage');
const storage = new Storage();

const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

async function getFileData() {

  const bucketName = 'ckf_campaign_manager';
  const filePath = 'campaignManager.csv';
  let contents = await storage.bucket(bucketName).file(filePath).download();
  data = contents.toString()
  let linesExceptFirst = data.split('\n')
  let stopper = linesExceptFirst.length -2
  linesExceptFirst = linesExceptFirst.slice(13,stopper)
  let linesArr = linesExceptFirst.map(line=>line.split(','));
  let vals = linesArr.map(x => {
      keys = ["date", "campaign", "campaignId", "site", "placement", "placementId", "impressions", "clicks", "videoPlays", "videoCompletions", "cost"]
      object = Object.fromEntries(keys.map((k, i) => [k, x[i]]));
      return object;
    })
  return vals
}

const load_json = async function(datasetId, tableId, rows) {
  await bigquery.dataset(datasetId)
        .table(tableId)
        .insert(rows)
  console.log(`Inserted ${rows.length} rows`);    
}

exports.helloGCS = (event, context) => {
  const gcsEvent = event;
  console.log(`Processing file: ${gcsEvent.name}`);
  getFileData(gcsEvent.name)
    .then(x => load_json("109156790", "Campaign_Manager_Temp_II", x))
    .catch(err => console.log(err))

};
