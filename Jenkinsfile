pipeline {
  agent none
  stages {
    stage('Deploy to Development') {
      agent any
        when {
          not {
    anyOf {
      branch comparator: 'GLOB', pattern: 'main*'
      branch comparator: 'GLOB', pattern: 'develop*'
    }
  }
        }
		
		environment {
		  MYSQLCRED = credentials('mysql-dev')
		}
    
      steps {
        sh 'echo "--------------------------------------------------------------------------------------------------\n"'
        sh 'docker build -t vishalpandita/frontend . '
        sh 'docker push vishalpandita/frontend'
        sh 'docker build -t vishalpandita/backend ./app_backend'
        sh 'docker push vishalpandita/backend'
        sh 'sed -i "s;vishalpandita/backend:v1.0.1;vishalpandita/backend:latest;" stack/demo-stack-backend.yml'
		sh 'sed -i "s;{DATABASE_USER};$MYSQLCRED_USR;" stack/demo-stack-backend.yml'
		sh 'sed -i "s;{DATABASE_PASSWORD};$MYSQLCRED_PSW;" stack/demo-stack-backend.yml'
        sh 'sed -i "s;vishalpandita/frontend:v1.0.1;vishalpandita/frontend:latest;" stack/demo-stack.yml'
		sh 'sed -i "s;{MYSQLPASSWD};$MYSQLCRED_PSW;" stack/demo-stack.yml'
        stash(name: 'stackfiles', includes: '**/*yml')
        unstash 'stackfiles'
        sshPublisher(publishers: [sshPublisherDesc(configName: 'clouduser', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'docker stack deploy -c stack/demo-stack.yml demoapp', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*yml'), sshTransfer(cleanRemote: false, excludes: '', execCommand: 'docker stack deploy -c stack/demo-stack-backend.yml demoapp', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
  }
}
