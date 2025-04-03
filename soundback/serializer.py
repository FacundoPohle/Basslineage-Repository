from rest_framework import serializers

from soundback.models import Track


class TrackSerializer(serializers.ModelSerializer):
    generes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Track
        fields = [
            "url", 
            "name",
            "generes",
            "remix",
            "show",
            
        ]

    def get_generes(self,obj):
        try:
            generes = []
            for i in obj.generes.all():
                generes.append(i.genere)
            return generes
        except: 
            pass