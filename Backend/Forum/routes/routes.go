package routes

import (
	"academicBook/Backend/Forum/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	forum := router.Group("/forum")
	{
		forum.POST("/posts", controllers.CreatePost)
		forum.GET("/posts", controllers.GetPosts)                      // Corrigido para chamar GetPosts
		forum.GET("/posts/:id", controllers.GetPostByID)               // Assegure-se de que esta função esteja definida
		forum.POST("/posts/:id/comments", controllers.CreateComment)   // Assegure-se de que esta função esteja definida
		forum.POST("/posts/:id/reactions", controllers.CreateReaction) // Assegure-se de que esta função esteja definida
	}

	return router
}
