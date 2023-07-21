# APIs, REST & Vous

## Sommaire

- [APIs, REST \& Vous](#apis-rest--vous)
  - [Sommaire](#sommaire)
  - [REST ?](#rest-)
    - [· Orienté ressources](#-orienté-ressources)
    - [· Axé méthodes](#-axé-méthodes)
    - [· Stateless](#-stateless)
    - [· Flexibilité et Uniformisation](#-flexibilité-et-uniformisation)
    - [· URIs](#-uris)
    - [· CRUD](#-crud)

## REST ?

REST, (*REpresentationnal State Transfer*) est aujourd'hui un standard d'architecture des services web. Il se compose, à la base, des points-clés suivants :

### · Orienté ressources

Toute "entité" est représentée sous REST par une URI (*Uniform Resource Identifier*) - cela peut être une représentation de données, un objet, un service ou autre.

Une "ressource" est le fruit d'une requête. Un jeu de données représentés sous un format commun, comme le *JSON*, le *XML* ou autre.

### · Axé méthodes

REST se base sur l'interaction avec un service via les méthodes HTTP standards. On aura à con coeur :

- **GET** : *Récupération de données d'une ressource*
- **POST** : *Création d'une nouvelle ressource*
- **PUT/PATCH** : *Modification d'une ressource existante*
- **DELETE** : *Suppression d'une ressource existante*

Grâce à cette notion, nous pouvons imaginer une API REST avec quatres routes basiques, telles que :

- GET · `[host]/api/get/<ID>` => `JSON<User>`
  - `<ID> -> int`
- POST · `[host]/api/register` => `id` de la ressource créée
  - `Name, Email, Password` dans le form-data
- PUT/PATCH · `[host]/api/edit/<ID>` => `JSON<User>`
  - `<ID> -> int`
  - `Name, Email, Password` dans le form-data
- DELETE · `[host]/api/delete/<ID>` => `Status/Bool`
  - `<ID> -> int`

### · Stateless

Au coeur du concept REST, il n'y a pas d'état - chaque requête est indépendante. Ce qui permet une meilleure évolutivité et flexibilité. Si une requête pour la ressource `A` vient à échouer, les requêtes pour la ressource `B` continueront à s'exécuter.

Bien sûr - cet exemple est largement simplifié et n'est vrai que si les deux ressources ne sont pas en relation.

### · Flexibilité et Uniformisation

La manière de designer un service REST se plus ou moins de la même manière au fil des divers projets disponibles en ligne. On garde le concept de ressources, de méthodes HTTP standards, codes de retour, absence d'état et format de retour commun.

Grâce à ça - designer un service ou bien une application consommatrice d'un service REST est beaucoup plus rapide et pratique : *En grande partie, on sait à quoi s'attendre*.

### · URIs

URI - ou "*Uniform Resource Identifier*" représente le chemin, après la partie hôte de l'URL - ou "*Uniform Resource Locator*".

Une URI est simplement la partie `[ressource]` de l'adresse ci-dessous :

> `https://mon.service.com/[ressource]`

### · CRUD

CRUD se définit par les mots *Create, Read, Update, Delete*. Ces quatres mots définissent les quatres méthodes HTTP de base nécéssaires pour gérer complètement un système de ressources.

Un exemple de service de gestion d'utilisateurs se trouve sous la section : [· Axé méthodes](#-axé-méthodes)
