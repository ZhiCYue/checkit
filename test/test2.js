// 打开 index.html 在浏览器控制台执行

// test2
var todoModel = new checkit.TodoModel();
todoModel.setContent('climb a mountain');

var view = new checkit.TodoView(todoModel);
document.body.appendChild(view.build());

todoModel.setContent('climb Everest');
todoModel.setDone(true);
