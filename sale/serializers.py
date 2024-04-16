from rest_framework import serializzers
from .models import Store, Product, Sale

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '_all_'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '_all_'

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '_all_'
        