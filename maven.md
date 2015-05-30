# création du pom par défaut

A la main on créé le fichier pom.xml minimal contenant un artifactId, un nom pour notre application et un numéro de version

## quelles phases de maven ?
- validate : pour checker que notre code ne contient aucune erreurs (jshint...) -> jshint-maven-plugin
- compile : on va générer les fichiers mimifiés avec uglify et compiler nos fichiers scss en css
- test : passage des test unitaire
- package : génération d'une archive (tag, ou zip)
- integration-test : déploie les livrable sur le serveur d'intégration
- deploy : met à disposition du public notre livrable (sur un repos bower ou node ???)

Le clean supprime l'archive et les fichiers générés

                                                                            
