from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="home"),
    path('table/', views.table, name="table"),
]
