pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run smoke test') {
            steps {
                sh 'npm run test-smoke'
            }
        }
    }
}
