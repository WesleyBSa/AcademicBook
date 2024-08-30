package utils

import (
	"academicBook/Backend/Forum/models"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("forum.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Falha ao conectar ao banco de dados:", err)
	}

	err = database.AutoMigrate(&models.Post{}, &models.Comment{}, &models.Reaction{}, &models.User{})
	if err != nil {
		log.Fatal("Falha ao migrar os modelos:", err)
	}

	DB = database
}
