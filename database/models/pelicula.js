module.exports = (sequelize, dataTypes) => {
    let alias = 'Pelicula';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        imagen:{type: dataTypes.STRING(300),

        },
        titulo: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        
        
        fecha_creacion: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
       
        id_generos:{
           type: dataTypes.INTEGER
        } 
    };
    let config = {
        tableName:'pelicula',
        timestamps: false
       
    }
    const Pelicula = sequelize.define(alias,cols,config);

    Pelicula.associate = function (models) {
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "id_generos"
        })

        Pelicula.belongsToMany(models.personajes, { 
            as: "Personajes",
            through: 'personajes_peliculas',
            foreignKey: 'pelicula_id',
            otherKey: 'personajes_id',
            timestamps: false
        })
    }

    return Pelicula
};