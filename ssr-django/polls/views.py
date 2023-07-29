from django.http import HttpResponse
from django.shortcuts import render
from .models import WebDevelopmentTopic


def index(request):
    topics = WebDevelopmentTopic.objects.all()
    context = {
        'topics': topics
    }
    return render(request, 'index.html', context=context)