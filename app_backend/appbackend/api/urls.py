from django.urls import path
from api import views
urlpatterns = [
    path('', views.employeesList.as_view()),
    path('<int:pk>/', views.employeesDetail.as_view()),
]
