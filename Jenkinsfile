pipeline {
    agent any

    tools {nodejs "nodejs"}
    
    stages {
        // stage('Install Dependencies') {
        //     steps {
        //             script {
        //                 sh 'npm i'
        //             }
        //     }
        // }
        
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
