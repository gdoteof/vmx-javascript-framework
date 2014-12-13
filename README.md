# VMX Javascript Framework

<img align="right" width="500" src="http://vision.ai/vision.ai.svg">

This is the skeleton for the vmx javascript framework.

All $vmx methods that interact with the backend are asynchronous and use a promise framework (see the angular docs for [$q](https://docs.angularjs.org/api/ng/service/$q)

For example to get a list of available models from the server:

```
$vmx.models.list().then(function(models){
  //models comes from the server
  do_something_with_models(models);
});
```

Currently available components

$vmx.models

 - list() - promises a list of models
 - list_cached() - immediately returns the list of models without talking to the server

$vmx.connections

 - update() - promises a list of connections
 - create(model_uuid) - promises a new connection the for the given model

$vmx.detectorFactory

 - getInstance() - creates a new detector.

$vmx.defaultDetector 

 - a conveinence instance of a detector is created for you
 - detectors need to be associated with a specific connection (and thus a specific model)
 - $vmx.defaultDetector.set_connection({id : connection_uuid})
 - once associated with a connection: you can use `$vmx.defaultDetector.detect()`
 your options are

 $vmx.defaultDetector("http://path/to/image", {type: "url"});

 or

 $vmx.defaultDetector(base_64_encoded_image);


 Please see hello.js for working example
 

 This assumes your vmx server is running on localhost:3000  set 

 SERVER = "http:/path/to/your/vmxserver:PORT/"

 to override.

