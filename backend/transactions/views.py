# from django.http import JsonResponse
# from .models import Transaction
# import json
# import logging
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.response import Response
# from django.utils.timezone import now
# from api.serializers import TransactionSerializer
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated

# logger = logging.getLogger(__name__)



        
#     #     user = request.user
#     #     if user.is_authenticated:
#     #         data = json.loads(request.body)
#     #         transaction = Transaction.objects.create(
#     #             user=user,
#     #             text=data['text'],
#     #             amount=data['amount'],
#     #             created_at=now(),
#     #         )
#     #         return JsonResponse({
#     #             'id': transaction.id,
#     #             'text': transaction.text,
#     #             'amount': str(transaction.amount),
#     #             'created_at': transaction.created_at.isoformat(),
#     #         }, status=status.HTTP_201_CREATED)
#     #     return JsonResponse({'error': 'Unauthorized'}, status=401)

#     # return JsonResponse({'error': 'Method not allowed'}, status=405)