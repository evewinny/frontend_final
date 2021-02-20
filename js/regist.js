$('#tombol').click(function (e) {
  e.preventDefault();
  var nama_d = $('#nama_d').val();
  var nama_b = $('#nama_b').val();
  var umur = $('#umur').val();
  var kota = $('#kota').val();
  var email = $('#email').val();
  var password = $('#password').val();

  $.ajax({
    url:'https://51018005.p-web.click/learnapp/member/register',
    method:'POST',
    data:{
      'nama_d': nama_d,
      'nama_b': nama_b,
      'umur': umur,
      'kota': kota,
      'email': email,
      'password': password
    },
    dataType:'json',
      success: function (e) {
      console.log(e);
      window.location="https://51018005.p-web.click/nihongo/login.html";
    },
    error: function (e) {
      console.log(e);
    }
  });
});
