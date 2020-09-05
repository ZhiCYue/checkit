(function() {
    var todoModel = new checkit.TodoModel();
    todoModel.setContent('climb a mountain');

    var view = new checkit.TodoView(todoModel);
    document.body.appendChild(view.build());
}());
