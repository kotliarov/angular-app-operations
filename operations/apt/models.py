from django.db import models

class Lab(models.Model):
    """
    Lab model
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128)
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=64)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=32)
    phone = models.CharField(max_length=32)
    email = models.CharField(max_length=128)
    contact = models.CharField(max_length=128)

    class Meta:
        db_table = "labs"


class SampleType(models.Model):
    """
    Sample model.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)

    class Meta:
        db_table = "sample_types"


class Sample(models.Model):
    """
    Sample model.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    min_temperature = models.IntegerField()
    max_temperature = models.IntegerField()
    type = models.ForeignKey(SampleType, on_delete=models.SET_NULL, null=True, unique=False)

    class Meta:
        db_table = "samples"


class Test(models.Model):
    """
    Test model.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    num_samples = models.IntegerField()
    sample = models.ForeignKey(Sample, on_delete=models.SET_NULL, null=True, unique=False)
    lab = models.ForeignKey(Lab, on_delete=models.SET_NULL, null=True, unique=False)
    ship_date = models.DateTimeField()
    test_date = models.DateTimeField()
    review_date = models.DateTimeField()

    class Meta:
        db_table = "tests"
