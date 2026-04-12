# Google Drive Renders Integration - Setup Guide

This guide will help you set up the Google Drive integration to automatically load render images into your renders modal.

## Quick Setup Overview

There are three methods to integrate Google Drive images, from easiest to most automated:

---

## Method 1: JSON Manifest (⭐ Easiest - No API Needed)

This method requires minimal setup - just a JSON file listing your renders.

### Step 1: Get File IDs from Google Drive

1. Open your Google Drive folder
2. For each render image:
   - Right-click → **Share**
   - Change to **"Anyone with the link can view"**
   - Click **Copy Link**
   - The File ID is in the URL: `https://drive.google.com/file/d/[FILE_ID]/view`

### Step 2: Update renders-manifest.json

Edit the `renders-manifest.json` file in your project root and add your renders:

```json
[
  {
    "id": "YOUR_FILE_ID_HERE",
    "name": "Render Name",
    "thumbnailLink": "https://drive.google.com/uc?id=YOUR_FILE_ID_HERE&export=view",
    "webViewLink": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing",
    "webContentLink": "https://drive.google.com/uc?id=YOUR_FILE_ID_HERE&export=download"
  }
]
```

### Step 3: Done! ✓

The images will automatically load when the renders modal opens. No API keys needed!

---

## Method 2: Using Google Drive API (Full Automation)

This method requires setting up Google API credentials, but fully automates image loading from your entire folder without manual file listing.

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click **NEW PROJECT**
4. Name it (e.g., "Kirka Renders")
5. Click **CREATE**
6. Wait for the project to be created

### Step 2: Enable Google Drive API

1. In the Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Google Drive API"
3. Click on it and press **ENABLE**

### Step 3: Create OAuth 2.0 Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS**
3. Choose **OAuth client ID**
4. If prompted, configure the OAuth consent screen first:
   - Choose **External** as User Type
   - Fill in required fields:
     - App name: "Kirka"
     - User support email: Your email
     - Developer contact: Your email
   - Save and continue
5. Back to credentials, select **OAuth client ID**
6. Choose **Web application**
7. Add authorized redirect URIs:
   - `http://localhost:3000`
   - `https://yourdomain.com`
   - `file:///` (for local testing)
8. Click **CREATE**
9. Copy the **Client ID** (not the secret)

### Step 4: Get API Key

1. In **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS**
3. Choose **API Key**
4. Copy the API Key

### Step 5: Update Configuration in google-drive-renders.js

Open `google-drive-renders.js` and replace:

```javascript
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key
const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // Replace with your Client ID
```

Example:
```javascript
const GOOGLE_API_KEY = 'AIzaSyD_example_key_12345';
const GOOGLE_CLIENT_ID = '123456789-asdf1234.apps.googleusercontent.com';
```

### Step 6: Enable the Integration

Uncomment the initialization in `google-drive-renders.js` or add this to your HTML:

```html
<script>
    document.addEventListener('DOMContentLoaded', () => {
        initializeGoogleDriveRenders();
    });
</script>
```

---

## Method 3: Simple Public Link Method (Direct via Google Drive)

If the Google Drive folder is shared publicly, users can view renders directly on Google Drive.

---

## Troubleshooting

### "Failed to initialize Google API"
- Check that your API Key and Client ID are correct
- Ensure Google Drive API is enabled in Google Cloud Console
- Check your browser console for specific error messages (F12)

### Images not loading
- Verify the Google Drive files are shared with **"Viewer"** access
- Check that file MIME types are image files (jpg, png, gif, webp)
- Ensure API quotas haven't been exceeded in Google Cloud Console

### Permission denied
- Make sure the OAuth Client ID is authorized for your domain
- Check that redirect URIs are correctly configured
- For localhost, ensure it's added to redirect URIs

### Method 1 (JSON) images not showing
- Verify file IDs are correct
- Ensure files are shared to "Anyone with the link"
- Check browser console for CORS errors
- Try using `export=view` in thumbnail URLs

---

## Security Notes

- Never commit your API keys and Client IDs to public repositories
- Use environment variables for production deployments
- The API Key should have restrictions to only Google Drive API
- Consider using a backend proxy for additional security
- When sharing Google Drive files, use "Viewer" role only

---

## Quick Activation

To quickly test if everything is working:

1. Open the browser console (F12)
2. Run: `enableGoogleDriveRenders()`
3. Open the renders modal to see if images load

---

## Additional Resources

- [Google Drive API Docs](https://developers.google.com/drive/api/guides/concepts)
- [OAuth 2.0 for Web Applications](https://developers.google.com/identity/protocols/oauth2)
- [Google Cloud Console](https://console.cloud.google.com/)
