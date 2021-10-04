pipeline {
  agent none
  stages {
    stage('Build Docker files') {
      agent any
      steps {
		sh 'export version={$(head -1 empcrud/stack/demo-stack.yml),1,6}'
		sh 'echo $version'
		sh 'docker build -t vishalpandita/frontend . '
		sh 'push vishalpandita/frontend'
		sh 'docker build -t vishalpandita/backend ./app_backend'
		sh 'docker push vishalpandita/backend'
    }
	}

    stage('generate Stack files') {
      agent any
      steps {
        sh 'sed -i "s;vishalpandita/backend:v1.0.1;vishalpandita/backend:latest;" stack/demo-stack-backend.yml'
		sh 'sed -i "s;vishalpandita/frontend:v1.0.1;vishalpandita/frontend:latest;" stack/demo-stack.yml'
      }
    }
    stage('deploy') {
      agent any
      steps {
        sh 'docker run --rm -it ictu/sshpass -p password ssh -o StrictHostKeyChecking=no cloud_user@dc6671982c1c.mylabserver.com "scp scripts/* cloud_user@dc6671982c1c.mylabserver.com:/home/cloud_user"'
		sh 'docker run --rm -it ictu/sshpass -p password ssh -o StrictHostKeyChecking=no cloud_user@dc6671982c1c.mylabserver.com "docker stack deploy -c demo-stack-backend.yml demoapp"'
		sh 'docker run --rm -it ictu/sshpass -p password ssh -o StrictHostKeyChecking=no cloud_user@dc6671982c1c.mylabserver.com "docker stack deploy -c demo-stack.yml demoapp"'
      }
    }

  }

}
