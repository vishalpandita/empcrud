pipeline {
  agent any
  stages {
    stage('Build Python') {
      steps {
        sh 'cd app_backend'
        sh 'docker build -t vishalpandita/backend  .'
      }
    }

  }
}