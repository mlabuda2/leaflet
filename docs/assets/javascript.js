//http://stackoverflow.com/questions/1051061/convert-json-array-to-an-html-table-in-jquery

$.getJSON(url , function(data) {
    var tbl_body = "";
    var odd_even = false;
    $.each(data, function() {
        var tbl_row = "";
        $.each(this, function(k , v) {
            tbl_row += "<td>"+v+"</td>";
        })
        tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
        odd_even = !odd_even;
    })
    $("#target_table_id tbody").html(tbl_body);
});
