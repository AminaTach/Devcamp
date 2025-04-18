from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# backend/mon_app/views.py

from django.http import JsonResponse
from .models import Produit

def liste_produits(request):
    produits = Produit.objects.all().values()
    return JsonResponse(list(produits), safe=False)



from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Produit

def detail_produit(request, id_produit):
    produit = get_object_or_404(Produit, id_produit=id_produit)
    return JsonResponse(produit.to_dict())

# backend/mon_app/views.py


@csrf_exempt
def ajouter_produit(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        produit = Produit(
            name=data.get('name'),
            format=data.get('format'),
            ingredients=data.get('ingredients'),
            stock_actuel=data.get('stock_actuel'),
            exp_date=data.get('exp_date'),
            status=data.get('status'),
            price=data.get('price'),
            categorie=data.get('categorie')
        )
        produit.save()
        return JsonResponse({'message': 'Produit ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

# backend/mon_app/views.py

@csrf_exempt
def mettre_a_jour_produit(request, id_produit):
    if request.method == 'PUT':
        data = json.loads(request.body)
        produit = get_object_or_404(Produit, id_produit=id_produit)
        produit.name = data.get('name', produit.name)
        produit.format = data.get('format', produit.format)
        produit.ingredients = data.get('ingredients', produit.ingredients)
        produit.stock_actuel = data.get('stock_actuel', produit.stock_actuel)
        produit.exp_date = data.get('exp_date', produit.exp_date)
        produit.status = data.get('status', produit.status)
        produit.price = data.get('price', produit.price)
        produit.categorie = data.get('categorie', produit.categorie)
        produit.save()
        return JsonResponse({'message': 'Produit mis à jour avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

# backend/mon_app/views.py

@csrf_exempt
def supprimer_produit(request, id_produit):
    if request.method == 'DELETE':
        produit = get_object_or_404(Produit, id_produit=id_produit)
        produit.delete()
        return JsonResponse({'message': 'Produit supprimé avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)



""""///////STOCK////////"""

from .models import Stock

def liste_stocks(request):
    stocks = Stock.objects.all().values()
    return JsonResponse(list(stocks), safe=False)


def detail_stock(request, id):
    stock = get_object_or_404(Stock, id=id)
    return JsonResponse(stock.to_dict())

# backend/mon_app/views.py

@csrf_exempt
def ajouter_stock(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        stock = Stock(
            id_produit_id=data.get('id_produit'),
            date=data.get('date'),
            quantity=data.get('quantity'),
            type=data.get('type'),
            responsable=data.get('responsable'),
            comment=data.get('comment')
        )
        stock.save()
        return JsonResponse({'message': 'Stock ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


# backend/mon_app/views.py

@csrf_exempt
def mettre_a_jour_stock(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        stock = get_object_or_404(Stock, id=id)
        stock.id_produit_id = data.get('id_produit', stock.id_produit_id)
        stock.date = data.get('date', stock.date)
        stock.quantity = data.get('quantity', stock.quantity)
        stock.type = data.get('type', stock.type)
        stock.responsable = data.get('responsable', stock.responsable)
        stock.comment = data.get('comment', stock.comment)
        stock.save()
        return JsonResponse({'message': 'Stock mis à jour avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


""""///////USER////////"""

from .models import User

def liste_utilisateurs(request):
    utilisateurs = User.objects.all().values()
    return JsonResponse(list(utilisateurs), safe=False)


def detail_utilisateur(request, id):
    utilisateur = get_object_or_404(User, id=id)
    return JsonResponse(utilisateur.to_dict())



@csrf_exempt
def ajouter_utilisateur(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        utilisateur = User(
            name=data.get('name'),
            email=data.get('email'),
            mot_de_passe=data.get('mot_de_passe'),
            phone=data.get('phone')
        )
        utilisateur.save()
        return JsonResponse({'message': 'Utilisateur ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def mettre_a_jour_utilisateur(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        utilisateur = get_object_or_404(User, id=id)
        utilisateur.name = data.get('name', utilisateur.name)
        utilisateur.email = data.get('email', utilisateur.email)
        utilisateur.mot_de_passe = data.get('mot_de_passe', utilisateur.mot_de_passe)
        utilisateur.phone = data.get('phone', utilisateur.phone)
        utilisateur.save()
        return JsonResponse({'message': 'Utilisateur mis à jour avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def supprimer_utilisateur(request, id):
    if request.method == 'DELETE':
        utilisateur = get_object_or_404(User, id=id)
        utilisateur.delete()
        return JsonResponse({'message': 'Utilisateur supprimé avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
  
  
""""///////PACK////////"""


from .models import Pack

def liste_packs(request):
    packs = Pack.objects.all().values()
    return JsonResponse(list(packs), safe=False)


def detail_pack(request, id):
    pack = get_object_or_404(Pack, id=id)
    return JsonResponse(pack.to_dict())


@csrf_exempt
def ajouter_pack(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        pack = Pack(
            type=data.get('type'),
            nom=data.get('nom')
        )
        pack.save()
        return JsonResponse({'message': 'Pack ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

# backend/mon_app/views.py

@csrf_exempt
def mettre_a_jour_pack(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        pack = get_object_or_404(Pack, id=id)
        pack.type = data.get('type', pack.type)
        pack.nom = data.get('nom', pack.nom)
        pack.save()
        return JsonResponse({'message': 'Pack mis à jour avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def supprimer_pack(request, id):
    if request.method == 'DELETE':
        pack = get_object_or_404(Pack, id=id)
        pack.delete()
        return JsonResponse({'message': 'Pack supprimé avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

# backend/mon_app/views.py

from .models import ContenuPack

def liste_contenus_pack(request):
    contenus = ContenuPack.objects.all().values()
    return JsonResponse(list(contenus), safe=False)

# backend/mon_app/views.py

def detail_contenu_pack(request, id):
    contenu = get_object_or_404(ContenuPack, id=id)
    return JsonResponse(contenu.to_dict())

# backend/mon_app/views.py

@csrf_exempt
def ajouter_contenu_pack(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        contenu = ContenuPack(
            id_pack_id=data.get('id_pack'),
            id_produit_id=data.get('id_produit')
        )
        contenu.save()
        return JsonResponse({'message': 'Contenu de pack ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


# backend/mon_app/views.py

@csrf_exempt
def ajouter_contenu_pack(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        contenu = ContenuPack(
            id_pack_id=data.get('id_pack'),
            id_produit_id=data.get('id_produit')
        )
        contenu.save()
        return JsonResponse({'message': 'Contenu de pack ajouté avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def mettre_a_jour_contenu_pack(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        contenu = get_object_or_404(ContenuPack, id=id)
        contenu.id_pack_id = data.get('id_pack', contenu.id_pack_id)
        contenu.id_produit_id = data.get('id_produit', contenu.id_produit_id)
        contenu.save()
        return JsonResponse({'message': 'Contenu de pack mis à jour avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def supprimer_contenu_pack(request, id):
    if request.method == 'DELETE':
        contenu = get_object_or_404(ContenuPack, id=id)
        contenu.delete()
        return JsonResponse({'message': 'Contenu de pack supprimé avec succès'})

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

""""///////PREDICTION////////"""

from django.http import JsonResponse
from .models import Prediction

def predictions_par_produit(request, id_produit):
    predictions = Prediction.objects.filter(id_produit_id=id_produit).values()
    return JsonResponse(list(predictions), safe=False)



def predictions_par_produit_et_date(request, id_produit, debut_week):
    predictions = Prediction.objects.filter(id_produit_id=id_produit, debut_week=debut_week).values()
    return JsonResponse(list(predictions), safe=False)

