# Ouvrir directement le formulaire d'avis Google

## Objectif
Aujourd'hui, le bouton « Laisser un avis Google » ouvre la fiche Google Maps du restaurant : le visiteur doit encore trouver l'onglet Avis puis cliquer sur « Write a review ». On veut qu'un seul clic affiche directement le formulaire de notation (étoiles + commentaire).

## Ce qui change
- Le bouton « Laisser un avis Google » pointera vers l'URL officielle Google de rédaction d'avis, qui ouvre immédiatement la fenêtre du formulaire pour la fiche « Restaurant Dar Baya ».
- Sur mobile, ce lien ouvre l'application Google Maps directement sur le formulaire ; si l'utilisateur n'est pas connecté à son compte Google, Google lui demande de se connecter puis affiche le formulaire.
- Le second bouton « Lire les 125 avis » reste inchangé (fiche Google + avis).

## Détail technique
Dans `src/routes/index.tsx`, composant `Avis` :
- Remplacer la constante `REVIEW_URL` (actuellement une URL `maps?ftid=...&lrd=...`) par :
  `https://search.google.com/local/writereview?placeid=ChIJJZcqKQB1AhMR29l0YWcpets`
  (identifiant de fiche dérivé du `ftid` fourni, vérifié comme correspondant à la fiche du restaurant).
- Conserver `target="_blank"` et `rel="noopener noreferrer"`, ainsi que le style doré du bouton.
- Les constantes restent déclarées à l'intérieur du composant (contrainte de découpage de route déjà rencontrée).

Aucune autre section n'est modifiée.
