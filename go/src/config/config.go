package config

import (
	"sync"

	"github.com/caarlos0/env/v6"
	"github.com/joho/godotenv"
)

type Config struct {
	//DbDSN string `env:"DB_DREAM,required" envDefault:"postgres://postgres:pass@127.0.0.1:5454/city-dream?sslmode=disable&search_path=pg_catalog,public,user_service,dream_service"`
	DbDSN      string `env:"DB_DREAM,required" envDefault:"cityDream.db"`
	AwsProfile string `env:"AWS_PROFILE,required" envDefault:"citydream"`
	ApiBucket  string `env:"API_BUCKET,required" envDefault:"s3://eu-central-1/api.citydream.pp.ua"`
	CfId       string `env:"CF_DISTRIBUTION_ID,required"`
	AppKey     string `env:"TRELLO_APP_KEY,required"`
	Token      string `env:"TRELLO_TOKEN,required"`
	BoardId    string `env:"TRELLO_BOARD_ID,required"`
	DeployUrl  string `env:"VERCEL_DEPLOY_HOOK_URL,required"`
}

var (
	readConfigOnce sync.Once
	cfg            *Config
)

func FromEnv() *Config {
	readConfigOnce.Do(func() {
		godotenv.Load()
		cfg = &Config{}
		if err := env.Parse(cfg); err != nil {
			panic(err)
		}
	})

	return cfg
}
