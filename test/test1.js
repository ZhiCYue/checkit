// 打开 index.html 在浏览器控制台执行

// test1
var todoModel = new checkit.TodoModel();
todoModel.getContent();
todoModel.isDone();

var view = {update: function(evt) {console.log('The model changed!');}};
maria.on(todoModel, 'change', view, 'update');

todoModel.setDone(true);

maria.off(todoModel, 'change', view, 'update');
todoModel.setDone(false);
