from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from users.models import User

# Create your views here.

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            if not data.get('name') or not data.get('email') or not data.get('password'):
                return JsonResponse(
                    {'message': 'Name, Email and Password are required.'}
                )
            
            newUser = User.objects.create(
                name = data['name'],
                email = data['email'],
                password = data['password'],
            )

            return JsonResponse(
                {'user': newUser},
                status=201
            )

        except Exception as e:
            return JsonResponse(
                {'message': str(e)},
                status=400,
            )

@csrf_exempt
def get_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            if not data.get('email') or not data.get('password'):
                return JsonResponse(
                    {'message': 'Email and Password are required.'},
                    status=400
                )
            
            try:
                user = User.objects.get(email = data['email'], password = data['password'])
                return JsonResponse({
                    'message': 'Login Successful',
                    'user': {
                        'id': user.id,
                        'name': user.name,
                        'email': user.email
                    }
                })

            except User.DoesNotExist:
                return JsonResponse({'message': 'Invalid credentials'}, status=401)

        except Exception as e:
            return JsonResponse(
                {'message': str(e)},
                status=400
            )