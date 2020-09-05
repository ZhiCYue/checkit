(function() {
    // var todoModel = new checkit.TodoModel();
    // todoModel.setContent('climb a mountain');

    // var view = new checkit.TodoView(todoModel);
    // document.body.appendChild(view.build());

    // maria.on(window, 'load', function() {

    //     var todosModel = new checkit.TodosModel();
    
    //     var todoModel = new checkit.TodoModel();
    //     todoModel.setContent('dinner date with Maria');
    //     todosModel.add(todoModel);
    
    //     var todoModel = new checkit.TodoModel();
    //     todoModel.setContent('buy flowers');
    //     todosModel.add(todoModel);
    
    //     var todoModel = new checkit.TodoModel();
    //     todoModel.setContent('take a shower');
    //     todosModel.add(todoModel);
    
    //     var view = new checkit.TodosListView(todosModel);
    //     document.body.appendChild(view.build());
    // });

    // maria.on(window, 'load', function() {

    //     var model = new checkit.TodosModel();
    
    //     var view = new checkit.TodosInputView(model);
    //     document.body.appendChild(view.build());
    
    //     var view = new checkit.TodosListView(model);
    //     document.body.appendChild(view.build());
    // });

    maria.on(window, 'load', function() {

        var model = new checkit.TodosModel();
    
        var view = new checkit.TodosInputView(model);
        document.body.appendChild(view.build());
    
        var view = new checkit.TodosToolbarView(model);
        document.body.appendChild(view.build());
    
        var view = new checkit.TodosListView(model);
        document.body.appendChild(view.build());
    });
}());
