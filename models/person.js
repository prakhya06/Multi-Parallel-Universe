module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define('Person', {
        family: DataTypes.INTEGER,
        universe: DataTypes.INTEGER,
        power: DataTypes.INTEGER,
        
    }, {
      indexes: [
        {
          unique: true,
          fields: ['family', 'universe', 'power']
        },{
          unique: false,
          fields: ['family']
        }, {
          unique: false,
          fields: ['universe']
        }, {
          unique: false,
          fields: ['power']
        }]
    });

    return Person;
};
