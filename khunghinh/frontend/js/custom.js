function btnDeleteClick(ob,id){
    $("#modalAction").click(function(){
        $("form#"+id).submit();
    });
    var dataName = $(ob).attr('data-name');
    $('.modal-body').html('Xác nhận xoá <b>' + dataName + '</b> ?');
    $("#myModal").modal();
    return false;
}
$('.btn_fb').on('click',function () {
    $.blockUI({message: ''});
})
$(".btn-share-social").on('click',function () {
    $.blockUI({message: ''});
})
function onShareFBClick(obj){
    console.log('onShareFBClick');
    
}
function showError(message){
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error'
    })
}
$(document).ready(function() {

});
