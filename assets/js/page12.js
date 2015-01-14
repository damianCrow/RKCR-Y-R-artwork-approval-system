
var approval = {
	"assetName": "Asset Name Example",
	"fileName": "File 001",
	"version": "02",
	"internalApproval": "John Doe | johndoe@examplemail.com",
	"clientApproval": "jane Doe | jane@examplemail.com"
	};


$('#asset-name').html(approval.assetName).css("text-transform", "uppercase");
$('#file-name').html(approval.fileName).css("text-transform", "uppercase");
$('#version-name').html(approval.version).css("text-transform", "uppercase");
$('#approver-details').html(approval.internalApproval).css("text-transform", "uppercase");
$('#client-details').html(approval.clientApproval).css("text-transform", "uppercase");

