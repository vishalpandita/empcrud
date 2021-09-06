from rest_framework import generics
from .models import employees
from .serializers import employeesSerializer
class employeesList(generics.ListCreateAPIView):
    queryset = employees.objects.all()
    serializer_class = employeesSerializer
class employeesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = employees.objects.all()
    serializer_class = employeesSerializer
