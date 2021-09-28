# tp_cicd

### Instruction d'installation :
* Un container docker de l'application est disponible sur docker hub à l'adresse suivante : gaspardc/tp-cicd 
  * il suffit alors de faire un docker run -p 3000:3000 gaspardc/tp-cicd
* Il est possible de build directement les sources disponibles sur le repo, pour se faire : 
  * npm ci / npm install dans le répertoire du projet
  * npm start pour démarrer l'application
  * Le service est hebergé sur le port 3000 et accessible via navigateur

### Stratégie de CI/CD mise en place :
Nous avons mis en place différente actions visant à automatiser et sécuriser le processus de développement et de déploiement.
* D'une part, le dépot github bloque les push sur la branche principale, obligeant les utilisateurs à faire des pull/merge request, cela entrainant un review par un être humain.
* De plus les pull requests sur la branche Main entrainent le déclenchement d'une action github qui éxecute les cahiers de test du programme, les résultats de ces test sont ensuite adjoint à la PR et visible sur la page de ses détails
* D'autre part, nous avons mis en place des actions de build et de déploiement automatique des images docker de l'application sur dockerHub.
  * D'abord, en cas de release sur la branche Main, on build une image tp-cicd qui est automatiquement poussée sur dockerhub
  * Aussi en cas de modifications sur la branche Main sans ajout de Tag de release une image docker est build et poussée vers le dépot dockerhub gaspardc/test-tp-cicd
  
  Dans un hypotétique environnement de production, la modification des images dans les dépots pourrait être écoutées et pourrait entrainer un déploiement sur un environnement de production pour tp-cicd et sur un environnement de staging pour test-tp-cicd.
  
