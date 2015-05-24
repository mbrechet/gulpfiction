# gulpfiction

Application about gulp for BreizhCamp 2015

<h1>Installation</h1>

<h2>Gulp</h2>
Installer gulp de manière globale pour avoir le raccourcis global 'gulp'

```
npm install -g gulp
```

Installer les dépendances normale et de développement

```
npm install
npm install --dev
```

Compiler les css  et builder le projet avec gulp

```
gulp
```

<h2>Maven</h2>
Comme maven fonctione avec Java, il faut avoir java d'installer sur la machine. Ensuite les binaires de maven se trouvent dans le répertoire <b>maven</b> du projet, il faut donc déclarée les propriétés maven en variable d'environnement du système :
<h3>Sous linux et mac OS</h3>
```
export M2_HOME=<install_dir>/maven

export PATH=$M2_HOME/bin:${PATH}
```
Pour que les variables persistent, pensez les exporter dans le fichier .bashrc

<h3>Sous window </h3>
```
C:\Usersm\> set M2_HOME=<install_dir>apache-maven-3.3.1
C:\Usersm\> set PATH=%PATH%;%M2_HOME%bin
```
Il faut ajouter la variable M2_HOME et modifier le path dans les variables d'environnement au niveau du panneau de configuration pour que la valeur persiste.

<h1>Démarrage</h1>
Pour lancer l'app, se placer à la racine dans une invite de commande puis entrer:
node .

Index :
http://localhost:3000/

RESTful routes:
http://localhost:3000/explorer/
