```
curl localhost:8080 \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
        "context": {
          "eventId":"1144231683168617",
          "timestamp":"2020-05-06T07:33:34.556Z",
          "eventType":"google.pubsub.topic.publish",
          "resource":{
            "service":"pubsub.googleapis.com",
            "name":"projects/sample-project/topics/gcf-test",
            "type":"type.googleapis.com/google.pubsub.v1.PubsubMessage"
          }
        },
        "data": {
          "@type": "type.googleapis.com/google.pubsub.v1.PubsubMessage",
          "attributes": {
             "attr1":"attr1-value"
          },
          "data": "d29ybGQ="
        }
      }'
```

```
gcloud functions deploy update_bing --region=us-east1 --runtime=nodejs14 --source ./ --entry-point=update_bing --trigger-topic=update_bing --memory=512 --timeout=540s --service-account=jntaylor@comfort-keepers-2b659.iam.gserviceaccount.com
```

```
gcloud functions deploy update_linkedin --region=us-east1 --runtime=nodejs14 --source ./ --entry-point=update_linkedin --trigger-topic=update_linkedin --memory=512 --timeout=540s --service-account=jntaylor@comfort-keepers-2b659.iam.gserviceaccount.com
```

```
gcloud functions deploy update_ttd --region=us-east1 --runtime=nodejs14 --source ./ --entry-point=update_ttd --trigger-topic=update_ttd --memory=512 --timeout=540s --service-account=jntaylor@comfort-keepers-2b659.iam.gserviceaccount.com
```

```
gcloud functions deploy update_patch --region=us-east1 --runtime=nodejs14 --source ./ --entry-point=update_patch --trigger-topic=update_patch --memory=512 --timeout=540s --service-account=jntaylor@comfort-keepers-2b659.iam.gserviceaccount.com
```

```
gcloud functions deploy update_facebook --env-vars-file .env.yml --region=us-east1 --runtime=nodejs14 --source ./ --entry-point=update_facebook --trigger-topic=update_facebook --memory=512 --timeout=540s --service-account=jntaylor@comfort-keepers-2b659.iam.gserviceaccount.com
```