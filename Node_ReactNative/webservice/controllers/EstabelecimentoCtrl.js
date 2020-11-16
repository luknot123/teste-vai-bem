const AUTH = require('../services/Auth');
const request = require('request');

class EstabelecimentoCtrl {
    constructor(app,pool) {
        app.post('/estabelecimento/cadastrar',AUTH.verifyJWT, async (req, res)=>{
            let data = req.body;
            let latLng = await this.addressToLatLng(data.endereco+", "+data.bairro+", "+data.cidade);
            data.lat = latLng.lat;
            data.lng = latLng.lng;
            let result = await this.cadastrar(data,pool);
            res.json(result);
        });

        app.post('/estabelecimento/buscar',AUTH.verifyJWT, async (req, res)=>{
            let latLng = await this.addressToLatLng(req.body.endereco);
            let listEstab = await this.buscar(pool);
            let listDist=[];
            listEstab.data.forEach(element => {
                let distance = this.calcCrow(element.lat,element.lng,latLng.lat,latLng.lng);
                if(distance<2){
                    listDist.push(element);
                }
            });
            res.json(listDist);
        });

        app.put('/estabelecimento/atualizar',AUTH.verifyJWT, async (req, res)=>{
            let data = req.body;
            let obj = await this.updateEstabelecimento(data,pool);
            res.json(obj);
        });

        app.delete('/estabelecimento/remover',AUTH.verifyJWT, async (req, res)=>{
            let id = req.query.id;
            console.log(id);
            let obj = await this.deleteEstabelecimento(id,pool);
            res.json(obj);
        });
    }

    async addressToLatLng(address){
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyBnFYX4Kp8mSXXvR0-JUYqEJUgB_FcYkSc";
        return await new Promise(async (resolve, reject) => {
            request.get({
                url: encodeURI(url),
                method:"GET",
                headers:{
                }
                
              },
              (error, response, body)=>{
                if(!error){
                    let data = JSON.parse(body);
                    resolve(data.results[0].geometry.location);
                }
              });
        });
    }

    async cadastrar(data,pool){
        const text = 'INSERT INTO estabelecimento(nome,descricao,endereco,bairro,cidade,telefone,lat,lng) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        const values = [data.nome,data.descricao,data.endereco,data.bairro,data.cidade,data.telefone,data.lat,data.lng];
        return await new Promise(async (resolve, reject) => {
            pool.connect().then(client => {
                return client
                .query(text, values)
                .then(result => {
                    resolve({
                        success:true,
                        data:result.rows
                    });
                    client.release();
                    // console.log(res.rows)
                }).catch(err => {
                    resolve({
                        success:false
                    });
                    client.release();
                    console.log(err.stack);
                })
            });
        });
    }

    async buscar(pool){
        const text = 'SELECT * FROM estabelecimento';
        return await new Promise(async (resolve, reject) => {
            pool.connect().then(client => {
                return client
                .query(text)
                .then(result => {
                    resolve({
                        success:true,
                        data:result.rows
                    });
                    client.release();
                    // console.log(res.rows)
                }).catch(err => {
                    resolve({
                        success:false
                    });
                    client.release();
                    console.log(err.stack);
                })
            });
        });
    }

    async getEstabelecimento(id,pool){
        const text = 'SELECT * FROM estabelecimento where id = $1';
        const values = [id];
        return await new Promise(async (resolve, reject) => {
            pool.connect().then(client => {
                return client
                .query(text,values)
                .then(result => {
                    resolve({
                        success:true,
                        data:result.rows
                    });
                    client.release();
                    // console.log(res.rows)
                }).catch(err => {
                    resolve({
                        success:false
                    });
                    client.release();
                    console.log(err.stack);
                })
            });
        });
    }

    async updateEstabelecimento(data,pool){
        const text = 'UPDATE estabelecimento SET nome=$1,descricao=$2,endereco=$3,bairro=$4,cidade=$5,telefone=$6,lat=$7,lng=$8 WHERE id=$9 RETURNING *';
        const values = [data.nome,data.descricao,data.endereco,data.bairro,data.cidade,data.telefone,data.lat,data.lng,data.id];
        return await new Promise(async (resolve, reject) => {
            pool.connect().then(client => {
                return client
                .query(text, values)
                .then(result => {
                    resolve({
                        success:true,
                        data:result.rows
                    });
                    client.release();
                    // console.log(res.rows)
                }).catch(err => {
                    resolve({
                        success:false
                    });
                    client.release();
                    console.log(err.stack);
                })
            });
        });
    }

    async deleteEstabelecimento(id,pool){
        const text = 'DELETE FROM estabelecimento where id = $1';
        const values = [id];
        return await new Promise(async (resolve, reject) => {
            pool.connect().then(client => {
                return client
                .query(text,values)
                .then(result => {
                    resolve({
                        success:true,
                        data:result.rows
                    });
                    client.release();
                    // console.log(res.rows)
                }).catch(err => {
                    resolve({
                        success:false
                    });
                    client.release();
                    console.log(err.stack);
                })
            });
        });
    }

    calcCrow(lat1, lon1, lat2, lon2){
      var R = 6371; // em KM
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      var lat1 = this.toRad(lat1);
      var lat2 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    toRad(Value){
        return Value * Math.PI / 180;
    }
   
  }
  
  module.exports = EstabelecimentoCtrl;