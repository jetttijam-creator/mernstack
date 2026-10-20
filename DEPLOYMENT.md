# Deployment notes

- Host: Render (free web service), service name shopfront-api-jett
- Live API: https://shopfront-api-jett.onrender.com/api/v1
- Health check: /health
- Database: MongoDB Atlas, database shopfront-prod, user shopfront-prod (readWrite on shopfront-prod only)
- Network access: Render outbound addresses only (no 0.0.0.0/0)
- Environment variables set in Render: NODE_ENV, MONGO_URI, JWT_SECRET, REFRESH_TOKEN_SECRET
- Known limits: free instance sleeps after about 15 minutes idle; the disk is temporary, so uploads are lost on deploy
