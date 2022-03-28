module.exports = (sequelize, dataTypes) => {
    let alias = 'personajes';
    let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
       Imagen: {
        type: dataTypes.STRING,
      
    },
    titulo: {
        type: dataTypes.STRING,
      
    },
    edad: {
        type: dataTypes.INTEGER,
        
    },
    peso:{ type: dataTypes.INTEGER,
    },

    historia: {type: dataTypes.STRING },

    
};
let config = {
    tableName: 'personajes',  
    timestamps: false
}
const personajes = sequelize.define(alias, cols, config); 

personajes.associate = function(models) {
    personajes.belongsToMany(models.Pelicula, {
        as: "pelicula",
        through: "personajes_peliculas",
        foreignKey: "personajes_id",
        otherKey: "pelicula_id",
        timestamps: false
    })
}
return personajes
};