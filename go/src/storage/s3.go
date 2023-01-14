package storage

import (
	"bytes"
	"strings"

	"github.com/City-Dream/backend/config"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type s3 struct {
	sess       *session.Session
	bucketName string
}

func NewS3() *s3 {
	cfg := config.FromEnv()
	parts := strings.Split(cfg.ApiBucket, "s3://")
	if len(parts) != 2 {
		panic("Api bucket must be in format s3://[region]/[bucket]")
	}
	parts = strings.Split(parts[1], "/")
	if len(parts) != 2 {
		panic("Api bucket must be in format s3://[region]/[bucket]")
	}

	sess, err := session.NewSessionWithOptions(session.Options{
		Profile: cfg.AwsProfile,
		Config: aws.Config{
			Region: aws.String(parts[0]),
		},
	})
	if err != nil {
		panic(err)
	}
	return &s3{sess: sess, bucketName: parts[1]}
}

func (s s3) Save(path string, content []byte, isPublic bool) error {
	var acl *string
	if isPublic {
		acl = aws.String("public-read")
	}
	uploader := s3manager.NewUploader(s.sess)
	_, err := uploader.Upload(&s3manager.UploadInput{
		Bucket: aws.String(s.bucketName),
		Key:    aws.String(path),
		Body:   bytes.NewBuffer(content),
		ACL:    acl,
	})

	return err
}
