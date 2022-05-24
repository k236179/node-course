const axios = require('axios');
const fs = require('fs/promises');

   
(async () => {
    try{
        let stockNo = await fs.readFile('stock.txt', 'utf-8');
        console.log("read stockNo form file", stockNo);
        let response = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
            params:{
                response:'json',
                date:'20220301',
                stockNo:stockNo,
            },
        });
        console.log(response.data);
    }catch (e){
        console.error(e);
    }
})();

