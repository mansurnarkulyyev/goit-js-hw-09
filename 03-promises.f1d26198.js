!function(){function e(e,n){var t=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){t?o({position:e,delay:n}):a({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=parseInt(t.delay.value),a=parseInt(t.step.value),i=parseInt(t.amount.value),c=1;c<=i;c+=1)e(c,o).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),o+=a}))}();
//# sourceMappingURL=03-promises.f1d26198.js.map