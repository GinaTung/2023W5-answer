ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );
$(function() {
  $('.admin-reply').click(function () {
    $('.card-admin').addClass('d-none');
    $(('.admin-btn')).addClass('d-none');
    $(('.chevron')).hide();
    $(('.admin-collapse')).show();

  })
  $('.edit-cancel').click(function () {
    $('.card-admin').removeClass('d-none');
    $(('.admin-btn')).removeClass('d-none');
    $(('.admin-collapse')).hide();
    $(('.chevron')).show();
  })
});