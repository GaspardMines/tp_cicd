# tp_cicd

### This social network does not exist
Cette application est basée sur plusieurs APIs créant des données aléatoires afin de les rassembler sous forme de réseau social, avec des profils, des posts... qui sont inventés de toute pièce ! Cela dans le but de réaliser un réseau social qui, comme son nom l'indique, n'existe pas.

### Fonctionnalités proposées
L'application permet :
* De générer un profil d'utilisateur
* De générer des posts créés par un utilisateur
* De visualiser le profil et les posts d'un utilisateur précis
* De "liker" un post

### Instructions d'installation :
* Un container docker de l'application est disponible sur dockerhub à l'adresse suivante : gaspardc/tp-cicd 
  * il suffit alors de faire un docker run -p 3000:3000 gaspardc/tp-cicd
* Il est possible de build directement les sources disponibles sur le repo, pour se faire : 
  * npm ci / npm install dans le répertoire du projet
  * npm start pour démarrer l'application
  * Le service est hébergé sur le port 3000 et accessible via navigateur

### Stratégie de CI/CD mise en place :
Nous avons mis en place différentes actions visant à automatiser et sécuriser le processus de développement et de déploiement.
* D'une part, le dépot github bloque les push sur la branche principale, obligeant les utilisateurs à faire des pull/merge request, cela entrainant une review par un être humain.
* De plus les pull requests sur la branche Main entrainent le déclenchement d'une action github qui éxecute les cahiers de test du programme, les résultats de ces tests sont ensuite adjoint à la PR et visible sur la page de ses détails
* D'autre part, nous avons mis en place des actions de build et de déploiement automatique des images docker de l'application sur dockerhub.
  * D'abord, en cas de release sur la branche Main, on build une image tp-cicd qui est automatiquement poussée sur dockerhub
  * Aussi en cas de modifications sur la branche Main sans ajout de Tag de release une image docker est build et poussée vers le dépot dockerhub gaspardc/test-tp-cicd
  
  Dans un hypotétique environnement de production, la modification des images dans les dépôts pourrait être écoutée et pourrait entrainer un déploiement sur un environnement de production pour tp-cicd et sur un environnement de staging pour test-tp-cicd.
  
