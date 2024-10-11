from django.urls import path
from api.views import CustomTokenObtainPairView
from api.views import get_transactions, create_transaction
from django.contrib import admin

urlpatterns = [
    path('user-transactions/', get_transactions, name='get-transactions'),
    path('add-transaction/', create_transaction, name='create-transaction'),
]