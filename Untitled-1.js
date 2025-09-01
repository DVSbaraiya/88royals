<script>
document.addEventListener("DOMContentLoaded", function () {
  const formIds = ["20718", "20735"];

  formIds.forEach(function (id) {
    const form = document.getElementById("forminator-module-" + id);
    if (form && !form.querySelector("#leadid_token")) {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.id = "leadid_token";
      hiddenInput.name = "universal_leadid";
      hiddenInput.value = ""; // Will be populated by LeadiD script
      form.appendChild(hiddenInput);
    }
  });
});
</script>
<script id="LeadiDscript" type="text/javascript">
(function() {
  var s = document.createElement('script');
  s.id = 'LeadiDscript_campaign';
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//create.lidstatic.com/campaign/922be4c8-23b7-ad9e-4afb-145f053d9913.js?snippet_version=2&f=reset';
  var LeadiDscript = document.getElementById('LeadiDscript');
  LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
})();
</script>
<noscript>
  <img src='//create.leadid.com/noscript.gif?lac=04A63163-4ED2-C40E-B9A3-90405CE16A04&lck=922be4c8-23b7-ad9e-4afb-145f053d9913&snippet_version=2' />
</noscript>
