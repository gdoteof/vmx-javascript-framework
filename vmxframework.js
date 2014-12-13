var injector = angular.bootstrap(document, ["vmx", "vmx.services"]);
var $compile = injector.get('$compile');
var $vmx = {};
var vmxconnections = injector.get('vmxconnections');
$vmx.models = injector.get('vmxmodels');
$vmx.connections = injector.get('vmxconnections');
$vmx.detectorFactory = injector.get('VmxDetectorProviderX');

$vmx.defaultDetector = $vmx.detectorFactory.getInstance();
$vmx.detect = $vmx.defaultDetector.detect


$(document).ready(function(){ $compile(document); });
