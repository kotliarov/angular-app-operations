from django.shortcuts import render

def index(request, path=''):
    """
    The home page. Renders the container for the sngle-page application
    :param request:
    :param path:
    :return:
    """
    return render(request, 'index.html')


