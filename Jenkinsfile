pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        node {
          label 'docker'
        }

      }
      steps {
        sh 'docker build -t vishal/aalu .'
        stash(name: 'container', excludes: '**/vishal*')
      }
    }

  }
}