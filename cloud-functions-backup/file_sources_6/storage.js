const { Storage } = require("@google-cloud/storage");
const { file } = require("googleapis/build/src/apis/file");
const config = require("./config.json");

const saveToStorage = function (data, prefix) {
  const storage = new Storage();
  //   const data = Buffer.from(JSON.stringify(data), "base64").toString();
  //   data = transform(data);
  const datetime = new Date().toISOString();
  const bucketName = storage.bucket(config.bucket_name);
  const fileName = bucketName.file(`${prefix}-${datetime}.csv`);

  var lineArray = [];
  data.forEach(function (infoArray, index) {
    const clean = infoArray.map((x) => x.replace(/,/g, ""));
    var line = clean.join(",");
    lineArray.push(line);
  });
  var csvContent = lineArray.join("\n");

  return fileName
    .save(csvContent)
    .then(() => {
      console.log(`Successfully uploaded ${fileName.name} to GCS`);
    })
    .then(() => {
      return { bucket_name: fileName.metadata.bucket, file_name: fileName.metadata.name };
    });
};

exports.saveToGCS = async (data, prefix) => {
  // "Resolve functions that perform asynchronous processing (also known as "background functions") by
  // returning a JavaScript promise."
  // https://firebase.google.com/docs/functions/terminate-functions
  return await saveToStorage(data, prefix);
};
