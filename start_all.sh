#!/bin/bash
# Script to set up and run backend and frontend for xss.web.app

FRONTEND_HOST_PORT="127.0.0.1:5000"

# Start backend setup and server in a new terminal
gnome-terminal -- bash -c '
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -e.[dev]
# Run dev server
if [ -f venv/bin/activate ]; then
    source venv/bin/activate
fi
echo "Starting backend dev server..."
if command -v uvicorn &> /dev/null; then
    dev
else
    echo "Please start your backend dev server manually."
    bash
fi
'

# Start frontend setup and server in a new terminal
gnome-terminal -- bash -c "
cd frontend
npm install
php -S $FRONTEND_HOST_PORT router.php
"

# Wait for servers to start, then open browser
sleep 5
xdg-open http://$FRONTEND_HOST_PORT &
