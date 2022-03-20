import swal from "sweetalert2";

function send(channel, data) {
    if (process.env.IS_ELECTRON) {
        window.api.send(channel, data);
    } else {
        swal.fire({
            icon: "error",
            text: `Electron çalışmadığı için '${channel}' kanalına veri gönderilemedi !`,
            showConfirmButton: true,
            timer: 10000,
            confirmButtonText: "Tamam",
            confirmButtonAriaLabel: "Tamam",
        });
    }
}

function receive(channel, callback) {
    if (process.env.IS_ELECTRON) {
        window.api.receive(channel, callback);
    } else {
        swal.fire({
            icon: "error",
            text: `Electron çalışmadığı için '${channel}' kanalı dinlenemiyor !`,
            showConfirmButton: true,
            timer: 10000,
            confirmButtonText: "Tamam",
            confirmButtonAriaLabel: "Tamam",
        });
    }
}

export const ApiService = {
    send,
    receive,
};
