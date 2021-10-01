pipeline {
  agent {
    docker {
      image 'python'
    }

  }
  stages {
    stage('Build Python') {
      steps {
        sh 'python -m venv venv'
        sh '. venv1/bin/activate'
        sh 'pip install --upgrade pip && pip install -r app_backend/requirements.txt'
      }
    }

  }
}