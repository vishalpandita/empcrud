pipeline {
  agent any
  stages {
    stage('Build Python') {
      steps {
        sh 'docker build -t vishalpandita/backend -f  app_backend/Dockerfile .'
      }
    }

  }
}