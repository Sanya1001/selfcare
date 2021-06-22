from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.home, name='events'),
    path('resources/', views.resources, name='resources'),
    path('checkin/', views.checkin, name='checkin'),
    path('todo/', views.todo, name='todo')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
