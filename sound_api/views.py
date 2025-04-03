
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, permissions

from soundback.models import Track
from soundback.serializer import TrackSerializer

from .permissions import isStaffEditorPermission



class TrackDetailAPIView(generics.RetrieveAPIView):
    queryset=Track.objects.all()
    serializer_class = TrackSerializer
    #lookup_field

class TrackCreateAPIView(generics.CreateAPIView):
    queryset=Track.objects.all()
    serializer_class = TrackSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save()

class TrackListApiView(generics.ListAPIView):
    queryset=Track.objects.all()
    serializer_class = TrackSerializer
    permission_classes = [permissions.IsAdminUser, isStaffEditorPermission]  