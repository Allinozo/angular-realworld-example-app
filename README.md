# COMPTE RENDU TP PROJET WE 
## Raphaël Roy

L'objectif de ce TP était d'intégrer une fonctionnalité à un projet déjà existant. 
Malheureusement, le projet n'a pas pu être mené à terme en raison de problèmes de compatibilité et de problèmes au niveau de chemins. 

La version originale de ce projet est trouvable ici : ```https://github.com/gothinkster/angular-realworld-example-app```.

Mon but était d'intégrer un formulaire au sein de la page permettant de créer un nouvel utilisateur et d'avoir une sauvegarde des utilisateurs créés afin d'assurer une authentification.

Pour ceci, j'ai créé un nouveau composant avec ```ng `generate component form``.

J'ai par la suite essayé de créer des classes Users, UserService et AuthenticationService à la main, pour pouvoir gérer la création d'une table utilisant des identifiants, cependant en essayant de m'inspirer de plusieurs sites et codes différents, je n'ai pas réussi à trouver une option fonctionnelle sur mon ordinateur, malgré la définition de ces classes au sein des différents fichiers ts.
