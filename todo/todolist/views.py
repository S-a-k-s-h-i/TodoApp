from django.shortcuts import render,redirect
from django.views.decorators.http import require_POST
from .forms import TodoForm
from .models import Todo
# Create your views here.
def index(request):
    myTodo=Todo.objects.order_by('id')
    form=TodoForm()
    context={'myTodo':myTodo,'form':form}
    return render(request,'todo/index.html',context)
@require_POST
def addNewTodo(request):
    form=TodoForm(request.POST)
    if form.is_valid():
        new_todo=Todo(todoText=request.POST['text'])
        new_todo.save()
        return redirect('index')
def AllComplete(request):
    Todo.objects.all().delete()
    return redirect('index')
def DeleteTodo(request,todo_id):
    deleteMe=Todo.objects.get(pk=todo_id)
    deleteMe.delete()
    return redirect('index')

