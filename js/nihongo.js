const endpoint_url = 'https://51018005.p-web.click/learnapp/api';

document.addEventListener("DOMContentLoaded", function(){
  getdaftarmember();
});

function getdaftarmember() {
  fetch(endpoint_url + "/member/daftarmember")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_member">
        <thead>
          <tr>
            <th>Nama Depan</th>
            <th>Nama Belakang</th>
            <th>Umur</th>
            <th>Kota</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    $("#dttable").html(tb_header);

    $('#tb_member').DataTable({
      "data": data.member,
      "columns": [
        {"data": "nama_depan"}, {"data": "nama_belakang"},
        {"data": "umur"},
        {"data": "kota"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}
