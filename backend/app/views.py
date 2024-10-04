from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Transaction
import json
import logging
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from django.utils.timezone import now


logger = logging.getLogger(__name__)

@csrf_exempt
def transaction_view(request):
    if request.method == 'POST':
        user = request.user
        if user.is_authenticated:
            data = json.loads(request.body)
            transaction = Transaction.objects.create(
                user=user,
                text=data['text'],
                amount=data['amount'],
                created_at=now(),
            )
            return JsonResponse({
                'id': transaction.id,
                'text': transaction.text,
                'amount': str(transaction.amount),
                'created_at': transaction.created_at.isoformat(),
            }, status=status.HTTP_201_CREATED)
        return JsonResponse({'error': 'Unauthorized'}, status=401)

    return JsonResponse({'error': 'Method not allowed'}, status=405)