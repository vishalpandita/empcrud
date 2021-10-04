pipeline {
  agent none
  stages {
    stage('deploy stack first') {
      agent any
      steps {
 sshagent(credentials : ['d7c68129-2241-40ef-abe7-00c88b05543e']) {
            sh 'ssh -o StrictHostKeyChecking=no cloud_user@dc6671982c1c.mylabserver.com uptime'
            sh 'echo "Ehell"'
            sh 'ls'
      }
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
