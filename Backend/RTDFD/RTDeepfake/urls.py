from django.urls import path
from . import views

urlpatterns = [
    path('deepfake/', views.deepfake_detect),
]