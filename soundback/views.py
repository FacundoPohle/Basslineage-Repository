from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm

from soundback.models import Track, Genere
# Create your views here.



def login_view(request):
    
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user=form.get_user()
            login(request, user)
        #username = request.POST.get("username")
        #password = request.POST.get("password")
        #user = authenticate(request, username=username, password=password )
        #if user == None:
        #    context = {"error": "invalid username or password"}
        #    return render(request,"login.html", context=context)
        #login(request, user)
            return redirect("/admin")
    else:
        form = AuthenticationForm(request)
    context ={
        "form" : form
    }
    return render(request,"login.html", context)