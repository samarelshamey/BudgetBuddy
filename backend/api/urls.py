from django.urls import path
from .views import signup_view, CustomTokenObtainPairView
from api.views import get_transactions, create_transaction
from api.views import user_transactions_view

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('user-transactions/', user_transactions_view, name='user-transactions'),
    path('user-transactions/', get_transactions, name='get-transactions'),
    path('add-transaction/', create_transaction, name='create-transaction'),
]