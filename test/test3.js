// 打开 index.html 在浏览器控制台执行

// test3
var todosModel = new checkit.TodosModel();
var view = {
    update: function(evt) {
        console.log(evt.addedTargets.map(function(todo) {return todo.getContent();}));
    }
};
maria.on(todosModel, 'change', view, 'update');

var todoModel = new checkit.TodoModel();
todoModel.setContent('dinner date with Maria');
todosModel.add(todoModel);

var flowers = new checkit.TodoModel();
flowers.setContent('buy flowers');

var shower = new checkit.TodoModel();
shower.setContent('take a shower');

todosModel.add(flowers, shower);

view.update = function(evt) {
    console.log(evt.target.constructor === checkit.TodoModel, evt.currentTarget.constructor === checkit.TodosModel);
};
flowers.setDone(true);

todosModel.deleteDone();
todosModel.size;
