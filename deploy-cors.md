# Deploy Firebase Storage CORS Configuration

To fix the CORS error, you need to deploy the CORS configuration to your Firebase Storage bucket.

## Option 1: Using Google Cloud Console (Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Navigate to **Cloud Storage** > **Buckets**
4. Click on your storage bucket (e.g., `my-portfolio-eb55d.firebasestorage.app`)
5. Click on the **Configuration** tab
6. Scroll down to **CORS configuration**
7. Click **Edit CORS configuration**
8. Paste the contents from `cors.json`:
```json
[
  {
    "origin": ["http://localhost:3000", "https://growthtechnos.com", "https://www.growthtechnos.com"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Authorization", "Content-Length", "User-Agent", "x-goog-resumable"]
  }
]
```
9. Click **Save**

## Option 2: Using gsutil (Command Line)

If you have `gsutil` installed:

```bash
gsutil cors set cors.json gs://my-portfolio-eb55d.firebasestorage.app
```

Replace `my-portfolio-eb55d.firebasestorage.app` with your actual bucket name.

## Option 3: Using Firebase CLI

```bash
# First, deploy storage rules
firebase deploy --only storage

# Then set CORS using gsutil (requires Google Cloud SDK)
gsutil cors set cors.json gs://YOUR_BUCKET_NAME
```

## Deploy Storage Rules

After setting up CORS, deploy the storage rules:

```bash
firebase deploy --only storage
```

This will deploy the `storage.rules` file which allows image uploads.

## Verify

After deploying, test your image upload again. The CORS error should be resolved.


