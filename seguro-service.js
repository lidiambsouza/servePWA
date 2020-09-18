const {SEGUROS} = require('./in-memory-db');

exports.salvarSeguro =(req, res) =>{
    const seguro = req.body;
    SEGUROS.push(seguro);
    console.log('seguro adicionado', seguro)

    res.status(200).json({message: 'add com suscesso!!!'});

}

exports.listarSeguros = (req, res) =>{
    res.status(200).json(SEGUROS);
}