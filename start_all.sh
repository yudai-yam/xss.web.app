#!/bin/bash
# Script to set up and run backend and frontend for xss.web.app

# Start backend setup and server in a new terminal
gnome-terminal -- bash -c '
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -e.[dev]
# Run dev server (replace with actual command if different)
if [ -f venv/bin/activate ]; then
    source venv/bin/activate
fi
# Try common dev server commands
echo "Starting backend dev server..."
if command -v uvicorn &> /dev/null; then
    uvicorn xss_lab.main:app --reload
else
    echo "Please start your backend dev server manually."
    bash
fi
'

# Start frontend setup and server in a new terminal
gnome-terminal -- bash -c '
cd frontend
npm install
php -S 127.0.0.1:5000 router.php
'
