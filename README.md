# [Google Home Local API Documentation](https://rithvikvibhu.github.io/GHLocalApi/)

**Updated on: 2018-06-20**  
Available here: https://rithvikvibhu.github.io/GHLocalApi/

[![Build Status](https://travis-ci.org/rithvikvibhu/GHLocalApi.svg?branch=master)](https://travis-ci.org/rithvikvibhu/GHLocalApi)

Documentation for Google Home's local API, written in [API Blueprint](https://apiblueprint.org/) and rendered with [danielgtaylor/aglio](https://github.com/danielgtaylor/aglio).

The API Blueprint is in `all.apib`.

A postman collection (v2.1) is also available for import (`GoogleHome.postman_collection.json`). Set a Global or Environment variable called `url` with the IP address of the device and port 8008. Example: `http://192.168.1.15:8008`

## Contributing

* This project is created in [Postman](https://www.getpostman.com/) and exported to [API Blueprint format](https://apiblueprint.org/) using [APIMATIC's Transformer API](https://apimatic.io/transformer).
* This project makes use of [aglio](https://github.com/danielgtaylor/aglio), which is an API Blueprint renderer. Here are the [instructions](https://github.com/danielgtaylor/aglio#installation--usage) to getting aglio set up.
* Travis-ci generates the static website with aglio.
* `npm run dist` generates the static site in the 'dist' folder (Make sure the folder exists).
