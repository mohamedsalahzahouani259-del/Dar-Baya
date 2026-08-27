# Plan : Connecter GitHub et déployer Dar Baya sur Netlify

## Contexte
Le projet n'est pas encore connecté à GitHub. Pour déployer sur Netlify de façon fiable, la meilleure méthode est de synchroniser le code avec GitHub, puis de lier Netlify à ce repository.

## Étapes

1. **Connecter GitHub dans Lovable**
   - Ouvrir le menu Plus (+) dans le chat input → GitHub → Connect project.
   - Autoriser l'application Lovable GitHub App.
   - Choisir le compte/organisation GitHub.
   - Créer un nouveau repository (ex. `dar-baya-site`).
   - Lovable pousse automatiquement tout le code actuel sur ce repo.

2. **Vérifier la configuration Netlify dans le code**
   - S'assurer que `netlify.toml` existe à la racine avec :
     - `command = "npm run build"`
     - `publish = ".output/public"`
     - `NITRO_PRESET = "netlify"`
   - S'assurer que `vite.config.ts` contient `nitro: { preset: "netlify" }`.

3. **Configurer le site sur Netlify**
   - Aller sur netlify.com → "Add new site" → "Import an existing project".
   - Sélectionner le repository GitHub `dar-baya-site`.
   - Netlify détecte généralement Vite automatiquement, mais vérifier :
     - Build command : `npm run build`
     - Publish directory : `.output/public`
   - Cliquer sur Deploy.

4. **Tester et valider**
   - Attendre la fin du build.
   - Vérifier que l'URL `.netlify.app` affiche le site correctement.
   - Si le build échoue, récupérer les premières lignes d'erreur du log Netlify pour affiner.

## Alternative sans GitHub
Si l'utilisateur ne veut pas connecter GitHub, il peut :
- Télécharger le code via Code Editor → Download codebase (workspace payant), ou
- Utiliser Netlify Drop en faisant un build local puis en glissant le dossier `.output/public`.

Cependant, GitHub reste recommandé pour les futures mises à jour automatiques.
