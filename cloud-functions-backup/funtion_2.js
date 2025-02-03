const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();


const createJob = async function(_query) {
    // Run a BigQuery query job.
  
    const options = {
      // Specify a job configuration to set optional job resource properties.
      configuration: {
        query: {
          query: _query,
          useLegacySql: false,
        },
        labels: {'example-label': 'example-value'},
      },
    };
}

const range = async function () {
    

    date = new Date()
    month = date.getMonth()



    const calDict = {
        0: ['2021-12-01', '2021-12-31', 31],
        1: ['2022-01-01', '2022-01-31', 31],
        2: ['2022-02-01', '2022-02-28', 28],
        3: ['2022-03-01', '2022-03-31', 31],
        4: ['2022-04-01', '2022-04-30', 30],
        5: ['2022-05-01', '2022-05-31', 31],
        6: ['2022-06-01', '2022-06-30', 30],
        7: ['2022-07-01', '2022-07-31', 31],
        8: ['2022-08-01', '2022-08-30', 31],
        9: ['2022-09-01', '2022-09-30', 30],
        10: ['2022-10-01', '2022-10-31', 31],
        11: ['2022-11-01', '2022-11-30', 30],
    }

    // const [start_date, end_date] = calDict[month]

    return calDict[month]

} 

const sim = async function() {
    const [start_date, end_date, window] = await range()
    const query = 'DELETE FROM `comfort-keepers-2b659.109156790.CKF_CombinedPaidMedia_DEV` WHERE TRUE;'
    await createJob(query)
    
}
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  sim()
    .then(x => {
      console.log(x)
    })
    .catch(err => console.log(err))
  
  // let message = req.query.message || req.body.message || 'Hello World!';
  // res.status(200).send(message);
};
