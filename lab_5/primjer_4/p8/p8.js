let baseUrl='http://localhost:8080/';
$(window).on('load',()=> {
    getUserList();
});

let getUserList=()=> {
    $.get(baseUrl+'students/all' ).then(data=> {
        
    }).then(data=> {
        console.log(data.toJson());
    });
}