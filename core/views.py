from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import Userserializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime

# Create your views here.


class RegisterView(GenericAPIView):
    serializer_class = Userserializer
    def post(self, request):
        serializer = Userserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    def post(self, request):
        data = request.data
        username = data['username']
        password = data['password']
        
        user= User.objects.filter(username=username).first()
        
        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')

        payload={
            'username':user.username,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        print(token)
        #myhead= {
        #    "Access-Control-Allow-Origin" : "http://localhost:3000/",
        #    'Vary' : 'Origin',
        #    #"Access-Control-Allow-Credentials" : True
        #}
        response=Response()
        #response['Access-Control-Allow-Origin'] = 
        #response['Access-Control-Allow-Credentials'] = True
        response.set_cookie(key='jwt', value=token, httponly=True)
        return response


class Userview(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    def get(self, request):
        token=request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Please Login')

        try:
            payload=jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Session expired')
        
        user = User.objects.filter(username=payload['username'])
        print(user)

        serializer=Userserializer(user, many=True)
        return(Response(serializer.data))
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Logoutview(GenericAPIView):
    serializer_class = Userserializer
    def post(self, request):
        response=Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }

        return response