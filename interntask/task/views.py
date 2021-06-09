from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here.

def home(request):
	return HttpResponse("Go to /table for the task output")

def table(request):
    context = {}
    return render(request, 'task/table.html', context)
