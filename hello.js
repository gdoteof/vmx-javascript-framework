/*
// Asynchronsly list all available models
$vmx.models.list().then(function(models){
  // Create a new connection for the first one
  $vmx.connections.create(models[0].uuid).then(function(connectionId){
    startApp(connectionId);
  });
});
*/


//List all available connections
$vmx.connections.update().then(function(connections){
  //we already k now which we are going to use
  var connectionId = "ed67e6cf-0687-4ae4-bdc6-1b0320edc787"
  startApp(connectionId);
});



function startApp(connectionId){
  $vmx.defaultDetector.set_connection({id: connectionId});
  $vmx.defaultDetector.detect("http://ecx.images-amazon.com/images/I/41Y84-St3tL.jpg", {type: "url"}).then(function(data){
    console.log(data);
  });
}


