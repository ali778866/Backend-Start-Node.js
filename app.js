const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const constactUs = require('./routes/contactus')
const successRt = require('./routes/success')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(constactUs);
app.use(successRt)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
})

app.listen(4000);