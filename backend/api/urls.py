from django.urls import path
from .views import SignupView, LoginView, user_transactions_view
from transactions.views import transaction_view

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('transactions/', transaction_view, name='transaction_view'),
    path('user-transactions/', user_transactions_view, name='user_transactions_view'),
]