var pool = require('./bd');


// para seleccionar todas las novedades

async function getNovedades() {
    var query = 'select * from novedades order by id desc';
    var rows = await pool.query(query);
    return rows;
}

//novedades en order ascendente
async function getNovedadesAsc() {
    var query = 'select * from novedades order by id asc';
    var rows = await pool.query(query);
    return rows;
}

// para agregar las novedades

async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?'
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


// para eliminar novedades
async function deleteNovedadById(obj) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [obj]);
    return rows;
};


// para traer la novedad que quiero actualizar

async function getNovedadById(id) {
    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes,filename, DATE_FORMAT(fechahora, '%W %d %M %Y %H:%i') as fechahora from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
};


// para hacer el update de la novedad

async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {

        throw error;
    }
};



//para imprimir las novedades con la hora adecuada o
async function getNovedadesMX() {
    var query = "SET lc_time_names = 'es_MX'";
    var rows = await pool.query(query);
    return rows;

}


// INICIO PARA ORDENAR LAS NOVEDADES POR ID Y POR FECHA Y HORA
async function getNovedadesFechaHora() {

    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%d %M %Y %H:%i') as fechahora from novedades order by id desc";

    var rows = await pool.query(query);
    return rows;
}

async function getNovedadesFechaHoraIdAsc() {

    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%d %M %Y %H:%i') as fechahora from novedades order by id asc";

    var rows = await pool.query(query);
    return rows;
}

//para imprimir las novedades con la hora adecuada ordenadas por fechahora
async function getNovedadesFechaHoraDesc() {

    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%d %M %Y %H:%i') as fechahora from novedades order by fechahora desc";

    var rows = await pool.query(query);
    return rows;
}

async function getNovedadesFechaHoraAsc() {

    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%d %M %Y %H:%i') as fechahora from novedades order by fechahora asc";

    var rows = await pool.query(query);
    return rows;
}

// FIN PARA ORDENAR LAS NOVEDADES POR ID Y POR FECHA Y HORA

//Para mostrar las novedades en la página novedades del front
async function getNovedadesFechaHoraFront() {

    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%W %d %M %Y %H:%i') as fechahora from novedades order by id desc";

    var rows = await pool.query(query);
    return rows;
}


//buscador
async function buscarNovedades(busqueda) {
    var query = "select id,titulo,autor,cuerpo,etiquetas,imagenes, filename, DATE_FORMAT(fechahora, '%W %d %M %Y %H:%i') as fechahora from novedades where titulo like ? or autor like ? or cuerpo like ? or etiquetas like ? or DATE_FORMAT(fechahora, '%W %d %M %Y %H:%i') like ? order by fechahora desc";
    var rows = await pool.query(query, ['%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%']);
    return rows;
}

module.exports = { getNovedades, getNovedadesAsc, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById, getNovedadesFechaHora, getNovedadesMX, buscarNovedades, getNovedadesFechaHoraAsc, getNovedadesFechaHoraDesc, getNovedadesFechaHoraIdAsc, getNovedadesFechaHoraFront }