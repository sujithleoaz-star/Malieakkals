/* Edit these settings. Leave a value empty ('') to keep it hidden on the site. */
var SITE={
  wa:'916360037765',                          // WhatsApp and phone number: country code, no + sign
  formKey:'PASTE_YOUR_WEB3FORMS_KEY_HERE',    // free key from web3forms.com, enquiries are emailed to you
  years:'',     // for example '8 years'
  gst:'',       // GST number, if you have one
  email:'',     // business email address
  address:''    // full shop or office address
};
(function(){
  var w=document.getElementById('waLink');
  if(w)w.href='https://wa.me/'+SITE.wa+'?text='+encodeURIComponent('Hello MalieakkaL, I found your website and need help with a project.');
  var t=document.getElementById('telLink');
  if(t)t.href='tel:+'+SITE.wa;
  document.querySelectorAll('[data-site]').forEach(function(el){
    var k=el.getAttribute('data-site'),v=SITE[k];
    if(!v)return;
    el.textContent=v;
    if(k==='email'&&el.tagName==='A')el.href='mailto:'+v;
    el.hidden=false;
    var o=el.closest('[data-opt]');if(o)o.hidden=false;
  });
})();
