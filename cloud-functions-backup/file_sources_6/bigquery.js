const { BigQuery } = require("@google-cloud/bigquery");
const { Storage } = require("@google-cloud/storage");

const createJob = async function (_query) {
  // Run a BigQuery query job.
  const bigquery = new BigQuery();

  const options = {
    // Specify a job configuration to set optional job resource properties.
    configuration: {
      query: {
        query: _query,
        useLegacySql: false,
      },
      labels: { "example-label": "example-value" },
    },
  };

  // Make API request.
  const response = await bigquery.createJob(options);
  const job = response[0];

  // Wait for the query to finish
  await job.getQueryResults(job);
};

const saveToBigQuery = async function (
  schema,
  dataset_name,
  table_name,
  bucket_name,
  file_name
) {
  const bigquery = new BigQuery();
  const storage = new Storage();

  const metadata = {
    sourceFormat: "CSV",
    schema: {
      fields: schema,
    },
    location: "US",
  };

  // Load data from a Google Cloud Storage file into the table
  const [job] = await bigquery
    .dataset(dataset_name)
    .table(table_name)
    .load(storage.bucket(bucket_name).file(file_name), metadata);

  // load() waits for the job to finish
  console.log(`Job ${job.id} completed.`);

  // Check the job's status for errors
  const errors = job.status.errors;
  if (errors && errors.length > 0) {
    throw errors;
  }
};

module.exports = {
  createJob,
  saveToBigQuery
};
