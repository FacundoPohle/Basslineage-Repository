"""
to render html webpages
"""
from django.http import HttpResponse

def home(request):
    """"
    take in arequest (django sends the request)
    Return html as a response
    """
    return response