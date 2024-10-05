from django.urls import path
from .views import SignupView, CustomTokenObtainPairView
from api.views import transaction_view
from api.views import user_transactions_view

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('user-transactions/', user_transactions_view, name='user-transactions'),
    path('transactions/', transaction_view, name='transaction_view'),
]