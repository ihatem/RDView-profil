$(document).ready(function(){$.getScript("assets/js/min/1-calendar-verif-min.js"),$("#commande-form").watch({properties:"prop_innerHTML",watchChildren:!1,callback:function(){$.getScript("assets/js/min/2-cmd-verif-min.js")}}),$("#paiement-form").watch({properties:"prop_innerHTML",watchChildren:!1,callback:function(){$.getScript("assets/js/min/3-pay-verif.js")}}),$("#confirmation-form").watch({properties:"prop_innerHTML",watchChildren:!1,callback:function(){$.getScript("assets/js/min/4-confirm-verif-min.js")}})});