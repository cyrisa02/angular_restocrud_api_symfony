## Installation

vidéo : https://www.youtube.com/watch?v=W9H76JvCmhI

https://apiresto.cyrisa02.fr/api/restaurants/
18min utilisation de postman

---

Pour créer -> méthode POST
Body / raw / Text Json

{
"name": "Postman",
"owner": "John Doe Postman",
"mobile": "5689741",
"email": "john@gmail.com",
"location": "Postamn"
}

## création: 201 attention pour user et le password hasher 20min

## 20/34

Scenario Postman 28min
1/ Créer une collection / New / Name: Resto API

2/ Créer un environnement (en haut à droite menu drop) juste à coté cliquer sur l'oeil puis Add donner un nom
Test API Resto
créer
url https://apiresto.cyrisa02.fr/api/restaurants avec le slash

Save + sélectionner dans le menu drop test API resto

---

Créer une request
aller sur la collection / clique droit / Add request

mettre un titre
should create a restaurant / POST
pour chercher la variable url-> mettre {{
utiliser des générateurs {{$randomEmail}}
number:" {{$randomInt}}"
name: "{{$randomLoremWord}}"
description: "{{$randomLoremText}}"

ensuite aller dans Tests et entrer du code (32min30), attention si on est loggé
pm.environment.set("lastResto", pm.response.json()['id']); créer un resto en tant que variable d'environnement(faire une vérif dans variable d'environnement)

pm.test("Status test", function () {
pm.response.to.have.status(201)
});
+SAVE
puis SEND, puis aller dans Test Results à côté de body.

---

type de senario: créer un user avec le même email (retour erreur 500) / générer un token avec login_check (35min20)

---

should edit a restaurant / PUT
attention l'URL est la suivante avec les varaibles d'environnement
{{url}}api/restaurants/{{lastResto}} attention pas de / entre {{url} et api!!!! j'ai eu une erreur

mettre des valeurs en dur dans le body/raw/json
{
"name": "Modification"
}

sur name

pm.test("Status test", function () {
pm.response.to.have.status(200);
});

pm.test("Update Name", function() {
pm.expect(pm.response.json()['name']).to.eql("Modification");
});

---

should remove restaurant
{{url}}api/restaurants/{{lastResto}}

pm.test("Status test", function () {
pm.response.to.have.status(204);
});

## REFAIRE le test pour si il y a bien une erreur.

Pour enregistrer sur GIT
créer à la racine un dossier postman
aller sur la collection, cliquer droit, descendre -> export et mettre dans le repertoire postman du projet

puis aller dans les variables d'environnement (45min10), les trois petits points horizontaux
puis git commit -m "Add tests with postman"

---

Jouer des collections avec newman après avoir installé en global

dans le terminal et le bon repertoire
newman run ./postman/postman_collection.json -e ./postman/postman_environment.json (pour mapper les variables)
