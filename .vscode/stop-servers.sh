#!/bin/bash
# Stop all Mental Coach Chat servers

echo "Stopping backend server..."
pkill -f "uvicorn api.index:app" 2>/dev/null
pkill -f "uv run uvicorn" 2>/dev/null

echo "Stopping frontend server..."
pkill -f "next dev" 2>/dev/null

# Wait a moment for processes to terminate
sleep 1

# Check if anything is still running
BACKEND=$(lsof -ti:8000 2>/dev/null)
FRONTEND=$(lsof -ti:3000 2>/dev/null)

if [ -n "$BACKEND" ]; then
    echo "Force killing processes on port 8000..."
    kill -9 $BACKEND 2>/dev/null
fi

if [ -n "$FRONTEND" ]; then
    echo "Force killing processes on port 3000..."
    kill -9 $FRONTEND 2>/dev/null
fi

echo "All servers stopped!"
