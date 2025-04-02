from django.urls import path
from .views import (
    company_list, company_detail, vacancies_by_company, 
    vacancy_list, vacancy_detail, TopTenVacancies
)

urlpatterns = [
    path('companies/', company_list.as_view()),
    path('companies/<int:id>/', company_detail.as_view()),
    path('companies/<int:id>/vacancies/', vacancies_by_company.as_view()),
    path('vacancies/', vacancy_list.as_view()),
    path('vacancies/<int:id>/', vacancy_detail.as_view()),
    path('vacancies/top_ten/', TopTenVacancies.as_view()),
]
