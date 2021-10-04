pipeline {
  agent none
  stages {
    stage('Build Docker files') {
      agent any
      steps {
        sh 'export version={$(head -1 empcrud/stack/demo-stack.yml),1,6}'
        sh 'echo $version'
        sh 'docker build -t vishalpandita/frontend . '
        sh 'docker push vishalpandita/frontend'
        sh 'docker build -t vishalpandita/backend ./app_backend'
        sh 'docker push vishalpandita/backend'
      }
    }

    stage('generate Stack files') {
      agent any
      steps {
        sh 'sed -i "s;vishalpandita/backend:v1.0.1;vishalpandita/backend:latest;" stack/demo-stack-backend.yml'
        sh 'sed -i "s;vishalpandita/frontend:v1.0.1;vishalpandita/frontend:latest;" stack/demo-stack.yml'
        stash(name: 'stackfiles', includes: '**/*yml')
      }
    }

    stage('Transfer stack') {
      agent any
      steps {
        unstash 'stackfiles'
        sshPublisher(publishers: [sshPublisherDesc(configName: 'clouduser', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'docker stack deploy -c stack/demo-stack.yml demoapp', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*yml'), sshTransfer(cleanRemote: false, excludes: '', execCommand: 'docker stack deploy -c stack/demo-stack-backend.yml demoapp', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
        
      }
    }

  }
}
