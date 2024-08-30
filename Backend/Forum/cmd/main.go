package main

import (
	"academicBook/Backend/Forum/routes"
	"academicBook/Backend/Forum/utils"
)

func main() {
	utils.ConnectDatabase()
	router := routes.SetupRouter()
	router.Run(":5443")
}
