# backend/mon_app/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/produits/', views.liste_produits, name='liste_produits'),
    path('api/produit/<int:id_produit>/', views.detail_produit, name='detail_produit'),
    path('api/ajouter_produit/', views.ajouter_produit, name='ajouter_produit'),
    path('api/mettre_a_jour_produit/<int:id_produit>/', views.mettre_a_jour_produit, name='mettre_a_jour_produit'),
    path('api/supprimer_produit/<int:id_produit>/', views.supprimer_produit, name='supprimer_produit'),

    path('api/stocks/', views.liste_stocks, name='liste_stocks'),
    path('api/stock/<int:id>/', views.detail_stock, name='detail_stock'),
    path('api/ajouter_stock/', views.ajouter_stock, name='ajouter_stock'),
    path('api/mettre_a_jour_stock/<int:id>/', views.mettre_a_jour_stock, name='mettre_a_jour_stock'),

   
    path('api/utilisateurs/', views.liste_utilisateurs, name='liste_utilisateurs'),
    path('api/utilisateur/<int:id>/', views.detail_utilisateur, name='detail_utilisateur'),
    path('api/ajouter_utilisateur/', views.ajouter_utilisateur, name='ajouter_utilisateur'),
    path('api/mettre_a_jour_utilisateur/<int:id>/', views.mettre_a_jour_utilisateur, name='mettre_a_jour_utilisateur'),
    path('api/supprimer_utilisateur/<int:id>/', views.supprimer_utilisateur, name='supprimer_utilisateur'),

    path('api/packs/', views.liste_packs, name='liste_packs'),
    path('api/pack/<int:id>/', views.detail_pack, name='detail_pack'),
    path('api/ajouter_pack/', views.ajouter_pack, name='ajouter_pack'),
    path('api/mettre_a_jour_pack/<int:id>/', views.mettre_a_jour_pack, name='mettre_a_jour_pack'),
    path('api/supprimer_pack/<int:id>/', views.supprimer_pack, name='supprimer_pack'),

    path('api/contenus_pack/', views.liste_contenus_pack, name='liste_contenus_pack'),
    path('api/contenu_pack/<int:id>/', views.detail_contenu_pack, name='detail_contenu_pack'),
    path('api/ajouter_contenu_pack/', views.ajouter_contenu_pack, name='ajouter_contenu_pack'),
    path('api/mettre_a_jour_contenu_pack/<int:id>/', views.mettre_a_jour_contenu_pack, name='mettre_a_jour_contenu_pack'),
    path('api/supprimer_contenu_pack/<int:id>/', views.supprimer_contenu_pack, name='supprimer_contenu_pack'),
    
    
    path('api/predictions_par_produit/<int:id_produit>/', views.predictions_par_produit, name='predictions_par_produit'),
    path('api/predictions_par_produit_et_date/<int:id_produit>/<str:debut_week>/', views.predictions_par_produit_et_date, name='predictions_par_produit_et_date'),
]

