from django.shortcuts import render

# Create your views here.


def base(request):
    return render(request, 'base.html', {})


def home(request):
    return render(request, 'home.html', {})


def resources(request):
    return render(request, 'resources.html', {})


def checkin(request):
    return render(request, 'checkin.html', {})


def todo(request):
    return render(request, 'todo.html', {})