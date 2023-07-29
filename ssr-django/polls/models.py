from django.db import models


class WebDevelopmentTopic(models.Model):
    name = models.CharField(max_length=500)

