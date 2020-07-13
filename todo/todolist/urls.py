from django.urls import path
from . import views
urlpatterns = [
   path('',views.index,name='index'),
   path('add',views.addNewTodo,name='add'),
   path('complete',views.AllComplete,name='complete'),
   path('delete/<todo_id>',views.DeleteTodo,name='delete'),
]
