from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from api import views

urlpatterns = [
    # /api/
    #url(r'^$', views.api_root),
    url(r'^tests/$', views.TestCollection.as_view(), name="test-list"),
    url(r'^test/(?P<pk>\d+?)/$', views.TestDetail.as_view(), name="test-detail"),

    url(r'^samples/$', views.SampleCollection.as_view(), name="sample-list"),
    url(r'^sample/(?P<pk>\d+?)/$', views.SampleDetail.as_view(), name="sample-detail"),

    url(r'^sample_types/$', views.SampleTypeCollection.as_view(), name="sample-type-list"),
    url(r'^sample_type/(?P<pk>\d+?)/$', views.SampleTypeDetail.as_view(), name="sample-type-detail"),

    url(r'^labs/$', views.LabCollection.as_view(), name="lab-list"),
    url(r'^lab/(?P<pk>\d+?)/$', views.LabDetail.as_view(), name="lab-detail"),

]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'xml', 'api'])