/* Meta Pixel (dataset 1644617050560187) */
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1644617050560187');
fbq('track','PageView');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GKLZMQMLMK');

(function(){
  var t = document.getElementById('vera-teaser');
  if (!t) { return; }
  setTimeout(function(){
    t.style.display = 'block';
    requestAnimationFrame(function(){ t.style.opacity = '1'; t.style.transform = 'none'; });
  }, 2500);
  setTimeout(function(){ if (t) { t.style.display = 'none'; } }, 15000);
})();

/* Campaign attribution: remembers where a visitor came from (UTM / src / Facebook referrer) for 30 days
   so the audit form can report the source. Wrapped in try/catch: storage can be blocked. */
(function(){
  var KEY = 'cd_attr';
  function read(){ try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  try {
    var q = new URLSearchParams(location.search), cur = {}, campaign = false;
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','src','fbclid'].forEach(function(k){
      var v = q.get(k); if (v) { cur[k] = String(v).slice(0, 100); campaign = true; }
    });
    var ref = '';
    try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch (e) {}
    if (!campaign && ref && ref.indexOf(location.hostname) === -1) { cur.ref = ref; }
    var prev = read(), fresh = !prev || (Date.now() - prev.ts) > 30 * 864e5;
    if (campaign || (cur.ref && fresh)) {
      cur.landing = location.pathname; cur.ts = Date.now();
      localStorage.setItem(KEY, JSON.stringify(cur));
    }
  } catch (e) {}
  window.cdAttribution = function(){
    var a = read() || {}, src = a.utm_source || a.src || '';
    if (!src && a.ref) { src = /facebook\.com$|fb\.com$/.test(a.ref) ? 'facebook' : a.ref; }
    var label = src || 'direct';
    if (a.utm_medium) { label += ' / ' + a.utm_medium; }
    if (a.utm_campaign) { label += ' / ' + a.utm_campaign; }
    return { label: label, source: src || 'direct', medium: a.utm_medium || '', campaign: a.utm_campaign || '', content: a.utm_content || '', term: a.utm_term || '', landing: a.landing || '', fbclid: a.fbclid ? 'yes' : '' };
  };
})();
