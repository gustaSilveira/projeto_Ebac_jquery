$(document).ready(function() {
    $("#task-form").submit(function(e) {
        e.preventDefault();
        const taskName = $("#task-input").val();
        if (taskName.trim() === "") return;
        $("#task-list").append(`<li>${taskName}</li>`);
        $("#task-input").val("");
    });

    
    $("#task-list").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
