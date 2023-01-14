package main

import "github.com/City-Dream/backend/api/router"

const localPort = ":8980"

func main() {
	r := router.New()
	r.Run(localPort)
}
