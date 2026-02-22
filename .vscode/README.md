# VSCode Launch Configuration

This directory contains VSCode configurations for running the Mental Coach Chat application.

## Quick Start - Press F5

Simply press **F5** (or Run > Start Debugging) to:
1. Start the FastAPI backend on port 8000
2. Start the Next.js frontend on port 3000
3. Automatically open http://localhost:3000 in your browser

## What Happens

When you press F5, VSCode will:
1. Run the "Start Backend" task (FastAPI with uvicorn)
2. Wait for the backend to be ready
3. Start the frontend dev server
4. Open your default browser to the application

## Available Tasks

You can also run tasks individually via **Terminal > Run Task**:

- **Start Backend** - Starts FastAPI backend on port 8000
- **Start Frontend** - Starts Next.js frontend on port 3000
- **Start All Servers** - Starts both backend and frontend
- **Stop All Servers** - Cleanly stops all running servers

## Stopping the Application

### Best Method: Press Shift+F5

Simply press **Shift+F5** (or Run > Stop). The debugger will automatically run the cleanup script to stop all servers.

### Alternative Methods

**Run the Stop task manually:**
1. Open Command Palette (**Ctrl+Shift+P** or **Cmd+Shift+P**)
2. Type "Tasks: Run Task"
3. Select "Stop All Servers"

**Or run from terminal:**
```bash
./.vscode/stop-servers.sh
```

### How It Works

When you press Shift+F5, VSCode now automatically runs the **Stop All Servers** task as a post-debug action. This ensures all background processes are properly terminated.

## Requirements

- AWS Profile `ai` must be configured and logged in
- Node.js and npm must be installed
- Python dependencies installed via `uv sync`

## Troubleshooting

### Backend fails to start
- Ensure you're logged into AWS: `aws sso login --profile ai`
- Check that port 8000 is not already in use

### Frontend fails to start
- Make sure `npm install` was run in the `frontend/` directory
- Check that port 3000 is not already in use

### Servers still running after stopping
- Run the **Stop All Servers** task
- Or manually: `./.vscode/stop-servers.sh`
- Or kill specific ports: `lsof -ti:8000 | xargs kill -9` (backend) or `lsof -ti:3000 | xargs kill -9` (frontend)

### Browser doesn't open automatically
- Manually navigate to http://localhost:3000
- Check the "serverReadyAction" pattern in launch.json if needed

## Configuration Files

- **launch.json** - Main launch configuration for F5 debugging
- **tasks.json** - Task definitions for starting/stopping servers
- **stop-servers.sh** - Helper script to cleanly stop all running servers
