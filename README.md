GLOBALIS
Test Technique

Question 1 Explication de la fonction foo.

La fonction fusionne les intervalles lorsqu'ils ont des parties communes ou se contiennent.

Par exemple, si on lui donne l'entrée ([[0, 5], [2, 4]]), elle va fusionner les deux intervalles en un seul [[0, 5]] car ils se contiennent.

Dans l'intervalle [0, 5], il y a des nombres allant de 0 à 5, et dans [2, 4], il y a également des nombres allant de 2 à 4. Dans ces 2 intervalles, il y a des nombres en commun qui sont 2, 3 et 4.

Si les intervalles peuvent être fusionnés, on va prendre la plus grande et la plus petite valeur entre les 2 pour en donner un seul.

Comme on peut le constater sur l'exemple précédent qui va prendre 0 qui est la plus petite et 5 qui est la plus grande pour en former un seul [[0, 5]].

De même, si on lui fournit [[7, 8], [3, 6], [2, 4]], elle va fusionner pour donner [2, 6] et [7, 8]. Voici comment cela se déroule :

[7, 8] est le premier intervalle et est ajouté à la liste fusionnée car il ne peut pas être fusionné avec [3, 6] car il n'y a aucun nombre en commun.

[2, 4] est le troisième intervalle qui peut fusionner avec [3, 6] car il y a 2, 3 et 4 en nombre commun. Ensuite, on va prendre la plus grande valeur et la plus petite des deux intervalles, ce qui va donner [2, 6].

Aucun autre intervalle ne se contient dans [2, 6], donc [2, 6] est ajouté à la liste fusionnée.

Enfin, [7, 8] est ajouté à la liste fusionnée car il ne se contient dans aucun autre intervalle fusionné.

Ainsi, le résultat de la fusion est [2, 6] et [7, 8].

Question 3 :

j'ai implementez cette fonction en 1j.
