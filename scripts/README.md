# Sync
- rsync -avz --exclude=node_modules/ ./ root@206.189.36.175:~/interview

# pm2
- pm2 start server.js
- pm2 list