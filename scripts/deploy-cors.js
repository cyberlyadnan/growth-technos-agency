/**
 * Script to deploy CORS configuration to Firebase Storage
 * 
 * Usage:
 * 1. Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install
 * 2. Run: node scripts/deploy-cors.js
 * 
 * Or use the manual method in deploy-cors.md
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read bucket name from environment or firebase config
const bucketName = process.env.FIREBASE_STORAGE_BUCKET || 'my-portfolio-eb55d.firebasestorage.app';
const corsFile = path.join(__dirname, '..', 'cors.json');

console.log('🚀 Deploying CORS configuration to Firebase Storage...');
console.log(`📦 Bucket: ${bucketName}`);
console.log(`📄 CORS file: ${corsFile}`);

try {
  // Check if cors.json exists
  if (!fs.existsSync(corsFile)) {
    console.error('❌ cors.json not found!');
    process.exit(1);
  }

  // Check if gsutil is available
  try {
    execSync('gsutil --version', { stdio: 'ignore' });
  } catch (error) {
    console.error('❌ gsutil not found!');
    console.error('Please install Google Cloud SDK: https://cloud.google.com/sdk/docs/install');
    console.error('\nAlternatively, use the manual method described in deploy-cors.md');
    process.exit(1);
  }

  // Deploy CORS configuration
  console.log('\n📤 Uploading CORS configuration...');
  execSync(`gsutil cors set ${corsFile} gs://${bucketName}`, { stdio: 'inherit' });
  
  console.log('\n✅ CORS configuration deployed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Deploy storage rules: firebase deploy --only storage');
  console.log('2. Test your image upload');
  
} catch (error) {
  console.error('❌ Error deploying CORS configuration:', error.message);
  console.error('\n💡 Try the manual method described in deploy-cors.md');
  process.exit(1);
}


