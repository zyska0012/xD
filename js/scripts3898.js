

function showLoadingRing(id) {
    $(id).html('<div class="lds-roller"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>');
    $(id).addClass("loading-container");

}

function post(values, panel, errorText, url, onSuccess) {

    var oldHtml = $(panel).html();
    showLoadingRing(panel);
    $(errorText).html("");

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(values),
        success: function (data) {

            $(panel).html(oldHtml);

            if (data.code == 200) {
                onSuccess(data);
            }
            else {
                $(errorText).html(data.error);
            }
        },
        error: function (xhr, status, error) {

            $(panel).html(oldHtml);
            $(errorText).html(error);
        }
    });
}

function get(panel, errorText, url, onSuccess) {

    var oldHtml = $(panel).html();
    showLoadingRing(panel);
    $(errorText).html("");

    $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json",
        success: function (data) {

            $(panel).html(oldHtml);
            console.log(data);
            if (data.code == 200) {
                onSuccess(data);
            }
            else {
                $(errorText).html(data.error);
            }
        },
        error: function (xhr, status, error) {

            $(panel).html(oldHtml);
            $(errorText).html(error);
        }
    });
}

function createAction(inputs, panel, errorText, url, onSuccess, onBeforeSubmit) {

    var values = {};

    for (var i = 0; i < inputs.length; i++) {
        values[inputs[i]] = $("#" + inputs[i]).val();
    }

    var oldHtml = $(panel).html();
    showLoadingRing(panel);
    $(errorText).html("");

    if (onBeforeSubmit != null) {
        values = onBeforeSubmit(values);
    }

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(values),
        success: function (data) {

            $(panel).html(oldHtml);

            if (data.code == 200) {
                onSuccess(data);
            }
            else {
                $(errorText).html(data.error);
            }
        },
        error: function (xhr, status, error) {

            $(panel).html(oldHtml);
            $(errorText).html(error);
        }
    });
}