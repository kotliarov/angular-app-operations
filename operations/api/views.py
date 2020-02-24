from django.http import HttpResponse, Http404, JsonResponse
from django.db import transaction, IntegrityError
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
#from rest_framework_xml.renderers import XMLRenderer
from rest_framework.renderers import BrowsableAPIRenderer
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.reverse import reverse

from apt.models import *
from apt.serializer import *


class TestCollection(ListAPIView):
    """
    Paginated collection of TestCollection objects
    """
    queryset = Test.objects.all()
    serializer_class = TestSerializer

    def post(self, request):
        serializer = TestSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)


class TestDetail(APIView):
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)
    pass

    def get(self, request, pk, format=None):
        try:
            test = Test.objects.get(pk=pk)
        except Test.DoesNotExist:
            raise Http404
        serializer = TestSerializer(test)
        return Response(serializer.data)


class SampleCollection(ListAPIView):
    """
    Paginated collection of ProcessSubmission objects
    """
    ##queryset = ProcessSubmission.objects.all().order_by("-created_dt")
    ##serializer_class = ProcessSubmissionSerializerHyperlinked
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer

    def post(self, request):
        serializer = SampleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)

class SampleDetail(APIView):
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)

    def get(self, request, pk, format=None):
        try:
            sample = Sample.objects.get(pk=pk)
        except Sample.DoesNotExist:
            raise Http404
        serializer = SampleSerializer(sample)
        return Response(serializer.data)

    def post(self, request):
        serializer = SampleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)


class SampleTypeCollection(ListAPIView):
    """
    Paginated collection of SampleTypeCollection objects
    """
    queryset = SampleType.objects.all()
    serializer_class = SampleTypeSerializer

    def post(self, request):
        serializer = SampleTypeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)


class SampleTypeDetail(APIView):
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)

    def get(self, request, pk, format=None):
        try:
            sample_type = SampleType.objects.get(pk=pk)
        except SampleType.DoesNotExist:
            raise Http404
        serializer = SampleTypeSerializer(sample)
        return Response(serializer.data)



class LabCollection(ListAPIView):
    """
    Paginated collection of LabCollection objects
    """
    queryset = Lab.objects.all()
    serializer_class = LabSerializer

    def post(self, request):
        serializer = LabSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)


class LabDetail(APIView):
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)

    def get(self, request, pk, format=None):
        try:
            lab = Lab.objects.get(pk=pk)
        except Lab.DoesNotExist:
            raise Http404
        serializer = LabSerializer(lab)
        return Response(serializer.data)

