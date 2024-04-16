from django.shortcuts import render
from rest_framework import generics
from .models import Sale, Product
from .serializzers import SaleSerializer
from rest_framework.filters import OrderingFilter
from rest_framework import mixins
from rest_framework.viewsets importGenericViewSet
from rest_framework.response import Response


class SaleListView(generics.ListAPIView):
    serializer_class = SaleSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ['date'] # Allow ordering by the datefield

    def get_queryset(self):
        store_id = self.Kwargs['store_id'] # Assuming that you pass store_id as a URL parameter
        queryset = Sale.objects.filter(store_id=store_id)
        return queryset

        
class SaleViewSet(mixinsListModelMixin, mixins.CreateModelMixin, GenericViewSet):
    queryset = Sale.objects.all()
    serializer_class = Sale SaleSerializer

    def destroy(self, request, *args, **Kwargs):
        return Response({"message": "Sales cannot be deleted"},
        status = status.HTTP_405_METHOD_NOT_ALLOWED)

class SaleCreateView(generics.CreateAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

    def create(self, request, *args, **kwargs):
        # Retrieve product_id and quantity from request data
        product_id = request.data.get('product')
        quantity = request.data.get('quantity', 1)  # Default quantity to 1 if not provided

        # Decrease the quantity of the product sold
        product = Product.objects.get(pk=product_id)
        product.quantity -= quantity
        product.save()

        # Call the parent create method to create the sale
        return super().create(request, *args, **kwargs)
        
        




