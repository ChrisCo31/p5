---
title: Gatsby le magnifique  ?
date: 2019-05-24T09:30:40.029Z
description: >-
  Loin de moi l’idée de discuter la valeur de ce qui est considéré comme un chef
  d’oeuvre de la littérature mondiale. Non, le Gatsby du jour est un générateur
  de site statique (GSS) qui connaît lui aussi une certaine popularité mais en
  matière de développement web.
---
Souhaitant le faire découvrir sans pour autant verser dans l’enthousiasme béat du développeur devant un nouveau jouet, nous optons pour une présentation avec l’incontournable [Wordpress](https://fr.wordpress.com) en maître étalon.

## Les prérequis

**La facilité d’installation**

De ce côté, Gatsby même s’il n’est pas compliqué demande un  investissement plus soutenu que Wordpress : L’installation préalable de node (une plateforme logicielle libre basé sur Javascript) et npm (Le gestionnaire de paquets officiel de Node.js). Puis l’installation de Gatsby CLI.

L’installation est simple, trois commandes, rien de bien complexe en soi si l’on excepte l’usage de  la ligne de commande qui peut effrayer de prime abord...et quelques problèmes qui peuvent se poser en terme d’autorisation notamment pour les utilisateurs de Windows.

**Les ressources** 

* La communauté : Il est évident que face au géant  du web qu’est Wordpress (30% des sites), Gatsby fait figure de petit poucet bien en peine de rivaliser. Pourtant, un rapide coup d’oeil sur[ github](https://github.com/gatsbyjs/gatsby) montre une communauté dynamique, réactive et soucieuse d'améliorer la structure du code, de proposer solutions et compléments d’informations.. 



* La documentation : [Gatsby](https://www.gatsbyjs.org/) propose sur son site une documentation ainsi qu’un tutoriel susceptible de vous accompagner dans vos premiers pas. Claire, progressive et complète, elle  est un incontournable à la découverte.



* Un bémol, néanmoins...Si les ressources et  une communauté active existe et se développe autour de Gatsby celle-ci n’est qu’ anglophone. Les ressources en français sont, en effet totalement inexistante. Cette situation s’améliorera peut être avec le succès grandissant de la plateforme mais en l'état, l’anglais est obligatoire !



## Le coeur de Gatsby

**RéactJS**

* Gatsby est construit sur une base [ReactJS ](https://reactjs.org/)qui est une bibliothèque javascript développé par Facebook. L’un de ses avantages est que les pages générées ne sont pas rechargées. Cette rapidité est l’un des objectifs poursuivi par les créateurs de Gatsby, affiché sur la page du site comme un mantra : 

> “Fast in every way that matters” ou “Rapide partout où cela compte”.

**La JamStack**

\    Elle pourrait faire l’objet d’un article à elle toute seule. Désireuse de rester concentré sur le coeur de Gatsby, nous nous contenterons de reprendre les termes de Mathias Billman, fondateurs de [Netlify](https://www.netlify.com/) (un autre article en perspective...) qui, la definit ainsi ((source: https://jamstack.wtf/) :  

> “Une architecture de développement Web moderne basée sur du code JavaScript côté client, des API réutilisables et des balises prédéfinies” 

**Templates,  packages manager et plugin**

* En terme de ressources, Gatsby c’est quelques centaines de plugin, rien de comparable au près de 40 000 plugin annoncé par WordPress. Cela peut cependant être un atout pour qui cherche à développer un site rapidement : Nul besoin d’y passer des heures... Toute personne ayant ressenti un jour le sentiment de submersion face aux choix d’un thème sous WP  comprendra ;-)
* Revers de la médaille, le choix bien moins important de thème empêche souvent de trouver le template qui colle parfaitement à ce que l’on souhaite mettre en place...Rédhibitoire pour qui n’est pas prêt à mettre le nez sous le capot.
* Coté compatibilité des différents plugins, package manager et versions, cela peut parfois se compliquer sans que le problème soit aisément identifiable et, surtout, résolvable. La conséquence est que ces problèmes peuvent  faire perdre le temps que l’on cherchait justement à gagner.



## Gatsby et le web

Jusqu'a présent, nous ne l'avons abordé que comme un outil. Voyons maintenant comment, il se comporte sur le web.

 **Le référencement** 

SEO (Search Engine Optimization) : Le SEO, c’est un peu la clé de voûte d’un site internet. Il permet d’obtenir un bon référencement sur les moteurs de recherches : sur le web, pour exister, il faut notamment être trouvé et à ce jeu wordpress est réputé pour proposer de bons outils (Yoast, All in One SEO Pack) et être performant. Pour Gatsby, les plugins existent (si l’on tape SEO dans le moteur de recherche des plugin : 6 résultats) . Sans les présenter tous, citons notamment gatsby-plugin-react-helmet qui permet d’ajouter des mots clés dans les pages générées.

 **La performance**

Recherché par les créateurs de Gatsby, c’est bien évidemment son grand atout : Là où WP génère les pages demandées à la volée, Gatsby est constitué de pages statiques qui sont un ensemble de fichiers HTML et CSS très rapidement chargeable.

Ce critère est important tant en terme de SEO, que pour vos visiteurs. Structurellement rapide, Gatsby travaille à renforcer cet avantage comparatif.

 **La sécurité** 

Probablement un des plus gros points faible de Wordpress d’une part parce que victime de son succès, il attire une certaine malveillance et d’autre part parce que la prolifération des plugins augmente la possibilité de failles de sécurité. 

Coté Gatsby sa structure statique (il ne s’agit, rappelons le, que de fichiers html/css) lui confère une excellente sécurité. Pour autant ca n’en fait pas une structure invulnerable. Nous consacrerons très prochainement un article sur le sujet

**L'hébergement et le déploiement** 

Une multitude de solutions existe. Coté wordpress cela passera souvent par un hébergeur payant. Avec Gatsby, la solution peut être gratuite via les services d'hébergement et de cloud computing sans serveur. L’une des plus connue est Netlify qui, de surcroît offre un certain nombre de services particulièrement intéressants et performants pour les développeurs de sites statiques.

En terme de déploiement, ils sont possible à partir des repository fait sur [Github](https://github.com/). L’opération est d’une simplicité et d’une rapidité confondante. Elle permet dès lors d’envisager aisément la mise en place de test A/B. L’avantage est bien sûre indéniable en terme de marketing : il est possible d'optimiser l'expérience utilisateur, de mieux cibler nos objectifs et ce, rapidement et avec des contraintes économiques faible : Une sorte de Graal !

   

**Le passage au mobile**

\    Gatsby a été créé il y a moins de 5 ans. Ces créateurs l’ont donc immédiatement pensé mobile. C’est un atout incontestable à l’heure où l'accès au web se fait de plus en plus via un mobile. Le passage d'un iste web statique a une application mobile étant pensé dés l'origine, l'operation est aisée.

##  So What ?

\    

Le recours à Gatsby  ne nous semble pas relever du premier choix  pour le non professionnel qui souhaite déployer un site rapidement. (La courbe d’apprentissage n’a clairement pas la même allure que celle de WP.)

Pourtant les avantages de  ce type de structures de code préfabriqués sont indéniables: la légèreté de sa mise en place peut représenter une réelle solution pour certains projets minimaliste dans leur forme. 

C’est en procédant à une analyse précise des objectifs poursuivis que le recours à Gatsby peut être un choix pertinent : N’oublions pas en effet que ce sont les objectifs qui déterminent la solution technique à privilégier, jamais l’inverse. Il en est ainsi pour toutes créations de site et pour toutes technologies et Gatsby ne fait pas exception : elle n'est pas la solution miracle à tous vos problemes de developpemenbt mais peut être une solution tout à fait recommandable pour certains objkectifs clairement identifiés :  le développement et le déploiement rapide de  projet standardisé avec des contraintes économiques fortes et ne nécessitant pas de base de données.
