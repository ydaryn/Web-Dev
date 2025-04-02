from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class company_list(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class company_detail(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class vacancy_list(ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class vacancy_detail(RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class  vacancies_by_company(ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(company_id=self.kwargs['id'])

class TopTenVacancies(ListAPIView):
    def get_queryset(self):
        vacancies = Vacancy.objects.all()
        vacancies = vacancies.order_by('-salary')
        return vacancies[:10]

    serializer_class = VacancySerializer

