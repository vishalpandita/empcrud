pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build -t vishal/aalu.${env.BUILD_NUMBER}'
        stash(name: 'container', excludes: '**/vishal*')
      }
    }

  }
}