const okToSync = process.env.NODE_ENV === "production" ? false : true;
sequelize.sync({ force: okToSync }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});