# Plan : Corriger le déploiement Netlify de Dar Baya

## Problème constaté
Netlify renvoie `Deploy directory 'dist/client' does not exist` après le build. Le projet utilise TanStack Start v1 avec Nitro, dont le preset par défaut cible Cloudflare. Netlify ne sait donc pas où trouver les fichiers statiques générés.

## Objectif
Faire en sorte que `bun run build` (ou `npm run build`) produise un répertoire déployable reconnu par Netlify, sans casser le fonctionnement local.

## Étapes

1. **Configurer Nitro pour le preset Netlify**
   - Modifier `vite.config.ts` pour ajouter `nitro: { preset: "netlify" }` dans la config TanStack Start.
   - Ce preset génère un répertoire compatible avec Netlify Functions / Edge.

2. **Ajouter un fichier `netlify.toml`**
   - Définir la commande de build : `bun run build`
   - Définir le répertoire de publication correct (probablement `dist` ou `.output/public`, à vérifier après build).
   - S'assurer que Netlify n'écrase pas ces valeurs via l'UI.

3. **Tester le build en local**
   - Lancer `bun run build`.
   - Vérifier quel répertoire est créé (`dist`, `.output`, `.output/public`, etc.).
   - Ajuster `netlify.toml` si le répertoire de sortie diffère.

4. **Redéployer sur Netlify**
   - Pousser les modifications.
   - Relancer le déploiement Netlify.
   - Vérifier que le build passe et que le site est servi.

## Fichiers concernés
- `vite.config.ts`
- `netlify.toml` (à créer)

## Notes
- Aucun changement de contenu du site (textes, images, menu) n'est prévu.
- Le site reste statique / one-page ; la config Netlify ne concerne que le pipeline de build.
