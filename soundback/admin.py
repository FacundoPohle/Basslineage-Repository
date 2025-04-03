from django.contrib import admin

# Register your models here.
from .models import Track,Genere

class TrackAdmin(admin.ModelAdmin):
    search_fields = ['name']  
    list_display = ["name"]
    list_filter = ["generes", "show","name", "remix"]
class GenereAdmin(admin.ModelAdmin):
    search_fields = ['genere']  
    list_display = ["genere"]
    list_filter = ["genere"]
    
    

admin.site.register(Track, TrackAdmin)
admin.site.register(Genere,GenereAdmin)
