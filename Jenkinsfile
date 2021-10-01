pipeline {
  agent none
  stages {
    stage('deploy stack first') {
      agent any
      steps {
        sh 'good'
      }
    }

    stage('Build') {
      agent {
        docker {
          image 'gcr.io/google_appengine/python'
        }

      }
      steps {
        sh 'virtualenv -p python3 /env'
        sh 'export PATH=/env/bin:$PATH'
        sh '/env/bin/pip install --upgrade pip && /env/bin/pip install -r app_backend/requirements.txt'
      }
    }

  }
}