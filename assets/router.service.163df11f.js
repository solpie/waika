var t=Object.assign;const e=t=>{let e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.href.match(e);return null!=n?decodeURIComponent(n[2]):null},n=(t,e,s)=>{if(null==t)return"";var r="",o=typeof t;if("string"==o||"number"==o||"boolean"==o)r+="&"+e+"="+(null==s||s?encodeURIComponent(t):t);else for(var a in t){var c=null==e?a:e+(t instanceof Array?"["+a+"]":"."+a);r+=n(t[a],c,s)}return r},s=window.location.href.includes("https")?"https":"http",r=()=>"1337"===e("srv")?"http://localhost:1337":`${s}://c-stg.liangle.com`;class o{get_api(t){return r()+t}async _post(t,e,n){const s=r()+t;return this.__post(s,e,n)}async __post(e,n,s){let r={"Content-Type":"application/json"};return s&&s.headers&&(r=t(t({},r),s.headers)),fetch(e,t(t({method:"POST",body:JSON.stringify(n)},s),{headers:r})).then((t=>t.json()))}async _delete(e,n,s){const o=r()+e;let a={"Content-Type":"application/json"};return s&&s.headers&&(a=t(t({},a),s.headers)),fetch(o,t(t({method:"DELETE",body:JSON.stringify(n)},s),{headers:a})).then((t=>t.json()))}async _put(e,n,s){const o=r()+e;let a={"Content-Type":"application/json"};return s&&s.headers&&(a=t(t({},a),s.headers)),fetch(o,t(t({method:"PUT",body:JSON.stringify(n)},s),{headers:a})).then((t=>t.json()))}async _api(t){return this.get(t)}async get(t){const e=r()+t;return fetch(e).then((t=>t.json()))}static async get_proxy(t){return fetch("http://c-stg.liangle.com/srv/proxy?url="+t).then((t=>t.json()))}}class a{static to(t,n){let s={},r=e("ll_env");r&&(s.ll_env=r);let o=a.with_query(n,s);t.push(o)}static with_query(t,e){return t+"?.=."+n(e)}}export{o as B,a as R,e as g};
