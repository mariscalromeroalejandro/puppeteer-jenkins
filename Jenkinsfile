pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    
    stages {
        stage('Run Smoke Tests') {
            steps {
                script {
                    sh 'npm run smoke-test'
                }
            }
        }
        
        stage('Run E2E Tests') {
            steps {
                script {
                    sh 'npm run e2e-test'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
