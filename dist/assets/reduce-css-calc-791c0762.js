import{c as s}from"./@babel-6609aba7.js";import{r as C}from"./reduce-function-call-e46d257c.js";import{f as p}from"./math-expression-evaluator-65831799.js";var E=d;function d(u,r,e){u instanceof RegExp&&(u=h(u,e)),r instanceof RegExp&&(r=h(r,e));var t=w(u,r,e);return t&&{start:t[0],end:t[1],pre:e.slice(0,t[0]),body:e.slice(t[0]+u.length,t[1]),post:e.slice(t[1]+r.length)}}function h(u,r){var e=r.match(u);return e?e[0]:null}d.range=w;function w(u,r,e){var t,a,f,l,c,n=e.indexOf(u),o=e.indexOf(r,n+1),i=n;if(n>=0&&o>0){for(t=[],f=e.length;i>=0&&!c;)i==n?(t.push(i),n=e.indexOf(u,i+1)):t.length==1?c=[t.pop(),o]:(a=t.pop(),a<f&&(f=a,l=o),o=e.indexOf(r,i+1)),i=n<o&&n>=0?n:o;t.length&&(c=[f,l])}return c}var m=E,x=C,O=p,S=100,b=/(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g,v,y=M;function M(u,r){v=0,r=Math.pow(10,r===void 0?5:r),u=u.replace(/\n+/g," ");function e(a,f,l){if(v++>S)throw v=0,new Error("Call stack overflow for "+l);if(a==="")throw new Error(f+"(): '"+l+"' must contain a non-whitespace string");a=t(a,l);var c=R(a);if(c.length>1||a.indexOf("var(")>-1)return f+"("+a+")";var n=c[0]||"";n==="%"&&(a=a.replace(/\b[0-9\.]+%/g,function(g){return parseFloat(g.slice(0,-1))*.01}));var o=a.replace(new RegExp(n,"gi"),""),i;try{i=O.eval(o)}catch{return f+"("+a+")"}return n==="%"&&(i*=100),(f.length||n==="%")&&(i=Math.round(i*r)/r),i+=n,i}function t(a,f){a=a.replace(/((?:\-[a-z]+\-)?calc)/g,"");for(var l="",c=a,n;n=b.exec(c);){n[0].index>0&&(l+=c.substring(0,n[0].index));var o=m("(",")",c.substring([0].index));if(o.body==="")throw new Error("'"+a+"' must contain a non-whitespace string");var i=e(o.body,"",f);l+=o.pre+i,c=o.post}return l+c}return x(u,/((?:\-[a-z]+\-)?calc)\(/,e)}function R(u){for(var r=[],e=[],t=/[\.0-9]([%a-z]+)/gi,a=t.exec(u);a;)!a||!a[1]||(e.indexOf(a[1].toLowerCase())===-1&&(r.push(a[1]),e.push(a[1].toLowerCase())),a=t.exec(u));return r}const L=s(y);export{L as r};