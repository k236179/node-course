const axios = require('axios');
const fs = require('fs');

fs.readFile('stock.txt','utf-8',(err,stockNO) => {
    if (err){
        console.error('read file error',err);
    }else {
        console.log('read stock no from file:', stockNO);
        
        (async () => {
            try {
                let response = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
                    params:{
                        response: "json",
                        date: "20220301",
                        stockNo: stockNO,
                    },
                });
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        })
        ();
    }
});


