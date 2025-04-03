from django.urls import path
from . import views

urlpatterns = [
    path("tracks/", views.TrackListApiView.as_view()),
    #path("basic/", views.basic),
    path("tracks/<int:pk>/", views.TrackDetailAPIView.as_view()),
    path("tracks/create/", views.TrackCreateAPIView.as_view())
]