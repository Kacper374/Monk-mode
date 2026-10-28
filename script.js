'use strict';
/* KONFIGURACJA SKLEPU: po utworzeniu produktu w Payhip wklej tutaj
   DOKŁADNY, publiczny adres HTTPS strony zakupu produktu.
   Nie wpisuj adresu pełnego PDF-u ani klucza API. */
const CHECKOUT_URL = '';
const priceLabel='29 zł';
const checkout=document.getElementById('checkoutMain');
const note=document.getElementById('checkoutText');
const status=document.getElementById('status-zakupu');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();
let isCheckoutReady=false;
try {
  const u=new URL(CHECKOUT_URL);
  isCheckoutReady=u.protocol==='https:' && !!u.hostname && !['example.com','twoja-strona.pl'].includes(u.hostname);
} catch(_error) {}
if(isCheckoutReady){
  checkout.href=CHECKOUT_URL;
  checkout.textContent=`Kup e-book — ${priceLabel} ↗`;
  checkout.rel='noopener noreferrer';
  note.textContent='Po kliknięciu przejdziesz do zewnętrznej, bezpiecznej strony zakupu. Szczegóły dostawy i warunki zakupu znajdziesz podczas finalizacji zamówienia.';
  status.hidden=true;
  const bottom=document.querySelector('.mobile-buy a');
  bottom.href=CHECKOUT_URL;
  bottom.rel='noopener noreferrer';
  bottom.textContent=`Kup — ${priceLabel}`;
}
