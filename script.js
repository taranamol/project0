
$(function() {

  //adding the id of new_to_do to a variable of new item
  var $newFormPost = $("#newFormPost"); 
  
  // this is a function
  var postTemplate = _.template($('#postTemplate').html());

  //element to hold list of todos
  var $listPosts = $("#listOfPosts");

  //constructor function 
  function blogPost (title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
  };

  //variable to hold all of the instances
  blogPost.all = [];

  blogPost.prototype.save = function(){
    blogPost.all.push(this);
    console.log(this);
  };

 
  blogPost.prototype.render = function() {
    // _.each(ToDo.all, function (task, index) {
    var $post = $(postTemplate(this));
    // $task.attr('data-index', index);
    $listPosts.append($post)
    console.log("render works")
    // });
  }
  
    //listens to the click for the submit
    $newFormPost.on("submit", function(event) {
      event.preventDefault();

      console.log('post submitted!'); //printing that the submit button was clicked
      console.log($('#postTitle').val() ); //to do list info
      console.log($('#postDesc').val() );
      console.log($('#postImg').val() );
      
      // create new todo object from form data
      var postTitle = $('#postTitle').val();
      var postDesc = $('#postDesc').val();
      var postImg = $('#postImg').val();
      // var toDoData = {title: toDoName, description: toDoDesc, date: toDoDate};
      
      //this is test data pre-loaded to the HTML
      var post1 = new blogPost(postTitle, postDesc, postImg);
      post1.save();
      post1.render();

      // //this is for the to do list items that newly added in
      var $listItems = $("#listOfPosts .post"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
       }) 

      });

});