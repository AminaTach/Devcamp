from django.db import models

from django.db import models

class Produit(models.Model):
    id_produit = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    format = models.CharField(max_length=255)
    ingredients = models.TextField()
    stock_actuel = models.CharField(max_length=255)
    exp_date = models.DateField()
    status = models.CharField(max_length=255)
    price = models.FloatField()
    categorie = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Stock(models.Model):
    id = models.AutoField(primary_key=True)
    id_produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    date = models.DateField()
    quantity = models.IntegerField()
    type = models.CharField(max_length=255)
    responsable = models.CharField(max_length=255)
    comment = models.CharField(max_length=255)

    def __str__(self):
        return f"Stock de {self.id_produit.name} le {self.date}"

class Prediction(models.Model):
    id = models.AutoField(primary_key=True)
    id_produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    debut_week = models.DateField()
    prediction = models.FloatField()

    def __str__(self):
        return f"Prédiction pour {self.id_produit.name} à partir du {self.debut_week}"

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Pack(models.Model):
    TYPE_CHOICES = [
        ('manuel', 'Manuel'),
        ('automatique', 'Automatique'),
    ]
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    nom = models.CharField(max_length=255)

    def __str__(self):
        return self.nom

class ContenuPack(models.Model):
    id_pack = models.ForeignKey(Pack, on_delete=models.CASCADE)
    id_produit = models.ForeignKey(Produit, on_delete=models.CASCADE)

    def __str__(self):
        return f"Contenu du pack {self.id_pack.nom}"

