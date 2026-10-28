# CSC Kitchen menu: Git database + Vercel

The menu lives as files in this repo (`data/menu.json`, `data/settings.json`, photos in `img/`). Every admin change is a Git commit, and Vercel redeploys on each commit (about a minute).

1. Create a GitHub repo and push this folder to it.
2. GitHub > Settings > Developer settings > Fine-grained tokens: create a token for this repo only, with Contents: Read and write.
3. Vercel > Add New > Project > import the repo (Framework: Other, no build command).
4. Vercel > project Settings > Environment Variables. Add these one at a time (Key and Value), then redeploy:
   - GITHUB_TOKEN = your token
   - GITHUB_REPO = yourname/your-repo
   - ADMIN_USER = your username
   - ADMIN_PASS = a strong password
5. Open `your-site.vercel.app/#/admin`, log in, then add your food in Menu and your WhatsApp number in Settings.
