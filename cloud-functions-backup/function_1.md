# import pickle
# from google.cloud import storage
from google.cloud import bigquery
# import gcsfs
import pandas as pd


def execute_sql(fileName):
  bq = bigquery.Client()
  x = './' + fileName
  sql = open(x, 'r')
  sql = sql.read()
  bq.query(sql)


def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()

    if request.args and 'fileName' in request.args:
        x = request.args.get('fileName')
        execute_sql(x)
        return request.args.get('fileName')
    
    elif request_json and 'fileName' in request_json:
        x = request_json['fileName']
        execute_sql(x)
        return request_json['fileName']
        
    else:
        return f'Hello World!'
