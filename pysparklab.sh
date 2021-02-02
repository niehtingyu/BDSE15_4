#!/bin/bash

export PYSPARK_DRIVER_PYTHON="jupyter"
export PYSPARK_DRIVER_PYTHON_OPTS="lab --no-browser --port=8888"

# local mode
pyspark

# yarn mode
#pyspark \
#--master yarn \
#--deploy-mode client \
#--driver-cores 1 \
#--driver-memory 1G \
#--num-executors 999 \
#--executor-cores 2 \
#--executor-memory 16G

# standalone mode
#pyspark \
#--master "spark://bdse118.example.org:7077" \
#--deploy-mode client \
#--driver-cores 1 \
#--driver-memory 1G \
#--num-executors 999 \
#--executor-cores 2 \
#--executor-memory 6G
