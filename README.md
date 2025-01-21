Voici un exemple de fichier `README.md` pour votre projet **EatGreen-API**. Ce fichier fournit une documentation claire et concise pour les utilisateurs et les contributeurs.

---

# EatGreen-API

**EatGreen-API** est une API Node.js construite avec TypeScript, Express et MongoDB. Elle fournit des fonctionnalités d'authentification (inscription, connexion, déconnexion) et est documentée avec Swagger. Ce projet est conçu pour être facile à utiliser, à étendre et à déployer.

---

## Fonctionnalités

- **Authentification** :
  - Inscription avec email, nom d'utilisateur et mot de passe.
  - Connexion avec email et mot de passe.
  - Déconnexion (invalidation côté client).
- **Validation des données** :
  - Utilisation de Joi pour valider les entrées utilisateur.
- **Sécurité** :
  - Hachage des mots de passe avec `bcryptjs`.
  - Génération de tokens JWT pour l'authentification.
  - Middleware de validation de token.
  - Limitation de taux (rate limiting) pour prévenir les attaques par force brute.
- **Documentation** :
  - Documentation interactive de l'API avec Swagger.
- **Base de données** :
  - Utilisation de MongoDB pour stocker les données utilisateur.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [MongoDB](https://www.mongodb.com/) (local ou cloud)
- [Git](https://git-scm.com/)

---

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/EatGreenTeam/eatgreen-api
   cd eatgreen-api
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```env
   PORT=3000
   JWT_SECRET=votre_clé_secrète_jwt
   MONGO_URI=mongodb://localhost:27017/eatgreen_db
   ```

4. **Démarrer le serveur** :
   ```bash
   npm run dev
   ```

---

## Utilisation

### Accéder à la documentation Swagger
Une fois le serveur démarré, accédez à la documentation Swagger à l'adresse suivante :
```
http://localhost:3000/docs
```

### Endpoints disponibles

#### Authentification
- **POST `/auth/register`** : Inscription d'un nouvel utilisateur.
  - Body :
    ```json
    {
      "email": "test@example.com",
      "username": "testuser",
      "password": "password123"
    }
    ```

- **POST `/auth/login`** : Connexion d'un utilisateur.
  - Body :
    ```json
    {
      "email": "test@example.com",
      "password": "password123"
    }
    ```

- **POST `/api/auth/logout`** : Déconnexion d'un utilisateur.

---

## Développement

### Commandes utiles

- **Démarrer le serveur en mode développement** :
  ```bash
  npm run dev
  ```

- **Compiler le projet TypeScript** :
  ```bash
  npm run build
  ```

- **Démarrer le serveur en mode production** :
  ```bash
  npm start
  ```

- **Linter le code** :
  ```bash
  npm run lint
  ```

- **Formater le code** :
  ```bash
  npm run format
  ```

---

## Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. **Forker le projet**.
2. **Créer une branche** pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. **Commit vos changements** (`git commit -m 'Add some AmazingFeature'`).
4. **Pusher la branche** (`git push origin feature/AmazingFeature`).
5. **Ouvrir une Pull Request**.

---

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Remerciements

- Merci à la communauté open source pour les outils et les bibliothèques utilisés dans ce projet.

---

Ce fichier `README.md` est conçu pour être clair et informatif. Vous pouvez l'adapter en fonction des spécificités de votre projet. Si vous avez besoin d'autres sections ou d'informations supplémentaires, n'hésitez pas à les ajouter !