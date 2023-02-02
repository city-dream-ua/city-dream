package vercelDeploy

import (
	"bytes"
	"github.com/City-Dream/backend/config"
	"net/http"
)

var cfg = config.FromEnv()

func Do() error {
	_, err := http.Post(cfg.DeployUrl, "application/json", bytes.NewBuffer(nil))

	return err
}
