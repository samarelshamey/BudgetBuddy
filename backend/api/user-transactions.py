# # views.py
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from .models import Transaction
# from .serializers import TransactionSerializer

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def user_transactions_view(request):
#     transactions = Transaction.objects.filter(user=request.user)
#     serializer = TransactionSerializer(transactions, many=True)
#     return Response(serializer.data)