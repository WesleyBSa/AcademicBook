package models

import (
	"time"
)

type Post struct {
	ID        uint       `gorm:"primaryKey"`
	Title     string     `json:"title"`
	Content   string     `json:"content"`
	Course    string     `json:"course"`
	ImageURL  string     `json:"image_url"`
	UserID    uint       `json:"user_id"`
	User      User       `json:"user" gorm:"foreignKey:UserID"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	Comments  []Comment  `json:"comments" gorm:"foreignKey:PostID"`
	Reactions []Reaction `json:"reactions" gorm:"foreignKey:PostID"`
}

type Comment struct {
	ID        uint      `gorm:"primaryKey"`
	Content   string    `json:"content"`
	UserID    uint      `json:"user_id"`
	User      User      `json:"user" gorm:"foreignKey:UserID"`
	PostID    uint      `json:"post_id"`
	CreatedAt time.Time `json:"created_at"`
}

type Reaction struct {
	ID        uint      `gorm:"primaryKey"`
	Type      string    `json:"type"`
	UserID    uint      `json:"user_id"`
	User      User      `json:"user" gorm:"foreignKey:UserID"`
	PostID    uint      `json:"post_id"`
	CreatedAt time.Time `json:"created_at"`
}

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"-"`
}
