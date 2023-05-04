// Callback
function halo(nama)
{
    console.log(`Halo ${nama}`);
}

function tampilkanPesan(callback)
{
    const nama = "Tantowi"
    callback(nama);
}

tampilkanPesan(halo);