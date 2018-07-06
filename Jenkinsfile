pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'echo In Build Stage for build ${env.BUILD_ID}'
            }
        }
        stage('Test') {
            steps {
                sh 'echo In Test Stage'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo In Deploy Stage'
            }
        }
    }
    post {
        failure {
            mail to: andrew@jarombek.com, subject: 'Jenkins Pipeline Failed for react-webpack-seed'
        }
        success {
            mail to: andrew@jarombek.com, subject: 'Jenkins Pipeline Successful for react-webpack-seed!'
        }
    }
}