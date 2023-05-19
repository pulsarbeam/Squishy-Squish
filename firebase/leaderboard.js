// Import the Firebase Firestore SDK
import firebase from 'firebase/firestore'

// Initialize Firebase
const app = firebase.initializeApp()

// Get a reference to the leaderboard collection
const leaderboardRef = firebase.firestore().collection('leaderboard')

// Read the data from the leaderboardDAta.json file
const data = require('../server/data/leaderboardData.json')

// Add the data to the leaderboard collection
for (const score of data) {
  leaderboardRef.add({
    name: score.name,
    score: score.score,
  })
}
