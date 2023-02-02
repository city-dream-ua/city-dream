package main

import (
	vercelDeploy "github.com/City-Dream/backend/deploy/vercel"
)

func main() {
	checkErr(vercelDeploy.Do())
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
