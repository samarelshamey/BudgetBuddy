from django.urls import path
from api.views import CustomTokenObtainPairView
from api.views import signup_view
from .views import transaction_view
from django.contrib import admin

urlpatterns = [
    path('transactions/', transaction_view, name='transaction_view'),
]