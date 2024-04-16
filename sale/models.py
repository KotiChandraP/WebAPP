from django.db import models

class Store(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    name = models.Charfield(max_length=100)
    quantity = models.IntegerFiled(default=0)

class Sale(models.Model):
    store = models.ForiegnKey(Store, on_delete=models.CASCADE)
    product = models.ForiegnKey(Product, on_delete=models.CASCADE )
    

