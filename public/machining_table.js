//jQuery(document)

// "_id": "5e87764c63e79a85ecf73e49",
// "name": "Steel_3",
// "Material": 685849,
// "cutting_speed": 1,
// "feed_rate": 333,
// "max_strength": 4,
// "feed_rate_density": 333,
// "max_strength_density": 0.00000583218755148728,

$(document).ready(() => {

    //let testi = $("#testi");

    let table = $("#machinings_table").DataTable({
        ajax: {
            type: "GET",
            datatype: "json",
            url: "/api/machinings",
            dataSrc: ""
        },
        rowId: "_id",
        columns: [{
                data: "_id",
                type: "readonly",
                visible: false
            },
            {
                data: "name",
                type: "text",
                required: true
            },
            {
                data: "material",
                type: "float",
                required: true
            },
            {
                data: "cutting_speed",
                type: "float",
                required: true
            },
            {
                data: "feed_rate",
                type: "float",
                required: true
            }
           
        ],
        dom: "Bfrtip",
        select: "single",
        responsive: true,
        altEditor: true,
        buttons: [
            "columnsToggle",
            {
                text: "Create",
                name: "add"
            },
            {
                text: "Edit",
                name: "edit"
            },
            {
                text: "Delete",
                name: "delete"
            },
            {
                text: "Refresh",
                name: "refresh"
            }
        ],
        onAddRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/machining",
                type: "POST",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onDeleteRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/machining/" + rowdata._id,
                type: "DELETE",
                data: rowdata,
                success: success,
                error: error
            });
        },
        onEditRow: (datatable, rowdata, success, error) => {
            $.ajax({
                url: "/api/machining/" + rowdata._id,
                type: "PUT",
                data: rowdata,
                success: success,
                error: error
            });
        }


    });
});