from rest_framework import serializers, status

from .models import *

class SampleTypeSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(required=False)

    class Meta:
        model = SampleType
        fields = ('id', 'name')

class SampleSerializer(serializers.ModelSerializer):
    """
    A sample serializer to return Sample's details.
    """
    type = SampleTypeSerializer(required=True)

    class Meta:
        model = Sample
        fields = ('id', 'name', 'min_temperature', 'max_temperature', 'type')

    def create(self, validated_data):
        type_data = validated_data.pop('type')
        if 'id' not in type_data:
            type = SampleTypeSerializer.create(SampleTypeSerializer(), validated_data=type_data)
            sample, created = Sample.objects.update_or_create(type=type,
                                                              name=validated_data.pop('name'),
                                                              min_temperature=validated_data.pop('min_temperature'),
                                                              max_temperature=validated_data.pop('max_temperature'))
        else:
            sample, created = Sample.objects.update_or_create(type=SampleType(id=type_data['id']),
                                                              name=validated_data.pop('name'),
                                                              min_temperature=validated_data.pop('min_temperature'),
                                                              max_temperature=validated_data.pop('max_temperature'))

        return sample


class LabSerializer(serializers.ModelSerializer):
    """
    A sample serializer to return Sample's details.
    """

    class Meta:
        model = Lab
        fields = ('id', 'name', 'street', 'city', 'state', 'zip', 'email', 'phone', 'contact')

    def create(self, validated_data):
        lab, created = Lab.objects.update_or_create(name=validated_data.pop('name'),
                                                        street=validated_data.pop('street'),
                                                        city=validated_data.pop('city'),
                                                        state=validated_data.pop('state'),
                                                        zip=validated_data.pop('zip'),
                                                        email=validated_data.pop('email'),
                                                        phone=validated_data.pop('phone'),
                                                        contact=validated_data.pop('contact'),
                                                       )
        return lab

class TestSerializer(serializers.ModelSerializer):
    sample = SampleSerializer(required=True)
    lab = LabSerializer(required=True)

    class Meta:
        model = Test
        fields = '__all__'

    def create(self, validated_data):
        sample_data = validated_data.pop('sample')
        lab_data = validated_data.pop('lab')
        test, created = Test.objects.update_or_create(name=validated_data.pop("name"),
                                                      num_samples=validated_data.pop("num_samples"),
                                                      sample=Sample(id=sample_data["id"]),
                                                      lab=Lab(id=lab_data["id"]))
        return test