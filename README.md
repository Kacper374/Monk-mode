# MONK MODE — strona na GitHub Pages

## Opcja A: jeden plik (najprostsza)
1. Pobierz `MONK_MODE_index_jeden_plik.html` i zmień nazwę na `index.html`.
2. Wgraj go do głównego katalogu publicznego repozytorium na GitHubie.
3. W `Settings → Pages` ustaw `Deploy from a branch`, `main`, `/(root)`.

## Opcja B: trzy osobne pliki
Wgraj do głównego katalogu repozytorium **wszystkie trzy** pliki z tego folderu:
- `index.html` — treść strony,
- `style.css` — wygląd strony,
- `script.js` — zachowanie przycisków zakupu i stopki.

Pliki muszą leżeć obok siebie. Nie wgrywaj tylko jednego z nich.

## Uruchomienie sprzedaży
W `script.js` (opcja B) lub w sekcji `<script>` w `index.html` (opcja A) znajdź:

`const CHECKOUT_URL = '';`

W miejsce pustego ciągu wpisz pełny adres HTTPS do strony **zakupu produktu** na wybranej platformie, np. `https://...` (nie link do darmowego PDF-u ani klucz API). Przyciski zakupu przełączą się wtedy na działające linki.

**Uwaga:** przed publikacją oferty jako aktywnej trzeba sprawdzić produkt, płatności, pobieranie, dane sprzedawcy, wymagane informacje dla klientów oraz prawa konsumentów. Nie przechowuj płatnego pliku PDF w publicznym repozytorium.

## Sprawdź po publikacji
- Strona otwiera się przez HTTPS.
- Wersja mobilna wyświetla nagłówek, treść i przyciski bez ucinania.
- Linki do sekcji działają.
- Po skonfigurowaniu CHECKOUT_URL wykonaj zakup testowy.
- Sprawdź na stronie checkout rzeczywistą walutę, cenę, podatki i sposób dostarczenia pliku.

Ważne: poprawne opublikowanie strony nie oznacza automatycznie uruchomienia sprzedaży.
